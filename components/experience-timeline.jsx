import { useEffect, useRef } from "react";

// A career line that fills with light as the page scrolls: each role lights up
// when the line reaches it, and its stack follows. Reduced motion shows it all lit.
export function ExperienceTimeline({ items }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const rows = Array.from(root.querySelectorAll(".xp-item"));
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (calm) {
      rows.forEach((row) => row.classList.add("lit"));
      root.style.setProperty("--xp-fill", "100%");
      return undefined;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.62;
      const box = root.getBoundingClientRect();
      const fill = Math.min(Math.max(line - box.top, 0), box.height);
      root.style.setProperty("--xp-fill", `${fill}px`);
      rows.forEach((row) => {
        const node = row.querySelector(".xp-node").getBoundingClientRect();
        row.classList.toggle("lit", node.top + node.height / 2 < line);
      });
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [items]);

  return (
    <ol className="xp" ref={rootRef}>
      {items.map((e) => (
        <li className={e.current ? "xp-item current" : "xp-item"} key={`${e.company}-${e.date}`}>
          <span className="xp-node" aria-hidden="true"></span>
          <h3 className="xp-company">{e.company}</h3>
          <p className="xp-role">{e.role}</p>
          <p className="xp-meta">{e.date}{e.current ? <span className="xp-now">atual</span> : null} · {e.place}</p>
          <ul className="xp-points">
            {e.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
          {e.metrics && e.metrics.length ? (
            <dl className="xp-metrics">
              {e.metrics.map((m) => (
                <div className="xp-metric" key={m.label}>
                  <dt>{m.value}</dt>
                  <dd>{m.label}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          <ul className="xp-stack" aria-label="Tecnologias">
            {e.stack.map((name, i) => <li className="xp-chip" style={{ "--i": i }} key={name}>{name}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  );
}
