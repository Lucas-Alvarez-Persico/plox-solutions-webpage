import { SiteShell, siteMetadata } from "@/components/site-shell";
import "../globals.css";

/** Root layout del sitio en inglés. */
export const metadata = siteMetadata("en");

export default function EnglishLayout({ children }: LayoutProps<"/en">) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
