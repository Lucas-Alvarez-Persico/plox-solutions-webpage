import { ButtonPrimary } from "@/components/button";
import { RevealFrame } from "@/components/sections/reveal-frame";
import type { Service } from "@/content/home";

/**
 * Panel de un servicio: la ilustración enmarcada, el código, la descripción y
 * el enlace a la página del servicio.
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
        <p className="type-eyebrow text-orange">{service.code}</p>

        <p className="type-prose max-w-[660px] text-ink">
          {service.description}
        </p>

        <div className="flex gap-3 pt-4">
          <ButtonPrimary href={service.href}>{ctaLabel}</ButtonPrimary>
        </div>
      </div>
    </article>
  );
}
