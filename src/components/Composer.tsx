"use client";

import { ArrowUp, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ComposerProps {
  onSend: (text: string) => void;
  loading: boolean;
  autoFocus?: boolean;
  placeholder?: string;
}

const MAX_LENGTH = 4000;

export function Composer({ onSend, loading, autoFocus, placeholder }: ComposerProps) {
  const [value, setValue] = useState("");
  const textarea = useRef<HTMLTextAreaElement>(null);
  const canSend = value.trim().length > 0 && !loading;

  // Grow with content up to a cap, then scroll.
  useEffect(() => {
    const el = textarea.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  }, [value]);

  useEffect(() => {
    if (autoFocus) textarea.current?.focus({ preventScroll: true });
  }, [autoFocus]);

  // Return focus once an answer has arrived so users can keep typing.
  const wasLoading = useRef(false);
  useEffect(() => {
    if (wasLoading.current && !loading) textarea.current?.focus({ preventScroll: true });
    wasLoading.current = loading;
  }, [loading]);

  function submit() {
    if (!canSend) return;
    onSend(value);
    setValue("");
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="group rounded-2xl border border-line-strong bg-surface shadow-card transition-shadow focus-within:border-forest focus-within:shadow-lift"
    >
      <label htmlFor="composer" className="sr-only">
        Ask a question about Mboko Media Group
      </label>
      <textarea
        id="composer"
        ref={textarea}
        value={value}
        rows={1}
        maxLength={MAX_LENGTH}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
            e.preventDefault();
            submit();
          }
        }}
        placeholder={placeholder ?? "Ask about policies, teams or procedures…"}
        className="block max-h-[200px] w-full resize-none bg-transparent px-4 pb-2 pt-4 text-base leading-6 text-ink outline-none placeholder:text-ink-faint sm:px-5"
      />
      <div className="flex items-center justify-between gap-3 px-3 pb-3 pl-4 sm:pl-5">
        <p className="text-xs text-ink-faint">
          <kbd className="font-sans font-medium text-ink-soft">Enter</kbd> to send
          <span aria-hidden> · </span>
          <kbd className="font-sans font-medium text-ink-soft">Shift + Enter</kbd> for a new line
        </p>
        <button
          type="submit"
          disabled={!canSend}
          aria-label={loading ? "Waiting for an answer" : "Send question"}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-forest text-paper transition-colors hover:bg-forest-hover focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:bg-line disabled:text-ink-faint"
        >
          {loading ? (
            <Loader2 aria-hidden className="size-[18px] animate-spin" />
          ) : (
            <ArrowUp aria-hidden className="size-[18px]" strokeWidth={2} />
          )}
        </button>
      </div>
    </form>
  );
}
