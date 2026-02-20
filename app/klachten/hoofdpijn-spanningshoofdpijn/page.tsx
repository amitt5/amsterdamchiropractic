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

export default function SpanningshoofdpijnPage() {
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

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#191919]">Spanningshoofdpijn</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">

              <div>
                <p className="text-[#403F3F] leading-relaxed">
                  Iedereen heeft er weleens last van: hoofdpijn. Er zijn vele oorzaken voor vele verschillende hoofdpijnen. Voorbeelden zijn spanningshoofdpijn, migraine, aangezichtspijn en hoofdpijn als gevolg van whiplash. Spanningshoofdpijn is de meest voorkomende hoofdpijnvorm. Een chiropractische behandeling kan veel hoofdpijnklachten verhelpen of verminderen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Symptomen</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  Spanningshoofdpijn is een drukkende pijn, die vaak als een band om het hoofd kan worden gevoeld. De pijn is voelbaar aan beide zijden van het hoofd echter kan ook eenzijdig voorkomen. De pijn ontstaat meestal vanuit de nek. De klachten kunnen de hele dag aanwezig zijn, maar ook gedurende de dag geleidelijk opkomen. Soms houdt de hoofdpijn dagenlang aan. Spanningshoofdpijn is dikwijls chronisch en kan periodiek voorkomen of zonder enige regelmaat. Overigens kan spanningshoofdpijn ook vanuit het kaakgewricht komen. In dat geval is er meestal sprake van pijn aan één kant van het hoofd.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Oorzaken</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  De pijn komt meestal vanuit de nek en heeft vaak te maken met een verkeerde beweging van de wervels in de rug en nek. Hierdoor worden spieren meer belast en omliggende zenuwen kunnen geïrriteerd raken, met hoofdpijn als gevolg. Spanningshoofdpijn wordt ook gerelateerd aan stress en vermoeidheid.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Behandeling</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Allereerst stelt de chiropractor u vragen over uw hoofdpijn en over uw algehele gezondheidstoestand. De hoofdpijn kan namelijk samenhangen met andere gezondheidsklachten. Dan volgt een grondig lichamelijk onderzoek. De chiropractor maakt gebruik van verschillende medische methoden om te kijken waar de pijn vandaan komt en hoe het gesteld is met de beweeglijkheid van de gewrichten die met de pijn te maken kunnen hebben.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Na het vraaggesprek en het onderzoek kan geconcludeerd worden dat uw klacht niet behandeld kan worden door een chiropractor en dat dit verder onderzocht moet worden. De chiropractor kan het advies geven contact op te nemen met de huisarts voor advies of om verder diagnostisch onderzoek te ondergaan.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Afhankelijk van uw klacht kan de chiropractor met de behandeling beginnen. Met behulp van druktechnieken op de wervels kunnen spieren en zenuwen weer beter gaan functioneren. Dankzij de druktechnieken verbetert de beweeglijkheid, ontspannen de spieren zich en krijgen omliggende zenuwen de ruimte om hun taken uit te voeren. Daardoor kunnen pijn en andere klachten afnemen of verdwijnen. Het resultaat van de behandeling hangt af van de ernst van de klachten; uw chiropractor laat u weten hoe het er met u voorstaat.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Naast de behandeling kan de chiropractor u advies geven over een goede houding, ergonomie, sport, oefeningen en voeding. Zowel ter voorkoming als ter genezing is beweging goed. Verkeerd bewegen kan de klachten juist verergeren. Het is daarom van groot belang dat u zich laat adviseren. Sterke rug- en nekspieren ontwikkelen is van groot belang. Hierdoor wordt uw wervelkolom meer ontzien en wordt de kans op het terug krijgen van de klacht steeds kleiner.
                </p>
              </div>

            </div>

            <div className="space-y-5">
              <div className="bg-[#45321A] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">Maak een afspraak</h3>
                <p className="text-white/80 text-sm mb-4">Neem contact op voor een vrijblijvend gesprek over uw klachten.</p>
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
                  {[['Hoofdpijn & Migraine', '/klachten/hoofdpijn-en-migraine'], ['Nekpijn', '/klachten/nek'], ['Whiplash', '/klachten/whiplash']].map(([l, h]) => (
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
