'use client';

import CardSpotlightGrid from '@/components/tweenui/card-spotlight-grid';
import ProcessStickySteps from '@/components/tweenui/process-sticky-steps';
import ColumnDrift from '@/components/tweenui/column-drift';
import PricingPlanSwitch from '@/components/tweenui/pricing-plan-switch';
import FaqAccordion from '@/components/tweenui/faq-accordion';
import { FAQS, FEATURED_AGENTS, PLAN_FEATURES, PLANS, RATING, STEPS, TESTIMONIALS } from '@/data/site';
import Hero from './hero';
import LogosStats from './logos-stats';
import Features from './features';
import IntegrationsOrbit from './integrations-orbit';
import PageCta from './page-cta';
import { SectionCta, SectionHeader } from './page-hero';

/** The home page: a tour of the whole product, each section linking to its own page. */
export default function Landing() {
  return (
    <>
      <Hero />
      <LogosStats />
      <Features cta={{ label: 'Explore the platform', href: '/platform' }} />

      <div id="agents" className="scroll-mt-20">
        <CardSpotlightGrid
          title={
            <>
              Start from a <span className="cx-gradient-text">ready-made agent</span>
            </>
          }
          description="Battle-tested templates for the jobs teams automate first. Clone one, connect your tools, and it is live in minutes."
          projects={FEATURED_AGENTS.map((a) => ({ ...a, href: '/agents' }))}
        />
        <SectionCta href="/agents" className="mt-0 pb-8">
          Browse all agent templates
        </SectionCta>
      </div>

      <section id="how" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="How it works"
            title="From idea to working agent in an afternoon"
            className="mb-16"
          />
          <ProcessStickySteps
            title={
              <>
                Ship your first agent in <span className="text-[#ecd9b0]">4 simple steps</span>
              </>
            }
            steps={STEPS}
          />
          <SectionCta href="/platform#how">See how the platform works</SectionCta>
        </div>
      </section>

      <IntegrationsOrbit />

      <ColumnDrift
        id="customers"
        title="Teams that put agents to work"
        description="Results from teams running Cortexa agents in production every day."
        columns={TESTIMONIALS}
        rating={RATING}
      />
      <SectionCta href="/customers" className="mt-0 pb-8">
        Read customer stories
      </SectionCta>

      <section id="pricing" className="scroll-mt-24 py-24">
        <PricingPlanSwitch
          plans={PLANS}
          features={PLAN_FEATURES}
          eyebrow="Pricing"
          heading="Simple pricing that scales with your agents"
          description="Start free for 14 days. No credit card. Switch to yearly and get two months free."
          ctaText="Start 14-day free trial"
          ctaHref="/contact"
        />
        <SectionCta href="/pricing">Compare all plans</SectionCta>
      </section>

      <section id="faq" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions, answered"
            description="Can’t find what you need? Our team replies in under an hour, and our support agent replies in seconds."
            align="left"
          />
          <FaqAccordion data-reveal-stagger items={FAQS} defaultOpen={0} className="max-w-none" />
        </div>
        <SectionCta href="/contact">Still have questions? Contact us</SectionCta>
      </section>

      <PageCta
        title={
          <>
            Hire your first <span className="cx-gradient-text">AI teammate</span> today
          </>
        }
        description="Join 2,400+ teams handing their busywork to Cortexa agents. Free for 14 days."
        label="Start building free"
        href="/pricing"
      />
    </>
  );
}
