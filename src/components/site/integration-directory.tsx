'use client';

import { useMemo, useState } from 'react';
import { ICON, INTEGRATION_CATEGORIES, INTEGRATIONS } from '@/data/site';
import FilterPills from './filter-pills';

type Category = (typeof INTEGRATION_CATEGORIES)[number];

/** Searchable, filterable directory of integrations. */
export default function IntegrationDirectory() {
  const [category, setCategory] = useState<Category>('All');
  const [query, setQuery] = useState('');

  const counts = useMemo(() => {
    const c: Partial<Record<Category, number>> = { All: INTEGRATIONS.length };
    for (const i of INTEGRATIONS) c[i.category] = (c[i.category] ?? 0) + 1;
    return c;
  }, []);

  const q = query.trim().toLowerCase();
  const shown = INTEGRATIONS.filter(
    (i) =>
      (category === 'All' || i.category === category) &&
      (!q || i.name.toLowerCase().includes(q) || i.blurb.toLowerCase().includes(q))
  );

  return (
    <div>
      <div data-reveal className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <FilterPills label="Filter integrations by category" options={INTEGRATION_CATEGORIES} value={category} onChange={setCategory} counts={counts} />
        <label className="relative block w-full lg:w-72">
          <span className="sr-only">Search integrations</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-[#a39e94]" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search integrations"
            className="h-11 w-full rounded-full border border-[#a39e94]/20 bg-[#141414] pr-4 pl-11 text-sm text-[#f5f1e8] placeholder:text-[#a39e94]/70 focus:border-[#c9a96e]/60 focus:outline-none"
          />
        </label>
      </div>

      <p className="sr-only" aria-live="polite">
        {shown.length} integrations
      </p>

      {shown.length > 0 ? (
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((i) => (
            <li
              key={i.slug}
              className="flex items-center gap-4 rounded-2xl border border-[#a39e94]/12 bg-[#141414]/70 p-4 transition-colors duration-300 hover:border-[#c9a96e]/45"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-[#a39e94]/12 bg-[#0a0a0b]">
                <img src={ICON(i.slug)} alt="" className="size-5 opacity-85" loading="lazy" />
              </span>
              <span className="min-w-0">
                <span className="block font-medium text-[#f5f1e8]">{i.name}</span>
                <span className="block truncate text-sm text-[#a39e94]">{i.blurb}</span>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 rounded-2xl border border-dashed border-[#a39e94]/20 p-10 text-center text-[#a39e94]">
          No integration matches “{query}”. Agents can still reach it through its API or an MCP server.
        </p>
      )}
    </div>
  );
}
