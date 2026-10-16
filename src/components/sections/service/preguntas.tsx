import type { PreguntaFrecuente } from "@/content/servicios/tipos";

/**
 * Preguntas frecuentes en acordeón, sobre fondo claro. Cada una es un
 * `<details>`: se abre y se cierra sin JavaScript y el lector de pantalla
 * anuncia si está expandida.
 *
 * Medidas de Framer: la fila mide 84px (24px arriba y abajo), el botón es un
 * círculo de 36px con un "+" que gira hasta ser una "×" al abrir, y la
 * respuesta deja 26px de aire abajo. En Framer la respuesta abierta tiene una
 * altura fija que recorta los textos largos; acá crece con el contenido.
 */
export function Preguntas({ preguntas }: { preguntas: PreguntaFrecuente[] }) {
  return (
    <section
      id="p-03-preguntas"
      className="section-x scroll-mt-18 bg-bone py-16 tablet:py-24 desktop:py-30"
    >
      <div className="container-site border-t border-bone-muted">
        {preguntas.map((item) => (
          <details
            key={item.pregunta}
            data-reveal
            className="faq-item group border-b border-bone-muted"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
              <h2 className="type-kicker font-extrabold text-teal">
                {item.pregunta}
              </h2>
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-teal text-teal transition-colors group-open:bg-teal group-open:text-bone"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  className="transition-transform group-open:rotate-45"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>

            <div className="flex flex-col gap-4 pb-[26px] tablet:pr-15">
              {item.respuesta.map((parrafo, i) => (
                <p key={i} className="type-body-s text-ink-black">
                  {parrafo}
                </p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
