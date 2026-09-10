import { ServicePage } from "@/components/sections/service/service-page";
import { metadataDeServicio } from "@/content/servicios/metadata";
import { xPando } from "@/content/servicios/x-pando";

export const metadata = metadataDeServicio(xPando);

export default function XPandoPage() {
  return <ServicePage servicio={xPando} />;
}
