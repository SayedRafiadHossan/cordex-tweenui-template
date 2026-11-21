import type { Metadata } from 'next';
import FaqAccordion from '@/components/tweenui/faq-accordion';
import ContactForm from '@/components/site/contact-form';
import { PageHero, Section, SectionHeader } from '@/components/site/page-hero';
import { FAQS } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact | Cortexa',
  description: 'Book a demo, ask about pricing or get help. We reply within one business day.',
};

const CHANNELS = [
  ['Sales', 'sales@cortexa.ai', 'Pricing, security reviews and volume plans.'],
  ['Support', 'support@cortexa.ai', 'Help with your workspace, any time.'],
  ['Press', 'press@cortexa.ai', 'Interviews, logos and media kit.'],
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let’s talk about <span className="cx-gradient-text">your agents</span>
          </>
        }
        description="Book a 20-minute walkthrough, ask about pricing or get help with your workspace. A human replies within one business day."
      />

      <Section className="pt-0 sm:pt-0">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div data-reveal-stagger className="space-y-4">
            {CHANNELS.map(([title, email, body]) => (
              <div key={title} className="rounded-3xl border border-[#a39e94]/12 bg-[#141414]/70 p-6">
                <p className="text-xs font-medium tracking-[0.18em] text-[#ecd9b0] uppercase">{title}</p>
                <a href={`mailto:${email}`} className="mt-3 block font-display text-lg font-semibold underline-offset-4 hover:text-[#ecd9b0] hover:underline">
                  {email}
                </a>
                <p className="mt-1 text-sm text-[#f5f1e8]/60">{body}</p>
              </div>
            ))}
            <div className="rounded-3xl border border-[#a39e94]/12 bg-[#141414]/70 p-6">
              <p className="text-xs font-medium tracking-[0.18em] text-[#ecd9b0] uppercase">Office</p>
              <p className="mt-3 leading-relaxed text-[#f5f1e8]/80">
                Remote-first, with a home base at
                <br />
                120 Example Street, Suite 400
                <br />
                San Francisco, CA
              </p>
            </div>
          </div>
          <div data-reveal>
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader eyebrow="FAQ" title="Before you write" description="Quick answers to the questions we hear most." align="left" />
          <FaqAccordion data-reveal-stagger items={FAQS} defaultOpen={0} className="max-w-none" />
        </div>
      </Section>
    </>
  );
}
