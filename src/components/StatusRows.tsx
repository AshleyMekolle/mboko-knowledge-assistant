import { AlertTriangle, RotateCw } from "lucide-react";
import { BrandMark } from "./BrandMark";

export function ThinkingIndicator() {
  return (
    <div className="animate-rise flex gap-3 sm:gap-4" role="status" aria-live="polite">
      <BrandMark size={28} className="mt-0.5 shrink-0" />
      <div className="flex items-center gap-3 pt-1">
        <span aria-hidden className="flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="dot-pulse size-1.5 rounded-full bg-forest"
              style={{ animationDelay: `${i * 160}ms` }}
            />
          ))}
        </span>
        <span className="shimmer-text text-sm">Looking through company documents…</span>
      </div>
    </div>
  );
}

interface ErrorNoticeProps {
  message: string;
  onRetry: () => void;
}

export function ErrorNotice({ message, onRetry }: ErrorNoticeProps) {
  return (
    <div
      role="alert"
      className="animate-rise flex flex-col gap-3 rounded-xl border border-coral/40 bg-coral-tint px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-start gap-3">
        <AlertTriangle aria-hidden className="mt-0.5 size-4 shrink-0 text-coral" />
        <div>
          <p className="text-sm font-medium text-ink">That didn&rsquo;t go through</p>
          <p className="mt-0.5 text-sm text-ink-soft">{message}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onRetry}
        className="inline-flex h-9 shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-ink/15 bg-surface px-3 text-sm font-medium text-ink transition-colors hover:border-forest hover:text-forest sm:self-auto"
      >
        <RotateCw aria-hidden className="size-3.5" />
        Try again
      </button>
    </div>
  );
}
