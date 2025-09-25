'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  
  useEffect(() => {
    // Function to handle language changes
    const handleLanguageChange = (event: any) => {
      setCurrentLanguage(event.detail.language);
    };
    
    // Listen for language change events
    document.addEventListener('languageChange', handleLanguageChange);
    
    // Cleanup
    return () => {
      document.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);
  return (
    <footer className="bg-[#f5f5f5] text-[#3a3a3a] py-16 border-t border-[#8a63d2]/20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <div className="relative h-10 mr-3">
                <Image 
                  src="/hibaby-logo.png" 
                  alt="HiBaby Logo" 
                  width={100} 
                  height={40} 
                  className="object-contain h-full w-auto"
                />
              </div>
            </div>
            <p className="text-gray-500 text-xs font-light">© {new Date().getFullYear()} {currentLanguage === 'en' ? 'All rights reserved' : 'Todos los derechos reservados'}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link href="/" className="text-xs uppercase tracking-widest text-gray-500 hover:text-[#6642c8] transition-colors duration-300">
              {currentLanguage === 'en' ? 'Home' : 'Inicio'}
            </Link>
            <Link href="/services" className="text-xs uppercase tracking-widest text-gray-400 hover:text-[#8a63d2] transition-colors duration-300">
              {currentLanguage === 'en' ? 'Services' : 'Servicios'}
            </Link>
            <Link href="/faqs" className="text-xs uppercase tracking-widest text-gray-400 hover:text-[#8a63d2] transition-colors duration-300">
              {currentLanguage === 'en' ? 'FAQS' : 'FAQS'}
            </Link>
            <Link href="/contact" className="text-xs uppercase tracking-widest text-gray-400 hover:text-[#8a63d2] transition-colors duration-300">
              {currentLanguage === 'en' ? 'Contact' : 'Contacto'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
