import { EnquiryCta } from "@/components/sections/service/enquiry-cta";
import { NextService } from "@/components/sections/service/next-service";
import { Outcome } from "@/components/sections/service/outcome";
import { Project } from "@/components/sections/service/project";
import { Story } from "@/components/sections/service/story";
import { vecinos } from "@/content/servicios";
import type { Servicio } from "@/content/servicios/tipos";

/**
 * Las tres páginas de servicio comparten la misma plantilla; solo cambia el
 * contenido. Cada ruta vive en su propio archivo y compone esto.
 */
export function ServicePage({ servicio }: { servicio: Servicio }) {
  const { anterior, siguiente } = vecinos(servicio.slug);

  return (
    <>
      <Project servicio={servicio} />
      <Story servicio={servicio} />
      <Outcome servicio={servicio} />
      <EnquiryCta servicio={servicio} />
      <NextService anterior={anterior} siguiente={siguiente} />
    </>
  );
}
