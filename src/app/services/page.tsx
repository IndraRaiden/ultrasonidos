'use client';

import { useState, useEffect } from 'react';
import Footer from "../../components/Footer";
import Link from "next/link";

export default function ServicesPage() {
  const [language, setLanguage] = useState('en');
  
  // Listen for language change events from the navbar
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.language);
    };
    
    // Add event listener
    document.addEventListener('languageChange', handleLanguageChange as EventListener);
    
    // Clean up
    return () => {
      document.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);
  
  // Services data in both languages to keep bios and prices consistent with products
  const servicesEn = [
    {
      id: 'quick-peek',
      title: 'Hi Baby Quick Peek',
      image: '/ultrasounds/Ultrasoundv1.webp',
      price: 53,
      features: [
        "6+ weeks - 2D ultrasound - 3 Black and white prints - Hear your Baby's Heartbeat",
        'Add on a sneak peek in 4D for $15 for a 4x6 Color print',
      ],
    },
    {
      id: 'gender-determination',
      title: 'Gender Determination',
      image: '/mainindex/ultrasound.jpg',
      price: 69,
      features: [
        '14+ weeks - 3 Black and white prints',
        'TOP SECRET ENVELOPE IF REQUESTED',
        'Add on a sneak peek in 4D for $15 for a 4x6 Color print',
        "Add on baby's heartbeat in a stuffed animal $35",
      ],
    },
    {
      id: 'gender-plus',
      title: 'Gender Plus',
      image: '/ultrasounds/Ultrasoundv2.webp',
      price: 85,
      features: [
        '14+ weeks - 3 Black and white prints',
        'Video & All Pictures',
        '1 4x6 Black and white Picture print',
        '1 Baby Onesie • TOP SECRET ENVELOPE IF REQUESTED',
        'Add on a sneak peek in 4D for $15 for a 4x6 Color print',
      ],
    },
    {
      id: 'see-baby-color',
      title: 'See Baby in Color',
      image: '/ultrasounds/R.jpeg',
      price: 100,
      features: [
        '1 4x6 4D Color Print or 2 Prints $120',
        "3 Black and white prints - Hear baby's heartbeat - Video & All pictures",
        "Add on baby's heartbeat in a stuffed animal $35",
      ],
    },
    {
      id: 'see-baby-color-plus',
      title: 'See Baby in Color plus',
      image: '/ultrasounds/Ultrasoundv3.jpg',
      price: 150,
      features: [
        '1 4x6 color print - 1 5x7 color print',
        '3 Black and white prints - 1 Baby onesie',
        "1 Stuffed animal with baby's Heartbeat - Video & All pictures",
      ],
    },
    {
      id: 'multiple-visits',
      title: 'Hi Baby Multiple Visits! 7 Visits',
      image: '/ultrasounds/Ultrasoundv2.webp',
      price: 450,
      features: [
        '1 4x6 color print & Black/whites each visit',
        'Video & All pictures each visit',
        "1 Baby onesie - 1 Stuffed animal with baby's Heartbeat",
      ],
    },
  ];

  const servicesEs = [
    {
      id: 'quick-peek',
      title: 'Hi Baby Quick Peek',
      image: '/ultrasounds/Ultrasoundv1.webp',
      price: 53,
      features: [
        "6+ semanas - Ultrasonido 2D - 3 impresiones en blanco y negro - Escucha el latido de tu bebé",
        'Agrega un vistazo en 4D por $15 con impresión a color 4x6',
      ],
    },
    {
      id: 'gender-determination',
      title: 'Determinación de Género',
      image: '/mainindex/ultrasound.jpg',
      price: 69,
      features: [
        '14+ semanas - 3 impresiones en blanco y negro',
        'SOBRE SECRETO SI SE SOLICITA',
        'Agrega un vistazo en 4D por $15 con impresión a color 4x6',
        'Agrega el latido del bebé en un peluche $35',
      ],
    },
    {
      id: 'gender-plus',
      title: 'Género Plus',
      image: '/ultrasounds/Ultrasoundv2.webp',
      price: 85,
      features: [
        '14+ semanas - 3 impresiones en blanco y negro',
        'Video y todas las fotos',
        '1 impresión 4x6 en blanco y negro',
        '1 mameluco para bebé • SOBRE SECRETO SI SE SOLICITA',
        'Agrega un vistazo en 4D por $15 con impresión a color 4x6',
      ],
    },
    {
      id: 'see-baby-color',
      title: 'Ver al Bebé a Color',
      image: '/ultrasounds/R.jpeg',
      price: 100,
      features: [
        '1 impresión 4x6 4D a color o 2 impresiones $120',
        '3 impresiones en blanco y negro - Escucha el latido del bebé - Video y todas las fotos',
        'Agrega el latido del bebé en un peluche $35',
      ],
    },
    {
      id: 'see-baby-color-plus',
      title: 'Ver al Bebé a Color Plus',
      image: '/ultrasounds/Ultrasoundv3.jpg',
      price: 150,
      features: [
        '1 impresión a color 4x6 - 1 impresión a color 5x7',
        '3 impresiones en blanco y negro - 1 mameluco para bebé',
        '1 peluche con el latido del bebé - Video y todas las fotos',
      ],
    },
    {
      id: 'multiple-visits',
      title: '¡Hi Baby Visitas Múltiples! 7 Visitas',
      image: '/ultrasounds/Ultrasoundv2.webp',
      price: 450,
      features: [
        '1 impresión a color 4x6 y blanco/negro en cada visita',
        'Video y todas las fotos en cada visita',
        '1 mameluco para bebé - 1 peluche con el latido del bebé',
      ],
    },
  ];

  const services = language === 'en' ? servicesEn : servicesEs;
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar is now in the layout file */}
      
      {/* Hero Section */}
      <section className="py-16 bg-[#fafafa]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#6642c8]/80 mb-4 block">
              {language === 'en' ? 'Our Services' : 'Nuestros Servicios'}
            </span>
            <h1 className="text-4xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'Ultrasound Services for Pregnant Women' : 'Servicios de Ultrasonido para Embarazadas'}
            </h1>
            <p className="text-gray-600 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
              {language === 'en' 
                ? 'Discover our complete range of ultrasound services for pregnant women, designed with the highest precision and attention to detail to accompany you during this special stage.'
                : 'Descubra nuestra gama completa de servicios de ultrasonido para embarazadas, diseñados con la más alta precisión y atención al detalle para acompañarla durante esta etapa tan especial.'}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((s) => (
              <div key={s.id} className="service-card group h-full">
                <div className="aspect-[16/9] relative overflow-hidden mb-6">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8a63d2]/20 to-transparent opacity-30"></div>
                </div>
                <div className="service-info flex flex-col h-full">
                  <h3 className="text-2xl font-light tracking-wider mb-4 text-[#3a3a3a] group-hover:text-[#6642c8] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <ul className="mb-8 space-y-3">
                    {s.features.map((f, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-[#6642c8] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-600 font-light">{f}</span>
                      </li>
                    ))}
                    {/* Price as part of the bio/description list */}
                    <li key={`${s.id}-price`} className="flex items-start">
                      <svg className="w-5 h-5 text-[#6642c8] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-[#3a3a3a] font-medium">{language === 'en' ? `Price: $${s.price}` : `Precio: $${s.price}`}</span>
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <div className="inline-block px-4 py-2 rounded-xl bg-[#6642c8]/10 text-[#6642c8] font-semibold text-xl">
                      {`$${s.price}`}
                    </div>
                    <div className="mt-3">
                      <Link 
                        href="/contact" 
                        className="text-[#6642c8] font-semibold hover:text-[#5a38b3] transition-colors duration-300 underline text-lg"
                      >
                        {language === 'en' ? 'Book Now' : 'Reservar'}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'Need specialized care during your pregnancy?' : '¿Necesita atención especializada durante su embarazo?'}
            </h2>
            <p className="text-gray-600 mb-10 font-light leading-relaxed">
              {language === 'en' 
                ? 'We are here to accompany you at every stage of your pregnancy. Our team of maternal-fetal medicine specialists is ready to provide you and your baby with the personalized care you deserve.'
                : 'Estamos aquí para acompañarla en cada etapa de su embarazo. Nuestro equipo de especialistas en medicina materno-fetal está listo para brindarle la atención personalizada que usted y su bebé merecen.'}
            </p>
            <Link href="/contact" className="btn-primary-lg">
              <span>{language === 'en' ? 'Contact us today' : 'Contáctenos hoy'}</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
