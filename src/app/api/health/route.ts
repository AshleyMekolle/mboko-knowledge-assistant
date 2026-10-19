import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Lightweight reachability probe for the header status indicator. */
export async function GET() {
  const webhookUrl = process.env.N8N_CHAT_WEBHOOK_URL;
  if (!webhookUrl) return NextResponse.json({ ok: false }, { status: 503 });
  try {
    const res = await fetch(webhookUrl, {
      method: "GET",
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    });
    return NextResponse.json({ ok: res.ok }, { status: res.ok ? 200 : 503 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 503 });
  }
}
