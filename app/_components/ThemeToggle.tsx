"use client";

import { useEffect, useRef } from "react";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export default function ThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const resolveTheme = (): Theme => {
    const stored = window.localStorage.getItem("theme");
    return stored === "light" || stored === "dark" ? stored : getSystemTheme();
  };

  const syncLabel = (theme: Theme) => {
    const el = buttonRef.current;
    if (!el) return;
    el.textContent = theme === "light" ? "LIGHT" : "DARK";
    el.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  };

  useEffect(() => {
    const theme = resolveTheme();
    applyTheme(theme);
    syncLabel(theme);

    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      // If user hasn't explicitly set a theme, follow system.
      const stored = window.localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return;
      const next = getSystemTheme();
      applyTheme(next);
      syncLabel(next);
    };

    media?.addEventListener?.("change", onSystemChange);
    return () => media?.removeEventListener?.("change", onSystemChange);
  }, []);

  const toggle = () => {
    const currentAttr = document.documentElement.dataset.theme;
    const current: Theme =
      currentAttr === "light" || currentAttr === "dark"
        ? currentAttr
        : getSystemTheme();
    const next: Theme = current === "dark" ? "light" : "dark";
    window.localStorage.setItem("theme", next);
    applyTheme(next);
    syncLabel(next);
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggle}
      className="inline-flex h-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--badge-bg)] px-4 text-xs font-semibold tracking-[0.25em] text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
      aria-label="Toggle theme"
      aria-pressed="false"
    >
      THEME
    </button>
  );
}
