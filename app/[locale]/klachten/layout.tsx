import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const base = 'https://www.amsterdamchiropractic.com';
  return {
    title: isEn
      ? 'Conditions We Treat | Health4Life Chiropractic Amsterdam'
      : 'Klachten & Behandelingen | Health4Life Chiropractic Amsterdam',
    description: isEn
      ? 'Overview of all conditions treated by Health4Life Chiropractic: back pain, neck pain, headache, herniated disc, whiplash, sports injuries and more. Amsterdam Zuid.'
      : 'Overzicht van alle klachten die Health4Life Chiropractic behandelt: rugpijn, nekpijn, hoofdpijn, hernia, whiplash, sportblessures en meer. Amsterdam Zuid.',
    alternates: {
      canonical: `${base}/${locale}/klachten`,
      languages: {
        'nl': `${base}/nl/klachten`,
        'en': `${base}/en/klachten`,
      },
    },
    openGraph: {
      title: isEn
        ? 'Conditions We Treat | Health4Life Chiropractic Amsterdam'
        : 'Klachten & Behandelingen | Health4Life Chiropractic Amsterdam',
      description: isEn
        ? 'Overview of all conditions treated by Health4Life Chiropractic: back pain, neck pain, headache, herniated disc, whiplash, sports injuries and more. Amsterdam Zuid.'
        : 'Overzicht van alle klachten die Health4Life Chiropractic behandelt: rugpijn, nekpijn, hoofdpijn, hernia, whiplash, sportblessures en meer. Amsterdam Zuid.',
      url: `${base}/${locale}/klachten`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
