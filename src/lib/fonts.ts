import {
  Archivo,
  Archivo_Black,
  Martian_Mono,
  Montserrat,
} from "next/font/google";

/**
 * Tipografías del sitio, tal como se usan en el diseño original de Framer:
 * - Montserrat: displays y textos de cuerpo
 * - Archivo: navegación, botones, eyebrows y demás UI
 * - Archivo Black: display 2 (títulos de sección)
 * - Martian Mono: códigos de servicio (M-01, M-02, M-03)
 */

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

export const martianMono = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian-mono",
  display: "swap",
});

export const fontVariables = [
  montserrat.variable,
  archivo.variable,
  archivoBlack.variable,
  martianMono.variable,
].join(" ");
