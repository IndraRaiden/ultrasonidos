'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const AllWindow = () => {
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
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col-reverse space-y-reverse space-y-3">
        {/* WhatsApp Button */}
        <Link 
          href="https://wa.me/+16195192997" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-[#8a63d2]/40 bg-white hover:bg-[#25D366]/10 text-[#25D366] hover:text-[#25D366] shadow-md flex items-center justify-center group relative overflow-hidden"
          aria-label="Contact via WhatsApp"
        >
          <span className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 448 512" fill="currentColor">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-7-.2-10.7-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#25D366]/0 via-[#25D366]/30 to-[#25D366]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
          
          {/* Tooltip */}
          <div className="absolute right-14 bg-white px-3 py-1 rounded shadow-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {currentLanguage === 'en' ? 'WhatsApp' : 'WhatsApp'}
          </div>
        </Link>

        {/* SMS Button */}
        <Link 
          href="sms:+16195192997" 
          className="w-12 h-12 rounded-full border border-[#8a63d2]/40 bg-white hover:bg-[#6642c8]/10 text-[#6642c8] hover:text-[#3a3a3a] shadow-md flex items-center justify-center group relative overflow-hidden"
          aria-label="Contact via Text Message"
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
          
          {/* Tooltip */}
          <div className="absolute right-14 bg-white px-3 py-1 rounded shadow-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {currentLanguage === 'en' ? 'Text Message' : 'Mensaje de Texto'}
          </div>
        </Link>
    </div>
  );
};

export default AllWindow;
