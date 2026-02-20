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

export default function BabySPage() {
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

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#191919]">Baby&apos;s</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Oorzaken en mogelijke problemen bij baby&apos;s</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Een kind heeft met veel fysieke stress te maken gedurende de groei. Het eerste wat een wervelkolom in de groei meemaakt is de houding die het gedwongen wordt aan te nemen in de baarmoeder.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Veel vrouwen zullen gehoord hebben dat foetale houdingen, zoals stuit- of dwarsligging, problemen kunnen veroorzaken tijdens de bevalling. Wat vaak minder bekend is, is dat zulke houdingen ook invloed hebben op de wervelkolom van de foetus.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Zelfs bij een normale bevalling wordt er veel druk uitgeoefend op het lichaam van de baby. Een keizersnede lijkt dan minder traumatisch, maar het tegendeel blijkt waar.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Klachten van een pasgeboren baby kunnen gerelateerd zijn aan irritatie van het zenuwstelsel door blokkades in de rug.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Symptomen bij baby&apos;s</h2>
                <ul className="grid grid-cols-2 gap-2">
                  {[
                    'Onrustig, nerveus, veel huilen',
                    'Slaapproblemen / ritmeproblemen',
                    'Voorkeurshouding van het hoofd of bekken',
                    'Overstrekken',
                    'Voorkeursborst met voeden',
                    'Problemen met zuigen',
                    'Naar de oren grijpen',
                    'Asymmetrische vorm van het hoofd',
                    'Asymmetrisch bewegen van de armen en/of benen',
                    'Extreem huilen bij aan- en uitkleden',
                    'Instabiele hoofdcontrole voor leeftijd',
                    'Vertraagde ontwikkeling',
                    'Oorontstekingen',
                    'Constipatie',
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#403F3F]">
                      <svg viewBox="0 0 20 20" className="w-4 h-4 text-[#45321A] fill-current flex-shrink-0 mt-0.5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="text-[#403F3F] text-sm mt-4 leading-relaxed">
                  Natuurlijk kunnen bovenstaande klachten ook een andere oorzaak hebben. De chiropractor beoordeelt altijd of een behandeling zinvol is.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Overmatig huilen</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Maar liefst 10-15% van alle pasgeboren baby&apos;s huilen overmatig en zijn ontroostbaar. Vaak gaat dit gepaard met het optrekken van de beentjes, gespannen vuistjes en overstrekken.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Huilbaby&apos;s zijn 0 tot 3 maanden oud; huilen minstens 3 uren per dag, meer dan 3 dagen per week, en langer dan 3 weken achter elkaar, meestal aan het eind van de middag of &apos;s avonds.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Dit vele huilen kan stress geven en kan de verhouding tussen moeder en kind zo verstoren dat dit nog jaren invloed heeft. Het huilen is vaak een uiting van pijn, bijvoorbeeld door darmkrampjes, allergieën of blokkades in de wervelkolom.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Vaak wordt gezegd dat overmatig huilen vaak vanzelf over gaat, zo rond de leeftijd van 3 maanden. Blokkades die de ontwikkeling beïnvloeden kunnen dan nog steeds aanwezig zijn, ook al lijkt dat niet zo. Daarom is het raadzaam om kinderen ouder dan 3 maanden te laten onderzoeken door een chiropractor, zeker als ze als jonge baby veel hebben gehuild.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">KISS syndroom</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Een veelgenoemd probleem bij kinderen is het KISS syndroom (Kopgewrichten Invloed op Storingen in de Symmetrie). Dit syndroom omvat een uitgebreid scala van klachten die bij baby&apos;s en kinderen kunnen voorkomen, waaronder het vele huilen, voorkeurshouding en overstrekken.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Soms gaat het ook om vagere klachten. Al deze klachten komen voort uit een blokkade in het gebied van de bovenste nekwervels en de ongewenste aanpassingen die het lichaam hierop maakt.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Het is altijd noodzakelijk dat de chiropractor het hele lichaam onderzoekt, problemen in de nek kunnen namelijk ook voortkomen door bewegingsbeperkingen in het bekken.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Oorontsteking</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Het veelvuldig met de handjes naar het hoofd en de oren grijpen is ook iets wat gezien wordt in baby&apos;s. Hierbij wordt vaak gedacht aan oorontstekingen, zonder dat deze per definitie gevonden worden.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  De bewegingsfuncties hoog in de nek spelen een onderliggende rol in het ontstaan van oorontstekingen. Door spanning op de buis van Eustachius in het oor, als gevolg van een blokkade in de nek, kan de afvoer van vocht uit het oor geremd worden, waardoor een ontsteking kan ontstaan.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Door de blokkade in de nek op te heffen, kan de buis van Eustachius het oorvocht weer ongestoord afvoeren.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Behandeling</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  De behandeling van kinderen is niet hetzelfde zoals bij volwassenen. Spelenderwijs wordt het lichamelijke onderzoek verricht na een uitgebreid vraaggesprek met het kind en de ouder(s), waarna de behandeling kan plaatsvinden.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  De chiropractische gewrichtscorrecties die toegepast worden zijn afgestemd op kinderen. Deze zijn vrijwel pijnloos. Kinderen herstellen over het algemeen sneller dan volwassenen, en dus zijn de behandelfrequenties vaak lager dan bij volwassenen, maar dit is afhankelijk van de klachten en de patiënt, en de chiropractor zal u een passend persoonlijk behandelplan voorstellen.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Chiropractoren behandelen al meer dan 100 jaar kinderen van alle leeftijden. Chiropractie is zeer effectief en bovenal heel veilig voor kinderen. De behandeling bestaat uit lichte druktechnieken om blokkades te corrigeren, en valt niet te vergelijken met een behandeling voor volwassenen.
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
                  {[['Kinderen', '/klachten/kinderen'], ['Zwangerschap', '/klachten/zwangerschap'], ['Nekpijn', '/klachten/nek']].map(([l, h]) => (
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
