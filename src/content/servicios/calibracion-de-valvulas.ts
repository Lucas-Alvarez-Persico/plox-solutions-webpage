import { images } from "@/content/images";
import { videos } from "@/content/videos";
import type { Localized } from "@/lib/i18n";
import type { Servicio } from "./tipos";

const es: Servicio = {
  slug: "calibracion-de-valvulas",
  nombreCorto: "Calibración de Válvulas",
  miniatura: images.es.miniaturaValvulas,

  cierre:
    "La seguridad de una instalación también depende de medir con precisión.",

  eyebrow: "Control · Precisión · Seguridad",
  titulo: "CALIBRACIÓN DE VÁLVULAS DE SEGURIDAD",
  resumen:
    "Comprobación y ajuste de válvulas directamente sobre la instalación, mediante un sistema de medición que permite verificar su presión de apertura y comportamiento.",
  portada: images.es.portadaValvulas,

  historia: [
    {
      titulo: "Seguridad bajo control",
      cuerpo:
        "Las válvulas de seguridad son componentes críticos para la protección de una instalación. Verificar correctamente su presión de apertura permite detectar desajustes y determinar si requieren regulación o mantenimiento, evitando desmontajes innecesarios y obteniendo información precisa sobre su comportamiento.",
    },
    {
      titulo: "Medición directa en la instalación",
      cuerpo:
        "La calibración in situ utiliza un sistema electromecánico que aplica una fuerza controlada sobre el vástago de la válvula y registra su respuesta. A partir de la fuerza aplicada, la presión de línea y las características de la válvula, es posible determinar su presión de apertura y realizar los ajustes necesarios directamente sobre la instalación.",
    },
  ],

  tecnicas: {
    encabezado: "PRECISIÓN APLICADA A CADA VÁLVULA",
    intro:
      "La calibración in situ permite comprobar el comportamiento de válvulas de seguridad y descarga directamente en su posición de trabajo. El sistema combina componentes mecánicos, hidráulicos y electrónicos para aplicar una fuerza conocida y registrar con precisión el momento de apertura.",
    video: videos.valvulas,
    bloques: [
      {
        titulo: "Cómo funciona",
        cuerpos: [
          "Una unidad hidráulica genera una fuerza controlada sobre el vástago de la válvula. Esta fuerza es medida mediante un transductor y registrada electrónicamente durante la prueba.",
          "Conociendo el área del asiento de la válvula y la presión existente en la línea, los datos obtenidos permiten calcular la presión a la que se produce la apertura.",
          "El proceso permite determinar la presión de apertura, el ajuste o regulación de la tensión del resorte y la carrera de la válvula.",
        ],
      },
      {
        titulo: "Prueba en caliente",
        cuerpos: [
          "La prueba en caliente se realiza con la válvula instalada y bajo las condiciones normales de funcionamiento del sistema.",
          "Esto permite comprobar su comportamiento sin necesidad de elevar la presión de la caldera o del sistema únicamente para provocar la apertura de la válvula. La instalación puede continuar operativa mientras se realiza la comprobación.",
          "La documentación técnica de referencia indica una correspondencia de los resultados con la presión real de apertura de ±1 %.",
        ],
      },
      {
        titulo: "Registro de resultados",
        cuerpos: [
          "Durante la prueba pueden registrarse tanto la fuerza aplicada como la presión de línea, generando un gráfico fechado que documenta el comportamiento de la válvula.",
          "También puede registrarse la carrera o elevación de la válvula, aportando información adicional para su evaluación y dejando un registro permanente para el historial de mantenimiento.",
        ],
      },
      {
        titulo: "Ajuste en la propia instalación",
        cuerpos: [
          "Una de las principales ventajas del procedimiento es la posibilidad de comprobar y realizar ajustes sin retirar inicialmente todas las válvulas del sistema.",
          "De esta manera, pueden identificarse aquellas que efectivamente requieren revisión o reparación, reduciendo desmontajes y tareas de mantenimiento innecesarias. Las válvulas soldadas también pueden comprobarse y ajustarse sin necesidad de removerlas de la instalación.",
        ],
      },
      {
        // En Framer este bloque y el anterior tienen los textos cruzados: el
        // titulado "Prueba en frío" lleva contenido de la página de sellado, y
        // el titulado "Cajas y cerramientos de inyección" lleva este texto.
        titulo: "Prueba en frío",
        cuerpos: [
          "El sistema también permite realizar comprobaciones cuando no existe presión en la línea.",
          "Antes de efectuar la prueba se realiza un cálculo basado en la geometría y el material del vástago para establecer condiciones seguras de ensayo. A partir de allí pueden determinarse la presión de apertura, el ajuste del resorte y la carrera de la válvula.",
          "Esta modalidad puede utilizarse para comprobar válvulas de una instalación nueva antes de su puesta en servicio o durante una parada para identificar cuáles requieren mantenimiento.",
        ],
      },
      {
        titulo: "Componentes del sistema",
        cuerpos: [
          "El equipo combina tres sistemas que trabajan de manera conjunta:",
          {
            etiqueta: "Sistema mecánico",
            texto:
              "Una estructura ajustable permite montar los cilindros hidráulicos y la celda de carga directamente sobre la válvula.",
          },
          {
            etiqueta: "Sistema hidráulico",
            texto:
              "Genera la fuerza adicional necesaria para provocar de manera controlada la apertura de la válvula.",
          },
          {
            etiqueta: "Sistema electrónico",
            texto:
              "Registra la fuerza aplicada durante la prueba y permite documentar los resultados obtenidos.",
          },
        ],
      },
      {
        titulo: "Calibración del equipo",
        cuerpos: [
          "El equipo de medición se calibra de acuerdo con estándares nacionales y se realiza una comprobación de calibración antes de cada prueba final de la válvula.",
          "El resultado de esa comprobación puede incorporarse al gráfico final, aportando trazabilidad al registro obtenido.",
        ],
      },
      {
        titulo: "Ventajas de la calibración in situ",
        cuerpos: [
          "Al realizar la prueba directamente sobre la instalación y, cuando corresponde, bajo condiciones normales de funcionamiento, se reduce la necesidad de desmontar componentes únicamente para comprobar su estado.",
          "El procedimiento permite reducir interrupciones de producción, evitar incrementos innecesarios de presión para realizar ensayos, disminuir tiempos de mantenimiento y generar registros permanentes de cada prueba.",
          "Además, al trabajar a la temperatura normal de operación, la prueba en caliente evita la necesidad de realizar compensaciones de temperatura posteriores.",
        ],
      },
      {
        titulo: "Aplicaciones",
        cuerpos: [
          "El sistema está orientado a la comprobación y ajuste de válvulas de seguridad y válvulas de descarga, tanto durante la operación de una instalación como durante tareas de puesta en servicio, mantenimiento o parada programada.",
          "La modalidad y las condiciones de cada ensayo se determinan según las características de la válvula y de la instalación.",
        ],
      },
    ],
  },
};

