import Image from "next/image";

import type { Servicio } from "@/content/servicios/tipos";

/**
 * P-01 · Project — portada de la página de servicio: la foto a sangre con el
 * título y la bajada apoyados abajo.
 *
 * El título va fijo en 97px en los tres breakpoints, igual que en el diseño
 * original. Para que escale como el de la home (44 / 72 / 97) alcanza con sacar
 * la clase `text-[97px]`.
 *
 * `break-words` es necesario justamente por ese tamaño fijo: en mobile hay
 * palabras más anchas que la pantalla, y sin esto la sección las recorta.
 */
export function Project({ servicio }: { servicio: Servicio }) {
  return (
    <section
      id="p-01-project"
      className="section-x relative flex scroll-mt-18 flex-col justify-end overflow-clip bg-bone pt-30 pb-10 tablet:pt-35 tablet:pb-14 desktop:pt-50 desktop:pb-20"
    >
      <div data-reveal data-zoom className="absolute inset-0">
        <Image
          src={servicio.portada.src}
          alt={servicio.portada.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="container-site relative flex flex-col gap-5">
        <p
          data-reveal
          className="type-eyebrow text-orange"
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          {servicio.eyebrow}
        </p>

        <h1
          data-reveal
          className="type-display-1 max-w-[1000px] text-[97px] break-words text-bone-dim"
          style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
        >
          {servicio.titulo}
        </h1>

        <p
          data-reveal
          className="type-summary max-w-[720px] text-bone"
          style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
        >
          {servicio.resumen}
        </p>
      </div>
    </section>
  );
}
