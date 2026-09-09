/**
 * URL pública del sitio. Se usa para resolver enlaces absolutos en la metadata,
 * el sitemap y robots.txt. Definila en producción con NEXT_PUBLIC_SITE_URL.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const siteName = "Plox Solutions";

export const siteDescription =
  "Soluciones especializadas para intervenir, mantener y optimizar instalaciones industriales, reduciendo interrupciones y asegurando la continuidad de las operaciones.";
