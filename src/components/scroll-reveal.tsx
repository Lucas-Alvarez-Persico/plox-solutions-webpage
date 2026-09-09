"use client";

import { useEffect } from "react";

/** Si el observer no reveló nada en este tiempo, se muestra todo igual. */
const FALLBACK_MS = 3000;

/**
 * Observa todos los elementos con `data-reveal` del documento y los marca como
 * revelados cuando entran en pantalla. Vive una sola vez en el layout, así las
 * secciones siguen siendo Server Components y solo declaran el atributo.
 *
 * El contenido nunca puede quedar invisible: si no hay IntersectionObserver, si
 * el usuario pidió movimiento reducido, o si pasado un tiempo el observer no
 * reveló absolutamente nada, se muestra todo de una.
 */
export function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const revealAll = () => {
      targets.forEach((el) => el.setAttribute("data-revealed", ""));
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (typeof IntersectionObserver === "undefined" || prefersReducedMotion) {
      revealAll();
      return;
    }

    let revealed = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
          revealed += 1;
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 },
    );

    targets.forEach((el) => observer.observe(el));

    // Red de seguridad: si el observer no llegó a revelar nada, no dejamos la
    // página en blanco. Se arranca recién con el documento visible, porque en
    // una pestaña de fondo el navegador no calcula intersecciones.
    let timer = 0;

    const armFallback = () => {
      timer = window.setTimeout(() => {
        if (revealed === 0) revealAll();
      }, FALLBACK_MS);
    };

    const onVisible = () => {
      if (document.visibilityState !== "visible") return;
      document.removeEventListener("visibilitychange", onVisible);
      armFallback();
    };

    if (document.visibilityState === "visible") {
      armFallback();
    } else {
      document.addEventListener("visibilitychange", onVisible);
    }

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisible);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  return null;
}
