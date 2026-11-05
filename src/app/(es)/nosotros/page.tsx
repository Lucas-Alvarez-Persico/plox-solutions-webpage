import type { Metadata } from "next";

import { HomePage } from "@/components/sections/home-page";

// Muestra la home y baja hasta la sección. El canonical lo hereda del layout y
// apunta a la home, así los buscadores no la toman como contenido duplicado.
export const metadata: Metadata = { title: "Nosotros" };

export default function NosotrosPage() {
  return <HomePage locale="es" section="record" />;
}
