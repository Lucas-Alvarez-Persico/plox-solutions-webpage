import { getImageProps } from "next/image";
import Link from "next/link";

import { ButtonPrimary } from "@/components/button";
import type { HomeContent } from "@/content/home";
import type { SiteImage } from "@/content/images";
import { sectionIds } from "@/content/site";

/** Degradado que oscurece la foto para que el texto tenga contraste. */
const SCRIM =
  "linear-gradient(rgba(22, 24, 26, 0.78) 0%, rgba(22, 24, 26, 0.55) 45%, rgba(22, 24, 26, 0.92) 100%)";

/**
 * Una foto por breakpoint, como en Framer: cada una trae el logo impreso en
 * otra posición. Con `<picture>` el navegador baja solo la que corresponde.
 * Va `eager` en vez de `preload` porque el preload no sabe elegir entre las
 * tres y terminaría bajando la de desktop también en el celular.
 */
function HeroPhoto({ hero }: { hero: HomeContent["hero"] }) {
  // Con `images.unoptimized` no hay `srcSet`: queda solo la URL del archivo.
  const propsOf = (image: SiteImage) =>
    getImageProps({ alt: hero.image.alt, sizes: "100vw", src: image.src }).props;
  const srcSetOf = (image: SiteImage) => {
    const { srcSet, src } = propsOf(image);
    return srcSet ?? src;
  };

  return (
    <picture>
      <source media="(min-width: 1200px)" srcSet={srcSetOf(hero.image)} />
      <source media="(min-width: 810px)" srcSet={srcSetOf(hero.imageTablet)} />
      <img
        {...propsOf(hero.imageMobile)}
        srcSet={srcSetOf(hero.imageMobile)}
        alt={hero.image.alt}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover object-center"
      />
    </picture>
  );
}

export function Hero({ content: hero }: { content: HomeContent["hero"] }) {
  return (
    // En desktop, Framer deja 206px de padding inferior para que se vea la
    // marca de agua del logo, que viene impresa en la foto, debajo del texto.
    <section
      id={sectionIds.hero}
      className="section-x relative flex min-h-[88vh] scroll-mt-18 flex-col overflow-clip bg-bone pt-25 pb-8 tablet:min-h-[94vh] tablet:pt-[62px] tablet:pb-10 desktop:pt-[57px] desktop:pb-[206px]"
    >
      <div className="hero-photo absolute inset-0">
        <HeroPhoto hero={hero} />
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
          Los servicios: en desktop, una línea de enlaces separados por
          guiones; en tablet y mobile, uno por línea. Tablet usa los nombres
          cortos, como en Framer.
        */}
        <ul className="hero-in hero-in-services type-kicker flex flex-col gap-2.5 text-[21px] leading-[1.2] font-bold text-gray desktop:block">
          {hero.services.map((service, index) => (
            <li key={service.href} className="desktop:inline">
              {index > 0 ? (
                <span aria-hidden="true" className="hidden desktop:inline">
                  {" - "}
                </span>
              ) : null}
              <Link
                href={service.href}
                className="text-green transition-colors hover:text-bone"
              >
                <span className="tablet:max-desktop:hidden">{service.label}</span>
                <span className="hidden tablet:max-desktop:inline">
                  {service.shortLabel}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hero-in hero-in-cta">
          <ButtonPrimary href={hero.cta.href}>{hero.cta.label}</ButtonPrimary>
        </div>
      </div>
    </section>
  );
}
