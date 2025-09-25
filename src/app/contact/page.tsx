'use client';

// Navbar is now in the layout file
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ContactPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <span className="text-xs uppercase tracking-[0.2em] text-[#6642c8]/80 mb-4 block">
                {language === 'en' ? 'We Are Here To Help You' : 'Estamos Aquí Para Ayudarle'}
              </span>
              <h1 className="text-4xl font-light tracking-wide text-[#3a3a3a] mb-6">
                {language === 'en' ? 'Contact Us' : 'Contáctenos'}
              </h1>
              <p className="text-gray-600 mt-8 max-w-2xl font-light leading-relaxed">
                {language === 'en' 
                  ? 'We are available to answer your questions, schedule appointments, or provide additional information about our services.'
                  : 'Estamos disponibles para responder a sus preguntas, programar citas o proporcionar información adicional sobre nuestros servicios.'}
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative overflow-hidden rounded-lg shadow-lg w-full max-w-md">
                <Image
                  src="/DSC09282.png"
                  alt={language === 'en' ? 'Contact us image' : 'Imagen de contacto'}
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'Contact Information' : 'Información de Contacto'}
            </h2>
          </div>
          
          <div className="bg-[#fafafa] rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-[#6642c8]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#3a3a3a]">
                      {language === 'en' ? 'Address' : 'Dirección'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      <strong>National City:</strong><br />
                      1615 E Plaza Blvd #102<br />
                      National City, CA 91950<br /><br />
                      <strong>El Cajon:</strong><br />
                      1122 N 2nd St<br />
                      El Cajon, CA 92021
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-[#6642c8]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#3a3a3a]">
                      {language === 'en' ? 'Phone' : 'Teléfono'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      +1 619-292-3600
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-[#6642c8]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#3a3a3a]">
                      {language === 'en' ? 'Hours' : 'Horario'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {language === 'en' ? 'Daily: 10:00 AM - 8:00 PM' : 'Todos los días: 10:00 AM - 8:00 PM'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center h-full">
                <div className="relative overflow-hidden rounded-lg shadow-md max-w-[380px]">
                  <Image
                    src="/DSC09261.jpg"
                    alt={language === 'en' ? 'Our office image' : 'Imagen de nuestra oficina'}
                    width={380}
                    height={380}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <h3 className="text-base font-medium text-[#3a3a3a] mb-3">Síguenos</h3>
              <div className="flex justify-center gap-3 flex-wrap">
                <a
                  href="https://www.facebook.com/hibabyultrasounds"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6642c8] text-white hover:bg-[#8a63d2] transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                  </svg>
                  <span className="text-sm">
                    {language === 'en' ? 'Follow us on Facebook' : 'Síguenos en Facebook'}
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/hibabyultrasound/?locale=es&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6642c8] text-white hover:bg-[#8a63d2] transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048c-.852.04-1.436.175-1.947.373a3.9 3.9 0 0 0-1.415.92A3.9 3.9 0 0 0 .42 2.757c-.198.511-.333 1.095-.373 1.947C.01 5.556 0 5.829 0 8s.01 2.444.048 3.297c.04.852.175 1.436.373 1.947.204.52.477.957.92 1.4.443.443.88.716 1.4.92.511.198 1.095.333 1.947.373C5.556 15.99 5.829 16 8 16s2.444-.01 3.297-.048c.852-.04 1.436-.175 1.947-.373a3.9 3.9 0 0 0 1.4-.92 3.9 3.9 0 0 0 .92-1.4c.198-.511.333-1.095.373-1.947C15.99 10.444 16 10.171 16 8s-.01-2.444-.048-3.297a5.9 5.9 0 0 0-.373-1.947 3.9 3.9 0 0 0-.92-1.415A3.9 3.9 0 0 0 13.54.42a5.9 5.9 0 0 0-1.947-.373C10.444.01 10.171 0 8 0Zm0 1.44c2.136 0 2.389.008 3.23.046.78.036 1.204.166 1.486.276.375.146.642.319.923.6.281.281.454.548.6.923.11.282.24.706.276 1.486.038.842.046 1.094.046 3.23s-.008 2.389-.046 3.23c-.036.78-.166 1.204-.276 1.486a2.46 2.46 0 0 1-.6.923 2.46 2.46 0 0 1-.923.6c-.282.11-.706.24-1.486.276-.842.038-1.094.046-3.23.046s-2.389-.008-3.23-.046c-.78-.036-1.204-.166-1.486-.276-.375-.146-.642-.319-.923-.6a2.46 2.46 0 0 1-.6-.923c-.11-.282-.24-.706-.276-1.486C1.448 10.389 1.44 10.136 1.44 8s.008-2.389.046-3.23c.036-.78.166-1.204.276-1.486.146-.375.319-.642.6-.923.281-.281.548-.454.923-.6.282-.11.706-.24 1.486-.276.842-.038 1.094-.046 3.23-.046Zm0 2.314a4.246 4.246 0 1 0 0 8.492 4.246 4.246 0 0 0 0-8.492ZM8 5.153a2.847 2.847 0 1 1 0 5.694 2.847 2.847 0 0 1 0-5.694Zm4.271-.934a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
                  </svg>
                  <span className="text-sm">
                    {language === 'en' ? 'Follow us on Instagram' : 'Síguenos en Instagram'}
                  </span>
                </a>

                <a
                  href="https://www.tiktok.com/@hibabyultrasounds"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6642c8] text-white hover:bg-[#8a63d2] transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                  </svg>
                  <span className="text-sm">
                    {language === 'en' ? 'Follow us on TikTok' : 'Síguenos en TikTok'}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'Send Us a Message' : 'Envíenos un Mensaje'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              {language === 'en' 
                ? 'Have questions or want to schedule an appointment? Fill out the form below and we will get back to you as soon as possible.'
                : '¿Tiene preguntas o desea programar una cita? Complete el formulario a continuación y nos pondremos en contacto con usted lo antes posible.'}
            </p>
          </div>
          
          <div className="bg-[#fafafa] rounded-lg p-8 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Full Name' : 'Nombre Completo'} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6642c8] focus:border-transparent transition-colors"
                    placeholder={language === 'en' ? 'Your name' : 'Su nombre'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Email Address' : 'Correo Electrónico'} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6642c8] focus:border-transparent transition-colors"
                    placeholder={language === 'en' ? 'Your email' : 'Su correo electrónico'}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Phone Number' : 'Número de Teléfono'}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6642c8] focus:border-transparent transition-colors"
                    placeholder={language === 'en' ? 'Your phone number' : 'Su número de teléfono'}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Subject' : 'Asunto'} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6642c8] focus:border-transparent transition-colors"
                    placeholder={language === 'en' ? 'Subject of your message' : 'Asunto de su mensaje'}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'en' ? 'Message' : 'Mensaje'} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6642c8] focus:border-transparent transition-colors resize-none"
                  placeholder={language === 'en' ? 'Your message' : 'Su mensaje'}
                ></textarea>
              </div>
              
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#6642c8] text-white rounded-full hover:bg-[#8a63d2] transition-colors shadow-sm inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                  <span>{language === 'en' ? 'Send Message' : 'Enviar Mensaje'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-wide text-[#3a3a3a] mb-6">
              {language === 'en' ? 'Our Locations' : 'Nuestras Ubicaciones'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              {language === 'en' 
                ? 'We have multiple locations to serve you better. Visit our modern and comfortable facilities at any of our centers.'
                : 'Tenemos múltiples ubicaciones para atenderle mejor. Visite nuestras instalaciones modernas y confortables en cualquiera de nuestros centros.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* First Location */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <h3 className="text-xl font-light text-center py-3 bg-white border-b border-gray-100">
                {language === 'en' ? 'Location 1' : 'Ubicación 1'}
              </h3>
              <div className="aspect-[16/9] w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992!2d-117.088472!3d32.6769523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d953ff246b6c63%3A0xc00e6ab8e7de32e4!2sHi%20Baby%20Ultrasound!5e0!3m2!1sen!2smx!4v1695604136!5m2!1sen!2smx"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Location 1"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            
            {/* Second Location */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <h3 className="text-xl font-light text-center py-3 bg-white border-b border-gray-100">
                {language === 'en' ? 'Location 2' : 'Ubicación 2'}
              </h3>
              <div className="aspect-[16/9] w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991!2d-116.9360068!3d32.8100674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d959de8adba5b1%3A0x2369dd43f5031a9d!2sHi%20Baby%20Ultrasound%20El%20Cajon!5e0!3m2!1sen!2smx!4v1695604136!5m2!1sen!2smx"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Location 2"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              {language === 'en' 
                ? 'Click on the maps to get directions to our locations'
                : 'Haga clic en los mapas para obtener indicaciones a nuestras ubicaciones'}
            </p>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
