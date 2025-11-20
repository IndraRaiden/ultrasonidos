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
                  src="/newservice/FOTO-MAIN.png" 
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
                ? `At Hi Baby Ultrasound, we believe every moment of your pregnancy journey is
                  special. Our ultrasound studio offers a warm, family-friendly space where you can
                  bond with your baby before they arrive. We would love to give you an
                  unforgettable experience that lets you see your little one's face,movements,and
                  personality in incredible detail. Whether it’s your first peek or a special moment to
                  share with loved ones,we’re here to make it magical,memorable, and full of joy.
                  We have experienced sonographers that love what they do and will give you an
                  ultimate experience!
                  Book with Hi Baby and you wont regret it.`
                : 'TODO: Add Spanish translation'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
