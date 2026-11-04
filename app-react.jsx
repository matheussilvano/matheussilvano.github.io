import { createRoot } from "react-dom/client";
import { useSiteState } from "./hooks/use-site-state.js";
import { PortfolioPage } from "./components/pages/home-page.jsx";
import { CoursesPage } from "./components/pages/courses-page.jsx";
import { AllProjectsPage } from "./components/pages/all-projects-page.jsx";
import "./style.css";

const PAGES = { home: PortfolioPage, courses: CoursesPage, "all-projects": AllProjectsPage };

function App() {
  const state = useSiteState();
  const Page = PAGES[document.body.dataset.page] || PortfolioPage;
  return <Page {...state} />;
}

createRoot(document.getElementById("app-root")).render(<App />);
