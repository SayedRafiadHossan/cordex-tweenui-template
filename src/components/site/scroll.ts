import { smoothScrollTo } from '@/lib/smooth-scroll';

/** Jump to a page section, landing just below the fixed navbar. */
export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) smoothScrollTo(el);
};
