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

export default function HoofdpijnMigrainePage() {
  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-4">
            <Link href="/klachten" className="text-[#45321A] text-sm hover:underline flex items-center gap-1">
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current rotate-180"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg>
              Alle klachten
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#191919]">Hoofdpijn & Migraine</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-[#45321A] text-white rounded-2xl p-6">
                <p className="text-white/90 leading-relaxed">
                  Iedereen krijgt weleens hoofdpijn. Migraine treft ongeveer <strong className="text-white">1 op de 10 volwassenen</strong> en 5% van de kinderen voor de leeftijd van 11 jaar.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-4">Soorten migraine</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[#F6F6F6] rounded-xl p-5">
                    <h3 className="font-bold text-[#191919] mb-2">Migraine met aura</h3>
                    <p className="text-[#403F3F] text-sm leading-relaxed">
                      Begint met visuele stoornissen zoals flikkeren en vlekken voor de ogen, gevolgd door stekende pijn aan één kant van het hoofd.
                    </p>
                  </div>
                  <div className="bg-[#F6F6F6] rounded-xl p-5">
                    <h3 className="font-bold text-[#191919] mb-2">Migraine zonder aura</h3>
                    <p className="text-[#403F3F] text-sm leading-relaxed">
                      Veroorzaakt pijn rondom één oog of aan één kant van het gezicht, zonder voorafgaande visuele waarschuwingssignalen.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Triggers</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Bepaalde voedingsmiddelen, medicijnen of alcohol kunnen migraineaanvallen uitlokken — denk aan rode wijn, chocolade en oude kazen. Bij vrouwen is er ook een verband met de menstruatiecyclus.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Behandeling</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Dr. Jahani start met een uitgebreid gesprek over de aard en geschiedenis van de hoofdpijn, gevolgd door een lichamelijk onderzoek inclusief beoordeling van wervel- en gewrichtsmobiliteit.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Druktechnieken op de wervels verbeteren de spier- en zenuwfunctie. Aanvullend ontvangt u adviezen over houding, ergonomie, oefeningen en voeding om aanvallen te verminderen.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-[#45321A] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">Afspraak maken</h3>
                <Link href="/#booking" className="block bg-white text-[#45321A] font-semibold text-sm text-center px-4 py-3 rounded-full hover:bg-white/90 transition-colors">
                  Online boeken
                </Link>
                <a href="tel:0206731800" className="block text-center text-white/80 text-sm mt-3 hover:text-white">020-673 1800</a>
              </div>
              <div className="bg-[#F6F6F6] rounded-2xl p-6">
                <h3 className="font-semibold text-[#191919] mb-3">Gerelateerde klachten</h3>
                <ul className="space-y-2">
                  {[['Spanningshoofdpijn', '/klachten/hoofdpijn-spanningshoofdpijn'], ['Nekklachten', '/klachten/nek'], ['Whiplash', '/klachten/whiplash']].map(([l, h]) => (
                    <li key={h}><Link href={h} className="text-sm text-[#45321A] hover:underline">{l}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
