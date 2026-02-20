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

const conditions = [
  { title: 'Whiplash', href: '/klachten/whiplash', desc: 'Plotselinge nekbeweging door ongeluk of val — nekpijn, hoofdpijn, duizeligheid, tintelingen.' },
  { title: 'Lage Rugpijn', href: '/klachten/lage-rugpijn', desc: '80% van de bevolking krijgt ooit te maken met lage rugpijn. Klachten van spieren, gewrichten of schijven.' },
  { title: 'Bovenrug & Schouder', href: '/klachten/bovenrug-schouder', desc: 'Pijn tussen de schouderbladen, uitstralend naar de armen of borst. Vaak door houding.' },
  { title: 'Nek', href: '/klachten/nek', desc: 'Stijve nek en schouders, duizeligheid, tintelingen in handen. Geleidelijk of plotseling.' },
  { title: 'Hernia', href: '/klachten/hernia', desc: 'Hernia nuclei pulposi (HNP) — uitpuilende tussenwervelschijf, uitstralende pijn in been of arm.' },
  { title: 'Zwangerschap', href: '/klachten/zwangerschap', desc: 'Veilige chiropractische zorg tijdens zwangerschap. Lage rugpijn, bekkeninstabiliteit, misselijkheid.' },
  { title: 'Sportblessures', href: '/klachten/sportblessures', desc: 'Preventie en behandeling van sportblessures. Sporters vragen een speciale aanpak.' },
  { title: 'Hoofdpijn & Migraine', href: '/klachten/hoofdpijn-en-migraine', desc: 'Migraine treft 1 op de 10 volwassenen. Chiropractie behandelt de oorzaak, niet alleen het symptoom.' },
  { title: 'Spanningshoofdpijn', href: '/klachten/hoofdpijn-spanningshoofdpijn', desc: 'Drukkende pijn als een band om het hoofd, vaak vanuit de nek. Stress en houding als oorzaak.' },
  { title: 'Kinderen', href: '/klachten/kinderen', desc: 'Klachten bij kinderen door val, sport of lang zitten. Sneller herstel dan bij volwassenen.' },
  { title: "Baby's", href: '/klachten/baby-s', desc: "KISS-syndroom, overmatig huilen, slaapproblemen, voedingsproblemen. Speelse, kindvriendelijke behandeling." },
  { title: 'Artrose / Slijtage', href: '/klachten/artrose-slijtage', desc: 'Gewrichtslijtage door veroudering. Chiropractie kan verslechtering remmen en pijn verminderen.' },
];

export default function KlachtenPage() {
  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">Wij Behandelen</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">Klachten</h1>
            <p className="text-[#403F3F] max-w-2xl mx-auto leading-relaxed">
              Health4Life Chiropractic behandelt een breed scala aan klachten van het bewegingsapparaat. Kies een klacht voor meer informatie over oorzaken, symptomen en behandeling.
            </p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {conditions.map((c, i) => (
              <Link
                key={i}
                href={c.href}
                className="group bg-[#F6F6F6] rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#45321A] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white">
                      <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#191919] group-hover:text-[#45321A] transition-colors">{c.title}</h3>
                </div>
                <p className="text-[#403F3F] text-sm leading-relaxed">{c.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-14 bg-[#45321A]/5 border border-[#45321A]/20 rounded-2xl p-8 text-center">
            <h3 className="font-bold text-[#191919] text-xl mb-3">Staat uw klacht er niet bij?</h3>
            <p className="text-[#403F3F] mb-6">
              Neem contact op — Dr. Jahani bespreekt graag of chiropractie u kan helpen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/#booking" className="bg-[#45321A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#5a4228] transition-colors">
                Afspraak maken
              </Link>
              <a href="tel:0206731800" className="border border-[#45321A] text-[#45321A] font-semibold px-8 py-4 rounded-full hover:bg-[#45321A]/5 transition-colors">
                020-673 1800
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
