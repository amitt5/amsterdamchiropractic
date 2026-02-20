'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

const resourceCategories = [
  {
    title: 'Chiropractic Services',
    description: 'Directories, professional organisations, and wellness coaching resources.',
    links: [
      { label: 'Chiropractic Directory', href: 'https://www.chiropractic.nl', external: true },
      { label: 'Netherlands Chiropractic Association (NCA)', href: 'https://www.chiropractors.nl', external: true },
      { label: 'Dutch Chiropractic Foundation (SCN)', href: 'https://www.stichtingchiropractienederland.nl', external: true },
      { label: 'Wellness Coaching Resources', href: 'https://www.chiropractievergoeding.nl', external: true },
    ],
  },
  {
    title: 'Health & Wellness — Kids',
    description: 'Resources focused on children\'s health, development, and wellness.',
    links: [
      { label: 'Wellness for Kids', href: '#', external: false },
      { label: 'Pediatric Chiropractic Care', href: '/klachten/kinderen', external: false },
      { label: 'Baby\'s & KISS Syndrome', href: '/klachten/baby-s', external: false },
    ],
  },
  {
    title: 'Exercise & Nutrition',
    description: 'Guidance on physical activity and diet to support your spinal health.',
    links: [
      { label: 'Exercise & Nutrition Guidelines', href: '#', external: false },
      { label: 'Fitness Centres Amsterdam', href: '#', external: false },
      { label: 'Posture Correction Exercises', href: '#', external: false },
    ],
  },
  {
    title: 'Complementary Therapies',
    description: 'Explore integrative and complementary health approaches we work alongside.',
    links: [
      { label: 'Acupuncture Information', href: '#', external: false },
      { label: 'Pilates & Core Strength', href: '#', external: false },
      { label: 'Yoga for Back Pain', href: '#', external: false },
      { label: 'Naturopathy', href: '#', external: false },
      { label: 'Homeopathy', href: '#', external: false },
    ],
  },
  {
    title: 'Mind & Lifestyle',
    description: 'Resources for mental well-being, stress management, and life coaching.',
    links: [
      { label: 'Thought & Meditation', href: '#', external: false },
      { label: 'Life Coaching', href: '#', external: false },
      { label: 'Stress & Tension Headaches', href: '/klachten/hoofdpijn-spanningshoofdpijn', external: false },
    ],
  },
  {
    title: 'Dental & Other Health',
    description: 'Additional health resources including dentistry and jaw joint concerns.',
    links: [
      { label: 'Dentistry & Jaw Joint (TMJ)', href: '#', external: false },
      { label: 'Chiropractic & Dentistry Connection', href: '#', external: false },
    ],
  },
];

export default function HealthResourcesPage() {
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
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">Education</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">Health Resources</h1>
            <p className="text-[#403F3F] max-w-2xl mx-auto leading-relaxed">
              The following resources have been assembled to provide you with more chiropractic wellness care information available on the internet.
            </p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category, idx) => (
              <div key={idx} className="bg-[#F6F6F6] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#45321A] flex items-center justify-center mb-5">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="white" strokeWidth="2">
                    <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#191919] text-lg mb-2">{category.title}</h3>
                <p className="text-[#403F3F] text-sm mb-4 leading-relaxed">{category.description}</p>
                <ul className="space-y-2">
                  {category.links.map((link, i) => (
                    <li key={i}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#45321A] hover:underline flex items-center gap-1"
                        >
                          {link.label}
                          <svg viewBox="0 0 20 20" className="w-3 h-3 fill-current opacity-70">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-[#45321A] hover:underline flex items-center gap-1"
                        >
                          {link.label}
                          <svg viewBox="0 0 20 20" className="w-3 h-3 fill-current opacity-70">
                            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                          </svg>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
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

      {/* Footer */}
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
              Chiropractic Specialist and Pain Management Clinic in Amsterdam Zuid.
            </p>
          </div>
          <div>
            <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">Quick Links</div>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/techniques" className="hover:text-white transition-colors">Techniques</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
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
        <div className="max-w-6xl mx-auto px-6 mt-10 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          © 2026 Health4Life Chiropractic Amsterdam. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
