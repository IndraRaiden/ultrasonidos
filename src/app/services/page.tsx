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
      price: 54,
      features: [
        '6+ weeks',
        '2D ultrasound',
        'Peace of Mind!',
        '3 Black and white prints',
        'I just want to see my BABY!',
        "Hear your Baby's Heartbeat",
        'Full Bladder for (6-10 weeks)',
        'Add on a sneak peek in 4D for $15 for a 4x6 Color print',
        'Add on Video and all Black & White pictures $15 App Momitalk',
        'Add on Video with all images 2D/4D/5HD Quick session $25',
        "Add on Baby's Heartbeat in a stuffed Animal $38",
      ],
    },
    {
      id: 'gender-determination',
      title: 'Gender Determination',
      image: '/mainindex/ultrasound.jpg',
      price: 70,
      features: [
        '14+ weeks',
        '3 Black and white prints',
        'TOP SECRET ENVELOPE If REQUESTED',
        'Add on a sneak peek in 4D for $18 for a 4x6 Color print',
        "Add on Baby's Heartbeat in a stuffed Animal $38",
        'Add on Video and all Black & White pictures $12 App Momitalk',
        'Add on a sneak peek in 4D for $18 (And Receive all Images 2D/4D/5HD)',
      ],
    },
    {
      id: 'gender-plus',
      title: 'Gender Plus',
      image: '/ultrasounds/Ultrasoundv2.webp',
      price: 85,
      features: [
        '14+ weeks',
        '3 Black and white prints',
        '1 4x6 Black and white Picture print',
        '1 Baby Onesie',
        'TOP SECRET ENVELOPE IF REQUESTED',
        'Add on a sneak peek in 4D for $18 (And Receive all Images 2D/4D/5HD)',
        "Add on Baby's Heartbeat in a stuffed Animal $38",
      ],
    },
    {
      id: 'see-baby-color',
      title: 'See Baby in Color',
      image: '/ultrasounds/R.jpeg',
      price: 110,
      features: [
        '1 4x6 4D Color Print or 2 Prints $125',
        '3 Black and white prints',
        "Hear baby's heartbeat",
        'Video & All pictures App Momitalk',
        "Add on Baby's Heartbeat in a stuffed Animal $38",
      ],
    },
    {
      id: 'see-baby-color-plus',
      title: 'See Baby in Color plus',
      image: '/ultrasounds/Ultrasoundv3.jpg',
      price: 155,
      features: [
        '1 5x7 color print',
        '3 Black and white prints',
        '1 Baby onesie',
        "1 Stuffed animal with Baby's Heartbeat",
        'Video & All pictures App Momitalk',
      ],
    },
    {
      id: 'multiple-visits',
      title: 'Hi Baby Multiple Visits! 7 Visits',
      image: '/imagesrandom/4.jpg',
      price: 460,
      features: [
        '1 4x6 color print & Black/whites each visit',
        'Video & All pictures each visit',
        '1 Baby onesie',
        "1 Stuffed animal with baby's Heartbeat",
        '(No Refunds for any packages)',
      ],
    },
    {
      id: 'gender-check',
      title: 'Gender Check',
      image: '/ultrasounds/DSC09280.png',
      price: 50,
      features: [
        'Must be 14 weeks plus',
      ],
    },
    {
      id: 'color-session',
      title: 'Color Session 4D/5HD',
      image: '/imagesrandom/6.jpg',
      price: 85,
      features: [
        'Video & All pictures App Momitalk',
        'Every Monday & Friday watch your little one come to life in vivid color',
        'National City Location Only',
      ],
    },
    {
      id: 'gender-special',
      title: 'Gender Special',
      image: '/imagesrandom/3.jpg',
      price: 55,
      features: [
        'Must be 14 weeks plus',
        '2 Black and white prints',
        'Every 1st & 30th of every month',
        'National City Location Only',
      ],
    },
    {
      id: 'dna-standard',
      title: 'DNA Early Gender Test 6 weeks+',
      image: '/imagesrandom/1.jpg',
      price: 139,
      features: [
        'Standard (results in 2 days)',
      ],
    },
    {
      id: 'dna-fast',
      title: 'DNA Early Gender Test 6 weeks+',
      image: '/imagesrandom/2.jpg',
      price: 155,
      features: [
        'Fast Track (results next day)',
      ],
    },
    {
      id: 'stuffed-animal',
      title: 'Stuffed Animal with Baby\'s Heartbeat',
      image: '/imagesrandom/5.jpg',
      price: 50,
      features: [
        'No ultrasound scan',
        '1 Stuffed Animal',
      ],
    },
    {
      id: 'gender-reveal',
      title: 'GENDER REVEAL',
      image: '/imagesrandom/7.jpg',
      price: 45,
      features: [
        'Pop your confetti cannons inside our ultrasound room',
        '2 Confetti Cannons',
      ],
    },
    {
      id: 'confetti-cannons',
      title: 'Confetti Cannons',
      image: '/imagesrandom/8.jpg',
      price: 12,
      features: [],
    },
    {
      id: 'powder-cannons',
      title: 'Powder Cannons',
      image: '/imagesrandom/9.jpg',
      price: 13,
      features: [],
    },
  ];

  const servicesEs = [
    {
      id: 'quick-peek',
      title: 'Hi Baby Quick Peek',
      image: '/ultrasounds/Ultrasoundv1.webp',
      price: 54,
      features: [
        '6+ semanas',
        'Ultrasonido 2D',
        '¡Tranquilidad!',
        '3 impresiones en blanco y negro',
        '¡Solo quiero ver a mi BEBÉ!',
        'Escucha el latido de tu bebé',
        'Vejiga llena para (6-10 semanas)',
        'Agrega un vistazo en 4D por $15 con impresión a color 4x6',
        'Agrega video y todas las imágenes en blanco y negro $15 App Momitalk',
        'Agrega video con todas las imágenes 2D/4D/5HD sesión rápida $25',
        'Agrega el latido del bebé en un peluche $38',
      ],
    },
    {
      id: 'gender-determination',
      title: 'Determinación de Género',
      image: '/mainindex/ultrasound.jpg',
      price: 70,
      features: [
        '14+ semanas',
        '3 impresiones en blanco y negro',
        'SOBRE SECRETO SI SE SOLICITA',
        'Agrega un vistazo en 4D por $18 con impresión a color 4x6',
        'Agrega el latido del bebé en un peluche $38',
        'Agrega video y todas las imágenes en blanco y negro $12 App Momitalk',
        'Agrega un vistazo en 4D por $18 (y recibe todas las imágenes 2D/4D/5HD)',
      ],
    },
    {
      id: 'gender-plus',
      title: 'Género Plus',
      image: '/ultrasounds/Ultrasoundv2.webp',
      price: 85,
      features: [
        '14+ semanas',
        '3 impresiones en blanco y negro',
        '1 impresión 4x6 en blanco y negro',
        '1 mameluco para bebé',
        'SOBRE SECRETO SI SE SOLICITA',
        'Agrega un vistazo en 4D por $18 (y recibe todas las imágenes 2D/4D/5HD)',
        'Agrega el latido del bebé en un peluche $38',
      ],
    },
    {
      id: 'see-baby-color',
      title: 'Ver al Bebé a Color',
      image: '/ultrasounds/R.jpeg',
      price: 110,
      features: [
        '1 impresión 4x6 4D a color o 2 impresiones $125',
        '3 impresiones en blanco y negro',
        'Escucha el latido del bebé',
        'Video y todas las fotos App Momitalk',
        'Agrega el latido del bebé en un peluche $38',
      ],
    },
    {
      id: 'see-baby-color-plus',
      title: 'Ver al Bebé a Color Plus',
      image: '/ultrasounds/Ultrasoundv3.jpg',
      price: 155,
      features: [
        '1 impresión a color 5x7',
        '3 impresiones en blanco y negro',
        '1 mameluco para bebé',
        '1 peluche con el latido del bebé',
        'Video y todas las fotos App Momitalk',
      ],
    },
    {
      id: 'multiple-visits',
      title: '¡Hi Baby Visitas Múltiples! 7 Visitas',
      image: '/imagesrandom/4.jpg',
      price: 460,
      features: [
        '1 impresión a color 4x6 y blanco/negro en cada visita',
        'Video y todas las fotos en cada visita',
        '1 mameluco para bebé',
        '1 peluche con el latido del bebé',
        '(Sin reembolsos para ningún paquete)',
      ],
    },
    {
      id: 'gender-check',
      title: 'Verificación de Género',
      image: '/ultrasounds/DSC09280.png',
      price: 50,
      features: [
        'Debe tener 14 semanas o más',
      ],
    },
    {
      id: 'color-session',
      title: 'Sesión a Color 4D/5HD',
      image: '/imagesrandom/6.jpg',
      price: 85,
      features: [
        'Video y todas las fotos App Momitalk',
        'Cada lunes y viernes ve a tu pequeño cobrar vida en color vívido',
        'Solo ubicación de National City',
      ],
    },
    {
      id: 'gender-special',
      title: 'Especial de Género',
      image: '/imagesrandom/3.jpg',
      price: 55,
      features: [
        'Debe tener 14 semanas o más',
        '2 impresiones en blanco y negro',
        'Cada 1 y 30 de cada mes',
        'Solo ubicación de National City',
      ],
    },
    {
      id: 'dna-standard',
      title: 'Prueba de ADN para género temprano 6 semanas+',
      image: '/imagesrandom/1.jpg',
      price: 139,
      features: [
        'Estándar (resultados en 2 días)',
      ],
    },
    {
      id: 'dna-fast',
      title: 'Prueba de ADN para género temprano 6 semanas+',
      image: '/imagesrandom/2.jpg',
      price: 155,
      features: [
        'Vía rápida (resultados al día siguiente)',
      ],
    },
    {
      id: 'stuffed-animal',
      title: 'Peluche con el latido del bebé',
      image: '/imagesrandom/5.jpg',
      price: 50,
      features: [
        'Sin escaneo de ultrasonido',
        '1 Peluche',
      ],
    },
    {
      id: 'gender-reveal',
      title: 'REVELACIÓN DE GÉNERO',
      image: '/imagesrandom/7.jpg',
      price: 45,
      features: [
        'Dispara tus cañones de confeti dentro de nuestra sala de ultrasonido',
        '2 Cañones de confeti',
      ],
    },
    {
      id: 'confetti-cannons',
      title: 'Cañones de Confeti',
      image: '/imagesrandom/8.jpg',
      price: 12,
      features: [],
    },
    {
      id: 'powder-cannons',
      title: 'Cañones de Polvo',
      image: '/imagesrandom/9.jpg',
      price: 13,
      features: [],
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

      {/* YouTube Short Section */}
      <section className="py-16 bg-[#fafafa]">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'Watch our experiences' : 'Mira nuestras experiencias'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* First Video */}
              <div className="aspect-[9/16] relative">
                <iframe 
                  className="w-full h-full absolute inset-0"
                  src="https://www.youtube.com/embed/5H8KnP08iDY?autoplay=1&mute=1&loop=1&playlist=5H8KnP08iDY"
                  title="YouTube Short - Ultrasound Experience 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Second Video */}
              <div className="aspect-[9/16] relative">
                <iframe 
                  className="w-full h-full absolute inset-0"
                  src="https://www.youtube.com/embed/iiS_xVRP52Y?autoplay=1&mute=1&loop=1&playlist=iiS_xVRP52Y"
                  title="YouTube Short - Ultrasound Experience 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'Hours' : 'Horario'}
            </h2>
            <p className="text-gray-600 mb-6 font-light leading-relaxed">
              {language === 'en' 
                ? 'Monday-Friday 10am-8pm Flexible closing by appointments.'
                : 'Lunes-Viernes 10am-8pm Cierre flexible según citas.'}
            </p>
            <p className="text-gray-600 mb-10 font-light leading-relaxed">
              {language === 'en' 
                ? 'Saturdays-Sunday 10am Flexible closing based on scheduled appointments. Call to book to reserve your spot. Book early spots fill fast!'
                : 'Sábados-Domingos 10am Cierre flexible según citas programadas. Llame para reservar su lugar. ¡Reserve temprano, los espacios se llenan rápido!'}
            </p>
            <p className="text-[#6642c8] font-semibold mb-2">
              {language === 'en' ? 'Hi Baby ultrasound Phone number' : 'Número de teléfono de Hi Baby ultrasound'}: (619)292-3600
            </p>
            <p className="text-[#6642c8] font-semibold mb-2">
              {language === 'en' ? 'Book an appointment through text' : 'Reserve una cita por mensaje de texto'}: (619)519-2997
            </p>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
