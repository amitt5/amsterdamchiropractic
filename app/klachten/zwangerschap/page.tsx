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

export default function ZwangerschapPage() {
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

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#191919]">Chiropractie en Zwangerschap</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">

              <div>
                <p className="text-[#403F3F] leading-relaxed">
                  Chiropractie kan een uitkomst zijn voor de zwangere vrouw. Ook met een dikke buik is het mogelijk om behandeld te worden, zelfs tot en met de uitgerekende datum. Bovendien is het veilig voor het kindje wat groeit in de buik.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Lage rugklachten</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Het is niet ongebruikelijk dat zwangere vrouwen tijdens de zwangerschap klachten in de lage rug en het bekkengebied krijgen. Dit heeft te maken met de verandering in de hormoonspiegel, toename van het lichaamsgewicht en de verandering van de lichaamshouding. Als de klachten vroeg in de zwangerschap ontstaan of toenemend erger worden kan dit te wijten zijn aan een probleem in het functioneren van het bekken of de wervelkolom.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Lage rug klachten tijdens de zwangerschap zijn vaak te wijten aan de veranderde stand van het bekken en de lage rug. Doordat het kindje steeds groter en zwaarder wordt, wordt de neerwaartse trekkracht aan de voorkant van de wervelkolom steeds groter, met als gevolg dat het bekken naar voren kantelt, en de onderrug wat holler wordt. Dit leidt tot irritatie van de gewrichten tussen de wervels, en verkramping van bepaalde spiergroepen, en dus pijn.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Chiropractie kan het functioneren van de lage rug en het bekken verbeteren, en tegelijk ook een maximale ruimte in de buikholte bevorderen. Bovendien verbetert chiropractie de functie van het bekken, en daarmee de voorbereiding op de bevalling.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Bekkeninstabiliteit</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Instabiliteit van het bekken komt vaak voor tijdens of na de zwangerschap. Bekkeninstabiliteit veroorzaakt pijn rond de bekkengewrichten en het schaambeen, als gevolg van de aanmaak van een hormoon welke tijdens het laatste trimester van de zwangerschap de gewrichtsbanden in het lichaam helpt te ontspannen.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Vrouwen ervaren dan pijn rond het staartbotje, schaambeen of uitstralende pijn naar de benen met zitten, staan, lopen en uiteindelijk ook met liggen.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  De chiropractische behandeling voor bekkeninstabiliteit is niet te vergelijken met de behandeling voor een geblokkeerd bekken. Bij bekkeninstabiliteit beweegt het bekken te veel en is het juist het doel om dit weer stabiel te krijgen door middel van correcties en oefeningen, en het optimaal laten functioneren van het zenuwstelsel, de aansturing van de spieren.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Omdat chiropractie een dusdanig effect heeft op het functioneren van het zenuwstelsel, kan chiropractie op andere vlakken ook uitkomst bieden, bijvoorbeeld bij extreme misselijkheid.
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
                  {[["Lage Rugpijn", "/klachten/lage-rugpijn"], ["Baby's", "/klachten/baby-s"], ["Kinderen", "/klachten/kinderen"]].map(([l, h]) => (
                    <li key={l}><Link href={h} className="text-sm text-[#45321A] hover:underline">{l}</Link></li>
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
