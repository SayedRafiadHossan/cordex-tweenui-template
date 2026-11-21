import type { Metadata } from 'next';
import Link from 'next/link';
import PageCta from '@/components/site/page-cta';
import { ButtonLink, PageHero, Section, SectionHeader } from '@/components/site/page-hero';
import { PERKS, ROLES } from '@/data/site';

export const metadata: Metadata = {
  title: 'Careers | Cortexa',
  description: 'Join a small, remote team building AI agents people can trust.',
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Do the best work <span className="cx-gradient-text">of your career</span>
          </>
        }
        description="We’re a remote team of 48 across 14 countries, building the platform teams trust to run AI agents in production."
      >
        <ButtonLink href="#roles">See open roles</ButtonLink>
        <ButtonLink href="/about" variant="outline">
          About us
        </ButtonLink>
      </PageHero>

      <Section className="pt-0 sm:pt-0">
        <SectionHeader eyebrow="Benefits" title="Built for people who do deep work" className="mb-16" />
        <ul data-reveal-stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PERKS.map(([title, body]) => (
            <li key={title} className="rounded-3xl border border-[#a39e94]/12 bg-[#141414]/70 p-7">
              <p className="font-display text-lg font-semibold">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#f5f1e8]/60">{body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="roles">
        <SectionHeader eyebrow="Open roles" title={`${ROLES.length} positions open`} className="mb-12" />
        <ul data-reveal-stagger className="mx-auto max-w-4xl divide-y divide-[#a39e94]/12 overflow-hidden rounded-3xl border border-[#a39e94]/12 bg-[#141414]/60">
          {ROLES.map((role) => (
            <li key={role.title}>
              <Link
                href="/contact"
                className="group flex flex-col gap-3 p-6 transition-colors duration-300 hover:bg-[#c9a96e]/[0.06] focus-visible:bg-[#c9a96e]/[0.06] focus-visible:outline-none sm:flex-row sm:items-center sm:justify-between"
              >
                <span>
                  <span className="block font-medium text-[#f5f1e8]">{role.title}</span>
                  <span className="mt-1 block text-sm text-[#a39e94]">
                    {role.team} · {role.location} · {role.type}
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#ecd9b0]">
                  Apply
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <PageCta
        title={
          <>
            Don’t see <span className="cx-gradient-text">your role?</span>
          </>
        }
        description="We hire exceptional people before we have the perfect opening. Tell us what you’d build."
        label="Get in touch"
        href="/contact"
      />
    </>
  );
}
