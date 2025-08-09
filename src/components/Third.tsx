'use client';

import Link from "next/link";
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
          <span className="text-xs uppercase tracking-[0.2em] text-[#c78550]/80 mb-4 block">
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#e8a87c]/10 to-transparent opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#ffffff] border border-[#e8a87c]/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#c78550]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="product-info">
              <h3 className="text-lg font-light tracking-wider mb-3 text-[#3a3a3a] group-hover:text-[#c78550] transition-colors duration-300">
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#e8a87c]/10 to-transparent opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#ffffff] border border-[#e8a87c]/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#c78550]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="product-info">
              <h3 className="text-lg font-light tracking-wider mb-3 text-[#3a3a3a] group-hover:text-[#c78550] transition-colors duration-300">
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#e8a87c]/10 to-transparent opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#ffffff] border border-[#e8a87c]/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#c78550]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="product-info">
              <h3 className="text-lg font-light tracking-wider mb-3 text-[#3a3a3a] group-hover:text-[#c78550] transition-colors duration-300">
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
