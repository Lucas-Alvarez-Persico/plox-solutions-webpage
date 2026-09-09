import Link from "next/link";

/**
 * Botón principal del sitio: 48px de alto, sin border-radius y en naranja de
 * marca. Se usa en el nav, en el hero y en las llamadas a la acción.
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
      className={`type-label inline-flex h-12 items-center justify-center bg-orange px-6 text-bone transition-colors hover:bg-orange-hot ${className}`}
    >
      {children}
    </Link>
  );
}
