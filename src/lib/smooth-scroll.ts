import type Lenis from 'lenis';

/**
 * The page-wide Lenis instance, set by <SmoothScroll />. Null before mount,
 * and when the visitor prefers reduced motion (native scrolling is used then).
 */
let instance: Lenis | null = null;

export const setLenis = (lenis: Lenis | null) => {
  instance = lenis;
};

export const getLenis = () => instance;

/**
 * Scroll the page to an element or offset, smoothly when Lenis is running.
 * Elements land at their CSS `scroll-margin-top` (e.g. `scroll-mt-24`), which
 * both Lenis and native scrolling respect, so that is where to tune the gap.
 */
export const smoothScrollTo = (target: Element | number) => {
  if (instance) {
    instance.scrollTo(target as HTMLElement | number);
    return;
  }
  if (typeof target === 'number') window.scrollTo({ top: target });
  else target.scrollIntoView({ block: 'start' });
};

/** Pause or resume page scrolling (e.g. while a full-screen menu is open). */
export const setScrollLocked = (locked: boolean) => {
  if (!instance) return;
  if (locked) instance.stop();
  else instance.start();
};
