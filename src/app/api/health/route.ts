import { NextResponse } from "next/server";
import { getWebhookUrl } from "@/lib/n8n";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Lightweight reachability probe for the header status indicator. */
export async function GET() {
  const webhookUrl = getWebhookUrl();
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
