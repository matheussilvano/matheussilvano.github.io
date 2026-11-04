import { useState } from "react";
import { projects, t } from "../../data/site-data.js";
import { SiteHeader, SiteFooter } from "../layout.jsx";
import { ProjectRow, ProjectModal } from "../cards.jsx";

export function AllProjectsPage({ lang, setLang, dark, setDark }) {
  const [feed, setFeed] = useState("ai");
  const [open, setOpen] = useState(null);
  const feeds = [
    { id: "ai", label: t(lang, "feed_ai"), items: projects.ai },
    { id: "other", label: t(lang, "feed_other"), items: [...projects.backend, ...projects.tools] }
  ];
  const current = feeds.find((f) => f.id === feed);
  return (
    <>
      <SiteHeader lang={lang} setLang={setLang} dark={dark} setDark={setDark} />
      <main id="main" className="page">
        <a className="text-link back" href="./">{t(lang, "back_home")}</a>
        <h1>{t(lang, "all_projects_title")}</h1>
        <p className="section-hint">{t(lang, "all_projects_subtitle")}</p>
        <div className="tabs" role="group">
          {feeds.map((f) => <button key={f.id} type="button" aria-pressed={feed === f.id} onClick={() => setFeed(f.id)}>{f.label}</button>)}
        </div>
        <ul className="project-list">
          {current.items.map((p) => <ProjectRow key={`${feed}-${p.title}`} lang={lang} project={p} onOpen={setOpen} />)}
        </ul>
      </main>
      <SiteFooter lang={lang} />
      <ProjectModal lang={lang} project={open} onClose={() => setOpen(null)} />
    </>
  );
}
