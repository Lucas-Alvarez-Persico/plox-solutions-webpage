import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  experimental: {
    // Cada idioma tiene su propio root layout, así que no hay uno común desde
    // el cual armar el 404: lo resuelve `app/global-not-found.tsx`.
    globalNotFound: true,
  },
};

export default nextConfig;

// Da acceso a los bindings de Cloudflare durante `next dev`.
initOpenNextCloudflareForDev();
