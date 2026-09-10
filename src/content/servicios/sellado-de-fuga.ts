import { images } from "@/content/images";
import type { Servicio } from "./tipos";

export const selladoDeFuga: Servicio = {
  slug: "sellado-de-fuga",

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
};
