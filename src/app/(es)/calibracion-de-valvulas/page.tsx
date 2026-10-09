import { ServicePage } from "@/components/sections/service/service-page";
import { calibracionDeValvulas } from "@/content/servicios/calibracion-de-valvulas";
import { metadataDeServicio } from "@/content/servicios/metadata";

export const metadata = metadataDeServicio(calibracionDeValvulas.es, "es");

export default function CalibracionDeValvulasPage() {
  return <ServicePage servicio={calibracionDeValvulas.es} locale="es" />;
}
