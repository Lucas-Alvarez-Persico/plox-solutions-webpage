import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/content/site";
import type { Servicio } from "@/content/servicios/tipos";
import { localizePath, type Locale } from "@/lib/i18n";

function ServiceLink({
  servicio,
  direccion,
  locale,
}: {
  servicio: Servicio;
  direccion: "anterior" | "siguiente";
  locale: Locale;
}) {
  const esAnterior = direccion === "anterior";

  const miniatura = (
    <span className="relative block h-[53px] w-[75px] shrink-0 overflow-clip">
      <Image
        src={servicio.miniatura.src}
        alt=""
        fill
        sizes="75px"
        className="object-cover"
      />
    </span>
  );

  return (
    <Link
      href={localizePath(locale, `/${servicio.slug}`)}
      className={`group flex items-center gap-4 py-3 ${
        esAnterior ? "pr-5 pl-3" : "pr-3 pl-5"
      }`}
      rel={esAnterior ? "prev" : "next"}
    >
      {esAnterior ? miniatura : null}
      <span className="type-eyebrow text-gray transition-colors group-hover:text-bone">
        {esAnterior ? "← " : ""}
        {servicio.nombreCorto}
        {esAnterior ? "" : " →"}
      </span>
      {esAnterior ? null : miniatura}
    </Link>
  );
}

/**
 * P-06 · More work — navegación entre servicios. El anterior queda a la
 * izquierda y el siguiente a la derecha; si falta alguno, el otro conserva su
 * lugar.
 */
export function NextService({
  anterior,
  siguiente,
  locale,
}: {
  anterior?: Servicio;
  siguiente?: Servicio;
  locale: Locale;
}) {
  if (!anterior && !siguiente) return null;

  return (
    <nav
      aria-label={siteContent[locale].ui.otherServices}
      className="section-x bg-ink py-8 tablet:py-10 desktop:py-12"
    >
      {/* En mobile los dos enlaces se apilan; recién en tablet van a los lados. */}
      <div className="container-site flex flex-col gap-5 tablet:flex-row tablet:items-center tablet:justify-between tablet:gap-6">
        {anterior ? (
          <ServiceLink
            servicio={anterior}
            direccion="anterior"
            locale={locale}
          />
        ) : (
          <span className="hidden tablet:block" />
        )}
        {siguiente ? (
          <ServiceLink
            servicio={siguiente}
            direccion="siguiente"
            locale={locale}
          />
        ) : (
          <span className="hidden tablet:block" />
        )}
      </div>
    </nav>
  );
}
