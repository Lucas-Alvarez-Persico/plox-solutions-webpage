import { PreguntasPage } from "@/components/sections/service/preguntas-page";
import { metadataDePreguntas } from "@/content/servicios/metadata";
import { rutaPreguntasXPando, xPando } from "@/content/servicios/x-pando";
import { preguntasXPando } from "@/content/servicios/x-pando-preguntas";

export const metadata = metadataDePreguntas(
  xPando.es,
  preguntasXPando.es,
  rutaPreguntasXPando,
  "es",
);

export default function PreguntasXPandoPage() {
  return (
    <PreguntasPage
      servicio={xPando.es}
      contenido={preguntasXPando.es}
      locale="es"
    />
  );
}
