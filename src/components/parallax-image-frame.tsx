'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
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
