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

export default function ArtroseSlijtage() {
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

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#191919]">Artrose / Slijtage</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-[#45321A] text-white rounded-2xl p-6">
                <p className="text-white/90 leading-relaxed text-lg font-medium">
                  Artrose treft miljoenen mensen. Chiropractie kan de verslechtering remmen, pijn verminderen en de beweeglijkheid verbeteren.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Wat is artrose?</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  Artrose is een degeneratieve gewrichtsaandoening waarbij het kraakbeen in de gewrichten geleidelijk slijt. Het treedt het meest op in de wervelkolom, knieën, heupen, handen en voeten. Naarmate het kraakbeen dunner wordt, kunnen botten tegen elkaar wrijven, wat leidt tot pijn, stijfheid en verminderde bewegelijkheid.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-4">Oorzaken en risicofactoren</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[#F6F6F6] rounded-xl p-5">
                    <h3 className="font-bold text-[#191919] mb-3">Primaire oorzaken</h3>
                    <ul className="space-y-2 text-sm text-[#403F3F]">
                      {[
                        'Veroudering (slijtage over de tijd)',
                        'Langdurige overbelasting van gewrichten',
                        'Eerdere gewrichtsblessures',
                        'Genetische aanleg',
                        'Overgewicht (extra druk op gewrichten)',
                      ].map((i, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#45321A] font-bold mt-0.5">·</span> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#F6F6F6] rounded-xl p-5">
                    <h3 className="font-bold text-[#191919] mb-3">Symptomen</h3>
                    <ul className="space-y-2 text-sm text-[#403F3F]">
                      {[
                        'Pijn bij beweging of na rust',
                        'Stijfheid, vooral \'s ochtends',
                        'Verminderde bewegingsrange',
                        'Knisperende of krakende geluiden',
                        'Zwelling rondom het gewricht',
                      ].map((i, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#45321A] font-bold mt-0.5">·</span> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Chiropractische behandeling</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Hoewel artrose niet te genezen is, kan chiropractie de progressie significant vertragen en de kwaliteit van leven verbeteren. Dr. Jahani richt zich op het verbeteren van de gewrichtsfunctie, verminderen van ontsteking en verlichten van pijn.
                </p>
                <ul className="space-y-3 text-[#403F3F]">
                  {[
                    'Zachte mobilisatietechnieken om gewrichten beweeglijk te houden',
                    'Spierversterking rondom aangedane gewrichten',
                    'Houdingscorrectie om ongelijkmatige belasting te verminderen',
                    'Voedings- en leefstijladvies om ontsteking te verminderen',
                    'Therapeutische oefeningen voor thuis',
                  ].map((i, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#45321A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#45321A] text-xs font-bold">{idx + 1}</span>
                      </span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-[#45321A] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">Maak een afspraak</h3>
                <p className="text-white/80 text-sm mb-4">Slijtage hoeft u niet te accepteren. Wij helpen u beter te bewegen.</p>
                <Link href="/#booking" className="block bg-white text-[#45321A] font-semibold text-sm text-center px-4 py-3 rounded-full hover:bg-white/90 transition-colors">
                  Afspraak maken
                </Link>
                <a href="tel:0206731800" className="block text-center text-white/80 text-sm mt-3 hover:text-white">020-673 1800</a>
              </div>
              <div className="bg-[#F6F6F6] rounded-2xl p-6">
                <h3 className="font-semibold text-[#191919] mb-3">Openingstijden</h3>
                <ul className="text-sm text-[#403F3F] space-y-1">
                  <li>Ma – Vr: 10:00 – 17:00</li>
                  <li>Za: 10:00 – 14:00</li>
                </ul>
              </div>
              <div className="bg-[#F6F6F6] rounded-2xl p-6">
                <h3 className="font-semibold text-[#191919] mb-3">Gerelateerde klachten</h3>
                <ul className="space-y-2">
                  {[['Lage Rugpijn', '/klachten/lage-rugpijn'], ['Nek', '/klachten/nek'], ['Bovenrug & Schouder', '/klachten/bovenrug-schouder']].map(([l, h]) => (
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
