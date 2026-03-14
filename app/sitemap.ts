import type { MetadataRoute } from 'next';

const base = 'https://www.amsterdamchiropractic.com';
const today = new Date().toISOString().split('T')[0];
const locales = ['nl', 'en'] as const;

function entry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] = 'monthly') {
  return locales.map(locale => ({
    url: `${base}/${locale}${path}`,
    lastModified: today,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        nl: `${base}/nl${path}`,
        en: `${base}/en${path}`,
      },
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    ...entry('', 1.0, 'weekly'),

    // Klachten hub
    ...entry('/klachten', 0.9),

    // Individual klachten pages (most search traffic)
    ...entry('/klachten/lage-rugpijn', 0.8),
    ...entry('/klachten/hernia', 0.8),
    ...entry('/klachten/nek', 0.8),
    ...entry('/klachten/whiplash', 0.8),
    ...entry('/klachten/hoofdpijn-en-migraine', 0.8),
    ...entry('/klachten/hoofdpijn-spanningshoofdpijn', 0.8),
    ...entry('/klachten/bovenrug-schouder', 0.8),
    ...entry('/klachten/artrose-slijtage', 0.8),
    ...entry('/klachten/sportblessures', 0.8),
    ...entry('/klachten/baby-s', 0.8),
    ...entry('/klachten/kinderen', 0.8),
    ...entry('/klachten/zwangerschap', 0.8),

    // About & techniques
    ...entry('/about', 0.7),
    ...entry('/about/meet-your-doctor', 0.7),
    ...entry('/about/services-techniques', 0.7),
    ...entry('/techniques', 0.7),

    // New patient center
    ...entry('/new-patient-center', 0.6),
    ...entry('/new-patient-center/your-first-visit', 0.6),
    ...entry('/new-patient-center/what-to-expect', 0.6),
    ...entry('/new-patient-center/what-to-expect/phase-1-relief-care', 0.6),
    ...entry('/new-patient-center/what-to-expect/phase-2-corrective-care', 0.6),
    ...entry('/new-patient-center/what-to-expect/phase-3-wellness-care', 0.6),
    ...entry('/new-patient-center/payment-options', 0.6),

    // Other pages
    ...entry('/health-resources', 0.6),
    ...entry('/patient-forms', 0.6),
    ...entry('/privacy', 0.4),
  ];
}
