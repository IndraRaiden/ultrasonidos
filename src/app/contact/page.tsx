import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col pt-24">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-[#fafafa]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c78550]/80 mb-4 block">Estamos Aquí Para Ayudarle</span>
            <h1 className="text-4xl font-light tracking-wide text-[#3a3a3a] mb-6">Contáctenos</h1>
            <p className="text-gray-600 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
              Estamos disponibles para responder a sus preguntas, programar citas o proporcionar información adicional sobre nuestros servicios.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-light tracking-wide text-[#3a3a3a] mb-8">Información de Contacto</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#e8a87c]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-[#c78550]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-[#3a3a3a] mb-2">Dirección</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Av. Principal #123<br />
                      Colonia Centro<br />
                      Ciudad de México, CP 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#e8a87c]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-[#c78550]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-[#3a3a3a] mb-2">Teléfono</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      +52 (55) 1234 5678<br />
                      +52 (55) 8765 4321
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#e8a87c]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-[#c78550]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-[#3a3a3a] mb-2">Email</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      info@ultrasonidos.com<br />
                      citas@ultrasonidos.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#e8a87c]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-[#c78550]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-[#3a3a3a] mb-2">Horario de Atención</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Lunes - Viernes: 9:00 AM - 7:00 PM<br />
                      Sábado: 9:00 AM - 2:00 PM<br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-light text-[#3a3a3a] mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-[#e8a87c]/30 flex items-center justify-center text-[#c78550] hover:bg-[#e8a87c]/10 transition-colors duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-[#e8a87c]/30 flex items-center justify-center text-[#c78550] hover:bg-[#e8a87c]/10 transition-colors duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-[#e8a87c]/30 flex items-center justify-center text-[#c78550] hover:bg-[#e8a87c]/10 transition-colors duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-1.005-.02-2.3-1.39-2.3-1.39 0-1.601 1.094-1.601 2.226v4.252H8.014v-8.59h2.557v1.181h.037c.355-.675 1.227-1.387 2.534-1.387 2.712 0 3.196 1.78 3.196 4.11v4.686z" clipRule="evenodd"></path>
                      <path fillRule="evenodd" d="M5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-light tracking-wide text-[#3a3a3a] mb-8">Envíenos un Mensaje</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-600 mb-2">Nombre Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-[#e8a87c]/30 focus:border-[#c78550] focus:ring focus:ring-[#e8a87c]/20 outline-none transition-all duration-300 bg-white text-gray-700"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-600 mb-2">Correo Electrónico</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-[#e8a87c]/30 focus:border-[#c78550] focus:ring focus:ring-[#e8a87c]/20 outline-none transition-all duration-300 bg-white text-gray-700"
                      placeholder="Su correo electrónico"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-600 mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-[#e8a87c]/30 focus:border-[#c78550] focus:ring focus:ring-[#e8a87c]/20 outline-none transition-all duration-300 bg-white text-gray-700"
                      placeholder="Su número de teléfono"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm text-gray-600 mb-2">Asunto</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 border border-[#e8a87c]/30 focus:border-[#c78550] focus:ring focus:ring-[#e8a87c]/20 outline-none transition-all duration-300 bg-white text-gray-700"
                      placeholder="Asunto de su mensaje"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-600 mb-2">Mensaje</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full px-4 py-3 border border-[#e8a87c]/30 focus:border-[#c78550] focus:ring focus:ring-[#e8a87c]/20 outline-none transition-all duration-300 bg-white text-gray-700"
                    placeholder="Escriba su mensaje aquí..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="w-4 h-4 text-[#c78550] border-[#e8a87c]/30 focus:ring-[#e8a87c]/20"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                    Acepto la <Link href="/privacy-policy" className="text-[#c78550] hover:underline">política de privacidad</Link> y el procesamiento de mis datos personales.
                  </label>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="btn-primary-lg w-full md:w-auto"
                  >
                    <span>Enviar Mensaje</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-wide text-[#3a3a3a] mb-6">Nuestra Ubicación</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Estamos ubicados en una zona céntrica y de fácil acceso. Visite nuestras instalaciones modernas y confortables.
            </p>
          </div>
          
          <div className="aspect-[16/9] bg-[#e0e0e0] relative overflow-hidden">
            {/* Replace with actual map component or iframe */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#ffffff] border border-[#e8a87c]/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#c78550]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600 font-light">
                  Aquí se mostrará el mapa de ubicación.<br />
                  Para implementar un mapa real, puede utilizar Google Maps, Mapbox u otro servicio similar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c78550]/80 mb-4 block">Preguntas Frecuentes</span>
            <h2 className="text-3xl font-light tracking-wide text-[#3a3a3a] mb-6">¿Cómo Podemos Ayudarle?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Encuentre respuestas a las preguntas más comunes sobre nuestros servicios y procesos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a] flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#e8a87c]/10 flex items-center justify-center mr-3 flex-shrink-0 text-[#c78550]">1</span>
                ¿Cómo puedo programar una cita?
              </h3>
              <p className="text-gray-600 font-light leading-relaxed pl-11">
                Puede programar una cita llamando a nuestro número de teléfono, enviando un correo electrónico o utilizando el formulario de contacto en esta página. Nuestro equipo se pondrá en contacto con usted para confirmar la fecha y hora.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a] flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#e8a87c]/10 flex items-center justify-center mr-3 flex-shrink-0 text-[#c78550]">2</span>
                ¿Qué debo llevar a mi cita?
              </h3>
              <p className="text-gray-600 font-light leading-relaxed pl-11">
                Es recomendable traer su identificación, tarjeta de seguro médico (si aplica), y cualquier documentación médica relevante o estudios previos relacionados con su consulta.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a] flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#e8a87c]/10 flex items-center justify-center mr-3 flex-shrink-0 text-[#c78550]">3</span>
                ¿Cuánto tiempo toma un estudio de ultrasonido?
              </h3>
              <p className="text-gray-600 font-light leading-relaxed pl-11">
                La duración varía según el tipo de estudio, pero generalmente toma entre 15 y 45 minutos. Estudios más complejos pueden requerir más tiempo. Le informaremos sobre la duración estimada al programar su cita.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light tracking-wider mb-4 text-[#3a3a3a] flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#e8a87c]/10 flex items-center justify-center mr-3 flex-shrink-0 text-[#c78550]">4</span>
                ¿Cuándo recibiré mis resultados?
              </h3>
              <p className="text-gray-600 font-light leading-relaxed pl-11">
                Los resultados suelen estar disponibles inmediatamente después del procedimiento. En casos que requieran un análisis más detallado, los resultados estarán listos en un plazo de 24 a 48 horas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
