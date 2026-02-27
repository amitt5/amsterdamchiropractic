import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gezondheidsinfo & Artikelen',
  description: 'Nuttige informatie over chiropractie, ruggezondheid en preventie van Health4Life Chiropractic Amsterdam.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/health-resources' },
  openGraph: {
    title: 'Gezondheidsinfo & Artikelen',
    description: 'Nuttige informatie over chiropractie, ruggezondheid en preventie van Health4Life Chiropractic Amsterdam.',
    url: 'https://www.amsterdamchiropractic.com/health-resources',
  },
};

export default function HealthResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
