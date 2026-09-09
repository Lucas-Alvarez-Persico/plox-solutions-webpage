import type { StaticImageData } from "next/image";

import heroPhoto from "@/assets/images/hero.jpg";
import logo from "@/assets/images/logo-plox.png";
import servicioSellado from "@/assets/images/servicio-sellado.jpg";
import servicioValvulas from "@/assets/images/servicio-valvulas.jpg";
import servicioXpando from "@/assets/images/servicio-xpando.jpg";
import textura1 from "@/assets/images/textura-1.jpg";
import textura2 from "@/assets/images/textura-2.jpg";

export interface SiteImage {
  src: StaticImageData;
  /** Vacío en imágenes decorativas: no aportan información al lector de pantalla. */
  alt: string;
}

export const images = {
  logo: {
    src: logo,
    alt: "Plox Solutions",
  },
  hero: {
    src: heroPhoto,
    alt: "Dos técnicos ajustando los espárragos de una brida sobre equipamiento industrial en planta.",
  },
  servicioSellado: {
    src: servicioSellado,
    alt: "Esquema isométrico de un sellado de fuga: una abrazadera inyectada con sellante sobre la junta bridada de una cañería, alimentada por una bomba manual con manómetro.",
  },
  servicioValvulas: {
    src: servicioValvulas,
    alt: "Esquema isométrico de una calibración de válvulas: una válvula de globo con posicionador conectada a un calibrador portátil que indica 45,2 % de posición.",
  },
  servicioXpando: {
    src: servicioXpando,
    alt: "Esquema isométrico del sistema X-Pando: vista en corte de una unión roscada sellada con cemento expansivo, con detalle ampliado del filete.",
  },
  textura1: {
    src: textura1,
    alt: "",
  },
  textura2: {
    src: textura2,
    alt: "",
  },
} as const satisfies Record<string, SiteImage>;
