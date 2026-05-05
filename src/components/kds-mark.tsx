/* eslint-disable @next/next/no-img-element */

interface KDSMarkProps {
  size?: number;
  alt?: string;
}

export function KDSMark({ size = 36, alt = 'KDS Offshore' }: KDSMarkProps) {
  return (
    <img
      src="/logo.png"
      alt={alt}
      width={size}
      height={size}
      style={{
        display: 'block',
        width: size,
        height: size,
        objectFit: 'contain',
      }}
    />
  );
}
