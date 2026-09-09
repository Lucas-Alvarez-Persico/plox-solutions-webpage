import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LineworkLayer } from "@/components/linework-layer";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Styleguide — Plox Solutions",
  description: "Tokens de diseño del sitio: paleta, tipografía y layout.",
  robots: { index: false, follow: false },
};

const palette = [
  { name: "ink", hex: "#1C1E20", use: "Fondo base del sitio" },
  { name: "ink-deep", hex: "#121416", use: "Superficies sobre el fondo" },
  { name: "bone", hex: "#F4F3F0", use: "Fondo claro, texto sobre naranja" },
  { name: "bone-dim", hex: "#E4E3DE", use: "Texto principal sobre oscuro" },
  { name: "bone-muted", hex: "#D6D4CE", use: "Bordes y detalles sobre claro" },
  { name: "orange", hex: "#EB6A2F", use: "Color de marca, CTAs" },
  { name: "orange-hot", hex: "#FF5A21", use: "Variante de hover" },
  { name: "gray", hex: "#9A9DA1", use: "Texto secundario sobre oscuro" },
  { name: "gray-deep", hex: "#585C62", use: "Texto terciario, links de nav" },
];

const typeStyles = [
  {
    className: "type-display-1",
    name: "Display 1",
    spec: "Montserrat 700 · 44 / 72 / 97px · lh 1.04 · ls -0.03em",
    sample: "Ingeniería para mantener la industria en movimiento.",
  },
  {
    className: "type-display-2",
    name: "Display 2",
    spec: "Archivo Black · 32 / 44 / 64px · lh 1 · ls -0.02em",
    sample: "Nuestros Servicios",
  },
  {
    className: "type-body-l",
    name: "Body L",
    spec: "Montserrat 400 · 17 / 18 / 17px · lh 1.5 · ls -0.02em",
    sample:
      "Soluciones especializadas para intervenir, mantener y optimizar instalaciones industriales.",
  },
  {
    className: "type-prose",
    name: "Prose",
    spec: "Montserrat 400 · 16 / 16 / 20px · lh 1.6 · ls -0.02em",
    sample:
      "Desde 1981 brindamos servicios especializados para la industria, combinando experiencia técnica y conocimiento de campo.",
  },
  {
    className: "type-body-m",
    name: "Body M",
    spec: "Montserrat 400 · 20px · lh 1.2 · ls -0.02em",
    sample: "Calibración de Válvulas",
  },
  {
    className: "type-heading-sm",
    name: "Heading S",
    spec: "Montserrat 400 · 21 / 24 / 18px · lh 1.2 · ls -0.01em",
    sample: "Sellado de Fugas en Operación",
  },
  {
    className: "type-body",
    name: "Body",
    spec: "Montserrat 400 · 18px · lh 1.2 · ls -0.01em",
    sample: "Experiencia · Precisión · Operación",
  },
  {
    className: "type-eyebrow",
    name: "Eyebrow",
    spec: "Archivo 400 · 11 / 12px · lh 1.4 · ls 0.08em · uppercase",
    sample: "Specialized industrial solutions",
  },
  {
    className: "type-label",
    name: "Label",
    spec: "Archivo 400 · 16px · lh 1",
    sample: "Contactanos",
  },
  {
    className: "type-code",
    name: "Code",
    spec: "Martian Mono 400 · 12px · ls 0.08em · uppercase",
    sample: "M-01",
  },
];

const layout = [
  { token: "container-site", value: "1280px", use: "Ancho máximo del contenido" },
  { token: "gutter", value: "20 / 48 / 80px", use: "Padding lateral de sección" },
  { token: "section", value: "64 / 96 / 160px", use: "Ritmo vertical de sección" },
  { token: "breakpoint tablet", value: "810px", use: "Phone → tablet" },
  { token: "breakpoint desktop", value: "1200px", use: "Tablet → desktop" },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-gray-deep/40 py-12">
      <h2 className="type-eyebrow mb-8 text-gray">{title}</h2>
      {children}
    </section>
  );
}

