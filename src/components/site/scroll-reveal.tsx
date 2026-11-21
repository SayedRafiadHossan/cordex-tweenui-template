'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Everything that reveals: marked elements, and the children of stagger groups. */
export const REVEAL_SELECTOR = '[data-reveal], [data-reveal-stagger] > *';

/**
 * Section-by-section reveal for the page it is rendered in.
 *
 * - `data-reveal` on an element: it fades up out of a soft blur when it scrolls in.
 *   `data-reveal="scale"` adds a slight zoom (used for big media such as the console).
 * - `data-reveal-stagger` on a container: each direct child reveals, one after another.
 *
 * Elements that enter together animate as one batch with a stagger, so each section
 * plays in reading order. They start hidden in CSS (see globals.css) so nothing
 * flashes first; reduced-motion visitors see everything at once.
 *
 * Render it inside the page's own segment (see app/(site)/template.tsx), so it runs
 * after that page has hydrated. Content that appears later, such as streamed
 * sections, is picked up as it arrives.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = new WeakSet<Element>();
    const triggers: ScrollTrigger[] = [];

    const process = () => {
      const fresh = gsap.utils.toArray<HTMLElement>(REVEAL_SELECTOR).filter((el) => !seen.has(el));
      if (fresh.length === 0) return;
      fresh.forEach((el) => seen.add(el));

      if (reduced) {
        gsap.set(fresh, { opacity: 1 });
        return;
      }

      fresh.forEach((el) => {
        const scale = el.dataset.reveal === 'scale';
        gsap.set(el, { y: scale ? 40 : 28, scale: scale ? 0.96 : 1, filter: 'blur(8px)' });
      });

      triggers.push(
        ...ScrollTrigger.batch(fresh, {
          start: 'top 90%',
          once: true,
          interval: 0.1,
          batchMax: 8,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              duration: 1,
              ease: 'expo.out',
              stagger: 0.09,
              overwrite: true,
              // Hand transforms back to CSS and component code (hover tilts, magnetic buttons).
              clearProps: 'transform,filter',
            }),
        })
      );
    };

    process();

    // Pick up content that arrives later (streamed sections, client-rendered lists).
    let frame = 0;
    const observer = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        process();
        ScrollTrigger.refresh();
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Layout settles after fonts and images load; re-measure trigger positions then.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('load', refresh);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return null;
}
