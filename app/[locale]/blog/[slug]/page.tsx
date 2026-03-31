'use client';

import { use } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import SoroBlogEmbed from '@/components/soro-blog-embed';
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-brand-dark bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SoroBlogEmbed post={slug} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

