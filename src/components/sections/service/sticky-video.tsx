"use client";

import { useEffect, useRef } from "react";

import type { SiteVideo } from "@/content/videos";

/**
 * Video en loop de la columna sticky.
 *
 * Con `preload="none"` el archivo no se descarga hasta que hace falta: hasta
 * entonces se ve el póster. La reproducción arranca recién cuando el video
 * entra en pantalla y se pausa al salir.
 *
 * Si el visitante pidió movimiento reducido no se reproduce solo: queda el
 * póster y se le agregan los controles para que decida.
 */
export function StickyVideo({ video }: { video: SiteVideo }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.controls = true;
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      el.controls = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            void el.play().catch(() => {
              // Si el navegador bloquea la reproducción, queda el póster.
              el.controls = true;
            });
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={video.src}
      poster={video.poster.src.src}
      width={video.width}
      height={video.height}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      className="size-[497px] max-w-none object-cover"
    />
  );
}
