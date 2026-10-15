<?php

/**
 * Recibe las consultas del formulario de contacto y las manda por mail con la
 * función mail() del hosting.
 *
 * Los destinatarios se leen de `plox-contacto.php`, que va FUERA de la carpeta
 * pública (al lado de `public_html`), así no se pisa en cada deploy. Hay un
 * ejemplo en `plox-contacto.example.php`, en la raíz del repo. Mientras no
 * exista, el endpoint responde 501 y el formulario avisa que el envío no está
 * configurado.
 *
 * Responde con los mismos códigos que espera el formulario: 200 si salió,
 * 400 si faltan datos, 501 sin configurar y 502 si el mail no se pudo enviar.
 */

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function responder(int $status, array $cuerpo): void
{
    http_response_code($status);
    echo json_encode($cuerpo);
    exit;
}

/** Texto de una línea: sin saltos (evita inyectar cabeceras) y con tope. */
function linea($valor, int $max = 200): string
{
    $texto = is_string($valor) ? $valor : '';
    $texto = preg_replace('/[\r\n\t]+/', ' ', $texto);
    return mb_substr(trim($texto), 0, $max);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    responder(405, ['error' => 'method_not_allowed']);
}

$payload = json_decode(file_get_contents('php://input'), true);

if (!is_array($payload)) {
    responder(400, ['error' => 'invalid_json']);
}

// Honeypot: al bot le respondemos que salió bien para que no reintente.
if (!empty($payload['website'])) {
    responder(200, ['ok' => true]);
}

$consulta = [
    'name' => linea($payload['name'] ?? ''),
    'email' => linea($payload['email'] ?? ''),
    'phone' => linea($payload['phone'] ?? ''),
    'location' => linea($payload['location'] ?? ''),
    'details' => mb_substr(trim(is_string($payload['details'] ?? null) ? $payload['details'] : ''), 0, 5000),
    'locale' => ($payload['locale'] ?? '') === 'en' ? 'en' : 'es',
];

if ($consulta['name'] === '' || !filter_var($consulta['email'], FILTER_VALIDATE_EMAIL)) {
    responder(400, ['error' => 'invalid_fields']);
}

$config = null;
foreach ([dirname(__DIR__, 2), dirname(__DIR__)] as $carpeta) {
    if (is_file("$carpeta/plox-contacto.php")) {
        $config = require "$carpeta/plox-contacto.php";
        break;
    }
}

if (!is_array($config) || empty($config['to']) || empty($config['from'])) {
    error_log('[contacto] Falta plox-contacto.php: la consulta no se envió a ningún lado.');
    responder(501, ['error' => 'not_configured']);
}

$idioma = $consulta['locale'] === 'en' ? 'inglés' : 'español';
$asunto = 'Nueva consulta web: ' . $consulta['name'];

$cuerpo = implode("\n", [
    'Llegó una consulta desde el formulario del sitio.',
    '',
    'Nombre: ' . $consulta['name'],
    'Email: ' . $consulta['email'],
    'Teléfono: ' . ($consulta['phone'] ?: '—'),
    'Ubicación: ' . ($consulta['location'] ?: '—'),
    'Idioma de la página: ' . $idioma,
    '',
    'Detalles:',
    $consulta['details'] ?: '—',
    '',
    '—',
    'Recibida el ' . date('d/m/Y H:i') . '. Respondé este mail para contestarle directamente.',
]);

$cabeceras = implode("\r\n", [
    'From: Sitio Plox Solutions <' . $config['from'] . '>',
    'Reply-To: ' . $consulta['email'],
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

$enviado = mail(
    $config['to'],
    '=?UTF-8?B?' . base64_encode($asunto) . '?=',
    $cuerpo,
    $cabeceras,
    '-f' . $config['from']
);

if (!$enviado) {
    error_log('[contacto] mail() no pudo enviar la consulta de ' . $consulta['email']);
    responder(502, ['error' => 'upstream_error']);
}

responder(200, ['ok' => true]);
