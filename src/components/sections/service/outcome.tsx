import { AccionesServicio } from "@/components/sections/service/acciones-servicio";
import { StickyVideo } from "@/components/sections/service/sticky-video";
import type { Parrafo, Servicio } from "@/content/servicios/tipos";

/**
 * P-04 · Outcome — las técnicas del servicio sobre fondo oscuro, con el video
 * acompañando en una columna sticky. Por debajo de 810px las dos columnas se
 * apilan: el video va al final, a todo el ancho y con 64px de aire arriba y
 * abajo, como en Framer.
 */
export function Outcome({ servicio }: { servicio: Servicio }) {
  const { tecnicas } = servicio;
  const acciones = servicio.accionesVideo ?? servicio.acciones;

  return (
    <section
      id="p-04-outcome"
      className="section-x scroll-mt-18 overflow-clip bg-ink-deepest py-16 tablet:py-24 desktop:py-30"
    >
      <div className="container-site flex flex-col gap-9 tablet:flex-row tablet:items-start tablet:gap-12 desktop:gap-20">
        <div className="flex min-w-0 flex-1 flex-col gap-16 tablet:gap-[50px]">
          <div className="flex flex-col gap-16 tablet:gap-[50px]">
            <h2
              data-reveal
              className="type-display-2 text-[39px] break-words text-green"
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
              <h3 className="type-kicker text-[20px] font-extrabold text-bone">
                {bloque.titulo}
              </h3>
              {/* El original separa los párrafos con un <p> vacío; acá va gap. */}
              <div className="flex max-w-[660px] flex-col gap-6">
                {bloque.cuerpos.map((cuerpo, i) => (
                  <p key={i} className="type-detail text-bone">
                    <ParrafoTecnica parrafo={cuerpo} />
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/*
          Los botones van dentro de la columna sticky, apilados 16px debajo del
          video, así lo acompañan mientras se recorren las técnicas.
        */}
        <div className="flex flex-col gap-4 py-16 tablet:sticky tablet:top-30 tablet:w-70 tablet:shrink-0 tablet:py-0 desktop:w-[497px]">
          <StickyVideo video={tecnicas.video} />

          {acciones?.length ? (
            <div className="flex flex-col items-start gap-4">
              <AccionesServicio acciones={acciones} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/** Contenido de un párrafo de técnica, con sus negritas. */
function ParrafoTecnica({ parrafo }: { parrafo: Parrafo }) {
  if (typeof parrafo === "string") return parrafo;

  if ("partes" in parrafo) {
    return parrafo.partes.map((parte, i) =>
      typeof parte === "string" ? (
        parte
      ) : (
        <strong key={i} className="font-bold">
          {parte.negrita}
        </strong>
      ),
    );
  }

  return (
    <>
      <strong className="font-bold">{parrafo.etiqueta}</strong>
      {parrafo.texto ? (
        <>
          <br />
          {parrafo.texto}
        </>
      ) : null}
    </>
  );
}
