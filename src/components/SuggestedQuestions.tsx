import { ArrowUpRight } from "lucide-react";

interface Suggestion {
  topic: string;
  question: string;
}

export const SUGGESTIONS: readonly Suggestion[] = [
  { topic: "Finance", question: "Who handles employee payroll and financial payments?" },
  { topic: "People", question: "What is the employee onboarding process?" },
  { topic: "Procurement", question: "How are purchases and vendor invoices approved?" },
  { topic: "People", question: "What happens during employee offboarding?" },
];

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
  disabled?: boolean;
}

/** An index of starting points, set like a table of contents rather than a row of chips. */
export function SuggestedQuestions({ onSelect, disabled }: SuggestedQuestionsProps) {
  return (
    <section aria-labelledby="starters-heading">
      <h2
        id="starters-heading"
        className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint"
      >
        Start with a question
      </h2>
      <ul className="grid overflow-hidden rounded-2xl border border-line bg-surface sm:grid-cols-2">
        {SUGGESTIONS.map(({ topic, question }, i) => (
          <li
            key={question}
            className={`border-line ${i > 0 ? "border-t" : ""} ${i === 1 ? "sm:border-t-0" : ""} ${i % 2 === 1 ? "sm:border-l" : ""}`}
          >
            <button
              type="button"
              disabled={disabled}
              onClick={() => onSelect(question)}
              className="group flex h-full w-full items-start gap-4 p-4 text-left transition-colors hover:bg-forest-tint/60 focus-visible:-outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:p-5"
            >
              <span
                aria-hidden
                className="mt-0.5 font-display text-sm tabular-nums text-ink-faint transition-colors group-hover:text-coral"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-forest">
                  {topic}
                </span>
                <span className="mt-1 block text-[15px] leading-snug text-ink">{question}</span>
              </span>
              <ArrowUpRight
                aria-hidden
                className="mt-0.5 size-4 shrink-0 text-ink-faint opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-forest group-hover:opacity-100 group-focus-visible:opacity-100"
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
