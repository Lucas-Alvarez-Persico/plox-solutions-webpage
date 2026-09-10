import type { SiteImage } from "@/content/images";

export interface BloqueHistoria {
  titulo: string;
  cuerpo: string;
}

/** Contenido de una página de servicio. */
export interface Servicio {
  slug: string;

  /** Portada (P-01) */
  eyebrow: string;
  /** Va en mayúsculas en el diseño original; el texto ya viene así. */
  titulo: string;
  resumen: string;
  portada: SiteImage;

  /** Desafío y solución (P-03). Los títulos se pasan a mayúsculas por CSS. */
  historia: [BloqueHistoria, BloqueHistoria];
}
