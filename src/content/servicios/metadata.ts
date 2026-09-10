import type { Metadata } from "next";

import { siteName } from "@/lib/site-config";
import type { Servicio } from "./tipos";

/**
 * Metadata de una página de servicio.
 *
 * Como título se usa el nombre corto y no el del encabezado, que en el diseño
 * va todo en mayúsculas y quedaría gritado en la pestaña y en los resultados de
 * búsqueda.
 */
export function metadataDeServicio(servicio: Servicio): Metadata {
  const titulo = `${servicio.nombreCorto} — ${siteName}`;
  const ruta = `/${servicio.slug}`;

  const imagen = {
    url: servicio.portada.src.src,
    width: servicio.portada.src.width,
    height: servicio.portada.src.height,
    alt: servicio.portada.alt,
  };

  return {
    title: servicio.nombreCorto,
    description: servicio.resumen,
    alternates: { canonical: ruta },
    openGraph: {
      type: "article",
      locale: "es_AR",
      url: ruta,
      siteName,
      title: titulo,
      description: servicio.resumen,
      images: [imagen],
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: servicio.resumen,
      images: [imagen],
    },
  };
}
