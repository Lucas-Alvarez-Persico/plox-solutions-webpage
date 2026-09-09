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
        <h2 className="type-display-2 max-w-[820px] text-bone">
          {record.title}
        </h2>

        <div className="flex max-w-[84%] flex-col gap-5">
          {record.paragraphs.map((paragraph) => (
            <p key={paragraph} className="type-prose text-bone">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-6 pt-10">
          <p className="type-eyebrow text-gray">{record.marqueeLabel}</p>

          <div className="flex overflow-clip pt-1.5 pb-2">
            <ul className="flex list-none gap-8">
              {record.marqueeWords.map((word) => (
                <li key={word} className="flex items-center gap-8">
                  <p className="type-heading-sm whitespace-nowrap text-gray">
                    {word}
                  </p>
                  <span aria-hidden="true" className="h-[18px] w-px bg-gray/40" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
