import Link from "next/link";

/**
 * Botón principal del sitio: 48px de alto, en naranja de marca y con la
 * esquina superior derecha recortada en diagonal. Se usa en el nav, en el hero
 * y en las llamadas a la acción.
 */
export function ButtonPrimary({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`corner-cut type-label inline-flex h-12 items-center justify-center bg-orange px-6 text-bone transition-colors hover:bg-navy ${className}`}
    >
      {children}
    </Link>
  );
}
