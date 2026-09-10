import { images } from "@/content/images";
import { videos } from "@/content/videos";
import type { Servicio } from "./tipos";

export const xPando: Servicio = {
  slug: "x-pando",
  nombreCorto: "X-Pando",
  miniatura: images.miniaturaXpando,

  cierre: "Una unión confiable empieza por elegir el compuesto adecuado.",

  eyebrow: "Unión · Resistencia · Sellado",
  titulo: "X-PANDO",
  resumen:
    "Cemento expansivo para uniones industriales que, al mezclarse con agua y curar, genera una expansión leve y permanente que contribuye a obtener conexiones resistentes y herméticas.",
  portada: images.portadaXpando,

  historia: [
    {
      titulo: "Una unión que trabaja a favor del sellado",
      cuerpo:
        "Las variaciones de presión, temperatura y vibración pueden exigir especialmente a las uniones de una instalación. X-Pando utiliza un principio diferente al de los compuestos convencionales: durante el curado produce una expansión controlada que ocupa las irregularidades de la unión y contribuye a generar un sellado firme y duradero.",
    },
    {
      titulo: "Preparar, aplicar y dejar curar",
      cuerpo:
        "X-Pando se presenta como un compuesto seco formulado a partir de óxidos y minerales. Se mezcla con agua limpia inmediatamente antes de su aplicación hasta obtener la consistencia necesaria, se coloca sobre la unión y comienza su proceso de curado. Para aplicaciones de alta presión, la documentación técnica indica un período de curado de 24 horas a temperatura ambiente.",
    },
  ],

  tecnicas: {
    encabezado: "UN COMPUESTO PARA CONDICIONES EXIGENTES",
    intro:
      "X-Pando es un cemento de unión diseñado para conexiones roscadas y bridadas. A diferencia de una grasa o pasta convencional para roscas, se prepara antes de su utilización y desarrolla una ligera expansión durante el proceso de curado.",
    video: videos.xpando,
    bloques: [
      {
        titulo: "Cómo funciona",
        cuerpos: [
          "El producto se mezcla con agua limpia inmediatamente antes de utilizarse. Una vez preparado, se aplica sobre las superficies que conformarán la unión.",
          "Durante el curado, el compuesto experimenta una expansión leve y permanente, que puede alcanzar hasta 1 mm según la documentación técnica de referencia. Esta expansión permite rellenar espacios e irregularidades y generar presión sobre las superficies de contacto.",
          "Una vez curado, el material forma parte de la unión y contribuye a mantener su estanqueidad frente a las condiciones de servicio.",
        ],
      },
      {
        titulo: "Aplicación",
        cuerpos: [
          "El procedimiento se desarrolla en tres etapas principales:",
          {
            etiqueta: "Preparación",
            texto:
              "El compuesto seco se mezcla con agua limpia inmediatamente antes de utilizarlo, preparando únicamente la cantidad necesaria para la aplicación.",
          },
          {
            etiqueta: "Aplicación",
            texto:
              "La mezcla se distribuye sobre las superficies de la unión, incluyendo las roscas en conexiones roscadas, antes del ensamblaje de los componentes.",
          },
          {
            etiqueta: "Curado",
            texto:
              "Una vez realizada la unión, se deja curar el material. Para condiciones de alta presión, la documentación técnica indica 24 horas de curado a temperatura ambiente antes de someter la conexión a servicio.",
          },
        ],
      },
      {
        titulo: "Materiales y tipos de unión",
        cuerpos: [
          "X-Pando puede utilizarse en conexiones roscadas o bridadas y sobre distintos materiales empleados habitualmente en instalaciones industriales.",
          "Entre ellos se encuentran hierro, acero, bronce, acero inoxidable, cobre y determinados plásticos.",
          "No se recomienda su utilización sobre aluminio anodizado, ya que el producto puede producir decoloración sobre este material.",
        ],
      },
      {
        titulo: "Condiciones de servicio",
        cuerpos: [
          "La documentación técnica de referencia indica aplicaciones de hasta:",
          { etiqueta: "350 kg/cm²", texto: "Presión máxima indicada." },
          { etiqueta: "700 °C", texto: "Temperatura máxima indicada." },
          { etiqueta: "Hasta 1 mm", texto: "Expansión durante el curado." },
          "Estos valores corresponden a las capacidades indicadas para el producto. La compatibilidad y condiciones de aplicación deben evaluarse de acuerdo con las características particulares de cada instalación.",
        ],
      },
      {
        titulo: "Resistencia de la unión",
        cuerpos: [
          "Una vez curado, X-Pando está concebido para mantener el sellado frente a condiciones variables de presión, temperatura, vibración y deflexión.",
          "Su expansión también puede contribuir a compensar determinadas imperfecciones presentes en roscas o superficies de unión, aumentando el contacto entre las partes.",
          "La documentación del producto indica además que el compuesto puede curar incluso bajo condiciones de vacío.",
        ],
      },
      {
        titulo: "Compatibilidad con fluidos",
        cuerpos: [
          "X-Pando está indicado para trabajar con una amplia variedad de medios presentes en instalaciones industriales, incluyendo agua, vapor, gasolina, aceites derivados del petróleo, hidrocarburos, dióxido de carbono, oxígeno, nitrógeno, helio y determinados refrigerantes, entre otros.",
          "También se indica su aptitud para instalaciones de agua potable.",
          "Existen, sin embargo, limitaciones frente a determinados ácidos fuertes, entre ellos ácido sulfúrico, clorhídrico, acético y fosfórico, por lo que la compatibilidad química debe verificarse según la aplicación.",
        ],
      },
      {
        titulo: "Seguridad y composición",
        cuerpos: [
          "De acuerdo con la información técnica del producto, X-Pando está formulado sin plomo ni asbesto, es no combustible y no genera gases peligrosos durante su aplicación o calentamiento.",
          "El compuesto tampoco aporta olor ni sabor, característica relevante para determinadas aplicaciones.",
        ],
      },
      {
        titulo: "Rendimiento",
        cuerpos: [
          "Al suministrarse en seco y prepararse únicamente en la cantidad necesaria para cada trabajo, se reduce el desperdicio de material.",
          "La documentación técnica indica un rendimiento por peso de aproximadamente 4 a 6 veces el de compuestos de unión convencionales.",
        ],
      },
      {
        titulo: "Desmontaje",
        cuerpos: [
          "La expansión generada durante el curado no implica que la conexión quede permanentemente imposibilitada de desmontar.",
          "Cuando es necesario separar los componentes, la documentación del producto indica que la unión puede liberarse aplicando fuerza mientras se golpea ligeramente el accesorio.",
        ],
      },
      {
        titulo: "Aplicaciones industriales",
        cuerpos: [
          "X-Pando puede emplearse en conexiones presentes en generadores de gas, motores diésel, sobrecalentadores, condensadores, bombas, medidores, válvulas y tuberías de quemadores, entre otros equipos.",
          "También contempla aplicaciones específicas como la reparación de determinadas porosidades o fisuras en componentes de baja presión y la fijación de pernos de anclaje sobre metal o cemento.",
        ],
      },
    ],
  },
};
