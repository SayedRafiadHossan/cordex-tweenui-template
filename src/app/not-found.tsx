import SiteShell from '@/components/site/site-shell';
import { ButtonLink } from '@/components/site/page-hero';
import ScrollReveal from '@/components/site/scroll-reveal';

/** 404 for any unknown URL, inside the same navbar and footer as the rest of the site. */
export default function NotFound() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-clip px-4 pt-40 pb-28 text-center sm:px-6 sm:pt-48 lg:px-8">
        <div aria-hidden="true" className="cx-grid-bg pointer-events-none absolute inset-0 -z-10" />
        <div
          aria-hidden="true"
          className="cx-aurora pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(201_169_110/0.16),transparent_70%)] blur-2xl"
        />
        <div data-reveal-stagger className="mx-auto max-w-2xl">
          <p className="cx-gradient-text font-display text-[clamp(6rem,22vw,11rem)] leading-none font-semibold tracking-[-0.06em]">404</p>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">This page wandered off</h1>
          <p className="mx-auto mt-4 max-w-md text-[#f5f1e8]/60">
            Even our best agents couldn’t find it. Try the home page, or tell us what you were looking for.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/">Back to home</ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Contact us
            </ButtonLink>
          </div>
        </div>
      </section>
      <ScrollReveal />
    </SiteShell>
  );
}
