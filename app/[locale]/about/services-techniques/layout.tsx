import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const base = 'https://www.amsterdamchiropractic.com';
  return {
    title: isEn ? 'Services & Techniques | Health4Life Chiropractic' : 'Diensten & Technieken | Health4Life Chiropractic',
    description: isEn
      ? 'Full overview of chiropractic services and techniques at Health4Life Amsterdam: neuro-based correction, medical acupuncture, spinal decompression and more.'
      : 'Volledig overzicht van chiropractische diensten en technieken bij Health4Life Amsterdam: neurale correctie, medische acupunctuur, spinale decompressie en meer.',
    alternates: {
      canonical: `${base}/${locale}/about/services-techniques`,
      languages: {
        'nl': `${base}/nl/about/services-techniques`,
        'en': `${base}/en/about/services-techniques`,
      },
    },
    openGraph: {
      title: isEn ? 'Services & Techniques | Health4Life Chiropractic' : 'Diensten & Technieken | Health4Life Chiropractic',
      description: isEn
        ? 'Full overview of chiropractic services and techniques at Health4Life Amsterdam: neuro-based correction, medical acupuncture, spinal decompression and more.'
        : 'Volledig overzicht van chiropractische diensten en technieken bij Health4Life Amsterdam: neurale correctie, medische acupunctuur, spinale decompressie en meer.',
      url: `${base}/${locale}/about/services-techniques`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
