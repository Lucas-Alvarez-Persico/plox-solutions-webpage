import { EnquiryCta } from "@/components/sections/service/enquiry-cta";
import { NextService } from "@/components/sections/service/next-service";
import { Outcome } from "@/components/sections/service/outcome";
import { Project } from "@/components/sections/service/project";
import { Story } from "@/components/sections/service/story";
import { vecinos } from "@/content/servicios";
import type { Servicio } from "@/content/servicios/tipos";
import type { Locale } from "@/lib/i18n";

/**
 * Las tres páginas de servicio comparten la misma plantilla; solo cambia el
 * contenido. Cada ruta vive en su propio archivo y compone esto.
 */
export function ServicePage({
  servicio,
  locale,
}: {
  servicio: Servicio;
  locale: Locale;
}) {
  const { anterior, siguiente } = vecinos(locale, servicio.slug);

  return (
    <>
      <Project servicio={servicio} />
      <Story servicio={servicio} />
      <Outcome servicio={servicio} />
      <EnquiryCta servicio={servicio} locale={locale} />
      <NextService anterior={anterior} siguiente={siguiente} locale={locale} />
    </>
  );
}
