import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // El sitio se publica como HTML estático en el hosting de DonWeb (Apache):
  // `next build` deja todo en `out/`, listo para subir a `public_html`.
  output: "export",

  // Cada página sale como `ruta/index.html`, que Apache sirve sin reglas
  // extra; `/x-pando` redirige solo a `/x-pando/`.
  trailingSlash: true,

  // Sin servidor no hay optimización de imágenes al vuelo: se sirven tal cual.
  images: { unoptimized: true },

  experimental: {
    // Cada idioma tiene su propio root layout, así que no hay uno común desde
    // el cual armar el 404: lo resuelve `app/global-not-found.tsx`.
    globalNotFound: true,
  },
};

export default nextConfig;
