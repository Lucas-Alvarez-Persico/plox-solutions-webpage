"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ButtonPrimary } from "@/components/button";
import { LanguageMenu } from "@/components/language-menu";
import { images } from "@/content/images";
import {
  sectionHref,
  sectionIds,
  siteContent,
  type NavLink,
} from "@/content/site";
import type { Locale } from "@/lib/i18n";

/**
 * Barra de navegación sticky. En desktop y tablet muestra los enlaces en línea;
 * por debajo de 810px pasa a un botón de menú con panel desplegable.
 */
export function SiteNav({ locale }: { locale: Locale }) {
  const { navLinks, navCta, ui } = siteContent[locale];
  const logo = images[locale].logo;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Bloquea el scroll del documento mientras el panel está abierto.
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Cierra el panel con Escape.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-[5] bg-white">
      <nav
        aria-label={ui.mainNav}
        className="section-x flex h-16 items-center tablet:h-18"
      >
        <div className="container-site flex h-11 items-center justify-between tablet:h-12">
          <Link
            href={sectionHref(locale, sectionIds.hero)}
            className="flex items-center"
            aria-label={`${logo.alt} — ${ui.goHome}`}
          >
            <Image
              src={logo.src}
              alt=""
              priority
              className="h-11 w-auto"
              sizes="127px"
            />
          </Link>

          <ul className="hidden gap-9 tablet:flex">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={link.children ? "group relative" : undefined}
              >
                <Link
                  href={link.href}
                  className="type-eyebrow text-gray-deep transition-colors group-hover:text-ink group-has-[:focus-visible]:text-ink hover:text-ink"
                >
                  {link.label}
                </Link>
                {link.children ? (
                  <NavDropdown links={link.children} pathname={pathname} />
                ) : null}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageMenu locale={locale} label={ui.language} />

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-principal"
              className="-mr-2.5 flex size-11 items-center justify-center text-ink tablet:hidden"
            >
              <span className="sr-only">
                {open ? ui.closeMenu : ui.openMenu}
              </span>
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
      </nav>

      <div
        id="menu-principal"
        hidden={!open}
        className="section-x fixed inset-x-0 top-16 bottom-0 z-[5] bg-white tablet:hidden"
      >
        <ul className="container-site flex flex-col gap-6 pt-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="type-display-2 block text-ink"
              >
                {link.label}
              </Link>
              {link.children ? (
                <ul className="mt-3 flex flex-col border-l border-gray/40 pl-4">
                  {link.children.map((child) => {
                    const current = child.href === pathname;

                    return (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={current ? "page" : undefined}
                          onClick={() => setOpen(false)}
                          className={`type-eyebrow block py-2 ${
                            current ? "text-green" : "text-gray-deep"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </li>
          ))}
          <li className="pt-4">
            <ButtonPrimary
              href={navCta.href}
              onClick={() => setOpen(false)}
              className="w-full"
            >
              {navCta.label}
            </ButtonPrimary>
          </li>
        </ul>
      </div>
    </header>
  );
}

/**
 * Desplegable de un enlace del nav, como el de "Servicios" en Framer: se abre
 * al pasar el mouse o al llegar con el teclado, y marca en verde la página
 * actual.
 *
 * El panel arranca 16px por debajo del enlace. Ese hueco es padding del
 * contenedor y no margen, así sigue siendo parte del área de hover y el panel
 * no se cierra mientras el mouse baja hasta él.
 *
 * Con el teclado se abre por `focus-visible` y no por `focus-within`: un clic
 * también deja el foco en el enlace, y el panel quedaría abierto después de
 * navegar.
 */
function NavDropdown({
  links,
  pathname,
}: {
  links: NavLink[];
  pathname: string;
}) {
  return (
    // Al abrir, la visibilidad cambia en el acto (solo se anima la opacidad) para
    // que el Tab no saltee los enlaces mientras el panel todavía está oculto. Al
    // cerrar, la visibilidad espera a que termine el fundido.
    <div className="invisible absolute top-full -left-[18px] pt-4 opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100 group-hover:transition-opacity group-has-[:focus-visible]:visible group-has-[:focus-visible]:opacity-100 group-has-[:focus-visible]:transition-opacity">
      <ul className="flex -translate-y-1 flex-col gap-[3px] bg-white px-[18px] py-[13px] whitespace-nowrap shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-transform duration-200 group-hover:translate-y-0 group-has-[:focus-visible]:translate-y-0">
        {links.map((link) => {
          const current = link.href === pathname;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={`type-eyebrow block transition-colors ${
                  current ? "text-green" : "text-gray-deep hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M5 5 L19 19" />
          <path d="M19 5 L5 19" />
        </>
      ) : (
        <>
          <path d="M3 7 H21" />
          <path d="M3 17 H21" />
        </>
      )}
    </svg>
  );
}
