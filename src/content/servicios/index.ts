import { calibracionDeValvulas } from "./calibracion-de-valvulas";
import { selladoDeFuga } from "./sellado-de-fuga";
import type { Servicio } from "./tipos";
import { xPando } from "./x-pando";

/** Orden en el que se recorren los servicios, igual que en el sitio original. */
export const servicios: Servicio[] = [
  selladoDeFuga,
  calibracionDeValvulas,
  xPando,
];

/** Vecinos de un servicio, para la navegación del pie de la página. */
export function vecinos(slug: string) {
  const i = servicios.findIndex((servicio) => servicio.slug === slug);

  return {
    anterior: i > 0 ? servicios[i - 1] : undefined,
    siguiente: i >= 0 && i < servicios.length - 1 ? servicios[i + 1] : undefined,
  };
}
