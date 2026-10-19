"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type {
  ApiError,
  ChatMessage,
  ChatRequest,
  ChatResponse,
  ChatStatus,
  ConnectionState,
} from "@/lib/types";

const CLIENT_TIMEOUT_MS = 70_000;

const newId = () => crypto.randomUUID();

async function requestAnswer(body: ChatRequest, signal: AbortSignal): Promise<ChatResponse> {
  let res: Response;
  try {
    res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal,
    });
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") throw err;
    throw new Error("You appear to be offline. Check your connection and try again.");
  }

  let data: unknown = null;
  try {
    data = await res.json();
  } catch {
    // fall through to the generic error below
  }

  if (!res.ok) {
    const message = (data as ApiError | null)?.error;
    throw new Error(message ?? "Something went wrong while contacting the assistant.");
  }
  const reply = data as ChatResponse | null;
  if (!reply || typeof reply.answer !== "string" || !reply.answer) {
    throw new Error("The assistant returned an unexpected response.");
  }
  return reply;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [status, setStatus] = useState<ChatStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [connection, setConnection] = useState<ConnectionState>("checking");

  // Conversation memory lives in n8n, keyed by this id. A new conversation gets a new id.
  const sessionId = useRef<string>("");
  const controller = useRef<AbortController | null>(null);

  useEffect(() => {
    sessionId.current = newId();
    const probe = new AbortController();
    fetch("/api/health", { signal: probe.signal })
      .then((res) => setConnection(res.ok ? "online" : "offline"))
      .catch((err) => {
        if (!(err instanceof DOMException && err.name === "AbortError")) setConnection("offline");
      });
    return () => probe.abort();
  }, []);

  const ask = useCallback(async (question: string) => {
    controller.current?.abort();
    const abort = new AbortController();
    controller.current = abort;
    const timeout = setTimeout(() => abort.abort(), CLIENT_TIMEOUT_MS);

    setStatus("loading");
    setError(null);
    try {
      const reply = await requestAnswer({ sessionId: sessionId.current, message: question }, abort.signal);
      setMessages((prev) => [
        ...prev,
        { id: newId(), role: "assistant", content: reply.answer, sources: reply.sources },
      ]);
      setStatus("idle");
      setConnection("online");
    } catch (err) {
      if (controller.current !== abort) return; // superseded by a new conversation
      const timedOut = err instanceof DOMException && err.name === "AbortError";
      setError(
        timedOut
          ? "The assistant took too long to respond. Please try again."
          : err instanceof Error
            ? err.message
            : "Something went wrong.",
      );
      setStatus("error");
      setConnection("offline");
    } finally {
      clearTimeout(timeout);
    }
  }, []);

  const send = useCallback(
    (text: string) => {
      const question = text.trim();
      if (!question || status === "loading") return;
      setMessages((prev) => [...prev, { id: newId(), role: "user", content: question }]);
      void ask(question);
    },
    [ask, status],
  );

  /** Re-send the last user question after a failure, without duplicating it in the transcript. */
  const retry = useCallback(() => {
    if (status === "loading") return;
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (lastUser) void ask(lastUser.content);
  }, [ask, messages, status]);

  const reset = useCallback(() => {
    controller.current?.abort();
    controller.current = null;
    sessionId.current = newId();
    setMessages([]);
    setError(null);
    setStatus("idle");
  }, []);

  return { messages, status, error, connection, send, retry, reset };
}
