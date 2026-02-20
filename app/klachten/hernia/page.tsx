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

export default function HerniaPage() {
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

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#191919]">Hernia</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Wat is een hernia?</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Een hernia (voluit: hernia nucleus pulposus) is een uitstulping van een tussenwervelschijf. Tussen twee wervels ligt de schokabsorberende tussenwervelschijf, deze zorgt voor elasticiteit en vergroot de bewegingsvrijheid. De anatomie van een tussenwervelschijf is te vergelijken met een ui. Er zitten lagen aan de buitenkant en in het centrum zit een materiaal dat men kan vergelijken met gel. De uitstulping van de tussenwervelschijf ontstaat doordat het zachte binnenste deel kracht uitoefent op de buitenste lagen.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  De uitstulping drukt op zenuwen en dat veroorzaakt de pijn of andere klachten. Een hernia ontstaat wanneer de tussenwervelschijf zijn soepelheid verliest. Deze schijf, die werkt als een soort &apos;schokbreker&apos; in de wervelkolom, kan bepaalde bewegingen dan niet meer goed opvangen. Het gevolg hiervan is dat er scheurtjes komen in de buitenkant van de schijf, waardoor de zachte binnenkant van de schijf niet meer goed beschermd wordt. Als een deel van de zachte stof in de tussenwervelschijf naar buiten stulpt, spreken we van een hernia nucleus pulposus. De druk op de zenuw kan leiden tot een verminderde functie van de zenuw.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  In een tussenwervelschijf zitten geen gevoelszenuwen. De hernia zelf is dan ook niet pijnlijk. De pijn wordt veroorzaakt doordat de uitstulping tegen zenuwweefsel drukt. De klachten van een hernia kunnen verschillen, afhankelijk van welke zenuw wordt geïrriteerd. Hernia&apos;s in de lage rug geven vooral uitstraling naar de benen, zoals tintelingen en gevoelloosheid en kunnen zelfs voor verlammingsverschijnselen zorgen, zoals bijvoorbeeld een klapvoet.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Welke klachten veroorzaakt een hernia?</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  Een hernia veroorzaakt rugpijn en kan uitstralen naar één of beide benen. Ook tintelingen in been of voet kunnen op een hernia wijzen. Bij het verergeren van de klachten kunnen de beenspieren kracht verliezen of gevoelloos raken. Door een grote centrale hernia kan een cauda equina syndroom ontstaan. Dit is een medisch spoedgeval, aangezien dit uitval van een groot aantal functies kan veroorzaken, zoals het gebruik van en het gevoel in de benen, en de controle over blaas en darmen. In dat geval moet er meteen doorverwezen worden naar een neuroloog.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Hoe ontstaat een hernia?</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Een hernia is een veel voorkomende aandoening van de lage rug, die slechts in circa 50% van de gevallen gepaard gaat met klachten. Naarmate men ouder wordt zal de tussenwervelschijf steeds minder elastisch zijn ofwel veel mensen krijgen geleidelijk zwakke plekken in de tussenwervelschijven. De gemiddelde leeftijd van het krijgen van een hernia ligt tussen de 20 en 45 jaar en het komt iets vaker voor bij mannen dan bij vrouwen.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  De scheurtjes ontstaan doorgaans geleidelijk als gevolg van verkeerde lichaamshouding en -beweging. Weinig afwisseling in de houding (zoals bij veel soorten van zittend of staand werk) vergroot de kans op het ontwikkelen van een hernia. Hetzelfde geldt voor werk waarbij steeds dezelfde bewegingen worden gemaakt, zoals tillen, veelvuldig bukken en draaien. Soms ontstaat een hernia plotseling door een ongeval.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Behandeling</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  De chiropractor zal vragen over uw rugpijn en over uw algehele gezondheidstoestand. De pijn kan namelijk samenhangen met andere gezondheidsklachten. Daarna volgt een grondig lichamelijk onderzoek. In het geval van een mogelijke hernia zal de chiropractor neurologische testen uitvoeren. Zenuwen voeden onze spieren en de huid. Elke zenuw heeft zijn eigen bestemming. Bij een hernia kan dan ook gericht gekeken worden of er zich afwijkingen in spierfunctie (spieren) en of andere stoornissen voordoen. De chiropractor kan uit de beschreven pijnuitstraling en het chiropractisch-neurologisch onderzoek vaak opmaken om welke zenuw het gaat.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  De chiropractor kan het advies geven om verder diagnostisch onderzoek te ondergaan, dit zal dan gaan in samenspraak met de huisarts of neuroloog. Een hernia is op een normale röntgenfoto niet te zien. Wel kan een dunnere tussenwervelschijf zichtbaar zijn, maar dit wil niet zeggen dat er dan ook daadwerkelijk een hernia zit. Hernia&apos;s zijn goed te zien op een scan, zoals een CT of MRI scan, waarbij men ook kan zien of er sprake is van een directe druk van de hernia op de zenuwwortel. Indien er een röntgenfoto, CT of MRI scan beschikbaar is dan kan dit nuttig zijn voor de chiropractor om de prognose te bepalen en de behandeling daarop af te stemmen.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Hernia is een beladen term en de grote angst voor mensen die af en toe rugpijn hebben. De meeste herniaklachten kunnen goed door een chiropractor behandeld worden zonder dat er een operatie nodig is. De chiropractor heeft verschillende technieken afhankelijk van de status van de tussenwervelschijf. De chiropractor gebruikt diverse druktechnieken om de beweeglijkheid van de wervelkolom zoveel mogelijk te herstellen. Het doel is de tussenwervelschijfruimte te vergroten, om zodoende de druk van de uitstulping op de zenuw te verlagen. Dit kan met bepaalde rek ofwel tractie technieken, bewegingstechnieken voor de wervelkolom of spierontspanningstechnieken. De behandeling zelf is meestal niet pijnlijk.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Bij een ernstige hernia zal de chiropractor u verwijzen naar een huisarts of neuroloog. Dan kan een operatie uitkomst bieden. Echter, na de operatie is normaal gesproken de pijn op de plaats van de hernia verdwenen, (weliswaar de herniaplek van pijn verlost), maar kunnen andere plaatsen in rug of bekken nog pijnlijk zijn. Daar kan chiropractische behandeling verlichting brengen.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Naast de behandeling met druktechnieken kan de chiropractor u advies geven over een goede houding, ergonomie, sport, oefeningen en voeding. Ook al is de behandeling succesvol, uw rug blijft een zwakke plek die extra aandacht verdient. Sterke buik-, bil- en rugspieren ontwikkelen is van groot belang. Hierdoor wordt uw wervelkolom meer ontzien en u kunt een actief leven leiden.
                </p>
              </div>

            </div>

            <div className="space-y-5">
              <div className="bg-[#45321A] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">Afspraak maken</h3>
                <p className="text-white/80 text-sm mb-4">Neem contact op voor een vrijblijvend gesprek over uw klachten.</p>
                <Link href="/#booking" className="block bg-white text-[#45321A] font-semibold text-sm text-center px-4 py-3 rounded-full hover:bg-white/90 transition-colors">
                  Online boeken
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
                  {[['Lage Rugpijn', '/klachten/lage-rugpijn'], ['Nekpijn', '/klachten/nek'], ['Artrose / Slijtage', '/klachten/artrose-slijtage']].map(([l, h]) => (
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
