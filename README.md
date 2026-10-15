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
| `npm run build` | Genera el sitio estático en `out/` |
| `npm run deploy` | Build + subida de `out/` a DonWeb por FTP |
| `npm run lint` | Chequeo de ESLint |

## Variables de entorno

| Variable | Dónde | Para qué sirve |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `.env.production` (commiteado) | URL pública del sitio, para metadata absoluta, sitemap y robots. Queda fija en el build. En desarrollo se asume `http://localhost:3000`. |
| `FTP_*` | `.env.deploy` (no se commitea) | Acceso FTP para `npm run deploy`. Ver `.env.deploy.example`. |

## Deploy en DonWeb

El sitio se exporta como HTML estático (`output: "export"`) y se sirve desde el hosting compartido de DonWeb (Apache + PHP) en `ploxsolutions.com.ar`. No hace falta Node.js en el servidor. El dominio ya usa los DNS de DonWeb (`ns3/ns4.hostmar.com`), así que no hay que tocar DNS.

### Primera vez

1. En el panel de DonWeb, sección FTP, anotá servidor, usuario y contraseña (o creá una cuenta FTP). Copiá `.env.deploy.example` como `.env.deploy` y completalo.
2. Creá en el panel una casilla del dominio para enviar las consultas, por ejemplo `web@ploxsolutions.com.ar`.
3. Copiá `plox-contacto.example.php` como `plox-contacto.php` (en la raíz del repo; no se commitea) y completá destinatario y remitente. El deploy lo sube a la carpeta que contiene a `public_html`, fuera del alcance público.
4. Activá el certificado SSL gratuito del dominio en el panel. Cuando `https://ploxsolutions.com.ar` cargue bien, descomentá en `public/.htaccess` el bloque que fuerza HTTPS y volvé a deployar.

### Cada deploy

```bash
npm run deploy
```

Genera el build y sube `out/` a `public_html`, reemplazando los archivos. No borra nada en el servidor.

Sin FTP, también se puede subir **el contenido** de `out/` a `public_html` desde el Administrador de archivos del panel (incluido `.htaccess`, que es un archivo oculto) y `plox-contacto.php` a la carpeta de arriba.

### Formulario de contacto

El formulario envía a `/api/contact.php` (`public/api/contact.php`), que manda la consulta por mail con la función `mail()` del hosting y deja como Reply-To el mail de quien consultó. Sin `plox-contacto.php`, responde 501 y el formulario avisa que el envío no está configurado.

Con `npm run dev` el PHP no corre, así que el formulario responde con error: para probarlo hay que subirlo al hosting.

## Estructura

```
src/
  app/          Rutas y layouts (App Router): `(es)/` español, `en/` inglés
  components/   Componentes de UI
  content/      Textos y datos del sitio (contenido hardcodeado)
  lib/          Utilidades
public/
  api/          contact.php, el envío del formulario en el hosting
  descargas/    PDFs descargables
  videos/       Videos de las páginas de servicio
  .htaccess     Configuración de Apache para DonWeb
```

## Idiomas

El sitio está en español (sin prefijo: `/`, `/x-pando`) y en inglés (bajo `/en`: `/en`, `/en/x-pando`). Las rutas son las mismas en los dos idiomas.

- Los textos de cada idioma viven juntos en `src/content/`: cada archivo exporta un objeto `{ es, en }`, así es fácil mantenerlos a la par.
- Cada idioma tiene su propio root layout (`app/(es)/layout.tsx` y `app/en/layout.tsx`) para que el `<html lang>` sea el correcto. Ambos usan `SiteShell`.
- Para agregar una página, creá la ruta en las dos carpetas.
