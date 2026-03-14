import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const base = 'https://www.amsterdamchiropractic.com';
  return {
    title: isEn ? 'Phase 2: Corrective Care | Health4Life Chiropractic' : 'Fase 2: Correctieve Zorg | Health4Life Chiropractic',
    description: isEn
      ? 'Phase 2 of chiropractic care at Health4Life Amsterdam: Corrective Care — addressing underlying structural issues to prevent recurrence.'
      : 'Fase 2 van chiropractische zorg bij Health4Life Amsterdam: Correctieve Zorg — de onderliggende structurele problemen aanpakken om terugkeer te voorkomen.',
    alternates: {
      canonical: `${base}/${locale}/new-patient-center/what-to-expect/phase-2-corrective-care`,
      languages: {
        'nl': `${base}/nl/new-patient-center/what-to-expect/phase-2-corrective-care`,
        'en': `${base}/en/new-patient-center/what-to-expect/phase-2-corrective-care`,
      },
    },
    openGraph: {
      title: isEn ? 'Phase 2: Corrective Care | Health4Life Chiropractic' : 'Fase 2: Correctieve Zorg | Health4Life Chiropractic',
      url: `${base}/${locale}/new-patient-center/what-to-expect/phase-2-corrective-care`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
