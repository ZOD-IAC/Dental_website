import { useEffect } from "react";
export function usePageMotion(route) {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    const targets = document.querySelectorAll(
      "main section, main .team-grid article, main .highlight-card",
    );
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add("reveal-ready");
        observer.observe(el);
      }
    });
    return () => {
      observer.disconnect();
      targets.forEach((el) =>
        el.classList.remove("reveal-ready", "is-visible"),
      );
    };
  }, [route]);
}
