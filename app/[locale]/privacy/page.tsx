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

const content = {
  nl: {
    badge: 'Juridisch',
    title: 'Privacybeleid',
    updated: 'Laatst bijgewerkt: maart 2026',
    intro:
      'Health4Life Chiropractic hecht grote waarde aan de bescherming van uw persoonsgegevens. In dit privacybeleid informeren wij u over welke gegevens wij verwerken, waarom, en welke rechten u heeft — conform de Algemene Verordening Gegevensbescherming (AVG / GDPR).',

    sections: [
      {
        title: '1. Verwerkingsverantwoordelijke',
        body: [
          'De verwerkingsverantwoordelijke voor uw persoonsgegevens is:',
          'Health4Life Chiropractic\nDr. M. Jahani DC\nMaasstraat 103, 1073 PR Amsterdam\nTelefoon: 020-673 1800\nE-mail: health4life@amsterdamchiropractic.com',
        ],
      },
      {
        title: '2. Welke gegevens verwerken wij?',
        body: [
          'Wij verwerken de volgende categorieën persoonsgegevens:',
          '• Contactgegevens: naam, e-mailadres en telefoonnummer — verstrekt via het afspraakformulier op onze website.\n• Afspraakgegevens: datum en tijdstip van uw afspraak, en eventuele notities die u zelf invult.\n• Websitegebruik (alleen met uw toestemming): anonieme statistieken over paginabezoeken via Vercel Analytics. Er worden géén cookies geplaatst en er worden geen persoonsgegevens opgeslagen.',
        ],
      },
      {
        title: '3. Doeleinden en rechtsgrondslag',
        body: [
          'Wij verwerken uw gegevens voor de volgende doeleinden:\n\n• Het plannen en bevestigen van afspraken — rechtsgrondslag: uitvoering van een overeenkomst (art. 6 lid 1 sub b AVG).\n• Het verbeteren van onze website — rechtsgrondslag: uw toestemming (art. 6 lid 1 sub a AVG). U kunt deze toestemming te allen tijde intrekken via de cookiebanner.',
        ],
      },
      {
        title: '4. Bewaartermijnen',
        body: [
          'Contactgegevens en afspraakgegevens bewaren wij maximaal 12 maanden na uw laatste contact, tenzij u eerder verwijdering verzoekt. Anonieme analysedata bevat geen persoonsgegevens en wordt niet apart bewaard.',
        ],
      },
      {
        title: '5. Derden en sub-verwerkers',
        body: [
          'Wij delen uw gegevens niet met derden voor commerciële doeleinden. Wij maken gebruik van de volgende verwerkers:\n\n• Vercel Inc. (hosting en optionele analytics) — gevestigd in de VS, gecertificeerd onder het EU-VS Data Privacy Framework.\n• Supabase Inc. (opslag afspraakgegevens) — data wordt opgeslagen binnen de EU (Frankfurt).\n\nMet beide partijen zijn verwerkersovereenkomsten gesloten conform art. 28 AVG.',
        ],
      },
      {
        title: '6. Cookies',
        body: [
          'Onze website maakt gebruik van:\n\n• Functionele cookies: sla uw taalvoorkeur (NL/EN) op en uw cookievoorkeur. Deze zijn noodzakelijk voor het correct functioneren van de website en vereisen geen toestemming.\n• Analytische cookies (optioneel): Vercel Analytics plaatst géén cookies en slaat géén persoonsgegevens op. U kunt toestemming geven of weigeren via de cookiebanner bij uw eerste bezoek. U kunt uw keuze altijd wijzigen door uw browsergeschiedenis te wissen.',
        ],
      },
      {
        title: '7. Uw rechten',
        body: [
          'Op grond van de AVG heeft u de volgende rechten:\n\n• Recht op inzage — u kunt opvragen welke gegevens wij van u verwerken.\n• Recht op rectificatie — u kunt onjuiste gegevens laten corrigeren.\n• Recht op verwijdering — u kunt vragen om verwijdering van uw gegevens.\n• Recht op beperking van de verwerking.\n• Recht van bezwaar — u kunt bezwaar maken tegen de verwerking.\n• Recht op dataportabiliteit — u kunt uw gegevens in een gangbaar formaat opvragen.\n• Recht om toestemming in te trekken — u kunt uw toestemming voor analytics te allen tijde intrekken.\n\nOm een recht uit te oefenen kunt u contact met ons opnemen via health4life@amsterdamchiropractic.com. Wij reageren binnen 30 dagen.',
        ],
      },
      {
        title: '8. Klacht indienen',
        body: [
          'Als u van mening bent dat wij uw persoonsgegevens niet conform de AVG verwerken, heeft u het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens (AP):\n\nautoriteitspersoonsgegevens.nl\nTelefoon: 088 – 1805 250',
        ],
      },
      {
        title: '9. Wijzigingen',
        body: [
          'Wij behouden ons het recht voor dit privacybeleid te wijzigen. De meest actuele versie is altijd beschikbaar op deze pagina. De datum van de laatste wijziging staat bovenaan vermeld.',
        ],
      },
    ],

    contact: 'Vragen over dit beleid?',
    contactBtn: 'Neem contact op',
    back: 'Terug naar home',
  },

  en: {
    badge: 'Legal',
    title: 'Privacy Policy',
    updated: 'Last updated: March 2026',
    intro:
      'Health4Life Chiropractic is committed to protecting your personal data. This privacy policy explains what data we collect, why we collect it, and what rights you have — in accordance with the General Data Protection Regulation (GDPR).',

    sections: [
      {
        title: '1. Data Controller',
        body: [
          'The data controller responsible for your personal data is:',
          'Health4Life Chiropractic\nDr. M. Jahani DC\nMaasstraat 103, 1073 PR Amsterdam\nPhone: 020-673 1800\nEmail: health4life@amsterdamchiropractic.com',
        ],
      },
      {
        title: '2. What data do we collect?',
        body: [
          'We process the following categories of personal data:',
          '• Contact details: name, email address, and phone number — provided via the appointment form on our website.\n• Appointment details: date and time of your appointment, and any notes you enter.\n• Website usage (with your consent only): anonymous page-visit statistics via Vercel Analytics. No cookies are placed and no personal data is stored.',
        ],
      },
      {
        title: '3. Purposes and legal basis',
        body: [
          'We process your data for the following purposes:\n\n• Scheduling and confirming appointments — legal basis: performance of a contract (Art. 6(1)(b) GDPR).\n• Improving our website — legal basis: your consent (Art. 6(1)(a) GDPR). You may withdraw this consent at any time via the cookie banner.',
        ],
      },
      {
        title: '4. Retention periods',
        body: [
          'We retain contact and appointment data for a maximum of 12 months after your last contact, unless you request deletion earlier. Anonymous analytics data contains no personal data and is not separately retained.',
        ],
      },
      {
        title: '5. Third parties and sub-processors',
        body: [
          'We do not share your data with third parties for commercial purposes. We use the following processors:\n\n• Vercel Inc. (hosting and optional analytics) — based in the US, certified under the EU-US Data Privacy Framework.\n• Supabase Inc. (appointment data storage) — data is stored within the EU (Frankfurt).\n\nData processing agreements compliant with Art. 28 GDPR are in place with both parties.',
        ],
      },
      {
        title: '6. Cookies',
        body: [
          'Our website uses:\n\n• Functional cookies: to remember your language preference (NL/EN) and cookie consent choice. These are necessary for the website to function correctly and do not require consent.\n• Analytical cookies (optional): Vercel Analytics does not place cookies or store personal data. You can grant or refuse consent via the cookie banner on your first visit. You can change your choice at any time by clearing your browser history.',
        ],
      },
      {
        title: '7. Your rights',
        body: [
          'Under the GDPR you have the following rights:\n\n• Right of access — you can request what data we hold about you.\n• Right to rectification — you can have incorrect data corrected.\n• Right to erasure — you can request deletion of your data.\n• Right to restriction of processing.\n• Right to object to processing.\n• Right to data portability — you can request your data in a machine-readable format.\n• Right to withdraw consent — you can withdraw your analytics consent at any time.\n\nTo exercise a right, contact us at health4life@amsterdamchiropractic.com. We will respond within 30 days.',
        ],
      },
      {
        title: '8. Complaints',
        body: [
          'If you believe we are not processing your personal data in accordance with the GDPR, you have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens):\n\nautoriteitspersoonsgegevens.nl\nPhone: 088 – 1805 250',
        ],
      },
      {
        title: '9. Changes to this policy',
        body: [
          'We reserve the right to update this privacy policy. The most current version is always available on this page. The date of the last update is shown at the top.',
        ],
      },
    ],

    contact: 'Questions about this policy?',
    contactBtn: 'Get in touch',
    back: 'Back to home',
  },
};

