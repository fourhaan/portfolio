import WaterDropletBackground from "./_components/WaterDropletBackground";
import ThemeToggle from "./_components/ThemeToggle";
import Link from "next/link";
import SplashScreen from "./_components/SplashScreen";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col bg-[color:var(--background)] text-[color:var(--foreground)]">
      <SplashScreen />
      <WaterDropletBackground />

      <header className="sticky top-0 z-20 border-b border-[color:var(--border)] bg-[color:var(--nav-bg)] backdrop-blur">
        <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/#top"
            className="group inline-flex items-baseline gap-3"
            aria-label="Go to top"
          >
            <span className="text-xs tracking-[0.35em] text-[color:var(--faint)]">
              MFB
            </span>
            <span className="text-sm font-medium text-[color:var(--muted)] transition-colors group-hover:text-[color:var(--foreground)]">
              Mirga Farhaan Baig
            </span>
          </Link>

          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/#work"
              className="text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
            >
              Work
            </Link>
            <Link
              href="/#contact"
              className="text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
            >
              Contact
            </Link>

            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main
        id="top"
        className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-6"
      >
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="relative">
            <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-[color:var(--badge-bg)] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--muted)]" />
              <span className="text-xs tracking-[0.25em] text-[color:var(--muted)]">
                BLACK / WHITE
              </span>
            </div>

            <h1 className="yuji-boku-regular max-w-3xl text-5xl leading-[1.05] tracking-tight text-[color:var(--foreground)] sm:text-7xl">
              Mirga Farhaan Baig
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
              A minimal, modern portfolio landing in ink and silence.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/#work"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[color:var(--primary-bg)] px-6 text-sm font-semibold text-[color:var(--primary-fg)] transition-colors hover:bg-[color:var(--primary-hover)]"
              >
                View work
              </Link>
              <Link
                href="/#contact"
                className="inline-flex h-11 items-center justify-center rounded-full border border-[color:var(--secondary-border)] px-6 text-sm font-semibold text-[color:var(--secondary-fg)] transition-colors hover:bg-[color:var(--secondary-hover)]"
              >
                Get in touch
              </Link>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card-bg)] p-5">
                <p className="text-xs tracking-[0.25em] text-[color:var(--faint)]">
                  FOCUS
                </p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Clean interfaces, strong typography.
                </p>
              </div>
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card-bg)] p-5">
                <p className="text-xs tracking-[0.25em] text-[color:var(--faint)]">
                  STYLE
                </p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Monochrome, contrast, and restraint.
                </p>
              </div>
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card-bg)] p-5">
                <p className="text-xs tracking-[0.25em] text-[color:var(--faint)]">
                  CRAFT
                </p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Fast, accessible, and deliberate.
                </p>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 top-10 select-none text-[160px] leading-none text-[color:var(--border)] sm:text-[220px]"
            >
              侍
            </div>
          </div>
        </section>

        <section
          id="work"
          className="border-t border-[color:var(--border)] py-16"
        >
          <h2 className="text-sm font-semibold tracking-[0.35em] text-[color:var(--muted)]">
            WORK
          </h2>
          <p className="mt-4 max-w-2xl text-[color:var(--muted)]">
            Selected projects will live here.
          </p>
        </section>

        <section
          id="contact"
          className="border-t border-[color:var(--border)] py-16"
        >
          <h2 className="text-sm font-semibold tracking-[0.35em] text-[color:var(--muted)]">
            CONTACT
          </h2>
          <p className="mt-4 max-w-2xl text-[color:var(--muted)]">
            Drop a message anytime.
          </p>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[color:var(--border)] py-8">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 text-xs text-[color:var(--faint)]">
          <span>© {new Date().getFullYear()} Mirga Farhaan Baig</span>
          <Link
            href="/#top"
            className="tracking-[0.25em] text-[color:var(--faint)] transition-colors hover:text-[color:var(--foreground)]"
          >
            TOP
          </Link>
        </div>
      </footer>
    </div>
  );
}
