import { useState } from "react";
import { assets, projects, experience, recommendations, OPEN_SOURCE, t } from "../../data/site-data.js";
import { SiteHeader, SiteFooter, Contours } from "../layout.jsx";
import { ProjectRow, ProjectModal } from "../cards.jsx";

const STACK = [
  ["stack_backend", ["Python", "FastAPI", "Django", "REST", "Node.js"]],
  ["stack_ai", ["LLMs e RAG", "LangChain", "MCP", "scikit-learn", "TensorFlow", "PyTorch", "spaCy", "OpenCV"]],
  ["stack_data", ["PostgreSQL", "Oracle", "pandas", "NumPy"]],
  ["stack_infra", ["Docker", "Git", "GitLab CI", "Linux"]],
  ["stack_front", ["React", "JavaScript", "Vue"]]
];

export function PortfolioPage({ lang, setLang, dark, setDark }) {
  const [open, setOpen] = useState(null);
  const links = ["about", "projects", "opensource", "experience", "contact"].map((id) => ({ id, label: t(lang, `nav_${id}`) }));

  return (
    <>
      <a className="skip-link" href="#main">Pular para o conteúdo</a>
      <SiteHeader lang={lang} setLang={setLang} dark={dark} setDark={setDark} links={links} />

      <section className="hero">
        <Contours />
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-role">{t(lang, "hero_role")}</p>
            <h1>Matheus Silvano</h1>
            <p className="hero-pitch">{t(lang, "hero_pitch")}</p>
            <div className="actions">
              <a href={lang === "en" || lang === "es" ? assets.cvEn : assets.cvPt} download className="btn btn-primary">{t(lang, "cv_button")}</a>
              <a href="https://github.com/matheussilvano" target="_blank" rel="noopener" className="btn">GitHub</a>
              <a href="https://www.linkedin.com/in/matheussilvano/" target="_blank" rel="noopener" className="btn">LinkedIn</a>
            </div>
          </div>
          <img className="hero-photo" src={assets.profile} alt="Matheus Silvano falando ao microfone em um evento" width="320" height="320" />
        </div>
      </section>

      <main id="main">
        <section id="about" className="section">
          <h2>{t(lang, "about_title")}</h2>
          <div className="about-grid">
            <div className="prose">
              <p>{t(lang, "about_p1")}</p>
              <p>{t(lang, "about_p2")}</p>
              <p><a className="text-link" href="cursos.html">{t(lang, "courses_button")}</a></p>
            </div>
            <dl className="stack">
              {STACK.map(([key, items]) => (
                <div key={key}>
                  <dt>{t(lang, key)}</dt>
                  <dd>{items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>{t(lang, "projects_title")}</h2>
          <p className="section-hint">{t(lang, "featured_hint")}</p>
          <ul className="project-list">
            {projects.featured.map((p) => {
              const details = projects.all.find((x) => x.title === p.title) || p;
              return <ProjectRow key={p.title} lang={lang} large project={{ ...details, ...p, stack: details.stack }} onOpen={() => setOpen(details)} />;
            })}
          </ul>
          <p><a className="text-link" href="all-projects.html">{t(lang, "view_all_projects")}</a></p>
        </section>

        <section id="opensource" className="section">
          <h2>{t(lang, "os_title")}</h2>
          <p className="section-hint">{t(lang, "os_intro")}</p>
          <ul className="os-list">
            {OPEN_SOURCE.map((o) => (
              <li key={o.name}>
                <a href={o.url} target="_blank" rel="noopener">
                  <span className="os-name">{o.name}</span>
                  <span className="os-text">{t(lang, o.key)}</span>
                  <span className="os-count">{o.count} {t(lang, o.count === 1 ? "os_pr" : "os_prs")}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className="section">
          <h2>{t(lang, "experience_title")}</h2>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.title}>
                <p className="when">{e.date}</p>
                <div>
                  <h3>{e.title}</h3>
                  <ul>{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="recommendations" className="section">
          <h2>{t(lang, "recommendations_title")}</h2>
          <div className="quotes">
            {recommendations.map((r) => {
              const paragraphs = r.text.split("\n\n");
              const long = r.text.length > 520;
              return (
                <figure key={r.name} className="quote">
                  <blockquote>
                    {long ? (
                      <details>
                        <summary>{r.text.slice(0, 260).trim()}… <span>{t(lang, "read_more")}</span></summary>
                        {paragraphs.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
                      </details>
                    ) : <p>{r.text}</p>}
                  </blockquote>
                  <figcaption>
                    <img src={r.image} alt="" loading="lazy" width="44" height="44" />
                    <span><strong>{r.name}</strong><br />{r.role}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
          <p><a className="text-link" href="https://www.linkedin.com/in/matheussilvano/" target="_blank" rel="noopener">{t(lang, "rec_source")}</a></p>
        </section>

        <section id="contact" className="section contact">
          <h2>{t(lang, "contact_title")}</h2>
          <p className="section-hint">{t(lang, "contact_intro")}</p>
          <a className="big-link" href="mailto:matheussilvano2005@gmail.com">matheussilvano2005@gmail.com</a>
          <ul className="contact-links">
            <li><a href="https://wa.me/5548998584035" target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href="https://www.linkedin.com/in/matheussilvano/" target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a href="https://github.com/matheussilvano" target="_blank" rel="noopener">GitHub</a></li>
          </ul>
        </section>
      </main>

      <SiteFooter lang={lang} />
      <ProjectModal lang={lang} project={open} onClose={() => setOpen(null)} />
    </>
  );
}
