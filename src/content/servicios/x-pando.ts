import { images } from "@/content/images";
import { videos } from "@/content/videos";
import type { Localized } from "@/lib/i18n";
import type { Servicio } from "./tipos";

const es: Servicio = {
  slug: "x-pando",
  nombreCorto: "X-Pando",
  miniatura: images.es.miniaturaXpando,

  cierre: "Una unión confiable empieza por elegir el compuesto adecuado.",

  eyebrow: "Unión · Resistencia · Sellado",
  titulo: "X-PANDO",
  resumen:
    "Cemento expansivo para uniones industriales que, al mezclarse con agua y curar, genera una expansión leve y permanente que contribuye a obtener conexiones resistentes y herméticas.",
  portada: images.es.portadaXpando,

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

const en: Servicio = {
  slug: "x-pando",
  nombreCorto: "X-Pando",
  miniatura: images.en.miniaturaXpando,

  cierre: "A reliable connection starts with choosing the right compound.",

  eyebrow: "Union · Strength · Sealing",
  titulo: "X-PANDO",
  resumen:
    "Expanding cement compound for industrial joints that, when mixed with water and cured, produces slight and permanent expansion, helping create strong and leak-tight connections.",
  portada: images.en.portadaXpando,

  historia: [
    {
      titulo: "A union that works with the seal",
      cuerpo:
        "Variations in pressure, temperature, and vibration can place significant demands on industrial joints. X-Pando uses a different principle from conventional compounds: during curing, it produces controlled expansion that fills irregularities in the joint and helps create a firm, durable seal.",
    },
    {
      // En Framer dice "Prepare, apply, and heal".
      titulo: "Prepare, apply, and cure",
      cuerpo:
        "X-Pando is supplied as a dry compound formulated from oxides and minerals. It is mixed with clean water immediately before application until the required consistency is achieved, applied to the joint, and then begins its curing process. For high-pressure applications, technical documentation indicates a curing period of 24 hours at room temperature.",
    },
  ],

  tecnicas: {
    encabezado: "A COMPOUND FOR DEMANDING CONDITIONS",
    intro:
      "X-Pando is a jointing cement designed for threaded and flanged connections. Unlike conventional thread grease or paste, it is prepared immediately before use and develops slight expansion during curing. This characteristic allows the material to fill irregularities between surfaces and contribute to sealing the connection.",
    video: videos.xpando,
    bloques: [
      {
        titulo: "How it works",
        cuerpos: [
          "The product is mixed with clean water immediately before use. Once prepared, it is applied to the surfaces that will form the joint.",
          "During curing, the compound undergoes slight and permanent expansion, which can reach up to 1 mm, according to the reference technical documentation. This expansion fills gaps and irregularities and generates pressure between the contact surfaces.",
          "Once cured, the material becomes part of the joint and contributes to maintaining its tightness under service conditions.",
        ],
      },
      {
        titulo: "Application",
        cuerpos: [
          "The procedure consists of three main stages:",
          {
            etiqueta: "Preparation",
            texto:
              "The dry compound is mixed with clean water immediately before use, preparing only the amount required for the application.",
          },
          {
            etiqueta: "Application",
            texto:
              "The mixture is distributed over the joint surfaces, including the threads in threaded connections, before the components are assembled.",
          },
          {
            etiqueta: "Curing",
            texto:
              "Once the connection has been assembled, the material is allowed to cure. For high-pressure conditions, technical documentation indicates 24 hours of curing at room temperature before the connection is placed into service.",
          },
        ],
      },
      {
        titulo: "Materials & kinds of unions",
        cuerpos: [
          "X-Pando can be used in threaded or flanged connections and on a range of materials commonly used in industrial installations.",
          "These include iron, steel, bronze, stainless steel, copper, and certain plastics.",
          "Its use is not recommended on anodized aluminum, as the product may cause discoloration on this material.",
        ],
      },
      {
        titulo: "Service conditions",
        cuerpos: [
          "Reference technical documentation indicates applications of up to:",
          { etiqueta: "350 kg/cm²", texto: "Maximum indicated pressure." },
          { etiqueta: "700 °C", texto: "Maximum indicated temperature." },
          { etiqueta: "Up to 1 mm", texto: "Expansion during curing." },
          "These values correspond to the product's indicated capabilities. Compatibility and application conditions must be evaluated according to the specific characteristics of each installation.",
        ],
      },
      {
        // En Framer dice "Union strenght".
        titulo: "Union strength",
        cuerpos: [
          "Once cured, X-Pando is designed to maintain sealing performance under varying conditions of pressure, temperature, vibration, and deflection.",
          "Its expansion can also help compensate for certain imperfections in threads or joint surfaces, increasing contact between the components.",
          "Product documentation also indicates that the compound can cure under vacuum conditions.",
        ],
      },
      {
        titulo: "Fluid compatibility",
        cuerpos: [
          "X-Pando is indicated for use with a wide range of media found in industrial installations, including water, steam, gasoline, petroleum-derived oils, hydrocarbons, carbon dioxide, oxygen, nitrogen, helium, and certain refrigerants, among others.",
          "It is also indicated for potable water installations.",
          "However, limitations exist with certain strong acids, including sulfuric, hydrochloric, acetic, and phosphoric acids. Chemical compatibility should therefore be verified according to the specific application.",
        ],
      },
      {
        titulo: "Safety & composition",
        cuerpos: [
          "According to the product's technical information, X-Pando is formulated without lead or asbestos, is non-combustible, and does not generate hazardous gases during application or heating.",
          "The compound is also odorless and tasteless, a relevant characteristic for certain applications.",
        ],
      },
      {
        titulo: "Performance",
        cuerpos: [
          "Because the product is supplied dry and prepared only in the quantity required for each job, material waste is reduced.",
          "Product documentation indicates a weight yield approximately 4 to 6 times greater than that of conventional jointing compounds.",
        ],
      },
      {
        titulo: "Disassembly",
        cuerpos: [
          "The expansion generated during curing does not mean that the connection can never be disassembled.",
          "When separation of the components is required, product documentation indicates that the joint can be released by applying force while lightly tapping the fitting.",
        ],
      },
      {
        titulo: "Industrial applications",
        cuerpos: [
          "X-Pando can be used in connections found in gas generators, diesel engines, superheaters, condensers, pumps, gauges, valves, and burner piping, among other equipment.",
          "It also covers specific applications such as repairing certain types of porosity or cracks in low-pressure components and securing anchor bolts to metal or concrete.",
        ],
      },
    ],
  },
};

export const xPando: Localized<Servicio> = { es, en };
