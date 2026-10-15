<?php

/**
 * Configuración del formulario de contacto en el hosting.
 *
 * Copiá este archivo como `plox-contacto.php` en la carpeta que contiene a
 * `public_html` (no adentro), así no queda expuesto ni se pisa en cada deploy.
 */
return [
    // Adónde llegan las consultas. Para varios destinatarios, separalos con coma.
    'to' => 'contacto@ejemplo.com',

    // Remitente de los mails. Tiene que ser una casilla del dominio del sitio
    // creada en el panel de DonWeb; si no, el hosting puede rechazar el envío o
    // terminar en spam. Las respuestas van igual a quien completó el formulario.
    'from' => 'web@ejemplo.com',
];
