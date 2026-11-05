"use client";

import { useEffect } from "react";

/**
 * Baja hasta una sección de la home al abrir la página de esa sección
 * (`/contacto`). Va sin animación: quien entra por ese enlace quiere llegar
 * ahí, no ver el recorrido desde arriba.
 */
export function ScrollToSection({ id }: { id: string }) {
  useEffect(() => {
    // Un frame de espera: al navegar desde otra página, el router de Next
    // lleva el scroll arriba después de montar la página nueva.
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [id]);

  return null;
}
