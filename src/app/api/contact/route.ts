import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const MAX_BODY_BYTES = 16_384;
const SUBJECTS = new Set(["table", "catering", "events", "feedback", "other"]);

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: NextRequest) {
  if (!(req.headers.get("content-type") ?? "").toLowerCase().includes("application/json")) {
    return NextResponse.json({ error: "Please send a valid contact form submission." }, { status: 415 });
  }

  let rawBody: string;
  try {
    rawBody = await req.text();
  } catch {
    return NextResponse.json({ error: "Unable to read your message. Please try again." }, { status: 400 });
  }

  if (Buffer.byteLength(rawBody, "utf8") > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Your message is too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Please send valid form details." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Please send valid form details." }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  // A filled honeypot is treated as success but is never stored.
  if (text(payload.website)) return NextResponse.json({ ok: true });

  const name = text(payload.name);
  const email = text(payload.email).toLowerCase();
  const phone = text(payload.phone);
  const subject = text(payload.subject);
  const message = text(payload.message);

  if (name.length < 2 || name.length > 120 || !email || !subject || message.length < 10) {
    return NextResponse.json(
      { error: "Please check your name, email, reason for contact and message." },
      { status: 400 }
    );
  }

  if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    phone.length > 40 ||
    (phone.length > 0 && phone.length < 7) ||
    !SUBJECTS.has(subject) ||
    message.length > 5000
  ) {
    return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) {
    console.error("[contact] Server-side Supabase configuration is missing.");
    return NextResponse.json(
      { error: "We cannot receive messages right now. Please call us instead." },
      { status: 503 }
    );
  }

  try {
    const supabase = createClient(url, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { error } = await supabase.from("enquiries").insert({
      name,
      email,
      phone: phone || null,
      subject,
      message,
      source: "website-contact",
    });

    if (error) {
      console.error("[contact] Supabase insert failed:", error.message);
      return NextResponse.json(
        { error: "We could not save your message. Please try calling us." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Unexpected request failure:", error instanceof Error ? error.message : "unknown error");
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us." },
      { status: 500 }
    );
  }
}
