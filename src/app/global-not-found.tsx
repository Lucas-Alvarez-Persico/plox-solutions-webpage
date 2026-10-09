import type { Metadata } from "next";

import { ButtonPrimary } from "@/components/button";
import { SiteShell, siteMetadata } from "@/components/site-shell";
import { localizePath } from "@/lib/i18n";
import "./globals.css";

/**
 * 404 de todo el sitio. Como no sabe desde qué idioma se llegó, va en español
 * (el idioma principal) con una línea en inglés debajo.
 */
export const metadata: Metadata = {
  ...siteMetadata("es"),
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <SiteShell locale="es">
      <section className="section-x bg-bone py-30 desktop:py-40">
        <div className="container-site flex flex-col gap-8">
          <p className="type-eyebrow text-green">404</p>
          <h1 className="type-display-2 text-ink">Página no encontrada</h1>
          <p className="type-prose max-w-[660px] text-ink-black">
            La página que buscás no existe o cambió de dirección.
          </p>
          <p lang="en" className="type-prose max-w-[660px] text-gray-deep">
            The page you are looking for doesn&apos;t exist or has moved.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <ButtonPrimary href="/">Ir al inicio</ButtonPrimary>
            <ButtonPrimary href={localizePath("en", "/")}>
              <span lang="en">Go to home page</span>
            </ButtonPrimary>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
