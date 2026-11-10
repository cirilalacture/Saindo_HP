import React, { useState, useEffect } from 'react';

interface GalleryPhoto {
  id: string;
  displayUrl: string;
  originalUrl: string;
  captionId?: string | null;
  captionJa?: string | null;
  altText?: string | null;
}

interface LightboxProps {
  photos: GalleryPhoto[];
  currentLang?: 'id' | 'ja';
}

export const Lightbox: React.FC<LightboxProps> = ({ photos, currentLang = 'id' }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
      if (e.key === 'ArrowRight') setSelectedIndex((selectedIndex + 1) % photos.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, photos.length]);

  return (
    <div>
      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => {
          const caption = currentLang === 'ja' && photo.captionJa ? photo.captionJa : photo.captionId;
          return (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="card-shoji rounded overflow-hidden cursor-pointer group bg-white border border-brand-border p-2.5 shadow-sm"
            >
              <div className="aspect-[4/3] rounded bg-brand-sand overflow-hidden relative">
                <img
                  src={photo.displayUrl}
                  alt={photo.altText || caption || 'Foto Kegiatan Saindo'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-brand-charcoal flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {caption && (
                <div className="p-3 text-xs font-heading font-medium text-brand-slate truncate">
                  {caption}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
            aria-label="Tutup Tampilan Foto"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
            aria-label="Foto Sebelumnya"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Active Image Box */}
          <div
            className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedIndex].originalUrl}
              alt={photos[selectedIndex].altText || 'Foto Fullscreen'}
              className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl"
            />
            
            {/* Caption & Counter */}
            <div className="mt-4 text-center text-white space-y-1">
              <p className="text-sm sm:text-base font-heading font-medium">
                {currentLang === 'ja' && photos[selectedIndex].captionJa
                  ? photos[selectedIndex].captionJa
                  : photos[selectedIndex].captionId}
              </p>
              <p className="text-xs text-gray-400 font-heading">
                {selectedIndex + 1} / {photos.length}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
            aria-label="Foto Berikutnya"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
export default Lightbox;
