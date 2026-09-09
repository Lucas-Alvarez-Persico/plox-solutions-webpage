import Image from "next/image";
import Link from "next/link";

import { images } from "@/content/images";
import { companyName, footerColumns } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-x relative overflow-hidden bg-bone pt-16 pb-8 tablet:pt-24 tablet:pb-10 desktop:pt-30 desktop:pb-12">
      <Image
        src={images.textura2.src}
        alt={images.textura2.alt}
        fill
        className="pointer-events-none object-cover opacity-10"
        sizes="100vw"
      />

      <div className="container-site relative flex flex-col gap-16 desktop:gap-20">
        <nav data-reveal aria-label="Pie de página">
          <div className="grid grid-cols-2 gap-8 desktop:grid-cols-4 desktop:gap-10">
            {footerColumns.map((column) => (
              <div key={column.heading} className="flex flex-col gap-4">
                <p className="type-eyebrow text-gray-deep">{column.heading}</p>
                <ul className="flex flex-col gap-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="type-body-m text-ink transition-colors hover:text-orange"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        <Image
          src={images.logo.src}
          alt=""
          className="h-auto w-full"
          sizes="(min-width: 1200px) 1280px, 100vw"
        />

        <p className="type-eyebrow text-gray-deep">
          © {year} {companyName}
        </p>
      </div>
    </footer>
  );
}
