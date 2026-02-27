import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wellness Partners',
  description: 'Samenwerkende zorgverleners en partners van Health4Life Chiropractic Amsterdam voor een integrale aanpak van uw gezondheid.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/wellness-partners' },
  openGraph: {
    title: 'Wellness Partners',
    description: 'Samenwerkende zorgverleners en partners van Health4Life Chiropractic Amsterdam voor een integrale aanpak van uw gezondheid.',
    url: 'https://www.amsterdamchiropractic.com/wellness-partners',
  },
};

export default function WellnessPartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