export default function Styleguide() {
  // Página interna de referencia: solo existe en desarrollo. En el build de
  // producción se resuelve como 404, así que nunca se publica.
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <main className="section-x py-16">
      <div className="container-site">
        <header className="pb-8">
          <p className="type-eyebrow text-orange">Plox Solutions</p>
          <h1 className="type-display-2 mt-4 text-bone">Styleguide</h1>
          <p className="type-body-l mt-4 max-w-xl text-gray">
            Tokens extraídos del diseño original en Framer. Los tamaños con tres
            valores cambian en los breakpoints de 810px y 1200px.
          </p>
        </header>

        <Section title="Paleta">
          <div className="grid grid-cols-2 gap-4 tablet:grid-cols-3 desktop:grid-cols-4">
            {palette.map((color) => (
              <div key={color.name}>
                <div
                  className="h-24 w-full border border-gray-deep/40"
                  style={{ backgroundColor: color.hex }}
                />
                <p className="type-label mt-3 text-bone">{color.name}</p>
                <p className="type-code mt-1 text-gray">{color.hex}</p>
                <p className="type-eyebrow mt-2 text-gray-deep normal-case">
                  {color.use}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Tipografía">
          <div className="flex flex-col gap-10">
            {typeStyles.map((style) => (
              <div key={style.name}>
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <p className="type-label text-orange">{style.name}</p>
                  <p className="type-code text-gray-deep">{style.spec}</p>
                </div>
                <p className={`${style.className} mt-3 text-bone-dim`}>
                  {style.sample}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Botones">
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="type-label bg-orange px-6 py-4 text-bone transition-colors hover:bg-orange-hot"
            >
              Contactanos
            </button>
            <button
              type="button"
              className="type-label border border-bone-muted/40 px-6 py-4 text-bone-dim transition-colors hover:border-bone-dim"
            >
              Ver servicio
            </button>
          </div>
          <p className="type-eyebrow mt-4 text-gray-deep normal-case">
            Padding 16 / 24px, altura 48px, sin border-radius.
          </p>
        </Section>

        <Section title="Assets">
          <div className="grid grid-cols-1 gap-8 tablet:grid-cols-2">
            {(
              [
                ["logo", images.logo],
                ["hero", images.hero],
                ["servicioSellado", images.servicioSellado],
                ["servicioValvulas", images.servicioValvulas],
                ["servicioXpando", images.servicioXpando],
                ["textura1", images.textura1],
                ["textura2", images.textura2],
              ] as const
            ).map(([key, image]) => (
              <figure key={key}>
                <div className="flex aspect-video items-center justify-center overflow-hidden border border-gray-deep/40 bg-ink-deep">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-contain"
                    placeholder="blur"
                  />
                </div>
                <figcaption className="mt-3">
                  <p className="type-label text-bone">{key}</p>
                  <p className="type-code mt-1 text-gray-deep">
                    {image.src.width}×{image.src.height}
                  </p>
                  <p className="type-eyebrow mt-2 text-gray normal-case">
                    {image.alt || "Decorativa (alt vacío)"}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <figure className="mt-8">
            <div className="relative aspect-video overflow-hidden border border-gray-deep/40 bg-bone">
              <LineworkLayer className="absolute inset-0 text-blueprint" />
            </div>
            <figcaption className="mt-3">
              <p className="type-label text-bone">LineworkLayer</p>
              <p className="type-code mt-1 text-gray-deep">
                SVG inline · viewBox 1200×700 · currentColor
              </p>
            </figcaption>
          </figure>
        </Section>

        <Section title="Layout">
          <dl className="flex flex-col gap-4">
            {layout.map((item) => (
              <div
                key={item.token}
                className="flex flex-wrap items-baseline gap-x-4 border-b border-gray-deep/20 pb-3"
              >
                <dt className="type-label w-52 text-bone">{item.token}</dt>
                <dd className="type-code text-orange">{item.value}</dd>
                <dd className="type-eyebrow text-gray-deep normal-case">
                  {item.use}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      </div>
    </main>
  );
}
