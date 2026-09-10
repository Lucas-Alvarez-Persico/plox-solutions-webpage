"use client";

import { useEffect, useRef } from "react";

import type { Service } from "@/content/home";
import { alScrollear } from "@/lib/motion";

/** Umbral vertical que define cuál es el servicio activo. */
const LINEA_ACTIVA = 0.45;

/**
 * Índice de servicios de la columna sticky. Resalta el que está a la vista:
 * el activo queda opaco y los demás bajan al 30%, igual que en el original.
 */
export function StageList({ services }: { services: readonly Service[] }) {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const lista = ref.current;
    if (!lista) return;

    const paneles = services
      .map((servicio) => document.getElementById(servicio.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (paneles.length === 0) return;

    const items = Array.from(lista.children) as HTMLElement[];
    let activo = -1;

    return alScrollear(() => {
      const linea = window.innerHeight * LINEA_ACTIVA;

      let siguiente = 0;
      paneles.forEach((panel, i) => {
        if (panel.getBoundingClientRect().top <= linea) siguiente = i;
      });

      if (siguiente === activo) return;
      activo = siguiente;

      items.forEach((item, i) => {
        item.style.transition = "opacity 160ms cubic-bezier(0.65, 0, 0.35, 1)";
        item.style.opacity = i === activo ? "1" : "0.3";
      });
    });
  }, [services]);

  return (
    <ol
      ref={ref}
      data-reveal
      style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
      className="hidden list-none flex-col gap-5 tablet:flex"
    >
      {services.map((service) => (
        <li key={service.code} className="flex items-center gap-4">
          <p className="type-eyebrow shrink-0 text-gray-deep">{service.code}</p>
          <p className="type-heading-sm text-ink">{service.name}</p>
        </li>
      ))}
    </ol>
  );
}
