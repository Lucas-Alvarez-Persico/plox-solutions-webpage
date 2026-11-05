"use client";

import { useEffect } from "react";

/** Saca la barra final que agrega el export, para comparar rutas. */
function sinBarraFinal(ruta: string) {
  return ruta.length > 1 ? ruta.replace(/\/$/, "") : ruta;
}

/** La sección de la home cuya ruta es la pedida, si está en pantalla. */
function seccionDeRuta(pathname: string) {
  const ruta = sinBarraFinal(pathname);
  return [
    ...document.querySelectorAll<HTMLElement>("[data-section-path]"),
  ].find(
    (elemento) => sinBarraFinal(elemento.dataset.sectionPath ?? "") === ruta,
  );
}

/**
 * Hace que los enlaces a secciones de la misma página siempre lleven ahí.
 *
 * Las secciones de la home tienen su propia ruta (`/contacto`). Si la sección
 * ya está en pantalla, en vez de cargar esa página se scrollea hasta ella y se
 * cambia la URL. Se reconocen por su `data-section-path`.
 *
 * Con anclas (`#contenido`) pasa algo parecido: si el hash de la URL ya es el
 * del destino el navegador no hace nada, porque para él no hay navegación
 * pendiente. Así, después de scrollear lejos, volver a tocar el mismo enlace
 * no movía la página.
 *
 * Al ir atrás o adelante entre secciones la página tampoco cambia, así que
 * también se scrollea a la sección de la URL.
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

      if (url.origin !== window.location.origin) return;

      const seccion = url.hash ? undefined : seccionDeRuta(url.pathname);

      const esMismaPagina = url.pathname === window.location.pathname;
      const destino =
        seccion ??
        (esMismaPagina && url.hash
          ? document.getElementById(decodeURIComponent(url.hash.slice(1)))
          : null);
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

      // `pushState` está integrado con el router de Next: `usePathname` se
      // entera, y el selector de idioma apunta a la sección en el otro idioma.
      const nuevaUrl = seccion ? url.pathname : url.hash;
      if (
        seccion
          ? window.location.pathname !== url.pathname || window.location.hash
          : window.location.hash !== url.hash
      ) {
        window.history.pushState(null, "", nuevaUrl);
      }
    };

    // Un frame de espera, para que el router de Next termine con lo suyo.
    const alMoverseEnElHistorial = () => {
      requestAnimationFrame(() => {
        if (window.location.hash) return;
        seccionDeRuta(window.location.pathname)?.scrollIntoView();
      });
    };

    document.addEventListener("click", alHacerClic);
    window.addEventListener("popstate", alMoverseEnElHistorial);
    return () => {
      document.removeEventListener("click", alHacerClic);
      window.removeEventListener("popstate", alMoverseEnElHistorial);
    };
  }, []);

  return null;
}
