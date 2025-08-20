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
    setCurrentLanguage(currentLanguage === 'en' ? 'es' : 'en');
    // Dispatch a custom event that other components can listen to
    document.dispatchEvent(new CustomEvent('languageChange', { 
      detail: { language: currentLanguage === 'en' ? 'es' : 'en' } 
    }));
  };

  return (
    <nav className="bg-[#ffffff]/90 backdrop-blur-xl border-b border-[#e8a87c]/20 w-full sticky top-0 z-50">
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
                <span className={`absolute bottom-0 left-1/2 ${pathname === '/' ? 'w-1/2 left-1/4' : 'w-0'} h-px bg-[#e8a87c] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300`}></span>
              </Link>
              <Link href="/services" className={`px-4 py-2 ${pathname === '/services' ? 'text-[#3a3a3a]' : 'text-gray-600'} hover:text-[#3a3a3a] uppercase tracking-widest text-xs font-light transition-colors duration-500 relative group`}>
                {currentLanguage === 'en' ? 'Services' : 'Servicios'}
                <span className={`absolute bottom-0 left-1/2 ${pathname === '/services' ? 'w-1/2 left-1/4' : 'w-0'} h-px bg-[#e8a87c] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300`}></span>
              </Link>
              <Link href="/about" className={`px-4 py-2 ${pathname === '/about' ? 'text-[#3a3a3a]' : 'text-gray-600'} hover:text-[#3a3a3a] uppercase tracking-widest text-xs font-light transition-colors duration-500 relative group`}>
                {currentLanguage === 'en' ? 'About Us' : 'Nosotros'}
                <span className={`absolute bottom-0 left-1/2 ${pathname === '/about' ? 'w-1/2 left-1/4' : 'w-0'} h-px bg-[#e8a87c] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300`}></span>
              </Link>
              <Link href="/contact" className={`px-4 py-2 ${pathname === '/contact' ? 'text-[#3a3a3a]' : 'text-gray-600'} hover:text-[#3a3a3a] uppercase tracking-widest text-xs font-light transition-colors duration-500 relative group`}>
                {currentLanguage === 'en' ? 'Contact' : 'Contacto'}
                <span className={`absolute bottom-0 left-1/2 ${pathname === '/contact' ? 'w-1/2 left-1/4' : 'w-0'} h-px bg-[#e8a87c] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300`}></span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={toggleLanguage}
                className="btn-primary border border-[#e8a87c]/40 bg-transparent hover:bg-[#e8a87c]/10 text-[#c78550] hover:text-[#3a3a3a] group relative overflow-hidden"
                aria-label="Toggle language"
              >
                <span className="relative z-10 uppercase tracking-widest text-xs font-light">{currentLanguage === 'en' ? 'ES' : 'EN'}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#e8a87c]/0 via-[#e8a87c]/30 to-[#e8a87c]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              </button>
              <button className="btn-primary border border-[#e8a87c]/40 bg-transparent hover:bg-[#e8a87c]/10 text-[#c78550] hover:text-[#3a3a3a] group relative overflow-hidden">
                <span className="relative z-10 uppercase tracking-widest text-xs font-light">{currentLanguage === 'en' ? 'Book Appointment' : 'Reservar Cita'}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#e8a87c]/0 via-[#e8a87c]/30 to-[#e8a87c]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              </button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full border border-[#e8a87c]/30 text-[#c78550] hover:text-[#3a3a3a] focus:outline-none"
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
        <div className="md:hidden bg-[#ffffff]/95 backdrop-blur-xl border-b border-[#e8a87c]/20">
          <div className="container-custom py-6 space-y-4">
            <Link href="/" className={`block px-4 py-3 ${pathname === '/' ? 'text-[#3a3a3a] border-[#e8a87c]/40' : 'text-gray-500 hover:text-[#3a3a3a] border-transparent hover:border-[#e8a87c]/40'} font-light uppercase tracking-widest text-xs border-l transition-colors duration-300`}>
              {currentLanguage === 'en' ? 'Home' : 'Inicio'}
            </Link>
            <Link href="/services" className={`block px-4 py-3 ${pathname === '/services' ? 'text-[#3a3a3a] border-[#e8a87c]/40' : 'text-gray-500 hover:text-[#3a3a3a] border-transparent hover:border-[#e8a87c]/40'} font-light uppercase tracking-widest text-xs border-l transition-colors duration-300`}>
              {currentLanguage === 'en' ? 'Services' : 'Servicios'}
            </Link>
            <Link href="/about" className={`block px-4 py-3 ${pathname === '/about' ? 'text-[#3a3a3a] border-[#e8a87c]/40' : 'text-gray-500 hover:text-[#3a3a3a] border-transparent hover:border-[#e8a87c]/40'} font-light uppercase tracking-widest text-xs border-l transition-colors duration-300`}>
              {currentLanguage === 'en' ? 'About Us' : 'Nosotros'}
            </Link>
            <Link href="/contact" className={`block px-4 py-3 ${pathname === '/contact' ? 'text-[#3a3a3a] border-[#e8a87c]/40' : 'text-gray-500 hover:text-[#3a3a3a] border-transparent hover:border-[#e8a87c]/40'} font-light uppercase tracking-widest text-xs border-l transition-colors duration-300`}>
              {currentLanguage === 'en' ? 'Contact' : 'Contacto'}
            </Link>
            <button 
              onClick={toggleLanguage}
              className="block px-4 py-3 text-[#c78550] hover:text-[#3a3a3a] border-l border-[#e8a87c]/40 font-light uppercase tracking-widest text-xs transition-colors duration-300"
            >
              {currentLanguage === 'en' ? 'Español' : 'English'}
            </button>
            <div className="pt-6 border-t border-[#e8a87c]/20">
              <button className="w-full py-3 border border-[#e8a87c]/40 text-[#c78550] uppercase tracking-widest text-xs font-light hover:bg-[#e8a87c]/10 transition-colors duration-300">
                {currentLanguage === 'en' ? 'Book Appointment' : 'Reservar Cita'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
