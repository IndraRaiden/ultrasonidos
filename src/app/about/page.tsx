'use client';

// Navbar is now in the layout file
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Listen for language change events from the Navbar
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.language);
    };

    // Add event listener
    document.addEventListener('languageChange', handleLanguageChange as EventListener);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar is now in the layout file */}
      
      {/* Hero Section */}
      <section className="py-16 bg-[#fafafa]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#6642c8]/80 mb-4 block">
              {language === 'en' ? 'Get to know us' : 'Conózcanos'}
            </span>
            <h1 className="text-4xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'About Us' : 'Sobre Nosotros'}
            </h1>
            <p className="text-gray-600 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
              {language === 'en' 
                ? 'We are a dedicated team of professionals committed to excellence in ultrasound services, combining advanced technology with personalized care.'
                : 'Somos un equipo dedicado de profesionales comprometidos con la excelencia en servicios de ultrasonido, combinando tecnología avanzada con atención personalizada.'}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-[#f5f5f5] relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8a63d2]/10 to-transparent opacity-30"></div>
                <Image
                  src="/ultrasounds/DSC09280.png"
                  alt="About Ultrasonidos"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#f5f5f5] rounded-sm -z-10"></div>
            </div>
            <div>
              <h2 className="text-3xl font-light tracking-wide text-[#3a3a3a] mb-6">
                {language === 'en' ? 'Our Story' : 'Nuestra Historia'}
              </h2>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                {language === 'en' 
                  ? 'Founded in 2010, Ultrasonidos was born with the vision of transforming the way imaging diagnostic services are offered in our community. What began as a small office has grown to become a reference center in ultrasound technology.'
                  : 'Fundada en 2010, Ultrasonidos nació con la visión de transformar la manera en que se ofrecen los servicios de diagnóstico por imagen en nuestra comunidad. Lo que comenzó como un pequeño consultorio ha crecido hasta convertirse en un centro de referencia en tecnología de ultrasonido.'}
              </p>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                {language === 'en'
                  ? 'Over the years, we have maintained our commitment to excellence, constantly investing in the latest technology and in the continuous training of our team. Our philosophy is based on combining technical precision with a human and close treatment.'
                  : 'A lo largo de los años, hemos mantenido nuestro compromiso con la excelencia, invirtiendo constantemente en la última tecnología y en la formación continua de nuestro equipo. Nuestra filosofía se basa en combinar la precisión técnica con un trato humano y cercano.'}
              </p>
              <div className="flex items-center space-x-6 mt-8">
                <div>
                  <div className="text-3xl font-light text-[#6642c8]">15+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{language === 'en' ? 'Years of experience' : 'Años de experiencia'}</div>
                </div>
                <div className="h-12 w-px bg-[#8a63d2]/20"></div>
                <div>
                  <div className="text-3xl font-light text-[#6642c8]">5,000+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{language === 'en' ? 'Patients served' : 'Pacientes atendidos'}</div>
                </div>
                <div className="h-12 w-px bg-[#8a63d2]/20"></div>
                <div>
                  <div className="text-3xl font-light text-[#6642c8]">100%</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{language === 'en' ? 'Satisfaction' : 'Satisfacción'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#6642c8]/80 mb-4 block">
              {language === 'en' ? 'What defines us' : 'Lo que nos define'}
            </span>
            <h2 className="text-3xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'Our Values' : 'Nuestros Valores'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              {language === 'en' 
                ? 'These principles guide every aspect of our work and define who we are as an organization.'
                : 'Estos principios guían cada aspecto de nuestro trabajo y definen quiénes somos como organización.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#6642c8]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a]">
                {language === 'en' ? 'Excellence' : 'Excelencia'}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {language === 'en'
                  ? 'We strive to achieve the highest standards in every service we offer, from diagnostic accuracy to patient care.'
                  : 'Nos esforzamos por alcanzar los más altos estándares en cada servicio que ofrecemos, desde la precisión diagnóstica hasta la atención al paciente.'}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#6642c8]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a]">
                {language === 'en' ? 'Empathy' : 'Empatía'}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {language === 'en'
                  ? 'We understand that behind every procedure there is a person with unique concerns and needs. Our human approach makes the difference.'
                  : 'Entendemos que detrás de cada procedimiento hay una persona con preocupaciones y necesidades únicas. Nuestro enfoque humano hace la diferencia.'}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#6642c8]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a]">
                {language === 'en' ? 'Innovation' : 'Innovación'}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {language === 'en'
                  ? 'We constantly seek new ways to improve our services, adopting the latest technologies and methodologies in the field of ultrasound.'
                  : 'Constantemente buscamos nuevas formas de mejorar nuestros servicios, adoptando las últimas tecnologías y metodologías en el campo del ultrasonido.'}
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'Ready to get to know us better?' : '¿Listo para conocernos mejor?'}
            </h2>
            <p className="text-gray-600 mb-10 font-light leading-relaxed">
              {language === 'en'
                ? 'We are here to answer all your questions and help you learn more about our services and how we can help you.'
                : 'Estamos aquí para responder a todas sus preguntas y ayudarle a conocer más sobre nuestros servicios y cómo podemos ayudarle.'}
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
