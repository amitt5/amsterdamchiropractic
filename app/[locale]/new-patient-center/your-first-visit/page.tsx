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

export default function YourFirstVisitPage() {
  const { language } = useLanguage();

  const t = {
    en: {
      badge: 'New Patient Center',
      title: 'Your First Visit',
      subtitle: 'Here is exactly what to expect during your first appointment at Health4Life Chiropractic — step by step.',
      ctaTitle: 'Ready to Begin?',
      ctaDesc: 'Book your first appointment today. We look forward to meeting you and helping you on your journey to better health.',
      bookBtn: 'Book Appointment',
      formsBtn: 'Download Patient Forms',
      steps: [
        {
          num: '01',
          title: 'Patient Forms',
          desc: 'Complete your new patient intake form before arriving. This covers your medical history, current complaints, and relevant personal information. You can download the forms from our Patient Forms page or email them in advance.',
        },
        {
          num: '02',
          title: 'Consultation',
          desc: 'Dr. Jahani will sit down with you to thoroughly discuss your health concerns — how and when they started, their nature, and how they affect your daily life. This is your opportunity to ask questions and clarify anything on the intake form.',
        },
        {
          num: '03',
          title: 'Examination',
          desc: 'A comprehensive neurological, orthopedic, and chiropractic examination is performed. This includes assessments of joint mobility, muscle strength, reflexes, and posture to identify the source of your complaints.',
        },
        {
          num: '04',
          title: 'X-Ray Studies (if needed)',
          desc: 'If clinically indicated, X-rays may be taken to provide a detailed view of your spinal structure and help guide the most accurate and safe treatment plan.',
        },
        {
          num: '05',
          title: 'Report of Findings',
          desc: 'Dr. Jahani will explain his findings in clear, understandable terms — what is causing your problem, what can be done about it, and how long recovery is likely to take.',
        },
        {
          num: '06',
          title: 'Treatment',
          desc: 'At the end of the examination, Dr. Jahani will explain the most effective and suitable treatment options. You may agree to proceed with the treatment or not — the choice is entirely yours. Since there are no extra fees for the first treatment, it is highly advisable to try it and see the difference for yourself. A personalised treatment plan can only be made after the first treatment; without it, we are unable to make future care recommendations.',
        },
        {
          num: '07',
          title: 'Wellness Program',
          desc: 'If necessary, Dr. Jahani or associates will suggest a home wellness program which may include stretching and strengthening exercises, as well as ice/heat instructions to support your recovery between visits.',
        },
      ],
    },
    nl: {
      badge: 'Nieuwe Patiënten Centrum',
      title: 'Uw Eerste Bezoek',
      subtitle: 'Hier is precies wat u kunt verwachten tijdens uw eerste afspraak bij Health4Life Chiropractic — stap voor stap.',
      ctaTitle: 'Klaar om te beginnen?',
      ctaDesc: 'Boek vandaag nog uw eerste afspraak. Wij kijken ernaar uit u te ontmoeten en u te helpen op weg naar betere gezondheid.',
      bookBtn: 'Afspraak Boeken',
      formsBtn: 'Patiëntformulieren Downloaden',
      steps: [
        {
          num: '01',
          title: 'Patiëntformulieren',
          desc: 'Vul vóór uw bezoek het nieuwe patiëntintakeformulier in. Dit omvat uw medische geschiedenis, huidige klachten en relevante persoonlijke informatie. U kunt de formulieren downloaden via onze Patiëntformulieren pagina of ze van tevoren e-mailen.',
        },
        {
          num: '02',
          title: 'Consultatie',
          desc: 'Dr. Jahani zal met u uitgebreid uw gezondheidsproblemen bespreken — hoe en wanneer ze zijn begonnen, hun aard en hoe ze uw dagelijks leven beïnvloeden. Dit is uw kans om vragen te stellen en het intakeformulier te verduidelijken.',
        },
        {
          num: '03',
          title: 'Onderzoek',
          desc: 'Er wordt een uitgebreid neurologisch, orthopedisch en chiropractisch onderzoek uitgevoerd. Dit omvat beoordelingen van gewrichtsmobiliteit, spierkracht, reflexen en houding om de oorzaak van uw klachten te bepalen.',
        },
        {
          num: '04',
          title: "Röntgenfoto's (indien nodig)",
          desc: "Als dit klinisch geïndiceerd is, kunnen röntgenfoto's worden gemaakt voor een gedetailleerd beeld van uw wervelkolomstructuur en voor het opstellen van het meest nauwkeurige en veilige behandelplan.",
        },
        {
          num: '05',
          title: 'Bevindingen Rapportage',
          desc: 'Dr. Jahani zal zijn bevindingen in duidelijke, begrijpelijke termen uitleggen — wat uw probleem veroorzaakt, wat eraan gedaan kan worden en hoe lang herstel waarschijnlijk duurt.',
        },
        {
          num: '06',
          title: 'Behandeling',
          desc: 'Aan het einde van het onderzoek zal Dr. Jahani de meest effectieve en geschikte behandelopties toelichten. U kunt zelf beslissen of u met de behandeling instemt of niet. Omdat er geen extra kosten zijn voor de eerste behandeling, is het sterk aan te raden het te proberen en het verschil zelf te ervaren. Een persoonlijk behandelplan kan alleen worden opgesteld na de eerste behandeling; zonder dit zijn we niet in staat aanbevelingen voor toekomstige zorg te doen.',
        },
        {
          num: '07',
          title: 'Welzijnsprogramma',
          desc: 'Indien nodig zal Dr. Jahani of een medewerker een thuiswelzijnsprogramma voorstellen, dat rek- en versterkingsoefeningen kan omvatten, evenals instructies voor ijs/warmte-therapie ter ondersteuning van uw herstel tussen bezoeken.',
        },
      ],
    },
  };

  const c = t[language];

  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-brand-dark bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-brand-primary text-sm font-semibold uppercase tracking-widest">{c.badge}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-brand-dark">{c.title}</h1>
            <p className="text-brand-muted max-w-2xl mx-auto leading-relaxed">{c.subtitle}</p>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="space-y-6 mb-14">
            {c.steps.map((step, i) => (
              <div key={i} className="flex gap-6 bg-brand-light rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary flex items-center justify-center">
                    <span className="text-white font-extrabold text-lg">{step.num}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg mb-2">{step.title}</h3>
                  <p className="text-brand-muted leading-relaxed text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-2xl p-8 text-center">
            <h3 className="font-bold text-brand-dark text-xl mb-3">{c.ctaTitle}</h3>
            <p className="text-brand-muted mb-6">{c.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={`/${language}#booking`} className="bg-brand-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-primary-hover transition-colors">
                {c.bookBtn}
              </Link>
              <Link href={`/${language}/patient-forms`} className="border border-brand-primary text-brand-primary font-semibold px-8 py-4 rounded-full hover:bg-brand-primary/5 transition-colors">
                {c.formsBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
