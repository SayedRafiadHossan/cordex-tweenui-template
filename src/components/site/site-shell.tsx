'use client';

import { useEffect, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import NavbarPillGlide from '@/components/tweenui/navbar-pill-glide';
import FooterWordmarkRise from '@/components/tweenui/footer-wordmark-rise';
import { FOOTER_COLUMNS, LEGAL_LINKS, NAV_LINKS } from '@/data/site';
import { getLenis } from '@/lib/smooth-scroll';
import LogoMark from './logo';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com', icon: 'github' as const },
  { label: 'X', href: 'https://x.com', icon: 'x' as const },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' as const },
];

/**
 * The frame every page shares: navbar and footer. It stays mounted while you move
 * between pages, so per-page work is keyed on the pathname. The reveal system runs
 * per page from app/(site)/template.tsx.
 */
export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // New page: start at the top (Lenis keeps its own scroll position).
  useEffect(() => {
    if (window.location.hash) return;
    getLenis()?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return (
    <NavbarPillGlide
      brand="Cortexa"
      logo={<LogoMark />}
      homeHref="/"
      currentHref={pathname}
      links={NAV_LINKS}
      primaryAction={{ label: 'Start free', href: '/pricing' }}
      secondaryAction={{ label: 'Book a demo', href: '/contact' }}
      socials={SOCIALS}
      email="hello@cortexa.ai"
    >
      <main>{children}</main>

      <FooterWordmarkRise
        key={`footer-${pathname}`}
        brand="Cortexa"
        logo={<LogoMark />}
        description="The platform for AI agents that plan, act and report back, safely."
        columns={FOOTER_COLUMNS}
        socials={SOCIALS.map((s) => ({ ...s }))}
        legal={LEGAL_LINKS}
        copyright="© 2026 Cortexa, Inc."
      />
    </NavbarPillGlide>
  );
}
