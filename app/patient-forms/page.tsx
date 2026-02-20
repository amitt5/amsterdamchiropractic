'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export default function PatientFormsPage() {
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
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">New Patients</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">Patient Forms</h1>
            <p className="text-[#403F3F] text-lg max-w-2xl mx-auto">
              Download and complete before your first visit
            </p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          {/* Instructions */}
          <div className="bg-[#45321A]/5 border border-[#45321A]/20 rounded-2xl p-6 md:p-8 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#45321A] flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="white" strokeWidth="2">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#191919] mb-2 text-lg">Instructions</h3>
                <p className="text-[#403F3F] text-sm leading-relaxed">
                  Please complete these forms and bring them to your first appointment, or email them to{' '}
                  <a href="mailto:Dr_mJahani@yahoo.ca" className="text-[#45321A] font-semibold hover:underline">
                    Dr_mJahani@yahoo.ca
                  </a>{' '}
                  24 hours before your visit.
                </p>
              </div>
            </div>
          </div>

          {/* Form Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Form 1 */}
            <div className="bg-[#F6F6F6] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-[#45321A] flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-[#191919] mb-2 text-lg">New Patient Intake Form</h3>
              <p className="text-[#403F3F] text-sm mb-5 leading-relaxed">
                Basic contact information, insurance details, and reason for visit.
              </p>
              <button className="w-full bg-[#45321A] text-white text-sm font-semibold py-3 rounded-full hover:bg-[#5a4228] transition-colors flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download PDF
              </button>
            </div>

            {/* Form 2 */}
            <div className="bg-[#F6F6F6] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-[#45321A] flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-[#191919] mb-2 text-lg">Health History Questionnaire</h3>
              <p className="text-[#403F3F] text-sm mb-5 leading-relaxed">
                Detailed medical history, current symptoms, and previous treatments.
              </p>
              <button className="w-full bg-[#45321A] text-white text-sm font-semibold py-3 rounded-full hover:bg-[#5a4228] transition-colors flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download PDF
              </button>
            </div>

            {/* Form 3 */}
            <div className="bg-[#F6F6F6] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-[#45321A] flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-[#191919] mb-2 text-lg">Consent & Privacy Forms</h3>
              <p className="text-[#403F3F] text-sm mb-5 leading-relaxed">
                Treatment consent, privacy policy, and GDPR compliance documentation.
              </p>
              <button className="w-full bg-[#45321A] text-white text-sm font-semibold py-3 rounded-full hover:bg-[#5a4228] transition-colors flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download PDF
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-10 text-center">
            <p className="text-[#403F3F] text-sm mb-4">
              Need help or have questions about the forms?
            </p>
            <Link
              href="/#booking"
              className="text-[#45321A] font-semibold text-sm hover:underline inline-flex items-center gap-1.5"
            >
              Contact us or book your first appointment
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
