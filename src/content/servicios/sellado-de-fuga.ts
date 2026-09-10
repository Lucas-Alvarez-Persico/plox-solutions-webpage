import { images } from "@/content/images";
import { videos } from "@/content/videos";
import type { Servicio } from "./tipos";

export const selladoDeFuga: Servicio = {
  slug: "sellado-de-fuga",
  nombreCorto: "Sellado de fugas en operación",
  miniatura: images.miniaturaSellado,

  cierre: "Una intervención precisa puede hacer la diferencia.",

  eyebrow: "Continuidad operativa · Sellado en línea",
  titulo: "SELLADO DE FUGAS EN OPERACIÓN",
  resumen:
    "Intervenimos pérdidas en instalaciones industriales sin necesidad de detener el sistema, trabajando bajo sus condiciones normales de presión y temperatura cuando las condiciones de la instalación lo permiten.",
  portada: images.portadaSellado,

  historia: [
    {
      titulo: "Cuando detener la planta no es la primera opción",
      cuerpo:
        "Una fuga en una instalación industrial puede generar pérdida de producto o energía y comprometer componentes del sistema, mientras que una parada para realizar una reparación convencional puede afectar directamente la producción. El sellado en operación permite abordar determinadas pérdidas sin recurrir inmediatamente a la detención del proceso, reduciendo el impacto de la intervención sobre la actividad de la planta.",
    },
    {
      titulo: "Intervención Controlada",
      cuerpo:
        "La intervención parte de analizar la ubicación y las condiciones de la fuga para definir el método adecuado. Según el caso, se genera una barrera o cavidad alrededor de la zona afectada y se inyecta un compuesto sellante compatible con el fluido y la temperatura de trabajo. La inyección se realiza de manera controlada hasta contener la pérdida.",
    },
  ],

  tecnicas: {
    encabezado: "SELLADO ADAPTADO A CADA INSTALACIÓN",
    intro:
      "El sellado de fugas en operación no responde a un único procedimiento. La geometría del componente, el tipo de pérdida y las condiciones del sistema determinan tanto el método de contención como el compuesto y la forma de inyección.",
    video: videos.sellado,
    // En el sitio de Framer el bloque "Cajas y cerramientos de inyección"
    // aparece dos veces seguidas, con el mismo texto. Acá va una sola vez.
    bloques: [
      {
        titulo: "Inyección en bridas",
        cuerpos: [
          "En las uniones bridadas, el compuesto puede inyectarse de forma sistemática alrededor de la brida. El procedimiento avanza desde el punto opuesto a la pérdida hacia la zona de fuga, generando progresivamente la barrera necesaria para controlar el escape.",
        ],
      },
      {
        titulo: "Empaquetaduras",
        cuerpos: [
          "Cuando la pérdida se produce en una empaquetadura deteriorada o desgastada, puede incorporarse un compuesto compatible para reemplazar el material perdido y recuperar la capacidad de ajuste de la prensaestopa.",
        ],
      },
      {
        titulo: "Envoltura de alambre",
        cuerpos: [
          "En determinadas configuraciones de bridas con espacios reducidos puede utilizarse una envoltura de alambre para formar una barrera alrededor de la unión. Dependiendo de las condiciones de servicio, pueden emplearse materiales como cobre, acero inoxidable u otras aleaciones.",
        ],
      },
      {
        titulo: "Abrazaderas y anillos de inyección",
        cuerpos: [
          "Las abrazaderas permiten crear una cámara cerrada alrededor de la zona afectada. Una vez instalada, el compuesto sellante se introduce a través de puntos de inyección distribuidos en el dispositivo hasta controlar la pérdida.",
          "Los anillos y collars de inyección permiten adaptar este principio a distintas geometrías y situaciones, incluyendo instalaciones donde existen obstrucciones próximas a la zona que debe intervenirse.",
        ],
      },
      {
        titulo: "Cajas y cerramientos de inyección",
        cuerpos: [
          "Cuando la geometría de la instalación requiere una solución de mayor cobertura, pueden utilizarse cerramientos especialmente diseñados para envolver la zona afectada. Este método permite intervenir pérdidas presentes en soldaduras, tramos de cañería, codos, acoples, válvulas y bridas.",
          "El cerramiento genera el espacio necesario para contener e inyectar el compuesto alrededor del punto de fuga.",
        ],
      },
      {
        titulo: "Válvulas con pasaje de fluido",
        cuerpos: [
          "Determinadas pérdidas internas en válvulas también pueden abordarse mediante la generación de un pequeño tapón de compuesto próximo al asiento. Este tipo de intervención requiere un análisis particular de las condiciones de la válvula y del sistema antes de determinar su viabilidad.",
        ],
      },
      {
        titulo: "Selección del compuesto sellante",
        cuerpos: [
          "El material utilizado no se selecciona de manera genérica. La elección depende principalmente de la composición química del fluido y la temperatura presente en la fuga, de manera que el compuesto sea compatible con las condiciones específicas de servicio.",
          "Los compuestos utilizados para este tipo de intervención están formulados para conservar su volumen una vez inyectados y mantener la barrera generada alrededor de la pérdida.",
        ],
      },
      {
        titulo: "Aplicaciones",
        cuerpos: [
          "Las técnicas de sellado pueden aplicarse, según las características de cada caso, sobre bridas, válvulas, cañerías, soldaduras, codos, intercambiadores de calor, uniones, accesorios de tuberías y empaquetaduras.",
          "Esto permite adaptar el procedimiento a distintos puntos de una instalación en lugar de limitar el servicio a un único tipo de componente.",
        ],
      },
      {
        titulo: "Condiciones de operación",
        cuerpos: [
          "La documentación técnica de referencia contempla aplicaciones desde condiciones criogénicas hasta temperaturas superiores a 815 °C (1500 °F) y desde vacío hasta presiones superiores a 6.300 psi.",
          "Estos valores expresan el rango indicado para la tecnología de sellado y no significan que cualquier fuga pueda intervenirse bajo esas condiciones. La viabilidad y el procedimiento deben definirse a partir de las características concretas de cada instalación.",
        ],
      },
    ],
  },
};
