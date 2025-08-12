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
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar is now in the layout file */}
      
      {/* Hero Section */}
      <section className="py-16 bg-[#fafafa]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c78550]/80 mb-4 block">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Service 1 */}
            <div className="service-card group">
              <div className="aspect-[16/9] bg-[#f5f5f5] relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e8a87c]/10 to-transparent opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#ffffff] border border-[#e8a87c]/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#c78550]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="service-info">
                <h2 className="text-2xl font-light tracking-wider mb-4 text-[#3a3a3a] group-hover:text-[#c78550] transition-colors duration-300">
                  {language === 'en' ? 'Obstetric Ultrasound' : 'Ultrasonido Obstétrico'}
                </h2>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  {language === 'en' 
                    ? 'Our obstetric ultrasound services offer unparalleled precision using state-of-the-art technology. Each procedure is performed by highly trained specialists who provide personalized and detailed care to monitor your baby\'s development.'
                    : 'Nuestros servicios de ultrasonido obstétrico ofrecen una precisión incomparable utilizando tecnología de última generación. Cada procedimiento es realizado por especialistas altamente capacitados que brindan una atención personalizada y detallada para monitorear el desarrollo de su bebé.'}
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">
                      {language === 'en' ? 'High resolution 2D, 3D and 4D ultrasound' : 'Ultrasonido 2D, 3D y 4D de alta resolución'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">
                      {language === 'en' ? 'Detailed evaluation of fetal development' : 'Evaluación detallada del desarrollo fetal'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">
                      {language === 'en' ? 'Warm and personalized care' : 'Atención cálida y personalizada'}
                    </span>
                  </li>
                </ul>
                <Link href="/services/ultrasonido-obstetrico" className="btn-primary">
                  <span>{language === 'en' ? 'More information' : 'Más información'}</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="service-card group">
              <div className="aspect-[16/9] bg-[#f5f5f5] relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e8a87c]/10 to-transparent opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#ffffff] border border-[#e8a87c]/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#c78550]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="service-info">
                <h2 className="text-2xl font-light tracking-wider mb-4 text-[#3a3a3a] group-hover:text-[#c78550] transition-colors duration-300">
                  {language === 'en' ? 'Morphological Ultrasound' : 'Ultrasonido Morfológico'}
                </h2>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  {language === 'en' 
                    ? 'Our detailed morphological ultrasound allows for a thorough evaluation of your baby\'s anatomy, detecting possible anomalies and confirming healthy development. Performed by specialists in maternal-fetal medicine with extensive experience.'
                    : 'Nuestro ultrasonido morfológico detallado permite evaluar minuciosamente la anatomía de su bebé, detectando posibles anomalías y confirmando su desarrollo saludable. Realizado por especialistas en medicina materno-fetal con amplia experiencia.'}
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">
                      {language === 'en' ? 'Complete anatomical evaluation' : 'Evaluación anatómica completa'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">
                      {language === 'en' ? 'Early detection of anomalies' : 'Detección temprana de anomalías'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">
                      {language === 'en' ? 'Detailed medical report' : 'Informe médico detallado'}
                    </span>
                  </li>
                </ul>
                <Link href="/services/ultrasonido-morfologico" className="btn-primary">
                  <span>{language === 'en' ? 'More information' : 'Más información'}</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="service-card group">
              <div className="aspect-[16/9] bg-[#f5f5f5] relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e8a87c]/10 to-transparent opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#ffffff] border border-[#e8a87c]/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#c78550]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="service-info">
                <h2 className="text-2xl font-light tracking-wider mb-4 text-[#3a3a3a] group-hover:text-[#c78550] transition-colors duration-300">
                  {language === 'en' ? 'Fetal Doppler Ultrasound' : 'Ultrasonido Doppler Fetal'}
                </h2>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  {language === 'en' 
                    ? 'Fetal Doppler ultrasound evaluates blood flow in the umbilical cord, placenta, and baby\'s blood vessels, providing vital information about their well-being. This specialized technique allows for the detection of possible complications and ensures optimal development.'
                    : 'El ultrasonido Doppler fetal evalúa el flujo sanguíneo en el cordón umbilical, la placenta y los vasos sanguíneos del bebé, proporcionando información vital sobre su bienestar. Esta técnica especializada permite detectar posibles complicaciones y asegurar un desarrollo óptimo.'}
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">
                      {language === 'en' ? 'Evaluation of fetal blood flow' : 'Evaluación del flujo sanguíneo fetal'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">
                      {language === 'en' ? 'Monitoring of placental function' : 'Monitoreo de la función placentaria'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">
                      {language === 'en' ? 'Early detection of complications' : 'Detección temprana de complicaciones'}
                    </span>
                  </li>
                </ul>
                <Link href="/services/doppler-fetal" className="btn-primary">
                  <span>{language === 'en' ? 'More information' : 'Más información'}</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="service-card group">
              <div className="aspect-[16/9] bg-[#f5f5f5] relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e8a87c]/10 to-transparent opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#ffffff] border border-[#e8a87c]/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#c78550]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="service-info">
                <h2 className="text-2xl font-light tracking-wider mb-4 text-[#3a3a3a] group-hover:text-[#c78550] transition-colors duration-300">
                  {language === 'en' ? '4D Emotional Ultrasound' : 'Ultrasonido 4D Emocional'}
                </h2>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  {language === 'en' 
                    ? 'Experience the unique opportunity to see your baby in real time with our 4D emotional ultrasound. Observe their movements, facial expressions, and features with exceptional image quality, creating a special bond before birth and taking home unforgettable memories.'
                    : 'Viva la experiencia única de ver a su bebé en tiempo real con nuestro ultrasonido 4D emocional. Observe sus movimientos, expresiones faciales y características con una calidad de imagen excepcional, creando un vínculo especial antes del nacimiento y llevándose a casa recuerdos inolvidables.'}
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">
                      {language === 'en' ? 'Real-time high-definition images' : 'Imágenes en alta definición en tiempo real'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">
                      {language === 'en' ? 'Video and photo recording' : 'Grabación de video y fotografías'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">
                      {language === 'en' ? 'Emotional experience for the whole family' : 'Experiencia emocional para toda la familia'}
                    </span>
                  </li>
                </ul>
                <Link href="/services/ultrasonido-4d" className="btn-primary">
                  <span>{language === 'en' ? 'More information' : 'Más información'}</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
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
              {language === 'en' ? 'Need specialized care during your pregnancy?' : '¿Necesita atención especializada durante su embarazo?'}
            </h2>
            <p className="text-gray-600 mb-10 font-light leading-relaxed">
              {language === 'en' 
                ? 'We are here to accompany you at every stage of your pregnancy. Our team of maternal-fetal medicine specialists is ready to provide you and your baby with the personalized care you deserve.'
                : 'Estamos aquí para acompañarla en cada etapa de su embarazo. Nuestro equipo de especialistas en medicina materno-fetal está listo para brindarle la atención personalizada que usted y su bebé merecen.'}
            </p>
            <Link href="/contacto" className="btn-primary-lg">
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
