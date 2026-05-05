'use client';

import { useState } from 'react';

interface KDSImageProps {
  src: string;
  alt: string;
  aspect?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  overlay?: React.ReactNode;
}

export function KDSImage({
  src,
  alt,
  aspect = '16/9',
  label,
  className = '',
  style = {},
  overlay,
}: KDSImageProps) {
  const [err, setErr] = useState(false);

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

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        aspectRatio: aspect,
        overflow: 'hidden',
        background: '#0a0f19',
        ...style,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onError={() => setErr(true)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      {overlay}
    </div>
  );
}
