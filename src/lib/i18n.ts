/**
 * Idiomas del sitio. El español es el idioma principal y va sin prefijo en la
 * URL; el inglés vive bajo `/en`. Las rutas son las mismas en los dos idiomas
 * (`/sellado-de-fuga` ↔ `/en/sellado-de-fuga`), igual que en Framer.
 */
export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

/** Un valor por idioma. */
export type Localized<T> = Record<Locale, T>;

/** Nombre de cada idioma en su propio idioma, para el selector del nav. */
export const localeNames: Localized<string> = {
  es: "Español",
  en: "English",
};

/** Locale de Open Graph de cada idioma. */
export const ogLocales: Localized<string> = {
  es: "es_AR",
  en: "en_US",
};

/**
 * Ruta de una página en el idioma pedido, a partir de su ruta en español.
 * Acepta anclas: `/#contacto` pasa a `/en#contacto`.
 */
export function localizePath(locale: Locale, path: string) {
  if (locale === defaultLocale) return path;
  if (path === "/") return `/${locale}`;
  if (path.startsWith("/#")) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}

/** Inversa de `localizePath`: la ruta en español de cualquier página. */
export function delocalizePath(pathname: string) {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(locale.length + 1);
    }
  }
  return pathname;
}

/**
 * Alternativas de idioma de una página para la metadata (`hreflang`). El
 * `x-default` apunta al español, que es el idioma principal.
 */
export function languageAlternates(path: string) {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, localizePath(locale, path)]),
    ),
    "x-default": path,
  };
}
