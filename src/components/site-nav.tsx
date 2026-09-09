"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { images } from "@/content/images";
import { navCta, navLinks, sectionIds } from "@/content/site";

/**
 * Barra de navegación sticky. En desktop y tablet muestra los enlaces en línea;
 * por debajo de 810px pasa a un botón de menú con panel desplegable.
 */
export function SiteNav() {
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
    <header className="sticky top-0 z-[5] bg-bone">
      <nav
        aria-label="Principal"
        className="section-x flex h-16 items-center tablet:h-18"
      >
        <div className="container-site flex h-11 items-center justify-between tablet:h-12">
          <Link
            href={`#${sectionIds.hero}`}
            className="flex items-center"
            aria-label={`${images.logo.alt} — ir al inicio`}
          >
            <Image
              src={images.logo.src}
              alt=""
              priority
              className="h-11 w-auto"
              sizes="127px"
            />
          </Link>

          <ul className="hidden gap-9 tablet:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="type-eyebrow text-gray-deep transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={navCta.href}
            className="type-label hidden h-12 items-center bg-orange px-6 text-bone transition-colors hover:bg-orange-hot tablet:flex"
          >
            {navCta.label}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-principal"
            className="-mr-2.5 flex size-11 items-center justify-center text-ink tablet:hidden"
          >
            <span className="sr-only">
              {open ? "Cerrar menú" : "Abrir menú"}
            </span>
            <MenuIcon open={open} />
          </button>
        </div>
      </nav>

      <div
        id="menu-principal"
        hidden={!open}
        className="section-x fixed inset-x-0 top-16 bottom-0 z-[5] bg-bone tablet:hidden"
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
            </li>
          ))}
          <li className="pt-4">
            <Link
              href={navCta.href}
              onClick={() => setOpen(false)}
              className="type-label flex h-12 w-full items-center justify-center bg-orange text-bone"
            >
              {navCta.label}
            </Link>
          </li>
        </ul>
      </div>
    </header>
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
