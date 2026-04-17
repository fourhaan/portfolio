import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

function VerticalWord({ children }: { children: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-6 top-10 hidden select-none md:block"
      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
    >
      <span className="text-[74px] font-semibold tracking-[0.18em] text-[color:var(--border)]">
        {children}
      </span>
    </div>
  );
}

export default function LandingHero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-[color:var(--border)]"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--foreground)_12%,transparent),transparent_55%),radial-gradient(circle_at_70%_55%,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,transparent_35%,color-mix(in_oklab,var(--background)_20%,transparent),var(--background))]" />
      </div>

      <VerticalWord>SHARPEN THE CRAFT</VerticalWord>

      <ScrollReveal className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div className="relative">
            <p className="text-xs font-semibold tracking-[0.35em] text-[color:var(--faint)]">
              MASTERLESS
            </p>

            <h1 className="yuji-boku-regular mt-5 max-w-xl text-5xl leading-[1.02] tracking-tight text-[color:var(--foreground)] md:text-6xl">
              Build with discipline.
            </h1>

            <div className="mt-8 max-w-xl border-l-2 border-[color:var(--border)] pl-5">
              <p className="text-sm leading-7 text-[color:var(--muted)]">
                “The work is an extension of the mind. Where ego vanishes, only
                the craft remains.”
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#path"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[color:var(--primary-bg)] px-6 text-xs font-semibold tracking-[0.25em] text-[color:var(--primary-fg)] transition-colors hover:bg-[color:var(--primary-hover)]"
              >
                ENTER THE CLOUD
              </Link>
              <Link
                href="#arsenal"
                className="inline-flex h-11 items-center justify-center rounded-full border border-[color:var(--secondary-border)] px-6 text-xs font-semibold tracking-[0.25em] text-[color:var(--secondary-fg)] transition-colors hover:bg-[color:var(--secondary-hover)]"
              >
                SCROLL
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--card-bg)] p-6">
            <p className="text-xs font-semibold tracking-[0.35em] text-[color:var(--faint)]">
              PROTOCOL
            </p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              Minimal surfaces. Fast interactions. Accessible defaults.
            </p>
            <div className="mt-6 h-40 rounded-2xl border border-[color:var(--border)] bg-[color:var(--badge-bg)]" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
