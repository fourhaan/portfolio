import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function LandingSectionJourney() {
  return (
    <section
      id="journey"
      className="scroll-mt-16 border-b border-[color:var(--border)]"
    >
      <ScrollReveal className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] text-[color:var(--faint)]">
              THE JOURNEY
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--foreground)] md:text-4xl">
              Iteration, not mythology.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--card-bg)]">
            <div className="h-64 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent_55%),radial-gradient(circle_at_20%_35%,color-mix(in_oklab,var(--foreground)_12%,transparent),transparent_60%)]" />
            <div className="p-6">
              <p className="text-sm font-semibold text-[color:var(--foreground)]">
                Digital Ronin
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                Navigating the modern corridors of product engineering. We move
                to ship, then sharpen what we shipped.
              </p>
              <Link
                href="#contact"
                className="mt-6 inline-flex text-xs font-semibold tracking-[0.25em] text-[color:var(--foreground)] underline decoration-[color:var(--border)] underline-offset-8 hover:decoration-[color:var(--foreground)]"
              >
                WRITE THE NARRATIVE
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card-bg)] p-6">
              <p className="text-sm font-semibold text-[color:var(--foreground)]">
                Era of Discovery
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                Seeking order in complex systems: foundational patterns, clear
                interfaces, and the restraint to delete what doesn’t serve.
              </p>
              <Link
                href="#arsenal"
                className="mt-6 inline-flex text-xs font-semibold tracking-[0.25em] text-[color:var(--foreground)] underline decoration-[color:var(--border)] underline-offset-8 hover:decoration-[color:var(--foreground)]"
              >
                READ THE SCROLLS
              </Link>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--card-bg)]">
              <div className="h-52 bg-[radial-gradient(circle_at_70%_35%,color-mix(in_oklab,var(--foreground)_14%,transparent),transparent_55%),linear-gradient(180deg,transparent,color-mix(in_oklab,var(--foreground)_6%,transparent))]" />
              <div className="p-6">
                <p className="text-xs font-semibold tracking-[0.35em] text-[color:var(--faint)]">
                  PROOF
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  Case studies, shipped code, and measurable outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
