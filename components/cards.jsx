import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { t } from "../data/site-data.js";

function actionsOf(project) {
  if (project.actions && project.actions.length) return project.actions;
  if (project.href && project.btn) return [{ label: project.btn, href: project.href, primary: project.primary }];
  return [];
}

export function ProjectModal({ lang, project, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    if (!project) return undefined;
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;
  const actions = actionsOf(project);
  return createPortal(
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={project.title} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <article className="modal">
        <button ref={closeRef} className="modal-close" type="button" onClick={onClose}>{t(lang, "close")}</button>
        <img src={project.image} alt="" className="modal-image" />
        <div className="modal-body">
          <h3>{project.title}</h3>
          <p>{project.details || project.desc}</p>
          {project.highlights?.length ? <ul>{project.highlights.map((h) => <li key={h.slice(0, 40)}>{h}</li>)}</ul> : null}
          {project.impact ? <p className="modal-note">{project.impact}</p> : null}
          {project.contrib ? <p className="modal-note">{project.contrib}</p> : null}
          {project.stack?.length ? <ul className="tags">{project.stack.map((s) => <li key={s}>{s}</li>)}</ul> : null}
          <div className="actions">
            {actions.map((a) => <a key={a.label} href={a.href} target="_blank" rel="noopener" className={`btn ${a.primary ? "btn-primary" : ""}`}>{a.label}</a>)}
          </div>
        </div>
      </article>
    </div>,
    document.body
  );
}

export function ProjectRow({ lang, project, onOpen, large = false }) {
  const actions = actionsOf(project);
  return (
    <li className={`project-row ${large ? "large" : ""}`}>
      <img src={project.image} alt="" loading="lazy" className="project-thumb" />
      <div className="project-main">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        {project.stack?.length ? <ul className="tags">{project.stack.map((s) => <li key={s}>{s}</li>)}</ul> : null}
      </div>
      <div className="actions">
        {actions.slice(0, 1).map((a) => <a key={a.label} href={a.href} target="_blank" rel="noopener" className="btn btn-primary">{a.label}</a>)}
        <button className="btn" type="button" onClick={() => onOpen(project)}>{t(lang, "view_details")}<span className="sr-only">: {project.title}</span></button>
      </div>
    </li>
  );
}

export function CourseRow({ lang, item }) {
  return (
    <li className="course-row">
      <div>
        <h4>{item.title}{item.star ? <span className="star">{t(lang, "star_label")}</span> : null}</h4>
        <p>{item.institution}, {item.year}</p>
      </div>
      <div className="actions">
        {item.multiActions
          ? item.multiActions.map((a) => <a key={a.href} href={a.href} target="_blank" rel="noopener" className="btn">{t(lang, a.labelKey)}</a>)
          : <a href={item.cert} target="_blank" rel="noopener" className="btn">{t(lang, "view_certificate")}<span className="sr-only">: {item.title}</span></a>}
      </div>
    </li>
  );
}
