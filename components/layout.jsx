import { useMemo } from "react";
import { t } from "../data/site-data.js";

const LANGS = [["pt", "PT"], ["en", "EN"], ["es", "ES"]];

export function SiteHeader({ lang, setLang, dark, setDark, links = [], home = "./" }) {
  return (
    <header className="site-header">
      <a className="brand" href={home}>Matheus Silvano</a>
      {links.length ? (
        <nav aria-label="Seções">
          <ul className="nav-links">
            {links.map((l) => <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>)}
          </ul>
        </nav>
      ) : null}
      <div className="controls">
        <div className="lang-switch" role="group" aria-label={t(lang, "language")}>
          {LANGS.map(([code, label]) => (
            <button key={code} type="button" aria-pressed={lang === code} onClick={() => setLang(code)}>{label}</button>
          ))}
        </div>
        <button type="button" className="theme-toggle" onClick={() => setDark((d) => !d)} aria-label={dark ? t(lang, "theme_to_light") : t(lang, "theme_to_dark")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {dark
              ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>
              : <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />}
          </svg>
        </button>
      </div>
    </header>
  );
}

export function SiteFooter({ lang }) {
  return <footer className="site-footer"><p>{t(lang, "footer_text")}</p></footer>;
}

/* Isobath-style rings around a point, like depth lines on a nautical chart. */
export function Contours() {
  const rings = useMemo(() => {
    const out = [];
    const count = 15;
    for (let i = 0; i < count; i++) {
      const base = 38 + i * 27;
      const pts = [];
      const steps = 72;
      for (let k = 0; k < steps; k++) {
        const a = (k / steps) * Math.PI * 2;
        const wobble =
          1 +
          0.09 * Math.sin(3 * a + i * 0.35 + 0.6) +
          0.05 * Math.sin(5 * a - i * 0.22 + 1.9) +
          0.025 * Math.sin(9 * a + i * 0.5);
        const stretch = 1.18;
        pts.push([500 + Math.cos(a) * base * wobble * stretch, 400 + Math.sin(a) * base * wobble]);
      }
      let d = "";
      for (let k = 0; k < steps; k++) {
        const p0 = pts[(k - 1 + steps) % steps], p1 = pts[k], p2 = pts[(k + 1) % steps], p3 = pts[(k + 2) % steps];
        if (k === 0) d += `M${p1[0].toFixed(1)} ${p1[1].toFixed(1)}`;
        const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
        const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
        d += `C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
      }
      out.push({ d: d + "Z", major: i % 5 === 4 });
    }
    return out;
  }, []);

  return (
    <svg className="contours" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {rings.map((r, i) => (
        <path key={i} d={r.d} pathLength="1" className={r.major ? "ring major" : "ring"} style={{ "--i": rings.length - i }} />
      ))}
    </svg>
  );
}
