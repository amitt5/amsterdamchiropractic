'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { useLanguage } from '@/contexts/language-context';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export default function KlachtenPage() {
  const { language } = useLanguage();

  const t = {
    en: {
      badge: 'We Treat',
      h1: 'Conditions',
      intro: 'Health4Life Chiropractic treats a wide range of musculoskeletal complaints. Select a condition for more information about causes, symptoms and treatment.',
      ctaTitle: 'Condition not listed?',
      ctaDesc: 'Contact us — Dr. Jahani is happy to discuss whether chiropractic can help you.',
      ctaBtn: 'Book Appointment',
      conditions: [
        { title: 'Whiplash', href: `/${language}/klachten/whiplash`, desc: 'Sudden neck movement from accident or fall — neck pain, headaches, dizziness, tingling.' },
        { title: 'Lower Back Pain', href: `/${language}/klachten/lage-rugpijn`, desc: '80% of the population experiences lower back pain at some point. Complaints from muscles, joints or discs.' },
        { title: 'Upper Back & Shoulder', href: `/${language}/klachten/bovenrug-schouder`, desc: 'Pain between shoulder blades, radiating to arms or chest. Often caused by posture.' },
        { title: 'Neck Pain', href: `/${language}/klachten/nek`, desc: 'Stiff neck and shoulders, dizziness, tingling in hands. Gradual or sudden onset.' },
        { title: 'Herniated Disc', href: `/${language}/klachten/hernia`, desc: 'Herniated nucleus pulposus (HNP) — bulging disc pressing on nerves, radiating pain to leg or arm.' },
        { title: 'Pregnancy', href: `/${language}/klachten/zwangerschap`, desc: 'Safe chiropractic care during pregnancy. Lower back pain, pelvic instability, nausea.' },
        { title: 'Sports Injuries', href: `/${language}/klachten/sportblessures`, desc: 'Prevention and treatment of sports injuries. Athletes require a specialised approach.' },
        { title: 'Headache & Migraine', href: `/${language}/klachten/hoofdpijn-en-migraine`, desc: 'Migraine affects 1 in 10 adults. Chiropractic treats the cause, not just the symptom.' },
        { title: 'Tension Headache', href: `/${language}/klachten/hoofdpijn-spanningshoofdpijn`, desc: 'Pressing pain like a band around the head, often originating in the neck. Stress and posture as causes.' },
        { title: 'Children', href: `/${language}/klachten/kinderen`, desc: 'Complaints in children from falls, sports or prolonged sitting. Faster recovery than in adults.' },
        { title: "Babies", href: `/${language}/klachten/baby-s`, desc: 'KISS syndrome, excessive crying, sleep problems, feeding difficulties. Playful, child-friendly treatment.' },
        { title: 'Arthritis / Wear', href: `/${language}/klachten/artrose-slijtage`, desc: 'Joint wear due to aging. Chiropractic can slow deterioration and reduce pain.' },
      ],
    },
    nl: {
      badge: 'Wij Behandelen',
      h1: 'Klachten',
      intro: 'Health4Life Chiropractic behandelt een breed scala aan klachten van het bewegingsapparaat. Kies een klacht voor meer informatie over oorzaken, symptomen en behandeling.',
      ctaTitle: 'Staat uw klacht er niet bij?',
      ctaDesc: 'Neem contact op — Dr. Jahani bespreekt graag of chiropractie u kan helpen.',
      ctaBtn: 'Afspraak maken',
      conditions: [
        { title: 'Whiplash', href: `/${language}/klachten/whiplash`, desc: 'Plotselinge nekbeweging door ongeluk of val — nekpijn, hoofdpijn, duizeligheid, tintelingen.' },
        { title: 'Lage Rugpijn', href: `/${language}/klachten/lage-rugpijn`, desc: '80% van de bevolking krijgt ooit te maken met lage rugpijn. Klachten van spieren, gewrichten of schijven.' },
        { title: 'Bovenrug & Schouder', href: `/${language}/klachten/bovenrug-schouder`, desc: 'Pijn tussen de schouderbladen, uitstralend naar de armen of borst. Vaak door houding.' },
        { title: 'Nek', href: `/${language}/klachten/nek`, desc: 'Stijve nek en schouders, duizeligheid, tintelingen in handen. Geleidelijk of plotseling.' },
        { title: 'Hernia', href: `/${language}/klachten/hernia`, desc: 'Hernia nuclei pulposi (HNP) — uitpuilende tussenwervelschijf, uitstralende pijn in been of arm.' },
        { title: 'Zwangerschap', href: `/${language}/klachten/zwangerschap`, desc: 'Veilige chiropractische zorg tijdens zwangerschap. Lage rugpijn, bekkeninstabiliteit, misselijkheid.' },
        { title: 'Sportblessures', href: `/${language}/klachten/sportblessures`, desc: 'Preventie en behandeling van sportblessures. Sporters vragen een speciale aanpak.' },
        { title: 'Hoofdpijn & Migraine', href: `/${language}/klachten/hoofdpijn-en-migraine`, desc: 'Migraine treft 1 op de 10 volwassenen. Chiropractie behandelt de oorzaak, niet alleen het symptoom.' },
        { title: 'Spanningshoofdpijn', href: `/${language}/klachten/hoofdpijn-spanningshoofdpijn`, desc: 'Drukkende pijn als een band om het hoofd, vaak vanuit de nek. Stress en houding als oorzaak.' },
        { title: 'Kinderen', href: `/${language}/klachten/kinderen`, desc: 'Klachten bij kinderen door val, sport of lang zitten. Sneller herstel dan bij volwassenen.' },
        { title: "Baby's", href: `/${language}/klachten/baby-s`, desc: "KISS-syndroom, overmatig huilen, slaapproblemen, voedingsproblemen. Speelse, kindvriendelijke behandeling." },
        { title: 'Artrose / Slijtage', href: `/${language}/klachten/artrose-slijtage`, desc: 'Gewrichtslijtage door veroudering. Chiropractie kan verslechtering remmen en pijn verminderen.' },
      ],
    },
  };

  const c = t[language];

  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">{c.badge}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">{c.h1}</h1>
            <p className="text-[#403F3F] max-w-2xl mx-auto leading-relaxed">
              {c.intro}
            </p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.conditions.map((cond, i) => (
              <Link
                key={i}
                href={cond.href}
                className="group bg-[#F6F6F6] rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#45321A] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white">
                      <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#191919] group-hover:text-[#45321A] transition-colors">{cond.title}</h3>
                </div>
                <p className="text-[#403F3F] text-sm leading-relaxed">{cond.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-14 bg-[#45321A]/5 border border-[#45321A]/20 rounded-2xl p-8 text-center">
            <h3 className="font-bold text-[#191919] text-xl mb-3">{c.ctaTitle}</h3>
            <p className="text-[#403F3F] mb-6">
              {c.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={`/${language}#booking`} className="bg-[#45321A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#5a4228] transition-colors">
                {c.ctaBtn}
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
