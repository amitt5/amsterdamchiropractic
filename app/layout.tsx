import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";
import CookieBanner from "@/components/cookie-banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.amsterdamchiropractic.com'),
  title: {
    default: 'Health4Life Chiropractic Amsterdam',
    template: '%s | Health4Life Chiropractic',
  },
  description: 'Chiropractie in Amsterdam - Maasstraat 103. Behandeling van rugpijn, nekpijn, hoofdpijn, whiplash en meer. Bel 020-673 1800.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com' },
  robots: { index: true, follow: true },
  openGraph: {
    siteName: 'Health4Life Chiropractic',
    locale: 'nl_NL',
    type: 'website',
    url: 'https://www.amsterdamchiropractic.com',
    // TODO: replace /og-image.jpg with branded 1200×630 image when client provides it
    images: [{ url: '/dr-jahani.webp', width: 1200, height: 630, alt: 'Health4Life Chiropractic Amsterdam' }],
  },
  twitter: { card: 'summary_large_image' },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Chiropractor",
  "name": "Health4Life Chiropractic",
  "description": "Chiropractie in Amsterdam Zuid. Behandeling van rugpijn, nekpijn, hoofdpijn, whiplash en sportblessures door Dr. M. Jahani DC. Bel voor een afspraak.",
  "url": "https://www.amsterdamchiropractic.com",
  "telephone": "+31-20-673-1800",
  "image": "https://www.amsterdamchiropractic.com/dr-jahani.webp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Maasstraat 103",
    "addressLocality": "Amsterdam",
    "addressRegion": "Noord-Holland",
    "postalCode": "1073 PR",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.3541,
    "longitude": 4.9003
  },
  "hasMap": "https://maps.google.com/?q=Maasstraat+103,+1073+PR+Amsterdam",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card, PIN",
  "areaServed": {
    "@type": "City",
    "name": "Amsterdam"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+31-20-673-1800",
      "contactType": "customer service",
      "areaServed": "NL",
      "availableLanguage": ["Dutch", "English"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+31-6-1882-0000",
      "contactType": "customer service",
      "areaServed": "NL",
      "availableLanguage": ["Dutch", "English"]
    }
  ],
  "employee": {
    "@type": "Physician",
    "name": "Dr. M. Jahani DC",
    "jobTitle": "Chiropractor",
    "image": "https://www.amsterdamchiropractic.com/dr-jahani.webp"
  },
  "medicalSpecialty": "Musculoskeletal",
  "sameAs": [
    "https://maps.google.com/?q=Health4Life+Chiropractic+Amsterdam"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
