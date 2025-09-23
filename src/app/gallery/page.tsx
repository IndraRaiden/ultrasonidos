'use client';

import { useState, useEffect } from 'react';
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function GalleryPage() {
  const [language, setLanguage] = useState('en');
  
  // Listen for language change events from the navbar
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.language);
    };
    
    // Add event listener
    document.addEventListener('languageChange', handleLanguageChange as EventListener);
    
    // Clean up
    return () => {
      document.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  // Gallery images data with captions in both languages
  // Using the images from the imagesrandom directory
  const galleryImages = [
    {
      id: 'img1',
      src: '/imagesrandom/1.jpg',
      alt: language === 'en' ? 'Ultrasound image 1' : 'Imagen de ultrasonido 1'
    },
    {
      id: 'img2',
      src: '/imagesrandom/2.jpg',
      alt: language === 'en' ? 'Ultrasound image 2' : 'Imagen de ultrasonido 2'
    },
    {
      id: 'img3',
      src: '/imagesrandom/3.jpg',
      alt: language === 'en' ? 'Ultrasound image 3' : 'Imagen de ultrasonido 3'
    },
    {
      id: 'img4',
      src: '/imagesrandom/4.jpg',
      alt: language === 'en' ? 'Ultrasound image 4' : 'Imagen de ultrasonido 4'
    },
    {
      id: 'img5',
      src: '/imagesrandom/5.jpg',
      alt: language === 'en' ? 'Ultrasound image 5' : 'Imagen de ultrasonido 5'
    },
    {
      id: 'img6',
      src: '/imagesrandom/6.jpg',
      alt: language === 'en' ? 'Ultrasound image 6' : 'Imagen de ultrasonido 6'
    },
    {
      id: 'img7',
      src: '/imagesrandom/7.jpg',
      alt: language === 'en' ? 'Ultrasound image 7' : 'Imagen de ultrasonido 7'
    },
    {
      id: 'img8',
      src: '/imagesrandom/8.jpg',
      alt: language === 'en' ? 'Ultrasound image 8' : 'Imagen de ultrasonido 8'
    },
    {
      id: 'img9',
      src: '/imagesrandom/9.jpg',
      alt: language === 'en' ? 'Ultrasound image 9' : 'Imagen de ultrasonido 9'
    },
    {
      id: 'img10',
      src: '/imagesrandom/10.jpg',
      alt: language === 'en' ? 'Ultrasound image 10' : 'Imagen de ultrasonido 10'
    },
    {
      id: 'img20',
      src: '/imagesrandom/20.jpg',
      alt: language === 'en' ? 'Ultrasound image 20' : 'Imagen de ultrasonido 20'
    },
    {
      id: 'img30',
      src: '/imagesrandom/30.jpg',
      alt: language === 'en' ? 'Ultrasound image 30' : 'Imagen de ultrasonido 30'
    },
    {
      id: 'img40',
      src: '/imagesrandom/40.jpg',
      alt: language === 'en' ? 'Ultrasound image 40' : 'Imagen de ultrasonido 40'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-[#fafafa]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#6642c8]/80 mb-4 block">
              {language === 'en' ? 'Our Gallery' : 'Nuestra Galería'}
            </span>
            <h1 className="text-4xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'Ultrasound Gallery' : 'Galería de Ultrasonidos'}
            </h1>
            <p className="text-gray-600 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
              {language === 'en' 
                ? 'Explore our collection of ultrasound images and clinic photos. See the quality and clarity of our technology and the comfort of our facilities.'
                : 'Explore nuestra colección de imágenes de ultrasonido y fotos de la clínica. Vea la calidad y claridad de nuestra tecnología y la comodidad de nuestras instalaciones.'}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image 
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={image.id === 'img1'} // Prioritize loading the first image
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'Create Your Own Memories' : 'Crea Tus Propios Recuerdos'}
            </h2>
            <p className="text-gray-600 mb-10 font-light leading-relaxed">
              {language === 'en' 
                ? 'Book an appointment today and capture beautiful images of your baby. Our state-of-the-art technology provides clear, detailed ultrasound images for you to cherish forever.'
                : 'Reserve una cita hoy y capture hermosas imágenes de su bebé. Nuestra tecnología de vanguardia proporciona imágenes de ultrasonido claras y detalladas para que las atesore para siempre.'}
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#6642c8] to-[#8a63d2] text-white font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              {language === 'en' ? 'Book Now' : 'Reservar Ahora'}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
