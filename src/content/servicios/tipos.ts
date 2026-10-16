import type { SiteImage } from "@/content/images";
import type { SiteVideo } from "@/content/videos";

export interface BloqueHistoria {
  titulo: string;
  cuerpo: string;
}

/**
 * Párrafo de un bloque de técnica. Algunos arrancan con una etiqueta en
 * negrita seguida de su descripción; otros resaltan un dato dentro de la
 * oración, y van armados por partes.
 */
export type Parrafo =
  | string
  | { etiqueta: string; texto: string }
  | { partes: (string | { negrita: string })[] };

/** Bloque de técnica: puede llevar más de un párrafo. */
export interface BloqueTecnica {
  titulo: string;
  cuerpos: Parrafo[];
}

/**
 * Botón de la columna del video. Una descarga baja el archivo; un enlace
 * externo se abre en otra pestaña; uno interno navega dentro del sitio.
 */
export type AccionServicio =
  | { tipo: "descarga"; etiqueta: string; href: string; nombreArchivo: string }
  | { tipo: "externo"; etiqueta: string; href: string; icono?: "whatsapp" }
  | { tipo: "interno"; etiqueta: string; href: string };

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
  /** Frase en negrita debajo del resumen. */
  resumenDestacado?: string;
  portada: SiteImage;
  /**
   * Ajuste de la portada, tomado de Framer: todas llevan un poco más de
   * contraste, y la saturación y el encuadre cambian según la foto.
   */
  portadaAjuste: { saturacion: number; encuadre?: string };

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

  /** Botones de descarga y contacto: van en la portada, debajo del video y en el cierre. */
  acciones?: AccionServicio[];
  /** Botones de debajo del video, cuando no son los mismos que `acciones`. */
  accionesVideo?: AccionServicio[];
}

/** Una pregunta frecuente con su respuesta, que puede tener varios párrafos. */
export interface PreguntaFrecuente {
  pregunta: string;
  respuesta: string[];
}

/** Página de preguntas frecuentes de un servicio. */
export interface PreguntasFrecuentes {
  /** Título de la portada; abajo va el del servicio, en verde. */
  titulo: string;
  resumen: string;
  /** Para buscadores y redes: la bajada de la portada dice poco fuera de contexto. */
  descripcion: string;
  preguntas: PreguntaFrecuente[];
}
