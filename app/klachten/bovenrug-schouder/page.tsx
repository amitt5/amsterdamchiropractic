import type { Metadata } from 'next';
import KlachtenTemplate from '@/components/klachten-template';
import content from '@/content/klachten/bovenrug-schouder.json';

export const metadata: Metadata = {
  title: 'Bovenrug & Schouderpijn Amsterdam',
  description: 'Pijn in bovenrug of schouder? Health4Life Chiropractic behandelt schouder- en bovenrugklachten effectief. Maasstraat 103. Bel 020-673 1800.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/klachten/bovenrug-schouder' },
  openGraph: {
    title: 'Bovenrug & Schouderpijn Amsterdam',
    description: 'Pijn in bovenrug of schouder? Health4Life Chiropractic behandelt schouder- en bovenrugklachten effectief. Maasstraat 103. Bel 020-673 1800.',
    url: 'https://www.amsterdamchiropractic.com/klachten/bovenrug-schouder',
  },
};

export default function BovenrugSchouderPage() {
  return <KlachtenTemplate content={content} />;
}
