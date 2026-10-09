import { localizePath, type Localized } from "@/lib/i18n";
import { images, type SiteImage } from "./images";
import { sectionHref, sectionIds } from "./site";

export interface Service {
  code: string;
  /** Ancla del panel dentro de la sección. */
  id: string;
  /** Nombre corto, para el índice de la columna sticky. */
  name: string;
  description: string;
  href: string;
  image: SiteImage;
}

export interface EnquiryField {
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel";
  required: boolean;
}

export interface EnquiryContent {
  title: string;
  subtitle: string;
  fields: EnquiryField[];
  details: { name: string; label: string; placeholder: string };
  submitLabel: string;
  messages: {
    invalid: string;
    sending: string;
    success: string;
    error: string;
    notConfigured: string;
  };
}

export interface HomeContent {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    image: SiteImage;
    cta: { label: string; href: string };
  };
  record: {
    title: string;
    paragraphs: string[];
    marqueeLabel: string;
    marqueeWords: string[];
  };
  method: {
    title: string;
    ctaLabel: string;
    services: Service[];
  };
  enquiry: EnquiryContent;
}

const es: HomeContent = {
  hero: {
    eyebrow: "Specialized Industrial Solutions",
    title: "Ingeniería para mantener la industria en movimiento.",
    body: "Soluciones especializadas para intervenir, mantener y optimizar instalaciones industriales, reduciendo interrupciones y asegurando la continuidad de las operaciones.",
    image: images.es.hero,
    cta: { label: "Contactanos", href: sectionHref("es", sectionIds.enquiry) },
  },

  record: {
    title: "Experiencia que responde.",
    paragraphs: [
      "Desde 1981 brindamos servicios especializados para la industria, combinando experiencia técnica, conocimiento de campo y capacidad de respuesta para resolver desafíos críticos en planta.",
      "Trabajamos sobre instalaciones y procesos en operación, con soluciones orientadas a minimizar tiempos de parada, resolver problemas y mantener la continuidad operativa.",
    ],
    marqueeLabel: "En cada operación",
    // "Precisión" está escrito "Presición" en el sitio de Framer.
    marqueeWords: [
      "Experiencia",
      "Precisión",
      "Operación",
      "Continuidad",
      "Respuesta",
      "Confianza",
    ],
  },

  method: {
    title: "Nuestros Servicios",
    ctaLabel: "Ver servicio",
    services: [
      {
        code: "M-01",
        id: "m-01",
        name: "Sellado de Fugas en Operación",
        description:
          "Control y sellado de fugas sin necesidad de interrumpir el funcionamiento de la instalación",
        href: "/sellado-de-fuga",
        image: images.es.servicioSellado,
      },
      {
        code: "M-02",
        id: "m-02",
        name: "Calibración de Válvulas de Seguridad",
        description:
          "Verificación, ajuste y calibración para asegurar el correcto funcionamiento de válvulas y sistemas de protección.",
        href: "/calibracion-de-valvulas",
        image: images.es.servicioValvulas,
      },
      {
        code: "M-03",
        id: "m-03",
        name: "X-Pando",
        description:
          "Sistema de cemento expansivo para uniones industriales, diseñado para generar conexiones resistentes bajo condiciones exigentes de presión y temperatura.",
        href: "/x-pando",
        image: images.es.servicioXpando,
      },
    ],
  },

  enquiry: {
    title: "Contanos sobre tu proyecto",
    subtitle:
      "Compartinos tu necesidad y nuestro equipo evaluará la mejor solución para acompañar tu operación.",
    fields: [
      {
        name: "name",
        label: "Nombre",
        placeholder: "Nombre",
        type: "text",
        required: true,
      },
      {
        name: "email",
        label: "Email",
        placeholder: "e-mail",
        type: "email",
        required: true,
      },
      {
        name: "phone",
        label: "Teléfono",
        placeholder: "Teléfono",
        type: "tel",
        required: false,
      },
      {
        name: "location",
        label: "Ubicación",
        placeholder: "Ubicación",
        type: "text",
        required: false,
      },
    ],
    details: {
      name: "details",
      label: "Servicio Requerido - Detalles Adicionales",
      placeholder:
        "Servicio requerido, cualquier otro detalle pertinente suyo y del proyecto",
    },
    submitLabel: "Contactanos",
    messages: {
      invalid: "Revisá los campos marcados y volvé a intentar.",
      sending: "Enviando…",
      success:
        "¡Gracias! Recibimos tu consulta y te vamos a contactar a la brevedad.",
      error:
        "No pudimos enviar tu consulta. Probá de nuevo en unos minutos o escribinos por otro medio.",
      notConfigured:
        "El envío del formulario todavía no está configurado. Escribinos por otro medio mientras tanto.",
    },
  },
};

