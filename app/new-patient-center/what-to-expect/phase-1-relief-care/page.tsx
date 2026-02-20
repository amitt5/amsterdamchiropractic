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

export default function Phase1Page() {
  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">Phase 1 of 3</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-3 text-[#191919]">Relief Care</h1>
            <p className="text-2xl font-bold text-[#45321A]">Thumbs Up to Relief</p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          <div className="prose prose-lg max-w-none text-[#403F3F] space-y-6">
            <div className="bg-[#45321A] text-white rounded-2xl p-8 mb-8">
              <p className="text-white/90 leading-relaxed text-lg">
                During the first phase of care, the primary goal is to reduce your symptoms as quickly as possible — and help you feel better.
              </p>
            </div>

            <p className="leading-relaxed">
              Depending on the severity of your problem, it is common to need frequent visits during this phase — sometimes daily, or 2–3 times per week. As your symptoms improve, the frequency of visits is reduced.
            </p>

            <div className="bg-[#F6F6F6] rounded-2xl p-6">
              <h3 className="text-[#191919] font-bold text-lg mb-3">An important thing to understand:</h3>
              <p className="leading-relaxed">
                <strong className="text-[#191919]">Pain is a very poor indicator of health.</strong> In fact, pain and other symptoms frequently only appear after a disease or other condition has become advanced. The same is true in reverse — pain may disappear well before the underlying problem has actually been corrected.
              </p>
            </div>

            <p className="leading-relaxed">
              Just because your pain is gone does not mean that your spine is fully healed. Most patients feel significantly better before their spine has fully corrected — which is why it is important to continue with care even after symptoms subside.
            </p>

            <p className="leading-relaxed">
              Think of it like an iceberg: the pain you feel is just the tip. Below the surface, there may be underlying joint dysfunction, nerve irritation, or structural issues that need to be addressed during the next phase of care.
            </p>

            <div className="flex gap-4 mt-8">
              <Link href="/new-patient-center/what-to-expect/phase-2-corrective-care" className="bg-[#45321A] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#5a4228] transition-colors text-sm">
                Next: Phase 2 — Corrective Care →
              </Link>
              <Link href="/new-patient-center/what-to-expect" className="border border-[#45321A] text-[#45321A] font-semibold px-6 py-3 rounded-full hover:bg-[#45321A]/5 transition-colors text-sm">
                Back to Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
