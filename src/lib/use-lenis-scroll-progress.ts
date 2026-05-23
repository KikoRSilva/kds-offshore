'use client';

import { useLenis } from 'lenis/react';
import { useMotionValue, type MotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

/**
 * Returns a MotionValue that tracks an element's scroll progress through the
 * viewport — driven by the Lenis frame loop instead of native scroll events.
 *
 * Range matches Framer Motion's `useScroll({ offset: ['start end', 'end start'] })`:
 *   0   — element top has just crossed the viewport bottom (entering)
 *   0.5 — element centre is on the viewport centre
 *   1   — element bottom has just crossed the viewport top (leaving)
 *
 * The progress only updates while the element is near the viewport. An
 * IntersectionObserver gates the calculation so off-screen parallaxes don't
 * pay the cost of getBoundingClientRect on every Lenis frame.
 */
export function useLenisScrollProgress(
  ref: React.RefObject<HTMLElement | null>,
): MotionValue<number> {
  const progress = useMotionValue(0);
  const isNearViewport = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Only run the expensive recalculation when the element is in or near the
    // viewport. `rootMargin` extends the trigger area so progress is already
    // up to date when the element actually enters.
    const io = new IntersectionObserver(
      ([entry]) => {
        isNearViewport.current = entry.isIntersecting;
      },
      { rootMargin: '50% 0px 50% 0px', threshold: 0 },
    );
    io.observe(el);

    return () => io.disconnect();
  }, [ref]);

  useLenis(() => {
    const el = ref.current;
    if (!el || !isNearViewport.current) return;

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    // Distance the element has travelled relative to the viewport. Matches
    // Framer Motion's `['start end', 'end start']` mapping exactly so swapping
    // useScroll → useLenisScrollProgress requires no other changes.
    const travelled = (vh - rect.top) / (vh + rect.height);
    progress.set(Math.max(0, Math.min(1, travelled)));
  });

  return progress;
}
