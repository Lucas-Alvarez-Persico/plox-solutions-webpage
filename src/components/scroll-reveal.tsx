"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Si el observer no reveló nada en este tiempo, se muestra todo igual. */
const FALLBACK_MS = 3000;

/**
 * Observa los elementos con `data-reveal` y los marca como revelados cuando
 * entran en pantalla. Vive una sola vez en el layout, así las secciones siguen
 * siendo Server Components y solo declaran el atributo.
 *
 * Observa tanto los que ya están en el documento como los que aparecen después:
 * el layout no se vuelve a montar al navegar entre páginas, así que sin esto los
 * elementos de la página nueva quedarían sin observar y no se revelarían nunca.
 *
 * El contenido no puede quedar invisible: si no hay IntersectionObserver, si el
 * visitante pidió movimiento reducido, o si pasado un tiempo el observer no
 * reveló absolutamente nada, se muestra todo de una.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const revelar = (el: Element) => el.setAttribute("data-revealed", "");

    const revelarTodo = () => {
      document.querySelectorAll("[data-reveal]").forEach(revelar);
    };

    const prefiereMenosMovimiento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (typeof IntersectionObserver === "undefined" || prefiereMenosMovimiento) {
      revelarTodo();
      return;
    }

    let revelados = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revelar(entry.target);
          observer.unobserve(entry.target);
          revelados += 1;
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 },
    );

    const observarPendientes = () => {
      document
        .querySelectorAll("[data-reveal]:not([data-revealed])")
        .forEach((el) => observer.observe(el));
    };

    observarPendientes();

    // Los elementos que llegan después —por navegación o por streaming— también
    // tienen que quedar observados.
    const mutaciones = new MutationObserver(observarPendientes);
    mutaciones.observe(document.body, { childList: true, subtree: true });

    // Red de seguridad: si el observer no llegó a revelar nada, no dejamos la
    // página en blanco. Se arranca recién con el documento visible, porque en
    // una pestaña de fondo el navegador no calcula intersecciones.
    let timer = 0;

    const armarReserva = () => {
      timer = window.setTimeout(() => {
        if (revelados === 0) revelarTodo();
      }, FALLBACK_MS);
    };

    const alVolverVisible = () => {
      if (document.visibilityState !== "visible") return;
      document.removeEventListener("visibilitychange", alVolverVisible);
      armarReserva();
    };

    if (document.visibilityState === "visible") {
      armarReserva();
    } else {
      document.addEventListener("visibilitychange", alVolverVisible);
    }

    return () => {
      observer.disconnect();
      mutaciones.disconnect();
      document.removeEventListener("visibilitychange", alVolverVisible);
      if (timer) window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
