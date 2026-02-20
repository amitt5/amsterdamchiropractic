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

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Algemeen</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  Pijn in de lage rug komt veel voor. Maar liefst 80% van de bevolking zal tenminste één keer in het leven lage rugpijn krijgen. Problemen in de lage rug kunnen zich op verschillende manieren uiten. Veel mensen klagen over een zeurende pijn of een stijve rug, maar de pijn kan ook gevoeld worden als een zenuwpijn (bijv. uitstralend naar de benen). Om te begrijpen hoe rugpijn ontstaat moet men eerst meer weten over de anatomie van de lage rug.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Anatomie</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  De lage rug bestaat uit 5 lendenwervels. Tussen elk van deze wervels zit een tussenwervelschijf. De tussenwervelschijf fungeert als schokdemper. Aan de achterzijde worden de wervels verbonden met elkaar door middel van twee gewrichten, één links en één rechts. Langs de wervelkolom lopen verschillende spieren, welke er onder andere voor zorgen dat we rechtop kunnen blijven zitten en staan, en kunnen bewegen.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Het bekken vormt de basis waar de wervelkolom op rust en draagt het lichaamsgewicht. Het bekken bestaat uit een centraal driehoekig gedeelte (het heiligbeen) dat een gewricht vormt aan weerszijden met de twee heupbeenderen. Deze gewrichten worden door sterke banden bij elkaar gehouden. Dit worden de Sacro-Iliacale gewrichten (SI gewrichten) genoemd.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Klachten</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  De klachten die ontstaan in de onderrug zijn afhankelijk van de structuur waar het probleem optreedt. De spieren, de gewrichten en de tussenwervelschijven op de hoogte van de lendenwervels kunnen ieder klachten veroorzaken. Ondanks dat klachten vrijwel identiek kunnen lijken, zijn de oorzaken vaak verschillend. Een goede diagnose is dus erg belangrijk. Aangezien verschillende oorzaken ook vaak verschillende behandelingen vereisen, moet er voldoende tijd worden uitgetrokken tijdens het onderzoek. Een chiropractor is volledig opgeleid om de juiste oorzaak op te sporen en vervolgens accuraat te behandelen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-4">Oorzaken</h2>
                <p className="text-[#403F3F] leading-relaxed mb-4">
                  Oorzaken van lage rugpijn of bekkenpijn zijn te verdelen in geleidelijk en plotseling.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[#F6F6F6] rounded-xl p-5">
                    <h3 className="font-bold text-[#191919] mb-3">Geleidelijke oorzaken</h3>
                    <ul className="space-y-2 text-sm text-[#403F3F]">
                      {[
                        'Weinig afwisseling in de houding en weinig beweging (zoals bij bureauwerk).',
                        'Verkeerde of eenzijdige belasting (zoals een zware tas over één schouder).',
                        'De natuurlijke veroudering van het kraakbeen in de nek (ook wel artrose, slijtage of degeneratie genoemd).',
                        'Spanning, stress, vermoeidheid, ziekte, kou, vocht enzovoort.',
                        'De veranderingen in de hormoonspiegel in een zwangerschap.',
                      ].map((i, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#45321A] font-bold mt-0.5">·</span> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#F6F6F6] rounded-xl p-5">
                    <h3 className="font-bold text-[#191919] mb-3">Plotselinge oorzaken</h3>
                    <ul className="space-y-2 text-sm text-[#403F3F]">
                      {[
                        'Een verkeersongeluk.',
                        'Een verkeerde beweging of verdraaiing, zoals bijvoorbeeld met vegen of spitten, een buk-draaibeweging (bijvoorbeeld door iets uit de kofferbak te tillen).',
                      ].map((i, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#45321A] font-bold mt-0.5">·</span> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
                  <li>Zo: Gesloten</li>
                </ul>
                <p className="text-sm text-[#403F3F] mt-3">Maasstraat 103<br />1078 HH Amsterdam</p>
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
