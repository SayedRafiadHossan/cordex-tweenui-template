import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PostCard from '@/components/site/post-card';
import PageCta from '@/components/site/page-cta';
import { Section, SectionHeader } from '@/components/site/page-hero';
import { POSTS, type PostBlock } from '@/data/site';


export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | Cortexa`, description: post.excerpt };
}

const Block = ({ block }: { block: PostBlock }) => {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-12 font-display text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">{block.text}</h2>;
    case 'quote':
      return (
        <blockquote className="my-10 border-l-2 border-[#c9a96e] pl-6 font-display text-xl leading-snug font-medium text-[#ecd9b0] sm:text-2xl">
          {block.text}
        </blockquote>
      );
    case 'list':
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-[#f5f1e8]/75">
              <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#c9a96e]" />
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return <p className="mt-5 text-[17px] leading-[1.75] text-[#f5f1e8]/75">{block.text}</p>;
  }
};

const initials = (name: string) =>
  name
    .split(' ')
    .map((p) => p[0])
    .join('');

/** Placeholder while the post streams in on a client navigation. Direct visits get the prerendered post. */
function PostSkeleton() {
  return (
    <div aria-hidden="true" className="mx-auto max-w-3xl animate-pulse px-4 pt-44 pb-24">
      <div className="h-4 w-24 rounded-full bg-white/5" />
      <div className="mt-10 h-12 w-full rounded-2xl bg-white/5" />
      <div className="mt-4 h-12 w-2/3 rounded-2xl bg-white/5" />
      <div className="mt-10 aspect-[16/9] rounded-3xl bg-white/5" />
    </div>
  );
}

export default function BlogPostPage({ params }: PageProps<'/blog/[slug]'>) {
  return (
    <Suspense fallback={<PostSkeleton />}>
      <Post params={params} />
    </Suspense>
  );
}

async function Post({ params }: { params: PageProps<'/blog/[slug]'>['params'] }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="relative isolate overflow-clip px-4 pt-36 pb-12 sm:px-6 sm:pt-44 lg:px-8">
          <div aria-hidden="true" className="cx-grid-bg pointer-events-none absolute inset-0 -z-10" />
          <div data-reveal-stagger className="mx-auto max-w-3xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#a39e94] transition-colors hover:text-[#ecd9b0]">
              <span aria-hidden="true">←</span> All posts
            </Link>
            <p className="mt-8 flex items-center gap-3 text-sm text-[#a39e94]">
              <span className="rounded-full border border-[#c9a96e]/30 bg-[#c9a96e]/10 px-2.5 py-0.5 text-xs font-medium text-[#ecd9b0]">
                {post.category}
              </span>
              <time>{post.date}</time>
              <span aria-hidden="true">·</span>
              {post.readTime}
            </p>
            <h1 className="mt-5 font-display text-[clamp(2rem,6vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-balance">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#f5f1e8]/60">{post.excerpt}</p>
            <div className="mt-8 flex items-center gap-3">
              <span aria-hidden="true" className="grid size-11 place-items-center rounded-full bg-[linear-gradient(135deg,#f5f1e8,#ecd9b0_45%,#c9a96e)] font-display text-sm font-semibold text-[#0a0a0b]">
                {initials(post.author)}
              </span>
              <span>
                <span className="block font-medium">{post.author}</span>
                <span className="block text-sm text-[#a39e94]">{post.authorRole}</span>
              </span>
            </div>
          </div>
        </header>

        <div className="px-4 sm:px-6 lg:px-8">
          <div data-reveal="scale" className="mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-3xl border border-[#a39e94]/12">
            <img src={post.image} alt={post.imageAlt} className="size-full object-cover" />
          </div>
          <div data-reveal className="mx-auto max-w-3xl pt-8 pb-20">
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </div>
      </article>

      <Section className="border-t border-[#a39e94]/10">
        <SectionHeader eyebrow="Keep reading" title="More from the blog" className="mb-12" />
        <div data-reveal-stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </Section>

      <PageCta
        title={
          <>
            Put these ideas <span className="cx-gradient-text">to work</span>
          </>
        }
        description="Build your first agent free for 14 days, with guardrails and evals included."
        label="Start building free"
        href="/pricing"
      />
    </>
  );
}
