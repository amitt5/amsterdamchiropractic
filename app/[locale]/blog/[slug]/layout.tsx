import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-posts';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const base = 'https://www.amsterdamchiropractic.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
    alternates: {
      canonical: `${base}/${locale}/blog/${slug}`,
      languages: {
        nl: `${base}/nl/blog/${slug}`,
        en: `${base}/en/blog/${slug}`,
      },
    },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
