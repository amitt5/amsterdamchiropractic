import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Behandeltechnieken',
  description: 'Ontdek de chiropractische behandeltechnieken van Health4Life Amsterdam: spinal manipulation, soft tissue therapie, dry needling en functionele neurologie.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/techniques' },
  openGraph: {
    title: 'Behandeltechnieken',
    description: 'Ontdek de chiropractische behandeltechnieken van Health4Life Amsterdam: spinal manipulation, soft tissue therapie, dry needling en functionele neurologie.',
    url: 'https://www.amsterdamchiropractic.com/techniques',
  },
};

export default function TechniquesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
