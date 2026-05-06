'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface KDSImageProps {
  src: string;
  alt: string;
  aspect?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  overlay?: React.ReactNode;
  zoom?: boolean;
  parallax?: boolean;
  parallaxStrength?: number;
}

export function KDSImage({
  src,
  alt,
  aspect = '16/9',
  label,
  className = '',
  style = {},
  overlay,
  zoom = true,
  parallax = false,
  parallaxStrength = 18,
}: KDSImageProps) {
  const [err, setErr] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${parallaxStrength}%`, `${parallaxStrength}%`],
  );

  if (err || !src) {
    return (
      <div
        className={`ph ${className}`}
        style={{ aspectRatio: aspect, ...style }}
        aria-label={label || alt}
        role="img"
      >
        <span
          className="kds-mono"
          style={{
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '6px 10px',
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            color: 'var(--ink-dim)',
          }}
        >
          {label || 'image'}
        </span>
      </div>
    );
  }

  const motionClasses = [zoom ? 'kds-zoom' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={wrapperRef}
      className={motionClasses}
      style={{
        position: 'relative',
        aspectRatio: aspect,
        overflow: 'hidden',
        background: '#0a0f19',
        ...style,
      }}
    >
      {parallax ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <motion.img
          src={src}
          alt={alt}
          onError={() => setErr(true)}
          style={{
            width: '100%',
            height: `${100 + parallaxStrength * 2 + 4}%`,
            objectFit: 'cover',
            display: 'block',
            y,
            willChange: 'transform',
          }}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setErr(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      )}
      {overlay}
    </div>
  );
}
