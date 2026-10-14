import { ButtonPrimary } from "@/components/button";
import { RevealFrame } from "@/components/sections/reveal-frame";
import { AccionesServicio } from "@/components/sections/service/acciones-servicio";
import type { Service } from "@/content/home";

/**
 * Panel de un servicio: la ilustración enmarcada, el código, la descripción y
 * el enlace a la página del servicio. Si el servicio tiene descargas o
 * contacto, van en una fila arriba del enlace.
 */
export function ServicePanel({
  service,
  ctaLabel,
}: {
  service: Service;
  ctaLabel: string;
}) {
  return (
    <article
      id={service.id}
      aria-label={service.name}
      className="flex scroll-mt-18 flex-col gap-8"
    >
      <RevealFrame image={service.image} />

      <div
        data-reveal
        style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        className="flex flex-col gap-4"
      >
        <p className="type-eyebrow text-green">{service.code}</p>

        <p className="type-prose max-w-[660px] text-ink">
          {service.description}
        </p>

        <div className="flex flex-col items-start gap-4 pt-4">
          {service.acciones?.length ? (
            <div className="flex flex-wrap gap-4">
              <AccionesServicio acciones={service.acciones} fantasma />
            </div>
          ) : null}
          <ButtonPrimary href={service.href}>{ctaLabel}</ButtonPrimary>
        </div>
      </div>
    </article>
  );
}
