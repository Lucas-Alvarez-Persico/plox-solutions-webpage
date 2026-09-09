import { record } from "@/content/home";
import { sectionIds } from "@/content/site";

/**
 * A-02 · Record — el bloque de trayectoria sobre fondo oscuro, con el título,
 * los dos párrafos y la fila de atributos ("En cada operación").
 */
export function Record() {
  return (
    <section
      id={sectionIds.record}
      className="section-x scroll-mt-18 bg-ink py-16 tablet:py-24 desktop:py-40"
    >
      <div className="container-site flex flex-col gap-16">
        <h2 data-reveal className="type-display-2 max-w-[820px] text-bone">
          {record.title}
        </h2>

        <div
          data-reveal
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          className="flex max-w-[84%] flex-col gap-5"
        >
          {record.paragraphs.map((paragraph) => (
            <p key={paragraph} className="type-prose text-bone">
              {paragraph}
            </p>
          ))}
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          className="flex flex-col gap-6 pt-10"
        >
          <p className="type-eyebrow text-gray">{record.marqueeLabel}</p>

          {/*
            La pista lleva dos copias idénticas y se desplaza media pista, así
            el bucle no tiene costura. La segunda copia queda fuera del árbol de
            accesibilidad y se oculta con movimiento reducido.
          */}
          <div className="marquee overflow-clip pt-1.5 pb-2">
            <div className="marquee-track flex w-max">
              <MarqueeWords words={record.marqueeWords} />
              <MarqueeWords words={record.marqueeWords} duplicate />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeWords({
  words,
  duplicate = false,
}: {
  words: readonly string[];
  duplicate?: boolean;
}) {
  return (
    <ul
      aria-hidden={duplicate || undefined}
      className={`flex list-none gap-8 pr-8 ${duplicate ? "marquee-duplicate" : ""}`}
    >
      {words.map((word) => (
        <li key={word} className="flex items-center gap-8">
          <p className="type-heading-sm whitespace-nowrap text-gray">{word}</p>
          <span aria-hidden="true" className="h-[18px] w-px bg-gray/40" />
        </li>
      ))}
    </ul>
  );
}
