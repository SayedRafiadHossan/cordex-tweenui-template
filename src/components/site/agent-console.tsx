'use client';

import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react';
import { cn } from '@/lib/utils';

type StepKind = 'think' | 'tool' | 'done';

interface Step {
  kind: StepKind;
  label: string;
  detail: string;
}

interface Scenario {
  prompt: string;
  steps: Step[];
}

const SCENARIOS: Scenario[] = [
  {
    prompt: 'Find 20 fintech leads in Berlin and draft intro emails',
    steps: [
      { kind: 'think', label: 'Planning', detail: 'Split into: search, enrich, qualify, draft' },
      { kind: 'tool', label: 'web.search', detail: '"Series A fintech Berlin 2026" → 64 results' },
      { kind: 'tool', label: 'crm.enrich', detail: 'Matched 41 companies, found 27 decision makers' },
      { kind: 'think', label: 'Qualifying', detail: 'Scored on ICP fit, kept top 20 (avg 0.86)' },
      { kind: 'tool', label: 'gmail.draft', detail: '20 personalised drafts saved for review' },
      { kind: 'done', label: 'Done in 48s', detail: 'Leads synced to HubSpot · drafts waiting in Gmail' },
    ],
  },
  {
    prompt: 'Triage new support tickets and resolve the easy ones',
    steps: [
      { kind: 'think', label: 'Planning', detail: 'Read queue, classify, answer from docs, escalate rest' },
      { kind: 'tool', label: 'zendesk.list', detail: '37 open tickets since 09:00' },
      { kind: 'tool', label: 'docs.retrieve', detail: 'Grounded 22 answers in the help center' },
      { kind: 'think', label: 'Checking', detail: 'Confidence ≥ 0.9 on 19 replies, 3 flagged for a human' },
      { kind: 'tool', label: 'zendesk.reply', detail: '19 tickets solved, 15 tagged & routed' },
      { kind: 'done', label: 'Done in 1m 12s', detail: 'Median first response: 9s · CSAT forecast 4.7' },
    ],
  },
  {
    prompt: 'Summarise last week’s product metrics for the team',
    steps: [
      { kind: 'think', label: 'Planning', detail: 'Pull KPIs, compare week over week, write brief' },
      { kind: 'tool', label: 'bigquery.sql', detail: 'Queried events_*, 4.2M rows scanned' },
      { kind: 'tool', label: 'charts.render', detail: 'Built 3 charts: activation, retention, revenue' },
      { kind: 'think', label: 'Writing', detail: 'Activation +6.4%, churn −1.1pt, one anomaly found' },
      { kind: 'tool', label: 'slack.post', detail: 'Posted brief to #product-weekly' },
      { kind: 'done', label: 'Done in 34s', detail: 'Scheduled to repeat every Monday at 09:00' },
    ],
  },
];

const KIND_STYLE: Record<StepKind, string> = {
  think: 'bg-[#a39e94]/10 text-[#a39e94]',
  tool: 'bg-[#c9a96e]/20 text-[#e2c891]',
  done: 'bg-[#ecd9b0]/15 text-[#ecd9b0]',
};

const STEP_MS = 850;
const TYPE_MS = 22;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Builds a generic plan for a prompt the visitor typed themselves. */
const customScenario = (prompt: string): Scenario => ({
  prompt,
  steps: [
    { kind: 'think', label: 'Planning', detail: 'Broke the goal into 4 sub-tasks' },
    { kind: 'tool', label: 'knowledge.search', detail: 'Pulled context from your workspace' },
    { kind: 'tool', label: 'browser.run', detail: 'Visited 12 sources, extracted key facts' },
    { kind: 'think', label: 'Reviewing', detail: 'Self-checked output against your guardrails' },
    { kind: 'tool', label: 'workspace.save', detail: 'Saved result and a full audit trail' },
    { kind: 'done', label: 'Ready for review', detail: 'Connect your tools to run this for real' },
  ],
});

