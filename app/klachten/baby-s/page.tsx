import type { Metadata } from 'next';
import KlachtenTemplate from '@/components/klachten-template';
import content from '@/content/klachten/baby-s.json';

export const metadata: Metadata = {
  title: "Chiropractie voor Baby's Amsterdam",
  description: "Huilbaby, koliek of plagiocefalie? Zachte chiropractische behandeling voor baby's bij Health4Life, Maasstraat 103. Bel 020-673 1800.",
  alternates: { canonical: "https://www.amsterdamchiropractic.com/klachten/baby-s" },
  openGraph: {
    title: "Chiropractie voor Baby's Amsterdam",
    description: "Huilbaby, koliek of plagiocefalie? Zachte chiropractische behandeling voor baby's bij Health4Life, Maasstraat 103. Bel 020-673 1800.",
    url: 'https://www.amsterdamchiropractic.com/klachten/baby-s',
  },
};

export default function BabySPage() {
  return <KlachtenTemplate content={content} />;
}
