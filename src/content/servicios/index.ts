import type { Locale, Localized } from "@/lib/i18n";
import { calibracionDeValvulas } from "./calibracion-de-valvulas";
import { selladoDeFuga } from "./sellado-de-fuga";
import type { Servicio } from "./tipos";
import { xPando } from "./x-pando";

/** Orden en el que se recorren los servicios, igual que en el sitio original. */
const orden = [selladoDeFuga, calibracionDeValvulas, xPando];

export const servicios: Localized<Servicio[]> = {
  es: orden.map((servicio) => servicio.es),
  en: orden.map((servicio) => servicio.en),
};

/** Vecinos de un servicio, para la navegación del pie de la página. */
export function vecinos(locale: Locale, slug: string) {
  const lista = servicios[locale];
  const i = lista.findIndex((servicio) => servicio.slug === slug);

  return {
    anterior: i > 0 ? lista[i - 1] : undefined,
    siguiente: i >= 0 && i < lista.length - 1 ? lista[i + 1] : undefined,
  };
}
