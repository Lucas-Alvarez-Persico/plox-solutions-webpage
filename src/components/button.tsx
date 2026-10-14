import Link from "next/link";

/**
 * Botón principal del sitio: 48px de alto, en el verde de marca y con la
 * esquina superior derecha recortada en diagonal. Se usa en el hero, en el
 * menú mobile y en las llamadas a la acción.
 *
 * Para descargas y enlaces a otros sitios renderiza un `<a>` común: `Link` es
 * para navegar dentro del sitio.
 *
 * Variantes de Framer: verde (la principal), petróleo (la de WhatsApp) y
 * fantasma, sin relleno, para acciones secundarias sobre fondo claro.
 */
const VARIANTES = {
  verde: "bg-green text-bone hover:bg-teal",
  petroleo: "bg-teal text-bone hover:bg-green",
  fantasma: "text-ink hover:bg-bone-dim",
} as const;

export function ButtonPrimary({
  href,
  children,
  className = "",
  onClick,
  download,
  external = false,
  variante = "verde",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  /** Baja el archivo en vez de abrirlo. Si es texto, es el nombre con que se guarda. */
  download?: boolean | string;
  /** Enlace a otro sitio: se abre en una pestaña nueva. */
  external?: boolean;
  variante?: keyof typeof VARIANTES;
}) {
  const clases = `corner-cut type-label inline-flex h-12 items-center justify-center px-6 transition-colors ${VARIANTES[variante]} ${className}`;

  if (download || external) {
    return (
      <a
        href={href}
        onClick={onClick}
        download={download || undefined}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={clases}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={clases}>
      {children}
    </Link>
  );
}
