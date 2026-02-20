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

export default function LageRugpijnPage() {
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

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#191919]">Lage Rugpijn</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-[#45321A] text-white rounded-2xl p-6">
                <p className="text-white/90 leading-relaxed text-lg font-medium">
                  80% van de bevolking krijgt op enig moment in hun leven te maken met lage rugpijn.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Anatomie van de lage rug</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  De lage rug bestaat uit 5 lumbale wervels, tussenwervelschijven (schokdempers), posterieure gewrichten (twee per niveau), ondersteunende musculatuur en het bekken (met het heiligbeen en heupbotten verbonden via de sacro-iliacale gewrichten).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-4">Oorzaken</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[#F6F6F6] rounded-xl p-5">
                    <h3 className="font-bold text-[#191919] mb-3">Geleidelijk ontstaan</h3>
                    <ul className="space-y-2 text-sm text-[#403F3F]">
                      {[
                        'Slechte houding / weinig beweging (bureauwerk)',
                        'Eenzijdige belasting (zware tassen)',
                        'Kraakbeenslijtage / artrose',
                        'Stress, vermoeidheid, kou',
                        'Hormonale veranderingen tijdens zwangerschap',
                      ].map((i, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#45321A] font-bold mt-0.5">·</span> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#F6F6F6] rounded-xl p-5">
                    <h3 className="font-bold text-[#191919] mb-3">Plotseling ontstaan</h3>
                    <ul className="space-y-2 text-sm text-[#403F3F]">
                      {[
                        'Verkeersongelukken',
                        'Onjuiste bewegingen (bukken, draaien)',
                        'Tillen met verkeerde techniek',
                        'Sportblessures',
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
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Behandeling</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  De klachten variëren afhankelijk van de aangedane structuur (spieren, gewrichten of schijven). Verschillende oorzaken vereisen een andere aanpak — daarom begint de behandeling altijd met een uitgebreid onderzoek.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Dr. Jahani past chiropractische technieken toe om de wervelgewrichten te mobiliseren, spierspanning te verminderen en zenuwirritatie op te heffen. Aanvullend ontvangt u oefeningen, houdingsadvies en voedingsadvies om recidief te voorkomen.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-[#45321A] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">Maak een afspraak</h3>
                <p className="text-white/80 text-sm mb-4">Rugpijn hoeft u niet te accepteren. Wij helpen u.</p>
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
                  {[['Hernia', '/klachten/hernia'], ['Zwangerschap', '/klachten/zwangerschap'], ['Bovenrug & Schouder', '/klachten/bovenrug-schouder']].map(([l, h]) => (
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
