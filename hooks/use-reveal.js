import { useEffect } from "react";

export function useReveal(refreshKey) {
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      }, { threshold: 0.15 });

      const nodes = document.querySelectorAll(".reveal");
      nodes.forEach((node) => observer.observe(node));
      return () => observer.disconnect();
    }, [refreshKey]);
  }
