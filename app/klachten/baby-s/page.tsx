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

export default function BabysPage() {
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

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#191919]">Baby's</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-[#45321A] text-white rounded-2xl p-6">
                <p className="text-white/90 leading-relaxed text-lg font-medium">
                  Chiropractische zorg voor baby's is zacht, veilig en effectief. Veel jonge kinderen hebben baat bij een vroege behandeling.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Waarom chiropractie voor baby's?</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  De geboorte is een van de meest ingrijpende fysieke ervaringen in een mensenleven — voor zowel moeder als kind. Zelfs bij een normale bevalling kan de wervelkolom van een baby onder spanning komen te staan. Dit kan leiden tot subtiele verstoringen die het zenuwstelsel beïnvloeden en zich uiten in diverse klachten.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-4">Veelvoorkomende klachten bij baby's</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[#F6F6F6] rounded-xl p-5">
                    <h3 className="font-bold text-[#191919] mb-3">KISS-syndroom</h3>
                    <ul className="space-y-2 text-sm text-[#403F3F]">
                      {[
                        'Hoofd altijd naar één kant gedraaid',
                        'Slaapproblemen en onrust',
                        'Moeite met drinken aan één borst',
                        'Asymmetrische houding',
                        'Prikkelbaarheid en overmatig huilen',
                      ].map((i, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#45321A] font-bold mt-0.5">·</span> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#F6F6F6] rounded-xl p-5">
                    <h3 className="font-bold text-[#191919] mb-3">Overige klachten</h3>
                    <ul className="space-y-2 text-sm text-[#403F3F]">
                      {[
                        'Overmatig huilen / koliek',
                        'Voedingsproblemen',
                        'Reflux',
                        'Moeite met slapen',
                        'Plagiocefalie (plat hoofd)',
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
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Hoe werkt de behandeling?</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  De behandeling van baby's verschilt sterk van die van volwassenen. Dr. Jahani gebruikt uiterst zachte technieken — vergelijkbaar met de druk van een vingertop — om de wervelkolom voorzichtig te mobiliseren. Een baby ervaart dit doorgaans als plezierig en valt soms zelfs in slaap tijdens de behandeling.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Na een uitgebreide anamnese en onderzoek wordt een persoonlijk behandelplan opgesteld. Ouders ontvangen ook thuisoefeningen en adviezen voor positionering en voeding.
                </p>
              </div>

              <div className="bg-[#F6F6F6] rounded-2xl p-6">
                <h2 className="text-xl font-extrabold text-[#191919] mb-3">Is het veilig?</h2>
                <p className="text-[#403F3F] leading-relaxed text-sm">
                  Ja. Chiropractische behandeling van zuigelingen is wetenschappelijk onderbouwd en wordt wereldwijd toegepast. Dr. Jahani is geregistreerd bij de Nederlandse Chiropractoren Associatie (NCA) en heeft specifieke ervaring met pediatrische zorg. De technieken zijn volledig aangepast aan de kwetsbaarheid van kleine lichamen.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-[#45321A] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">Maak een afspraak</h3>
                <p className="text-white/80 text-sm mb-4">Heeft uw baby klachten? Wij helpen u graag verder.</p>
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
                  {[["Kinderen", "/klachten/kinderen"], ["Zwangerschap", "/klachten/zwangerschap"], ["Nek", "/klachten/nek"]].map(([l, h]) => (
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
