'use client';

import { useState } from 'react';
import Image from 'next/image';

// Gallery images data
const galleryImages = [
  {
    id: 1,
    src: '/images/dr-muddu-chiranjeevi.jpg.jpg',
    caption: 'Dr. Muddu Nehru MD with Chiranjeevi',
    alt: 'Dr. Muddu Nehru with Chiranjeevi at HOMA Clinic',
  },
  {
    id: 2,
    src: '/images/mets1.jpg',
    caption: 'HOMA Clinic Gachibowli - Exterior View',
    alt: 'HOMA Clinic exterior building',
  },
  {
    id: 3,
    src: '/images/waist1.jpg',
    caption: 'Before & After - Metabolic Transformation',
    alt: 'Patient before and after metabolic improvement',
  },
  {
    id: 4,
    src: '/images/waist2.jpg',
    caption: 'Before & After - Waist Reduction Success',
    alt: 'Patient waist reduction results',
  },
  {
    id: 5,
    src: '/images/waist4.jpg',
    caption: 'Before & After - Metabolic Remission',
    alt: 'Metabolic remission success story',
  },
  {
    id: 6,
    src: '/images/waist5.jpg',
    caption: 'Before & After - 90-Day Program Results',
    alt: '90-day program transformation',
  },
  {
    id: 7,
    src: '/images/Metabolic Syndrome and Chronic Kidney Disease_ A Pathophysiologic Cascade.jpg',
    caption: 'HOMA Clinic Team - Medical Excellence',
    alt: 'HOMA Clinic medical team',
  },
  {
    id: 8,
    src: '/images/dr-muddu-chiranjeevi.jpg.jpg',
    caption: 'Dr. Nehru + Chiranjeevi - Celebrity Endorsement',
    alt: 'Dr. Muddu Nehru with Chiranjeevi',
  },
  // Placeholder images for 4x4 grid (8 more)
  {
    id: 9,
    src: '/images/mets1.jpg',
    caption: 'HOMA Clinic Reception Area',
    alt: 'Clinic reception and waiting area',
  },
  {
    id: 10,
    src: '/images/waist1.jpg',
    caption: 'Consultation Room - Patient Care',
    alt: 'Doctor consultation room',
  },
  {
    id: 11,
    src: '/images/waist2.jpg',
    caption: 'Before & After - Insulin Resistance Reversal',
    alt: 'Insulin resistance reversal success',
  },
  {
    id: 12,
    src: '/images/waist4.jpg',
    caption: 'Before & After - Prediabetes Reversal',
    alt: 'Prediabetes reversal transformation',
  },
  {
    id: 13,
    src: '/images/waist5.jpg',
    caption: 'HOMA Clinic Lab - Advanced Testing',
    alt: 'Medical laboratory facility',
  },
  {
    id: 14,
    src: '/images/dr-muddu-chiranjeevi.jpg.jpg',
    caption: 'Dr. Muddu Nehru - 30+ Years Experience',
    alt: 'Dr. Muddu Nehru portrait',
  },
  {
    id: 15,
    src: '/images/mets1.jpg',
    caption: 'HOMA Clinic - State-of-the-Art Facility',
    alt: 'Modern medical facility',
  },
  {
    id: 16,
    src: '/images/waist1.jpg',
    caption: 'Before & After - Metabolic Health Journey',
    alt: 'Complete metabolic transformation',
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex].id);
    } else {
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex].id);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigateImage('next');
    if (e.key === 'ArrowLeft') navigateImage('prev');
  };

  const selectedImageData = selectedImage 
    ? galleryImages.find(img => img.id === selectedImage)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            📸 HOMA Clinic Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating 30+ years of metabolic health transformations, celebrity endorsements, and state-of-the-art medical care at Gachibowli.
          </p>
        </div>

        {/* Gallery Grid - 4x4 on desktop, 2x2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => openLightbox(image.id)}
            >
              {/* Image */}
              <div className="aspect-square relative bg-gray-200">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium px-2 text-center">
                  Click to zoom
                </span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-xs font-medium line-clamp-2">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && selectedImageData && (
          <div
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gray-300 transition-colors z-[101] bg-black/50 rounded-full p-2 hover:bg-black/70"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 md:left-8 text-white hover:text-gray-300 transition-colors z-[101] bg-black/50 rounded-full p-2 hover:bg-black/70"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 md:right-8 text-white hover:text-gray-300 transition-colors z-[101] bg-black/50 rounded-full p-2 hover:bg-black/70"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Container */}
            <div
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-h-[90vh] flex flex-col items-center">
                {/* Image */}
                <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
                  <Image
                    src={selectedImageData.src}
                    alt={selectedImageData.alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                  />
                </div>

                {/* Caption */}
                <div className="mt-4 text-center">
                  <p className="text-white text-lg md:text-xl font-semibold">
                    {selectedImageData.caption}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    {selectedImage} / {galleryImages.length}
                  </p>
                </div>
              </div>
            </div>

            {/* Keyboard hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs text-center">
              Press ESC to close • ← → to navigate
            </div>
          </div>
        )}

        {/* Instagram/FB Post Cards Section */}
        <div className="mt-12 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            📱 Ready-to-Post Social Cards
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Share these pre-filled posts on Instagram and Facebook to spread awareness about HOMA Clinic and diabetes reversal.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Chiranjeevi Post Card */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg border border-purple-200">
              <div className="mb-4">
                <Image
                  src="/images/dr-muddu-chiranjeevi.jpg.jpg"
                  alt="Dr Nehru + Chiranjeevi VIP patient"
                  width={400}
                  height={300}
                  className="rounded-xl object-cover w-full h-48"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                📸 Dr Nehru + Chiranjeevi VIP patient
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                Caption: "🌟 Honored to have Megastar Chiranjeevi as a VIP patient at HOMA Clinic Gachibowli! 30+ years of metabolic health excellence. 90-day diabetes remission program with 85% success rate. 📍 Gachibowli, Hyderabad | 📱 09963721999"
              </p>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/gallery')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors text-sm"
                >
                  📘 Share on Facebook
                </a>
                <a
                  href={`https://www.instagram.com/create/story/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors text-sm"
                >
                  📷 Share on Instagram
                </a>
              </div>
            </div>

            {/* HOMA-IR Test Post Card */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg border border-blue-200">
              <div className="mb-4 bg-white rounded-xl p-4 text-center">
                <div className="text-6xl mb-2">🔬</div>
                <h4 className="text-2xl font-bold text-blue-900">HOMA-IR Test</h4>
                <p className="text-blue-700 text-sm mt-2">Insulin Resistance Assessment</p>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🔥 HOMA-IR Test Explained
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                Caption: "🔬 HOMA-IR Test Explained 🔥 Understand your insulin resistance with the HOMA blood test. Available at HOMA Clinic Gachibowli. 90-day diabetes remission program. 📍 Gachibowli, Hyderabad | 📱 09963721999 | 🔗 Link in bio"
              </p>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors text-sm"
                >
                  📘 Share on Facebook
                </a>
                <a
                  href={`https://www.instagram.com/create/story/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors text-sm"
                >
                  📷 Share on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

