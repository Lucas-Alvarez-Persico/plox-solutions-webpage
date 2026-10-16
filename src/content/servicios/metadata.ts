import type { Metadata } from "next";

import {
  languageAlternates,
  localizePath,
  ogLocales,
  type Locale,
} from "@/lib/i18n";
import { siteName } from "@/lib/site-config";
import type { PreguntasFrecuentes, Servicio } from "./tipos";

/**
 * Metadata de una página de servicio.
 *
 * Como título se usa el nombre corto y no el del encabezado, que en el diseño
 * va todo en mayúsculas y quedaría gritado en la pestaña y en los resultados de
 * búsqueda.
 */
export function metadataDeServicio(
  servicio: Servicio,
  locale: Locale,
): Metadata {
  return metadataDePagina({
    titulo: servicio.nombreCorto,
    descripcion: servicio.resumen,
    rutaBase: `/${servicio.slug}`,
    servicio,
    locale,
  });
}

/** Metadata de la página de preguntas frecuentes de un servicio. */
export function metadataDePreguntas(
  servicio: Servicio,
  contenido: PreguntasFrecuentes,
  rutaBase: string,
  locale: Locale,
): Metadata {
  return metadataDePagina({
    titulo: `${servicio.nombreCorto}: ${contenido.titulo}`,
    descripcion: contenido.descripcion,
    rutaBase,
    servicio,
    locale,
  });
}

/** Lo común: rutas por idioma y la portada del servicio para compartir. */
function metadataDePagina({
  titulo,
  descripcion,
  rutaBase,
  servicio,
  locale,
}: {
  titulo: string;
  descripcion: string;
  rutaBase: string;
  servicio: Servicio;
  locale: Locale;
}): Metadata {
  const tituloCompleto = `${titulo} — ${siteName}`;
  const ruta = localizePath(locale, rutaBase);

  const imagen = {
    url: servicio.portada.src.src,
    width: servicio.portada.src.width,
    height: servicio.portada.src.height,
    alt: servicio.portada.alt,
  };

  return {
    title: titulo,
    description: descripcion,
    alternates: {
      canonical: ruta,
      languages: languageAlternates(rutaBase),
    },
    openGraph: {
      type: "article",
      locale: ogLocales[locale],
      url: ruta,
      siteName,
      title: tituloCompleto,
      description: descripcion,
      images: [imagen],
    },
    twitter: {
      card: "summary_large_image",
      title: tituloCompleto,
      description: descripcion,
      images: [imagen],
    },
  };
}
