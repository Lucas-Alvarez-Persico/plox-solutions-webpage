import { PreguntasPage } from "@/components/sections/service/preguntas-page";
import { metadataDePreguntas } from "@/content/servicios/metadata";
import { rutaPreguntasXPando, xPando } from "@/content/servicios/x-pando";
import { preguntasXPando } from "@/content/servicios/x-pando-preguntas";

export const metadata = metadataDePreguntas(
  xPando.en,
  preguntasXPando.en,
  rutaPreguntasXPando,
  "en",
);

export default function EnglishPreguntasXPandoPage() {
  return (
    <PreguntasPage
      servicio={xPando.en}
      contenido={preguntasXPando.en}
      locale="en"
    />
  );
}
