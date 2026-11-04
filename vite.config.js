import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// BASE_PATH is set by the GitHub Pages workflow (e.g. "/matheus-silvano/").
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        courses: resolve(import.meta.dirname, "cursos.html"),
        allProjects: resolve(import.meta.dirname, "all-projects.html")
      }
    }
  }
});
