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

export default function AboutPage() {
  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">Who We Are</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">About Us</h1>
            <p className="text-[#403F3F] max-w-2xl mx-auto leading-relaxed">
              Health4Life Chiropractic is dedicated to helping you achieve optimal health through natural, evidence-based chiropractic care in the heart of Amsterdam.
            </p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          {/* Philosophy */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-extrabold text-[#191919] mb-5">Our Philosophy</h2>
              <p className="text-[#403F3F] leading-relaxed mb-4">
                At Health4Life Chiropractic, we believe that true health goes beyond simply being free of pain or disease. Our philosophy centers on <strong>preventive wellness</strong> — helping your body function at its best so that illness and injury become less likely in the first place.
              </p>
              <p className="text-[#403F3F] leading-relaxed mb-4">
                We create <strong>tailored treatment programs</strong> for each individual patient. No two people are alike, and neither are their health needs. During your initial visit, Dr. Jahani conducts a comprehensive assessment to understand not just your symptoms, but the underlying causes — and designs a care plan to address them.
              </p>
              <p className="text-[#403F3F] leading-relaxed">
                We guide you through three phases of care — Relief, Corrective, and Wellness — so that you can enjoy long-lasting results, not just short-term pain relief.
              </p>
            </div>
            <div className="bg-[#F6F6F6] rounded-3xl p-8 space-y-5">
              {[
                { title: 'Preventive Wellness', desc: 'Treat the root cause, not just the symptom. Build lasting health.' },
                { title: 'Personalised Care', desc: 'Every treatment plan is custom-designed for your body and goals.' },
                { title: 'Evidence-Based Methods', desc: 'Multiple proven techniques selected to match your condition.' },
                { title: 'Whole-Body Approach', desc: 'We combine chiropractic, acupuncture, and soft-tissue therapy.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#45321A] flex-shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 fill-white">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-[#191919] mb-1">{item.title}</div>
                    <div className="text-[#403F3F] text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-page cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/about/meet-your-doctor" className="group bg-[#F6F6F6] rounded-2xl p-7 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-[#45321A] flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-[#191919] text-lg mb-2 group-hover:text-[#45321A] transition-colors">Meet Your Doctor</h3>
              <p className="text-[#403F3F] text-sm leading-relaxed">Learn about Dr. M. Jahani — his education, credentials, and 20+ years of clinical experience.</p>
            </Link>
            <Link href="/about/services-techniques" className="group bg-[#F6F6F6] rounded-2xl p-7 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-[#45321A] flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-[#191919] text-lg mb-2 group-hover:text-[#45321A] transition-colors">Services & Techniques</h3>
              <p className="text-[#403F3F] text-sm leading-relaxed">Overview of all treatment methods and chiropractic techniques available at our practice.</p>
            </Link>
            <Link href="/wellness-partners" className="group bg-[#F6F6F6] rounded-2xl p-7 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-[#45321A] flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-[#191919] text-lg mb-2 group-hover:text-[#45321A] transition-colors">Our Wellness Partners</h3>
              <p className="text-[#403F3F] text-sm leading-relaxed">We collaborate with trusted healthcare professionals for comprehensive, coordinated care.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
