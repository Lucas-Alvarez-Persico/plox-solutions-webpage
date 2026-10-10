"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import type { SiteImage } from "@/content/images";
import {
  alScrollear,
  interpolar,
  motionHabilitado,
  progresoAlCruzar,
} from "@/lib/motion";

/** Tramos del recorrido del panel, tomados del sitio original. */
const TRAMOS_FOTO = [0, 0.18, 0.45, 1];
const OPACIDAD_FOTO = [0, 0, 1, 1];
const ESCALA_FOTO = [1.06, 1.06, 1, 1];

/**
 * Marco de la ilustración de cada servicio.
 *
 * A medida que el panel cruza la pantalla, la foto entra desde una escala
 * levemente mayor. El efecto está ligado al scroll, no a un disparo único: si
 * volvés para atrás, vuelve con vos.
 *
 * El original de Framer además hacía aparecer una grilla azul por encima
 * mientras la foto entraba; acá se sacó a propósito.
 *
 * Por debajo de 810px o con movimiento reducido no se anima nada: la foto se ve
 * completa.
 */
export function RevealFrame({ image }: { image: SiteImage }) {
  const marco = useRef<HTMLDivElement>(null);
  const foto = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contenedor = marco.current;
    const capaFoto = foto.current;
    if (!contenedor || !capaFoto) return;

    if (!motionHabilitado()) {
      capaFoto.style.opacity = "1";
      capaFoto.style.transform = "none";
      return;
    }

    return alScrollear(() => {
      const p = progresoAlCruzar(contenedor);

      capaFoto.style.opacity = String(
        interpolar(p, TRAMOS_FOTO, OPACIDAD_FOTO),
      );
      capaFoto.style.transform = `scale(${interpolar(p, TRAMOS_FOTO, ESCALA_FOTO)})`;
    });
  }, []);

  return (
    <div
      ref={marco}
      className="relative aspect-[17/10] w-full overflow-clip bg-bone-muted"
    >
      <div ref={foto} className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1200px) 805px, (min-width: 810px) 395px, 100vw"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
