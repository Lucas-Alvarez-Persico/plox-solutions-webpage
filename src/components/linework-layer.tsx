const GRID_PATTERN_ID = "plox-linework-grid";

/**
 * Overlay de plano técnico que va sobre la foto del hero: grilla de 40px,
 * marco de dibujo y líneas de cota. Extraído del diseño original en Framer.
 *
 * Es decorativo, así que queda fuera del árbol de accesibilidad. Toma el color
 * de `currentColor`, y las líneas de cota se animan en un commit posterior.
 */
export function LineworkLayer({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id={GRID_PATTERN_ID}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.32"
            vectorEffect="non-scaling-stroke"
          />
        </pattern>
      </defs>

      <rect width="1200" height="700" fill={`url(#${GRID_PATTERN_ID})`} />

      {/* Marco de dibujo y divisiones internas */}
      <path
        d="M60 620 L60 180 L1140 180 L1140 620 M180 620 L180 180 M300 620 L300 180 M420 620 L420 180 M540 620 L540 180 M660 620 L660 180 M780 620 L780 180 M900 620 L900 180 M1020 620 L1020 180 M60 400 L1140 400 M60 290 L1140 290 M60 510 L1140 510 M60 620 L1140 620"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />

      {/* Líneas de cota */}
      <g stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke">
        <path d="M60 668 L1140 668" />
        <path d="M60 656 L60 680" />
        <path d="M1140 656 L1140 680" />
        <path d="M32 180 L32 620" />
        <path d="M20 180 L44 180" />
        <path d="M20 620 L44 620" />
      </g>
    </svg>
  );
}
