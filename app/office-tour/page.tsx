'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export default function OfficeTourPage() {
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
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">Our Clinic</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">Virtual Office Tour</h1>
            <p className="text-[#403F3F] text-lg max-w-2xl mx-auto">
              Take a look at our modern clinic facilities
            </p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          {/* Tour Sections */}
          <div className="space-y-12">
            {/* Reception Area */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-[#F6F6F6] rounded-2xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 mx-auto mb-3 text-[#45321A]" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-sm text-[#403F3F]">Reception Area</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#191919] mb-4">Reception Area</h3>
                <p className="text-[#403F3F] leading-relaxed mb-4">
                  Our welcoming reception desk features comfortable seating where you can relax before your appointment. We maintain a calm, professional atmosphere designed to put you at ease from the moment you arrive.
                </p>
                <ul className="space-y-2 text-sm text-[#403F3F]">
                  <li className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Comfortable waiting area
                  </li>
                  <li className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Friendly, multilingual staff
                  </li>
                  <li className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Easy check-in process
                  </li>
                </ul>
              </div>
            </div>

            {/* Treatment Rooms */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-[#191919] mb-4">Treatment Rooms</h3>
                <p className="text-[#403F3F] leading-relaxed mb-4">
                  Private, modern treatment rooms equipped with state-of-the-art chiropractic tables and equipment. Each room is designed for your comfort and privacy during treatment.
                </p>
                <ul className="space-y-2 text-sm text-[#403F3F]">
                  <li className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Professional-grade adjustment tables
                  </li>
                  <li className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Clean, hygienic environment
                  </li>
                  <li className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Private treatment areas
                  </li>
                </ul>
              </div>
              <div className="bg-[#F6F6F6] rounded-2xl aspect-video flex items-center justify-center order-1 md:order-2">
                <div className="text-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 mx-auto mb-3 text-[#45321A]" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-sm text-[#403F3F]">Treatment Rooms</p>
                </div>
              </div>
            </div>

            {/* Therapeutic Equipment */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-[#F6F6F6] rounded-2xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 mx-auto mb-3 text-[#45321A]" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-sm text-[#403F3F]">Therapeutic Equipment</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#191919] mb-4">Therapeutic Equipment</h3>
                <p className="text-[#403F3F] leading-relaxed mb-4">
                  Advanced diagnostic and treatment equipment including digital X-ray capabilities for precise analysis and effective treatment planning.
                </p>
                <ul className="space-y-2 text-sm text-[#403F3F]">
                  <li className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Digital X-ray imaging
                  </li>
                  <li className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Therapeutic ultrasound
                  </li>
                  <li className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Electrical muscle stimulation
                  </li>
                </ul>
              </div>
            </div>

            {/* Wellness Area */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-[#191919] mb-4">Wellness Area</h3>
                <p className="text-[#403F3F] leading-relaxed mb-4">
                  Relaxation space for pre and post-treatment preparation. Our wellness area provides a peaceful environment to help you prepare mentally and physically for your treatment.
                </p>
                <ul className="space-y-2 text-sm text-[#403F3F]">
                  <li className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Quiet relaxation space
                  </li>
                  <li className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Health education materials
                  </li>
                  <li className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Complimentary refreshments
                  </li>
                </ul>
              </div>
              <div className="bg-[#F6F6F6] rounded-2xl aspect-video flex items-center justify-center order-1 md:order-2">
                <div className="text-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 mx-auto mb-3 text-[#45321A]" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-sm text-[#403F3F]">Wellness Area</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-[#45321A]/5 border border-[#45321A]/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#191919] mb-3">Ready to Visit?</h3>
            <p className="text-[#403F3F] mb-6 max-w-xl mx-auto">
              Experience our modern facilities in person. Book your appointment today.
            </p>
            <Link
              href="/#booking"
              className="inline-flex items-center gap-2 bg-[#45321A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#5a4228] transition-colors"
            >
              Book an Appointment
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
