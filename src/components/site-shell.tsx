import type { Metadata } from "next";

import { AnchorScroll } from "@/components/anchor-scroll";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SiteRail } from "@/components/site-rail";
import { siteContent } from "@/content/site";
import { fontVariables } from "@/lib/fonts";
import {
  languageAlternates,
  localizePath,
  ogLocales,
  type Locale,
} from "@/lib/i18n";
import {
  siteDescription,
  siteName,
  siteTagline,
  siteUrl,
} from "@/lib/site-config";

/**
 * Metadata base de cada idioma. Cada idioma tiene su propio root layout, así
 * que esto se arma una vez por idioma y las páginas lo completan.
 */
export function siteMetadata(locale: Locale): Metadata {
  const title = `${siteName} — ${siteTagline[locale]}`;
  const description = siteDescription[locale];
  const home = localizePath(locale, "/");

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s — ${siteName}`,
    },
    description,
    applicationName: siteName,
    alternates: { canonical: home, languages: languageAlternates("/") },
    openGraph: {
      type: "website",
      locale: ogLocales[locale],
      url: home,
      siteName,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/**
 * Documento completo del sitio: el `<html>` con el idioma de la página, el nav,
 * el footer y los efectos globales. Lo comparten los root layouts de cada
 * idioma.
 */
export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const { ui } = siteContent[locale];

  return (
    <html lang={locale} className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#contenido"
          className="type-label sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-green focus:px-6 focus:py-3 focus:text-bone"
        >
          {ui.skipToContent}
        </a>
        <AnchorScroll />
        <ScrollReveal />
        <SiteRail />
        <SiteNav locale={locale} />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
