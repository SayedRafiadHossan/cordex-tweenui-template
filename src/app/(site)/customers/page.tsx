import type { Metadata } from 'next';
import ColumnDrift from '@/components/tweenui/column-drift';
import LogosStats from '@/components/site/logos-stats';
import PageCta from '@/components/site/page-cta';
import { PageHero, Section, SectionHeader } from '@/components/site/page-hero';
import { CASE_STUDIES, RATING, TESTIMONIALS } from '@/data/site';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Customers | Cortexa',
  description: 'How fast-moving teams put Cortexa agents to work in sales, support and data.',
};

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Customers"
        title={
          <>
            Teams that put <span className="cx-gradient-text">agents to work</span>
          </>
        }
        description="From ten-person startups to companies with thousands of employees, here is what happens when busywork goes to an agent."
      />

      <LogosStats />

      <Section>
        <SectionHeader eyebrow="Case studies" title="Real work, real results" className="mb-16" />
        <div className="space-y-6">
          {CASE_STUDIES.map((cs, i) => (
            <article
              key={cs.company}
              data-reveal
              className="grid overflow-hidden rounded-3xl border border-[#a39e94]/12 bg-[#141414]/70 lg:grid-cols-2"
            >
              <div className={cn('relative min-h-64 lg:min-h-[420px]', i % 2 === 1 && 'lg:order-2')}>
                <img src={cs.image} alt={cs.imageAlt} loading="lazy" className="absolute inset-0 size-full object-cover" />
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgb(10_10_11/0.7))]" />
                <span className="absolute bottom-6 left-6 font-display text-2xl font-semibold tracking-tight text-[#f5f1e8]">
                  {cs.company}
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="text-xs font-medium tracking-[0.18em] text-[#a39e94] uppercase">{cs.industry}</p>
                <h3 className="mt-4 font-display text-2xl leading-tight font-semibold tracking-[-0.02em] text-balance sm:text-3xl">
                  {cs.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[#f5f1e8]/60">{cs.summary}</p>
                <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-[#a39e94]/12 pt-8">
                  {cs.metrics.map(([value, label]) => (
                    <div key={label}>
                      <dt className="sr-only">{label}</dt>
                      <dd className="font-display text-2xl font-semibold text-[#ecd9b0] sm:text-3xl">{value}</dd>
                      <dd aria-hidden="true" className="mt-1 text-xs leading-snug text-[#a39e94]">
                        {label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <ColumnDrift
        title="In their own words"
        description="What teams say after a few months of running Cortexa agents in production."
        columns={TESTIMONIALS}
        rating={RATING}
      />

      <PageCta
        title={
          <>
            Your team could be <span className="cx-gradient-text">next</span>
          </>
        }
        description="Start free, or book a walkthrough and we will build your first agent together."
        label="Book a demo"
        href="/contact"
      />
    </>
  );
}
