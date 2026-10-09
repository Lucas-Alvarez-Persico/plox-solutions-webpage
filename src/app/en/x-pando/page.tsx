import { ServicePage } from "@/components/sections/service/service-page";
import { metadataDeServicio } from "@/content/servicios/metadata";
import { xPando } from "@/content/servicios/x-pando";

export const metadata = metadataDeServicio(xPando.en, "en");

export default function EnglishXPandoPage() {
  return <ServicePage servicio={xPando.en} locale="en" />;
}
