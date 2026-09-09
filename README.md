# Plox Solutions — Sitio web

Sitio institucional de Plox Solutions, construido con Next.js. Replica en código el diseño
original armado en Framer (`https://ploxsolutions.framer.website`).

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

El sitio queda en `http://localhost:3000`.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | Chequeo de ESLint |

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
