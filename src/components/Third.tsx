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
            {currentLanguage === 'en' ? 'Exclusive Services' : 'Servicios Exclusivos'}
          </span>
          <h2 className="section-heading centered text-3xl !text-white">
            {currentLanguage === 'en' ? 'Our Services' : 'Nuestros Servicios'}
          </h2>
          <p className="text-white mt-8 max-w-2xl mx-auto font-light leading-relaxed">
            {currentLanguage === 'en' 
              ? 'We offer an exclusive collection of ultrasound services designed with the highest precision and sophistication.'
              : 'Ofrecemos una colección exclusiva de servicios de ultrasonido diseñados con la más alta precisión y sofisticación.'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="group" style={{ borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.03)', background: 'white', transition: 'transform 0.3s ease' }}>
            <div className="aspect-[4/3] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8a63d2]/10 to-transparent opacity-30"></div>
              <Image
                src="/ultrasounds/Ultrasoundv1.webp"
                alt="Ultrasound Diagnostics"
                fill
                className="object-cover"
              />
            </div>
            <div style={{ padding: '1.5rem', background: 'white', position: 'relative', minHeight: '12rem' }}>
              <h3 className="text-lg font-light tracking-wider mb-3 text-[#3a3a3a] group-hover:text-[#6642c8] transition-colors duration-300">
                {currentLanguage === 'en' ? '👶 Ultrasound Sessions' : '👶 Sesiones de Ultrasonido'}
              </h3>
              <p className="text-gray-600 mb-6 text-sm font-light">
                {currentLanguage === 'en' 
                  ? "See your baby's tiny hands, sweet smiles, and first movements with clear and beautiful images."
                  : "Vea las pequeñas manos, dulces sonrisas y primeros movimientos de su bebé con imágenes claras y hermosas."}
              </p>
              <Link href="/services/diagnostics" className="btn-link" style={{ display: 'flex', alignItems: 'center', position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
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
              <h3 className="text-lg font-light tracking-wider mb-3 text-[#3a3a3a] group-hover:text-[#6642c8] transition-colors duration-300">
                {currentLanguage === 'en' ? '🎉 Gender Reveal Experiences' : '🎉 Experiencias de Revelación de Género'}
              </h3>
              <p className="text-gray-600 mb-6 text-sm font-light">
                {currentLanguage === 'en' 
                  ? "Turn your ultrasound into a celebration! From the big reveal to creative ideas, we make this moment unforgettable for you and your loved ones."
                  : "¡Convierta su ultrasonido en una celebración! Desde la gran revelación hasta ideas creativas, hacemos que este momento sea inolvidable para usted y sus seres queridos."}
              </p>
              <Link href="/services/consulting" className="btn-link" style={{ display: 'flex', alignItems: 'center', position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
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
                src="/ultrasounds/Ultrasoundv3.jpg"
                alt="Premium Maintenance"
                fill
                className="object-cover"
              />
            </div>
            <div style={{ padding: '1.5rem', background: 'white', position: 'relative', minHeight: '12rem' }}>
              <h3 className="text-lg font-light tracking-wider mb-3 text-[#3a3a3a] group-hover:text-[#6642c8] transition-colors duration-300">
                {currentLanguage === 'en' ? '💓 Heartbeat Keepsakes' : '💓 Recuerdos de Latidos'}
              </h3>
              <p className="text-gray-600 mb-6 text-sm font-light">
                {currentLanguage === 'en' 
                  ? "From heartbeat recordings to multiple media options, we create special keepsakes so your baby's first moments stay with you forever."
                  : "Desde grabaciones de latidos hasta múltiples opciones de medios, creamos recuerdos especiales para que los primeros momentos de su bebé permanezcan con usted para siempre."}
              </p>
              <Link href="/services/maintenance" className="btn-link" style={{ display: 'flex', alignItems: 'center', position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
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
