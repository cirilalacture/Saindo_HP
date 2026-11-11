import React, { useState, useEffect, useCallback, useRef } from 'react';

interface HeroCarouselProps {
  currentLang?: 'id' | 'ja';
}

interface SlideItem {
  image: string;
  alt: string;
  tag: string;
  title: string;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ currentLang = 'id' }) => {
  const isJa = currentLang === 'ja';

  const slides: SlideItem[] = [
    {
      image: '/assets/hero/hero2.jpg',
      alt: 'Pelatihan Intensif Siswa LPK Saindo di Kelas',
      tag: isJa ? '研修現場風景 01' : 'Dokumentasi Pelatihan 01',
      title: isJa ? '特定技能・技人国に向けた集中対面講習' : 'Kelas Intensif Tokutei Ginou & Kedisiplinan Kerja',
    },
    {
      image: '/assets/hero/dokumentasi.jpg',
      alt: 'Dokumentasi Kegiatan & Bimbingan Pengajar LPK Saindo',
      tag: isJa ? '研修現場風景 02' : 'Dokumentasi Pelatihan 02',
      title: isJa ? '日本人ネイティブ教員による実践会話指導' : 'Bimbingan Langsung Sensei & Native Speaker Asli Jepang',
    },
    {
      image: '/assets/hero/hero.jpg',
      alt: 'Keluarga Besar Siswa & Instruktur LPK Saindo di Sragen',
      tag: isJa ? '研修現場風景 03' : 'Dokumentasi Pelatihan 03',
      title: isJa ? '志高く日本就労を目指す若者たち' : 'Keluarga Besar Siswa Menuju Karier Masa Depan di Jepang',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Autoplay every 5 seconds (5000ms)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      nextSlide();
    } else if (distance < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative rounded-lg overflow-hidden border border-brand-border bg-white p-3.5 shadow-sm group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 5-second slide container */}
      <div className="aspect-[4/3] rounded bg-brand-sand overflow-hidden relative">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                  isActive ? 'scale-100' : 'scale-105'
                }`}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />

              {/* Gradient Scrim for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-5 sm:p-6">
                <div className="text-white space-y-1">
                  <span className="inline-block text-[10px] sm:text-xs font-heading font-semibold uppercase tracking-widest text-brand-sand bg-black/40 px-2 py-0.5 rounded border border-white/10">
                    {slide.tag}
                  </span>
                  <p className="text-xs sm:text-sm font-heading font-semibold leading-snug text-white/95 drop-shadow-sm max-w-sm">
                    {slide.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Arrow Controls (Visible on hover & focus) */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label={isJa ? '前の写真' : 'Foto Sebelumnya'}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity transition-colors duration-200 focus:opacity-100"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label={isJa ? '次の写真' : 'Foto Selanjutnya'}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity transition-colors duration-200 focus:opacity-100"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5">
          {slides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => goToSlide(dotIdx)}
              aria-label={`Slide ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === currentIndex
                  ? 'w-6 bg-brand-vermilion shadow-sm'
                  : 'w-2 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Status Badge */}
      <div className="absolute -bottom-4 -left-4 bg-brand-charcoal text-white px-5 py-3.5 rounded border border-white/15 shadow-xl hidden sm:flex items-center gap-3.5 z-30">
        <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
        <div>
          <div className="text-[11px] font-heading font-medium text-gray-300">
            {isJa ? '2026年度 募集受付中' : 'Pendaftaran Angkatan 2026'}
          </div>
          <div className="text-sm font-heading font-bold text-white">
            {isJa ? '新クラス開講 — 定員限定' : 'Gelombang Baru Dibuka — Kuota Terbatas'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
