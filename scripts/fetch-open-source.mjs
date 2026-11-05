// Builds data/open-source.json: public repos owned by other people where the user has a merged PR.
// Runs in CI before every build (and daily), so the list updates by itself.
import { writeFileSync, existsSync } from "node:fs";

const USER = "matheussilvano";
// Repos from jobs, clients or teammates' hackathon projects are not open source contributions; add owners here to hide them.
const EXCLUDED_OWNERS = new Set([USER.toLowerCase(), "smart-pricing-br", "all-vet", "carmosnp", "eduoliveirachaves"]);
const OUT = new URL("../data/open-source.json", import.meta.url);
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "portfolio-open-source",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  });
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  return res.json();
}

try {
  const merged = new Map(); // repo full name -> latest merge time
  for (let page = 1; page <= 5; page++) {
    const q = encodeURIComponent(`author:${USER} type:pr is:merged is:public`);
    const { items } = await gh(`/search/issues?q=${q}&sort=updated&per_page=100&page=${page}`);
    for (const pr of items) {
      const repo = pr.repository_url.replace("https://api.github.com/repos/", "");
      if (EXCLUDED_OWNERS.has(repo.split("/")[0].toLowerCase())) continue;
      const when = pr.pull_request?.merged_at || pr.closed_at || "";
      if (!merged.has(repo) || when > merged.get(repo)) merged.set(repo, when);
    }
    if (items.length < 100) break;
  }

  const projects = [];
  for (const [repo, when] of merged) {
    const info = await gh(`/repos/${repo}`);
    if (info.private || info.archived) continue;
    const description = (info.description || "").replace(/\s+/g, " ").trim();
    projects.push({
      repo: info.full_name,
      url: info.html_url,
      description: description.length > 150 ? `${description.slice(0, 147).trimEnd()}...` : description,
      owner: info.owner.login,
      avatar: info.owner.avatar_url,
      language: info.language || "",
      stars: info.stargazers_count,
      lastMerged: when
    });
  }
  projects.sort((a, b) => b.lastMerged.localeCompare(a.lastMerged));
  writeFileSync(OUT, JSON.stringify(projects, null, 2) + "\n");
  console.log(`open-source.json: ${projects.length} projects`);
} catch (err) {
  if (existsSync(OUT)) {
    console.warn(`Could not refresh open source list (${err.message}); keeping the committed one.`);
  } else {
    throw err;
  }
}
