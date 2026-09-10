"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { LineworkLayer } from "@/components/linework-layer";
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

const TRAMOS_GRILLA = [0, 0.18, 0.45];
const OPACIDAD_GRILLA = [0, 1, 0];

/**
 * Marco de la ilustración de cada servicio.
 *
 * A medida que el panel cruza la pantalla, la foto entra desde una escala
 * levemente mayor mientras la grilla azul aparece y se va por encima. Ambas
 * están ligadas al scroll, no a un disparo único: si volvés para atrás, el
 * efecto vuelve con vos.
 *
 * Por debajo de 810px o con movimiento reducido no se anima nada: la foto se ve
 * completa y la grilla no se muestra.
 */
export function RevealFrame({ image }: { image: SiteImage }) {
  const marco = useRef<HTMLDivElement>(null);
  const foto = useRef<HTMLDivElement>(null);
  const grilla = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contenedor = marco.current;
    const capaFoto = foto.current;
    const capaGrilla = grilla.current;
    if (!contenedor || !capaFoto || !capaGrilla) return;

    if (!motionHabilitado()) {
      capaFoto.style.opacity = "1";
      capaFoto.style.transform = "none";
      capaGrilla.style.display = "none";
      return;
    }

    capaGrilla.style.display = "";

    return alScrollear(() => {
      const p = progresoAlCruzar(contenedor);

      capaFoto.style.opacity = String(
        interpolar(p, TRAMOS_FOTO, OPACIDAD_FOTO),
      );
      capaFoto.style.transform = `scale(${interpolar(p, TRAMOS_FOTO, ESCALA_FOTO)})`;
      capaGrilla.style.opacity = String(
        interpolar(p, TRAMOS_GRILLA, OPACIDAD_GRILLA),
      );
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

      <div
        ref={grilla}
        aria-hidden="true"
        style={{ display: "none", opacity: 0 }}
        className="absolute inset-0"
      >
        <LineworkLayer className="h-full w-full text-blueprint" />
      </div>
    </div>
  );
}
