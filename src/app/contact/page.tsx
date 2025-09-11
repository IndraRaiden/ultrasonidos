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
                      Av. Principal #123<br />
                      Colonia Centro<br />
                      Ciudad de México, CP 12345
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
              </div>
            </div>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.892787364381!2d-117.09117450232068!3d32.67448497103006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d953ff246b6c63%3A0xc00e6ab8e7de32e4!2sHi%20Baby%20Ultrasound!5e0!3m2!1sen!2sus!4v1694470802573!5m2!1sen!2sus"
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.445956119289!2d-116.93829380232613!3d32.81000842094508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d959de8adba5b1%3A0x2369dd43f5031a9d!2sHi%20Baby%20Ultrasound%20El%20Cajon!5e0!3m2!1sen!2sus!4v1694471020517!5m2!1sen!2sus"
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

      {/* FAQ Section */}
      <section className="py-16">
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
                {language === 'en' ? 'How can I schedule an appointment?' : '¿Cómo puedo programar una cita?'}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed pl-11">
                {language === 'en'
                  ? 'You can schedule an appointment by calling our phone number, sending an email, or using the contact form on this page. Our team will contact you to confirm the date and time.'
                  : 'Puede programar una cita llamando a nuestro número de teléfono, enviando un correo electrónico o utilizando el formulario de contacto en esta página. Nuestro equipo se pondrá en contacto con usted para confirmar la fecha y hora.'}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a] flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mr-3 flex-shrink-0 text-[#6642c8]">2</span>
                {language === 'en' ? 'What should I bring to my appointment?' : '¿Qué debo llevar a mi cita?'}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed pl-11">
                {language === 'en'
                  ? 'It is advisable to bring your ID, health insurance card (if applicable), and any relevant medical documentation or previous studies related to your consultation.'
                  : 'Es recomendable traer su identificación, tarjeta de seguro médico (si aplica), y cualquier documentación médica relevante o estudios previos relacionados con su consulta.'}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a] flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mr-3 flex-shrink-0 text-[#6642c8]">3</span>
                {language === 'en' ? 'How long does an ultrasound study take?' : '¿Cuánto tiempo toma un estudio de ultrasonido?'}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed pl-11">
                {language === 'en'
                  ? 'The duration varies depending on the type of study, but generally takes between 15 and 45 minutes. More complex studies may require more time. We will inform you about the estimated duration when scheduling your appointment.'
                  : 'La duración varía según el tipo de estudio, pero generalmente toma entre 15 y 45 minutos. Estudios más complejos pueden requerir más tiempo. Le informaremos sobre la duración estimada al programar su cita.'}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a] flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#8a63d2]/10 flex items-center justify-center mr-3 flex-shrink-0 text-[#6642c8]">4</span>
                {language === 'en' ? 'When will I receive my results?' : '¿Cuándo recibiré mis resultados?'}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed pl-11">
                {language === 'en'
                  ? 'Results are usually available immediately after the procedure. In cases that require more detailed analysis, results will be ready within 24 to 48 hours.'
                  : 'Los resultados suelen estar disponibles inmediatamente después del procedimiento. En casos que requieran un análisis más detallado, los resultados estarán listos en un plazo de 24 a 48 horas.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
