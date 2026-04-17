import ScrollReveal from "./ScrollReveal";

export default function LandingSectionPath() {
  return (
    <section
      id="path"
      className="scroll-mt-16 border-b border-[color:var(--border)]"
    >
      <ScrollReveal className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)] md:text-3xl">
              The path of the masterless
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[color:var(--muted)]">
              In a world of rigid hierarchies, we choose the shadow. The
              masterless trade is not just a digital skillset; it’s a philosophy
              of engineering where every line of code is a calculated movement.
            </p>

            <div className="mt-10 flex items-end justify-between">
              <div className="h-28 w-28 rounded-3xl border border-[color:var(--border)] bg-[color:var(--badge-bg)]" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--primary-bg)] text-sm font-semibold text-[color:var(--primary-fg)]">
                01
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card-bg)] p-6">
              <p className="text-xs font-semibold tracking-[0.35em] text-[color:var(--faint)]">
                MANIFESTO
              </p>
              <p className="mt-4 text-sm font-semibold text-[color:var(--foreground)]">
                Precision over Volume.
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                Your quiet output is worth a thousand frantic drafts. Do the
                work with intent, iterate, and carve experiences out of the
                digital void.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--card-bg)]">
              <div className="h-44 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--foreground)_8%,transparent),transparent_50%),radial-gradient(circle_at_70%_40%,color-mix(in_oklab,var(--foreground)_14%,transparent),transparent_55%)]" />
              <div className="p-6">
                <p className="text-xs font-semibold tracking-[0.35em] text-[color:var(--faint)]">
                  NOTES
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  Design systems first. Performance always. Ship the essentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
