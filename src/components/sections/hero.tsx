import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { ButtonPrimary } from "@/components/button";
import type { HomeContent } from "@/content/home";
import { sectionIds } from "@/content/site";

/** Degradado que oscurece la foto para que el texto tenga contraste. */
const SCRIM =
  "linear-gradient(rgba(22, 24, 26, 0.78) 0%, rgba(22, 24, 26, 0.55) 45%, rgba(22, 24, 26, 0.92) 100%)";

export function Hero({ content: hero }: { content: HomeContent["hero"] }) {
  return (
    // En desktop, Framer deja 206px de padding inferior para que se vea la
    // marca de agua del logo, que viene impresa en la foto, debajo del texto.
    <section
      id={sectionIds.hero}
      className="section-x relative flex min-h-[88vh] scroll-mt-18 flex-col overflow-clip bg-bone pt-25 pb-8 tablet:min-h-[94vh] tablet:pt-[62px] tablet:pb-10 desktop:pt-[57px] desktop:pb-[206px]"
    >
      <div className="hero-photo absolute inset-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-80"
        style={{ backgroundImage: SCRIM }}
      />

      <div className="container-site relative flex flex-col gap-6 tablet:gap-8 desktop:gap-10">
        <p className="hero-in hero-in-eyebrow type-eyebrow text-gray">
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
        <p className="hero-in hero-in-body type-body-l max-w-[520px] p-2 text-bone-dim">
          {hero.body}
        </p>

        {/*
          Los servicios, en una línea de enlaces separados por guiones. Cada
          palabra va sin cortes internos: si no, en mobile "X-Pando" se parte
          en el guion, como pasa en Framer.
        */}
        <p className="hero-in hero-in-services type-kicker text-[21px] font-bold text-gray">
          {hero.services.map((service, index) => (
            <Fragment key={service.href}>
              {index > 0 ? " - " : null}
              <Link
                href={service.href}
                className="text-green transition-colors hover:text-bone"
              >
                {service.label.split(" ").map((palabra, i) => (
                  <Fragment key={i}>
                    {i > 0 ? " " : null}
                    <span className="whitespace-nowrap">{palabra}</span>
                  </Fragment>
                ))}
              </Link>
            </Fragment>
          ))}
        </p>

        <div className="hero-in hero-in-cta">
          <ButtonPrimary href={hero.cta.href}>{hero.cta.label}</ButtonPrimary>
        </div>
      </div>
    </section>
  );
}
