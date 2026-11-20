import { useId } from 'react';
import { cn } from '@/lib/utils';

/**
 * Cortexa mark: an open "C" ring (the agent's context) with a core node that
 * reaches out through the opening to act. Dark tile, fine champagne edge.
 * Keep in sync with src/app/icon.svg (the browser tab icon).
 */
export default function LogoMark({ className }: { className?: string }) {
  const id = useId();
  const gold = `${id}-gold`;
  const edge = `${id}-edge`;

  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className={cn('size-8 shrink-0', className)}>
      <defs>
        <linearGradient id={gold} x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f5f1e8" />
          <stop offset="0.45" stopColor="#ecd9b0" />
          <stop offset="1" stopColor="#c9a96e" />
        </linearGradient>
        <linearGradient id={edge} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ecd9b0" stopOpacity="0.55" />
          <stop offset="1" stopColor="#c9a96e" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <rect x="0.5" y="0.5" width="31" height="31" rx="9" fill="#141414" stroke={`url(#${edge})`} />

      {/* Open ring */}
      <path
        d="M22.13 10.86 A8 8 0 1 0 22.13 21.14"
        fill="none"
        stroke={`url(#${gold})`}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Core → action */}
      <path d="M18.4 16 H22.6" stroke="#c9a96e" strokeWidth="1.3" strokeLinecap="round" opacity="0.7" />
      <circle cx="16" cy="16" r="2.1" fill={`url(#${gold})`} />
      <circle cx="25" cy="16" r="1.9" fill="#ecd9b0" />
    </svg>
  );
}
