import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { t } from "../data/site-data.js";

  function getProjectActions(project) {
    if (project.actions && project.actions.length) return project.actions;
    if (project.href && project.btn) {
      return [{ label: project.btn, href: project.href, primary: project.primary }];
    }
    return [];
  }

  export function ProjectDetailsModal({ lang, project, open, onClose }) {
    useEffect(() => {
      if (!open) return undefined;

      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const onKeyDown = (event) => {
        if (event.key === "Escape") onClose();
      };

      window.addEventListener("keydown", onKeyDown);

      return () => {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener("keydown", onKeyDown);
      };
    }, [open, onClose]);

    if (!open || !project) return null;

    const actions = getProjectActions(project);

    return createPortal(
      <div className="project-modal-overlay" role="dialog" aria-modal="true" aria-label={project.title} onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}>
        <article className="project-modal">
          <button className="project-modal-close" type="button" onClick={onClose} aria-label={t(lang, "close_button")}>{t(lang, "close_button")}</button>

          <div className="project-modal-media">
            <img loading="lazy" src={project.image} alt={project.title} className="project-modal-image" />
          </div>

          <div className="project-modal-content">
            <h3>{project.title}</h3>
            <p>{project.details || project.desc}</p>
            {project.highlights && project.highlights.length ? (
              <ul className="project-modal-list">
                {project.highlights.map((item) => <li key={`${project.title}-${item.slice(0, 30)}`}>{item}</li>)}
              </ul>
            ) : null}
            {project.impact ? <p className="project-modal-impact">{project.impact}</p> : null}
            {project.contrib ? <p className="project-modal-contrib">{project.contrib}</p> : null}
            {project.stack && project.stack.length ? <div className="tech-stack">{project.stack.map((s) => <span key={`${project.title}-modal-${s}`}>{s}</span>)}</div> : null}

            <div className="card-actions project-modal-actions">
              {actions.map((action) => (
                <a key={`${project.title}-modal-action-${action.label}`} href={action.href} target="_blank" rel="noopener" className={`btn ${action.primary ? "btn-primary" : "btn-secondary"}`}>{action.label}</a>
              ))}
            </div>
          </div>
        </article>
      </div>,
      document.body
    );
  }

  export function ProjectCard({ lang, project }) {
    const [showDetails, setShowDetails] = useState(false);
    const actions = getProjectActions(project);

    return (
      <>
        <div className="card reveal">
          <div className="card-image-container"><img loading="lazy" src={project.image} alt={project.title} className="card-image" /></div>
          <div className="card-content">
            <h3 className="card-title">{project.title}</h3>
            <p>{project.desc}</p>
            <p className="card-impact">{project.impact}</p>
            <p className="card-contrib">{project.contrib}</p>
            <div className="tech-stack">{project.stack.map((s) => <span key={`${project.title}-${s}`}>{s}</span>)}</div>
            <div className="card-actions">
              {actions.map((a) => (
                <a key={`${project.title}-${a.label}`} href={a.href} target="_blank" rel="noopener" className={`btn ${a.primary ? "btn-primary" : "btn-secondary"}`}>{a.label}</a>
              ))}
              <button className="btn btn-secondary" type="button" onClick={() => setShowDetails(true)}>{t(lang, "view_more_button")}</button>
            </div>
          </div>
        </div>
        <ProjectDetailsModal lang={lang} project={project} open={showDetails} onClose={() => setShowDetails(false)} />
      </>
    );
  }

  export function CourseCard({ lang, item }) {
    return (
      <div className="card reveal">
        {item.preview ? <div className="certificate-thumb"><img src={item.preview} alt={item.title} /></div> : null}
        <div className="card-content">
          <h3 className="card-title">{item.title}</h3>
          {item.star ? <span className="course-star">{t(lang, "course_star_label")}</span> : null}
          <p><strong>{t(lang, "institution_label")}:</strong> {item.institution}</p>
          <p><strong>{t(lang, "year_label")}:</strong> {item.year}</p>
          <div className="card-actions">
            {item.multiActions ? item.multiActions.map((act) => <a key={act.href} href={act.href} target="_blank" rel="noopener" className="btn btn-primary">{t(lang, act.labelKey)}</a>) : <a href={item.cert} target="_blank" rel="noopener" className="btn btn-primary">{t(lang, "view_certificate_button")}</a>}
          </div>
        </div>
      </div>
    );
  }
