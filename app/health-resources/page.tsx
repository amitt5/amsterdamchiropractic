'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export default function HealthResourcesPage() {
  const categories = [
    {
      title: 'Chiropractic Care Basics',
      articles: [
        { title: 'What is Chiropractic?', time: '5 min read' },
        { title: 'Benefits of Regular Adjustments', time: '7 min read' },
        { title: 'Understanding Spinal Health', time: '6 min read' },
      ],
    },
    {
      title: 'Common Conditions',
      articles: [
        { title: 'Managing Chronic Lower Back Pain', time: '8 min read' },
        { title: 'Neck Pain Relief Strategies', time: '6 min read' },
        { title: 'Preventing Sports Injuries', time: '5 min read' },
      ],
    },
    {
      title: 'Wellness & Prevention',
      articles: [
        { title: 'Ergonomics for Office Workers', time: '7 min read' },
        { title: 'Nutrition for Spinal Health', time: '9 min read' },
        { title: 'Sleep Posture Guidelines', time: '4 min read' },
      ],
    },
    {
      title: 'Exercise & Stretching',
      articles: [
        { title: 'Core Strengthening Exercises', time: '10 min read' },
        { title: 'Daily Stretches for Back Pain', time: '5 min read' },
        { title: 'Posture Correction Techniques', time: '8 min read' },
      ],
    },
  ];

  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen`}>
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <div className="w-9 h-9 rounded-full bg-[#45321A] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M12 2C9 2 7 5 7 8c0 2 1 3.5 2.5 4.5L9 20h6l-.5-7.5C16 11.5 17 10 17 8c0-3-2-6-5-6z" fill="white" />
              </svg>
            </div>
            <div>
              <div className="font-extrabold text-base text-[#191919] leading-tight">Health4Life</div>
              <div className="text-[#10px] text-[#45321A] font-semibold uppercase tracking-widest leading-none">Chiropractic</div>
            </div>
          </Link>
          <Link href="/" className="bg-[#45321A] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#5a4228] transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">Education</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">Health Resources</h1>
            <p className="text-[#403F3F] max-w-2xl mx-auto leading-relaxed">
              Expert guides, articles, and resources to support your wellness journey and help you understand your treatment.
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-6">{category.title}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.articles.map((article, i) => (
                    <div key={i} className="bg-[#F6F6F6] rounded-2xl p-6 hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer group">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-[#45321A]/10 group-hover:bg-[#45321A] flex items-center justify-center transition-colors">
                          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 group-hover:stroke-white stroke-[#45321A] transition-colors" strokeWidth="2">
                            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-xs text-[#403F3F] bg-white px-2 py-1 rounded-full">{article.time}</span>
                      </div>
                      <h3 className="font-bold text-[#191919] mb-2 group-hover:text-[#45321A] transition-colors">{article.title}</h3>
                      <p className="text-[#403F3F] text-sm flex items-center gap-1 group-hover:text-[#45321A] transition-colors">
                        Read article
                        <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                          <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                        </svg>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#45321A]/5 border border-[#45321A]/20 rounded-2xl p-8 text-center">
            <h3 className="font-bold text-[#191919] text-xl mb-3">Need Personalized Guidance?</h3>
            <p className="text-[#403F3F] mb-6 max-w-2xl mx-auto">
              Our team is here to answer your questions and provide tailored advice for your specific health concerns.
            </p>
            <Link href="/#booking" className="inline-flex items-center gap-2 bg-[#45321A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#5a4228] transition-colors">
              Schedule a Consultation
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
