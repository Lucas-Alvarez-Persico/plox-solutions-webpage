import { images, type SiteImage } from "./images";
import { sectionIds } from "./site";

export const hero = {
  eyebrow: "Specialized Industrial Solutions",
  title: "Ingeniería para mantener la industria en movimiento.",
  body: "Soluciones especializadas para intervenir, mantener y optimizar instalaciones industriales, reduciendo interrupciones y asegurando la continuidad de las operaciones.",
  cta: { label: "Contactanos", href: `#${sectionIds.enquiry}` },
} as const;

export const record = {
  title: "Experiencia que responde.",
  paragraphs: [
    "Desde 1981 brindamos servicios especializados para la industria, combinando experiencia técnica, conocimiento de campo y capacidad de respuesta para resolver desafíos críticos en planta.",
    "Trabajamos sobre instalaciones y procesos en operación, con soluciones orientadas a minimizar tiempos de parada, resolver problemas y mantener la continuidad operativa.",
  ],
  marqueeLabel: "En cada operación",
  // "Precisión" está escrito "Presición" en el sitio de Framer.
  marqueeWords: [
    "Experiencia",
    "Precisión",
    "Operación",
    "Continuidad",
    "Respuesta",
    "Confianza",
  ],
} as const;

export interface Service {
  code: string;
  /** Ancla del panel dentro de la sección. */
  id: string;
  /** Nombre corto, para el índice de la columna sticky. */
  name: string;
  description: string;
  href: string;
  image: SiteImage;
}

export const method = {
  title: "Nuestros Servicios",
  ctaLabel: "Ver servicio",
  services: [
    {
      code: "M-01",
      id: "m-01",
      name: "Sellado de Fugas en Operación",
      description:
        "Control y sellado de fugas sin necesidad de interrumpir el funcionamiento de la instalación",
      href: "/sellado-de-fuga",
      image: images.servicioSellado,
    },
    {
      code: "M-02",
      id: "m-02",
      name: "Calibración de Válvulas de Seguridad",
      description:
        "Verificación, ajuste y calibración para asegurar el correcto funcionamiento de válvulas y sistemas de protección.",
      href: "/calibracion-de-valvulas",
      image: images.servicioValvulas,
    },
    {
      code: "M-03",
      id: "m-03",
      name: "X-Pando",
      description:
        "Sistema de cemento expansivo para uniones industriales, diseñado para generar conexiones resistentes bajo condiciones exigentes de presión y temperatura.",
      href: "/x-pando",
      image: images.servicioXpando,
    },
  ] satisfies Service[],
} as const;
