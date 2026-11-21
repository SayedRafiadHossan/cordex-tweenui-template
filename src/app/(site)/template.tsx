import type { ReactNode } from 'react';
import ScrollReveal from '@/components/site/scroll-reveal';

/**
 * Templates remount on every navigation and sit inside each page's segment, so the
 * reveal system starts fresh per page and only after that page has hydrated.
 */
export default function SiteTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ScrollReveal />
    </>
  );
}
