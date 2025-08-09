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
            <span className="text-xs uppercase tracking-[0.2em] text-[#c78550]/80 mb-4 block">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#e8a87c]/10 to-transparent opacity-30"></div>
                {/* Replace with your actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-[#ffffff] border border-[#e8a87c]/30 flex items-center justify-center">
                    <span className="gold-text font-light text-5xl tracking-widest">U</span>
                  </div>
                </div>
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
                  <div className="text-3xl font-light text-[#c78550]">15+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{language === 'en' ? 'Years of experience' : 'Años de experiencia'}</div>
                </div>
                <div className="h-12 w-px bg-[#e8a87c]/20"></div>
                <div>
                  <div className="text-3xl font-light text-[#c78550]">5,000+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{language === 'en' ? 'Patients served' : 'Pacientes atendidos'}</div>
                </div>
                <div className="h-12 w-px bg-[#e8a87c]/20"></div>
                <div>
                  <div className="text-3xl font-light text-[#c78550]">100%</div>
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
            <span className="text-xs uppercase tracking-[0.2em] text-[#c78550]/80 mb-4 block">
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
              <div className="w-16 h-16 rounded-full bg-[#e8a87c]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#c78550]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
              <div className="w-16 h-16 rounded-full bg-[#e8a87c]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#c78550]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
              <div className="w-16 h-16 rounded-full bg-[#e8a87c]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#c78550]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c78550]/80 mb-4 block">
              {language === 'en' ? 'Our Experts' : 'Nuestros Expertos'}
            </span>
            <h2 className="text-3xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'Professional Team' : 'Equipo Profesional'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              {language === 'en'
                ? 'We have a team of highly qualified specialists, dedicated to providing the best service and care.'
                : 'Contamos con un equipo de especialistas altamente calificados, dedicados a brindar el mejor servicio y atención.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div className="aspect-[3/4] bg-[#f5f5f5] relative overflow-hidden mb-6 rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-4">
                    <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#c78550] hover:bg-[#e8a87c] hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#c78550] hover:bg-[#e8a87c] hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-1.005-.02-2.3-1.39-2.3-1.39 0-1.601 1.094-1.601 2.226v4.252H8.014v-8.59h2.557v1.181h.037c.355-.675 1.227-1.387 2.534-1.387 2.712 0 3.196 1.78 3.196 4.11v4.686z" clipRule="evenodd"></path>
                        <path fillRule="evenodd" d="M5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#ffffff] border border-[#e8a87c]/30 flex items-center justify-center">
                    <span className="text-[#c78550] font-light text-2xl">DR</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light tracking-wider mb-1 text-[#3a3a3a]">Dr. Roberto Méndez</h3>
                <p className="text-[#c78550] text-sm uppercase tracking-wider mb-4">
                  {language === 'en' ? 'Medical Director' : 'Director Médico'}
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  {language === 'en'
                    ? 'Specialist with over 15 years of experience in ultrasound diagnostics and continuous medical training.'
                    : 'Especialista con más de 15 años de experiencia en diagnóstico por ultrasonido y formación médica continua.'}
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="group">
              <div className="aspect-[3/4] bg-[#f5f5f5] relative overflow-hidden mb-6 rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-4">
                    <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#c78550] hover:bg-[#e8a87c] hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#c78550] hover:bg-[#e8a87c] hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-1.005-.02-2.3-1.39-2.3-1.39 0-1.601 1.094-1.601 2.226v4.252H8.014v-8.59h2.557v1.181h.037c.355-.675 1.227-1.387 2.534-1.387 2.712 0 3.196 1.78 3.196 4.11v4.686z" clipRule="evenodd"></path>
                        <path fillRule="evenodd" d="M5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#ffffff] border border-[#e8a87c]/30 flex items-center justify-center">
                    <span className="text-[#c78550] font-light text-2xl">LG</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light tracking-wider mb-1 text-[#3a3a3a]">Dra. Laura García</h3>
                <p className="text-[#c78550] text-sm uppercase tracking-wider mb-4">
                  {language === 'en' ? 'Senior Specialist' : 'Especialista Senior'}
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  {language === 'en'
                    ? 'Expert in obstetric and gynecological ultrasound with international certifications and extensive clinical experience.'
                    : 'Experta en ultrasonido obstétrico y ginecológico con certificaciones internacionales y amplia trayectoria clínica.'}
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="group">
              <div className="aspect-[3/4] bg-[#f5f5f5] relative overflow-hidden mb-6 rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-4">
                    <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#c78550] hover:bg-[#e8a87c] hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#c78550] hover:bg-[#e8a87c] hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-1.005-.02-2.3-1.39-2.3-1.39 0-1.601 1.094-1.601 2.226v4.252H8.014v-8.59h2.557v1.181h.037c.355-.675 1.227-1.387 2.534-1.387 2.712 0 3.196 1.78 3.196 4.11v4.686z" clipRule="evenodd"></path>
                        <path fillRule="evenodd" d="M5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#ffffff] border border-[#e8a87c]/30 flex items-center justify-center">
                    <span className="text-[#c78550] font-light text-2xl">CS</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light tracking-wider mb-1 text-[#3a3a3a]">Carlos Sánchez</h3>
                <p className="text-[#c78550] text-sm uppercase tracking-wider mb-4">
                  {language === 'en' ? 'Technical Specialist' : 'Técnico Especialista'}
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  {language === 'en'
                    ? 'Specialist in ultrasound equipment with advanced technical training and experience in the latest technologies.'
                    : 'Especialista en equipos de ultrasonido con formación técnica avanzada y experiencia en las últimas tecnologías.'}
                </p>
              </div>
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
