import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const base = 'https://www.amsterdamchiropractic.com';
  return {
    title: isEn ? 'Patient Forms | Health4Life Chiropractic' : 'Patiëntformulieren | Health4Life Chiropractic',
    description: isEn
      ? 'Download and complete your patient intake forms before your first visit to Health4Life Chiropractic Amsterdam. Save time at the clinic.'
      : 'Download en vul uw patiëntformulieren in vóór uw eerste bezoek aan Health4Life Chiropractic Amsterdam. Bespaar tijd bij de kliniek.',
    alternates: {
      canonical: `${base}/${locale}/patient-forms`,
      languages: {
        'nl': `${base}/nl/patient-forms`,
        'en': `${base}/en/patient-forms`,
      },
    },
    openGraph: {
      title: isEn ? 'Patient Forms | Health4Life Chiropractic' : 'Patiëntformulieren | Health4Life Chiropractic',
      url: `${base}/${locale}/patient-forms`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
