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

export default function SportblessuresPage() {
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

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#191919]">Sportblessures</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Sport en blessures</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Of u nu voor uw plezier sport of beroepsmatig, iedere sporter loopt het risico om geblesseerd te raken. Jaarlijks raken vele Nederlanders geblesseerd tijdens het sporten; dit is pijnlijk en vervelend voor de sporter en duur voor de maatschappij vanwege het forse ziekteverzuim als gevolg van de blessure.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Het lichaam wordt tijdens het sporten zwaar belast en kleine &quot;oneffenheden&quot;, die in het dagelijks leven niet als hinderlijk worden ervaren of soms zelfs in het geheel niet worden opgemerkt, kunnen blessures veroorzaken en het prestatieniveau negatief beïnvloeden.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Preventie</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  Veel sporters, recreant en professional, kiezen er dan ook voor om regelmatig een chiropractor te bezoeken en hun lichaam te laten controleren. Deze preventieve aanpak heeft bij een topclub als AC Milan een enorme afname van het aantal blessures tot gevolg gehad. Ook waren de voetballers in staat om tot op hogere leeftijd op een topniveau te kunnen presteren.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Chiropractie</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  Chiropractoren zijn bij uitstek geschikt om problemen op het gebied van spieren en gewrichten te behandelen en voorkomen. Een optimaal functionerend bewegingsapparaat zorgt voor betere prestaties en minder blessures! Onderzoek en praktijkervaringen laten zien dat de preventieve aanpak van de chiropractor het aantal blessures drastisch kan doen afnemen. Ook blijkt dat een actieve aanpak na een blessure de revalidatie fors kan bespoedigen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Acuut en chronisch</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  Blessures kunnen acuut en chronisch ontstaan. Acuut door een plotselinge verkeerde beweging en chronisch door een foutief bewegingspatroon dat er misschien al lange tijd geleden ingeslopen was. Het zal duidelijk zijn dat het wenselijk is om deze functiestoornissen zo spoedig mogelijk op te merken en te behandelen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Symptomen</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  Verminderde prestaties, kleine pijntjes of stijfheid, of een traag herstel na kleine blessures. Het kan allemaal wijzen op slecht functionerende spieren en gewrichten. Het kan zelfs zo zijn dat terugkerende knie- of enkelproblemen veroorzaakt worden door een foutief bewegingspatroon in de onderrug of heup.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Behandeling van sporters</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Sporters vragen een andere aanpak dan niet sporters omdat de krachten die op het lichaam van een sporter inspelen vele malen groter zijn dan die we in het normale dagelijkse leven ervaren. Een sporter zal dan ook langer moeten doorgaan met revalideren na een blessure; bijna klachtenvrij is niet goed genoeg. Een sporter zal terug willen komen tot een hoger niveau dan dat van voor de blessure. Bij een goed functionerend lichaam is er sprake van een juiste balans op het gebied van kracht, uithoudingsvermogen, flexibiliteit en coördinatie. De sporter heeft dan een goede controle over zijn lichaam en leert niet alleen zijn mogelijkheden maar ook zijn eventuele &quot;zwakke plekken&quot; goed kennen.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Voordat er een behandeling plaatsvindt zal er eerst een vraaggesprek zijn en een uitgebreid lichamelijk onderzoek. Tijdens de behandeling ligt de nadruk op het verwijderen van blokkades en het herstellen van de beweeglijkheid van spieren en gewrichten. Uw chiropractor beschikt daarvoor over een veelheid aan technieken. Ook kan hij adviseren onder anderen met betrekking tot oefeningen en voeding.
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
                  {[['Lage Rugpijn', '/klachten/lage-rugpijn'], ['Bovenrug & Schouder', '/klachten/bovenrug-schouder'], ['Whiplash', '/klachten/whiplash']].map(([l, h]) => (
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
