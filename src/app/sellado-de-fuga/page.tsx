import { ServicePage } from "@/components/sections/service/service-page";
import { metadataDeServicio } from "@/content/servicios/metadata";
import { selladoDeFuga } from "@/content/servicios/sellado-de-fuga";

export const metadata = metadataDeServicio(selladoDeFuga);

export default function SelladoDeFugaPage() {
  return <ServicePage servicio={selladoDeFuga} />;
}
