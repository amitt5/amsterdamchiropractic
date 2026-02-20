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

export default function KinderenPage() {
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

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#191919]">Kinderen</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Oorzaken</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Bij kinderen kunnen, net zoals volwassenen, klachten aan het bewegingsapparaat ontstaan. Dit kan al gebeuren tijdens de bevalling, maar vooral ook in de jaren daaropvolgend, waarbij ze opgroeien met vallen en opstaan.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Valpartijen, ongelukjes, lange uren zitten op school en sport kunnen mogelijke oorzaken tot klachten leiden. Veelal herstellen kinderen al snel weer, maar wanneer klachten aanhouden, moet dit zeker serieus genomen worden.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Symptomen</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Kinderen kunnen vaak niet aangeven waar ze pijn hebben, en dus is het belangrijk te weten dat dit vaak aangeduid wordt met hoofd- of buikpijn klachten. Ook kan het gedrag verraden dat een kind zich niet goed voelt, doordat ze erg moe zijn of juist erg druk worden of dat hun slaapgewoontes veranderen.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Verminderde weerstand kan gepaard gaan met lichamelijke klachten, vooral ook wanneer kinderen onderliggende aandoeningen hebben, zoals astma, veelvuldige keel-, neus- en oorklachten, alsook scoliose.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Deze laatstgenoemden kunnen door chiropractie niet genezen worden, maar de effecten hiervan op het lichaam kunnen beperkt worden waardoor een kind zoveel mogelijk als een kind kan opgroeien. Bijvoorbeeld: bij kinderen met astma zien we dat deze kinderen vooral borstademhaling toepassen. Dit kan zorgen voor verhoogde spierspanning in de schouderregio, gepaard gaande met gewrichtsblokkades in de bovenrug, van de ribben en de nek.
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
                  {[["Baby's", '/klachten/baby-s'], ['Zwangerschap', '/klachten/zwangerschap'], ['Bovenrug & Schouder', '/klachten/bovenrug-schouder']].map(([l, h]) => (
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
