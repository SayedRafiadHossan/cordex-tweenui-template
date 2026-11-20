'use client';

import MorphingText from '@/components/tweenui/morphing-text';
import MagneticButton from '@/components/tweenui/magnetic-button';
import ShinyButton from '@/components/tweenui/shiny-button';
import PackageCommand from '@/components/tweenui/package-command';
import AgentConsole from './agent-console';
import { scrollToId } from './scroll';

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-clip pt-32 pb-20 sm:pt-40 lg:pb-28">
      {/* Background: grid + aurora blooms */}
      <div aria-hidden="true" className="cx-grid-bg pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="cx-aurora pointer-events-none absolute -top-40 left-1/2 -z-10 h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(201_169_110/0.18),transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[340px] right-[-200px] -z-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgb(236_217_176/0.08),transparent_70%)] blur-2xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8">
        <div className="text-center lg:text-left">
          <a
            href="#changelog"
            className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.04] py-1.5 pr-4 pl-1.5 text-xs font-medium text-[#a39e94] ring-1 ring-white/10 transition-colors hover:bg-white/[0.07]"
          >
            <span className="rounded-full bg-[#ecd9b0] px-2 py-0.5 text-[10px] font-semibold tracking-wider text-[#0a0a0b] uppercase">
              New
            </span>
            Multi-agent crews are live
            <span aria-hidden="true">→</span>
          </a>

          <h1 className="mt-7 font-display text-[44px] leading-[0.98] font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-[76px]">
            AI agents that
            <MorphingText
              as="span"
              words={['do the research', 'write the code', 'close tickets', 'qualify leads', 'run your ops']}
              className="mt-1 block"
              wordClassName="pb-2 text-[#ecd9b0]"
              wordAlign="left"
            />
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-pretty text-[#f5f1e8]/60 sm:text-lg lg:mx-0">
            Cortexa lets your team build, test and deploy autonomous agents that plan, use your
            tools and report back, with guardrails, evals and a full audit trail built in.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <ShinyButton
              onClick={() => scrollToId('pricing')}
              className="h-12 rounded-full px-7 text-[15px]"
            >
              Start building free
            </ShinyButton>
            <MagneticButton
              onClick={() => scrollToId('how')}
              className="border-[#a39e94]/25 bg-transparent text-[15px] text-[#f5f1e8] hover:bg-white/5"
            >
              See how it works
            </MagneticButton>
          </div>

          <div className="mx-auto mt-10 max-w-md text-left text-[#f5f1e8] [--package-accent:#ecd9b0] lg:mx-0">
            <p className="mb-2 text-xs tracking-[0.18em] text-[#a39e94]/50 uppercase">
              Or ship from code
            </p>
            <PackageCommand
              packages="@cortexa/agents"
              className="rounded-2xl border border-[#a39e94]/15 bg-[#141414]/70"
            />
          </div>
        </div>

        <AgentConsole className="mx-auto w-full max-w-xl lg:max-w-none" />
      </div>
    </section>
  );
}
