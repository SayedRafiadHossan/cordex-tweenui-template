import type { Metadata } from 'next';
import PageCta from '@/components/site/page-cta';
import { PageHero, Section } from '@/components/site/page-hero';
import { CHANGELOG } from '@/data/site';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Changelog | Cortexa',
  description: 'New features, improvements and fixes, shipped every couple of weeks.',
};

const TAG_STYLE: Record<string, string> = {
  New: 'border-[#c9a96e]/40 bg-[#c9a96e]/15 text-[#ecd9b0]',
  Improved: 'border-[#a39e94]/30 bg-white/5 text-[#f5f1e8]/80',
  Security: 'border-[#ecd9b0]/30 bg-[#ecd9b0]/10 text-[#ecd9b0]',
};

export default function ChangelogPage() {
  return (
    <>
      <PageHero
        eyebrow="Changelog"
        title={
          <>
            What’s new in <span className="cx-gradient-text">Cortexa</span>
          </>
        }
        description="New features, improvements and fixes. We ship every couple of weeks."
      />

      <Section className="pt-0 sm:pt-0">
        <ol className="mx-auto max-w-4xl">
          {CHANGELOG.map((entry) => (
            <li key={entry.version} data-reveal className="grid gap-4 border-t border-[#a39e94]/12 py-12 md:grid-cols-[180px_1fr] md:gap-10">
              <div className="md:sticky md:top-28 md:self-start">
                <p className="font-display text-sm font-semibold text-[#c9a96e]">v{entry.version}</p>
                <time className="mt-1 block text-sm text-[#a39e94]">{entry.date}</time>
              </div>
              <div>
                <span className={cn('inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium', TAG_STYLE[entry.tag])}>
                  {entry.tag}
                </span>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">{entry.title}</h2>
                <ul className="mt-5 space-y-3">
                  {entry.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-[#f5f1e8]/70">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#c9a96e]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <PageCta
        title={
          <>
            Try the latest <span className="cx-gradient-text">features</span>
          </>
        }
        description="Every new feature is available on the 14-day free trial."
        label="Start building free"
        href="/pricing"
      />
    </>
  );
}
