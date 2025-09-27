'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "./Navbar";

export default function Second() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(1);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    // Language change handler
    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLanguage(event.detail.language);
    };
    
    document.addEventListener('languageChange', handleLanguageChange as EventListener);
    
    return () => {
      document.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);
  
  // Animation classes based on section visibility
  const sectionVisible = activeSection > 0;
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute left-0 top-0 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-gradient-to-l from-indigo-50 to-purple-100 blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
          {/* Left content column */}
          <div className="lg:w-1/2 space-y-8">
            <div className="overflow-hidden">
              <p 
                className={`inline-block py-1 px-3 text-xs font-medium tracking-wider text-indigo-800 bg-indigo-50 rounded-full uppercase transform transition-all duration-700 ease-out ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                {currentLanguage === 'en' ? 'Innovative Technology' : 'Tecnología Innovadora'}
              </p>
            </div>
            
            <div className="overflow-hidden">
              <h2 
                className={`text-4xl md:text-5xl font-light leading-tight transform transition-all duration-700 delay-100 ease-out ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              >
                {currentLanguage === 'en' 
                  ? <>
                      From 2D to 4D Ultrasounds – Your Baby&apos;s First Hello
                    </>
                  : <>
                      Hola Bebé Ultrasonido – El primer hola de tu bebé
                    </>}
              </h2>
            </div>
            
            <div className="overflow-hidden">
              <p 
                className={`text-gray-600 leading-relaxed transform transition-all duration-700 delay-200 ease-out ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              >
                {currentLanguage === 'en' 
                  ? 'See every detail of your little one&apos;s journey — from the very first heartbeat to lifelike 4D smiles. At Hi Baby, we turn precious moments into lasting memories'
                  : 'Desde el primer latido hasta las sonrisas más dulces, hacemos que cada visita sea inolvidable. Comparte la alegría con tus seres queridos y llévate a casa recuerdos que calientan el corazón.'}
              </p>
            </div>
            
            <div className="overflow-hidden pt-4">
              <div 
                className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-300 ease-out ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              >
                <Link 
                  href="/services" 
                  className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-indigo-600 border border-indigo-600 rounded-md shadow-inner transition-all duration-300"
                >
                  <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-300 transition-all border-white rounded-md"></span>
                  <span className="relative text-indigo-600 group-hover:text-indigo-800 transition duration-300 ease-out">
                    {currentLanguage === 'en' ? 'Our Services' : 'Nuestros Servicios'}
                  </span>
                  <span className="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
                </Link>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 text-gray-700 hover:text-indigo-700 transition-colors duration-300 ease-out"
                >
                  <span className="border-b border-gray-400 hover:border-indigo-600">
                    {currentLanguage === 'en' ? 'Schedule Now' : 'Reservas'}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right video column */}
          <div className="lg:w-1/2">
            <div className="overflow-hidden">
              <div 
                className={`relative transform transition-all duration-1000 delay-200 ease-out ${sectionVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-24 opacity-0 scale-95'}`}
              >
                {/* Main video with enhanced size */}
                <div className="relative w-[110%] aspect-video rounded-2xl overflow-hidden group shadow-xl transform -translate-x-[5%]">
                  <div className="absolute inset-0 bg-indigo-900/5 group-hover:bg-indigo-900/0 transition-colors duration-500 z-10"></div>
                  
                  {/* Video iframe */}
                  <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-700 ease-out">
                    <iframe 
                      src="https://www.youtube.com/embed/PnXthsPg8jg?autoplay=1&mute=1&rel=0&showinfo=0&controls=1&modestbranding=1&playsinline=1&fs=1&hd=1" 
                      title="HI BABY INTRO"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      style={{border: 'none'}}
                    />
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 border border-indigo-100 rounded-full transition-transform duration-700 group-hover:translate-x-3 group-hover:-translate-y-3"></div>
                  <div className="absolute -left-5 -bottom-5 w-20 h-20 border border-indigo-100 rounded-full transition-transform duration-700 group-hover:-translate-x-3 group-hover:translate-y-3"></div>
                  
                  {/* Label element */}
                  <div className="absolute left-6 bottom-6 py-2 px-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <p className="text-xs text-gray-500">{currentLanguage === 'en' ? 'Advanced Imaging' : 'Imágenes Avanzadas'}</p>
                    <p className="text-sm font-medium text-indigo-900">{currentLanguage === 'en' ? 'High Resolution' : 'Alta Resolución'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


