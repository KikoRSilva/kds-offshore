'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { useState } from 'react';
import { useLocale } from 'next-intl';

// Distance (px) the user has to scroll before we fade the hint out.
// Small enough that it disappears the moment they commit to descending,
// large enough that the page doesn't dismiss it on a single trackpad twitch.
const FADE_AFTER_PX = 80;

/**
 * Hero scroll indicator — a single vertical line with an accent dot dropping
 * along it in a loop, sitting at the bottom of the hero section. Disappears
 * the first time the user scrolls past `FADE_AFTER_PX` and does not return
 * (the tension is broken once and only once).
 *
 * Listens to the Lenis scroll loop so the dismiss reacts on the same frame
 * the rest of the scroll-driven UI runs on.
 *
 * Respects `prefers-reduced-motion`: the drop animation falls back to a
 * static dot.
 */
export function HeroScrollHint() {
  const [visible, setVisible] = useState(true);
  const reduce = useReducedMotion();
  const locale = useLocale();
  const label = locale === 'pt' ? 'Descer' : 'Scroll';

  useLenis(({ scroll }) => {
    if (visible && scroll > FADE_AFTER_PX) setVisible(false);
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
