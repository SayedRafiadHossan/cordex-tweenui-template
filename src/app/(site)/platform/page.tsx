import type { Metadata } from 'next';
import ProcessStickySteps from '@/components/tweenui/process-sticky-steps';
import Features from '@/components/site/features';
import CodeCard from '@/components/site/code-card';
import PageCta from '@/components/site/page-cta';
import { ButtonLink, PageHero, Section, SectionHeader } from '@/components/site/page-hero';
import { STEPS } from '@/data/site';

export const metadata: Metadata = {
  title: 'Platform | Cortexa',
  description: 'Memory, tools, guardrails, evals and tracing: everything an AI agent needs to do real work, safely.',
};

const PRODUCTION = [
  ['Scoped access', 'Every agent gets its own revocable credentials, read-only by default.'],
  ['Human approvals', 'Route risky actions to a person in Slack or email before they happen.'],
  ['Full audit trail', 'Every thought, tool call and cost is logged and exportable.'],
  ['Data residency', 'Host your workspace in the EU or US. Your data never trains models.'],
  ['99.95% uptime', 'Redundant runners across regions, with automatic retries.'],
  ['SSO & roles', 'SAML single sign-on and fine-grained roles for every team.'],
];

const DEPLOY = [
  ['On a schedule', 'Every Monday at 9:00, every hour, or on your own cron.'],
  ['From Slack', 'Mention @cortexa in any channel and hand it a task.'],
  ['By API', 'Trigger runs from your backend with the TypeScript or Python SDK.'],
  ['In your product', 'Embed an agent in your app with a few lines of code.'],
];

const SDK_SAMPLE = `import { Cortexa } from '@cortexa/agents';

const cortexa = new Cortexa({ apiKey: process.env.CORTEXA_KEY });

// Start a run of an agent you built in the editor
const run = await cortexa.agents.run('support-resolver', {
  goal: 'Answer ticket #4821 using the refund policy',
  approvals: { 'zendesk.reply': 'auto', 'stripe.refund': 'human' },
});

for await (const step of run.stream()) {
  console.log(step.kind, step.detail);
}`;

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title={
          <>
            The operating system for <span className="cx-gradient-text">AI teammates</span>
          </>
        }
        description="Cortexa gives every agent memory, tools, rules and a way to prove it is getting better, so you can hand it real work."
      >
        <ButtonLink href="/pricing">Start building free</ButtonLink>
        <ButtonLink href="/agents" variant="outline">
          Browse templates
        </ButtonLink>
      </PageHero>

      <Features />

      <Section id="how">
        <SectionHeader eyebrow="How it works" title="From idea to working agent in an afternoon" className="mb-16" />
        <ProcessStickySteps
          title={
            <>
              Ship your first agent in <span className="text-[#ecd9b0]">4 simple steps</span>
            </>
          }
          steps={STEPS}
        />
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Deploy anywhere"
              title="Run agents wherever the work happens"
              description="Build in the visual editor, then trigger the same agent from a schedule, a chat or a line of code."
              align="left"
            />
            <ul data-reveal-stagger className="mt-10 grid gap-4 sm:grid-cols-2">
              {DEPLOY.map(([title, body]) => (
                <li key={title} className="rounded-2xl border border-[#a39e94]/12 bg-[#141414]/70 p-5">
                  <p className="font-display font-semibold">{title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#f5f1e8]/60">{body}</p>
                </li>
              ))}
            </ul>
          </div>
          <CodeCard filename="run-agent.ts" code={SDK_SAMPLE} />
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Built for production"
          title={
            <>
              Safe enough for <span className="cx-gradient-text">your legal team</span>
            </>
          }
          description="The controls security reviews ask for, switched on from day one."
        />
        <ul data-reveal-stagger className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[#a39e94]/12 bg-[#a39e94]/12 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTION.map(([title, body]) => (
            <li key={title} className="bg-[#0e0e0e] p-7">
              <span className="grid size-10 place-items-center rounded-xl border border-[#c9a96e]/30 bg-[#c9a96e]/10">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="#ecd9b0" strokeWidth="1.8" aria-hidden="true">
                  <path d="M12 3l7 3v5c0 4.5-3 8.3-7 9.5C8 19.3 5 15.5 5 11V6l7-3z" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="mt-5 font-display text-lg font-semibold">{title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#f5f1e8]/60">{body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <PageCta
        title={
          <>
            See it work on <span className="cx-gradient-text">your own data</span>
          </>
        }
        description="Spin up a workspace in two minutes, or book a 20-minute walkthrough with our team."
        label="Book a demo"
        href="/contact"
      />
    </>
  );
}
