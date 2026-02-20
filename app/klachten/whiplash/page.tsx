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

export default function WhiplashPage() {
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

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#191919]">Whiplash</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">

              <div>
                <p className="text-[#403F3F] leading-relaxed">
                  Whiplash is een snelle, plotselinge beweging bij een verkeersongeluk of een val. De beweging kan letsel veroorzaken aan wervels en weefsels (spieren, zenuwen) in de nek. Dat kan een whiplash-trauma tot gevolg hebben: pijn, stijfheid en andere klachten die soms pas maanden na het ongeval tot uiting komen. De chiropractor beschikt over methoden waarmee whiplash-klachten kunnen worden verholpen of verlicht.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Symptomen</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  De meest voorkomende whiplashklacht is een pijnlijke, vaak stijve nek. Veel whiplash-patiënten hebben daarnaast last van hoofdpijn, lage rugpijn en uitstralende pijn naar armen en gezicht. Er zijn echter nog veel meer klachten die deel uit kunnen maken van het whiplash-trauma, zoals krachtsverlies in de armen, duizeligheid, evenwichtsstoornissen, misselijkheid, oorsuizen, slecht zien of vlekken voor de ogen en slaap- en concentratieproblemen. Niet alleen de aard, maar ook de ernst van de klachten verschilt sterk. De helft van de patiënten is binnen een maand hersteld, maar soms zijn de gevolgen zo ernstig dat het tot arbeidsongeschiktheid leidt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Oorzaken</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Whiplash is een bekende veel voorkomende term vaak gerelateerd naar auto-ongelukken. Vroeger met treinongelukken, bij zelfs kleine impacts, konden mensen een zelfde soort klachtenpatroon krijgen als bij een whiplash, dit werd &quot;railway spine&quot; genoemd. Lange tijd werd dit niet erkend en kregen deze &quot;railwayspine&quot; slachtoffers ook geen compensatie na het ongeval.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Whiplash is Engels voor zweepslag, de term slaat op de snelle, geforceerde hoofdbeweging die tot bovengenoemde klachten kan leiden. Whiplash heeft dus niet alleen met verkeersongelukken te maken, maar kan ook komen door een val van de trap of een ski-ongeluk.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Gezien er veel krachten werken op het lichaam tijdens een kopstaart ongeluk, versnellen bepaalde gedeeltes van het lichaam verschillend. En dat is de reden waarom een whiplash ongeluk zo traumatisch kan zijn. Allereerst bewegen de torso of het onderste gedeelte met de schouders naar voren en een aantal milliseconde later accelereert het hoofd. Door deze krachtige beweging kunnen de gewrichtskapsels, spieren, pezen, en zenuwen worden opgerekt, met als gevolg pijn en andere klachten.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Behandeling</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  De chiropractor stelt u allereerst vragen over uw klachten om een beeld te krijgen van uw gezondheidstoestand. Daarnaast zal duidelijk gemaakt moeten worden in hoeverre het ongeluk een whiplash reactie heeft veroorzaakt. Daarop volgt een grondig lichamelijk onderzoek, waarbij vooral wordt gekeken naar de beweeglijkheid van de gewrichten. Indien er sprake is van een whiplash, zal de chiropractor nagaan welke graad whiplash u heeft, staande voor de heftigheid van uw klachten.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Indien er een röntgenfoto, CT of MRI scan beschikbaar is of kan worden aangevraagd dan kan dit nuttig zijn voor de chiropractor om de prognose te bepalen en de behandeling daarop af te stemmen. De chiropractor kan u ook het advies geven diagnostisch onderzoek te ondergaan. Dit gaat in samenspraak met de huisarts of medisch specialist.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Afhankelijk van hoe acuut en ernstig de klacht is kan de chiropractor met de behandeling beginnen. Door de wervels voorzichtig in beweging te brengen met behulp van druktechnieken, kunnen spieren en zenuwen weer normaal gaan functioneren. Dankzij de druktechnieken verbetert de beweeglijkheid, ontspannen de spieren zich weer en krijgen omliggende zenuwen weer de ruimte om hun taken uit te voeren. Daardoor kunnen pijn en andere klachten afnemen of verdwijnen. Het resultaat van de behandeling hangt af van de ernst van de klachten; uw chiropractor laat u weten hoe het er met u voorstaat.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Naast de behandeling kan de chiropractor u advies geven over een goede houding, ergonomie, sport, oefeningen en voeding. Zowel ter voorkoming als ter genezing is beweging goed. Verkeerd bewegen kan de klachten juist verergeren. Het is daarom van groot belang dat u zich laat adviseren. Sterke nekspieren ontwikkelen is van groot belang. Hierdoor wordt uw wervelkolom meer ontzien en wordt de kans op het terug krijgen van de klacht steeds kleiner.
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
                  {[['Nekpijn', '/klachten/nek'], ['Hoofdpijn & Migraine', '/klachten/hoofdpijn-en-migraine'], ['Lage Rugpijn', '/klachten/lage-rugpijn']].map(([l, h]) => (
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
