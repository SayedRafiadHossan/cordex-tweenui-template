import type { Metadata } from 'next';
import PricingPlanSwitch from '@/components/tweenui/pricing-plan-switch';
import FaqAccordion from '@/components/tweenui/faq-accordion';
import ComparisonTable from '@/components/site/comparison-table';
import PageCta from '@/components/site/page-cta';
import { PageHero, Section, SectionHeader } from '@/components/site/page-hero';
import { PLAN_FEATURES, PLANS, PRICING_FAQS } from '@/data/site';

export const metadata: Metadata = {
  title: 'Pricing | Cortexa',
  description: 'Simple pricing that scales with your agents. Start free for 14 days, no credit card.',
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Pay for work done, <span className="cx-gradient-text">not seats</span>
          </>
        }
        description="Start free for 14 days. No credit card. Every plan includes model usage, so there are no surprise bills from AI providers."
      />

      <section className="pb-24">
        <PricingPlanSwitch
          plans={PLANS}
          features={PLAN_FEATURES}
          eyebrow="Plans"
          heading="Choose the plan that fits your team"
          description="Switch to yearly billing and get two months free."
          ctaText="Start 14-day free trial"
          ctaHref="/contact"
        />
      </section>

      <Section className="pt-0 sm:pt-0">
        <SectionHeader eyebrow="Compare" title="Every plan, side by side" className="mb-12" />
        <ComparisonTable />
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader
            eyebrow="Billing FAQ"
            title="Questions about pricing"
            description="Need something custom, like invoicing, a security review or volume pricing? Our team is happy to help."
            align="left"
          />
          <FaqAccordion data-reveal-stagger items={PRICING_FAQS} defaultOpen={0} className="max-w-none" />
        </div>
      </Section>

      <PageCta
        title={
          <>
            Running agents <span className="cx-gradient-text">at scale?</span>
          </>
        }
        description="Talk to us about volume pricing, SSO, security reviews and a dedicated solutions engineer."
        label="Talk to sales"
        href="/contact"
      />
    </>
  );
}
