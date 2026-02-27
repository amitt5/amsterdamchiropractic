import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nieuw Patiënt Center',
  description: 'Alles wat u moet weten als nieuwe patiënt bij Health4Life Chiropractic Amsterdam: uw eerste bezoek, wat te verwachten en betaalopties.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/new-patient-center' },
  openGraph: {
    title: 'Nieuw Patiënt Center',
    description: 'Alles wat u moet weten als nieuwe patiënt bij Health4Life Chiropractic Amsterdam: uw eerste bezoek, wat te verwachten en betaalopties.',
    url: 'https://www.amsterdamchiropractic.com/new-patient-center',
  },
};

export default function NewPatientCenterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
