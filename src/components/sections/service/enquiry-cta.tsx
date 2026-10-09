import { ButtonPrimary } from "@/components/button";
import { sectionHref, sectionIds, siteContent } from "@/content/site";
import type { Servicio } from "@/content/servicios/tipos";
import type { Locale } from "@/lib/i18n";

/**
 * P-07 · Enquiry — el cierre de la página, con un botón que lleva al
 * formulario de la home.
 *
 * El título va fijo en 64px en los tres breakpoints, como en el original.
 */
export function EnquiryCta({
  servicio,
  locale,
}: {
  servicio: Servicio;
  locale: Locale;
}) {
  return (
    <section
      id="p-07-enquiry"
      className="section-x scroll-mt-18 bg-bone py-16 tablet:py-24 desktop:py-30"
    >
      <div data-reveal className="container-site flex flex-col gap-8">
        <h2 className="type-display-2 max-w-[800px] text-[64px] break-words text-ink">
          {servicio.cierre}
        </h2>

        <div>
          <ButtonPrimary href={sectionHref(locale, sectionIds.enquiry)}>
            {siteContent[locale].ui.contactCta}
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
}
