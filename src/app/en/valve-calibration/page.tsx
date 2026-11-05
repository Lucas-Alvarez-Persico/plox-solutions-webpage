import { ServicePage } from "@/components/sections/service/service-page";
import { calibracionDeValvulas } from "@/content/servicios/calibracion-de-valvulas";
import { metadataDeServicio } from "@/content/servicios/metadata";

export const metadata = metadataDeServicio(calibracionDeValvulas.en, "en");

export default function EnglishCalibracionDeValvulasPage() {
  return <ServicePage servicio={calibracionDeValvulas.en} locale="en" />;
}
