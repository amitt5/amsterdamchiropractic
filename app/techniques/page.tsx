'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

const techniques = [
  {
    title: 'Neuro-Based Spinal Correction',
    description: 'Advanced technique focusing on the neurological component of spinal misalignment. Addresses nerve interference to restore optimal nervous system function and overall health.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Diversified Technique',
    description: 'The most common and widely recognized manual adjustment method. Uses precise, high-velocity, low-amplitude thrusts to restore proper spinal alignment and joint mobility.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Gonstead Method',
    description: 'Precision analysis and adjustment technique using detailed biomechanical assessment. Emphasizes specific, targeted adjustments based on thorough spinal evaluation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Activator Method',
    description: 'Low-force, instrument-assisted technique using a specialized adjusting tool. Ideal for patients who prefer gentle adjustments or have specific health considerations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Drop Table Technique',
    description: 'Gentle technique utilizing specialized table-assisted adjustments. The table sections drop slightly during adjustment, allowing for effective treatment with minimal force.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'SOT (Sacro-Occipital Technique)',
    description: 'Holistic cranial-sacral approach addressing the relationship between the sacrum and skull. Focuses on cerebrospinal fluid flow and overall nervous system balance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TechniquesPage() {
  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen`}>
      {/* ── NAV ──────────────────────────────────────────────────────────── */}
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

          <Link
            href="/"
            className="bg-[#45321A] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#5a4228] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">Our Methods</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">Chiropractic Techniques</h1>
            <p className="text-[#403F3F] text-lg max-w-2xl mx-auto">
              Evidence-based methods tailored to your needs
            </p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          {/* Intro */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-[#403F3F] leading-relaxed">
              At Health4Life Chiropractic, we utilize a variety of proven techniques to address your specific condition and preferences. Dr. Jahani will discuss the most appropriate approach for your individual needs during your consultation.
            </p>
          </div>

          {/* Technique Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((technique, index) => (
              <div
                key={index}
                className="bg-[#F6F6F6] rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-[#45321A] flex items-center justify-center mb-5 text-white">
                  {technique.icon}
                </div>
                <h3 className="font-bold text-[#191919] mb-3 text-lg leading-tight">
                  {technique.title}
                </h3>
                <p className="text-[#403F3F] text-sm leading-relaxed">
                  {technique.description}
                </p>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-16 bg-[#45321A]/5 border border-[#45321A]/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#45321A] flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="white" strokeWidth="2">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#191919] mb-3 text-lg">Personalized Treatment Approach</h3>
                <p className="text-[#403F3F] text-sm leading-relaxed mb-4">
                  Every patient is unique, and so is their treatment plan. During your initial consultation, Dr. Jahani will:
                </p>
                <ul className="space-y-2 text-sm text-[#403F3F]">
                  <li className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Conduct a thorough examination and assessment
                  </li>
                  <li className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Discuss your health goals and concerns
                  </li>
                  <li className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Recommend the most suitable technique(s) for your condition
                  </li>
                  <li className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Create a customized treatment plan
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-[#403F3F] mb-6">
              Questions about which technique is right for you?
            </p>
            <Link
              href="/#booking"
              className="inline-flex items-center gap-2 bg-[#45321A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#5a4228] transition-colors"
            >
              Schedule a Consultation
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#191919] text-white py-14 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#45321A] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M12 2C9 2 7 5 7 8c0 2 1 3.5 2.5 4.5L9 20h6l-.5-7.5C16 11.5 17 10 17 8c0-3-2-6-5-6z" fill="white" />
                </svg>
              </div>
              <div>
                <div className="font-extrabold text-base leading-tight">Health4Life</div>
                <div className="text-[10px] text-[#45321A] font-semibold uppercase tracking-widest leading-none">Chiropractic</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Chiropractic Specialist and Pain Management Clinic in Amsterdam Zuid. Serving patients since 2010.
            </p>
          </div>
          <div>
            <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">Quick Links</div>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">About Dr. Jahani</Link></li>
              <li><Link href="/#booking" className="hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link href="/vacatures" className="hover:text-white transition-colors">Vacatures</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">Contact</div>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>Maasstraat 103</li>
              <li>1078 HH Amsterdam</li>
              <li>020-673 1800</li>
              <li>06-1882-0000 (WhatsApp)</li>
              <li className="pt-1">Mon – Fri: 10:00 – 17:00</li>
              <li>Sat: 10:00 – 14:00</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© 2026 Health4Life Chiropractic Amsterdam. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </footer>
    </div>
  );
}
