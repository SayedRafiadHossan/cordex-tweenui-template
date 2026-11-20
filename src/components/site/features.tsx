import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Feature {
  eyebrow: string;
  title: string;
  body: string;
  className?: string;
  visual: ReactNode;
}

const Chip = ({ children, tone = 'violet' }: { children: ReactNode; tone?: 'violet' | 'coral' | 'muted' }) => (
  <span
    className={cn(
      'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px]',
      tone === 'violet' && 'bg-[#c9a96e]/20 text-[#e2c891]',
      tone === 'coral' && 'bg-[#ecd9b0]/15 text-[#ecd9b0]',
      tone === 'muted' && 'bg-white/5 text-[#a39e94]/70'
    )}
  >
    {children}
  </span>
);

/* Chips wrap in a row on narrow cards; on wide screens (lg, where this card
   spans two columns) they scatter like loose notes. */
const MemoryVisual = () => (
  <div className="mt-6 flex flex-wrap gap-2 py-2 lg:relative lg:block lg:h-40 lg:py-0">
    {[
      ['Q3 pricing deck', 'lg:left-[4%] lg:top-2'],
      ['Brand voice guide', 'lg:left-[42%] lg:top-0'],
      ['Customer: Acme Co.', 'lg:left-[16%] lg:top-16'],
      ['API docs v4', 'lg:left-[56%] lg:top-[4.5rem]'],
      ['Refund policy', 'lg:left-[30%] lg:top-[7.5rem]'],
    ].map(([label, pos], i) => (
      <span
        key={label}
        className={cn(
          'rounded-lg border border-[#a39e94]/15 bg-[#0a0a0b]/60 px-3 py-1.5 text-xs whitespace-nowrap text-[#f5f1e8]/70 shadow-lg lg:absolute',
          pos
        )}
        style={{ transform: `rotate(${[-4, 3, -2, 5, -3][i]}deg)` }}
      >
        {label}
      </span>
    ))}
  </div>
);

const GuardrailVisual = () => (
  <div className="mt-6 space-y-2">
    {[
      ['Send email to > 50 recipients', 'Needs approval', 'coral'],
      ['Refund over $500', 'Blocked', 'coral'],
      ['Read CRM records', 'Allowed', 'violet'],
      ['Post in #general', 'Allowed', 'violet'],
    ].map(([rule, state, tone]) => (
      <div key={rule} className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2 text-xs">
        <span className="text-[#f5f1e8]/70">{rule}</span>
        <Chip tone={tone as 'violet' | 'coral'}>{state}</Chip>
      </div>
    ))}
  </div>
);

const EvalVisual = () => (
  <div className="mt-6 flex h-32 items-end gap-2">
    {[42, 55, 51, 63, 70, 68, 79, 84, 88, 93].map((h, i) => (
      <span
        key={i}
        className="flex-1 rounded-t-md bg-gradient-to-t from-[#c9a96e]/30 to-[#c9a96e]"
        style={{ height: `${h}%`, opacity: 0.45 + i * 0.055 }}
      />
    ))}
  </div>
);

const ModelVisual = () => (
  <div className="mt-6 flex flex-wrap gap-2">
    {['claude-opus-5-5', 'claude-sonnet-5-5', 'claude-haiku-5-5', 'your fine-tune', 'open weights'].map(
      (m, i) => (
        <Chip key={m} tone={i === 0 ? 'coral' : i < 3 ? 'violet' : 'muted'}>
          {m}
        </Chip>
      )
    )}
    <p className="mt-2 w-full text-xs text-[#a39e94]/60">
      Router picks the cheapest model that passes your evals, per step.
    </p>
  </div>
);

