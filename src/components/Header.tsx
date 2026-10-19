import { SquarePen } from "lucide-react";
import type { ConnectionState } from "@/lib/types";
import { BrandMark } from "./BrandMark";

const STATUS: Record<ConnectionState, { label: string; dot: string }> = {
  checking: { label: "Connecting", dot: "bg-ink-faint animate-pulse" },
  online: { label: "Connected", dot: "bg-emerald-600" },
  offline: { label: "Connection issue", dot: "bg-coral" },
};

interface HeaderProps {
  connection: ConnectionState;
  canReset: boolean;
  onNewChat: () => void;
}

export function Header({ connection, canReset, onNewChat }: HeaderProps) {
  const status = STATUS[connection];
  return (
    <header className="shrink-0 border-b border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <BrandMark size={28} />
          <div className="min-w-0 leading-none">
            <h1 className="truncate font-display text-[15px] font-semibold tracking-tight">
              Mboko Knowledge Assistant
            </h1>
            <p className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.16em] text-ink-faint sm:block">
              Internal Knowledge
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <p
            role="status"
            className="flex items-center gap-2 text-xs text-ink-soft"
            title={`Knowledge service: ${status.label.toLowerCase()}`}
          >
            <span aria-hidden className={`size-1.5 rounded-full ${status.dot}`} />
            <span className="hidden sm:inline">{status.label}</span>
            <span className="sr-only sm:hidden">{status.label}</span>
          </p>
          <button
            type="button"
            onClick={onNewChat}
            disabled={!canReset}
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-line-strong bg-surface px-3 text-sm font-medium text-ink transition-colors hover:border-forest hover:bg-forest-tint disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:border-line-strong disabled:hover:bg-surface"
          >
            <SquarePen aria-hidden className="size-4" strokeWidth={1.75} />
            <span className="hidden sm:inline">New conversation</span>
            <span className="sm:hidden">New</span>
          </button>
        </div>
      </div>
    </header>
  );
}
