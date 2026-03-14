import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const base = 'https://www.amsterdamchiropractic.com';
  return {
    title: isEn ? 'Your First Visit | Health4Life Chiropractic' : 'Uw Eerste Bezoek | Health4Life Chiropractic',
    description: isEn
      ? 'What to expect at your first chiropractic appointment at Health4Life Amsterdam — step by step, from intake forms to your personalised wellness program.'
      : 'Wat u kunt verwachten bij uw eerste chiropractische afspraak bij Health4Life Amsterdam — stap voor stap, van intakeformulier tot uw persoonlijk welzijnsprogramma.',
    alternates: {
      canonical: `${base}/${locale}/new-patient-center/your-first-visit`,
      languages: {
        'nl': `${base}/nl/new-patient-center/your-first-visit`,
        'en': `${base}/en/new-patient-center/your-first-visit`,
      },
    },
    openGraph: {
      title: isEn ? 'Your First Visit | Health4Life Chiropractic' : 'Uw Eerste Bezoek | Health4Life Chiropractic',
      description: isEn
        ? 'What to expect at your first chiropractic appointment at Health4Life Amsterdam — step by step, from intake forms to your personalised wellness program.'
        : 'Wat u kunt verwachten bij uw eerste chiropractische afspraak bij Health4Life Amsterdam — stap voor stap, van intakeformulier tot uw persoonlijk welzijnsprogramma.',
      url: `${base}/${locale}/new-patient-center/your-first-visit`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
