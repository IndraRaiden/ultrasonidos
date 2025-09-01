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
    <section className="py-24 bg-[#fafafa]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#6642c8]/80 mb-4 block">
            {currentLanguage === 'en' ? 'Exclusive Services' : 'Servicios Exclusivos'}
          </span>
          <h2 className="section-heading centered text-3xl">
            {currentLanguage === 'en' ? 'Our Services' : 'Nuestros Servicios'}
          </h2>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
            {currentLanguage === 'en' 
              ? 'We offer an exclusive collection of ultrasound services designed with the highest precision and sophistication.'
              : 'Ofrecemos una colección exclusiva de servicios de ultrasonido diseñados con la más alta precisión y sofisticación.'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="product-card group">
            <div className="aspect-[4/3] bg-[#f5f5f5] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8a63d2]/10 to-transparent opacity-30"></div>
              <Image
                src="/ultrasounds/Ultrasoundv1.webp"
                alt="Ultrasound Diagnostics"
                fill
                className="object-cover"
              />
            </div>
            <div className="product-info">
              <h3 className="text-lg font-light tracking-wider mb-3 text-[#3a3a3a] group-hover:text-[#6642c8] transition-colors duration-300">
                {currentLanguage === 'en' ? 'Ultrasound Diagnostics' : 'Diagnóstico por Ultrasonido'}
              </h3>
              <p className="text-gray-600 mb-6 text-sm font-light">
                {currentLanguage === 'en' 
                  ? 'Precise diagnostic services using state-of-the-art ultrasound technology with personalized attention.'
                  : 'Servicios de diagnóstico precisos utilizando tecnología de ultrasonido de última generación con atención personalizada.'}
              </p>
              <Link href="/services/diagnostics" className="btn-link">
                <span className="text-xs uppercase tracking-widest">{currentLanguage === 'en' ? 'Discover' : 'Descubrir'}</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="product-card group">
            <div className="aspect-[4/3] bg-[#f5f5f5] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8a63d2]/10 to-transparent opacity-30"></div>
              <Image
                src="/ultrasounds/Ultrasoundv2.webp"
                alt="Industrial Consulting"
                fill
                className="object-cover"
              />
            </div>
            <div className="product-info">
              <h3 className="text-lg font-light tracking-wider mb-3 text-[#3a3a3a] group-hover:text-[#6642c8] transition-colors duration-300">
                {currentLanguage === 'en' ? 'Industrial Consulting' : 'Consultoría Industrial'}
              </h3>
              <p className="text-gray-600 mb-6 text-sm font-light">
                {currentLanguage === 'en' 
                  ? 'Exclusive consulting to implement advanced ultrasound solutions in high-demand industrial processes.'
                  : 'Asesoramiento exclusivo para implementar soluciones de ultrasonido avanzadas en procesos industriales de alta exigencia.'}
              </p>
              <Link href="/services/consulting" className="btn-link">
                <span className="text-xs uppercase tracking-widest">{currentLanguage === 'en' ? 'Discover' : 'Descubrir'}</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="product-card group">
            <div className="aspect-[4/3] bg-[#f5f5f5] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8a63d2]/10 to-transparent opacity-30"></div>
              <Image
                src="/ultrasounds/Ultrasoundv3.jpg"
                alt="Premium Maintenance"
                fill
                className="object-cover"
              />
            </div>
            <div className="product-info">
              <h3 className="text-lg font-light tracking-wider mb-3 text-[#3a3a3a] group-hover:text-[#6642c8] transition-colors duration-300">
                {currentLanguage === 'en' ? 'Premium Maintenance' : 'Mantenimiento Premium'}
              </h3>
              <p className="text-gray-600 mb-6 text-sm font-light">
                {currentLanguage === 'en' 
                  ? 'Specialized technical service with personalized attention to keep your ultrasound equipment in optimal condition.'
                  : 'Servicio técnico especializado con atención personalizada para mantener su equipo de ultrasonido en condiciones óptimas.'}
              </p>
              <Link href="/services/maintenance" className="btn-link">
                <span className="text-xs uppercase tracking-widest">{currentLanguage === 'en' ? 'Discover' : 'Descubrir'}</span>
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
