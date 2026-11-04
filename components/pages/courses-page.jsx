import { useMemo, useState } from "react";
import { certBadges, courseSections, t } from "../../data/site-data.js";
import { SiteHeader, SiteFooter } from "../layout.jsx";
import { CourseRow } from "../cards.jsx";

const RADAR = [
  ["radar_proficient", ["Python, FastAPI, Docker", "Git, GitLab CI, GitHub", "PostgreSQL, Oracle, SQL", "LLMs aplicados"]],
  ["radar_learning", ["Agentes de IA e LangChain", "n8n e automações", "MLOps prático"]],
  ["radar_on_radar", ["Pipelines ponta a ponta", "Kubernetes avançado", "Observabilidade de modelos"]]
];

export function CoursesPage({ lang, setLang, dark, setDark }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courseSections;
    return courseSections
      .map((s) => ({ ...s, items: s.items.filter((i) => `${i.title} ${i.institution} ${i.year}`.toLowerCase().includes(q)) }))
      .filter((s) => s.items.length);
  }, [query]);

  return (
    <>
      <SiteHeader lang={lang} setLang={setLang} dark={dark} setDark={setDark} />
      <main id="main" className="page">
        <a className="text-link back" href="./">{t(lang, "back_home")}</a>
        <h1>{t(lang, "courses_title")}</h1>
        <p className="section-hint">{t(lang, "courses_subtitle")}</p>

        <div className="radar">
          {RADAR.map(([key, items]) => (
            <div key={key}><h2>{t(lang, key)}</h2><ul>{items.map((i) => <li key={i}>{i}</li>)}</ul></div>
          ))}
        </div>

        <h2 className="sub">{t(lang, "cert_title")}</h2>
        <p className="section-hint">{t(lang, "cert_desc")}</p>
        <ul className="badges">
          {certBadges.map((b) => (
            <li key={b.title}>
              <img src={b.image} alt="" width="96" height="96" />
              <div>
                <h3>{b.title}</h3>
                <p>{b.institution}. {t(lang, "focus_label")}: {b.focus}</p>
                <a className="btn" href={b.link} target="_blank" rel="noopener">{t(lang, "validate_cert")}<span className="sr-only">: {b.title}</span></a>
              </div>
            </li>
          ))}
        </ul>

        <div className="search">
          <label htmlFor="course-search">{t(lang, "courses_search_label")}</label>
          <input id="course-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t(lang, "courses_search_placeholder")} autoComplete="off" />
        </div>
        {filtered.length === 0 ? <p className="empty" role="status">{t(lang, "courses_search_empty")}</p> : null}
        {filtered.map((s) => (
          <section key={s.key} className="course-group">
            <h2 className="sub">{s.key}</h2>
            <ul className="course-list">{s.items.map((i) => <CourseRow key={i.title} lang={lang} item={i} />)}</ul>
          </section>
        ))}
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
