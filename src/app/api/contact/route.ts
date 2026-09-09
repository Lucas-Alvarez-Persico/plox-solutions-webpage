import { NextResponse } from "next/server";

/**
 * Destino de las consultas del formulario. Se envía el mismo payload por POST,
 * así que sirve cualquier servicio que reciba un webhook (Formspree, Zapier,
 * Make, n8n, un endpoint propio). Mientras no esté definida, el endpoint
 * responde 501 y deja la consulta en el log del servidor.
 */
const WEBHOOK_URL = process.env.CONTACT_WEBHOOK_URL;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Payload {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  details?: string;
  /** Honeypot: lo completan los bots, nunca una persona. */
  website?: string;
}

export async function POST(request: Request) {
  let payload: Payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Al bot le respondemos que salió bien para que no reintente.
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";

  if (!name || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const enquiry = {
    name,
    email,
    phone: payload.phone?.trim() ?? "",
    location: payload.location?.trim() ?? "",
    details: payload.details?.trim() ?? "",
    receivedAt: new Date().toISOString(),
  };

  if (!WEBHOOK_URL) {
    console.warn(
      "[contacto] Falta CONTACT_WEBHOOK_URL: la consulta no se envió a ningún lado.",
      enquiry,
    );
    return NextResponse.json({ error: "not_configured" }, { status: 501 });
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enquiry),
    });

    if (!response.ok) {
      console.error(
        `[contacto] El webhook respondió ${response.status}.`,
        enquiry,
      );
      return NextResponse.json({ error: "upstream_error" }, { status: 502 });
    }
  } catch (error) {
    console.error("[contacto] No se pudo alcanzar el webhook.", error, enquiry);
    return NextResponse.json({ error: "upstream_error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
