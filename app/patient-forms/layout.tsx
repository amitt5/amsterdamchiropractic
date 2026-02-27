import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patiëntformulieren',
  description: 'Download of vul uw patiëntformulieren in voor Health4Life Chiropractic Amsterdam. Bespaar tijd bij uw eerste bezoek.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/patient-forms' },
  openGraph: {
    title: 'Patiëntformulieren',
    description: 'Download of vul uw patiëntformulieren in voor Health4Life Chiropractic Amsterdam. Bespaar tijd bij uw eerste bezoek.',
    url: 'https://www.amsterdamchiropractic.com/patient-forms',
  },
};

export default function PatientFormsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
