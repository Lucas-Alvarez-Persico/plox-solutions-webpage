/**
 * Idiomas del sitio. El español es el idioma principal y va sin prefijo en la
 * URL; el inglés vive bajo `/en`.
 *
 * En el código, cada página se identifica por su ruta en español; las rutas de
 * los otros idiomas salen de `localizePath`, que además traduce las que tienen
 * nombre propio en ese idioma (`/sellado-de-fuga` ↔ `/en/leak-sealing`).
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
 * Rutas traducidas, de la ruta en español a la de cada idioma (sin el prefijo
 * del idioma). Las que no figuran se usan tal cual, como `/x-pando`, que es el
 * nombre del producto.
 *
 * Al cambiar una ruta acá también hay que renombrar su carpeta en `src/app/en`
 * y agregar la redirección desde la ruta vieja en `public/.htaccess`.
 */
const translatedPaths: Partial<Localized<Record<string, string>>> = {
  en: {
    "/sellado-de-fuga": "/leak-sealing",
    "/calibracion-de-valvulas": "/valve-calibration",
    "/x-pando/preguntas-frecuentes": "/x-pando/faq",
    "/nosotros": "/about-us",
    "/servicios": "/services",
    "/contacto": "/contact",
  },
};

/** Separa la ruta del ancla y le saca la barra final que agrega el export. */
function splitPath(path: string) {
  const hashIndex = path.indexOf("#");
  const pathname = hashIndex === -1 ? path : path.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : path.slice(hashIndex);
  const trimmed = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  return { pathname: trimmed, hash };
}

/**
 * Ruta de una página en el idioma pedido, a partir de su ruta en español.
 * Acepta anclas: `/#contacto` pasa a `/en#contacto`.
 */
export function localizePath(locale: Locale, path: string) {
  if (locale === defaultLocale) return path;

  const { pathname, hash } = splitPath(path);
  if (pathname === "/") return `/${locale}${hash}`;

  const translated = translatedPaths[locale]?.[pathname] ?? pathname;
  return `/${locale}${translated}${hash}`;
}

/** Inversa de `localizePath`: la ruta en español de cualquier página. */
export function delocalizePath(path: string) {
  const { pathname, hash } = splitPath(path);

  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}`) return `/${hash}`;
    if (!pathname.startsWith(`/${locale}/`)) continue;

    const localized = pathname.slice(locale.length + 1);
    const original = Object.entries(translatedPaths[locale] ?? {}).find(
      ([, translated]) => translated === localized,
    )?.[0];
    return `${original ?? localized}${hash}`;
  }

  return path;
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
