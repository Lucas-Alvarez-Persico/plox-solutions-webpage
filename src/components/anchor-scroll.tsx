"use client";

import { useEffect } from "react";

/**
 * Hace que los enlaces a secciones de la misma página siempre lleven ahí.
 *
 * Sin esto, si el hash de la URL ya es el del destino el navegador no hace
 * nada: para él no hay navegación pendiente. Así, después de scrollear lejos,
 * volver a tocar el mismo ítem del menú no movía la página.
 *
 * Los enlaces a otra página no se tocan: los sigue manejando el router.
 */
export function AnchorScroll() {
  useEffect(() => {
    const alHacerClic = (evento: MouseEvent) => {
      // Ojo: no se descarta por `defaultPrevented`. El Link de Next ya llamó a
      // preventDefault antes de que este handler corra, y son justamente esos
      // los enlaces que hay que atender.
      if (
        evento.button !== 0 ||
        evento.metaKey ||
        evento.ctrlKey ||
        evento.shiftKey ||
        evento.altKey
      ) {
        return;
      }

      const enlace = (evento.target as Element | null)?.closest?.("a");
      if (!enlace) return;

      const href = enlace.getAttribute("href");
      if (!href || enlace.hasAttribute("target")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      const esMismaPagina =
        url.origin === window.location.origin &&
        url.pathname === window.location.pathname;

      if (!esMismaPagina || !url.hash) return;

      const destino = document.getElementById(
        decodeURIComponent(url.hash.slice(1)),
      );
      if (!destino) return;

      evento.preventDefault();

      // Sin `behavior`: respeta el scroll-behavior del CSS, que ya contempla
      // el movimiento reducido.
      destino.scrollIntoView();

      // El foco acompaña al scroll, para quien navega con teclado.
      if (!destino.hasAttribute("tabindex")) {
        destino.setAttribute("tabindex", "-1");
      }
      destino.focus({ preventScroll: true });

      if (window.location.hash !== url.hash) {
        window.history.pushState(null, "", url.hash);
      }
    };

    document.addEventListener("click", alHacerClic);
    return () => document.removeEventListener("click", alHacerClic);
  }, []);

  return null;
}
