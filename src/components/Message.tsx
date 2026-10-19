"use client";

import { Check, Copy, FileText } from "lucide-react";
import { useState } from "react";
import type { ChatMessage, Source } from "@/lib/types";
import { BrandMark } from "./BrandMark";
import { Markdown } from "./Markdown";

export function UserMessage({ message }: { message: ChatMessage }) {
  return (
    <div className="animate-rise flex justify-end">
      <div className="max-w-[88%] whitespace-pre-wrap break-words rounded-2xl rounded-br-md bg-paper-deep px-4 py-3 text-[15px] leading-relaxed text-ink ring-1 ring-line sm:max-w-[75%]">
        <span className="sr-only">You: </span>
        {message.content}
      </div>
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable (insecure context or denied); stay silent rather than lie.
    }
  }
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-8 items-center gap-1.5 rounded-md px-2 text-xs text-ink-faint transition-colors hover:bg-paper-deep hover:text-ink"
    >
      {copied ? <Check aria-hidden className="size-3.5 text-forest" /> : <Copy aria-hidden className="size-3.5" />}
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

/** Rendered only when the backend returns sources. Nothing is inferred or invented here. */
function SourceList({ sources }: { sources: Source[] }) {
  return (
    <div className="mt-5 border-t border-line pt-4">
      <h3 className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">Sources</h3>
      <ul className="flex flex-wrap gap-2">
        {sources.map((s, i) => {
          const body = (
            <>
              <FileText aria-hidden className="size-3.5 text-forest" />
              {s.title}
            </>
          );
          const cls =
            "inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2.5 py-1 text-xs text-ink-soft";
          return (
            <li key={`${s.title}-${i}`}>
              {s.url ? (
                <a href={s.url} target="_blank" rel="noopener noreferrer" className={`${cls} hover:border-forest hover:text-forest`}>
                  {body}
                </a>
              ) : (
                <span className={cls}>{body}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function AssistantMessage({ message }: { message: ChatMessage }) {
  return (
    <article className="animate-rise flex gap-3 sm:gap-4" aria-label="Assistant answer">
      <BrandMark size={28} className="mt-0.5 shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="mb-2 text-xs font-medium tracking-wide text-ink-faint">Mboko Assistant</p>
        <Markdown>{message.content}</Markdown>
        {message.sources && <SourceList sources={message.sources} />}
        <div className="-ml-2 mt-3">
          <CopyButton text={message.content} />
        </div>
      </div>
    </article>
  );
}
