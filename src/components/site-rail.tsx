"use client";

import { useEffect, useRef } from "react";

/**
 * Riel fijo del margen izquierdo: una línea de cota con un indicador que crece
 * según el progreso de scroll. Solo aparece en desktop, igual que en el diseño
 * original — en tablet y mobile el gutter no da el ancho necesario.
 */
export function SiteRail() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const node = progressRef.current;
      if (!node) return;

      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

      node.style.scale = `1 ${Math.min(Math.max(progress, 0), 1)}`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 left-0 z-[5] hidden w-20 desktop:block"
    >
      <div className="relative mx-auto h-[calc(100%-136px)] w-px translate-y-24 bg-gray/40">
        <div
          ref={progressRef}
          // El progreso se controla con la propiedad CSS `scale`, la misma que
          // usan las utilidades de Tailwind 4: si se mezclara con `transform`,
          // ambas se componen y el indicador queda siempre en cero.
          style={{ scale: "1 0" }}
          className="absolute inset-y-0 -left-px w-0.5 origin-top bg-gray"
        />
      </div>
    </div>
  );
}
