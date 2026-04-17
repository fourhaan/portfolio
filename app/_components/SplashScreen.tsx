"use client";

import { useEffect, useState } from "react";

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

export default function SplashScreen() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Auto-dismiss after the reveal animation completes.
    const reduce = prefersReducedMotion();
    const totalMs = reduce ? 10 : 4200;

    const t = window.setTimeout(() => setDismissed(true), totalMs);
    return () => window.clearTimeout(t);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black"
      role="dialog"
      aria-label="Intro"
      aria-modal="true"
    >
      {/* Middle scene */}
      <div className="splash-scene absolute inset-0">
        <div className="absolute inset-0 bg-zinc-950" />

        {/* Petal falling media (place your file in /public as petals.mp4 and/or petals.gif) */}
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/petals.gif"
        >
          <source src="/petals.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(244,63,94,0.20),transparent_55%),radial-gradient(circle_at_20%_60%,rgba(251,113,133,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/65" />

        {/* Quote */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-2xl text-center">
            <p className="yuji-boku-regular text-3xl leading-snug tracking-tight text-white sm:text-4xl">
              Victory is reserved for those who are willing to pay its price.
            </p>
            <p className="mt-6 text-xs font-semibold tracking-[0.35em] text-white/70">
              SUN TZU
            </p>
          </div>
        </div>
      </div>

      {/* Bars */}
      <div className="splash-bar splash-bar-top absolute left-0 right-0 top-0 h-[46vh] bg-black" />
      <div className="splash-bar splash-bar-bottom absolute left-0 right-0 bottom-0 h-[46vh] bg-black" />
    </div>
  );
}
