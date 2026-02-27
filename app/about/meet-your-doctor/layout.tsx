import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dr. M. Jahani DC — Chiropractor Amsterdam',
  description: 'Maak kennis met Dr. M. Jahani DC, Doctor of Chiropractic, Medical Acupuncturist en Functional Neurologist bij Health4Life Amsterdam.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/about/meet-your-doctor' },
  openGraph: {
    title: 'Dr. M. Jahani DC — Chiropractor Amsterdam',
    description: 'Maak kennis met Dr. M. Jahani DC, Doctor of Chiropractic, Medical Acupuncturist en Functional Neurologist bij Health4Life Amsterdam.',
    url: 'https://www.amsterdamchiropractic.com/about/meet-your-doctor',
  },
};

export default function MeetYourDoctorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
