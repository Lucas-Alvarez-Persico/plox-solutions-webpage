import type { MetadataRoute } from "next";
import { servicios } from "@/content/servicios";
import { languageAlternates, localizePath, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site-config";

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
        `${siteUrl}${path}`,
      ]),
    );

    return locales.map((locale) => ({
      url: `${siteUrl}${localizePath(locale, ruta)}`,
      lastModified: ahora,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: alternativas },
    }));
  });
}
