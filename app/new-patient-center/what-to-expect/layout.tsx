import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wat Kunt U Verwachten',
  description: 'Uitleg over de drie fasen van chiropractische zorg bij Health4Life Amsterdam: relief care, corrective care en wellness care.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/new-patient-center/what-to-expect' },
  openGraph: {
    title: 'Wat Kunt U Verwachten',
    description: 'Uitleg over de drie fasen van chiropractische zorg bij Health4Life Amsterdam: relief care, corrective care en wellness care.',
    url: 'https://www.amsterdamchiropractic.com/new-patient-center/what-to-expect',
  },
};

export default function WhatToExpectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
