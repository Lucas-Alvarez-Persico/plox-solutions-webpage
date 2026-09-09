import Image from "next/image";

import { images } from "@/content/images";
import { method } from "@/content/home";
import { sectionIds } from "@/content/site";

/**
 * A-05 · Method — el bloque de servicios. Se arma en dos columnas: a la
 * izquierda una columna sticky con el título y el índice, y a la derecha los
 * paneles de cada servicio. Por debajo de 810px las columnas se apilan y el
 * índice se oculta, igual que en el diseño original.
 */
export function Method() {
  return (
    <section
      id={sectionIds.method}
      className="section-x relative scroll-mt-18 overflow-clip bg-bone py-16 tablet:py-24 desktop:py-40"
    >
      <Image
        src={images.textura1.src}
        alt={images.textura1.alt}
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-[0.06]"
      />

      <div className="container-site relative flex flex-col gap-12 tablet:flex-row tablet:items-start desktop:gap-20">
        <div className="flex flex-col gap-12 tablet:sticky tablet:top-30 tablet:w-70 tablet:shrink-0 desktop:w-95">
          <div className="flex flex-col gap-4">
            <h2 className="type-display-2 text-ink">{method.title}</h2>
          </div>

          <ol className="hidden list-none flex-col gap-5 tablet:flex">
            {method.services.map((service) => (
              <li key={service.code} className="flex items-center gap-4">
                <p className="type-eyebrow shrink-0 text-gray-deep">
                  {service.code}
                </p>
                <p className="type-heading-sm text-ink">{service.name}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Los paneles de cada servicio llegan en el próximo commit. */}
        <div className="flex flex-1 flex-col gap-16 tablet:gap-30">
          {method.services.map((service) => (
            <div key={service.id} id={service.id} className="scroll-mt-18">
              <div className="aspect-[805/474] w-full bg-bone-muted" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
