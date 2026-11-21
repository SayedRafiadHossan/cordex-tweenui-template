import type { Metadata } from 'next';
import PageCta from '@/components/site/page-cta';
import { PageHero, Section, SectionHeader } from '@/components/site/page-hero';
import { AGENT_IMG, MILESTONES, TEAM, VALUES } from '@/data/site';

export const metadata: Metadata = {
  title: 'About | Cortexa',
  description: 'We build AI agents that earn trust one step at a time. Meet the team behind Cortexa.',
};

const STATS = [
  ['2024', 'Founded'],
  ['48', 'People'],
  ['14', 'Countries'],
  ['2,400+', 'Customers'],
];

const initials = (name: string) =>
  name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            We’re building teammates, <span className="cx-gradient-text">not chatbots</span>
          </>
        }
        description="Cortexa exists so people can spend their days on the work only people can do, and hand the rest to agents they trust."
      />

      <Section className="pt-0 sm:pt-0">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal="scale" className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#a39e94]/12">
            <img src={AGENT_IMG('research-scout')} alt="Person studying alone at a desk in the evening" className="size-full object-cover" />
          </div>
          <div>
            <SectionHeader eyebrow="Our story" title="It started with one inbox" align="left" />
            <div data-reveal-stagger className="mt-6 space-y-4 leading-relaxed text-[#f5f1e8]/65">
              <p>
                In 2024, two of us were drowning in our own support email. We built an agent to help, and spent more time
                checking its work than it saved us.
              </p>
              <p>
                So we built the parts that were missing: a way to see every step, rules about what it may do alone, and tests
                that prove it is getting better. That became Cortexa.
              </p>
              <p>Today 2,400 teams use it to run agents in production, and our own agents still answer our inbox.</p>
            </div>
          </div>
        </div>
      </Section>

      <section className="border-y border-[#a39e94]/10 bg-[#0e0e0e] px-4 py-14 sm:px-6 lg:px-8">
        <dl data-reveal-stagger className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map(([value, label]) => (
            <div key={label} className="text-center">
              <dt className="sr-only">{label}</dt>
              <dd className="font-display text-4xl font-semibold tracking-tight text-[#ecd9b0] sm:text-5xl">{value}</dd>
              <dd aria-hidden="true" className="mt-2 text-sm text-[#a39e94]">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <Section>
        <SectionHeader eyebrow="What we believe" title="Four ideas we build on" className="mb-16" />
        <ul data-reveal-stagger className="grid gap-4 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <li key={v.title} className="rounded-3xl border border-[#a39e94]/12 bg-[#141414]/70 p-8">
              <span className="font-display text-sm font-semibold text-[#c9a96e]">0{i + 1}</span>
              <p className="mt-4 font-display text-xl font-semibold tracking-tight">{v.title}</p>
              <p className="mt-2 leading-relaxed text-[#f5f1e8]/60">{v.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader eyebrow="Milestones" title="How we got here" className="mb-16" />
        <ol data-reveal-stagger className="mx-auto max-w-3xl border-l border-[#a39e94]/15">
          {MILESTONES.map(([year, text]) => (
            <li key={year} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-[#c9a96e] ring-4 ring-[#0a0a0b]" />
              <p className="font-display text-lg font-semibold text-[#ecd9b0]">{year}</p>
              <p className="mt-1 leading-relaxed text-[#f5f1e8]/65">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeader eyebrow="Leadership" title="The people behind Cortexa" className="mb-16" />
        <ul data-reveal-stagger className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {TEAM.map((m) => (
            <li key={m.name} className="rounded-3xl border border-[#a39e94]/12 bg-[#141414]/70 p-6 text-center">
              <span
                aria-hidden="true"
                className="mx-auto grid size-16 place-items-center rounded-full bg-[linear-gradient(135deg,#f5f1e8,#ecd9b0_45%,#c9a96e)] font-display text-lg font-semibold text-[#0a0a0b]"
              >
                {initials(m.name)}
              </span>
              <p className="mt-4 font-medium">{m.name}</p>
              <p className="mt-0.5 text-sm text-[#a39e94]">{m.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <PageCta
        title={
          <>
            Help us build <span className="cx-gradient-text">what’s next</span>
          </>
        }
        description="We’re a small, remote team that ships fast and cares about craft. Come work with us."
        label="See open roles"
        href="/careers"
      />
    </>
  );
}
