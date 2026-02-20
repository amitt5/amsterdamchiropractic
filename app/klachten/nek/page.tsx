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

export default function NekPage() {
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

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#191919]">Nekklachten</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <p className="text-[#403F3F] leading-relaxed">
                  Veelvoorkomende nekklachten zijn stijve nek- en schouderspieren, whiplash, spierknobbels, artrose en een nekhernia. Chiropractie kan bij de meeste nekklachten goede resultaten boeken.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Symptomen</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Pijn en stijfheid in nek en schouders',
                    'Hoofdpijn',
                    'Duizeligheid / oorsuizen',
                    'Concentratieproblemen',
                    'Uitstralende pijn naar de arm',
                    'Zwakte / vermoeidheid in schouders/armen',
                    'Tintelingen in handen/vingers',
                    'Plotseling opkomende pijn',
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#403F3F]">
                      <svg viewBox="0 0 20 20" className="w-4 h-4 text-[#45321A] fill-current flex-shrink-0 mt-0.5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-4">Oorzaken</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[#F6F6F6] rounded-xl p-5">
                    <h3 className="font-bold text-[#191919] mb-3">Geleidelijk ontstaan</h3>
                    <ul className="space-y-1.5 text-sm text-[#403F3F]">
                      {['Weinig houdingsvariatie (kantoorwerk)', 'Repetitieve eenzijdige bewegingen', 'Eenzijdige belasting (zware tas op één schouder)', 'Kraakbeenslijtage / artrose', 'Stress en spanning', 'Kou / tocht'].map((i, idx) => (
                        <li key={idx} className="flex items-start gap-2"><span className="text-[#45321A] font-bold">·</span> {i}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#F6F6F6] rounded-xl p-5">
                    <h3 className="font-bold text-[#191919] mb-3">Plotseling ontstaan</h3>
                    <ul className="space-y-1.5 text-sm text-[#403F3F]">
                      {['Ongelukken / whiplash', 'Spierkramp door verkeerde beweging', 'Verkeerde slaaphouding', 'Oor- of luchtweginfectie'].map((i, idx) => (
                        <li key={idx} className="flex items-start gap-2"><span className="text-[#45321A] font-bold">·</span> {i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Behandeling</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  Na een uitgebreid onderzoek past Dr. Jahani zachte manipulatietechnieken toe om de beweeglijkheid van de gewrichten te herstellen, de spierspanning te verminderen en zenuwirritatie op te heffen. U krijgt ook oefeningen en adviezen mee voor thuis.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-[#45321A] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">Afspraak maken</h3>
                <Link href="/#booking" className="block bg-white text-[#45321A] font-semibold text-sm text-center px-4 py-3 rounded-full hover:bg-white/90 transition-colors">
                  Online boeken
                </Link>
                <a href="tel:0206731800" className="block text-center text-white/80 text-sm mt-3 hover:text-white">020-673 1800</a>
              </div>
              <div className="bg-[#F6F6F6] rounded-2xl p-6">
                <h3 className="font-semibold text-[#191919] mb-3">Gerelateerde klachten</h3>
                <ul className="space-y-2">
                  {[['Whiplash', '/klachten/whiplash'], ['Hoofdpijn & Migraine', '/klachten/hoofdpijn-en-migraine'], ['Bovenrug & Schouder', '/klachten/bovenrug-schouder']].map(([l, h]) => (
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
