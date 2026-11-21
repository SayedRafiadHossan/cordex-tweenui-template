import Link from 'next/link';
import type { POSTS } from '@/data/site';
import { cn } from '@/lib/utils';

type Post = (typeof POSTS)[number];

/** Blog post preview. `featured` lays it out wide, image beside text. */
export default function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-[#a39e94]/12 bg-[#141414]/70 transition-colors duration-500 hover:border-[#c9a96e]/45',
        featured && 'lg:grid lg:grid-cols-[1.25fr_1fr]'
      )}
    >
      <div className={cn('relative overflow-hidden', featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[420px]' : 'aspect-[16/10]')}>
        <img
          src={post.image}
          alt={post.imageAlt}
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
      </div>
      <div className={cn('flex flex-col p-6 sm:p-7', featured && 'lg:justify-center lg:p-12')}>
        <p className="flex items-center gap-3 text-xs text-[#a39e94]">
          <span className="rounded-full border border-[#c9a96e]/30 bg-[#c9a96e]/10 px-2.5 py-0.5 font-medium text-[#ecd9b0]">
            {post.category}
          </span>
          <time>{post.date}</time>
        </p>
        <h3
          className={cn(
            'mt-4 font-display font-semibold tracking-[-0.02em] text-balance',
            featured ? 'text-2xl leading-tight sm:text-4xl' : 'text-xl leading-snug'
          )}
        >
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {post.title}
          </Link>
        </h3>
        <p className={cn('mt-3 leading-relaxed text-[#f5f1e8]/60', featured ? 'text-base sm:text-lg' : 'text-sm')}>
          {post.excerpt}
        </p>
        <p className="mt-6 text-sm text-[#a39e94]">
          {post.author} · {post.readTime}
        </p>
      </div>
    </article>
  );
}
