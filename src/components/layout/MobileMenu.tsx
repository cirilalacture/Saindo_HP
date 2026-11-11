import React, { useState, useEffect } from 'react';

type FontSize = 'sm' | 'base' | 'lg';

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
  const [fontSize, setFontSize] = useState<FontSize>('base');

  // Sync font size from localStorage and global events
  useEffect(() => {
    try {
      const saved = localStorage.getItem('saindo_font_size') as FontSize;
      if (saved && ['sm', 'base', 'lg'].includes(saved)) {
        setFontSize(saved);
      }
    } catch (e) {}

    const handleSync = (e: Event) => {
      const customEvent = e as CustomEvent<{ size: FontSize }>;
      if (customEvent.detail?.size) {
        setFontSize(customEvent.detail.size);
      }
    };

    window.addEventListener('saindo_font_size_change', handleSync);
    return () => window.removeEventListener('saindo_font_size_change', handleSync);
  }, []);

  const applyFontSize = (size: FontSize) => {
    setFontSize(size);
    const scaleMap: Record<FontSize, string> = { sm: '90%', base: '100%', lg: '115%' };
    document.documentElement.style.fontSize = scaleMap[size];
    try {
      localStorage.setItem('saindo_font_size', size);
    } catch (e) {}
    window.dispatchEvent(new CustomEvent('saindo_font_size_change', { detail: { size } }));
  };

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
    <div className="flex items-center gap-2 md:hidden">
      {/* Mobile Header Quick Font Resizer Pill */}
      <div
        className="flex items-center p-0.5 rounded-full bg-brand-sand border border-brand-border text-[11px] font-heading font-bold"
        role="group"
        aria-label={currentLang === 'ja' ? '文字サイズ変更' : 'Ukuran Huruf'}
      >
        <button
          type="button"
          onClick={() => applyFontSize('sm')}
          className={`px-2 py-0.5 rounded-full transition-all text-[11px] ${
            fontSize === 'sm'
              ? 'bg-white text-brand-charcoal shadow-sm font-extrabold'
              : 'text-brand-stone hover:text-brand-charcoal'
          }`}
          title={currentLang === 'ja' ? '文字サイズ（小）' : 'Ukuran Kecil'}
          aria-label="Font kecil"
        >
          A-
        </button>
        <button
          type="button"
          onClick={() => applyFontSize('base')}
          className={`px-2 py-0.5 rounded-full transition-all text-[11px] ${
            fontSize === 'base'
              ? 'bg-white text-brand-charcoal shadow-sm font-extrabold'
              : 'text-brand-stone hover:text-brand-charcoal'
          }`}
          title={currentLang === 'ja' ? '文字サイズ（標準）' : 'Ukuran Normal'}
          aria-label="Font normal"
        >
          A
        </button>
        <button
          type="button"
          onClick={() => applyFontSize('lg')}
          className={`px-2 py-0.5 rounded-full transition-all text-[11px] ${
            fontSize === 'lg'
              ? 'bg-white text-brand-charcoal shadow-sm font-extrabold'
              : 'text-brand-stone hover:text-brand-charcoal'
          }`}
          title={currentLang === 'ja' ? '文字サイズ（大）' : 'Ukuran Besar'}
          aria-label="Font besar"
        >
          A+
        </button>
      </div>

      {/* Hamburger Trigger Button */}
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

      {/* Slide-out Drawer with overflow-y-auto */}
      <div
        className={`fixed top-0 right-0 z-50 h-[100dvh] max-h-screen w-[85%] max-w-sm bg-brand-porcelain border-l border-brand-border p-6 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
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
              className="p-2 rounded-full hover:bg-brand-sand text-brand-stone hover:text-brand-charcoal transition-colors"
              aria-label="Tutup Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <nav className="space-y-1.5">
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

        {/* Bottom Accessibility, Language & WhatsApp CTA */}
        <div className="space-y-4 pt-6 border-t border-brand-border mt-6">
          {/* Font Size Adjuster in Drawer */}
          <div className="flex items-center justify-between text-xs font-semibold text-brand-slate">
            <span>{currentLang === 'ja' ? '文字サイズ:' : 'Ukuran Huruf:'}</span>
            <div className="flex items-center p-0.5 rounded-full bg-brand-sand border border-brand-border text-[11px] font-heading font-bold">
              <button
                type="button"
                onClick={() => applyFontSize('sm')}
                className={`px-3 py-1 rounded-full transition-all ${
                  fontSize === 'sm'
                    ? 'bg-white text-brand-charcoal shadow-sm font-extrabold'
                    : 'text-brand-stone hover:text-brand-charcoal'
                }`}
                title={currentLang === 'ja' ? '文字サイズ（小）' : 'Ukuran Kecil'}
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => applyFontSize('base')}
                className={`px-3 py-1 rounded-full transition-all ${
                  fontSize === 'base'
                    ? 'bg-white text-brand-charcoal shadow-sm font-extrabold'
                    : 'text-brand-stone hover:text-brand-charcoal'
                }`}
                title={currentLang === 'ja' ? '文字サイズ（標準）' : 'Ukuran Normal'}
              >
                A
              </button>
              <button
                type="button"
                onClick={() => applyFontSize('lg')}
                className={`px-3 py-1 rounded-full transition-all ${
                  fontSize === 'lg'
                    ? 'bg-white text-brand-charcoal shadow-sm font-extrabold'
                    : 'text-brand-stone hover:text-brand-charcoal'
                }`}
                title={currentLang === 'ja' ? '文字サイズ（大）' : 'Ukuran Besar'}
              >
                A+
              </button>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center justify-between text-xs font-semibold text-brand-slate">
            <span>{currentLang === 'ja' ? '言語選択:' : 'Pilih Bahasa:'}</span>
            <div className="flex items-center p-0.5 rounded-full bg-brand-sand border border-brand-border">
              <a
                href="/"
                className={`px-3 py-1 rounded-full transition-all ${
                  currentLang === 'id' ? 'bg-white text-brand-charcoal shadow-sm font-bold' : 'text-brand-stone hover:text-brand-charcoal'
                }`}
              >
                ID
              </a>
              <a
                href="/ja"
                className={`px-3 py-1 rounded-full transition-all ${
                  currentLang === 'ja' ? 'bg-white text-brand-charcoal shadow-sm font-bold' : 'text-brand-stone hover:text-brand-charcoal'
                }`}
              >
                日本語
              </a>
            </div>
          </div>

          {/* CTA */}
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
