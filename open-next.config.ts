import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * El sitio no usa revalidación ni ISR, así que no hace falta caché incremental
 * (ni bucket R2, ni cola, ni tag cache).
 */
export default defineCloudflareConfig();
