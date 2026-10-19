"use client";

import { ArrowDown } from "lucide-react";
import { useChat } from "@/hooks/useChat";
import { useStickToBottom } from "@/hooks/useStickToBottom";
import { Composer } from "./Composer";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { AssistantMessage, UserMessage } from "./Message";
import { ErrorNotice, ThinkingIndicator } from "./StatusRows";
import { Welcome } from "./Welcome";

export function ChatApp() {
  const { messages, status, error, connection, send, retry, reset } = useChat();
  const { ref, onScroll, atBottom, scrollToBottom } = useStickToBottom<HTMLDivElement>([messages, status]);
  const started = messages.length > 0;
  const loading = status === "loading";

  function handleSend(text: string) {
    send(text);
    scrollToBottom(true);
  }

  return (
    <div className="flex h-dvh flex-col bg-paper">
      <Header connection={connection} canReset={started || loading} onNewChat={reset} />

      <main ref={ref} onScroll={onScroll} className="relative flex min-h-0 flex-1 flex-col overflow-y-auto">
        {started ? (
          <div className="mx-auto w-full max-w-3xl flex-1 space-y-8 px-4 py-8 sm:px-6 sm:py-10">
            <h2 className="sr-only">Conversation</h2>
            {messages.map((m) =>
              m.role === "user" ? (
                <UserMessage key={m.id} message={m} />
              ) : (
                <AssistantMessage key={m.id} message={m} />
              ),
            )}
            {loading && <ThinkingIndicator />}
            {status === "error" && error && <ErrorNotice message={error} onRetry={retry} />}
          </div>
        ) : (
          <Welcome onSend={handleSend} loading={loading} />
        )}
      </main>

      {started && (
        <div className="relative shrink-0 border-t border-line bg-paper px-4 pb-2 pt-4 sm:px-6">
          {!atBottom && (
            <button
              type="button"
              onClick={() => scrollToBottom(true)}
              className="absolute -top-12 left-1/2 inline-flex h-9 -translate-x-1/2 items-center gap-1.5 rounded-full border border-line-strong bg-surface px-3.5 text-xs font-medium text-ink-soft shadow-card transition-colors hover:text-forest"
            >
              <ArrowDown aria-hidden className="size-3.5" />
              Latest
            </button>
          )}
          <div className="mx-auto w-full max-w-3xl">
            <Composer
              onSend={handleSend}
              loading={loading}
              autoFocus
              placeholder="Ask a follow-up question…"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
