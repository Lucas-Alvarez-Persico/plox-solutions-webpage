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
  /** Subenlaces: en el nav se muestran en un desplegable. */
  children?: NavLink[];
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

/**
 * Páginas de servicio. Las comparten el desplegable de "Servicios" del nav y
 * la columna de servicios del footer.
 */
/**
 * Enlaces a las páginas de servicio. Los comparten el desplegable del nav, el
 * footer y el hero, así los nombres y las rutas viven en un solo lugar.
 */
export const serviceLinks: Localized<NavLink[]> = {
  es: [
    { label: "Sellado de Fugas", href: "/sellado-de-fuga" },
    { label: "Calibración de Válvulas", href: "/calibracion-de-valvulas" },
    { label: "X-Pando", href: "/x-pando" },
  ],
  // En el desplegable de Framer en inglés los nombres quedaron en español.
  en: [
    { label: "Online Leak Sealing", href: "/en/sellado-de-fuga" },
    { label: "Safety Valve Calibration", href: "/en/calibracion-de-valvulas" },
    { label: "X-Pando", href: "/en/x-pando" },
  ],
};

function socialLinks(): NavLink[] {
  // Todavía no hay cuentas. Sin `href` el footer no muestra el enlace, y si
  // ninguna red tiene destino oculta la columna entera. Para publicar una
  // alcanza con completar su URL.
  return [
    { label: "LinkedIn", href: "" },
    { label: "Instagram", href: "" },
    { label: "Facebook", href: "" },
  ];
}

export const siteContent: Localized<SiteContent> = {
  es: {
    navLinks: [
      { label: "Inicio", href: sectionHref("es", sectionIds.hero) },
      { label: "Nosotros", href: sectionHref("es", sectionIds.record) },
      {
        label: "Servicios",
        href: sectionHref("es", sectionIds.method),
        children: serviceLinks.es,
      },
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
      { heading: "Servicios", links: serviceLinks.es },
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
      {
        label: "Services",
        href: sectionHref("en", sectionIds.method),
        children: serviceLinks.en,
      },
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
      { heading: "Services", links: serviceLinks.en },
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

/**
 * WhatsApp de consultas: +54 9 11 3025 2770, en el formato internacional sin
 * signos ni espacios que pide wa.me.
 */
const whatsappNumero = "5491130252770";

/** Enlace que abre una conversación de WhatsApp con un mensaje ya escrito. */
export function whatsappHref(mensaje: string) {
  return `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensaje)}`;
}
