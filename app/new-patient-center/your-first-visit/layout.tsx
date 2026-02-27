import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uw Eerste Bezoek',
  description: 'Wat kunt u verwachten bij uw eerste bezoek aan Health4Life Chiropractic Amsterdam? Praktische informatie voor nieuwe patiënten.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/new-patient-center/your-first-visit' },
  openGraph: {
    title: 'Uw Eerste Bezoek',
    description: 'Wat kunt u verwachten bij uw eerste bezoek aan Health4Life Chiropractic Amsterdam? Praktische informatie voor nieuwe patiënten.',
    url: 'https://www.amsterdamchiropractic.com/new-patient-center/your-first-visit',
  },
};

export default function YourFirstVisitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
