"use client";

import { useEffect, useRef } from "react";

function isFinePointer() {
  return window.matchMedia?.("(hover: hover) and (pointer: fine)").matches;
}

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

export default function CustomCursor() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const pointerRef = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    visible: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isFinePointer()) return;

    const el = rootRef.current;
    if (!el) return;

    const reduce = prefersReducedMotion();

    let rafId = 0;
    const ease = reduce ? 1 : 0.22;

    const show = () => {
      if (!pointerRef.current.visible) {
        pointerRef.current.visible = true;
        el.classList.add("custom-cursor--visible");
      }
    };

    const hide = () => {
      if (pointerRef.current.visible) {
        pointerRef.current.visible = false;
        el.classList.remove("custom-cursor--visible");
      }
    };

    const onMove = (event: PointerEvent) => {
      show();
      const p = pointerRef.current;
      p.targetX = event.clientX;
      p.targetY = event.clientY;
    };

    let clickTimeout = 0;
    const onDown = () => {
      if (reduce) return;
      el.classList.remove("custom-cursor--click");
      requestAnimationFrame(() => el.classList.add("custom-cursor--click"));
      window.clearTimeout(clickTimeout);
      clickTimeout = window.setTimeout(() => {
        el.classList.remove("custom-cursor--click");
      }, 260);
    };

    const onVisibilityChange = () => {
      if (document.hidden) hide();
    };

    const tick = () => {
      const p = pointerRef.current;
      p.x += (p.targetX - p.x) * ease;
      p.y += (p.targetY - p.y) * ease;

      el.style.left = `${p.x}px`;
      el.style.top = `${p.y}px`;

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("blur", hide);
    document.addEventListener("visibilitychange", onVisibilityChange);

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(clickTimeout);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("blur", hide);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div ref={rootRef} className="custom-cursor" aria-hidden="true">
      <div className="custom-cursor__core" />
    </div>
  );
}