const en: Servicio = {
  slug: "calibracion-de-valvulas",
  nombreCorto: "Safety Valve Calibration",
  miniatura: images.en.miniaturaValvulas,

  cierre: "The safety of an installation also depends on precise measurement.",

  eyebrow: "Control · Precision · Safety",
  titulo: "SAFETY VALVE CALIBRATION",
  resumen:
    "Testing and adjustment of valves directly on the installation, using a measurement system that allows their set pressure and operating behavior to be verified.",
  portada: images.en.portadaValvulas,

  historia: [
    {
      titulo: "Safety under control",
      cuerpo:
        "Safety valves are critical components for protecting an installation. Accurately verifying their set pressure makes it possible to detect deviations and determine whether adjustment or maintenance is required, avoiding unnecessary removal and obtaining precise information about their performance.",
    },
    {
      titulo: "Direct measurement on the installation",
      cuerpo:
        "On-site calibration uses an electromechanical system that applies a controlled force to the valve stem and records its response. Based on the applied force, line pressure, and valve characteristics, its set pressure can be determined and the necessary adjustments can be made directly on the installation.",
    },
  ],

  tecnicas: {
    encabezado: "PRECISION APPLIED TO EVERY VALVE",
    intro:
      "On-site calibration allows the performance of safety and relief valves to be verified directly in their operating position. The system combines mechanical, hydraulic, and electronic components to apply a known force and accurately record the point at which the valve opens.",
    video: videos.valvulas,
    bloques: [
      {
        titulo: "How it works",
        cuerpos: [
          "A hydraulic unit generates a controlled force on the valve stem. This force is measured by a transducer and electronically recorded throughout the test.",
          "By knowing the valve seat area and the pressure present in the line, the data obtained can be used to calculate the pressure at which the valve opens.",
          "The process makes it possible to determine the set pressure, spring tension adjustment, and valve lift.",
        ],
      },
      {
        titulo: "Hot testing",
        cuerpos: [
          "Hot testing is carried out with the valve installed and under the system's normal operating conditions.",
          "This makes it possible to verify valve performance without having to increase boiler or system pressure solely to cause the valve to open. The installation can remain operational while the test is performed.",
          "Reference technical documentation indicates a correlation with the actual set pressure of ±1%.",
        ],
      },
      {
        titulo: "Results recording",
        cuerpos: [
          "During the test, both the applied force and line pressure can be recorded, generating a dated graph documenting the valve's behavior.",
          "Valve lift can also be recorded, providing additional information for evaluation and creating a permanent record for the maintenance history.",
        ],
      },
      {
        titulo: "Adjustment on the installation",
        cuerpos: [
          "One of the main advantages of the procedure is the ability to test and adjust valves without initially removing them from the system.",
          "This makes it possible to identify which valves actually require inspection or repair, reducing unnecessary removal and maintenance work. Welded valves can also be tested and adjusted without removing them from the installation.",
        ],
      },
      {
        // Mismo cruce que en la versión en español (ver arriba): en Framer este
        // bloque lleva el texto de las cajas de inyección y el siguiente,
        // titulado "Injection enclosures and clamps", lleva este.
        titulo: "Cold testing",
        cuerpos: [
          "The system also allows testing when there is no pressure in the line.",
          "Before testing, a calculation based on the geometry and material of the valve stem is performed to establish safe test conditions. The set pressure, spring adjustment, and valve lift can then be determined.",
          "This method can be used to test valves in a new installation before commissioning or during a shutdown to identify which valves require maintenance.",
        ],
      },
      {
        titulo: "System components",
        cuerpos: [
          "The equipment combines three systems working together:",
          {
            etiqueta: "Mechanical system",
            texto:
              "An adjustable structure allows the hydraulic cylinders and load cell to be mounted directly onto the valve.",
          },
          {
            etiqueta: "Hydraulic system",
            texto:
              "Generates the additional force required to cause the valve to open in a controlled manner.",
          },
          {
            etiqueta: "Electronic system",
            texto:
              "Records the force applied during the test and documents the results obtained.",
          },
        ],
      },
      {
        titulo: "Equipment calibration",
        cuerpos: [
          "The measurement equipment is calibrated according to national standards, with a calibration check performed before each final valve test.",
          "The result of this check can be incorporated into the final graph, providing traceability for the recorded results.",
        ],
      },
      {
        titulo: "Advantages of on-site calibration",
        cuerpos: [
          "By testing directly on the installation and, where applicable, under normal operating conditions, the need to remove components solely to verify their condition is reduced.",
          "The procedure helps reduce production interruptions, avoid unnecessary pressure increases during testing, shorten maintenance times, and generate permanent records for each test.",
          "In addition, because hot testing is performed at the normal operating temperature, it eliminates the need for subsequent temperature compensation.",
        ],
      },
      {
        titulo: "Applications",
        cuerpos: [
          "The system is designed for the testing and adjustment of safety valves and relief valves, both during facility operation and during commissioning, maintenance, or scheduled shutdowns.",
          "The testing method and conditions are determined according to the characteristics of the valve and installation.",
        ],
      },
    ],
  },
};

export const calibracionDeValvulas: Localized<Servicio> = { es, en };
