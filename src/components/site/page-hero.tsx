import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/* Shared building blocks for every inner page, styled like the home page. */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('text-xs font-medium tracking-[0.2em] text-[#ecd9b0] uppercase', className)}>
      {children}
    </p>
  );
}

/** Gold or outline pill link, matching the home page buttons. */
export function ButtonLink({
  href,
  children,
  variant = 'gold',
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: 'gold' | 'outline';
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-[15px] font-medium transition-[transform,background-color,border-color,color] duration-300 active:scale-[0.97]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ecd9b0]',
        variant === 'gold'
          ? 'bg-[#c9a96e] text-[#0a0a0b] hover:bg-[#ecd9b0]'
          : 'border border-[#a39e94]/25 text-[#f5f1e8] hover:border-[#ecd9b0] hover:bg-[#ecd9b0] hover:text-[#0a0a0b]',
        className
      )}
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}

/** Top of every inner page: eyebrow, big headline, intro and actions over the home hero's backdrop. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = 'center',
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  align?: 'center' | 'left';
}) {
  return (
    <section className="relative isolate overflow-clip px-4 pt-36 pb-16 sm:px-6 sm:pt-44 sm:pb-20 lg:px-8">
      <div aria-hidden="true" className="cx-grid-bg pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="cx-aurora pointer-events-none absolute -top-48 left-1/2 -z-10 h-[520px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(201_169_110/0.16),transparent_70%)] blur-2xl"
      />
      <div
        data-reveal-stagger
        className={cn('mx-auto max-w-4xl', align === 'center' ? 'text-center' : 'max-w-7xl text-left')}
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 font-display text-[clamp(2.25rem,8vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-balance">
          {title}
        </h1>
        {description ? (
          <p
            className={cn(
              'mt-6 max-w-2xl text-base leading-relaxed text-pretty text-[#f5f1e8]/60 sm:text-lg',
              align === 'center' && 'mx-auto'
            )}
          >
            {description}
          </p>
        ) : null}
        {children ? (
          <div
            className={cn(
              'mt-9 flex flex-wrap items-center gap-3',
              align === 'center' ? 'justify-center' : 'justify-start'
            )}
          >
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/** Eyebrow + heading + intro, used at the top of sections. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
}) {
  return (
    <div
      data-reveal-stagger
      className={cn(align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-xl', className)}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.035em] text-balance sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-5 text-base text-[#f5f1e8]/60 sm:text-lg', align === 'center' && 'mx-auto')}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

/** Standard section padding and width. */
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn('scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8', className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
