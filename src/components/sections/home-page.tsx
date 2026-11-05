import { Enquiry } from "@/components/sections/enquiry";
import { Hero } from "@/components/sections/hero";
import { Method } from "@/components/sections/method";
import { Record } from "@/components/sections/record";
import { ScrollToSection } from "@/components/sections/scroll-to-section";
import { homeContent } from "@/content/home";
import { sectionIds, type SectionKey } from "@/content/site";
import type { Locale } from "@/lib/i18n";

/**
 * La home es la misma en los dos idiomas; solo cambia el contenido.
 *
 * Con `section`, es la página de una sección (`/contacto`, `/en/contact`): la
 * misma home, que al abrirse baja hasta esa sección.
 */
export function HomePage({
  locale,
  section,
}: {
  locale: Locale;
  section?: SectionKey;
}) {
  const content = homeContent[locale];

  return (
    <>
      {section ? <ScrollToSection id={sectionIds[locale][section]} /> : null}
      <Hero content={content.hero} locale={locale} />
      <Record content={content.record} locale={locale} />
      <Method content={content.method} locale={locale} />
      <Enquiry content={content.enquiry} locale={locale} />
    </>
  );
}
