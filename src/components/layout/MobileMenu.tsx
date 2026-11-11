import React, { useState, useEffect } from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  navLinks: NavLink[];
  currentLang: 'id' | 'ja';
  ctaText: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks, currentLang, ctaText }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="md:hidden">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded text-brand-charcoal hover:bg-brand-sand transition-colors focus-visible:outline-2 focus-visible:outline-brand-vermilion"
        aria-label={isOpen ? 'Tutup navigasi' : 'Buka navigasi'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-brand-porcelain border-l border-brand-border p-6 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-brand-border">
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/logo/logo.png"
                alt="LPK Saindo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-extrabold text-base tracking-tight text-brand-charcoal">
                LPK SAINDO
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-brand-sand text-brand-stone transition-colors"
              aria-label="Tutup Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2.5 px-3 rounded text-base font-semibold text-brand-charcoal hover:bg-brand-sand transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Language & WhatsApp CTA */}
        <div className="space-y-4 pt-6 border-t border-brand-border">
          <div className="flex items-center justify-between text-xs font-semibold text-brand-slate">
            <span>Pilih Bahasa / 言語:</span>
            <div className="flex items-center p-0.5 rounded-full bg-brand-sand border border-brand-border">
              <a
                href="/"
                className={`px-3 py-1 rounded-full transition-all ${
                  currentLang === 'id' ? 'bg-white text-brand-charcoal shadow-sm' : 'text-brand-stone'
                }`}
              >
                ID
              </a>
              <a
                href="/ja"
                className={`px-3 py-1 rounded-full transition-all ${
                  currentLang === 'ja' ? 'bg-white text-brand-charcoal shadow-sm' : 'text-brand-stone'
                }`}
              >
                日本語
              </a>
            </div>
          </div>

          <a
            href="https://wa.me/6282221046007?text=Halo%20LPK%20Saindo%2C%20saya%20ingin%20konsultasi%20program%20pelatihan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center py-3.5 px-4 rounded bg-brand-vermilion text-white font-semibold text-sm tracking-wide shadow-sm hover:bg-brand-crimson transition-colors"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
