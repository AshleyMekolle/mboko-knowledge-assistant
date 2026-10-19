import { NextResponse } from "next/server";
import { buildN8nPayload, getWebhookUrl, parseN8nReply } from "@/lib/n8n";
import type { ApiError, ChatResponse } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const MAX_MESSAGE_LENGTH = 4000;
const UPSTREAM_TIMEOUT_MS = 55_000;

function fail(error: string, status: number) {
  return NextResponse.json<ApiError>({ error }, { status });
}

/**
 * Server-side proxy to the n8n Chat Trigger webhook. Keeps the webhook URL out of the
 * browser bundle and normalises the response shape for the UI.
 */
export async function POST(request: Request) {
  const webhookUrl = getWebhookUrl();

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return fail("Invalid request body.", 400);
  }

  const { sessionId, message } = (body ?? {}) as Record<string, unknown>;
  if (typeof sessionId !== "string" || !/^[\w-]{8,100}$/.test(sessionId)) {
    return fail("A valid sessionId is required.", 400);
  }
  if (typeof message !== "string" || !message.trim()) return fail("Message is required.", 400);
  if (message.length > MAX_MESSAGE_LENGTH) {
    return fail(`Messages are limited to ${MAX_MESSAGE_LENGTH} characters.`, 400);
  }

  let upstream: Response;
  try {
    upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildN8nPayload(sessionId, message.trim())),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
      cache: "no-store",
    });
  } catch (err) {
    const timedOut = err instanceof DOMException && err.name === "TimeoutError";
    return fail(
      timedOut
        ? "The assistant took too long to respond. Please try again."
        : "Couldn't reach the knowledge service. Check your connection and try again.",
      timedOut ? 504 : 502,
    );
  }

  const raw = await upstream.text();
  if (!upstream.ok) {
    console.error(`n8n responded ${upstream.status}: ${raw.slice(0, 300)}`);
    return fail("The knowledge service returned an error. Please try again shortly.", 502);
  }

  let parsed: unknown = raw;
  try {
    parsed = JSON.parse(raw);
  } catch {
    // Non-JSON body: treat the raw text as the answer if it is non-empty.
  }

  const reply = parseN8nReply(parsed);
  if (!reply) {
    console.error(`Unexpected n8n response shape: ${raw.slice(0, 300)}`);
    return fail("The assistant returned an empty or unexpected response. Please try again.", 502);
  }

  return NextResponse.json<ChatResponse>(reply);
}
