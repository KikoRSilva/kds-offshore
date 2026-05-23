'use client';

import { ReactLenis } from 'lenis/react';
import type { LenisOptions } from 'lenis';

// Lenis runs on the document root so the browser's native scrollY stays
// in sync. All scroll-driven animations on the site read their progress
// through `useLenisScrollProgress` (see `src/lib/use-lenis-scroll-progress.ts`)
// so they advance on the same RAF tick as the smooth-scroll loop — no
// dessynchronisation between scroll position and parallax offsets.
//
// `Reveal` uses `useInView` (IntersectionObserver) and stays compatible
// without any rewiring.
//
// `prefers-reduced-motion: reduce` is honoured by Lenis itself: smoothing is
// automatically disabled, so we don't need a manual check here.
const OPTIONS: LenisOptions = {
  // Damping factor — lower = smoother / heavier; higher = snappier.
  // 0.1 matches the published default and feels natural on a content-heavy site.
  lerp: 0.1,
  // Smooth wheel input. Touch is left alone (native iOS / Android momentum).
  smoothWheel: true,
  // Capture wheel events on overflowing elements so nested scroll containers
  // (e.g. the FAQ <details>) still scroll normally.
  syncTouch: false,
};

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={OPTIONS}>
      {children}
    </ReactLenis>
  );
}
