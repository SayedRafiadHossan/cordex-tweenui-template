'use client';

import { useEffect, useRef, useState, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { smoothScrollTo } from '@/lib/smooth-scroll';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export interface ProcessStickyStep {
  /** Stable id used as the React key and scroll target. */
  id: string;
  /** Step heading shown on the card. */
  title: string;
  /** Supporting line under the title. */
  description: string;
  /** Photo URL for the card. */
  image: string;
  /** Alt text for the photo. */
  imageAlt: string;
  /** Optional overlay image sitting on the photo. */
  overlay?: string;
  /** Alt text for the overlay image. */
  overlayAlt?: string;
  /** Where the overlay sits on the photo. */
  overlayPosition?: 'right' | 'center';
}

export interface ProcessStickyStepsProps extends Omit<
  ComponentPropsWithoutRef<'section'>,
  'title'
> {
  /** Heading shown in the sticky column. */
  title?: ReactNode;
  /** Process steps shown as stacked cards. Defaults to a 4-step sample. */
  steps?: ProcessStickyStep[];
}

const DEFAULT_TITLE = (
  <>
    Create stunning voiceover in{' '}
    <span className="text-[#c9a96e] dark:text-[#ecd9b0]">4 simple steps</span>
  </>
);

const DEFAULT_STEPS: ProcessStickyStep[] = [
  {
    id: 'step-1',
    title: 'Write or paste script',
    description:
      "Quickly draft your message or drop in your ready-to-go text to get started instantly. Whether you're crafting a new idea, refining existing",
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=520&fit=crop',
    imageAlt: 'Notebook and pen for drafting a script',
  },
  {
    id: 'step-2',
    title: 'Choose your voice style',
    description:
      'Select from natural human-like voices, accents, and tones that fit your content. Browse through our extensive library of professional voices, each designed to match',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=520&fit=crop',
    imageAlt: 'Studio microphone for choosing a voice',
  },
  {
    id: 'step-3',
    title: 'Customize the delivery',
    description:
      'Adjust speed, pitch, pauses, and emotions for a perfect performance. Fine-tune every aspect of your voiceover to create the exact tone and pacing you need for your project.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=520&fit=crop',
    imageAlt: 'Mixing console for customizing delivery',
  },
  {
    id: 'step-4',
    title: 'Generate & download',
    description:
      "Get studio-quality audio in seconds and download instantly. Your professional voiceover is ready to use in any format, whether you're creating content for videos, podcasts, or presentations.",
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=520&fit=crop',
    imageAlt: 'Laptop ready to generate and download audio',
  },
];

const StepCard = ({
  step,
  active,
  cardRef,
}: {
  step: ProcessStickyStep;
  active: boolean;
  cardRef: (el: HTMLDivElement | null) => void;
}) => {
  return (
    <div
      ref={cardRef}
      id={step.id}
      data-reveal
      data-active={active ? 'true' : undefined}
      className={cn(
        'relative w-full scroll-mt-32 overflow-hidden rounded-3xl border bg-white p-4 transition-colors duration-300 motion-reduce:transition-none dark:bg-[#141414]',
        active
          ? 'border-[#c9a96e] dark:border-[#ecd9b0]/60'
          : 'border-[#c9a96e]/15 dark:border-[#c9a96e]/40'
      )}
    >
      <figure className="relative z-10 h-48 overflow-hidden sm:h-64 lg:h-72 rounded-2xl bg-[#c9a96e]/10 p-1.5 dark:bg-[#c9a96e]/20">
        <img
          src={step.image}
          alt={step.imageAlt}
          className="size-full rounded-[14px] object-cover object-top"
        />

        {step.overlay ? (
          <img
            src={step.overlay}
            alt={step.overlayAlt ?? ''}
            className={cn(
              'absolute z-20 scale-90 object-cover',
              step.overlayPosition === 'right' && 'top-[88px] right-[-6px]',
              step.overlayPosition === 'center' && 'top-[96px] left-1/2 -translate-x-1/2'
            )}
          />
        ) : null}
      </figure>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-16 z-30 h-20 bg-linear-to-b from-transparent to-white dark:to-[#141414]"
        aria-hidden
      />

      <div className="relative z-[33] mt-5 space-y-1.5">
        <h3 className="text-base leading-snug font-medium text-[#141414] dark:text-white">
          {step.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-[#c9a96e]/70 dark:text-[#a39e94]/80">
          {step.description}
        </p>
      </div>
    </div>
  );
};

const ProcessStickySteps = ({
  title = DEFAULT_TITLE,
  steps = DEFAULT_STEPS,
  className,
  ...props
}: ProcessStickyStepsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lockRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    const cards = cardRefs.current.filter((ref): ref is HTMLDivElement => ref !== null);
    if (!root || cards.length === 0 || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return;

        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!best || !(best.target instanceof HTMLElement)) return;

        const index = cards.indexOf(best.target as HTMLDivElement);
        if (index >= 0) {
          setActiveIndex(index);
        }
      },
      {
        root: null,
        rootMargin: '-25% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [steps]);

  const goToStep = (index: number) => {
    const target = cardRefs.current[index];
    lockRef.current = true;
    setActiveIndex(index);

    if (target) {
      // Scroll the page so the card lands just under the fixed navbar.
      smoothScrollTo(target);
    }

    window.setTimeout(
      () => {
        lockRef.current = false;
      },
      prefersReducedMotion() ? 50 : 650
    );
  };

  return (
    <section
      ref={rootRef}
      data-process-sticky-steps
      data-active-step={activeIndex}
      className={cn('w-full', className)}
      {...props}
    >
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,1.35fr)] lg:gap-16">
        <h2 data-reveal className="text-3xl leading-[1.15] font-medium tracking-tight text-balance text-[#141414] sm:text-4xl lg:sticky lg:top-32 lg:max-w-md lg:text-5xl dark:text-white">
          {title}
        </h2>

        <div className="sticky top-32 hidden h-[260px] w-px bg-[#c9a96e]/15 lg:block dark:bg-[#c9a96e]/40" />

        <div className="flex min-w-0 items-start gap-x-4 sm:gap-x-6">
          <div className="min-w-0 flex-1 space-y-8">
            {steps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                active={activeIndex === index}
                cardRef={(el) => {
                  cardRefs.current[index] = el;
                }}
              />
            ))}
          </div>

          <div className="sticky top-32 z-20 flex flex-col gap-y-1.5">
            {steps.map((step, index) => (
              <button
                key={step.id}
                type="button"
                onClick={() => goToStep(index)}
                aria-label={`Go to step ${index + 1}: ${step.title}`}
                aria-current={activeIndex === index ? 'step' : undefined}
                className={cn(
                  'flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-xs font-medium transition-colors duration-300 ease-in-out motion-reduce:transition-none',
                  'focus-visible:ring-2 focus-visible:ring-[#c9a96e] focus-visible:ring-offset-2 focus-visible:outline-none dark:ring-offset-[#141414]',
                  activeIndex === index
                    ? 'bg-[#c9a96e] text-[#0a0a0b]'
                    : 'bg-[#c9a96e]/10 text-[#c9a96e]/50 dark:bg-[#c9a96e]/20 dark:text-[#a39e94]/70'
                )}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessStickySteps;
