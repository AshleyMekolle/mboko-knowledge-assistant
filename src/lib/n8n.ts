import type { Source } from "./types";

/** Public n8n Chat Trigger webhook. Override with the N8N_CHAT_WEBHOOK_URL environment variable. */
const DEFAULT_WEBHOOK_URL =
  "https://ashlet-mekolle.app.n8n.cloud/webhook/24d8d286-5298-424f-a516-9cbfc82f5653/chat";

export function getWebhookUrl(): string {
  return process.env.N8N_CHAT_WEBHOOK_URL?.trim() || DEFAULT_WEBHOOK_URL;
}

/**
 * n8n Chat Trigger (hosted chat) protocol, verified against the live webhook:
 *   POST <webhook>/chat   { action: "sendMessage", sessionId, chatInput }
 *   -> 200 { "text": "<answer>" }
 * Depending on workflow configuration the answer may surface as `text`, `output`
 * or `message`, so each is accepted.
 */
export function buildN8nPayload(sessionId: string, message: string) {
  return { action: "sendMessage", sessionId, chatInput: message };
}

export interface ParsedN8nReply {
  answer: string;
  sources?: Source[];
}

const ANSWER_KEYS = ["text", "output", "message", "answer", "response"] as const;

function pickAnswer(value: unknown): string | null {
  if (typeof value === "string") return value.trim() || null;
  if (Array.isArray(value)) return pickAnswer(value[0]);
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    for (const key of ANSWER_KEYS) {
      const candidate = record[key];
      if (typeof candidate === "string" && candidate.trim()) return candidate.trim();
    }
  }
  return null;
}

/** Only passes through sources the workflow actually returned; never invents any. */
function pickSources(value: unknown): Source[] | undefined {
  const record = Array.isArray(value) ? value[0] : value;
  if (!record || typeof record !== "object") return undefined;
  const raw = (record as Record<string, unknown>).sources;
  if (!Array.isArray(raw)) return undefined;
  const sources = raw.flatMap((item): Source[] => {
    if (typeof item === "string" && item.trim()) return [{ title: item.trim() }];
    if (item && typeof item === "object") {
      const { title, name, url } = item as Record<string, unknown>;
      const label = typeof title === "string" ? title : typeof name === "string" ? name : null;
      if (label) return [{ title: label, url: typeof url === "string" ? url : undefined }];
    }
    return [];
  });
  return sources.length ? sources : undefined;
}

export function parseN8nReply(body: unknown): ParsedN8nReply | null {
  const answer = pickAnswer(body);
  if (!answer) return null;
  return { answer, sources: pickSources(body) };
}
