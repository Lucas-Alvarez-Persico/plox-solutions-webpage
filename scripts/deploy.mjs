/**
 * Sube el export estático (`out/`) al hosting de DonWeb por FTP.
 *
 * Los datos de acceso se leen de `.env.deploy` (no se commitea; ver
 * `.env.deploy.example`). Solo agrega y reemplaza archivos: no borra nada en
 * el servidor, así que `plox-contacto.php` y cualquier otra cosa que ya esté
 * allá quedan intactos.
 *
 * Si existe un `plox-contacto.php` local, lo sube también, a la carpeta que
 * contiene a la pública, que es donde lo busca `public/api/contact.php`.
 */
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { Client } from "basic-ftp";

const OUT_DIR = "out";
const CONTACT_CONFIG = "plox-contacto.php";

// Las variables ya definidas en el entorno tienen prioridad sobre el archivo.
if (existsSync(".env.deploy")) process.loadEnvFile(".env.deploy");

const { FTP_HOST, FTP_USER, FTP_PASSWORD } = process.env;
const remoteDir = process.env.FTP_DIR ?? "public_html";
const secure = process.env.FTP_SECURE !== "false";
const port = Number(process.env.FTP_PORT) || 21;

if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD) {
  console.error(
    "Faltan los datos de FTP: copiá .env.deploy.example como .env.deploy y completalo con lo que muestra el panel de DonWeb.",
  );
  process.exit(1);
}

if (!existsSync(path.join(OUT_DIR, "index.html"))) {
  console.error("No hay export en out/: corré `npm run build` primero.");
  process.exit(1);
}

const archivos = readdirSync(OUT_DIR, { recursive: true, withFileTypes: true })
  .filter((entrada) => entrada.isFile()).length;

const client = new Client();
// El progreso se reporta cada medio segundo por archivo: se anota cada uno
// una sola vez, cuando empieza.
let enCurso = null;
client.trackProgress((info) => {
  if (info.type === "upload" && info.name !== enCurso) {
    enCurso = info.name;
    console.log(`  ${info.name}`);
  }
});

try {
  console.log(`Conectando a ${FTP_HOST}${secure ? " (FTPS)" : ""}…`);
  await client.access({
    host: FTP_HOST,
    port,
    user: FTP_USER,
    password: FTP_PASSWORD,
    secure,
  });

  console.log(`Subiendo ${OUT_DIR}/ a ${remoteDir || "la carpeta raíz del FTP"}…`);
  await client.uploadFromDir(OUT_DIR, remoteDir || undefined);

  if (existsSync(CONTACT_CONFIG)) {
    if (!remoteDir || remoteDir === ".") {
      console.warn(
        `\nNo se subió ${CONTACT_CONFIG}: la carpeta pública es la raíz del FTP y no hay una carpeta "de afuera". Subilo a mano junto a public/api/contact.php o pedile a DonWeb acceso a la carpeta superior.`,
      );
    } else {
      const destino = path.posix.join(path.posix.dirname(remoteDir), CONTACT_CONFIG);
      console.log(`Subiendo ${CONTACT_CONFIG} a ${destino}…`);
      await client.uploadFrom(CONTACT_CONFIG, destino);
    }
  }

  console.log(`\nListo: ${archivos} archivos del sitio subidos.`);
} catch (error) {
  console.error(`\nEl deploy falló: ${error.message}`);
  if (secure && /certificate|TLS|SSL/i.test(error.message)) {
    console.error(
      "Si el problema es el certificado, probá con el nombre de servidor que muestra el panel en FTP_HOST, o como último recurso FTP_SECURE=false.",
    );
  }
  process.exitCode = 1;
} finally {
  client.close();
}
