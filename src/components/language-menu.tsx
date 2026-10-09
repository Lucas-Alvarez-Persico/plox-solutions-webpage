"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import {
  delocalizePath,
  localeNames,
  localizePath,
  locales,
  type Locale,
} from "@/lib/i18n";

/**
 * Selector de idioma del nav: el globo abre un panel con los idiomas, como en
 * Framer. Cada opción lleva a la misma página en el otro idioma.
 */
export function LanguageMenu({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const basePath = delocalizePath(usePathname());

  // Cierra el panel al hacer clic afuera o con Escape.
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative flex">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="menu-idioma"
        className="flex text-gray-deep transition-colors hover:text-ink"
      >
        <span className="sr-only">{label}</span>
        <GlobeIcon />
      </button>

      {open ? (
        <ul
          id="menu-idioma"
          className="absolute top-full -right-6.5 mt-[11px] flex w-[111px] origin-top flex-col items-center gap-[5px] bg-white pt-[23px] pb-[17px] shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition starting:-translate-y-1 starting:opacity-0"
        >
          {locales.map((option) => {
            const current = option === locale;

            return (
              <li key={option} lang={option} className="type-eyebrow">
                <Link
                  href={localizePath(option, basePath)}
                  hrefLang={option}
                  aria-current={current || undefined}
                  onClick={() => setOpen(false)}
                  className={
                    current
                      ? "text-green"
                      : "text-gray-deep transition-colors hover:text-ink"
                  }
                >
                  {localeNames[option]}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12 H22" />
      <path d="M12 2 C6.907 7.694 6.907 16.306 12 22 C17.093 16.306 17.093 7.694 12 2" />
    </svg>
  );
}
