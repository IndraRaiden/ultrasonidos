'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#ffffff]/90 backdrop-blur-xl border-b border-[#e8a87c]/20 fixed top-0 left-0 right-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f6c9a0] to-[#c78550] opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0.5 rounded-full bg-[#ffffff] flex items-center justify-center">
                  <span className="gold-text font-light text-2xl tracking-widest">U</span>
                </div>
              </div>
              <div className="ml-4">
                <span className="block text-xs uppercase tracking-[0.2em] text-[#c78550]/80">Luxury Care</span>
                <span className="block text-xl uppercase tracking-[0.15em] font-light gradient-text">Ultrasonidos</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <div className="flex space-x-1 mr-8">
              <Link href="/" className={`px-4 py-2 ${pathname === '/' ? 'text-[#3a3a3a]' : 'text-gray-600'} hover:text-[#3a3a3a] uppercase tracking-widest text-xs font-light transition-colors duration-500 relative group`}>
                Home
                <span className={`absolute bottom-0 left-1/2 ${pathname === '/' ? 'w-1/2 left-1/4' : 'w-0'} h-px bg-[#e8a87c] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300`}></span>
              </Link>
              <Link href="/services" className={`px-4 py-2 ${pathname === '/services' ? 'text-[#3a3a3a]' : 'text-gray-600'} hover:text-[#3a3a3a] uppercase tracking-widest text-xs font-light transition-colors duration-500 relative group`}>
                Services
                <span className={`absolute bottom-0 left-1/2 ${pathname === '/services' ? 'w-1/2 left-1/4' : 'w-0'} h-px bg-[#e8a87c] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300`}></span>
              </Link>
              <Link href="/about" className={`px-4 py-2 ${pathname === '/about' ? 'text-[#3a3a3a]' : 'text-gray-600'} hover:text-[#3a3a3a] uppercase tracking-widest text-xs font-light transition-colors duration-500 relative group`}>
                About Us
                <span className={`absolute bottom-0 left-1/2 ${pathname === '/about' ? 'w-1/2 left-1/4' : 'w-0'} h-px bg-[#e8a87c] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300`}></span>
              </Link>
              <Link href="/contact" className={`px-4 py-2 ${pathname === '/contact' ? 'text-[#3a3a3a]' : 'text-gray-600'} hover:text-[#3a3a3a] uppercase tracking-widest text-xs font-light transition-colors duration-500 relative group`}>
                Contact
                <span className={`absolute bottom-0 left-1/2 ${pathname === '/contact' ? 'w-1/2 left-1/4' : 'w-0'} h-px bg-[#e8a87c] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300`}></span>
              </Link>
            </div>
            <button className="btn-primary border border-[#e8a87c]/40 bg-transparent hover:bg-[#e8a87c]/10 text-[#c78550] hover:text-[#3a3a3a] group relative overflow-hidden">
              <span className="relative z-10 uppercase tracking-widest text-xs font-light">Book Appointment</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#e8a87c]/0 via-[#e8a87c]/30 to-[#e8a87c]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
            </button>
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
              Home
            </Link>
            <Link href="/services" className={`block px-4 py-3 ${pathname === '/services' ? 'text-[#3a3a3a] border-[#e8a87c]/40' : 'text-gray-500 hover:text-[#3a3a3a] border-transparent hover:border-[#e8a87c]/40'} font-light uppercase tracking-widest text-xs border-l transition-colors duration-300`}>
              Services
            </Link>
            <Link href="/about" className={`block px-4 py-3 ${pathname === '/about' ? 'text-[#3a3a3a] border-[#e8a87c]/40' : 'text-gray-500 hover:text-[#3a3a3a] border-transparent hover:border-[#e8a87c]/40'} font-light uppercase tracking-widest text-xs border-l transition-colors duration-300`}>
              About Us
            </Link>
            <Link href="/contact" className={`block px-4 py-3 ${pathname === '/contact' ? 'text-[#3a3a3a] border-[#e8a87c]/40' : 'text-gray-500 hover:text-[#3a3a3a] border-transparent hover:border-[#e8a87c]/40'} font-light uppercase tracking-widest text-xs border-l transition-colors duration-300`}>
              Contact
            </Link>
            <div className="pt-6 border-t border-[#e8a87c]/20">
              <button className="w-full py-3 border border-[#e8a87c]/40 text-[#c78550] uppercase tracking-widest text-xs font-light hover:bg-[#e8a87c]/10 transition-colors duration-300">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
