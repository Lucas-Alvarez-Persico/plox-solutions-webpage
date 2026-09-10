import { StickyVideo } from "@/components/sections/service/sticky-video";
import type { Servicio } from "@/content/servicios/tipos";

/**
 * P-04 · Outcome — las técnicas del servicio sobre fondo oscuro, con el video
 * acompañando en una columna sticky. Por debajo de 810px las dos columnas se
 * apilan.
 *
 * El video mide 497px fijos en los tres breakpoints, como en el original: en
 * pantallas chicas eso lo deja recortado por el `overflow` de la sección. Para
 * que se adapte alcanza con cambiar `size-[497px]` por `aspect-square w-full`
 * en `sticky-video.tsx`.
 */
export function Outcome({ servicio }: { servicio: Servicio }) {
  const { tecnicas } = servicio;

  return (
    <section
      id="p-04-outcome"
      className="section-x scroll-mt-18 overflow-clip bg-ink-deepest py-16 tablet:py-24 desktop:py-30"
    >
      <div className="container-site flex flex-col gap-12 tablet:flex-row tablet:items-start desktop:gap-20">
        <div className="flex min-w-0 flex-1 flex-col gap-16 tablet:gap-[50px]">
          <div className="flex flex-col gap-16 tablet:gap-[50px]">
            <h2
              data-reveal
              className="type-display-2 text-[39px] break-words text-orange"
            >
              {tecnicas.encabezado}
            </h2>

            <p data-reveal className="type-body-s max-w-[660px] text-bone">
              {tecnicas.intro}
            </p>
          </div>

          {tecnicas.bloques.map((bloque, index) => (
            <div
              key={`${bloque.titulo}-${index}`}
              data-reveal
              className="flex flex-col gap-4"
            >
              <h3 className="type-kicker text-[20px] text-bone">
                {bloque.titulo}
              </h3>
              {/* El original separa los párrafos con un <p> vacío; acá va gap. */}
              <div className="flex max-w-[660px] flex-col gap-6">
                {bloque.cuerpos.map((cuerpo, i) =>
                  typeof cuerpo === "string" ? (
                    <p key={`${i}-${cuerpo.slice(0, 24)}`} className="type-detail text-bone">
                      {cuerpo}
                    </p>
                  ) : (
                    <p key={`${i}-${cuerpo.etiqueta}`} className="type-detail text-bone">
                      <strong className="font-semibold">{cuerpo.etiqueta}</strong>
                      {cuerpo.texto ? (
                        <>
                          <br />
                          {cuerpo.texto}
                        </>
                      ) : null}
                    </p>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="tablet:sticky tablet:top-30 tablet:w-70 tablet:shrink-0 desktop:w-[497px]">
          <StickyVideo video={tecnicas.video} />
        </div>
      </div>
    </section>
  );
}
