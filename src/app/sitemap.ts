import type { MetadataRoute } from "next";
import { servicios } from "@/content/servicios";
import { languageAlternates, localizePath, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site-config";

// Se genera en el build: el sitio se publica como export estático.
export const dynamic = "force-static";

/**
 * URL absoluta de una ruta, con la barra final que usa el export
 * (`trailingSlash`): así el sitemap no lista direcciones que redirigen.
 */
function url(path: string) {
  return `${siteUrl}${path.endsWith("/") ? path : `${path}/`}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();

  const paginas = [
    { ruta: "/", priority: 1 },
    ...servicios.es.map((servicio) => ({
      ruta: `/${servicio.slug}`,
      priority: 0.8,
    })),
  ];

  // Cada página figura una vez por idioma, con sus alternativas declaradas.
  return paginas.flatMap(({ ruta, priority }) => {
    const alternativas = Object.fromEntries(
      Object.entries(languageAlternates(ruta)).map(([idioma, path]) => [
        idioma,
        url(path),
      ]),
    );

    return locales.map((locale) => ({
      url: url(localizePath(locale, ruta)),
      lastModified: ahora,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: alternativas },
    }));
  });
}
