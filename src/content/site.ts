/**
 * Textos y enlaces del sitio. Centralizados acá para que los componentes se
 * ocupen solo del layout.
 */
import { localizePath, type Locale, type Localized } from "@/lib/i18n";

/**
 * Ids de las secciones de la home en cada idioma. Los enlaces del sitio no los
 * usan (van a la ruta de la sección, ver `sectionPaths`), pero siguen sirviendo
 * de ancla: `/#contacto` también funciona.
 */
export const sectionIds = {
  es: {
    hero: "inicio",
    record: "nosotros",
    method: "servicios",
    enquiry: "contacto",
  },
  en: {
    hero: "home",
    record: "about-us",
    method: "services",
    enquiry: "contact",
  },
} as const satisfies Localized<Record<string, string>>;

export type SectionKey = keyof (typeof sectionIds)["es"];

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

/**
 * Ruta de cada sección de la home, en español; `localizePath` la traduce
 * (`/contacto` ↔ `/en/contact`). Cada una es una página que muestra la home y
 * baja sola hasta la sección, así se puede compartir el enlace sin `#`. El
 * inicio es la home misma.
 */
const sectionPaths: Record<SectionKey, string> = {
  hero: "/",
  record: "/nosotros",
  method: "/servicios",
  enquiry: "/contacto",
};

/** Enlace a una sección de la home, en el idioma de la página. */
export function sectionHref(locale: Locale, section: SectionKey) {
  return localizePath(locale, sectionPaths[section]);
}

/**
 * Atributos del `<section>` de cada sección de la home: el id y su ruta. Con
 * la ruta, `AnchorScroll` reconoce los enlaces a una sección que ya está en
 * pantalla y scrollea hasta ella en vez de cargar otra página.
 */
export function sectionAttributes(locale: Locale, section: SectionKey) {
  return {
    id: sectionIds[locale][section],
    "data-section-path": sectionHref(locale, section),
  };
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
  en: [
    {
      label: "On-site Leak Sealing",
      href: localizePath("en", "/sellado-de-fuga"),
    },
    {
      label: "Safety Valve Calibration",
      href: localizePath("en", "/calibracion-de-valvulas"),
    },
    { label: "X-Pando", href: localizePath("en", "/x-pando") },
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
      { label: "Inicio", href: sectionHref("es", "hero") },
      { label: "Nosotros", href: sectionHref("es", "record") },
      {
        label: "Servicios",
        href: sectionHref("es", "method"),
        children: serviceLinks.es,
      },
      { label: "Contacto", href: sectionHref("es", "enquiry") },
    ],
    navCta: {
      label: "Contactanos",
      href: sectionHref("es", "enquiry"),
    },
    footerColumns: [
      {
        heading: "Sitio",
        links: [
          { label: "Inicio", href: sectionHref("es", "hero") },
          {
            label: "Sobre Nosotros",
            href: sectionHref("es", "record"),
          },
          { label: "Servicios", href: sectionHref("es", "method") },
          { label: "Contacto", href: sectionHref("es", "enquiry") },
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
      { label: "Home", href: sectionHref("en", "hero") },
      { label: "About Us", href: sectionHref("en", "record") },
      {
        label: "Services",
        href: sectionHref("en", "method"),
        children: serviceLinks.en,
      },
      { label: "Contact Us", href: sectionHref("en", "enquiry") },
    ],
    navCta: {
      label: "Contact Us",
      href: sectionHref("en", "enquiry"),
    },
    footerColumns: [
      {
        heading: "Site",
        links: [
          { label: "Home", href: sectionHref("en", "hero") },
          { label: "About Us", href: sectionHref("en", "record") },
          { label: "Services", href: sectionHref("en", "method") },
          { label: "Contact Us", href: sectionHref("en", "enquiry") },
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
