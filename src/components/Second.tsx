'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "./Navbar";

export default function Second() {
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
    <section className="bg-gradient-to-br from-[#f5f5f5] via-[#ffffff] to-[#f5f5f5] text-[#3a3a3a] py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#6642c8]/80 mb-4 block">
              {currentLanguage === 'en' ? 'Exclusive Experience' : 'Experiencia Exclusiva'}
            </span>
            <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-wide leading-tight">
              {currentLanguage === 'en' 
                ? <>High <span className="purple-text font-normal">precision</span> <span className="purple-text font-normal">ultrasound</span> technology</>
                : <>Tecnología de <span className="purple-text font-normal">ultrasonido</span> de alta <span className="purple-text font-normal">precisión</span></>}
            </h1>
            <p className="text-gray-600 mb-10 font-light leading-relaxed">
              {currentLanguage === 'en' 
                ? 'Innovative and exclusive solutions for the medical and industrial sectors, with the highest quality and sophistication.'
                : 'Soluciones innovadoras y exclusivas para el sector médico e industrial, con la más alta calidad y sofisticación.'}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/services" className="btn-primary">
                {currentLanguage === 'en' ? 'Discover Services' : 'Descubrir Servicios'}
              </Link>
              <Link href="/contact" className="btn-secondary">
                {currentLanguage === 'en' ? 'Private Consultation' : 'Consulta Privada'}
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="couture-frame">
              <div className="w-full h-80 md:h-96 relative overflow-hidden bg-[#fafafa]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8a63d2]/10 to-transparent opacity-50"></div>
                <Image 
                  src="/mainindex/ultrasound.jpg" 
                  alt="Ultrasonidos tecnología" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
