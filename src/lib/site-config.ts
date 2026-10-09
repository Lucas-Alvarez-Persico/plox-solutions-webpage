import type { Localized } from "@/lib/i18n";

/**
 * URL pública del sitio. Se usa para resolver enlaces absolutos en la metadata,
 * el sitemap y robots.txt. Definila en producción con NEXT_PUBLIC_SITE_URL.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const siteName = "Plox Solutions";

/** Lema que acompaña al nombre en el título de la home. */
export const siteTagline: Localized<string> = {
  es: "Ingeniería para mantener la industria en movimiento",
  en: "Engineering to keep industry moving",
};

export const siteDescription: Localized<string> = {
  es: "Soluciones especializadas para intervenir, mantener y optimizar instalaciones industriales, reduciendo interrupciones y asegurando la continuidad de las operaciones.",
  en: "Specialized solutions for intervening in, maintaining, and optimizing industrial facilities, reducing downtime and ensuring operational continuity.",
};
