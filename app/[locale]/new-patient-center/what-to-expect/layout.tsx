import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const base = 'https://www.amsterdamchiropractic.com';
  return {
    title: isEn ? 'What to Expect | Health4Life Chiropractic' : 'Wat te Verwachten | Health4Life Chiropractic',
    description: isEn
      ? 'The three phases of chiropractic care at Health4Life Amsterdam: Relief Care, Corrective Care and Wellness Care — explained step by step.'
      : 'De drie fasen van chiropractische zorg bij Health4Life Amsterdam: verlichtingszorg, correctieve zorg en welzijnszorg — stap voor stap uitgelegd.',
    alternates: {
      canonical: `${base}/${locale}/new-patient-center/what-to-expect`,
      languages: {
        'nl': `${base}/nl/new-patient-center/what-to-expect`,
        'en': `${base}/en/new-patient-center/what-to-expect`,
      },
    },
    openGraph: {
      title: isEn ? 'What to Expect | Health4Life Chiropractic' : 'Wat te Verwachten | Health4Life Chiropractic',
      description: isEn
        ? 'The three phases of chiropractic care at Health4Life Amsterdam: Relief Care, Corrective Care and Wellness Care — explained step by step.'
        : 'De drie fasen van chiropractische zorg bij Health4Life Amsterdam: verlichtingszorg, correctieve zorg en welzijnszorg — stap voor stap uitgelegd.',
      url: `${base}/${locale}/new-patient-center/what-to-expect`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
