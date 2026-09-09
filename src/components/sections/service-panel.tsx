import Image from "next/image";

import { ButtonPrimary } from "@/components/button";
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
      <div className="relative aspect-[17/10] w-full overflow-clip bg-bone-muted">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 1200px) 805px, (min-width: 810px) 395px, 100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col gap-4">
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
