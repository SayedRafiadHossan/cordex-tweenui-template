'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Everything that reveals: marked elements, and the children of stagger groups. */
export const REVEAL_SELECTOR = '[data-reveal], [data-reveal-stagger] > *';

/**
 * Section-by-section reveal for the whole page.
 *
 * - `data-reveal` on an element: it fades up out of a soft blur when it scrolls in.
 *   `data-reveal="scale"` adds a slight zoom (used for big media such as the console).
 * - `data-reveal-stagger` on a container: each direct child reveals, one after another.
 *
 * Elements that enter together are animated as one batch with a stagger, so each
 * section plays in reading order. They start hidden in CSS (see globals.css) so
 * there is no flash before this runs; reduced-motion visitors see everything at once.
 *
 * Render once, after the page content.
 */
export default function ScrollReveal() {
  useGSAP(() => {
    const targets = gsap.utils.toArray<HTMLElement>(REVEAL_SELECTOR);
    if (targets.length === 0) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(targets, { opacity: 1 });
      return;
    }

    targets.forEach((el) => {
      const scale = el.dataset.reveal === 'scale';
      gsap.set(el, { y: scale ? 40 : 28, scale: scale ? 0.96 : 1, filter: 'blur(8px)' });
    });

    ScrollTrigger.batch(targets, {
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
    });

    // Layout settles after fonts and images load; re-measure trigger positions then.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    return () => window.removeEventListener('load', refresh);
  });

  return null;
}