export default function AgentConsole({ className }: { className?: string }) {
  const [scenario, setScenario] = useState<Scenario>(SCENARIOS[0]);
  const [typed, setTyped] = useState('');
  const [visible, setVisible] = useState(0);
  const [input, setInput] = useState('');
  const [runId, setRunId] = useState(0);
  const timers = useRef<number[]>([]);
  const auto = useRef(0);
  const runRef = useRef<(next: Scenario, loop: boolean) => void>(() => {});

  const clear = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const run = useCallback((next: Scenario, loop: boolean) => {
    clear();
    setScenario(next);
    setRunId((id) => id + 1);
    setVisible(0);

    if (prefersReducedMotion()) {
      setTyped(next.prompt);
      setVisible(next.steps.length);
      return;
    }

    setTyped('');
    const chars = Array.from(next.prompt);
    chars.forEach((_, i) => {
      timers.current.push(
        window.setTimeout(() => setTyped(chars.slice(0, i + 1).join('')), i * TYPE_MS)
      );
    });
    const typedAt = chars.length * TYPE_MS + 300;
    next.steps.forEach((_, i) => {
      timers.current.push(window.setTimeout(() => setVisible(i + 1), typedAt + i * STEP_MS));
    });
    if (loop) {
      timers.current.push(
        window.setTimeout(() => {
          auto.current = (auto.current + 1) % SCENARIOS.length;
          runRef.current(SCENARIOS[auto.current], true);
        }, typedAt + next.steps.length * STEP_MS + 3200)
      );
    }
  }, []);

  useEffect(() => {
    runRef.current = run;
    const start = window.setTimeout(() => run(SCENARIOS[0], true), 500);
    return () => {
      window.clearTimeout(start);
      clear();
    };
  }, [run]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const prompt = input.trim();
    if (!prompt) return;
    setInput('');
    run(customScenario(prompt), false);
  };

  const finished = visible >= scenario.steps.length;

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border border-[#a39e94]/15 bg-[#141414]/80 shadow-[0_40px_120px_-50px_rgb(201_169_110/0.35)] backdrop-blur-xl',
        className
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-[#a39e94]/10 px-5 py-3.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ecd9b0]/80" />
          <span className="size-2.5 rounded-full bg-[#a39e94]/40" />
          <span className="size-2.5 rounded-full bg-[#c9a96e]/80" />
        </div>
        <p className="font-mono text-[11px] tracking-wider text-[#a39e94]/60 uppercase">
          agent · run_{String(Math.max(runId, 1)).padStart(3, '0')}
        </p>
        <span className="inline-flex items-center gap-2 text-[11px] text-[#a39e94]/70">
          <span
            className={cn('size-2 rounded-full', finished ? 'bg-[#c9a96e]' : 'cx-live bg-[#ecd9b0]')}
          />
          {finished ? 'Idle' : 'Running'}
        </span>
      </div>

      {/* Prompt */}
      <div className="px-5 pt-5">
        <p className="text-[11px] font-medium tracking-[0.18em] text-[#a39e94]/50 uppercase">Goal</p>
        <p className="mt-2 min-h-[3.25rem] font-mono text-[15px] leading-relaxed text-[#f5f1e8]">
          {typed}
          {typed.length < scenario.prompt.length ? (
            <span className="cx-caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-[#ecd9b0]" />
          ) : null}
        </p>
      </div>

      {/* Steps */}
      <ol className="space-y-2 px-5 pt-3 pb-5" aria-live="polite">
        {scenario.steps.map((step, index) => (
          <li
            key={`${scenario.prompt}-${index}`}
            className={cn(
              'flex items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-all duration-500 motion-reduce:transition-none',
              index < visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0',
              step.kind === 'done' && index < visible && 'border-[#ecd9b0]/25 bg-[#ecd9b0]/[0.06]'
            )}
          >
            <span
              className={cn(
                'mt-0.5 shrink-0 rounded-md px-2 py-0.5 font-mono text-[11px] leading-5',
                KIND_STYLE[step.kind]
              )}
            >
              {step.label}
            </span>
            <span className="text-sm leading-6 text-[#f5f1e8]/75">{step.detail}</span>
          </li>
        ))}
      </ol>

      {/* Try it */}
      <form
        onSubmit={submit}
        className="flex items-center gap-2 border-t border-[#a39e94]/10 bg-[#0a0a0b]/40 px-3 py-3"
      >
        <label htmlFor="agent-goal" className="sr-only">
          Give the agent a goal
        </label>
        <input
          id="agent-goal"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Give the agent a goal…"
          className="h-10 min-w-0 flex-1 rounded-full bg-transparent px-3 text-sm text-[#f5f1e8] placeholder:text-[#a39e94]/40 focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex h-10 shrink-0 cursor-pointer items-center gap-2 rounded-full bg-[#ecd9b0] px-4 text-sm font-medium text-[#0a0a0b] transition-transform duration-300 hover:scale-[1.03] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ecd9b0]"
        >
          Run
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>
    </div>
  );
}
