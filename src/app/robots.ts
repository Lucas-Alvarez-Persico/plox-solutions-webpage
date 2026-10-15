import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

// Se genera en el build: el sitio se publica como export estático.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // El styleguide no existe en producción, pero se declara por las dudas.
      disallow: ["/styleguide", "/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
