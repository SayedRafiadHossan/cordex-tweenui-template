import { COMPARISON, PLANS } from '@/data/site';

const Check = () => (
  <svg viewBox="0 0 24 24" className="mx-auto size-5" fill="none" stroke="#ecd9b0" strokeWidth="2.2" role="img" aria-label="Included">
    <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Dash = () => (
  <span className="block text-center text-[#a39e94]/40" role="img" aria-label="Not included">
    —
  </span>
);

/** Feature-by-plan comparison. Scrolls sideways on small screens. */
export default function ComparisonTable() {
  return (
    <div data-reveal className="overflow-x-auto rounded-3xl border border-[#a39e94]/12 bg-[#141414]/60">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <caption className="sr-only">Compare plans</caption>
        <thead>
          <tr className="border-b border-[#a39e94]/12">
            <th scope="col" className="w-[40%] px-6 py-5 text-left font-medium text-[#a39e94]">
              Features
            </th>
            {PLANS.map((p) => (
              <th key={p.id} scope="col" className="px-4 py-5 text-center">
                <span className="block font-display text-lg font-semibold text-[#f5f1e8]">{p.name}</span>
                <span className="mt-0.5 block text-xs font-normal text-[#a39e94]">${p.monthly}/mo</span>
              </th>
            ))}
          </tr>
        </thead>
        {COMPARISON.map((group) => (
          <tbody key={group.group}>
            <tr>
              <th colSpan={4} scope="colgroup" className="bg-[#0a0a0b]/50 px-6 py-3 text-left text-xs font-medium tracking-[0.18em] text-[#ecd9b0] uppercase">
                {group.group}
              </th>
            </tr>
            {group.rows.map((row) => (
              <tr key={row.label} className="border-t border-[#a39e94]/8">
                <th scope="row" className="px-6 py-4 text-left font-normal text-[#f5f1e8]/80">
                  {row.label}
                </th>
                {row.values.map((v, i) => (
                  <td key={i} className="px-4 py-4 text-center text-[#f5f1e8]/80">
                    {v === true ? <Check /> : v === false ? <Dash /> : v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}
