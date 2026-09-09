import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SiteRail } from "@/components/site-rail";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plox Solutions",
  description:
    "Soluciones especializadas para intervenir, mantener y optimizar instalaciones industriales, reduciendo interrupciones y asegurando la continuidad de las operaciones.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SiteRail />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
