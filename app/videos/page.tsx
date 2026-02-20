'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export default function VideosPage() {
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
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">Video Library</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">Chiropractic Videos</h1>
            <p className="text-[#403F3F] max-w-2xl mx-auto leading-relaxed">
              Educational videos on modern chiropractic care, treatment breakthroughs, and performance medicine.
            </p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          {/* Featured highlights from original site */}
          <div className="space-y-10 mb-16">
            {/* Video 1 */}
            <div className="bg-[#F6F6F6] rounded-3xl overflow-hidden flex flex-col md:flex-row gap-0">
              <div className="md:w-1/2 aspect-video md:aspect-auto relative bg-[#45321A]/10 flex items-center justify-center min-h-[220px]">
                <div className="w-20 h-20 rounded-full bg-[#45321A] flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <span className="text-[#45321A] text-xs font-semibold uppercase tracking-widest mb-3">Behandeling</span>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-4 leading-tight">
                  Moderne herniabehandeling — zonder operatie
                </h2>
                <p className="text-[#403F3F] leading-relaxed text-sm">
                  Ontdek hoe chiropractie een effectief alternatief biedt voor hernia-operaties. De meeste herniaklachten kunnen met zachte, niet-chirurgische methoden succesvol behandeld worden, waardoor patiënten sneller herstel ervaren zonder de risico&apos;s van een ingreep.
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-[#F6F6F6] rounded-3xl overflow-hidden flex flex-col md:flex-row-reverse gap-0">
              <div className="md:w-1/2 aspect-video md:aspect-auto relative bg-[#45321A]/10 flex items-center justify-center min-h-[220px]">
                <div className="w-20 h-20 rounded-full bg-[#45321A] flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <span className="text-[#45321A] text-xs font-semibold uppercase tracking-widest mb-3">Schouder</span>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-4 leading-tight">
                  Bevroren schouder — zonder injecties behandeld
                </h2>
                <p className="text-[#403F3F] leading-relaxed text-sm">
                  Een bevroren schouder (frozen shoulder) kan maanden tot jaren aanhouden. Zie hoe chiropractische behandeling en zachte mobilisatietechnieken de schoudermobiliteit herstellen zonder pijnlijke cortisoninjecties of chirurgische ingrepen.
                </p>
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-[#F6F6F6] rounded-3xl overflow-hidden flex flex-col md:flex-row gap-0">
              <div className="md:w-1/2 aspect-video md:aspect-auto relative bg-[#45321A]/10 flex items-center justify-center min-h-[220px]">
                <div className="w-20 h-20 rounded-full bg-[#45321A] flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <span className="text-[#45321A] text-xs font-semibold uppercase tracking-widest mb-3">Topsport</span>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-4 leading-tight">
                  Chiropractie voor topsporters — optimale prestaties
                </h2>
                <p className="text-[#403F3F] leading-relaxed text-sm">
                  Topatleten zoals de spelers van AC Milan vertrouwen op regelmatige chiropractische behandeling om blessures te voorkomen en topprestaties te leveren. Sporters stellen heel andere eisen aan hun lichaam — hun behandeling vraagt om een gespecialiseerde aanpak.
                </p>
                <blockquote className="mt-4 border-l-4 border-[#45321A] pl-4 italic text-[#403F3F] text-sm">
                  &ldquo;The doctor of the future will give no medicine, but will instruct his patient in the care of the human frame.&rdquo;
                  <cite className="block mt-1 not-italic font-semibold text-[#45321A]">— Thomas Edison</cite>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="bg-[#45321A]/5 border border-[#45321A]/20 rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="font-bold text-[#191919] text-xl mb-3">Vragen over uw behandeling?</h3>
              <p className="text-[#403F3F] mb-6">
                Neem contact op voor meer informatie of maak direct een afspraak.
              </p>
              <Link href="/#booking" className="inline-flex items-center gap-2 bg-[#45321A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#5a4228] transition-colors">
                Afspraak maken
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                </svg>
              </Link>
            </div>
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
              <li><Link href="/klachten" className="hover:text-white transition-colors">Klachten</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">Contact</div>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>Maasstraat 103</li>
              <li>1078 HH Amsterdam</li>
              <li>020-673 1800</li>
              <li>06-1882-0000 (WhatsApp)</li>
              <li className="pt-1">Ma – Vr: 10:00 – 17:00</li>
              <li>Za: 10:00 – 14:00</li>
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
