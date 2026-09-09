import Image from "next/image";

import { ButtonPrimary } from "@/components/button";
import { LineworkLayer } from "@/components/linework-layer";
import { hero } from "@/content/home";
import { images } from "@/content/images";
import { sectionIds } from "@/content/site";

/** Degradado que oscurece la foto para que el texto tenga contraste. */
const SCRIM =
  "linear-gradient(rgba(22, 24, 26, 0.78) 0%, rgba(22, 24, 26, 0.55) 45%, rgba(22, 24, 26, 0.92) 100%)";

export function Hero() {
  return (
    <section
      id={sectionIds.hero}
      className="section-x relative flex min-h-[88vh] scroll-mt-18 flex-col overflow-clip bg-bone pt-25 pb-8 tablet:min-h-[94vh] tablet:pt-35 tablet:pb-10 desktop:pt-25 desktop:pb-12"
    >
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-80"
        style={{ backgroundImage: SCRIM }}
      />

      <div
        data-reveal
        style={{ "--reveal-delay": "500ms" } as React.CSSProperties}
        className="absolute inset-0"
      >
        <LineworkLayer className="h-full w-full text-blueprint" />
      </div>

      <div className="container-site relative flex flex-col gap-6 tablet:gap-8 desktop:gap-10">
        <p data-reveal className="type-eyebrow text-gray">
          {hero.eyebrow}
        </p>

        {/* El título se revela palabra por palabra, como en el original. */}
        <h1 className="type-display-1 max-w-[1100px] text-bone-dim">
          {hero.title.split(" ").map((word, index) => (
            <span key={`${word}-${index}`}>
              {index > 0 ? " " : null}
              <span
                data-reveal
                className="reveal-word"
                style={
                  { "--reveal-delay": `${120 + index * 55}ms` } as React.CSSProperties
                }
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        {/*
          El padding de 8px replica el del original: hace que el texto envuelva
          en 504px (4 líneas) en vez de 520. Como efecto secundario, el párrafo
          arranca 8px a la derecha del resto del contenido — está así en el
          diseño de Framer.
        */}
        <p
          data-reveal
          style={{ "--reveal-delay": "620ms" } as React.CSSProperties}
          className="type-body-l max-w-[520px] p-2 text-bone-dim"
        >
          {hero.body}
        </p>

        <div
          data-reveal
          style={{ "--reveal-delay": "720ms" } as React.CSSProperties}
        >
          <ButtonPrimary href={hero.cta.href}>{hero.cta.label}</ButtonPrimary>
        </div>
      </div>
    </section>
  );
}
