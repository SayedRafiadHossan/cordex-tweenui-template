import type { Metadata } from 'next';
import PostCard from '@/components/site/post-card';
import { PageHero, Section } from '@/components/site/page-hero';
import { POSTS } from '@/data/site';

export const metadata: Metadata = {
  title: 'Blog | Cortexa',
  description: 'Guides, product news and customer stories about running AI agents in production.',
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Notes on building <span className="cx-gradient-text">agents that work</span>
          </>
        }
        description="Guides, product news and stories from teams running AI agents in production."
      />

      <Section className="pt-0 sm:pt-0">
        <div data-reveal>
          <PostCard post={featured} featured />
        </div>
        <div data-reveal-stagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </>
  );
}
