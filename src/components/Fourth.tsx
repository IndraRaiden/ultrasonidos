'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Fourth() {
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
    <section className="py-24 bg-[#ffffff]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="couture-frame">
              <div className="w-full aspect-[4/5] relative overflow-hidden bg-[#f5f5f5]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8a63d2]/10 to-transparent opacity-30"></div>
                <Image 
                  src="/fotos/nancysbg.jpg" 
                  alt="Nuestra empresa" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#6642c8]/80 mb-4 block">
              {currentLanguage === 'en' ? 'Our Philosophy' : 'Nuestra Filosofía'}
            </span>
            <h2 className="section-heading text-3xl mb-8">
              {currentLanguage === 'en' ? 'About Us' : 'Sobre Nosotros'}
            </h2>
            <p className="text-gray-600 mb-6 font-light leading-relaxed">
              {currentLanguage === 'en' 
                ? 'We are an exclusive firm specialized in high-precision ultrasound technology, dedicated to providing innovative and sophisticated solutions for the most demanding medical and industrial sectors.'
                : 'Somos una firma exclusiva especializada en tecnología de ultrasonido de alta precisión, dedicada a proporcionar soluciones innovadoras y sofisticadas para el sector médico e industrial más exigente.'}
            </p>
            <p className="text-gray-600 mb-10 font-light leading-relaxed">
              {currentLanguage === 'en' 
                ? 'With a trajectory of excellence, our select team of experts is committed to providing impeccable and personalized service that exceeds the expectations of our distinguished clientele.'
                : 'Con una trayectoria de excelencia, nuestro selecto equipo de expertos está comprometido con ofrecer un servicio impecable y personalizado que supera las expectativas de nuestra distinguida clientela.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
