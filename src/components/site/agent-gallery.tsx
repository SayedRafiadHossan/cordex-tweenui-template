'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AGENT_CATEGORIES, AGENT_TEMPLATES, ICON, type AgentCategory } from '@/data/site';
import FilterPills from './filter-pills';

/** Filterable grid of agent templates. */
export default function AgentGallery() {
  const [category, setCategory] = useState<AgentCategory>('All');

  const counts = useMemo(() => {
    const c: Partial<Record<AgentCategory, number>> = { All: AGENT_TEMPLATES.length };
    for (const a of AGENT_TEMPLATES) c[a.category] = (c[a.category] ?? 0) + 1;
    return c;
  }, []);

  const shown = category === 'All' ? AGENT_TEMPLATES : AGENT_TEMPLATES.filter((a) => a.category === category);

  return (
    <div>
      <div data-reveal>
        <FilterPills label="Filter templates by team" options={AGENT_CATEGORIES} value={category} onChange={setCategory} counts={counts} />
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} templates
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((agent) => (
          <article
            key={agent.title}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#a39e94]/12 bg-[#141414]/70 transition-colors duration-500 hover:border-[#c9a96e]/45"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={agent.image}
                alt={agent.imageAlt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgb(10_10_11/0.85))]" />
              <span className="absolute top-4 left-4 rounded-full bg-[#0a0a0b]/70 px-3 py-1 text-xs font-medium text-[#ecd9b0] backdrop-blur">
                {agent.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold tracking-tight">{agent.title}</h3>
              <p className="mt-1.5 text-sm text-[#f5f1e8]/60">{agent.excerpt}</p>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#a39e94]/10 pt-5">
                <div className="flex items-center gap-2" aria-label="Works with">
                  {agent.tools.map((slug) => (
                    <span key={slug} className="grid size-8 place-items-center rounded-lg border border-[#a39e94]/12 bg-[#0a0a0b]/60">
                      <img src={ICON(slug)} alt={slug} className="size-4 opacity-80" loading="lazy" />
                    </span>
                  ))}
                </div>
                <span className="text-right text-xs text-[#a39e94]">
                  Saves <span className="block font-display text-sm font-semibold text-[#ecd9b0]">{agent.saves}</span>
                </span>
              </div>
            </div>
            <Link href="/contact" className="absolute inset-0 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ecd9b0]">
              <span className="sr-only">Use the {agent.title} template</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
