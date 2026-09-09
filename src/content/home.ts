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
