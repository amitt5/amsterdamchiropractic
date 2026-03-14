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

export default function ServicesTechniquesPage() {
  const { language } = useLanguage();

  const t = {
    en: {
      badge: 'What We Offer',
      h1: 'Services & Techniques',
      intro: 'Health4Life offers a comprehensive range of chiropractic and complementary therapies — all tailored to your individual needs.',
      ctaBtn: 'View All Techniques in Detail',
      services: [
        { title: 'Neuro-Based Spinal Correction', href: `/${language}/techniques`, desc: 'Our primary technique — targets the neurological cause of spinal misalignment to restore optimal nerve function.' },
        { title: 'Medical Acupuncture', href: `/${language}/techniques`, desc: 'Western-medical acupuncture integrated into treatment plans for pain relief and nervous system support.' },
        { title: 'Deep Tissue Massage / Therapeutic Massage', href: `/${language}/techniques`, desc: 'Soft-tissue therapy to release muscle tension, improve circulation, and prepare the body for chiropractic correction.' },
        { title: 'Custom Foot Orthotics (Foot Levelers)', href: `/${language}/techniques`, desc: 'High-tech digital foot scan followed by custom-made orthotic insoles to improve posture from the ground up.' },
        { title: 'Fysio-Chiro Combined Therapy', href: `/${language}/fysio-chiro-gecombineerde-therapie`, desc: 'Deep tissue physiotherapy combined with chiropractic in one visit — covered by most Dutch supplemental insurance.' },
        { title: 'Spinal Decompression Therapy', href: `/${language}/techniques`, desc: 'Non-surgical traction to relieve pressure on herniated or degenerated discs and compressed nerves.' },
        { title: 'Percussor Adjustment', href: `/${language}/techniques`, desc: 'Mechanical percussion device that relaxes muscles and improves joint mobility before adjustment.' },
        { title: 'Myovision Scan', href: `/${language}/techniques`, desc: 'Surface electromyography to objectively measure nerve function and track your progress.' },
      ],
    },
    nl: {
      badge: 'Wat Wij Bieden',
      h1: 'Diensten & Technieken',
      intro: 'Health4Life biedt een uitgebreid aanbod van chiropractische en aanvullende therapieën — allemaal op maat van uw individuele behoeften.',
      ctaBtn: 'Bekijk Alle Technieken in Detail',
      services: [
        { title: 'Neurale Wervelkolomcorrectie', href: `/${language}/techniques`, desc: 'Onze primaire techniek — richt zich op de neurologische oorzaak van wervelkolomverkeerde uitlijning om optimale zenuwfunctie te herstellen.' },
        { title: 'Medische Acupunctuur', href: `/${language}/techniques`, desc: 'Westerse medische acupunctuur geïntegreerd in behandelplannen voor pijnverlichting en ondersteuning van het zenuwstelsel.' },
        { title: 'Diepe Weefselmassage / Therapeutische Massage', href: `/${language}/techniques`, desc: 'Zachte weefseltherapie om spierspanning los te maken, de doorbloeding te verbeteren en het lichaam voor te bereiden op chiropractische correctie.' },
        { title: 'Op Maat Gemaakte Voetorthesen (Foot Levelers)', href: `/${language}/techniques`, desc: 'Hoogwaardige digitale voetscan gevolgd door op maat gemaakte orthopedische inlegzolen om de houding van de grond af te verbeteren.' },
        { title: 'Fysio-Chiro Gecombineerde Therapie', href: `/${language}/fysio-chiro-gecombineerde-therapie`, desc: 'Diepe weefsel fysiotherapie gecombineerd met chiropractie in één bezoek — vergoed door de meeste Nederlandse aanvullende verzekeringen.' },
        { title: 'Spinale Decompressietherapie', href: `/${language}/techniques`, desc: 'Niet-chirurgische tractie om druk op hernieerde of gedegenereerde schijven en gecomprimeerde zenuwen te verlichten.' },
        { title: 'Percussor Aanpassing', href: `/${language}/techniques`, desc: 'Mechanisch percussiemiddel dat spieren ontspant en de gewrichtsmobiliteit verbetert vóór aanpassing.' },
        { title: 'Myovision Scan', href: `/${language}/techniques`, desc: 'Oppervlakte-elektromyografie om zenuwfunctie objectief te meten en uw voortgang bij te houden.' },
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

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {c.services.map((s, i) => (
              <Link key={i} href={s.href} className="group bg-[#F6F6F6] rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#45321A] flex-shrink-0 flex items-center justify-center mt-0.5">
                  <svg viewBox="0 0 20 20" className="w-5 h-5 fill-white">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#191919] mb-2 group-hover:text-[#45321A] transition-colors">{s.title}</h3>
                  <p className="text-[#403F3F] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href={`/${language}/techniques`} className="inline-flex items-center gap-2 bg-[#45321A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#5a4228] transition-colors">
              {c.ctaBtn}
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
