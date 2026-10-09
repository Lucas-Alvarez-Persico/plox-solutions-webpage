import { Enquiry } from "@/components/sections/enquiry";
import { Hero } from "@/components/sections/hero";
import { Method } from "@/components/sections/method";
import { Record } from "@/components/sections/record";
import { homeContent } from "@/content/home";
import type { Locale } from "@/lib/i18n";

/** La home es la misma en los dos idiomas; solo cambia el contenido. */
export function HomePage({ locale }: { locale: Locale }) {
  const content = homeContent[locale];

  return (
    <>
      <Hero content={content.hero} />
      <Record content={content.record} />
      <Method content={content.method} />
      <Enquiry content={content.enquiry} locale={locale} />
    </>
  );
}
