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
          <div className="mb-4"><Link href="/klachten" className="text-[#45321A] text-sm font-semibold hover:underline">← Alle klachten</Link></div>
          <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">Klachten</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4 text-[#191919]">Spanningshoofdpijn</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-4">Wat is spanningshoofdpijn?</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  Spanningshoofdpijn is de meest voorkomende vorm van hoofdpijn. Het kenmerkt zich door een drukkende, knellende pijn — vaak omschreven als een strakke band rondom het hoofd. De pijn is doorgaans tweezijdig, maar kan ook eenzijdig zijn.
                </p>
                <p className="text-[#403F3F] leading-relaxed mt-3">
                  De pijn begint vaak vanuit de nek en kan de hele dag aanhouden of geleidelijk toenemen. Spanningshoofdpijn kan zowel chronisch (dagelijks) als episodisch voorkomen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-4">Oorzaken</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {['Verkeerde stand van nekwervels', 'Spierspanning in nek en schouders', 'Kaakgewrichtsproblemen (TMJ)', 'Stress en vermoeidheid', 'Slechte houding achter bureau of scherm', 'Langdurig dezelfde positie aanhouden'].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#F6F6F6] rounded-xl px-4 py-3">
                      <div className="w-2 h-2 rounded-full bg-[#45321A] flex-shrink-0" />
                      <span className="text-sm text-[#403F3F]">{s}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[#403F3F] text-sm mt-4 leading-relaxed">
                  Verkeerd stanende wervels irriteren de omliggende spieren en zenuwen — dit is een veelvoorkomende oorzaak van spanningshoofdpijn die goed reageert op chiropractische behandeling.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-4">Behandeling</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Dr. Jahani neemt een uitgebreid gesprek af over uw hoofdpijnklachten en algemene gezondheid. Na een grondig lichamelijk onderzoek — waarbij de gewrichtsmobiliteit beoordeeld wordt — worden drukpunttechnieken op de wervels toegepast om de spier- en zenuwfunctie te verbeteren.
                </p>
                <p className="text-[#403F3F] leading-relaxed">
                  Indien de klachten buiten het chiropractisch bereik vallen, wordt u doorverwezen naar de huisarts. Aanvullend geeft Dr. Jahani advies over houding, ergonomie, oefeningen en voeding.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#45321A] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Contact</h3>
                <div className="space-y-3 text-sm text-white/80">
                  <p>Maasstraat 103<br />1078 HH Amsterdam</p>
                  <a href="tel:0206731800" className="block font-bold text-white hover:underline">020-673 1800</a>
                  <p>Ma – Vr: 10:00 – 17:00<br />Za: 10:00 – 14:00</p>
                </div>
                <Link href="/#booking" className="mt-5 block bg-white text-[#45321A] font-bold text-center py-3 rounded-xl hover:bg-[#F6F6F6] transition-colors text-sm">
                  Afspraak maken
                </Link>
              </div>
              <div className="bg-[#F6F6F6] rounded-2xl p-6">
                <h3 className="font-bold text-[#191919] mb-4 text-sm uppercase tracking-wide">Gerelateerd</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/klachten/hoofdpijn-en-migraine" className="text-[#45321A] hover:underline">Migraine</Link></li>
                  <li><Link href="/klachten/nek" className="text-[#45321A] hover:underline">Nekklachten</Link></li>
                  <li><Link href="/klachten/bovenrug-schouder" className="text-[#45321A] hover:underline">Bovenrug & Schouder</Link></li>
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
