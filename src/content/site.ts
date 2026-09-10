/**
 * Textos y enlaces del sitio. Centralizados acá para que los componentes se
 * ocupen solo del layout.
 */

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

export const navLinks: NavLink[] = [
  { label: "Inicio", href: `/#${sectionIds.hero}` },
  { label: "Nosotros", href: `/#${sectionIds.record}` },
  { label: "Servicio", href: `/#${sectionIds.method}` },
  { label: "Contacto", href: `/#${sectionIds.enquiry}` },
];

export const navCta: NavLink = {
  label: "Contactanos",
  href: `/#${sectionIds.enquiry}`,
};

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    heading: "Sitio",
    links: [
      { label: "Inicio", href: `/#${sectionIds.hero}` },
      { label: "Sobre Nosotros", href: `/#${sectionIds.record}` },
      { label: "Servicios", href: `/#${sectionIds.method}` },
      { label: "Contacto", href: `/#${sectionIds.enquiry}` },
    ],
  },
  {
    heading: "Servicios",
    links: [
      { label: "Sellado de Fugas", href: "/sellado-de-fuga" },
      { label: "Calibración de Válvulas", href: "/calibracion-de-valvulas" },
      { label: "X-Pando", href: "/x-pando" },
    ],
  },
  {
    // PENDIENTE: en el sitio de Framer estos enlaces apuntan a las cuentas de
    // "northfield", la empresa de la plantilla original. Se dejan sin destino
    // hasta tener las cuentas reales de Plox Solutions.
    heading: "Donde encontrarnos",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
    ],
  },
];

export const companyName = "Plox Solutions";
