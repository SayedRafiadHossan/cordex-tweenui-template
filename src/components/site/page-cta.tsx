'use client';

import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import CtaStarfall from '@/components/tweenui/cta-starfall';

/** The starfall call-to-action that closes every page, with its button routed to a page. */
export default function PageCta({
  title,
  description,
  label,
  href,
}: {
  title: ReactNode;
  description: string;
  label: string;
  href: string;
}) {
  const router = useRouter();
  return (
    <div id="cta" className="scroll-mt-20">
      <CtaStarfall
        title={title}
        description={description}
        action={{ label, onClick: () => router.push(href) }}
      />
    </div>
  );
}
