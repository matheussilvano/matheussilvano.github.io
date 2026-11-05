import { useEffect, useState } from "react";
import { ASSETS, TECH_ICONS, PROJECTS, EXPERIENCE, RECOMMENDATIONS, t } from "../../data/site-data.js";
import { useReveal } from "../../hooks/use-reveal.js";
import { useCardTilt } from "../../hooks/use-card-tilt.js";
import { Controls, Footer, ScrollArrow } from "../layout.jsx";
import openSource from "../../data/open-source.json";
import { ProjectDetailsModal } from "../cards.jsx";
  const LANG_COLORS = { Rust: "#dea584", Python: "#3572a5", JavaScript: "#f1e05a", TypeScript: "#3178c6", Go: "#00add8", Java: "#b07219", "C++": "#f34b7d", C: "#555555", Ruby: "#701516", Shell: "#89e051", HTML: "#e34c26", CSS: "#563d7c" };
  const TECH_HIGHLIGHTS = [
    "PostgreSQL",
    "Scikit-learn",
    "TensorFlow",
    "LangChain",
    "machine learning",
    "deep learning",
    "processamento de linguagem natural",
    "natural language processing",
    "procesamiento de lenguaje natural",
    "visão computacional",
    "computer vision",
    "visión por computador",
    "FastAPI",
    "Django",
    "Python",
    "Docker",
    "PyTorch",
    "OpenCV",
    "pandas",
    "NumPy",
    "spaCy",
    "DevOps",
    "Oracle",
    "Git"
  ];
  const TECH_HIGHLIGHT_MAP = new Set(TECH_HIGHLIGHTS.map((item) => item.toLowerCase()));
  const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const TECH_HIGHLIGHT_REGEX = new RegExp(`(${TECH_HIGHLIGHTS.map(escapeRegExp).join("|")})`, "gi");

  function highlightTechText(text) {
    return text.split(TECH_HIGHLIGHT_REGEX).map((chunk, index) => {
      if (!TECH_HIGHLIGHT_MAP.has(chunk.toLowerCase())) return chunk;
      return <strong key={`tech-highlight-${index}`} className="tech-emphasis">{chunk}</strong>;
    });
  }

  export function PortfolioPage({ lang, setLang, dark, setDark }) {
    useReveal();
    useCardTilt();
    const [recIndex, setRecIndex] = useState(0);
    const [activeSection, setActiveSection] = useState("about");
    const [featuredModalProject, setFeaturedModalProject] = useState(null);
    const baseRec = RECOMMENDATIONS[recIndex];
    const translated = lang !== "pt" && baseRec.i18n && baseRec.i18n[lang];
    const currentRec = { ...baseRec, ...(translated || {}) };
    const sectionIds = ["about", "tech", "projects", "opensource", "experience", "recommendations", "contact"];
    const navItems = [
      { id: "about", label: t(lang, "nav_about") },
      { id: "tech", label: t(lang, "nav_tech") },
      { id: "projects", label: t(lang, "nav_projects") },
      { id: "opensource", label: t(lang, "nav_opensource") },
      { id: "experience", label: t(lang, "nav_experience") },
      { id: "recommendations", label: t(lang, "nav_recommendations") },
      { id: "contact", label: t(lang, "nav_contact") }
    ];

    const getHeaderOffset = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const varName = isMobile ? "--header-clearance-mobile" : "--header-clearance";
      return (parseFloat(getComputedStyle(document.documentElement).getPropertyValue(varName)) || 132) + 12;
    };

    const navigateToSection = (event, id) => {
      event.preventDefault();
      const target = document.getElementById(id);
      if (!target) return;

      const offset = getHeaderOffset();
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      setActiveSection(id);

      window.scrollTo({ top, behavior: "smooth" });
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", `#${id}`);
      }
    };

    const getProjectDetailsByTitle = (title) => PROJECTS.all.find((project) => project.title === title) || PROJECTS.featured.find((project) => project.title === title) || null;

    useEffect(() => {
      const sectionNodes = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!sectionNodes.length) return undefined;

      let rafId = 0;
      let ticking = false;

      const updateActiveSectionFromScroll = () => {
        const anchorLine = window.scrollY + getHeaderOffset() + 8;
        let nextActive = sectionIds[0];

        sectionNodes.forEach((section) => {
          if (anchorLine >= section.offsetTop) {
            nextActive = section.id;
          }
        });

        setActiveSection((prev) => (prev === nextActive ? prev : nextActive));
      };

      const queueScrollUpdate = () => {
        if (ticking) return;
        ticking = true;
        rafId = window.requestAnimationFrame(() => {
          updateActiveSectionFromScroll();
          ticking = false;
        });
      };

      const syncFromHash = () => {
        const hashSection = window.location.hash.replace("#", "").trim();
        if (hashSection && sectionIds.includes(hashSection)) {
          setActiveSection(hashSection);
        } else {
          updateActiveSectionFromScroll();
        }
      };

      syncFromHash();
      window.addEventListener("scroll", queueScrollUpdate, { passive: true });
      window.addEventListener("resize", queueScrollUpdate);
      window.addEventListener("hashchange", syncFromHash);

      return () => {
        window.removeEventListener("scroll", queueScrollUpdate);
        window.removeEventListener("resize", queueScrollUpdate);
        window.removeEventListener("hashchange", syncFromHash);
        if (rafId) {
          window.cancelAnimationFrame(rafId);
        }
      };
    }, []);

    return (
      <>
        <nav className="top-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={activeSection === item.id ? "active" : ""} onClick={(event) => navigateToSection(event, item.id)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Controls lang={lang} setLang={setLang} dark={dark} setDark={setDark} />

        <header className="hero">
          <div className="hero-bg-orb hero-bg-orb-a" aria-hidden="true"></div>
          <div className="hero-bg-orb hero-bg-orb-b" aria-hidden="true"></div>

          <div className="hero-content">
            <div className="hero-layout">
              <div className="hero-copy">
                <p className="hero-kicker">{t(lang, "hero_kicker")}</p>
                <h1 className="hero-title">Matheus Silvano</h1>
                <p className="hero-subtitle">{t(lang, "hero_subtitle")}</p>
                <p className="hero-pitch">{t(lang, "hero_pitch")}</p>
                <div className="hero-buttons">
                  <a href="https://github.com/matheussilvano" target="_blank" rel="noopener" className="btn btn-secondary">GitHub</a>
                  <a href="https://www.linkedin.com/in/matheussilvano/" target="_blank" rel="noopener" className="btn btn-secondary">LinkedIn</a>
                  <a href="cursos.html" className="btn btn-secondary">{t(lang, "courses_button")}</a>
                  <a href={lang === "en" ? ASSETS.cvEn : ASSETS.cvPt} download className="btn btn-primary">{t(lang, "download_cv_button")}</a>
                </div>
              </div>
              <aside className="hero-side reveal">
                <h3>{t(lang, "hero_side_title")}</h3>
                <div className="hero-badges">
                  <div className="badge-strip hero-badge-strip">
                    <a className="badge-icon" href="https://credentials.databricks.com/7e1cd27a-b050-4d11-91c3-150c23fa985b" target="_blank" rel="noopener"><img src="/assets/certificates/badges/databricks_gerative_ai_fundamentals.png" alt="Databricks badge" /></a>
                    <a className="badge-icon" href="https://www.coursera.org/account/accomplishments/specialization/5QI99HXISLFA" target="_blank" rel="noopener"><img src="/assets/certificates/badges/badge_google_essencials_ai.png" alt="Google badge" /></a>
                  </div>
                </div>
                <p>{t(lang, "hero_side_note")}</p>
              </aside>
            </div>
          </div>
          <ScrollArrow href="#about" label={t(lang, "nav_about")} prompt={t(lang, "next_section_label")} />
        </header>

        <main>
          <section id="about" className="section section-fullpage">
            <div className="container about-content">
              <div className="about-image-container reveal"><img loading="lazy" src={ASSETS.profile} alt="Foto Matheus" /></div>
              <div className="about-text-container">
                <h2 className="section-title reveal">{t(lang, "about_me_title")}</h2>
                <p className="reveal">{t(lang, "about_me_p1")}</p>
                <p className="reveal">{t(lang, "about_me_p2")}</p>
              </div>
            </div>
            <ScrollArrow href="#tech" label={t(lang, "nav_tech")} inline prompt={t(lang, "next_section_label")} />
          </section>

          <section id="tech" className="section">
            <div className="container">
              <h2 className="section-title reveal">{t(lang, "tech_title")}</h2>
              <div className="tech-carousel-container reveal"><div className="tech-carousel-slider"><div className="tech-slide-track">{TECH_ICONS.concat(TECH_ICONS).map((i, idx) => <div key={`${i.alt}-${idx}`} className="tech-slide"><img src={i.src} alt={i.alt} /></div>)}</div></div></div>
              <div className="tech-description-card reveal">
                <p className="tech-description">{highlightTechText(t(lang, "tech_description"))}</p>
              </div>
            </div>
            <ScrollArrow href="#projects" label={t(lang, "nav_projects")} inline prompt={t(lang, "next_section_label")} />
          </section>

          <div className="container">
            <section id="projects" className="section">
              <h2 className="section-title reveal">{t(lang, "projects_title")}</h2>
              <div className="featured-projects reveal">
                <h3>{t(lang, "featured_projects_title")}</h3>
                <div className="featured-grid">
                  {PROJECTS.featured.map((p) => (
                    <div className="featured-card card reveal" key={p.title}>
                      <img src={p.image} alt={p.title} className="featured-image" />
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                      <div className="card-actions">
                        <a href={p.href} target="_blank" rel="noopener" className={`btn ${p.primary ? "btn-primary" : "btn-secondary"}`}>{p.btn}</a>
                        {p.github && p.github !== p.href ? <a href={p.github} target="_blank" rel="noopener" className="btn btn-secondary">{t(lang, "github_button")}</a> : null}
                        <button className="btn btn-secondary" type="button" onClick={() => setFeaturedModalProject(getProjectDetailsByTitle(p.title))}>{t(lang, "view_more_button")}</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="card-actions" style={{ justifyContent: "center" }}>
                  <a href="all-projects.html" className="btn btn-primary">{t(lang, "view_all_projects_button")}</a>
                </div>
              </div>
              <ScrollArrow href="#opensource" label={t(lang, "nav_opensource")} inline prompt={t(lang, "next_section_label")} />
            </section>

            <section id="opensource" className="section">
              <h2 className="section-title reveal">{t(lang, "os_title")}</h2>
              <p className="contact-subtitle reveal">{t(lang, "os_intro")}</p>
              <ul className="os-grid">
                {openSource.map((o) => (
                  <li className="os-card reveal" key={o.repo}>
                    <a href={o.url} target="_blank" rel="noopener">
                      <div className="os-head">
                        <img src={o.avatar} alt="" width="44" height="44" loading="lazy" className="os-avatar" />
                        <div>
                          <span className="os-owner">{o.owner}</span>
                          <h3 className="os-name">{o.repo.split("/")[1]}</h3>
                        </div>
                        <i className="fa-solid fa-arrow-up-right-from-square os-open" aria-hidden="true"></i>
                      </div>
                      <p className="os-desc">{o.description || "\u00a0"}</p>
                      <div className="os-meta">
                        {o.language ? <span className="os-lang"><span className="os-dot" style={{ background: LANG_COLORS[o.language] || "var(--brand)" }}></span>{o.language}</span> : <span></span>}
                        {o.stars ? <span className="os-stars"><i className="fa-regular fa-star" aria-hidden="true"></i> {o.stars.toLocaleString()}</span> : null}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <ScrollArrow href="#experience" label={t(lang, "nav_experience")} inline prompt={t(lang, "next_section_label")} />
            </section>

            <section id="experience" className="section">
              <h2 className="section-title reveal">{t(lang, "experience_title")}</h2>
              <div className="timeline">{EXPERIENCE.map((e) => <div className="timeline-item reveal" key={e.title}><div className="timeline-content"><span className="timeline-date">{e.date}</span><h3>{e.title}</h3><ul className="timeline-list">{e.bullets.map((b) => <li key={`${e.title}-${b}`}>{b}</li>)}</ul></div></div>)}</div>
              <ScrollArrow href="#recommendations" label={t(lang, "nav_recommendations")} inline prompt={t(lang, "next_section_label")} />
            </section>

            <section id="recommendations" className="section">
              <h2 className="section-title reveal">{t(lang, "recommendations_title")}</h2>
              <div className="carousel-container reveal">
                <div className="carousel-track">
                  <div className="carousel-card active">
                    <img src={currentRec.image} alt={currentRec.name} className="carousel-avatar" />
                    <h3>{currentRec.name}</h3>
                    <p className="role">{currentRec.role}</p>
                    <p className="text">"{currentRec.text}"</p>
                    {translated ? <p className="rec-translated">{t(lang, "rec_translated")}</p> : null}
                    <p className="recommendation-source">
                      <span>{t(lang, "recommendation_source_prefix")}</span>
                      <a href={currentRec.sourceUrl || "https://www.linkedin.com/in/matheussilvano/"} target="_blank" rel="noopener" className="linkedin-source-link" aria-label={t(lang, "linkedin_source_label")} title={t(lang, "linkedin_source_label")}>
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                        <span className="sr-text">LinkedIn</span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="carousel-buttons">
                  <button className="carousel-button prev" onClick={() => setRecIndex((i) => (i - 1 + RECOMMENDATIONS.length) % RECOMMENDATIONS.length)}>&#10094;</button>
                  <button className="carousel-button next" onClick={() => setRecIndex((i) => (i + 1) % RECOMMENDATIONS.length)}>&#10095;</button>
                </div>
              </div>
              <ScrollArrow href="#contact" label={t(lang, "nav_contact")} inline prompt={t(lang, "next_section_label")} />
            </section>

            <section id="contact" className="section">
              <h2 className="section-title reveal">{t(lang, "contact_title")}</h2>
              <p className="contact-subtitle reveal">{t(lang, "contact_subtitle")}</p>
              <div className="contact-links">
                <a href="mailto:matheussilvano2005@gmail.com" className="contact-item reveal"><i className="fas fa-envelope"></i><span>matheussilvano2005@gmail.com</span></a>
                <a href="https://wa.me/5548998584035" target="_blank" rel="noopener" className="contact-item reveal"><i className="fab fa-whatsapp"></i><span>(48) 99858-4035</span></a>
                <a href="https://www.linkedin.com/in/matheussilvano/" target="_blank" rel="noopener" className="contact-item reveal"><i className="fab fa-linkedin"></i><span>LinkedIn</span></a>
              </div>
            </section>
          </div>
        </main>

        <button className="contact-fab" id="contactFab" aria-label={t(lang, "contact_fab_label")} onClick={() => {
          const isMobile = window.innerWidth < 768;
          window.open(isMobile ? "https://wa.me/5548998584035" : "mailto:matheussilvano2005@gmail.com", "_blank", "noopener");
        }}>
          <i className="fa-solid fa-paper-plane"></i>
          <span className="sr-text">{t(lang, "contact_fab_label")}</span>
        </button>

        <ProjectDetailsModal lang={lang} project={featuredModalProject} open={Boolean(featuredModalProject)} onClose={() => setFeaturedModalProject(null)} />

        <Footer lang={lang} />
      </>
    );
  }
