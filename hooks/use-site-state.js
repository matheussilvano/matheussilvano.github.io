import { useEffect, useState } from "react";
import { TEXT } from "../data/text.js";

function read(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function write(key, value) {
  try { localStorage.setItem(key, value); } catch { /* storage unavailable */ }
}

export function useSiteState() {
  const savedLang = read("language");
  const [lang, setLang] = useState(TEXT[savedLang] ? savedLang : "pt");
  const [dark, setDark] = useState(() => {
    const saved = read("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    write("language", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  }, [lang]);

  useEffect(() => {
    write("theme", dark ? "dark" : "light");
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return { lang, setLang, dark, setDark };
}
