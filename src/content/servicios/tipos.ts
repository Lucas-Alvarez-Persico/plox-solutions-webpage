import type { SiteImage } from "@/content/images";

/** Contenido de una página de servicio. */
export interface Servicio {
  slug: string;
  /** Portada (P-01) */
  eyebrow: string;
  /** Va en mayúsculas en el diseño original; el texto ya viene así. */
  titulo: string;
  resumen: string;
  portada: SiteImage;
}
