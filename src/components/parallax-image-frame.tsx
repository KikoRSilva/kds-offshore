'use client';

import { useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import { useLenisScrollProgress } from '@/lib/use-lenis-scroll-progress';

interface ParallaxImageFrameProps {
  aspect: string;
  strength?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function ParallaxImageFrame({
  aspect,
  strength = 14,
  className = '',
  style,
  children,
}: ParallaxImageFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Scroll progress driven by Lenis (not native scroll) so the parallax
  // motion stays perfectly in sync with the smooth-scroll frame.
  const scrollYProgress = useLenisScrollProgress(ref);
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${strength}%`, `${strength}%`],
  );
  const innerHeight = `${100 + strength * 2 + 4}%`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: 'relative',
        aspectRatio: aspect,
        overflow: 'hidden',
        ...style,
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: innerHeight,
          y,
          willChange: 'transform',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
