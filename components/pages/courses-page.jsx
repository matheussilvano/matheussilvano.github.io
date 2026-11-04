import { Fragment, useMemo, useState } from "react";
import { ASSETS, CERT_BADGES, COURSE_SECTIONS, t } from "../../data/site-data.js";
import { useReveal } from "../../hooks/use-reveal.js";
import { useCardTilt } from "../../hooks/use-card-tilt.js";
import { Controls, Footer, ScrollArrow } from "../layout.jsx";
import { CourseCard } from "../cards.jsx";

  export function CoursesPage({ lang, setLang, dark, setDark }) {
    useReveal();
    useCardTilt();
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
      const q = query.trim().toLowerCase();
      if (!q) return COURSE_SECTIONS;
      return COURSE_SECTIONS.map((section) => ({
        ...section,
        items: section.items.filter((item) => `${item.title} ${item.institution} ${item.year}`.toLowerCase().includes(q))
      })).filter((section) => section.items.length > 0);
    }, [query]);

    return (
      <>
        <header className="hero">
          <Controls lang={lang} setLang={setLang} dark={dark} setDark={setDark} />
          <div className="hero-content">
            <h1 className="hero-title">{t(lang, "courses_page_title")}</h1>
            <p className="hero-subtitle">{t(lang, "courses_page_subtitle")}</p>
            <div className="hero-buttons">
              <a href="index.html" className="btn btn-secondary">{t(lang, "back_to_portfolio_button")}</a>
              <a href={lang === "en" ? ASSETS.cvEn : ASSETS.cvPt} download className="btn btn-primary">{t(lang, "download_cv_button")}</a>
            </div>
          </div>
          <ScrollArrow href="#courses" label={t(lang, "courses_main_title")} prompt={t(lang, "next_section_label")} />
        </header>

        <main>
          <div className="container">
            <section className="tech-radar section">
              <h2 className="section-title">{t(lang, "radar_title")}</h2>
              <div className="radar-grid">
                <div className="radar-card"><h3>{t(lang, "radar_proficient")}</h3><ul><li>Python, FastAPI, Docker</li><li>Git, GitLab CI, GitHub</li><li>PostgreSQL, Oracle, SQL</li><li>LLMs aplicados</li></ul></div>
                <div className="radar-card"><h3>{t(lang, "radar_learning")}</h3><ul><li>Agentes de IA e LangChain</li><li>n8n e automações</li><li>MLOps prático</li></ul></div>
                <div className="radar-card"><h3>{t(lang, "radar_on_radar")}</h3><ul><li>Pipelines ponta a ponta</li><li>Kubernetes avançado</li><li>Observabilidade de modelos</li></ul></div>
              </div>
            </section>

            <section id="courses" className="section">
              <h2 className="section-title">{t(lang, "courses_main_title")}</h2>
              <div className="cert-featured">
                <div className="cert-featured-header">
                  <p className="badge-label">{t(lang, "cert_featured_label")}</p>
                  <h3>{t(lang, "cert_featured_title")}</h3>
                  <p>{t(lang, "cert_featured_desc")}</p>
                </div>
                <div className="cert-featured-grid">
                  {CERT_BADGES.map((badge) => (
                    <div className="card cert-card reveal" key={badge.title}>
                      <div className="cert-badge-image"><img src={badge.image} alt={badge.title} /></div>
                      <div className="card-content">
                        <h3 className="card-title">{badge.title}</h3>
                        <p><strong>{t(lang, "institution_label")}:</strong> {badge.institution}</p>
                        <p><strong>Foco:</strong> {badge.focus}</p>
                        <div className="card-actions"><a href={badge.link} target="_blank" rel="noopener" className="btn btn-primary">{t(lang, "validate_cert_button")}</a></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 2.5rem" }}>{t(lang, "courses_intro")}</p>

              <div className="courses-search">
                <label className="sr-text" htmlFor="courseSearchInput">{t(lang, "courses_search_label")}</label>
                <div className="courses-search-box"><i className="fa fa-search" aria-hidden="true"></i><input id="courseSearchInput" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t(lang, "courses_search_placeholder")} autoComplete="off" /></div>
                {filtered.length === 0 ? <p className="courses-search-empty">{t(lang, "courses_search_empty")}</p> : null}
              </div>

              {filtered.map((section) => (
                <Fragment key={section.key}>
                  <h3 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "1.5rem", marginTop: "3rem" }}>{section.key}</h3>
                  <div className="project-grid course-panel">{section.items.map((item) => <CourseCard key={`${section.key}-${item.title}`} lang={lang} item={item} />)}</div>
                </Fragment>
              ))}
            </section>
          </div>
        </main>

        <Footer lang={lang} />
      </>
    );
  }
