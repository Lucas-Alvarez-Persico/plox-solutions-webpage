import type { Servicio } from "@/content/servicios/tipos";

/**
 * P-03 · Story — el desafío y la solución, uno al lado del otro. Recién en
 * desktop se abren en dos columnas; antes van apilados.
 */
export function Story({ servicio }: { servicio: Servicio }) {
  return (
    <section
      id="p-03-story"
      className="section-x scroll-mt-18 bg-bone py-16 tablet:py-24 desktop:py-30"
    >
      <div className="container-site grid gap-10 tablet:gap-12 desktop:grid-cols-2 desktop:gap-20">
        {servicio.historia.map((bloque, index) => (
          <div
            key={bloque.titulo}
            data-reveal
            style={
              { "--reveal-delay": `${index * 120}ms` } as React.CSSProperties
            }
            className="flex flex-col gap-5"
          >
            <h2 className="type-kicker text-navy">{bloque.titulo}</h2>
            <p className="type-body-s text-ink-black">{bloque.cuerpo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
