'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Third() {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    // Initial check for language
    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLanguage(event.detail.language);
    };

    // Add event listener for language changes
    document.addEventListener('languageChange', handleLanguageChange as EventListener);

    // Clean up event listener
    return () => {
      document.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);
  return (
    <section className="py-24 bg-purple-500">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-white mb-4 block">
            {currentLanguage === 'en' ? 'Gender Reveal Products' : 'Productos para Revelación de Género'}
          </span>
          <h2 className="section-heading centered text-3xl !text-white">
            {currentLanguage === 'en' ? 'Our Products' : 'Nuestros Productos'}
          </h2>
          <p className="text-white mt-8 max-w-2xl mx-auto font-light leading-relaxed">
            {currentLanguage === 'en' 
              ? 'We offer an exclusive collection of gender reveal products to make your special moment truly unforgettable.'
              : 'Ofrecemos una colección exclusiva de productos para revelación de género para hacer que su momento especial sea verdaderamente inolvidable.'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="group" style={{ borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.03)', background: 'white', transition: 'transform 0.3s ease' }}>
            <div className="aspect-[4/3] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8a63d2]/10 to-transparent opacity-30"></div>
              <Image
                src="/indexmain/700.jpg"
                alt="Ultrasound Diagnostics"
                fill
                className="object-cover"
              />
            </div>
            <div style={{ padding: '1.5rem', background: 'white', position: 'relative', minHeight: '12rem' }}>
              <h3 className="text-xl font-medium tracking-wider mb-3 text-[#3a3a3a] group-hover:text-[#6642c8] transition-colors duration-300">
                <span className="block text-sm text-purple-500 mb-1 font-semibold uppercase">{currentLanguage === 'en' ? 'Gender Reveal' : 'Revelación de Género'}</span>
                {currentLanguage === 'en' ? '💨 POWDER CANNON' : '💨 CAÑÓN DE POLVO'}
              </h3>
              <p className="text-gray-600 mb-6 text-sm font-light">
                {currentLanguage === 'en' 
                  ? "Create a colorful explosion of joy with our premium powder cannons, perfect for capturing that special moment in photos and videos."
                  : "Cree una explosión colorida de alegría con nuestros cañones de polvo premium, perfectos para capturar ese momento especial en fotos y videos."}
              </p>
              <Link href="/services/powder-cannon" className="btn-link" style={{ display: 'flex', alignItems: 'center', position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                <span className="text-xs uppercase tracking-widest">{currentLanguage === 'en' ? '✨ Discover' : '✨ Descubrir'}</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="group" style={{ borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.03)', background: 'white', transition: 'transform 0.3s ease' }}>
            <div className="aspect-[4/3] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8a63d2]/10 to-transparent opacity-30"></div>
              <Image
                src="/ultrasounds/Ultrasoundv2.webp"
                alt="Industrial Consulting"
                fill
                className="object-cover"
              />
            </div>
            <div style={{ padding: '1.5rem', background: 'white', position: 'relative', minHeight: '12rem' }}>
              <h3 className="text-xl font-medium tracking-wider mb-3 text-[#3a3a3a] group-hover:text-[#6642c8] transition-colors duration-300">
                <span className="block text-sm text-purple-500 mb-1 font-semibold uppercase">{currentLanguage === 'en' ? 'Celebration' : 'Celebración'}</span>
                {currentLanguage === 'en' ? '🎉 CONFETTI CANNON' : '🎉 CAÑÓN DE CONFETI'}
              </h3>
              <p className="text-gray-600 mb-6 text-sm font-light">
                {currentLanguage === 'en' 
                  ? "Shower your special moment with joy using our festive confetti cannons, available in pink, blue, or mixed colors for your gender reveal party."
                  : "Llene su momento especial de alegría con nuestros festivos cañones de confeti, disponibles en colores rosa, azul o mixtos para su fiesta de revelación de género."}
              </p>
              <Link href="/services/confetti-cannon" className="btn-link" style={{ display: 'flex', alignItems: 'center', position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                <span className="text-xs uppercase tracking-widest">{currentLanguage === 'en' ? '✨ Discover' : '✨ Descubrir'}</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="group" style={{ borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.03)', background: 'white', transition: 'transform 0.3s ease' }}>
            <div className="aspect-[4/3] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8a63d2]/10 to-transparent opacity-30"></div>
              <Image
                src="/indexmain/800.jpg"
                alt="Premium Maintenance"
                fill
                className="object-cover"
              />
            </div>
            <div style={{ padding: '1.5rem', background: 'white', position: 'relative', minHeight: '12rem' }}>
              <h3 className="text-xl font-medium tracking-wider mb-3 text-[#3a3a3a] group-hover:text-[#6642c8] transition-colors duration-300">
                <span className="block text-sm text-purple-500 mb-1 font-semibold uppercase">{currentLanguage === 'en' ? 'Keepsakes' : 'Recuerdos'}</span>
                {currentLanguage === 'en' ? '🧸 STUFFED ANIMALS' : '🧸 PELUCHES'}
              </h3>
              <p className="text-gray-600 mb-6 text-sm font-light">
                {currentLanguage === 'en' 
                  ? "Adorable plush animals with a special recording of your baby's heartbeat inside, creating a cherished keepsake that will last a lifetime."
                  : "Adorables animales de peluche con una grabación especial del latido del corazón de su bebé en el interior, creando un recuerdo preciado que durará toda la vida."}
              </p>
              <Link href="/services/stuffed-animals" className="btn-link" style={{ display: 'flex', alignItems: 'center', position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                <span className="text-xs uppercase tracking-widest">{currentLanguage === 'en' ? '✨ Discover' : '✨ Descubrir'}</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
