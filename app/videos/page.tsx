'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export default function VideosPage() {
  const videoCategories = [
    {
      title: 'What to Expect',
      videos: [
        { title: 'Your First Visit to Health4Life', duration: '3:45' },
        { title: 'The Adjustment Process Explained', duration: '4:20' },
      ],
    },
    {
      title: 'Technique Demonstrations',
      videos: [
        { title: 'Spinal Adjustment Explained', duration: '5:10' },
        { title: 'Posture Correction Tips', duration: '6:30' },
      ],
    },
    {
      title: 'Patient Success Stories',
      videos: [
        { title: 'Recovery from Chronic Back Pain', duration: '7:15' },
        { title: 'Sports Injury Rehabilitation Journey', duration: '5:50' },
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
              <div className="text-[10px] text-[#45321A] font-semibold uppercase tracking-widest leading-none">Chiropractic</div>
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
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">Video Library</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">Educational Videos</h1>
            <p className="text-[#403F3F] max-w-2xl mx-auto leading-relaxed">
              Watch and learn about chiropractic care, treatment techniques, and real patient success stories.
            </p>
          </div>

          <div className="space-y-12">
            {videoCategories.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-6">{category.title}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.videos.map((video, i) => (
                    <div key={i} className="group cursor-pointer">
                      <div className="relative bg-[#F6F6F6] rounded-2xl overflow-hidden aspect-video mb-4 flex items-center justify-center hover:bg-[#45321A]/10 transition-colors">
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-[#45321A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white ml-1">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        {/* Duration badge */}
                        <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <h3 className="font-bold text-[#191919] group-hover:text-[#45321A] transition-colors">
                        {video.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#45321A]/5 border border-[#45321A]/20 rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#45321A] mx-auto mb-5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="white" strokeWidth="2">
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-[#191919] text-xl mb-3">Have Questions?</h3>
              <p className="text-[#403F3F] mb-6">
                If you&apos;d like to see a specific topic covered or have questions about what you&apos;ve watched, we&apos;re here to help.
              </p>
              <Link href="/#booking" className="inline-flex items-center gap-2 bg-[#45321A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#5a4228] transition-colors">
                Contact Us
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
