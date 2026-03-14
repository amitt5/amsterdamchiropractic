import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const base = 'https://www.amsterdamchiropractic.com';
  return {
    title: isEn ? 'Privacy Policy | Health4Life Chiropractic' : 'Privacybeleid | Health4Life Chiropractic',
    description: isEn
      ? 'Read the privacy policy of Health4Life Chiropractic Amsterdam. Learn how we handle your personal data in accordance with GDPR.'
      : 'Lees het privacybeleid van Health4Life Chiropractic Amsterdam. Ontdek hoe wij uw persoonsgegevens verwerken conform de AVG.',
    alternates: {
      canonical: `${base}/${locale}/privacy`,
      languages: {
        'nl': `${base}/nl/privacy`,
        'en': `${base}/en/privacy`,
      },
    },
    openGraph: {
      title: isEn ? 'Privacy Policy | Health4Life Chiropractic' : 'Privacybeleid | Health4Life Chiropractic',
      url: `${base}/${locale}/privacy`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
