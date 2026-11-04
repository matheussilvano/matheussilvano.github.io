import { createRoot } from "react-dom/client";
import { useSiteState } from "./hooks/use-site-state.js";
import { PortfolioPage } from "./components/pages/home-page.jsx";
import { CoursesPage } from "./components/pages/courses-page.jsx";
import { AllProjectsPage } from "./components/pages/all-projects-page.jsx";
import "./style.css";

function AppRouter() {
  const { lang, setLang, dark, setDark } = useSiteState();
  const page = document.body.dataset.page || "home";
  const pageProps = { lang, setLang, dark, setDark };

  if (page === "courses") {
    return <><CoursesPage {...pageProps} /></>;
  }

  if (page === "all-projects") {
    return <><AllProjectsPage {...pageProps} /></>;
  }

  return <><PortfolioPage {...pageProps} /></>;
}

const rootElement = document.getElementById("app-root");

if (!rootElement) {
  throw new Error("Elemento #app-root não encontrado.");
}

createRoot(rootElement).render(<AppRouter />);
