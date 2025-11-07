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
      src: '/galeria/940265_32.jpg',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img2',
      src: '/galeria/940265_43.jpg',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img3',
      src: '/galeria/A_0004.jpg',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img4',
      src: '/galeria/B88C56E9-5F19-4CF1-A668-149B4E774A7D.JPG',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img5',
      src: '/galeria/BAILEY_0023.jpg',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img6',
      src: '/galeria/BAILEY_0036 (1).jpg',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img7',
      src: '/galeria/BLANCO_0022.jpg',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img8',
      src: '/galeria/Captura de pantalla 2025-10-29 124217.png',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img9',
      src: '/galeria/E9C7B880-ADBB-4595-87C2-57E6F257850E.JPG',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img10',
      src: '/galeria/EB945E5A-2E31-402B-BB6B-2135ECF31775.JPG',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img11',
      src: '/galeria/IMG_3927.PNG',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img12',
      src: '/galeria/IMG_4098.PNG',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img13',
      src: '/galeria/IMG_4231.PNG',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img14',
      src: '/galeria/IMG_4825.jpg',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img15',
      src: '/galeria/IMG_5583.PNG',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img16',
      src: '/galeria/J_0007.jpg',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img17',
      src: '/galeria/MAY_0016.jpg',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
    },
    {
      id: 'img18',
      src: '/galeria/N_0017.jpg',
      alt: language === 'en' ? 'Ultrasound image' : 'Imagen de ultrasonido'
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

      {/* Videos Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'Watch Our Videos' : 'Mira Nuestros Videos'}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="aspect-[9/16]">
                <iframe
                  src="https://www.youtube.com/embed/34K30yRsJSs?autoplay=1&mute=1&loop=1&playlist=34K30yRsJSs"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-xl"
                ></iframe>
              </div>
              <div className="aspect-[9/16]">
                <iframe
                  src="https://www.youtube.com/embed/88WmiJAquj0?autoplay=1&mute=1&loop=1&playlist=88WmiJAquj0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-xl"
                ></iframe>
              </div>
              <div className="aspect-[9/16]">
                <iframe
                  src="https://www.youtube.com/embed/slXdMoUNjOw?autoplay=1&mute=1&loop=1&playlist=slXdMoUNjOw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-xl"
                ></iframe>
              </div>
              <div className="aspect-[9/16]">
                <iframe
                  src="https://www.youtube.com/embed/-4E_hNejokg?autoplay=1&mute=1&loop=1&playlist=-4E_hNejokg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'Image Gallery' : 'Galería de Imágenes'}
            </h2>
          </div>
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
