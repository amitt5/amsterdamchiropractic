import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fase 2: Corrective Care',
  description: 'Fase 2 van chiropractische behandeling bij Health4Life Amsterdam: correctie van de onderliggende oorzaak voor duurzaam herstel.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/new-patient-center/what-to-expect/phase-2-corrective-care' },
  openGraph: {
    title: 'Fase 2: Corrective Care',
    description: 'Fase 2 van chiropractische behandeling bij Health4Life Amsterdam: correctie van de onderliggende oorzaak voor duurzaam herstel.',
    url: 'https://www.amsterdamchiropractic.com/new-patient-center/what-to-expect/phase-2-corrective-care',
  },
};

export default function Phase2Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
