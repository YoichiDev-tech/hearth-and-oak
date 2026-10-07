import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// I keep the contact handler on the server so we can validate input
// and write to Supabase without exposing the service role key.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, source } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in name, email, subject and message." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // If Supabase is not configured yet, I still accept the payload so
    // the site works offline / in demos and the owner can wire it later.
    if (!url || !key) {
      console.log("[contact] Supabase not configured — logging enquiry only:", {
        name,
        email,
        phone,
        subject,
        message,
        source,
      });
      return NextResponse.json({ ok: true, mode: "demo" });
    }

    const supabase = createClient(url, key);

    const { error } = await supabase.from("enquiries").insert({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : null,
      subject: String(subject).trim(),
      message: String(message).trim(),
      source: source || "website",
    });

    if (error) {
      console.error("[contact] Supabase insert failed:", error.message);
      return NextResponse.json(
        { error: "We could not save your message. Please try calling us." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us." },
      { status: 500 }
    );
  }
}
