import { Composer } from "./Composer";
import { SuggestedQuestions } from "./SuggestedQuestions";

interface WelcomeProps {
  onSend: (text: string) => void;
  loading: boolean;
}

/** Diamond lattice nodding to Cameroonian woven textiles; decorative only. */
function Lattice() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -top-6 right-0 -z-10 h-[420px] w-[520px] max-w-full text-forest opacity-[0.07] [mask-image:radial-gradient(closest-side,black,transparent)]"
      viewBox="0 0 520 420"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <defs>
        <pattern id="lattice" width="52" height="52" patternUnits="userSpaceOnUse">
          <path d="M26 0 52 26 26 52 0 26Z" />
          <path d="M26 13 39 26 26 39 13 26Z" />
        </pattern>
      </defs>
      <rect width="520" height="420" fill="url(#lattice)" />
    </svg>
  );
}

export function Welcome({ onSend, loading }: WelcomeProps) {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-10 sm:px-6 sm:py-14">
      <Lattice />
      <p className="animate-rise text-[11px] font-medium uppercase tracking-[0.18em] text-forest">
        <span aria-hidden className="mr-2 inline-block size-1.5 translate-y-[-1px] rounded-full bg-coral" />
        Mboko Media Group · Douala
      </p>
      <h2
        className="animate-rise mt-5 text-balance font-display text-[2.5rem] font-medium leading-[1.05] tracking-[-0.035em] sm:text-6xl"
        style={{ animationDelay: "60ms" }}
      >
        Your company&rsquo;s knowledge, within&nbsp;reach.
      </h2>
      <p
        className="animate-rise mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft"
        style={{ animationDelay: "120ms" }}
      >
        Ask a question about Mboko Media Group. Get clear answers grounded in internal documentation.
      </p>

      <div className="animate-rise mt-9" style={{ animationDelay: "180ms" }}>
        <Composer onSend={onSend} loading={loading} autoFocus />
      </div>

      <div className="animate-rise mt-8" style={{ animationDelay: "240ms" }}>
        <SuggestedQuestions onSelect={onSend} disabled={loading} />
      </div>
    </div>
  );
}
