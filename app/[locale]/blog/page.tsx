'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import SoroBlogEmbed from '@/components/soro-blog-embed';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export default function BlogPage() {
  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-brand-dark bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-brand-primary text-sm font-semibold uppercase tracking-widest">Blog</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-brand-dark">Artikelen & Tips</h1>
            <p className="text-brand-muted max-w-2xl mx-auto leading-relaxed">
              Lees onze laatste artikelen over chiropractie, gezondheid en welzijn.
            </p>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full mt-6" />
          </div>

          <SoroBlogEmbed />
        </div>
      </section>

      <Footer />
    </div>
  );
}
