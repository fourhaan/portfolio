import Link from "next/link";

import SplashScreen from "./_components/SplashScreen";
import ThemeToggle from "./_components/ThemeToggle";
import WaterDropletBackground from "./_components/WaterDropletBackground";
import LandingCTA from "./_components/landing/LandingCTA";
import LandingHero from "./_components/landing/LandingHero";
import LandingSectionArsenal from "./_components/landing/LandingSectionArsenal";
import LandingSectionJourney from "./_components/landing/LandingSectionJourney";
import LandingSectionPath from "./_components/landing/LandingSectionPath";
import LandingSideNav from "./_components/landing/LandingSideNav";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col bg-[color:var(--background)] text-[color:var(--foreground)]">
      <SplashScreen />
      <WaterDropletBackground />

      <LandingSideNav />

      <header className="sticky top-0 z-20 border-b border-[color:var(--border)] bg-[color:var(--nav-bg)] backdrop-blur md:hidden">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="#top"
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
              href="#arsenal"
              className="text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
            >
              Arsenal
            </Link>
            <Link
              href="#contact"
              className="text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
            >
              Contact
            </Link>

            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="relative z-10 flex-1 md:pl-[280px]">
        <LandingHero />
        <LandingSectionPath />
        <LandingSectionArsenal />
        <LandingSectionJourney />
        <LandingCTA />

        <footer className="border-t border-[color:var(--border)] py-10">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 text-xs text-[color:var(--faint)]">
            <span>© {new Date().getFullYear()} Mirga Farhaan Baig</span>
            <Link
              href="#top"
              className="tracking-[0.25em] text-[color:var(--faint)] transition-colors hover:text-[color:var(--foreground)]"
            >
              TOP
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
