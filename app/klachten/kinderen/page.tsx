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
          <div className="mb-4"><Link href="/klachten" className="text-[#45321A] text-sm font-semibold hover:underline">← Alle klachten</Link></div>
          <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">Klachten</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4 text-[#191919]">Chiropractie voor Kinderen</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-4">Oorzaken</h2>
                <p className="text-[#403F3F] leading-relaxed">
                  Kinderen kunnen vergelijkbare musculoskeletale klachten ontwikkelen als volwassenen. Klachten kunnen al tijdens de geboorte ontstaan — met name bij moeilijke leveringen — en verder optreden door vallen en ongelukjes in de groeiperiode. Langdurig zitten op school, sport en spelen zijn eveneens mogelijke oorzaken.
                </p>
                <p className="text-[#403F3F] leading-relaxed mt-3">
                  Hoewel kinderen snel herstellen, moeten aanhoudende klachten serieus worden genomen en professioneel worden onderzocht.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-4">Symptomen</h2>
                <p className="text-[#403F3F] leading-relaxed mb-4">
                  Kinderen kunnen de locatie van pijn vaak niet goed aanwijzen. Klachten uiten zich regelmatig als hoofdpijn of buikpijn. Gedragsveranderingen kunnen ook een signaal zijn:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {['Overmatige vermoeidheid', 'Hyperactiviteit', 'Veranderd slaappatroon', 'Hoofdpijn of buikpijn', 'Verminderde weerstand / vaak ziek', 'Astma of ENT-klachten', 'Scoliose'].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#F6F6F6] rounded-xl px-4 py-3">
                      <div className="w-2 h-2 rounded-full bg-[#45321A] flex-shrink-0" />
                      <span className="text-sm text-[#403F3F]">{s}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#403F3F] mt-4 italic">
                  &ldquo;Deze aandoeningen kunnen niet worden genezen door chiropractie, maar de effecten op het lichaam kunnen wel worden beperkt.&rdquo;
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#191919] mb-4">Behandeling</h2>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Behandeling van kinderen verschilt wezenlijk van die van volwassenen. Het lichamelijk onderzoek verloopt speels, na een uitgebreid gesprek met het kind én de ouders.
                </p>
                <p className="text-[#403F3F] leading-relaxed mb-3">
                  Chiropractische gewrichtscorrecties zijn aangepast aan het kinderlichaam en vrijwel pijnloos. Kinderen herstellen over het algemeen sneller dan volwassenen en hebben een lagere behandelfrequentie nodig — op maat per individu.
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
                  <li><Link href="/klachten/baby-s" className="text-[#45321A] hover:underline">Baby&apos;s</Link></li>
                  <li><Link href="/klachten/zwangerschap" className="text-[#45321A] hover:underline">Zwangerschap</Link></li>
                  <li><Link href="/klachten/hoofdpijn-en-migraine" className="text-[#45321A] hover:underline">Hoofdpijn</Link></li>
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
