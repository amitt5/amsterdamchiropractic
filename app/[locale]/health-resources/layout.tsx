import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const base = 'https://www.amsterdamchiropractic.com';
  return {
    title: isEn ? 'Health Resources | Health4Life Chiropractic' : 'Gezondheidsinfo | Health4Life Chiropractic',
    description: isEn
      ? 'Curated chiropractic and wellness resources: NCA, SCN, complementary therapies, children\'s health and more. Health4Life Chiropractic Amsterdam.'
      : 'Geselecteerde chiropractische en welzijnsbronnen: NCA, SCN, aanvullende therapieën, kindergezondheid en meer. Health4Life Chiropractic Amsterdam.',
    alternates: {
      canonical: `${base}/${locale}/health-resources`,
      languages: {
        'nl': `${base}/nl/health-resources`,
        'en': `${base}/en/health-resources`,
      },
    },
    openGraph: {
      title: isEn ? 'Health Resources | Health4Life Chiropractic' : 'Gezondheidsinfo | Health4Life Chiropractic',
      url: `${base}/${locale}/health-resources`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
