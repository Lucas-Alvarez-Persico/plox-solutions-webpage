import { ButtonPrimary } from "@/components/button";
import { AccionesServicio } from "@/components/sections/service/acciones-servicio";
import { sectionHref, sectionIds, siteContent } from "@/content/site";
import type { Servicio } from "@/content/servicios/tipos";
import type { Locale } from "@/lib/i18n";

/**
 * P-07 · Enquiry — el cierre de la página, con un botón que lleva al
 * formulario de la home.
 *
 * El título mide 45px en mobile y 64px desde tablet, como en Framer. Si el
 * servicio tiene botones de descarga o contacto, se repiten acá en el orden de
 * Framer: las descargas, el de contacto y al final WhatsApp. En mobile van
 * apilados.
 */
export function EnquiryCta({
  servicio,
  locale,
}: {
  servicio: Servicio;
  locale: Locale;
}) {
  const acciones = servicio.acciones ?? [];
  const descargas = acciones.filter((accion) => accion.tipo === "descarga");
  const externos = acciones.filter((accion) => accion.tipo === "externo");

  return (
    <section
      id="p-07-enquiry"
      className="section-x scroll-mt-18 bg-bone py-16 tablet:py-24 desktop:py-30"
    >
      <div data-reveal className="container-site flex flex-col gap-8">
        <h2 className="type-display-2 max-w-[800px] text-[45px] break-words text-ink tablet:text-[64px]">
          {servicio.cierre}
        </h2>

        <div className="flex flex-col items-start gap-5 tablet:flex-row tablet:flex-wrap tablet:gap-8">
          <AccionesServicio acciones={descargas} />
          <ButtonPrimary href={sectionHref(locale, sectionIds.enquiry)}>
            {siteContent[locale].ui.contactCta}
          </ButtonPrimary>
          <AccionesServicio acciones={externos} />
        </div>
      </div>
    </section>
  );
}
