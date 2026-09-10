import type { MetadataRoute } from "next";
import { servicios } from "@/content/servicios";
import { siteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: ahora,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...servicios.map((servicio) => ({
      url: `${siteUrl}/${servicio.slug}`,
      lastModified: ahora,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
