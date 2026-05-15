'use client';

import { CSSProperties, useEffect, useState } from 'react';

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export function CountUp({
  value,
  suffix = '',
  duration = 1400,
  delay = 0,
  className,
  style,
}: CountUpProps) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }

    setDisplay(0);
    let raf = 0;
    const timeoutId = window.setTimeout(() => {
      const start = performance.now();
      raf = requestAnimationFrame(function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));
        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        }
      });
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(raf);
    };
  }, [value, duration, delay]);

  return (
    <span className={className} style={style} aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">
        {display}
        {suffix}
      </span>
    </span>
  );
}
