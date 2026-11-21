import { ViewTransition, type ReactNode } from 'react';
import ScrollReveal from '@/components/site/scroll-reveal';

/**
 * Templates remount on every navigation and sit inside each page's segment, so:
 * - the page transition plays here: the old page eases out, the new one rises in
 *   (keyframes `page-out` / `page-in` in globals.css; the navbar stays still);
 * - the reveal system starts fresh per page, after that page has hydrated.
 */
export default function SiteTemplate({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <div>
        {children}
        <ScrollReveal />
      </div>
    </ViewTransition>
  );
}
