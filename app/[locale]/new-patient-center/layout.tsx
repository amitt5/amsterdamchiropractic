import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const base = 'https://www.amsterdamchiropractic.com';
  return {
    title: isEn ? 'New Patient Center | Health4Life Chiropractic' : 'Nieuwe Patiënten Centrum | Health4Life Chiropractic',
    description: isEn
      ? 'Everything you need to know as a new patient at Health4Life Chiropractic Amsterdam: your first visit, what to expect and payment options.'
      : 'Alles wat u moet weten als nieuwe patiënt bij Health4Life Chiropractic Amsterdam: uw eerste bezoek, wat te verwachten en betaalopties.',
    alternates: {
      canonical: `${base}/${locale}/new-patient-center`,
      languages: {
        'nl': `${base}/nl/new-patient-center`,
        'en': `${base}/en/new-patient-center`,
      },
    },
    openGraph: {
      title: isEn ? 'New Patient Center | Health4Life Chiropractic' : 'Nieuwe Patiënten Centrum | Health4Life Chiropractic',
      description: isEn
        ? 'Everything you need to know as a new patient at Health4Life Chiropractic Amsterdam: your first visit, what to expect and payment options.'
        : 'Alles wat u moet weten als nieuwe patiënt bij Health4Life Chiropractic Amsterdam: uw eerste bezoek, wat te verwachten en betaalopties.',
      url: `${base}/${locale}/new-patient-center`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
