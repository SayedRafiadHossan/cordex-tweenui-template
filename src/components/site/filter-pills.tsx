'use client';

import { cn } from '@/lib/utils';

/** A row of category pills; the active one is filled gold. */
export default function FilterPills<T extends string>({
  options,
  value,
  onChange,
  counts,
  label,
}: {
  options: readonly T[];
  value: T;
  onChange: (next: T) => void;
  counts?: Partial<Record<T, number>>;
  label: string;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = option === value;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option)}
            className={cn(
              'inline-flex h-10 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-300',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ecd9b0]',
              active
                ? 'border-transparent bg-[#c9a96e] text-[#0a0a0b]'
                : 'border-[#a39e94]/20 text-[#f5f1e8]/70 hover:border-[#c9a96e]/50 hover:text-[#f5f1e8]'
            )}
          >
            {option}
            {counts?.[option] !== undefined ? (
              <span className={cn('text-xs', active ? 'text-[#0a0a0b]/60' : 'text-[#a39e94]')}>
                {counts[option]}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
