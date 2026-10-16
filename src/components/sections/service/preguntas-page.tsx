import { EnquiryCta } from "@/components/sections/service/enquiry-cta";
import { Preguntas } from "@/components/sections/service/preguntas";
import { Project } from "@/components/sections/service/project";
import type {
  PreguntasFrecuentes,
  Servicio,
} from "@/content/servicios/tipos";
import type { Locale } from "@/lib/i18n";

/**
 * Página de preguntas frecuentes de un servicio, como la arma Framer: la
 * portada del servicio con su propio título, el acordeón y el mismo cierre.
 */
export function PreguntasPage({
  servicio,
  contenido,
  locale,
}: {
  servicio: Servicio;
  contenido: PreguntasFrecuentes;
  locale: Locale;
}) {
  return (
    <>
      <Project
        servicio={servicio}
        encabezado={{
          titulo: (
            <>
              {contenido.titulo}
              <br />
              <span className="text-green">{servicio.titulo}</span>
            </>
          ),
          resumen: contenido.resumen,
        }}
      />
      <Preguntas preguntas={contenido.preguntas} />
      <EnquiryCta servicio={servicio} locale={locale} />
    </>
  );
}
