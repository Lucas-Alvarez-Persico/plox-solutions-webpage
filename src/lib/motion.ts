/**
 * Utilidades compartidas por los efectos ligados al scroll, con los mismos
 * criterios que usa el sitio original.
 */

/** Media query que habilita los efectos: de tablet para arriba. */
export const MOTION_QUERY = "(min-width: 810px)";

/** ¿Corresponde animar? Igual que en el original: tamaño mínimo y sin movimiento reducido. */
export function motionHabilitado() {
  if (typeof window === "undefined") return false;

  return (
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    window.matchMedia(MOTION_QUERY).matches
  );
}

/**
 * Progreso de un elemento al atravesar la pantalla: 0 cuando su borde superior
 * toca el fondo del viewport y 1 cuando su borde inferior toca el techo.
 * Equivale al `offset: ["start end", "end start"]` del original.
 */
export function progresoAlCruzar(el: HTMLElement) {
  const alto = window.innerHeight;
  const { top, height } = el.getBoundingClientRect();
  const recorrido = alto + height;

  if (recorrido <= 0) return 0;

  return Math.min(1, Math.max(0, (alto - top) / recorrido));
}

/** Interpolación lineal por tramos, como el `useTransform` del original. */
export function interpolar(t: number, entrada: number[], salida: number[]) {
  if (t <= entrada[0]) return salida[0];

  for (let i = 1; i < entrada.length; i += 1) {
    if (t > entrada[i]) continue;

    const rango = entrada[i] - entrada[i - 1];
    const avance = rango === 0 ? 0 : (t - entrada[i - 1]) / rango;

    return salida[i - 1] + avance * (salida[i] - salida[i - 1]);
  }

  return salida[salida.length - 1];
}

/** Suscribe una función al scroll y al resize, agrupando por frame. */
export function alScrollear(actualizar: () => void) {
  let frame = 0;

  const pedir = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      actualizar();
    });
  };

  actualizar();
  window.addEventListener("scroll", pedir, { passive: true });
  window.addEventListener("resize", pedir);

  return () => {
    if (frame) window.cancelAnimationFrame(frame);
    window.removeEventListener("scroll", pedir);
    window.removeEventListener("resize", pedir);
  };
}
