/**
 * Textos y enlaces del sitio. Centralizados acá para que los componentes se
 * ocupen solo del layout.
 */
import { localizePath, type Locale, type Localized } from "@/lib/i18n";

/**
 * Ids de las secciones de la home, tal como los usa el diseño original.
 *
 * Los enlaces que apuntan a ellas se escriben como `/#id`, no como `#id`: el
 * nav y el footer también se muestran en las páginas de servicio, donde esas
 * secciones no existen y un ancla suelta no llevaría a ningún lado.
 */
export const sectionIds = {
  hero: "a-01-hero",
  record: "a-02-record",
  method: "a-05-method",
  enquiry: "a-10-enquiry",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

/** Textos de interfaz que no son contenido: etiquetas accesibles, botones. */
export interface UiStrings {
  skipToContent: string;
  mainNav: string;
  goHome: string;
  openMenu: string;
  closeMenu: string;
  language: string;
  footerNav: string;
  otherServices: string;
  contactCta: string;
}

export interface SiteContent {
  navLinks: NavLink[];
  navCta: NavLink;
  footerColumns: FooterColumn[];
  ui: UiStrings;
}

/** Enlace a una sección de la home, en el idioma de la página. */
export function sectionHref(locale: Locale, id: string) {
  return localizePath(locale, `/#${id}`);
}

function socialLinks(): NavLink[] {
  // PENDIENTE: en el sitio de Framer estos enlaces apuntan a las cuentas de
  // "northfield", la empresa de la plantilla original. Se dejan sin destino
  // hasta tener las cuentas reales de Plox Solutions.
  return [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ];
}

export const siteContent: Localized<SiteContent> = {
  es: {
    navLinks: [
      { label: "Inicio", href: sectionHref("es", sectionIds.hero) },
      { label: "Nosotros", href: sectionHref("es", sectionIds.record) },
      { label: "Servicio", href: sectionHref("es", sectionIds.method) },
      { label: "Contacto", href: sectionHref("es", sectionIds.enquiry) },
    ],
    navCta: {
      label: "Contactanos",
      href: sectionHref("es", sectionIds.enquiry),
    },
    footerColumns: [
      {
        heading: "Sitio",
        links: [
          { label: "Inicio", href: sectionHref("es", sectionIds.hero) },
          {
            label: "Sobre Nosotros",
            href: sectionHref("es", sectionIds.record),
          },
          { label: "Servicios", href: sectionHref("es", sectionIds.method) },
          { label: "Contacto", href: sectionHref("es", sectionIds.enquiry) },
        ],
      },
      {
        heading: "Servicios",
        links: [
          { label: "Sellado de Fugas", href: "/sellado-de-fuga" },
          {
            label: "Calibración de Válvulas",
            href: "/calibracion-de-valvulas",
          },
          { label: "X-Pando", href: "/x-pando" },
        ],
      },
      { heading: "Donde encontrarnos", links: socialLinks() },
    ],
    ui: {
      skipToContent: "Saltar al contenido",
      mainNav: "Principal",
      goHome: "ir al inicio",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      language: "Idioma",
      footerNav: "Pie de página",
      otherServices: "Otros servicios",
      contactCta: "Contactanos",
    },
  },

  en: {
    navLinks: [
      { label: "Home", href: sectionHref("en", sectionIds.hero) },
      { label: "About Us", href: sectionHref("en", sectionIds.record) },
      { label: "Services", href: sectionHref("en", sectionIds.method) },
      { label: "Contact Us", href: sectionHref("en", sectionIds.enquiry) },
    ],
    navCta: {
      label: "Contact Us",
      href: sectionHref("en", sectionIds.enquiry),
    },
    footerColumns: [
      {
        heading: "Site",
        links: [
          { label: "Home", href: sectionHref("en", sectionIds.hero) },
          { label: "About Us", href: sectionHref("en", sectionIds.record) },
          { label: "Services", href: sectionHref("en", sectionIds.method) },
          { label: "Contact Us", href: sectionHref("en", sectionIds.enquiry) },
        ],
      },
      {
        heading: "Services",
        links: [
          { label: "Online Leak Sealing", href: "/en/sellado-de-fuga" },
          {
            label: "Safety Valve Calibration",
            href: "/en/calibracion-de-valvulas",
          },
          { label: "X-Pando", href: "/en/x-pando" },
        ],
      },
      // En Framer dice "Where can you find us".
      { heading: "Where to find us", links: socialLinks() },
    ],
    ui: {
      skipToContent: "Skip to content",
      mainNav: "Main",
      goHome: "go to home page",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
      footerNav: "Footer",
      otherServices: "Other services",
      contactCta: "Contact Us",
    },
  },
};

export const companyName = "Plox Solutions";
