import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SiteRail } from "@/components/site-rail";
import { fontVariables } from "@/lib/fonts";
import { siteDescription, siteName, siteUrl } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Ingeniería para mantener la industria en movimiento`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName,
    title: `${siteName} — Ingeniería para mantener la industria en movimiento`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Ingeniería para mantener la industria en movimiento`,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#contenido"
          className="type-label sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-orange focus:px-6 focus:py-3 focus:text-bone"
        >
          Saltar al contenido
        </a>
        <ScrollReveal />
        <SiteRail />
        <SiteNav />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
