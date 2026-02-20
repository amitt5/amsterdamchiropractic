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

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#191919]">Zwangerschap</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-[#45321A] text-white rounded-2xl p-6">
                <p className="text-white/90 leading-relaxed">
                  Chiropractische zorg is <strong className="text-white">veilig gedurende de gehele zwangerschap</strong> — ook met een grote buik — en vormt geen risico voor het ongeboren kind.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Lage rugklachten tijdens zwangerschap</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  Lage rugpijn is een van de meest voorkomende klachten tijdens de zwangerschap. Door hormonale veranderingen, gewichtstoename en verandering in houding verschuift het zwaartepunt naar voren. Het bekken kantelt, waardoor de lumbale wervelkolom holler wordt. Dit leidt tot gewrichtsirritatie en spierkrampen — soms uitstralend naar de benen (zwangerschapsischias).
                </p>
                <p className="text-[#403F3F] leading-relaxed mt-3">
                  De behandeling is gericht op verbetering van de functie van de lage rug en het bekken, terwijl er tegelijkertijd voldoende ruimte voor het kind in de buik wordt behouden.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Bekkeninstabiliteit</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  In het laatste trimester zorgen hormonen voor versoepeling van de gewrichtsbanden. Soms leidt dit tot overmatige gewrichtsbewegelijkheid (bekkeninstabiliteit). Symptomen zijn pijn rondom het staartbeen, het schaambeen of uitstralend naar de benen — bij staan, zitten, lopen of draaien in bed.
                </p>
                <p className="text-[#403F3F] leading-relaxed mt-3">
                  De behandeling richt zich op stabilisering van het bekken via correcties en oefeningen die de werking van het zenuwstelsel optimaliseren.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-3">Misselijkheid</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  Chiropractische zorg kan ook helpen bij ernstige misselijkheid tijdens de zwangerschap, via positieve invloed op het zenuwstelsel.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-[#45321A] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">Afspraak maken</h3>
                <p className="text-white/80 text-sm mb-4">Veilige, zachte zorg voor moeder en kind.</p>
                <Link href="/#booking" className="block bg-white text-[#45321A] font-semibold text-sm text-center px-4 py-3 rounded-full hover:bg-white/90 transition-colors">
                  Online boeken
                </Link>
                <a href="tel:0206731800" className="block text-center text-white/80 text-sm mt-3 hover:text-white">020-673 1800</a>
              </div>
              <div className="bg-[#F6F6F6] rounded-2xl p-6">
                <h3 className="font-semibold text-[#191919] mb-3">Gerelateerde klachten</h3>
                <ul className="space-y-2">
                  {[['Lage Rugpijn', '/klachten/lage-rugpijn'], ["Baby's", '/klachten/baby-s'], ['Bekkeninstabiliteit', '/klachten/zwangerschap']].map(([l, h]) => (
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
