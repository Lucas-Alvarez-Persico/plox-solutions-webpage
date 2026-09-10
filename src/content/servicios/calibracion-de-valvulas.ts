import { images } from "@/content/images";
import { videos } from "@/content/videos";
import type { Servicio } from "./tipos";

export const calibracionDeValvulas: Servicio = {
  slug: "calibracion-de-valvulas",
  nombreCorto: "Calibración de Válvulas",
  miniatura: images.miniaturaValvulas,

  cierre: "La seguridad de una instalación también depende de medir con precisión.",

  eyebrow: "Control · Precisión · Seguridad",
  titulo: "CALIBRACIÓN DE VÁLVULAS DE SEGURIDAD",
  resumen:
    "Comprobación y ajuste de válvulas directamente sobre la instalación, mediante un sistema de medición que permite verificar su presión de apertura y comportamiento.",
  portada: images.portadaValvulas,

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
