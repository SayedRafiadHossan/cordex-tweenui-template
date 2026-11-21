import type { ReactNode } from 'react';
import SiteShell from '@/components/site/site-shell';

/** Every page of the marketing site shares the navbar, footer and reveal system. */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
