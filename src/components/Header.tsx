import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { buildWhatsAppBookingUrl } from '../utils/clinicHelpers';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Treatments', href: '#treatments' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#29232C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#29232C] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#29232C]"
        >
          Tracey Ager Aesthetics
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#29232C]/80"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 border-b border-transparent hover:border-[#C5A9AD] hover:text-[#29232C] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#29232C]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + mobile menu button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={buildWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-medium text-white bg-[#29232C] rounded-lg hover:bg-[#3D3442] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29232C]"
          >
            Book Consultation
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#29232C]/15 text-[#29232C] hover:bg-[#F8F4F5] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29232C]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-[#29232C]/10 bg-white px-4 py-4 space-y-1"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="flex items-center min-h-[44px] px-3 rounded-lg text-sm font-medium text-[#29232C] hover:bg-[#F8F4F5] transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={buildWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center min-h-[44px] w-full px-4 py-2.5 text-sm font-medium text-white bg-[#29232C] rounded-lg hover:bg-[#3D3442] transition-colors duration-150"
            >
              Book a Consultation via WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
