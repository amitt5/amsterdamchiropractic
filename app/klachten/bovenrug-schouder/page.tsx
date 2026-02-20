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

export default function BovenrugSchouderPage() {
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

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#191919]">Bovenrug & Schouder</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">

              <div>
                <p className="text-[#403F3F] leading-relaxed">
                  De bovenrug is het deel van de rug waar de wervels verbonden zijn met de ribben. Pijn in de bovenrug gaat vaak gepaard met stijfheid en pijn op andere plaatsen in rug, nek of borst. De chiropractor is gespecialiseerd in rug- en aanverwante klachten en kan veel van deze klachten verhelpen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Symptomen</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  Als er problemen zijn in de bovenrug, kan dat tot verschillende klachten leiden. De meeste mensen met bovenrug-klachten hebben pijn tussen de schouderbladen. Maar pijn op de borst of uitstralende pijn in de armen kan ook het gevolg zijn van een bovenrug-probleem. Soms lijken de verschijnselen op hartklachten en dat veroorzaakt nogal eens ongerustheid. Hoesten, niezen en ademhalen kan pijnlijk zijn. De chiropractor kan nagaan of uw klachten samenhangen met een rugprobleem. Wanneer dat het geval is, kan de chiropractor uw klachten goed behandelen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Oorzaken</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Rugpijn kan verschillende oorzaken hebben. Pijn in de bovenrug ontstaat meestal geleidelijk, als gevolg van een verkeerde houding (zoals scheef of in elkaar gezakt achter het bureau zitten), eenzijdig gebruik van de armen door steeds dezelfde bewegingen te maken (zoals bij strijken) en veel boven het hoofd werken. Een enkele keer heeft pijn in de bovenrug een plotselinge oorzaak, zoals vertillen of een verkeerde beweging.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Een verkeerde stand of het &apos;vastzitten&apos; van één of meer rugwervels veroorzaakt spanning in de bovenrug. Zenuwen raken geïrriteerd en dat leidt tot pijn. Zelfs problemen aan organen, bijvoorbeeld maagklachten, kunnen samenhangen met geïrriteerde zenuwen in de rug.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Behandeling</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Allereerst stelt de chiropractor vragen over uw rugpijn en over uw algehele gezondheidstoestand. De rugpijn kan namelijk samenhangen met andere gezondheidsklachten. Daarna volgt een lichamelijk onderzoek. De chiropractor maakt gebruik van verschillende medische methoden om te kijken waar de pijn vandaan komt en hoe het gesteld is met de beweeglijkheid en de soepelheid van alle gewrichten die met de pijn te maken kunnen hebben. Soms worden er röntgenfoto&apos;s gemaakt.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  De chiropractor past druktechnieken toe op de wervelkolom. Die hebben ten doel blokkades en storingen op te heffen, zodat zenuwen, spieren en wervels hun werk weer goed kunnen doen. Meestal is de behandeling niet pijnlijk, maar als dat wel het geval is zal de chiropractor u dat vooraf laten weten.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Preventie krijgt veel aandacht in de chiropractie. Het is daarom goed mogelijk dat de chiropractor u adviseert om regelmatig terug te komen voor controle van de wervelkolom, zodat de klachten niet terugkeren of verergeren. Naast het toepassen van druktechnieken is het mogelijk dat u bijvoorbeeld oefeningen voorgeschreven krijgt. Ook advisering over een goede houding of over voeding kan deel uitmaken van de behandeling. Uw inzet kan in belangrijke mate bijdragen aan de genezing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Preventie</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  Een goede houding bij staan en zitten helpt rugklachten te voorkomen. Ook is het belangrijk om op een verantwoorde manier te bewegen, om vertillen of overbelasting te voorkomen. Uw chiropractor kan u hierover adviseren. Ook op vragen als: &apos;welke sport kan ik het beste beoefenen&apos;, &apos;waarmee moet ik voorzichtig zijn&apos;, kunt u een antwoord krijgen van de chiropractor.
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
                  {[['Lage Rugpijn', '/klachten/lage-rugpijn'], ['Nekpijn', '/klachten/nek'], ['Whiplash', '/klachten/whiplash']].map(([l, h]) => (
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
