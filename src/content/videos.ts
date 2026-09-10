import { images, type SiteImage } from "./images";

/**
 * Videos de la columna sticky de cada página de servicio. Viven en `public/`
 * porque son archivos que el navegador pide por URL, no assets que empaquete
 * el bundler.
 */
export interface SiteVideo {
  src: string;
  /** Primer fotograma: se muestra hasta que el visitante llega a la sección. */
  poster: SiteImage;
  width: number;
  height: number;
}

export const videos = {
  sellado: {
    src: "/videos/sellado.mp4",
    poster: images.posterSellado,
    width: 1280,
    height: 1280,
  },
  valvulas: {
    src: "/videos/valvulas.mp4",
    poster: images.posterValvulas,
    width: 720,
    height: 720,
  },
  xpando: {
    src: "/videos/xpando.mp4",
    poster: images.posterXpando,
    width: 720,
    height: 720,
  },
} as const satisfies Record<string, SiteVideo>;
