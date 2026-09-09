# Plox Solutions — Sitio web

Sitio institucional de Plox Solutions, construido con Next.js.

## Stack

- [Next.js 16](https://nextjs.org) — App Router, React Server Components
- TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- ESLint

## Desarrollo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | Chequeo de ESLint |

## Variables de entorno

Copiá `.env.example` a `.env.local` y completá los valores.

| Variable | Para qué sirve |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio, para metadata absoluta, sitemap y robots. |
| `CONTACT_WEBHOOK_URL` | Destino de las consultas del formulario de contacto. Sin ella, el formulario avisa que el envío no está configurado. |

## Estructura

```
src/
  app/          Rutas y layouts (App Router)
  components/   Componentes de UI
  content/      Textos y datos del sitio (contenido hardcodeado)
  lib/          Utilidades
public/
  images/       Imágenes y assets estáticos
```
