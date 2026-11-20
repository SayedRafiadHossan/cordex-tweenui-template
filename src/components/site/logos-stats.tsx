'use client';

import LogoWave from '@/components/tweenui/logo-wave';
import NumberCounter from '@/components/tweenui/number-counter';

/** Fictional customer wordmarks, so the template implies no real endorsements. */
const WORDMARKS = [
  { name: 'Lumora', glyph: '◐' },
  { name: 'Northwind', glyph: '▲' },
  { name: 'Halcyon', glyph: '✳' },
  { name: 'Vectra', glyph: '◆' },
  { name: 'Quanta', glyph: '●' },
  { name: 'Fieldnote', glyph: '▤' },
  { name: 'Atlas&Co', glyph: '◎' },
  { name: 'Brightpath', glyph: '✦' },
];

/**
 * Only the logo passing through the middle of the page rises, easing up as it
 * reaches the centre and back down as it leaves (see `spread` on LogoWave).
 */
const WAVE = [{ scale: 1.08, y: -22 }];

const STATS = [
  { value: 12, suffix: 'M+', label: 'agent runs every month' },
  { value: 94, suffix: '%', label: 'tasks finished without a human' },
  { value: 38, suffix: 'h', label: 'saved per teammate, per month' },
  { value: 400, suffix: '+', label: 'tools agents can use' },
];

export default function LogosStats() {
  return (
    <section className="relative border-y border-[#a39e94]/10 bg-[#0e0e0e] py-14">
      <p data-reveal className="text-center text-xs font-medium tracking-[0.2em] text-[#a39e94]/70 uppercase">
        Trusted by fast-moving teams
      </p>
      <LogoWave
        data-reveal="fade"
        className="mt-6 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
        // The component sizes its padding for 42px icons; these pills are 48px, so reserve the room here.
        style={{ paddingTop: 32, paddingBottom: 12 }}
        wave={WAVE}
        smooth
        spread={0.7}
        gap={28}
        duration={40}
        logos={WORDMARKS.map((w) => ({ src: '', alt: w.name }))}
        itemClassName="size-auto h-12 px-5 shadow-none dark:border-[#a39e94]/10 dark:bg-[#141414]"
        renderLogo={(logo, index) => (
          <span className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight whitespace-nowrap text-[#f5f1e8]/60">
            <span className="text-[#c9a96e]">{WORDMARKS[index % WORDMARKS.length].glyph}</span>
            {logo.alt}
          </span>
        )}
      />

      <dl data-reveal-stagger className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-y-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              <NumberCounter value={s.value} />
              <span className="text-[#ecd9b0]">{s.suffix}</span>
            </dd>
            <dd aria-hidden="true" className="mt-2 text-sm text-[#a39e94]/70">
              {s.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
