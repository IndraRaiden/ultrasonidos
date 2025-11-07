'use client';

// Navbar is now in the layout file
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function FAQSPage() {
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
              {language === 'en' ? 'Common Questions' : 'Preguntas Comunes'}
            </span>
            <h1 className="text-4xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'FAQs' : 'Preguntas Frecuentes'}
            </h1>
            <p className="text-gray-600 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
              {language === 'en' 
                ? 'We are committed to delivering the highest quality ultrasound services.'
                : 'Nos comprometemos a ofrecer servicios de ultrasonido de la más alta calidad.'}
            </p>
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
                  ? 'We strive to achieve the highest standards in every service we offer.'
                  : 'Nos esforzamos por alcanzar los más altos estándares en cada servicio que ofrecemos.'}
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
                  ? 'We understand that for many moms-to-be, the journey to motherhood hasn’t always been easy. Some have faced heartbreak, loss, and uncertainty in past pregnancies and that can make it hard to fully embrace the joy of a new beginning.\nAt Hi Baby Ultrasound, we’re here to walk beside you with care, comfort, and compassion. Our goal is to offer you peace of mind,to help ease some of the worry and replace it with hope and connection.'
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


      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#6642c8]/80 mb-4 block">
              {language === 'en' ? 'Frequently Asked Questions' : 'Preguntas Frecuentes'}
            </span>
            <h2 className="text-3xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'How Can We Help You?' : '¿Cómo Podemos Ayudarle?'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              {language === 'en'
                ? 'Find answers to the most common questions about our services and processes.'
                : 'Encuentre respuestas a las preguntas más comunes sobre nuestros servicios y procesos.'}
  
          </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a] flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mr-3 flex-shrink-0 text-[#6642c8]">1</span>
                {language === 'en' ? "Can you tell the baby’s gender?" : '¿Pueden determinar el sexo del bebé?'}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed pl-11">
                {language === 'en'
                  ? "Yes, the baby’s gender can often be determined, though it depends on factors like the baby’s position, especially after about 14 weeks of pregnancy."
                  : 'Sí, a menudo se puede determinar el sexo del bebé, aunque depende de factores como la posición del bebé, especialmente después de aproximadamente 14 semanas de embarazo.'}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a] flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mr-3 flex-shrink-0 text-[#6642c8]">2</span>
                {language === 'en' ? 'Should I drink water?' : '¿Debo beber agua?'}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed pl-11">
                {language === 'en'
                  ? 'For external (transabdominal) ultrasounds, a full or medium-full bladder can help optimize image quality.'
                  : 'Para ultrasonidos externos (transabdominales), una vejiga llena o medianamente llena puede ayudar a optimizar la calidad de la imagen.'}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a] flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mr-3 flex-shrink-0 text-[#6642c8]">3</span>
                {language === 'en' ? 'What is the difference between 2D and 3D and 4D?' : '¿Cuál es la diferencia entre 2D, 3D y 4D?'}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed pl-11">
                {language === 'en'
                  ? '2D provides a basic, flat image of the fetus, 3D provides a three-dimensional image, while 4D adds real-time movement, allowing parents to see their baby’s actions.'
                  : '2D ofrece una imagen básica y plana del feto; 3D proporciona una imagen tridimensional, mientras que 4D añade movimiento en tiempo real, permitiendo a los padres ver las acciones de su bebé.'}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a] flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mr-3 flex-shrink-0 text-[#6642c8]">4</span>
                {language === 'en' ? 'Are ultrasounds safe for the baby?' : '¿Los ultrasonidos son seguros para el bebé?'}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed pl-11">
                {language === 'en'
                  ? 'Yes, medical ultrasounds have been used safely for decades. They use high-frequency sound waves, not radiation, to create images.'
                  : 'Sí, los ultrasonidos médicos se han utilizado de forma segura durante décadas. Utilizan ondas sonoras de alta frecuencia, no radiación, para crear imágenes.'}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a] flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mr-3 flex-shrink-0 text-[#6642c8]">5</span>
                {language === 'en' ? 'Does an elective ultrasound replace a medical one?' : '¿Un ultrasonido electivo reemplaza un ultrasonido médico?'}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed pl-11">
                {language === 'en'
                  ? 'No. An elective ultrasound for keepsakes is not a substitute for the diagnostic scans performed by a doctor. It is still necessary to see a healthcare provider for medical prenatal care.'
                  : 'No. Un ultrasonido electivo con fines de recuerdo no sustituye a los estudios diagnósticos realizados por un médico. Sigue siendo necesario acudir a un profesional de la salud para la atención prenatal médica.'}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a] flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mr-3 flex-shrink-0 text-[#6642c8]">6</span>
                {language === 'en' ? 'Will insurance cover an elective ultrasound?' : '¿El seguro cubrirá un ultrasonido electivo?'}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed pl-11">
                {language === 'en'
                  ? 'Typically, no. Insurance generally does not cover elective ultrasounds because they are not medically indicated.'
                  : 'Por lo general, no. Normalmente los seguros no cubren ultrasonidos electivos porque no están médicamente indicados.'}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a] flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mr-3 flex-shrink-0 text-[#6642c8]">7</span>
                {language === 'en' ? 'What if my baby is not cooperating during the scan?' : '¿Qué pasa si mi bebé no coopera durante el estudio?'}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed pl-11">
                {language === 'en'
                  ? 'We may ask you to move around, change positions, drink something sweet, or take a short walk to encourage your baby to move.'
                  : 'Podríamos pedirle que se mueva, cambie de posición, beba algo dulce o dé una breve caminata para animar a su bebé a moverse.'}
              </p>
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
                  ? 'Our team of board-certified specialists uses the most advanced technology to provide ultrasound imaging in a comfortable, patient-centered environment.'
                  : 'Nuestro equipo de especialistas certificados utiliza la tecnología más avanzada para proporcionar diagnósticos precisos en un ambiente cómodo y centrado en el paciente.'}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <Link 
                  href="/contact" 
                  className="relative group overflow-hidden rounded-full bg-gradient-to-r from-[#6642c8] to-[#8a63d2] px-10 py-4 text-white font-light tracking-wide min-w-[220px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {language === 'en' ? 'Book your appointment' : 'Programar una consulta'}
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
