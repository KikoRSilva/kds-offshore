'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  buildSrcSet,
  getManifestEntry,
  variantsByFormat,
} from '@/lib/image-manifest';

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
  priority?: boolean;
  sizes?: string;
}

const DEFAULT_SIZES =
  '(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 720px';

export function KDSImage({
  src,
  alt,
  aspect = '16/9',
  label,
  className = '',
  style = {},
  overlay,
  zoom,
  parallax = false,
  parallaxStrength = 18,
  priority = false,
  sizes = DEFAULT_SIZES,
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

  // Default: zoom on hover unless parallax is active (avoids stacking
  // two transform effects on the same image).
  const useZoom = zoom ?? !parallax;
  const wrapperClasses = [useZoom ? 'kds-zoom' : '', className]
    .filter(Boolean)
    .join(' ');

  const sharedImageProps = {
    src,
    alt,
    fill: true as const,
    sizes,
    priority,
    onError: () => setErr(true),
    style: { objectFit: 'cover' as const },
  };

  const manifestEntry = getManifestEntry(src);
  const renderImage = () => {
    if (!manifestEntry) {
      return <Image {...sharedImageProps} />;
    }
    const avif = variantsByFormat(manifestEntry, 'avif');
    const webp = variantsByFormat(manifestEntry, 'webp');
    return (
      <picture>
        {avif.length > 0 && (
          <source type="image/avif" sizes={sizes} srcSet={buildSrcSet(avif)} />
        )}
        {webp.length > 0 && (
          <source type="image/webp" sizes={sizes} srcSet={buildSrcSet(webp)} />
        )}
        <Image {...sharedImageProps} />
      </picture>
    );
  };

  return (
    <div
      ref={wrapperRef}
      className={wrapperClasses}
      style={{
        position: 'relative',
        aspectRatio: aspect,
        overflow: 'hidden',
        background: '#0a0f19',
        ...style,
      }}
    >
      {parallax ? (
        <motion.div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: `${100 + parallaxStrength * 2 + 4}%`,
            y,
            willChange: 'transform',
          }}
        >
          {renderImage()}
        </motion.div>
      ) : (
        renderImage()
      )}
      {overlay}
    </div>
  );
}
