'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#191919] text-white py-14 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
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
            Chiropractie specialist in Amsterdam Zuid. Maasstraat 103, 1078 HH Amsterdam.
          </p>
        </div>

        {/* Services */}
        <div>
          <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">Behandeling</div>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li><Link href="/klachten" className="hover:text-white transition-colors">Klachten</Link></li>
            <li><Link href="/behandeling" className="hover:text-white transition-colors">Behandeling</Link></li>
            <li><Link href="/techniques" className="hover:text-white transition-colors">Technieken</Link></li>
            <li><Link href="/fysio-chiro-gecombineerde-therapie" className="hover:text-white transition-colors">Fysio-Chiro Therapie</Link></li>
            <li><Link href="/behandeling/tarieven-vergoedingen" className="hover:text-white transition-colors">Tarieven & Vergoedingen</Link></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">Informatie</div>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li><Link href="/about" className="hover:text-white transition-colors">Over Ons</Link></li>
            <li><Link href="/about/meet-your-doctor" className="hover:text-white transition-colors">Ontmoet Dr. Jahani</Link></li>
            <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            <li><Link href="/videos" className="hover:text-white transition-colors">Video&apos;s</Link></li>
            <li><Link href="/office-hours" className="hover:text-white transition-colors">Openingstijden</Link></li>
            <li><Link href="/vacatures" className="hover:text-white transition-colors">Vacatures</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">Contact</div>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li>Maasstraat 103</li>
            <li>1078 HH Amsterdam</li>
            <li>
              <a href="tel:0206731800" className="hover:text-white transition-colors">020-673 1800</a>
            </li>
            <li>
              <a href="https://wa.me/31618820000" className="hover:text-white transition-colors">06-1882-0000 (WhatsApp)</a>
            </li>
            <li className="pt-1">Ma – Vr: 10:00 – 17:00</li>
            <li>Za: 10:00 – 14:00</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
        <span>© 2026 Health4Life Chiropractic Amsterdam. All rights reserved.</span>
        <span>Privacy Policy · Terms of Service</span>
      </div>
    </footer>
  );
}
