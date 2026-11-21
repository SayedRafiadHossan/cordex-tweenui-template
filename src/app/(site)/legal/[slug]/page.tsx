import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/site/page-hero';
import { LEGAL_DOCS, LEGAL_LINKS } from '@/data/site';
import { cn } from '@/lib/utils';

export function generateStaticParams() {
  return Object.keys(LEGAL_DOCS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<'/legal/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const doc = LEGAL_DOCS[slug];
  return doc ? { title: `${doc.title} | Cortexa`, description: doc.intro } : {};
}

const anchor = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export default function LegalPage({ params }: PageProps<'/legal/[slug]'>) {
  return (
    <Suspense fallback={<div aria-hidden="true" className="min-h-[80vh]" />}>
      <LegalDoc params={params} />
    </Suspense>
  );
}

async function LegalDoc({ params }: { params: PageProps<'/legal/[slug]'>['params'] }) {
  const { slug } = await params;
  const doc = LEGAL_DOCS[slug];
  if (!doc) notFound();

  return (
    <>
      <PageHero eyebrow={`Last updated ${doc.updated}`} title={doc.title} description={doc.intro} />

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="Legal documents" className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {LEGAL_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={l.href === `/legal/${slug}` ? 'page' : undefined}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm transition-colors lg:rounded-xl',
                    l.href === `/legal/${slug}` ? 'bg-[#c9a96e] text-[#0a0a0b]' : 'text-[#f5f1e8]/70 hover:bg-white/5 hover:text-[#f5f1e8]'
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <p className="mt-8 hidden text-xs font-medium tracking-[0.18em] text-[#a39e94] uppercase lg:block">On this page</p>
            <ul className="mt-3 hidden space-y-2 lg:block">
              {doc.sections.map((s) => (
                <li key={s.heading}>
                  <a href={`#${anchor(s.heading)}`} className="text-sm text-[#a39e94] transition-colors hover:text-[#ecd9b0]">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div data-reveal className="max-w-3xl">
            {doc.sections.map((s, i) => (
              <section key={s.heading} id={anchor(s.heading)} className="scroll-mt-28 border-t border-[#a39e94]/12 py-8 first:border-t-0 first:pt-0">
                <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  <span className="mr-3 text-[#c9a96e]">{String(i + 1).padStart(2, '0')}</span>
                  {s.heading}
                </h2>
                <p className="mt-3 leading-[1.75] text-[#f5f1e8]/70">{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