const en: HomeContent = {
  hero: {
    eyebrow: "Specialized Industrial Solutions",
    title: "Engineering to keep industry moving.",
    body: "Specialized solutions for intervening in, maintaining, and optimizing industrial facilities, reducing downtime and ensuring operational continuity.",
    image: images.en.hero,
    cta: { label: "Contact Us", href: sectionHref("en", sectionIds.enquiry) },
  },

  record: {
    title: "Experience that delivers.",
    paragraphs: [
      "Since 1981, we have provided specialized services to industry, combining technical expertise, field experience, and responsiveness to solve critical challenges in operating facilities.",
      "We work on facilities and processes while they remain in operation, with solutions focused on minimizing downtime, resolving issues, and maintaining operational continuity.",
    ],
    marqueeLabel: "In every operation",
    marqueeWords: [
      "Experience",
      "Precision",
      "Operation",
      "Continuity",
      "Response",
      "Trust",
    ],
  },

  method: {
    title: "Our Services",
    ctaLabel: "View service",
    services: [
      {
        code: "M-01",
        id: "m-01",
        name: "On-Site Leak Sealing",
        description:
          "Leak control and sealing without the need to interrupt facility operations.",
        href: localizePath("en", "/sellado-de-fuga"),
        image: images.en.servicioSellado,
      },
      {
        code: "M-02",
        id: "m-02",
        name: "Safety Valve Calibration",
        description:
          "Testing, adjustment, and calibration to ensure the proper operation of valves and protection systems.",
        href: localizePath("en", "/calibracion-de-valvulas"),
        image: images.en.servicioValvulas,
      },
      {
        code: "M-03",
        id: "m-03",
        name: "X-Pando",
        description:
          "Expanding cement compound for industrial joints, designed to create strong, leak-tight connections under demanding pressure and temperature conditions.",
        href: localizePath("en", "/x-pando"),
        image: images.en.servicioXpando,
      },
    ],
  },

  enquiry: {
    title: "Tell us about your project",
    subtitle:
      "Share your requirements with us and our team will evaluate the best solution to support your operation.",
    fields: [
      {
        name: "name",
        label: "Name",
        placeholder: "Name",
        type: "text",
        required: true,
      },
      {
        name: "email",
        label: "Email",
        placeholder: "e-mail",
        type: "email",
        required: true,
      },
      {
        name: "phone",
        label: "Phone number",
        placeholder: "Phone number",
        type: "tel",
        required: false,
      },
      {
        name: "location",
        label: "Location",
        placeholder: "Location",
        type: "text",
        required: false,
      },
    ],
    details: {
      name: "details",
      label: "Service Required - Additional Details",
      placeholder:
        "Service required, any other relevant details regarding you and the project",
    },
    // En Framer el botón quedó en español ("Contactanos").
    submitLabel: "Contact Us",
    messages: {
      invalid: "Please check the highlighted fields and try again.",
      sending: "Sending…",
      success:
        "Thank you! We received your enquiry and will be in touch shortly.",
      error:
        "We couldn't send your enquiry. Please try again in a few minutes or reach us another way.",
      notConfigured:
        "The form isn't set up to send messages yet. Please reach us another way in the meantime.",
    },
  },
};

export const homeContent: Localized<HomeContent> = { es, en };
