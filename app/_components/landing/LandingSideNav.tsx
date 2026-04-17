import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

const navItems = [
  { href: "#top", label: "HOME" },
  { href: "#path", label: "THE PATH" },
  { href: "#arsenal", label: "THE ARSENAL" },
  { href: "#journey", label: "THE JOURNEY" },
  { href: "#contact", label: "CONTACT" },
];

export default function LandingSideNav() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[280px] flex-col border-r border-[color:var(--border)] bg-[color:var(--nav-bg)] backdrop-blur md:flex">
      <div className="flex items-center justify-between px-6 py-5">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.35em] text-[color:var(--faint)]">
            MIRGA FARHAAN BAIG
          </p>
          <p className="mt-2 text-[11px] tracking-[0.25em] text-[color:var(--muted)]">
            PRODUCTS IN SILENCE.
          </p>
        </div>
      </div>

      <nav className="mt-2 flex-1 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-semibold tracking-[0.25em] text-[color:var(--muted)] transition-colors hover:bg-[color:var(--badge-bg)] hover:text-[color:var(--foreground)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--border)] transition-colors group-hover:bg-[color:var(--foreground)]" />
                <span className="truncate">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 px-3">
          <Link
            href="#contact"
            className="inline-flex h-10 w-full items-center justify-center rounded-full bg-[color:var(--primary-bg)] text-xs font-semibold tracking-[0.25em] text-[color:var(--primary-fg)] transition-colors hover:bg-[color:var(--primary-hover)]"
          >
            ENTER
          </Link>
        </div>
      </nav>

      <div className="border-t border-[color:var(--border)] px-6 py-4">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold tracking-[0.35em] text-[color:var(--faint)]">
            SETTINGS
          </p>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
