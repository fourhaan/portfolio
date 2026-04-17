"use client";

import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { href: "#top", label: "HOME" },
  { href: "#path", label: "THE PATH" },
  { href: "#arsenal", label: "THE ARSENAL" },
  { href: "#journey", label: "THE JOURNEY" },
  { href: "#contact", label: "CONTACT" },
];

export default function LandingSideNav() {
  const ids = useMemo(
    () => navItems.map((item) => item.href.replace(/^#/, "")),
    [],
  );

  const [activeHref, setActiveHref] = useState<string>("#top");
  const [tappedHref, setTappedHref] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const initial = window.location.hash;
    if (initial) {
      requestAnimationFrame(() => setActiveHref(initial));
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    let rafId = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );
        if (!visible.length) return;

        const id = (visible[0].target as HTMLElement).id;
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => setActiveHref(`#${id}`));
      },
      {
        threshold: [0.12, 0.2, 0.32, 0.45, 0.6],
        rootMargin: "-20% 0px -65% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [ids]);

  const onNavigate = (href: string) => (event: React.MouseEvent) => {
    if (typeof window === "undefined") return;
    if (!href.startsWith("#")) return;

    event.preventDefault();
    setActiveHref(href);
    setTappedHref(href);
    window.setTimeout(() => setTappedHref(null), 280);

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const targetId = href.slice(1);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
      history.replaceState(null, "", href);
    }
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[280px] flex-col border-r border-[color:var(--border)] bg-[color:var(--nav-bg)] backdrop-blur md:flex">
      <div className="flex items-center justify-between px-6 py-5">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.35em] text-[color:var(--faint)]">
            MIRGA FARHAAN BAIG
          </p>
        </div>
      </div>

      <nav className="mt-2 flex-1 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate(item.href)}
                className={
                  "group flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-semibold tracking-[0.25em] transition-colors " +
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--border)] " +
                  (activeHref === item.href
                    ? "bg-[color:var(--badge-bg)] text-[color:var(--foreground)]"
                    : "text-[color:var(--muted)] hover:bg-[color:var(--badge-bg)] hover:text-[color:var(--foreground)]") +
                  (tappedHref === item.href ? " side-nav-tap" : "")
                }
              >
                <span
                  className={
                    "h-1.5 w-1.5 rounded-full transition-all duration-300 " +
                    (activeHref === item.href
                      ? "bg-[color:var(--foreground)] scale-110"
                      : "bg-[color:var(--border)] group-hover:bg-[color:var(--foreground)]")
                  }
                />
                <span className="truncate">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
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
