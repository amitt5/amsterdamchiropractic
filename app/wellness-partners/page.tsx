'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export default function WellnessPartnersPage() {
  const partners = [
    {
      title: 'Physiotherapy Partners',
      desc: 'Collaborative rehabilitation and movement therapy for comprehensive musculoskeletal care.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
          <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Nutritional Counseling',
      desc: 'Holistic dietary guidance and wellness coaching to support your recovery and long-term health.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Sports Medicine Specialists',
      desc: 'Performance optimization, injury prevention, and specialized care for athletes at all levels.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Pain Management Coordination',
      desc: 'Multidisciplinary pain treatment strategies for complex and chronic pain conditions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
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
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">Collaborative Care</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">Wellness Partners</h1>
            <p className="text-[#403F3F] max-w-2xl mx-auto leading-relaxed mb-8">
              We work closely with trusted healthcare professionals to provide comprehensive, coordinated care that addresses all aspects of your health and wellness.
            </p>
          </div>

          <div className="bg-[#45321A]/5 border border-[#45321A]/20 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-[#45321A] flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#191919] text-lg mb-2">Our Collaborative Approach</h3>
                <p className="text-[#403F3F] text-sm leading-relaxed">
                  Your health is multifaceted, and sometimes the best outcomes come from a team approach. We maintain strong referral relationships with specialists across multiple disciplines to ensure you receive the most appropriate care for your specific needs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-[#F6F6F6] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-[#45321A] flex items-center justify-center mb-5">
                  {partner.icon}
                </div>
                <h3 className="font-bold text-[#191919] text-xl mb-3">{partner.title}</h3>
                <p className="text-[#403F3F] leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-white rounded-2xl p-10 shadow-sm border border-[#45321A]/10">
            <h3 className="font-bold text-[#191919] text-2xl mb-4">Need a Referral?</h3>
            <p className="text-[#403F3F] mb-6 max-w-2xl mx-auto">
              If your condition requires specialized care beyond chiropractic treatment, we&apos;ll connect you with the right professionals in our trusted network.
            </p>
            <Link href="/#booking" className="inline-flex items-center gap-2 bg-[#45321A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#5a4228] transition-colors">
              Discuss Your Needs
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
