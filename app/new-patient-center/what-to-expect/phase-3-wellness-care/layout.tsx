import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fase 3: Wellness Care',
  description: 'Fase 3 van chiropractische behandeling bij Health4Life Amsterdam: onderhoud en preventie voor optimale gezondheid op de lange termijn.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/new-patient-center/what-to-expect/phase-3-wellness-care' },
  openGraph: {
    title: 'Fase 3: Wellness Care',
    description: 'Fase 3 van chiropractische behandeling bij Health4Life Amsterdam: onderhoud en preventie voor optimale gezondheid op de lange termijn.',
    url: 'https://www.amsterdamchiropractic.com/new-patient-center/what-to-expect/phase-3-wellness-care',
  },
};

export default function Phase3Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
