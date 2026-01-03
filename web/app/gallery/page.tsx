'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { galleryApi } from '@/lib/gallery-api';

// Fallback static images if Supabase fails
const fallbackImages = [
  {
    id: '1',
    src: '/images/dr-muddu-chiranjeevi.jpg.jpg',
    alt: 'Dr Muddu Surendra Nehru MD with Chiranjeevi VIP patient - Best diabetologist Gachibowli HOMA Clinic',
    caption: 'Celebrity Patient Success - Dr. Muddu Nehru with Chiranjeevi',
  },
  {
    id: '2',
    src: '/images/newcamp1.jpg',
    alt: 'HOMA Medical Camp Gachibowli - Free Diabetes Screening and HOMA-IR Test Hyderabad',
    caption: 'Community Health Outreach - Medical Camp',
  },
  {
    id: '3',
    src: '/images/vip2.jpg',
    alt: 'VIP Patient Consultation - Dr Muddu Nehru diabetologist Gachibowli HOMA-IR reversal Hyderabad',
    caption: 'VIP Patient Consultation',
  },
  {
    id: '4',
    src: '/images/beforeafter3.jpg',
    alt: 'Before After Diabetes Reversal - 90 Day Program Results HOMA Clinic Gachibowli Metabolic Remission',
    caption: 'Before & After - Metabolic Transformation',
  },
  {
    id: '5',
    src: '/images/waist1.jpg',
    alt: 'Patient Before After Waist Reduction - HOMA-IR reversal prediabetes reversal Gachibowli',
    caption: 'Before & After - Waist Reduction Success',
  },
  {
    id: '6',
    src: '/images/waist2.jpg',
    alt: 'Metabolic Remission Success Story - Dr Muddu Nehru 90 day diabetes reversal program Gachibowli',
    caption: 'Before & After - Metabolic Remission',
  },
  {
    id: '7',
    src: '/images/waist4.jpg',
    alt: '90 Day Program Results - Insulin Resistance Reversal HOMA Clinic Gachibowli Hyderabad',
    caption: 'Before & After - 90-Day Program Results',
  },
  {
    id: '8',
    src: '/images/waist5.jpg',
    alt: 'Diabetes Reversal Transformation - HOMA-IR test results improvement Gachibowli diabetologist',
    caption: 'Before & After - Complete Transformation',
  },
  {
    id: '9',
    src: '/images/mets1.jpg',
    alt: 'HOMA Clinic Gachibowli Exterior - Best diabetes clinic Hyderabad Dr Muddu Nehru MD',
    caption: 'HOMA Clinic Gachibowli - Exterior View',
  },
  {
    id: '10',
    src: '/images/Metabolic Syndrome and Chronic Kidney Disease_ A Pathophysiologic Cascade.jpg',
    alt: 'HOMA Clinic Medical Team - Metabolic Health Experts Gachibowli Diabetes Specialists',
    caption: 'HOMA Clinic Team - Medical Excellence',
  },
];

interface GalleryImageDisplay {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImageDisplay[]>(fallbackImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch images from API
  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await galleryApi.getAll();
        if (response.images && response.images.length > 0) {
          // Convert API data to display format
          const displayImages: GalleryImageDisplay[] = response.images.map((img: any) => ({
            id: img.id,
            src: `/images/${img.filename}`,
            alt: img.alt,
            caption: img.caption,
          }));
          setImages(displayImages);
        } else {
          console.warn('No images from API, using fallback images');
          setImages(fallbackImages);
        }
      } catch (error) {
        console.error('Error loading gallery images, using fallback:', error);
        setImages(fallbackImages);
      } finally {
        setLoading(false);
      }
    };
    loadImages();
  }, []);

  // JSON-LD Schema for ImageObject Gallery
  useEffect(() => {
    if (images.length === 0) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "HOMA Clinic Gallery - Dr. Muddu Nehru MD Gachibowli",
      "description": "Gallery of HOMA Clinic Gachibowli featuring Dr. Muddu Surendra Nehru MD, celebrity patient Chiranjeevi, before/after transformations, medical camps, and clinic facilities. Best diabetologist Gachibowli with 30+ years experience.",
      "url": "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/gallery",
      "image": images.map(img => ({
        "@type": "ImageObject",
        "contentUrl": `https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com${img.src}`,
        "description": img.caption,
        "name": img.alt,
        "caption": img.caption,
      })),
      "about": {
        "@type": "MedicalClinic",
        "name": "HOMA Clinic",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Gachibowli",
          "addressRegion": "Hyderabad",
          "addressCountry": "IN"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [images]);

  const openLightbox = (id: string) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage);
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex].id);
    } else {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex].id);
    }
  };

  const handleGalleryCTA = (caption: string) => {
    const message = encodeURIComponent(`Saw "${caption}" photo - Interested in HOMA Clinic Gachibowli diabetes reversal program`);
    window.open(`https://wa.me/919963721999?text=${message}`, '_blank');
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigateImage('next');
    if (e.key === 'ArrowLeft') navigateImage('prev');
  };

  const selectedImageData = selectedImage 
    ? images.find(img => img.id === selectedImage)
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
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading gallery...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {images.map((image) => (
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
                    loading="lazy"
                    quality={85}
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
        )}

        {/* Gallery CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              📸 Interested in Our Gallery?
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              See real patient transformations, clinic facilities, and success stories. Book your consultation today!
            </p>
            <button
              onClick={() => handleGalleryCTA('HOMA Clinic Gallery')}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              💬 Contact via WhatsApp
            </button>
          </div>
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
                    sizes="100vw"
                    priority={false}
                    quality={90}
                  />
                </div>

                {/* Caption */}
                <div className="mt-4 text-center">
                  <p className="text-white text-lg md:text-xl font-semibold">
                    {selectedImageData.caption}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    {images.findIndex(img => img.id === selectedImage) + 1} / {images.length}
                  </p>
                  {/* CTA Button in Lightbox */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGalleryCTA(selectedImageData.caption);
                    }}
                    className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    💬 Contact About This Photo
                  </button>
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

