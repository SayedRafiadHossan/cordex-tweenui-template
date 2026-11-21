import type { Metadata } from 'next';
import AgentGallery from '@/components/site/agent-gallery';
import PageCta from '@/components/site/page-cta';
import { ButtonLink, PageHero, Section } from '@/components/site/page-hero';

export const metadata: Metadata = {
  title: 'Agent templates | Cortexa',
  description: 'Ready-made AI agents for sales, support, data, engineering, operations and research. Clone one and go live in minutes.',
};

export default function AgentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Agent templates"
        title={
          <>
            Start from a <span className="cx-gradient-text">ready-made agent</span>
          </>
        }
        description="Battle-tested templates for the jobs teams automate first. Each one comes with tools, guardrails and evals already wired up."
      />

      <Section className="pt-0 sm:pt-0">
        <AgentGallery />
      </Section>

      <Section className="pt-0 sm:pt-0">
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl border border-[#c9a96e]/25 bg-[radial-gradient(120%_140%_at_100%_0%,rgb(201_169_110/0.18),transparent_55%),#141414] p-8 sm:p-12"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-[#ecd9b0] uppercase">Custom agents</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Don’t see your use case?
            </h2>
            <p className="mt-4 text-[#f5f1e8]/60">
              Describe the job and our solutions team will help you build it, usually in a single session.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Talk to an expert</ButtonLink>
            <ButtonLink href="/platform" variant="outline">
              How agents work
            </ButtonLink>
          </div>
        </div>
      </Section>

      <PageCta
        title={
          <>
            Clone a template, <span className="cx-gradient-text">ship it today</span>
          </>
        }
        description="Every template is free to try on any plan, including the 14-day trial."
        label="Start building free"
        href="/pricing"
      />
    </>
  );
}
