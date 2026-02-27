import type { MetadataRoute } from 'next';

const base = 'https://www.amsterdamchiropractic.com';
const today = new Date().toISOString().split('T')[0];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    { url: base, lastModified: today, changeFrequency: 'weekly', priority: 1.0 },

    // Klachten hub
    { url: `${base}/klachten`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },

    // Individual klachten pages (most search traffic)
    { url: `${base}/klachten/lage-rugpijn`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/klachten/hernia`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/klachten/nek`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/klachten/whiplash`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/klachten/hoofdpijn-en-migraine`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/klachten/hoofdpijn-spanningshoofdpijn`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/klachten/bovenrug-schouder`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/klachten/artrose-slijtage`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/klachten/sportblessures`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/klachten/baby-s`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/klachten/kinderen`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/klachten/zwangerschap`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },

    // About & techniques
    { url: `${base}/about`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about/meet-your-doctor`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about/services-techniques`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/techniques`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },

    // New patient center
    { url: `${base}/new-patient-center`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/new-patient-center/your-first-visit`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/new-patient-center/what-to-expect`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/new-patient-center/what-to-expect/phase-1-relief-care`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/new-patient-center/what-to-expect/phase-2-corrective-care`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/new-patient-center/what-to-expect/phase-3-wellness-care`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/new-patient-center/payment-options`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },

    // Other pages
    { url: `${base}/health-resources`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/office-tour`, lastModified: today, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/patient-forms`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/vacatures`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/videos`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/wellness-partners`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
