import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fase 1: Relief Care',
  description: 'Fase 1 van chiropractische behandeling bij Health4Life Amsterdam: pijnverlichting en herstel van beweeglijkheid als eerste stap.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/new-patient-center/what-to-expect/phase-1-relief-care' },
  openGraph: {
    title: 'Fase 1: Relief Care',
    description: 'Fase 1 van chiropractische behandeling bij Health4Life Amsterdam: pijnverlichting en herstel van beweeglijkheid als eerste stap.',
    url: 'https://www.amsterdamchiropractic.com/new-patient-center/what-to-expect/phase-1-relief-care',
  },
};

export default function Phase1Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
