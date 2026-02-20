'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'New Patient Center',
    href: '/new-patient-center',
    children: [
      { label: 'Your First Visit', href: '/new-patient-center/your-first-visit' },
      { label: 'What to Expect', href: '/new-patient-center/what-to-expect' },
      { label: 'Online Forms', href: '/patient-forms' },
      { label: 'Virtual Office Tour', href: '/office-tour' },
      { label: 'Health Resources', href: '/health-resources' },
      { label: 'Payment Options', href: '/new-patient-center/payment-options' },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Meet Your Doctor', href: '/about/meet-your-doctor' },
      { label: 'Services & Techniques', href: '/about/services-techniques' },
      { label: 'Our Wellness Partners', href: '/wellness-partners' },
    ],
  },
  {
    label: 'Klachten',
    href: '/klachten',
    children: [
      { label: 'Whiplash', href: '/klachten/whiplash' },
      { label: 'Lage Rugpijn', href: '/klachten/lage-rugpijn' },
      { label: 'Bovenrug & Schouder', href: '/klachten/bovenrug-schouder' },
      { label: 'Nek', href: '/klachten/nek' },
      { label: 'Hernia', href: '/klachten/hernia' },
      { label: 'Zwangerschap', href: '/klachten/zwangerschap' },
      { label: 'Sportblessures', href: '/klachten/sportblessures' },
      { label: 'Hoofdpijn & Migraine', href: '/klachten/hoofdpijn-en-migraine' },
      { label: 'Spanningshoofdpijn', href: '/klachten/hoofdpijn-spanningshoofdpijn' },
      { label: 'Kinderen', href: '/klachten/kinderen' },
      { label: "Baby's", href: '/klachten/baby-s' },
      { label: 'Artrose / Slijtage', href: '/klachten/artrose-slijtage' },
    ],
  },
  {
    label: 'Behandeling',
    href: '/behandeling',
    children: [
      { label: 'Eerste Behandeling', href: '/behandeling/eerste-behandeling' },
      { label: 'Tarieven & Vergoedingen', href: '/behandeling/tarieven-vergoedingen' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-[#45321A] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M12 2C9 2 7 5 7 8c0 2 1 3.5 2.5 4.5L9 20h6l-.5-7.5C16 11.5 17 10 17 8c0-3-2-6-5-6z" fill="white" />
            </svg>
          </div>
          <div>
            <div className="font-extrabold text-base text-[#191919] leading-tight">Health4Life</div>
            <div className="text-[10px] text-[#45321A] font-semibold uppercase tracking-widest leading-none">Chiropractic</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.href)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                  pathname === item.href || pathname.startsWith(item.href + '/')
                    ? 'text-[#45321A] bg-[#45321A]/5'
                    : 'text-[#403F3F] hover:text-[#45321A] hover:bg-[#45321A]/5'
                }`}
              >
                {item.label}
                {item.children && (
                  <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-current opacity-60">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </Link>
              {item.children && openDropdown === item.href && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        pathname === child.href
                          ? 'text-[#45321A] bg-[#45321A]/5 font-medium'
                          : 'text-[#403F3F] hover:text-[#45321A] hover:bg-[#45321A]/5'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:0206731800"
            className="text-sm font-semibold text-[#45321A] hover:underline"
          >
            020-673 1800
          </a>
          <Link
            href="/#booking"
            className="bg-[#45321A] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#5a4228] transition-colors"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-[#F6F6F6] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-6 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.href} className="mb-1">
              <Link
                href={item.href}
                className="block px-3 py-2.5 text-sm font-semibold text-[#191919] hover:text-[#45321A] rounded-lg hover:bg-[#45321A]/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-[#45321A]/20 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-2 py-2 text-sm text-[#403F3F] hover:text-[#45321A] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a href="tel:0206731800" className="text-sm font-semibold text-[#45321A]">020-673 1800</a>
            <Link
              href="/#booking"
              className="bg-[#45321A] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-[#5a4228] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
