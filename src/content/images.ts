import type { StaticImageData } from "next/image";

import heroPhoto from "@/assets/images/hero.jpg";
import miniaturaSellado from "@/assets/images/miniatura-sellado.jpg";
import miniaturaValvulas from "@/assets/images/miniatura-valvulas.jpg";
import miniaturaXpando from "@/assets/images/miniatura-xpando.jpg";
import portadaSellado from "@/assets/images/portada-sellado.jpg";
import portadaValvulas from "@/assets/images/portada-valvulas.jpg";
import portadaXpando from "@/assets/images/portada-xpando.jpg";
import posterSellado from "@/assets/images/poster-sellado.jpg";
import posterValvulas from "@/assets/images/poster-valvulas.jpg";
import posterXpando from "@/assets/images/poster-xpando.jpg";
import logo from "@/assets/images/logo-plox.png";
import servicioSellado from "@/assets/images/servicio-sellado.jpg";
import servicioValvulas from "@/assets/images/servicio-valvulas.jpg";
import servicioXpando from "@/assets/images/servicio-xpando.jpg";
import textura1 from "@/assets/images/textura-1.jpg";
import textura2 from "@/assets/images/textura-2.jpg";

import type { Locale, Localized } from "@/lib/i18n";

export interface SiteImage {
  src: StaticImageData;
  /** Vacío en imágenes decorativas: no aportan información al lector de pantalla. */
  alt: string;
}

const files = {
  logo,
  hero: heroPhoto,
  servicioSellado,
  servicioValvulas,
  servicioXpando,
  textura1,
  textura2,

  // Portadas de las páginas de servicio
  portadaSellado,
  portadaValvulas,
  portadaXpando,

  // Miniaturas del navegador entre servicios
  miniaturaSellado,
  miniaturaValvulas,
  miniaturaXpando,

  // Primer fotograma de cada video, para usar como póster
  posterSellado,
  posterValvulas,
  posterXpando,
} satisfies Record<string, StaticImageData>;

type ImageKey = keyof typeof files;

/**
 * Textos alternativos por idioma. Las imágenes que no figuran son decorativas
 * y quedan con `alt` vacío.
 */
const alts: Localized<Partial<Record<ImageKey, string>>> = {
  es: {
    logo: "Plox Solutions",
    hero: "Dos técnicos ajustando los espárragos de una brida sobre equipamiento industrial en planta.",
    servicioSellado:
      "Esquema isométrico de un sellado de fuga: una abrazadera inyectada con sellante sobre la junta bridada de una cañería, alimentada por una bomba manual con manómetro.",
    servicioValvulas:
      "Esquema isométrico de una calibración de válvulas: una válvula de globo con posicionador conectada a un calibrador portátil que indica 45,2 % de posición.",
    servicioXpando:
      "Esquema isométrico del sistema X-Pando: vista en corte de una unión roscada sellada con cemento expansivo, con detalle ampliado del filete.",
    portadaSellado:
      "Primer plano de una brida empernada sobre una cañería industrial, con el resto de la instalación desenfocada al fondo.",
    portadaValvulas:
      "Vista cenital de un conjunto de válvulas y medidores conectados por cañerías, con varios manómetros a la vista.",
    portadaXpando:
      "Lata de compuesto para uniones X-Pando sobre un banco de taller, rodeada de caños roscados y accesorios.",
  },
  en: {
    logo: "Plox Solutions",
    hero: "Two technicians tightening the studs of a flange on industrial equipment at a plant.",
    servicioSellado:
      "Isometric diagram of a leak sealing job: a clamp injected with sealant over a flanged pipe joint, fed by a hand pump with a pressure gauge.",
    servicioValvulas:
      "Isometric diagram of a valve calibration: a globe valve with a positioner connected to a portable calibrator reading 45.2% position.",
    servicioXpando:
      "Isometric diagram of the X-Pando system: cutaway view of a threaded joint sealed with expanding cement, with an enlarged detail of the thread.",
    portadaSellado:
      "Close-up of a bolted flange on industrial piping, with the rest of the facility blurred in the background.",
    portadaValvulas:
      "Top-down view of a set of valves and gauges connected by piping, with several pressure gauges in sight.",
    portadaXpando:
      "Can of X-Pando jointing compound on a workbench, surrounded by threaded pipes and fittings.",
  },
};

function imagesFor(locale: Locale) {
  return Object.fromEntries(
    Object.entries(files).map(([key, src]) => [
      key,
      { src, alt: alts[locale][key as ImageKey] ?? "" },
    ]),
  ) as Record<ImageKey, SiteImage>;
}

/** Imágenes del sitio, con el texto alternativo de cada idioma. */
export const images: Localized<Record<ImageKey, SiteImage>> = {
  es: imagesFor("es"),
  en: imagesFor("en"),
};
