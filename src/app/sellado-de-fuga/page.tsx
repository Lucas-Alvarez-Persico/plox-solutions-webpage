import { Project } from "@/components/sections/service/project";
import { Story } from "@/components/sections/service/story";
import { selladoDeFuga } from "@/content/servicios/sellado-de-fuga";

export default function SelladoDeFugaPage() {
  return (
    <>
      <Project servicio={selladoDeFuga} />
      <Story servicio={selladoDeFuga} />
    </>
  );
}
