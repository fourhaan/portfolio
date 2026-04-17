"use client";

import { useEffect, useRef } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function WaterDropletBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    hasMoved: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });
    if (!context) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const getTheme = () => {
      const attr = document.documentElement.dataset.theme;
      if (attr === "light" || attr === "dark") return attr;
      return window.matchMedia?.("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };

    const themeRef = { current: getTheme() };

    let viewportWidth = 1;
    let viewportHeight = 1;

    let gridWidth = 1;
    let gridHeight = 1;

    let prev = new Float32Array(1);
    let curr = new Float32Array(1);
    let next = new Float32Array(1);

    let imageData: ImageData | null = null;
    let rafId = 0;
    let isRunning = true;

    const allocate = () => {
      viewportWidth = window.innerWidth || 1;
      viewportHeight = window.innerHeight || 1;

      const base = 220;
      gridHeight = clamp(Math.round(base), 140, 300);
      gridWidth = clamp(
        Math.round(base * (viewportWidth / viewportHeight)),
        180,
        420,
      );

      canvas.width = gridWidth;
      canvas.height = gridHeight;

      prev = new Float32Array(gridWidth * gridHeight);
      curr = new Float32Array(gridWidth * gridHeight);
      next = new Float32Array(gridWidth * gridHeight);

      imageData = context.createImageData(gridWidth, gridHeight);
      context.imageSmoothingEnabled = true;
    };

    const addDrop = (
      clientX: number,
      clientY: number,
      strength: number,
      radius: number,
    ) => {
      if (!imageData) return;

      const cx = Math.round((clientX / viewportWidth) * (gridWidth - 1));
      const cy = Math.round((clientY / viewportHeight) * (gridHeight - 1));

      const r = clamp(Math.round(radius), 3, 40);
      const r2 = r * r;

      const xMin = clamp(cx - r, 1, gridWidth - 2);
      const xMax = clamp(cx + r, 1, gridWidth - 2);
      const yMin = clamp(cy - r, 1, gridHeight - 2);
      const yMax = clamp(cy + r, 1, gridHeight - 2);

      for (let y = yMin; y <= yMax; y++) {
        const dy = y - cy;
        for (let x = xMin; x <= xMax; x++) {
          const dx = x - cx;
          const d2 = dx * dx + dy * dy;
          if (d2 > r2) continue;
          const falloff = 1 - d2 / r2;
          curr[y * gridWidth + x] += strength * falloff;
        }
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const p = pointerRef.current;
      p.hasMoved = true;

      p.lastX = p.x;
      p.lastY = p.y;
      p.x = event.clientX;
      p.y = event.clientY;

      const vx = p.x - p.lastX;
      const vy = p.y - p.lastY;
      const speed = Math.min(60, Math.hypot(vx, vy));

      addDrop(p.x, p.y, -0.45 - speed * 0.01, 5 + speed * 0.12);
    };

    const onResize = () => {
      allocate();
    };

    const onVisibility = () => {
      isRunning = !document.hidden;
      if (isRunning && !reduceMotion) {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(tick);
      }
    };

    const damping = 0.985;

    const simulate = () => {
      const w = gridWidth;
      const h = gridHeight;

      for (let y = 1; y < h - 1; y++) {
        const row = y * w;
        for (let x = 1; x < w - 1; x++) {
          const i = row + x;
          const neighbors =
            curr[i - 1] + curr[i + 1] + curr[i - w] + curr[i + w];
          next[i] = (neighbors * 0.5 - prev[i]) * damping;
        }
      }

      const tmp = prev;
      prev = curr;
      curr = next;
      next = tmp;
    };

    const render = () => {
      if (!imageData) return;

      const isDark = themeRef.current === "dark";

      const w = gridWidth;
      const h = gridHeight;
      const data = imageData.data;

      for (let y = 0; y < h; y++) {
        const yn = y / (h - 1);
        const vY = yn - 0.5;
        const row = y * w;

        for (let x = 0; x < w; x++) {
          const xn = x / (w - 1);
          const vX = xn - 0.5;
          const i = row + x;

          const hC = curr[i];
          const hL = x > 0 ? curr[i - 1] : hC;
          const hR = x < w - 1 ? curr[i + 1] : hC;
          const hU = y > 0 ? curr[i - w] : hC;
          const hD = y < h - 1 ? curr[i + w] : hC;

          const dx = hL - hR;
          const dy = hU - hD;

          const light = dx * 0.65 + dy * 0.85;
          const vignette = clamp(1 - (vX * vX + vY * vY) * 1.35, 0.15, 1);

          const v = isDark
            ? clamp(235 + light * 46 - hC * 10, 210, 255) * vignette
            : clamp(18 + light * 38 - hC * 10, 0, 70) * vignette;

          const o = i * 4;
          data[o] = v;
          data[o + 1] = v;
          data[o + 2] = v;
          data[o + 3] = 255;
        }
      }

      context.putImageData(imageData, 0, 0);
    };

    const tick = () => {
      if (!reduceMotion && isRunning) {
        simulate();
      }

      render();

      if (!reduceMotion) {
        rafId = requestAnimationFrame(tick);
      }
    };

    allocate();

    const observer = new MutationObserver(() => {
      themeRef.current = getTheme();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerMove, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    // Start with a subtle initial disturbance so it doesn't look flat.
    addDrop(viewportWidth * 0.5, viewportHeight * 0.35, -0.6, 12);

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 h-full w-full pointer-events-none opacity-35"
      style={{
        imageRendering: "auto",
      }}
    />
  );
}
