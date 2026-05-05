export function KDSMark({ color = 'var(--ink)', size = 48 }: { color?: string; size?: number }) {
  const h = Math.round(size * (20 / 48));
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 48 20"
      fill="none"
      aria-label="KDS Offshore"
      role="img"
    >
      <path d="M2 18 L2 2 M2 10 L12 2 M2 10 L12 18" stroke={color} strokeWidth="1.5" />
      <path
        d="M18 18 L18 2 L26 2 Q30 2 30 6 Q30 10 26 10 L18 10 M26 10 L30 18"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M36 4 Q44 4 44 10 Q44 16 36 16" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}
