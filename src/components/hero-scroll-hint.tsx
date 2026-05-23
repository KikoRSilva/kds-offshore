'use client';

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion';
import { useState } from 'react';
import { useLocale } from 'next-intl';
import { useLenisScrollProgress } from '@/lib/use-lenis-scroll-progress';

interface HeroScrollHintProps {
  // Ref to the hero section. The hint dismisses when this element has
  // travelled a small fraction through the viewport.
  targetRef: React.RefObject<HTMLElement | null>;
}

// Fraction of the hero's travel through the viewport at which the hint
// dismisses. ~0.04 maps to roughly the first 60–90 px of scroll on a
// typical hero, independent of viewport size.
const DISMISS_AT_PROGRESS = 0.04;

/**
 * Hero scroll indicator — a single vertical line with an accent dot dropping
 * along it in a loop, sitting at the bottom of the hero. Creates a small
 * amount of visual tension before the user interacts.
 *
 * Disappears the first time the hero's `useLenisScrollProgress` crosses
 * `DISMISS_AT_PROGRESS` and does not return on scroll-up — the tension is
 * broken once and only once.
 *
 * `useLenisScrollProgress` keeps the dismiss synchronised with the Lenis
 * RAF, matching the rest of the site's scroll-driven UI.
 */
export function HeroScrollHint({ targetRef }: HeroScrollHintProps) {
  const [visible, setVisible] = useState(true);
  const reduce = useReducedMotion();
  const locale = useLocale();
  const label = locale === 'pt' ? 'Descer' : 'Scroll';

  const progress = useLenisScrollProgress(targetRef);
  useMotionValueEvent(progress, 'change', (latest) => {
    if (visible && latest > DISMISS_AT_PROGRESS) setVisible(false);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1], delay: 1.2 }}
          aria-hidden
          style={{
            position: 'absolute',
            bottom: 28,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            pointerEvents: 'none',
            zIndex: 3,
          }}
        >
          <span
            className="kds-mono"
            style={{
              fontSize: 10,
              color: 'var(--ink-faint)',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
            }}
          >
            {label}
          </span>
          <div
            style={{
              position: 'relative',
              width: 1,
              height: 56,
              background: 'var(--line-2)',
              overflow: 'visible',
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: -1.5,
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 8px var(--accent)',
              }}
              animate={reduce ? {} : { y: [0, 52], opacity: [0, 1, 1, 0] }}
              transition={
                reduce
                  ? undefined
                  : {
                      duration: 1.8,
                      ease: [0.55, 0, 0.45, 1],
                      repeat: Infinity,
                      repeatDelay: 0.15,
                      times: [0, 0.15, 0.85, 1],
                    }
              }
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
