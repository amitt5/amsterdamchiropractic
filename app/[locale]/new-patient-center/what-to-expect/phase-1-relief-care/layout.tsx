import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const base = 'https://www.amsterdamchiropractic.com';
  return {
    title: isEn ? 'Phase 1: Relief Care | Health4Life Chiropractic' : 'Fase 1: Verlichtingszorg | Health4Life Chiropractic',
    description: isEn
      ? 'Phase 1 of chiropractic care at Health4Life Amsterdam: Relief Care — reducing your pain and discomfort as quickly as possible.'
      : 'Fase 1 van chiropractische zorg bij Health4Life Amsterdam: Verlichtingszorg — uw pijn en ongemak zo snel mogelijk verminderen.',
    alternates: {
      canonical: `${base}/${locale}/new-patient-center/what-to-expect/phase-1-relief-care`,
      languages: {
        'nl': `${base}/nl/new-patient-center/what-to-expect/phase-1-relief-care`,
        'en': `${base}/en/new-patient-center/what-to-expect/phase-1-relief-care`,
      },
    },
    openGraph: {
      title: isEn ? 'Phase 1: Relief Care | Health4Life Chiropractic' : 'Fase 1: Verlichtingszorg | Health4Life Chiropractic',
      url: `${base}/${locale}/new-patient-center/what-to-expect/phase-1-relief-care`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
