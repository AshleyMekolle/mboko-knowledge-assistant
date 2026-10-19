interface BrandMarkProps {
  size?: number;
  className?: string;
}

/**
 * Mboko monogram: an "M" drawn as two peaks (a skyline / river-delta fold) with a coral
 * sun-dot resting above the valley. Holds up from 16px upward.
 */
export function BrandMark({ size = 32, className }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      role="img"
      aria-label="Mboko"
      className={className}
    >
      <rect width="32" height="32" rx="8" fill="#0F3D2E" />
      <path
        d="M7.5 23.5V11.5L16 20l8.5-8.5v12"
        fill="none"
        stroke="#FAF8F4"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="9" r="2.1" fill="#E8654A" />
    </svg>
  );
}
