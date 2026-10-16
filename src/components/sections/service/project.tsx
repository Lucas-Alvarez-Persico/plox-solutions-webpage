import Image from "next/image";

import { AccionesServicio } from "@/components/sections/service/acciones-servicio";
import type { Servicio } from "@/content/servicios/tipos";

/**
 * P-01 · Project — portada de la página de servicio: la foto a sangre con el
 * título y la bajada apoyados abajo.
 *
 * El título mide 44 / 86 / 97px según el breakpoint, como en Framer: el de la
 * home es 44 / 72 / 97, así que en tablet se sobreescribe.
 *
 * `break-words` queda de resguardo: si un título trae una palabra más ancha que
 * la pantalla, la parte en vez de dejar que la sección la recorte.
 *
 * `encabezado` reemplaza el título y la bajada del servicio: lo usa la página
 * de preguntas frecuentes, que comparte la portada.
 */
export function Project({
  servicio,
  encabezado,
}: {
  servicio: Servicio;
  encabezado?: { titulo: React.ReactNode; resumen: string };
}) {
  const titulo = encabezado?.titulo ?? servicio.titulo;
  const resumen = encabezado?.resumen ?? servicio.resumen;
  const resumenDestacado = encabezado ? undefined : servicio.resumenDestacado;

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
          style={{
            filter: `contrast(1.08) saturate(${servicio.portadaAjuste.saturacion})`,
            objectPosition: servicio.portadaAjuste.encuadre,
          }}
        />
      </div>

      <div className="container-site relative flex flex-col gap-5">
        <p
          data-reveal
          className="type-eyebrow text-[12px] font-bold text-green"
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          {servicio.eyebrow}
        </p>

        <h1
          data-reveal
          className="type-display-1 max-w-[1000px] break-words text-bone-dim tablet:text-[86px] desktop:text-[97px]"
          style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
        >
          {titulo}
        </h1>

        {/* La frase destacada va 13,5px debajo del resumen, como en Framer. */}
        <div
          data-reveal
          className="flex max-w-[720px] flex-col gap-[13.5px]"
          style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
        >
          <p className="type-summary text-bone">{resumen}</p>
          {resumenDestacado ? (
            <p className="type-summary font-bold text-bone">
              {resumenDestacado}
            </p>
          ) : null}
        </div>

        {servicio.acciones?.length ? (
          <div
            data-reveal
            className="mt-2 flex flex-wrap gap-x-[23px] gap-y-3"
            style={{ "--reveal-delay": "380ms" } as React.CSSProperties}
          >
            <AccionesServicio acciones={servicio.acciones} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
