import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const base = 'https://www.amsterdamchiropractic.com';
  return {
    title: isEn ? 'Phase 3: Wellness Care | Health4Life Chiropractic' : 'Fase 3: Welzijnszorg | Health4Life Chiropractic',
    description: isEn
      ? 'Phase 3 of chiropractic care at Health4Life Amsterdam: Wellness Care — routine maintenance to keep your spine healthy and prevent recurrence.'
      : 'Fase 3 van chiropractische zorg bij Health4Life Amsterdam: Welzijnszorg — routinematig onderhoud voor een gezonde wervelkolom en preventie van terugkeer.',
    alternates: {
      canonical: `${base}/${locale}/new-patient-center/what-to-expect/phase-3-wellness-care`,
      languages: {
        'nl': `${base}/nl/new-patient-center/what-to-expect/phase-3-wellness-care`,
        'en': `${base}/en/new-patient-center/what-to-expect/phase-3-wellness-care`,
      },
    },
    openGraph: {
      title: isEn ? 'Phase 3: Wellness Care | Health4Life Chiropractic' : 'Fase 3: Welzijnszorg | Health4Life Chiropractic',
      url: `${base}/${locale}/new-patient-center/what-to-expect/phase-3-wellness-care`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
