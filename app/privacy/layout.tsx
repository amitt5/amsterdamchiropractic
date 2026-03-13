import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacybeleid | Health4Life Chiropractic Amsterdam',
  description: 'Lees hoe Health4Life Chiropractic Amsterdam omgaat met uw persoonsgegevens — conform de AVG / GDPR.',
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
