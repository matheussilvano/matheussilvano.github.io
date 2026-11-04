import { ASSETS, t } from "../data/site-data.js";

  function getHeaderOffset() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const varName = isMobile ? "--header-clearance-mobile" : "--header-clearance";
    const value = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(varName)) || 132;
    return value + 12;
  }

  function smoothScrollToHref(href) {
    if (!href || !href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
    window.scrollTo({ top, behavior: "smooth" });

    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", href);
    } else {
      window.location.hash = href;
    }
  }

  export function Controls({ lang, setLang, dark, setDark }) {
    return (
      <div className="header-controls">
        <div className="language-selector" id="languageSelector">
          <img src={ASSETS.flagPt} alt="Bandeira do Brasil" className={`lang-flag ${lang === "pt" ? "active" : ""}`} onClick={() => setLang("pt")} />
          <img src={ASSETS.flagEn} alt="Bandeira Reino Unido" className={`lang-flag ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")} />
          <img src={ASSETS.flagEs} alt="Bandeira Espanha" className={`lang-flag ${lang === "es" ? "active" : ""}`} onClick={() => setLang("es")} />
        </div>
        <button id="darkModeToggle" aria-label="Alternar modo escuro/claro" onClick={() => setDark((d) => !d)}>{dark ? "☀️" : "🌙"}</button>
      </div>
    );
  }

  export function Footer({ lang }) {
    return <footer className="footer"><p>{t(lang, "footer_text")}</p></footer>;
  }

  export function ScrollArrow({ href, label, inline = false, showText = true, prompt = "" }) {
    const textLabel = prompt ? `${prompt} ${label}` : label;
    return (
      <a
        href={href}
        className={`scroll-down-arrow ${inline ? "scroll-down-arrow-inline" : ""}`}
        aria-label={label}
        onClick={(event) => {
          if (!href || !href.startsWith("#")) return;
          event.preventDefault();
          smoothScrollToHref(href);
        }}
      >
        {showText ? <span className="scroll-text">{textLabel}</span> : null}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
        </svg>
      </a>
    );
  }
