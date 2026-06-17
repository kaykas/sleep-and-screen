import { NextRequest, NextResponse } from "next/server";
import { sendSubscriberNotification } from "@/lib/subscribe-email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubscribePayload = {
  email?: string;
  website?: string;
  source?: string;
};

export async function POST(req: NextRequest) {
  let payload: SubscribePayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const email = (payload.email || "").trim().toLowerCase();
  const honeypot = (payload.website || "").trim();
  const source = (payload.source || "newsletter").trim().slice(0, 80);

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 });
  }

  const ip =
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    null;

  const result = await sendSubscriberNotification({
    email,
    source,
    page: req.headers.get("referer") || undefined,
    userAgent: req.headers.get("user-agent") || undefined,
    ip,
  });

  if (!result.ok) {
    console.error("[subscribe] notification failed", result.reason);
    return NextResponse.json({ error: "Could not subscribe right now" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
