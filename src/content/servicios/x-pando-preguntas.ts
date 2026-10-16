import type { Localized } from "@/lib/i18n";
import type { PreguntasFrecuentes } from "./tipos";

/**
 * Preguntas frecuentes de X-Pando, tomadas de los dos Framer (el de español y
 * el de inglés).
 *
 * Correcciones al español:
 * - Framer repetía en "tiempo de trabajabilidad" la respuesta de las
 *   temperaturas bajo cero, y ponía la de trabajabilidad en "vida útil". Acá
 *   cada respuesta va con su pregunta; la de "vida útil" sale del Framer en
 *   inglés.
 * - "Tiempo de configuración" pasó a "tiempo de fraguado", "mantequilla de
 *   cacahuete" a "manteca de maní" y "bombillas" a "lámparas".
 * - "¿No es tóxico?" contestado con "No" decía lo contrario de lo que quería:
 *   ahora pregunta "¿Es tóxico?".
 *
 * En los dos idiomas, la de cuánto compuesto se necesita remitía a una hoja de
 * cálculo que no está publicada: ahora invita a consultar.
 */
export const preguntasXPando: Localized<PreguntasFrecuentes> = {
  es: {
    titulo: "Preguntas Frecuentes",
    resumen: "¿Necesitás ayuda? Acá están nuestras preguntas más frecuentes.",
    descripcion:
      "Cómo preparar y aplicar X-Pando, cuánto tarda en fraguar, cómo desmontar una junta y con qué gases y líquidos es compatible.",
    preguntas: [
      {
        pregunta: "¿Cómo utilizo el compuesto para juntas de tuberías X-Pando?",
        respuesta: [
          "El compuesto para juntas de tuberías X-Pando es un polvo seco que debe mezclarse con agua en una proporción aproximada de cinco partes de polvo por una de agua antes de su uso. Mezcle el material hasta obtener una consistencia espesa, similar a la manteca de maní cremosa, utilizando agua limpia y un recipiente limpio.",
          "Con una brocha o espátula, aplique el compuesto en las primeras cuatro roscas macho (rellenar más de seis roscas es innecesario y supone un desperdicio). Se formará un cordón de material sobrante que se desplazará hacia el exterior de la junta. No retire este material sobrante: sirve como guía para saber si el compuesto está fraguado. Cuando se convierte en un cemento duro que no se puede rayar, significa que fraguó.",
          "El compuesto para juntas de tuberías X-Pando no es un adhesivo; en cambio, se expande al fraguar para rellenar el hueco. Todas las roscas deben estar limpias de cualquier residuo o aceite de corte (especialmente las de acero inoxidable), ya que cualquiera de ellos podría dejar un espacio entre las roscas y el material y permitir fugas.",
        ],
      },
      {
        pregunta:
          "¿El compuesto para juntas de tuberías X-Pando fragua rápidamente?",
        respuesta: [
          "No, el compuesto para juntas de tuberías X-Pando no es un cemento de fraguado rápido. En condiciones normales de temperatura y presión atmosférica, el material fraguará en 24 horas.",
        ],
      },
      {
        pregunta: "¿Puedo acelerar el tiempo de fraguado?",
        respuesta: [
          "La evaporación del agua es el factor principal, por lo que espesar la mezcla lo máximo posible acelerará el tiempo de fraguado. Si se desea un fraguado más rápido, se puede secar X-Pando con lámparas de calor, lámparas infrarrojas, pistolas de calor o sopletes. Sin embargo, NO CALIENTE A MÁS DE 93 °C (200 °F): el calor excesivo puede generar vapor y fracturar el X-Pando.",
          "Si se trabaja con la presión normal de la red pública, las juntas se pueden usar en 30 minutos. Si se trabaja con alta presión o las juntas están dañadas, se recomienda esperar hasta que el material esté completamente fraguado.",
        ],
      },
      {
        pregunta:
          "¿Cómo puedo usar el compuesto para juntas de tuberías X-Pando a temperaturas bajo cero?",
        respuesta: [
          "El contenido de agua en la mezcla de X-Pando genera problemas con las temperaturas bajo cero del invierno. Las juntas deben protegerse de la congelación mediante aislamiento térmico o cinta calefactora eléctrica. También se pueden utilizar los métodos de secado forzado mencionados anteriormente.",
        ],
      },
      {
        pregunta:
          "¿Cuál es el tiempo de trabajabilidad del compuesto para juntas de tuberías X-Pando?",
        respuesta: [
          "Según su preferencia en la proporción de agua y polvo, una mezcla debería ser manejable durante 1 hora y media a 2 horas. El material se endurece a medida que el agua se evapora; por lo tanto, cuanto más líquida sea la mezcla, más tiempo se podrá trabajar. Una mezcla más líquida no alterará las propiedades de sellado de X-Pando, pero tardará más en fraguar. NO agregue agua a una mezcla existente; prepare una nueva.",
        ],
      },
      {
        pregunta:
          "¿Cuál es la vida útil del compuesto para juntas de tuberías X-Pando?",
        respuesta: [
          "Si sigue las indicaciones de los envases, mantiene las tapas bien cerradas y evita exponer el material a la humedad, el compuesto dura indefinidamente.",
        ],
      },
      {
        pregunta:
          "¿Puedo usar el compuesto para juntas de tuberías X-Pando en tuberías de aluminio sin anodizar?",
        respuesta: [
          "Sí, puede hacerlo, pero tenga en cuenta que X-Pando provocará que el aluminio se decolore. Si esto no representa un problema para su aplicación, el producto funcionará con normalidad.",
        ],
      },
      {
        pregunta:
          "¿Es posible desmontar una junta que se ha unido con el compuesto para juntas de tuberías X-Pando?",
        respuesta: [
          "Sí, es posible, pero es más difícil que con otros materiales. Generalmente, forzar la junta con una llave no funciona. El procedimiento correcto consiste en aplicar presión a la tubería con una llave mientras se golpea la conexión por todos lados. Al golpear la junta se rompe la unión por expansión entre la superficie y el compuesto, lo que permite aflojarla.",
        ],
      },
      {
        pregunta:
          "¿Qué tan resistente es el compuesto para juntas de tuberías X-Pando?",
        respuesta: [
          "X-Pando es al menos diez veces más resistente que la mayoría de los demás selladores para juntas de tuberías.",
        ],
      },
      {
        pregunta: "¿Qué tan apretada debo hacer la unión?",
        respuesta: [
          "No es necesario apretar demasiado la junta: la expansión del producto, una vez colocado, sellará la junta de forma eficaz.",
        ],
      },
      {
        pregunta: "¿Es tóxico el compuesto para juntas de tuberías X-Pando?",
        respuesta: [
          "No. X-Pando no contiene plomo, amianto, teflón ni carcinógenos dañinos.",
        ],
      },
      {
        pregunta:
          "¿Es seguro utilizar el compuesto para juntas de tuberías X-Pando en sistemas que contienen agua potable?",
        respuesta: [
          "Sí. El compuesto para juntas de tuberías X-Pando y su producto hermano, X-Pando Special No. 2, cumplen con los requisitos sugeridos por la AWWA para agua potable y están clasificados por Underwriters Laboratories Inc.® de acuerdo con la norma ANSI/NSF 61.",
        ],
      },
      {
        pregunta:
          "¿Es útil el compuesto para juntas de tuberías X-Pando para gases difíciles de contener?",
        respuesta: [
          "Sí, se utiliza ampliamente como sellador para gases, incluyendo oxígeno, helio, CO2, butano, gas natural y cloro. Es particularmente útil en los sectores de aire acondicionado y refrigeración para amoníaco y freón, así como para otros gases ecológicos. También ha sido probado y aprobado para sistemas que contienen oxígeno medicinal en hospitales.",
        ],
      },
      {
        pregunta:
          "¿El compuesto para juntas de tuberías X-Pando es insoluble en líquidos?",
        respuesta: [
          "X-Pando es insoluble en agua, gasolina, disolventes minerales, vapor y la mayoría de los demás líquidos, con la excepción de ácidos y bases concentrados. X-Pando Products Company no recomienda el uso de sus productos para sellar líquidos con un pH inferior a 2 o superior a 12.",
        ],
      },
      {
        pregunta:
          "¿Es útil el compuesto para juntas de tuberías X-Pando con gases licuados?",
        respuesta: [
          "Sí. Tras largas pruebas en el Centro Espacial Kennedy, X-Pando se sumó a la lista de materiales compatibles con oxígeno líquido de la NASA.",
        ],
      },
      {
        pregunta:
          "¿El compuesto para juntas de tuberías X-Pando está aprobado por Underwriters Laboratories Inc.®?",
        respuesta: [
          "Sí. Cumple con las normas UL para el sellado hermético de juntas de tuberías metálicas roscadas contra fugas, y está clasificado de acuerdo con la norma NSF/ANSI 61 para agua potable, conforme a la norma NSF/ANSI 372 (antes conocida como Anexo G).",
        ],
      },
      {
        pregunta:
          "¿Cuánto compuesto para juntas de tuberías X-Pando necesito?",
        respuesta: [
          "Depende de la cantidad de uniones y de su diámetro. Consultanos y te ayudamos a calcular cuánto vas a necesitar.",
        ],
      },
    ],
  },

  // Texto del Framer en inglés, con "it's" corregido a "its" y la temperatura
  // también en °C, como en español.
  en: {
    titulo: "Frequent Questions",
    resumen: "Need help with something? Here are our most frequent questions.",
    descripcion:
      "How to mix and apply X-Pando, how long it takes to set, how to take a joint apart, and which gases and liquids it works with.",
    preguntas: [
      {
        pregunta: "How do I use X-Pando Pipe Joint Compound?",
        respuesta: [
          "X-Pando Pipe Joint Compound is a dry powder and must be mixed with water at about a five parts powder to one part water ratio before using. Mix the material to a thick consistency, similar to creamy peanut butter, using clean water and a clean container.",
          "With a brush or spatula, apply the X-Pando Pipe Joint Compound across the first four male threads (filling more than six threads is unnecessary and wasteful). A “collar” or “rope” of excess material will be forced to the outside of the joint. Do not remove this excess material, as it is a very helpful guide in determining whether the pipe joint compound is set up. When this material becomes a hard cement that cannot be scored, it is set up.",
          "X-Pando Pipe Joint Compound is not an adhesive; rather, it expands as it sets to fill a void. All threads should be clean of any debris or cutting oil (particularly stainless steel threads), as either could cause a gap between the threads and the material, allowing leaks.",
        ],
      },
      {
        pregunta: "Does X-Pando Pipe Joint Compound set up quickly?",
        respuesta: [
          "No, X-Pando Pipe Joint Compound is not a fast setting cement. Under normal temperature and atmospheric conditions, the material will set up in 24 hours.",
        ],
      },
      {
        pregunta: "Can I hasten the set up time?",
        respuesta: [
          "Evaporation of water is the main factor, so making the mixture as thick as possible will hasten set up time. If a faster set up time is desired, X-Pando may be force dried by using heat lamps, infrared bulbs, heat guns, or torches. However, DO NOT HEAT ABOVE 200 °F (93 °C). Higher heat may create steam and possibly fracture the X-Pando.",
          "If using ordinary low city pressures, joints may be used within 30 minutes. If using high pressure, or damaged joints, it is recommended that you wait until the material is entirely set up.",
        ],
      },
      {
        pregunta:
          "How do I use X-Pando Pipe Joint Compound in freezing temperatures?",
        respuesta: [
          "The water content in the mixture of X-Pando creates a problem in winter’s freezing temperatures. The joints must be protected from freezing by using insulation and/or electrical heat tape. You can also use the force drying methods mentioned above.",
        ],
      },
      {
        pregunta:
          "What is the “pot life” or workability time of X-Pando Pipe Joint Compound?",
        respuesta: [
          "Depending on your own personal preference on the water to powder mixing ratio, a batch should be workable for 1½ to 2 hours. The material hardens as the water evaporates; therefore, the thinner or more liquid the solution, the longer the working life of the mix. A thinner mix will not alter the sealing qualities of X-Pando, but it will take longer to set up. Do NOT add water to an existing mix; rather, make up a new batch.",
        ],
      },
      {
        pregunta: "What is the shelf life of X-Pando Pipe Joint Compound?",
        respuesta: [
          "If you follow the directions on our containers, keep the covers of the containers closed tightly and avoid exposing the material to moisture, the compound will last indefinitely.",
        ],
      },
      {
        pregunta:
          "Can I use X-Pando Pipe Joint Compound on pipes made of unanodized aluminum?",
        respuesta: [
          "Yes, you can, but be aware that the X-Pando material will cause the aluminum to discolor. If this is not an issue in your application, the product will perform as usual.",
        ],
      },
      {
        pregunta:
          "Is it possible to take apart a joint that was put together with X-Pando Pipe Joint Compound?",
        respuesta: [
          "Yes, it is possible, but it is more difficult than with other materials. Straining the joint with a wrench will not usually work. The proper procedure is to put a strain on the pipe, with a wrench, while at the same time tapping the fitting all around. Striking the joint will break the expansion bond between the surface and the compound and allow the joint to be turned off.",
        ],
      },
      {
        pregunta: "How strong is X-Pando Pipe Joint Compound?",
        respuesta: [
          "X-Pando is at least ten times stronger than most other pipe joint sealants.",
        ],
      },
      {
        pregunta: "How tight do I have to make the joint?",
        respuesta: [
          "It is not necessary to over tighten the joint: the expansion of the product, once it is set up, will effectively seal the joint.",
        ],
      },
      {
        pregunta: "Is X-Pando Pipe Joint Compound toxic?",
        respuesta: [
          "No, X-Pando does not contain any lead, asbestos, Teflon, or harmful carcinogens.",
        ],
      },
      {
        pregunta:
          "Is X-Pando Pipe Joint Compound safe for use in systems containing drinking water?",
        respuesta: [
          "Yes, X-Pando Pipe Joint Compound, and its sister product X-Pando Special No. 2, are in compliance with the AWWA’s suggested requirements for drinking water and are classified by Underwriters Laboratories Inc.® in accordance with ANSI/NSF Standard 61.",
        ],
      },
      {
        pregunta:
          "Is X-Pando Pipe Joint Compound useful for hard-to-contain gases?",
        respuesta: [
          "Yes. It is used extensively as a sealer for gases, including oxygen, helium, CO2, butane, natural gas, and chlorine. It is particularly useful in the fields of air conditioning and refrigeration for ammonia and freon, as well as the other environmentally safe gases. It has also been tested and approved for systems containing medical oxygen in hospitals.",
        ],
      },
      {
        pregunta: "Is X-Pando Pipe Joint Compound insoluble in liquids?",
        respuesta: [
          "X-Pando is insoluble in water, gasoline, mineral spirits, steam, and most other liquids, with the exception of concentrated acids and bases. X-Pando Products Company does not recommend the use of their products to seal liquids at the pH ranges below 2 and above 12.",
        ],
      },
      {
        pregunta: "Is X-Pando Pipe Joint Compound useful on liquid gases?",
        respuesta: [
          "Yes. After lengthy tests at the Kennedy Space Center, X-Pando was added to NASA’s list of liquid oxygen compatible materials.",
        ],
      },
      {
        pregunta:
          "Is X-Pando Pipe Joint Compound approved by Underwriters Laboratories Inc.®?",
        respuesta: [
          "Yes, it is classified as follows: it meets UL Standards for performance in sealing joints of threaded metal pipe tight against leakage, and it is also classified in accordance with NSF/ANSI Standard 61 for drinking water, compliant with NSF/ANSI 372 (formerly known as Annex G).",
        ],
      },
      {
        pregunta: "How much X-Pando Pipe Joint Compound do I need?",
        respuesta: [
          "It depends on the number of joints and their diameter. Get in touch and we’ll help you work out how much you’ll need.",
        ],
      },
    ],
  },
};