/* A vertical hand-off chain, so it fits the narrowest card in the grid. */
const CrewVisual = () => (
  <ol className="mt-6">
    {[
      ['Researcher', 'finds sources'],
      ['Writer', 'drafts the brief'],
      ['Reviewer', 'checks & ships'],
    ].map(([role, task], i) => (
      <li key={role} className="relative flex items-center gap-3 pb-4 last:pb-0">
        {i < 2 ? (
          <span aria-hidden="true" className="absolute top-9 bottom-0 left-[17px] w-px bg-[#a39e94]/20" />
        ) : null}
        <span
          className={cn(
            'grid size-9 shrink-0 place-items-center rounded-full font-display text-sm font-semibold text-[#0a0a0b]',
            i === 1 ? 'bg-[#ecd9b0]' : 'bg-[#c9a96e]'
          )}
        >
          {role[0]}
        </span>
        <span className="min-w-0">
          <span className="block text-sm text-[#f5f1e8]/85">{role}</span>
          <span className="block text-xs text-[#a39e94]">{task}</span>
        </span>
      </li>
    ))}
  </ol>
);

const TraceVisual = () => (
  <div className="mt-6 space-y-1.5 font-mono text-[11px]">
    {[
      ['00:00.0', 'plan', 'violet'],
      ['00:01.2', 'web.search ✓', 'muted'],
      ['00:03.8', 'sql.query ✓', 'muted'],
      ['00:04.1', 'guardrail: approval', 'coral'],
      ['00:09.6', 'slack.post ✓', 'muted'],
    ].map(([t, e, tone]) => (
      <div key={t} className="flex items-center gap-3">
        <span className="text-[#a39e94]/40">{t}</span>
        <Chip tone={tone as 'violet' | 'coral' | 'muted'}>{e}</Chip>
      </div>
    ))}
  </div>
);

const FEATURES: Feature[] = [
  {
    eyebrow: 'Memory',
    title: 'Agents that know your business',
    body: 'Connect docs, tickets and databases once. Every agent retrieves the right context, with sources cited.',
    className: 'lg:col-span-2',
    visual: <MemoryVisual />,
  },
  {
    eyebrow: 'Guardrails',
    title: 'You stay in control',
    body: 'Set what agents can do alone, what needs a human, and what is off-limits.',
    visual: <GuardrailVisual />,
  },
  {
    eyebrow: 'Evals',
    title: 'Measure before you ship',
    body: 'Replay real tasks against every change. Ship only when quality goes up.',
    visual: <EvalVisual />,
  },
  {
    eyebrow: 'Multi-agent',
    title: 'Crews that hand off work',
    body: 'Chain specialist agents into one workflow. Each one does the part it is best at.',
    visual: <CrewVisual />,
  },
  {
    eyebrow: 'Any model',
    title: 'Bring the best model for each step',
    body: 'Mix frontier and small models in one agent, and swap them without rewriting prompts.',
    visual: <ModelVisual />,
  },
  {
    eyebrow: 'Observability',
    title: 'Every step, traced',
    body: 'See each thought, tool call and cost. Debug a run in seconds, not hours.',
    className: 'lg:col-span-2',
    visual: <TraceVisual />,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <div data-reveal-stagger className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium tracking-[0.2em] text-[#ecd9b0] uppercase">Platform</p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.035em] text-balance sm:text-5xl">
          Everything an agent needs to <span className="cx-gradient-text">work for real</span>
        </h2>
        <p className="mt-5 text-base text-[#f5f1e8]/60 sm:text-lg">
          Not another chatbot. Cortexa gives agents memory, tools, rules and a way to prove they
          are getting better.
        </p>
      </div>

      <div data-reveal-stagger className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <article
            key={f.title}
            className={cn(
              'group relative overflow-hidden rounded-3xl border border-[#a39e94]/12 bg-[#141414]/70 p-6 transition-colors duration-500 hover:border-[#c9a96e]/50',
              f.className
            )}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-[radial-gradient(closest-side,rgb(201_169_110/0.14),transparent)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />
            <p className="text-[11px] font-medium tracking-[0.2em] text-[#a39e94]/60 uppercase">{f.eyebrow}</p>
            <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#f5f1e8]/60">{f.body}</p>
            {f.visual}
          </article>
        ))}
      </div>
    </section>
  );
}
