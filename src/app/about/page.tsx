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

      {/* Our Facility Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#6642c8]/80 mb-4 block">
              {language === 'en' ? 'State-of-the-Art Clinic' : 'Clínica de Vanguardia'}
            </span>
            <h2 className="text-3xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'Explore Our Facilities' : 'Conozca Nuestras Instalaciones'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              {language === 'en' 
                ? 'We have invested in creating a welcoming, comfortable environment with cutting-edge technology to ensure the best experience for our patients.'
                : 'Hemos invertido en crear un ambiente acogedor y cómodo con tecnología de vanguardia para garantizar la mejor experiencia para nuestros pacientes.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
            <div className="relative group border-4 border-[#f5f5f5] rounded-md shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#8a63d2]/30">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/DSC09271.jpg"
                  alt={language === 'en' ? "Advanced diagnostic equipment" : "Equipo diagnóstico avanzado"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-6 px-6">
                <h3 className="text-xl font-light text-white">
                  {language === 'en' ? 'Advanced Diagnostic Equipment' : 'Equipo Diagnóstico Avanzado'}
                </h3>
                <p className="text-white/80 text-sm mt-2 font-light">
                  {language === 'en' ? 'Featuring the latest ultrasound technology for precise results' : 'Con la última tecnología en ultrasonido para resultados precisos'}
                </p>
              </div>
            </div>
            
            <div className="relative group border-4 border-[#f5f5f5] rounded-md shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#8a63d2]/30">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/DSC09265.jpg"
                  alt={language === 'en' ? "Comfortable patient care spaces" : "Espacios cómodos de atención al paciente"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-6 px-6">
                <h3 className="text-xl font-light text-white">
                  {language === 'en' ? 'Comfortable Patient Care Spaces' : 'Espacios Cómodos de Atención'}
                </h3>
                <p className="text-white/80 text-sm mt-2 font-light">
                  {language === 'en' ? 'Designed with patient comfort and privacy in mind' : 'Diseñados pensando en la comodidad y privacidad del paciente'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#f5f5f5] via-[#f3f1f9] to-[#eae6f4] relative overflow-hidden">
        {/* Enhanced decorative elements with subtle animations */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#8a63d2]/5 rounded-full -translate-y-1/2 translate-x-1/3 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8a63d2]/5 rounded-full translate-y-1/3 -translate-x-1/4 animate-pulse-slower"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-[#8a63d2]/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-2/3 left-1/3 w-12 h-12 bg-[#8a63d2]/5 rounded-full animate-pulse-slower"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%236642c8\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="container-custom relative z-10">
          <div className="relative bg-white shadow-2xl rounded-lg overflow-hidden backdrop-blur-sm border border-white/30">
            {/* Accent color bars */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6642c8] to-[#8a63d2]"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-[100px] bg-gradient-to-tl from-[#8a63d2]/10 to-transparent -z-1"></div>
            
            <div className="p-12 md:p-16 text-center">
              <span className="inline-block px-5 py-1.5 rounded-full bg-[#8a63d2]/10 text-[#6642c8] text-sm font-light mb-8 shadow-sm animate-fade-in">
                {language === 'en' ? '✨ Experience precision ultrasound care' : '✨ Experimente atención precisa de ultrasonido'}
              </span>
              
              <h2 className="text-3xl md:text-5xl font-light tracking-wide text-[#3a3a3a] mb-6 leading-tight">
                {language === 'en' ? 'Your health deserves the best care' : 'Su salud merece la mejor atención'}
              </h2>
              
              <p className="text-gray-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto text-lg">
                {language === 'en'
                  ? 'Our team of board-certified specialists uses the most advanced technology to provide accurate diagnostics in a comfortable, patient-centered environment.'
                  : 'Nuestro equipo de especialistas certificados utiliza la tecnología más avanzada para proporcionar diagnósticos precisos en un ambiente cómodo y centrado en el paciente.'}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <Link 
                  href="/contact" 
                  className="relative group overflow-hidden rounded-full bg-gradient-to-r from-[#6642c8] to-[#8a63d2] px-10 py-4 text-white font-light tracking-wide min-w-[220px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {language === 'en' ? 'Schedule a consultation' : 'Programar una consulta'}
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <div className="absolute bottom-0 left-0 h-full w-full bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
                
                <Link 
                  href="/services" 
                  className="group flex items-center justify-center px-10 py-4 border-2 border-[#6642c8] text-[#6642c8] hover:bg-[#6642c8]/5 transition-all duration-300 rounded-full min-w-[220px] font-light tracking-wide relative overflow-hidden"
                >
                  <span className="relative z-10">{language === 'en' ? 'Explore our services' : 'Explorar nuestros servicios'}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6642c8]/5 to-[#8a63d2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
              
              <div className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 rounded-lg hover:bg-[#8a63d2]/5 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-[#6642c8]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-[#3a3a3a] mb-1">
                    {language === 'en' ? 'Same-Day Appointments' : 'Citas el Mismo Día'}
                  </h3>
                  <p className="text-sm text-gray-500 font-light">
                    {language === 'en' ? 'Quick scheduling for urgent needs' : 'Programación rápida para necesidades urgentes'}
                  </p>
                </div>
                
                <div className="p-4 rounded-lg hover:bg-[#8a63d2]/5 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-[#6642c8]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-[#3a3a3a] mb-1">
                    {language === 'en' ? 'Board Certified' : 'Certificación Profesional'}
                  </h3>
                  <p className="text-sm text-gray-500 font-light">
                    {language === 'en' ? 'Highly trained specialists' : 'Especialistas altamente capacitados'}
                  </p>
                </div>
                
                <div className="p-4 rounded-lg hover:bg-[#8a63d2]/5 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-[#6642c8]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-[#3a3a3a] mb-1">
                    {language === 'en' ? 'Patient Focused' : 'Enfoque en el Paciente'}
                  </h3>
                  <p className="text-sm text-gray-500 font-light">
                    {language === 'en' ? 'Compassionate, personalized care' : 'Atención compasiva y personalizada'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add CSS animation keyframes */}
        <style jsx global>{`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
          @keyframes pulse-slower {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.03); }
          }
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s infinite ease-in-out;
          }
          .animate-pulse-slower {
            animation: pulse-slower 8s infinite ease-in-out;
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
        `}</style>
      </section>

      <Footer />
    </div>
  );
}
