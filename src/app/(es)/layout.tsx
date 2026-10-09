import { SiteShell, siteMetadata } from "@/components/site-shell";
import "../globals.css";

/**
 * Root layout del sitio en español. El inglés tiene el suyo en `app/en`: cada
 * idioma necesita su propio `<html lang>`.
 */
export const metadata = siteMetadata("es");

export default function SpanishLayout({ children }: LayoutProps<"/">) {
  return <SiteShell locale="es">{children}</SiteShell>;
}
