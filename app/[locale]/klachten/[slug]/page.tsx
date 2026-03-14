import KlachtenTemplate from '@/components/klachten-template';
import type { Metadata } from 'next';

const slugs = [
  'nek', 'lage-rugpijn', 'hernia', 'whiplash',
  'hoofdpijn-en-migraine', 'hoofdpijn-spanningshoofdpijn',
  'bovenrug-schouder', 'artrose-slijtage', 'sportblessures',
  'baby-s', 'kinderen', 'zwangerschap',
];

export function generateStaticParams() {
  return ['nl', 'en'].flatMap(locale =>
    slugs.map(slug => ({ locale, slug }))
  );
}

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = (await import(`@/content/klachten/${slug}.json`)).default;
  const c = content[locale as 'nl' | 'en'] || content.nl;
  const base = 'https://www.amsterdamchiropractic.com';
  return {
    title: `${c.title} | Health4Life Chiropractic Amsterdam`,
    description: c.intro || `Chiropractische behandeling voor ${c.title} in Amsterdam. Maasstraat 103 Amsterdam Zuid. Bel 020-673 1800.`,
    alternates: {
      canonical: `${base}/${locale}/klachten/${slug}`,
      languages: {
        'nl': `${base}/nl/klachten/${slug}`,
        'en': `${base}/en/klachten/${slug}`,
      },
    },
    openGraph: {
      title: `${c.title} | Health4Life Chiropractic Amsterdam`,
      url: `${base}/${locale}/klachten/${slug}`,
    },
  };
}

export default async function KlachtPage({ params }: Props) {
  const { slug } = await params;
  const content = (await import(`@/content/klachten/${slug}.json`)).default;
  return <KlachtenTemplate content={content} />;
}
