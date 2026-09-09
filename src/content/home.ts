import { sectionIds } from "./site";

export const hero = {
  eyebrow: "Specialized Industrial Solutions",
  title: "Ingeniería para mantener la industria en movimiento.",
  body: "Soluciones especializadas para intervenir, mantener y optimizar instalaciones industriales, reduciendo interrupciones y asegurando la continuidad de las operaciones.",
  cta: { label: "Contactanos", href: `#${sectionIds.enquiry}` },
} as const;
