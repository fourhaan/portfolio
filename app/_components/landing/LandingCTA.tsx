import Link from "next/link";

export default function LandingCTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 border-b border-[color:var(--border)] bg-[color:var(--primary-bg)]"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.35em] text-[color:var(--primary-fg)] opacity-70">
            READY TO BUILD?
          </p>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[color:var(--primary-fg)] md:text-4xl">
            Let’s ship something deliberate.
          </h2>
          <div className="mt-10 flex justify-center">
            <Link
              href="mailto:mirga.farhaan@example.com"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[color:var(--background)] px-7 text-xs font-semibold tracking-[0.25em] text-[color:var(--foreground)] transition-colors hover:opacity-90"
            >
              COMMENCE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
