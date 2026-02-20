'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

const phases = [
  {
    num: '1',
    title: 'Phase 1 — Relief Care',
    subtitle: 'Thumbs Up to Relief',
    href: '/new-patient-center/what-to-expect/phase-1-relief-care',
    desc: 'The first goal of care is to reduce your pain and discomfort as quickly as possible. Visits may be frequent during this phase.',
    color: 'bg-[#45321A]',
  },
  {
    num: '2',
    title: 'Phase 2 — Corrective Care',
    subtitle: 'Teaming Up for Optimal Health',
    href: '/new-patient-center/what-to-expect/phase-2-corrective-care',
    desc: 'Once pain is reduced, we address the underlying structural issues to prevent recurrence and achieve lasting correction.',
    color: 'bg-[#5a4228]',
  },
  {
    num: '3',
    title: 'Phase 3 — Wellness Care',
    subtitle: 'Maintenance is Key',
    href: '/new-patient-center/what-to-expect/phase-3-wellness-care',
    desc: 'Ongoing routine care to maintain optimal spinal health and prevent problems from returning — like exercise for your spine.',
    color: 'bg-[#403F3F]',
  },
];

export default function WhatToExpectPage() {
  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">New Patient Center</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">What to Expect</h1>
            <p className="text-[#403F3F] max-w-2xl mx-auto leading-relaxed">
              Chiropractic care at Health4Life follows a structured three-phase approach, designed to take you from pain relief all the way to long-term wellness.
            </p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {phases.map((phase, i) => (
              <Link key={i} href={phase.href} className="group block">
                <div className={`${phase.color} text-white rounded-t-2xl p-6`}>
                  <div className="text-5xl font-extrabold opacity-30 mb-2">{phase.num}</div>
                  <h3 className="font-extrabold text-xl leading-tight mb-1">{phase.title}</h3>
                  <p className="text-white/80 text-sm font-medium">{phase.subtitle}</p>
                </div>
                <div className="bg-[#F6F6F6] rounded-b-2xl p-6 group-hover:shadow-lg transition-shadow">
                  <p className="text-[#403F3F] text-sm leading-relaxed mb-4">{phase.desc}</p>
                  <span className="text-[#45321A] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more
                    <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                      <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-[#45321A]/5 border border-[#45321A]/20 rounded-2xl p-8 text-center">
            <h3 className="font-bold text-[#191919] text-xl mb-3">Questions About Your Care?</h3>
            <p className="text-[#403F3F] mb-6">
              Dr. Jahani is happy to discuss your individual situation and what to expect from treatment.
            </p>
            <Link href="/#booking" className="inline-flex items-center gap-2 bg-[#45321A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#5a4228] transition-colors">
              Book a Consultation
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
