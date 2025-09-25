'use client';

import { useState, createContext, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Create a context for language
export const LanguageContext = createContext({
  language: 'en',
  setLanguage: (lang: string) => {}
});

// Language provider component
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('en');
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use language context
export const useLanguage = () => useContext(LanguageContext);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState('en'); // 'en' for English, 'es' for Spanish

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleLanguage = () => {
    // Calculate new language once to ensure consistency
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    
    // Update state
    setCurrentLanguage(newLanguage);
    
    // Dispatch a custom event that other components can listen to
    document.dispatchEvent(new CustomEvent('languageChange', { 
      detail: { language: newLanguage } 
    }));
  };

  return (
    <nav className="bg-[#ffffff]/90 backdrop-blur-xl border-b border-[#8a63d2]/20 w-full sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative h-12">
                <Image 
                  src="/hibaby-logo.png" 
                  alt="HiBaby Logo" 
                  width={120} 
                  height={48} 
                  className="object-contain h-full w-auto"
                  priority
                />
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <div className="flex space-x-1 mr-8">
              <Link href="/" className={`px-4 py-2 ${pathname === '/' ? 'text-[#3a3a3a]' : 'text-gray-600'} hover:text-[#3a3a3a] uppercase tracking-widest text-xs font-light transition-colors duration-500 relative group`}>
                {currentLanguage === 'en' ? 'Home' : 'Inicio'}
                <span className={`absolute bottom-0 left-1/2 ${pathname === '/' ? 'w-1/2 left-1/4' : 'w-0'} h-px bg-[#8a63d2] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300`}></span>
              </Link>
              <Link href="/services" className={`px-4 py-2 ${pathname === '/services' ? 'text-[#3a3a3a]' : 'text-gray-600'} hover:text-[#3a3a3a] uppercase tracking-widest text-xs font-light transition-colors duration-500 relative group`}>
                {currentLanguage === 'en' ? 'Services' : 'Servicios'}
                <span className={`absolute bottom-0 left-1/2 ${pathname === '/services' ? 'w-1/2 left-1/4' : 'w-0'} h-px bg-[#8a63d2] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300`}></span>
              </Link>
              <Link href="/gallery" className={`px-4 py-2 ${pathname === '/gallery' ? 'text-[#3a3a3a]' : 'text-gray-600'} hover:text-[#3a3a3a] uppercase tracking-widest text-xs font-light transition-colors duration-500 relative group`}>
                {currentLanguage === 'en' ? 'Gallery' : 'Galería'}
                <span className={`absolute bottom-0 left-1/2 ${pathname === '/gallery' ? 'w-1/2 left-1/4' : 'w-0'} h-px bg-[#8a63d2] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300`}></span>
              </Link>
              <Link href="/faqs" className={`px-4 py-2 ${pathname === '/faqs' ? 'text-[#3a3a3a]' : 'text-gray-600'} hover:text-[#3a3a3a] uppercase tracking-widest text-xs font-light transition-colors duration-500 relative group`}>
                {currentLanguage === 'en' ? 'FAQS' : 'FAQS'}
                <span className={`absolute bottom-0 left-1/2 ${pathname === '/faqs' ? 'w-1/2 left-1/4' : 'w-0'} h-px bg-[#8a63d2] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300`}></span>
              </Link>
              <Link href="/contact" className={`px-4 py-2 ${pathname === '/contact' ? 'text-[#3a3a3a]' : 'text-gray-600'} hover:text-[#3a3a3a] uppercase tracking-widest text-xs font-light transition-colors duration-500 relative group`}>
                {currentLanguage === 'en' ? 'Contact' : 'Contacto'}
                <span className={`absolute bottom-0 left-1/2 ${pathname === '/contact' ? 'w-1/2 left-1/4' : 'w-0'} h-px bg-[#8a63d2] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300`}></span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link 
                href="https://wa.me/+16195192997" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-icon border border-[#8a63d2]/40 bg-transparent hover:bg-[#25D366]/10 text-[#25D366] hover:text-[#25D366] group relative overflow-hidden p-2 rounded-full flex items-center justify-center"
                aria-label="Contact via WhatsApp"
              >
                <span className="relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-7-.2-10.7-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#25D366]/0 via-[#25D366]/30 to-[#25D366]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              </Link>
              <Link 
                href="sms:+16195192997" 
                className="btn-icon border border-[#8a63d2]/40 bg-transparent hover:bg-[#6642c8]/10 text-[#6642c8] hover:text-[#3a3a3a] group relative overflow-hidden p-2 rounded-full flex items-center justify-center"
                aria-label="Contact via Email"
              >
                <span className="relative z-10">
                  <svg className="h-5 w-5" viewBox="0 0 512 512" fill="currentColor">
                    <circle cx="256" cy="256" r="256" style={{fill: "#420060"}} />
                    <g>
                      <path style={{fill: "#FFFFFF"}} d="M384.64,346.48H127.36c-12.88,0-23.36-10.56-23.36-23.36V159.36c0-12.88,10.56-23.36,23.36-23.36   h257.2c12.88,0,23.36,10.56,23.36,23.36v163.68C408,335.92,397.44,346.48,384.64,346.48z" />
                      <polygon style={{fill: "#FFFFFF"}} points="337.84,416.64 337.84,323.04 220.96,323.04" />
                    </g>
                    <rect x="244.32" y="206.16" width="23.36" height="23.36" />
                    <rect x="197.52" y="206.16" width="23.36" height="23.36" />
                    <rect x="150.8" y="206.16" width="23.36" height="23.36" />
                    <rect x="291.04" y="206.16" width="23.36" height="23.36" />
                    <rect x="337.84" y="206.16" width="23.36" height="23.36" />
                    <rect x="244.32" y="252.96" width="23.36" height="23.36" />
                    <rect x="291.04" y="252.96" width="23.36" height="23.36" />
                    <rect x="337.84" y="252.96" width="23.36" height="23.36" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#8a63d2]/0 via-[#8a63d2]/30 to-[#8a63d2]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              </Link>
              <button 
                onClick={toggleLanguage}
                className="btn-primary border border-[#8a63d2]/40 bg-transparent hover:bg-[#8a63d2]/10 text-[#6642c8] hover:text-[#3a3a3a] group relative overflow-hidden"
                aria-label="Toggle language"
              >
                <span className="relative z-10 uppercase tracking-widest text-xs font-light">{currentLanguage === 'en' ? 'ES' : 'EN'}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#8a63d2]/0 via-[#8a63d2]/30 to-[#8a63d2]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              </button>
              <Link href="/contact" className="btn-primary border border-[#8a63d2]/40 bg-transparent hover:bg-[#8a63d2]/10 text-[#6642c8] hover:text-[#3a3a3a] group relative overflow-hidden">
                <span className="relative z-10 uppercase tracking-widest text-xs font-light">{currentLanguage === 'en' ? 'Book Appointment' : 'Reservar Cita'}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#8a63d2]/0 via-[#8a63d2]/30 to-[#8a63d2]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full border border-[#8a63d2]/30 text-[#6642c8] hover:text-[#3a3a3a] focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#ffffff]/95 backdrop-blur-xl border-b border-[#8a63d2]/20">
          <div className="container-custom py-6 space-y-4">
            <Link href="/" className={`block px-4 py-3 ${pathname === '/' ? 'text-[#3a3a3a] border-[#8a63d2]/40' : 'text-gray-500 hover:text-[#3a3a3a] border-transparent hover:border-[#8a63d2]/40'} font-light uppercase tracking-widest text-xs border-l transition-colors duration-300`}>
              {currentLanguage === 'en' ? 'Home' : 'Inicio'}
            </Link>
            <Link href="/services" className={`block px-4 py-3 ${pathname === '/services' ? 'text-[#3a3a3a] border-[#8a63d2]/40' : 'text-gray-500 hover:text-[#3a3a3a] border-transparent hover:border-[#8a63d2]/40'} font-light uppercase tracking-widest text-xs border-l transition-colors duration-300`}>
              {currentLanguage === 'en' ? 'Services' : 'Servicios'}
            </Link>
            <Link href="/gallery" className={`block px-4 py-3 ${pathname === '/gallery' ? 'text-[#3a3a3a] border-[#8a63d2]/40' : 'text-gray-500 hover:text-[#3a3a3a] border-transparent hover:border-[#8a63d2]/40'} font-light uppercase tracking-widest text-xs border-l transition-colors duration-300`}>
              {currentLanguage === 'en' ? 'Gallery' : 'Galería'}
            </Link>
            <Link href="/faqs" className={`block px-4 py-3 ${pathname === '/faqs' ? 'text-[#3a3a3a] border-[#8a63d2]/40' : 'text-gray-500 hover:text-[#3a3a3a] border-transparent hover:border-[#8a63d2]/40'} font-light uppercase tracking-widest text-xs border-l transition-colors duration-300`}>
              {currentLanguage === 'en' ? 'FAQS' : 'FAQS'}
            </Link>
            <Link href="/contact" className={`block px-4 py-3 ${pathname === '/contact' ? 'text-[#3a3a3a] border-[#8a63d2]/40' : 'text-gray-500 hover:text-[#3a3a3a] border-transparent hover:border-[#8a63d2]/40'} font-light uppercase tracking-widest text-xs border-l transition-colors duration-300`}>
              {currentLanguage === 'en' ? 'Contact' : 'Contacto'}
            </Link>
            <button 
              onClick={toggleLanguage}
              className="block px-4 py-3 text-[#6642c8] hover:text-[#3a3a3a] border-l border-[#8a63d2]/40 font-light uppercase tracking-widest text-xs transition-colors duration-300"
            >
              {currentLanguage === 'en' ? 'Español' : 'English'}
            </button>
            <div className="pt-6 border-t border-[#8a63d2]/20">
              <div className="flex justify-center space-x-4 mb-4">
                <Link 
                  href="https://wa.me/+16195192997" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3 border border-[#8a63d2]/40 text-[#25D366] uppercase tracking-widest text-xs font-light hover:bg-[#25D366]/10 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-7-.2-10.7-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  <span>{currentLanguage === 'en' ? 'WhatsApp' : 'WhatsApp'}</span>
                </Link>
                <Link 
                  href="sms:+16195192997" 
                  className="flex-1 py-3 border border-[#8a63d2]/40 text-[#6642c8] uppercase tracking-widest text-xs font-light hover:bg-[#8a63d2]/10 transition-colors duration-300 flex items-center justify-center"
                  aria-label="Text Message"
                >
                  <svg className="h-5 w-5" viewBox="0 0 512 512" fill="currentColor">
                    <circle cx="256" cy="256" r="256" style={{fill: "#420060"}} />
                    <g>
                      <path style={{fill: "#FFFFFF"}} d="M384.64,346.48H127.36c-12.88,0-23.36-10.56-23.36-23.36V159.36c0-12.88,10.56-23.36,23.36-23.36   h257.2c12.88,0,23.36,10.56,23.36,23.36v163.68C408,335.92,397.44,346.48,384.64,346.48z" />
                      <polygon style={{fill: "#FFFFFF"}} points="337.84,416.64 337.84,323.04 220.96,323.04" />
                    </g>
                    <rect x="244.32" y="206.16" width="23.36" height="23.36" />
                    <rect x="197.52" y="206.16" width="23.36" height="23.36" />
                    <rect x="150.8" y="206.16" width="23.36" height="23.36" />
                    <rect x="291.04" y="206.16" width="23.36" height="23.36" />
                    <rect x="337.84" y="206.16" width="23.36" height="23.36" />
                    <rect x="244.32" y="252.96" width="23.36" height="23.36" />
                    <rect x="291.04" y="252.96" width="23.36" height="23.36" />
                    <rect x="337.84" y="252.96" width="23.36" height="23.36" />
                  </svg>
                </Link>
              </div>
              <Link href="/contact" className="block w-full py-3 border border-[#8a63d2]/40 text-[#6642c8] uppercase tracking-widest text-xs font-light hover:bg-[#8a63d2]/10 transition-colors duration-300 text-center">
                {currentLanguage === 'en' ? 'Book Appointment' : 'Reservar Cita'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
