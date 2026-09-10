import type { SiteImage } from "@/content/images";
import type { SiteVideo } from "@/content/videos";

export interface BloqueHistoria {
  titulo: string;
  cuerpo: string;
}

/**
 * Párrafo de un bloque de técnica. Algunos arrancan con una etiqueta en
 * negrita seguida de su descripción.
 */
export type Parrafo = string | { etiqueta: string; texto: string };

/** Bloque de técnica: puede llevar más de un párrafo. */
export interface BloqueTecnica {
  titulo: string;
  cuerpos: Parrafo[];
}

/** Contenido de una página de servicio. */
export interface Servicio {
  slug: string;
  /** Nombre corto, para el navegador entre servicios. */
  nombreCorto: string;
  /** Miniatura que se muestra al enlazar a este servicio desde otro. */
  miniatura: SiteImage;

  /** Portada (P-01) */
  eyebrow: string;
  /** Va en mayúsculas en el diseño original; el texto ya viene así. */
  titulo: string;
  resumen: string;
  portada: SiteImage;

  /** Desafío y solución (P-03). Los títulos se pasan a mayúsculas por CSS. */
  historia: [BloqueHistoria, BloqueHistoria];

  /** Técnicas (P-04) */
  tecnicas: {
    encabezado: string;
    intro: string;
    bloques: BloqueTecnica[];
    video: SiteVideo;
  };

  /** Cierre (P-07) */
  cierre: string;
}