export default function PrivacyPage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-brand-dark bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-brand-primary text-sm font-semibold uppercase tracking-widest">{c.badge}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4 text-brand-dark">{c.title}</h1>
            <p className="text-brand-muted/60 text-sm">{c.updated}</p>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Intro */}
          <p className="text-brand-muted leading-relaxed mb-12 text-base">{c.intro}</p>

          {/* Sections */}
          <div className="space-y-10">
            {c.sections.map((section, i) => (
              <div key={i} className="border-l-2 border-brand-primary/20 pl-6">
                <h2 className="text-xl font-bold text-brand-dark mb-4">{section.title}</h2>
                {section.body.map((paragraph, j) => (
                  <p
                    key={j}
                    className="text-brand-muted leading-relaxed text-sm mb-3 whitespace-pre-line last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-brand-light rounded-2xl p-8 text-center">
            <p className="text-brand-dark font-semibold mb-4">{c.contact}</p>
            <a
              href="mailto:health4life@amsterdamchiropractic.com"
              className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-primary-hover transition-colors text-sm"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {c.contactBtn}
            </a>
          </div>

          {/* Back link */}
          <div className="mt-10 text-center">
            <Link
              href={`/${language}`}
              className="text-brand-primary font-semibold text-sm hover:underline inline-flex items-center gap-1.5"
            >
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current rotate-180">
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
              {c.back}
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
