import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col pt-24">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-[#fafafa]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c78550]/80 mb-4 block">Nuestros Servicios</span>
            <h1 className="text-4xl font-light tracking-wide text-[#3a3a3a] mb-6">Servicios de Ultrasonido</h1>
            <p className="text-gray-600 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
              Descubra nuestra gama completa de servicios de ultrasonido diseñados con la más alta precisión y atención al detalle para satisfacer sus necesidades específicas.
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
                <h2 className="text-2xl font-light tracking-wider mb-4 text-[#3a3a3a] group-hover:text-[#c78550] transition-colors duration-300">Diagnóstico por Ultrasonido</h2>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  Nuestros servicios de diagnóstico por ultrasonido ofrecen una precisión incomparable utilizando tecnología de última generación. Cada procedimiento es realizado por especialistas altamente capacitados que brindan una atención personalizada y detallada.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">Ultrasonido de alta resolución</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">Interpretación detallada de resultados</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">Atención personalizada</span>
                  </li>
                </ul>
                <Link href="/services/diagnostico" className="btn-primary">
                  <span>Más información</span>
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
                <h2 className="text-2xl font-light tracking-wider mb-4 text-[#3a3a3a] group-hover:text-[#c78550] transition-colors duration-300">Consultoría Industrial</h2>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  Ofrecemos asesoramiento exclusivo para implementar soluciones de ultrasonido avanzadas en procesos industriales de alta exigencia. Nuestros consultores expertos trabajan estrechamente con su equipo para optimizar resultados.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">Análisis de procesos industriales</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">Implementación de soluciones personalizadas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">Optimización de procesos existentes</span>
                  </li>
                </ul>
                <Link href="/services/consultoria" className="btn-primary">
                  <span>Más información</span>
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
                <h2 className="text-2xl font-light tracking-wider mb-4 text-[#3a3a3a] group-hover:text-[#c78550] transition-colors duration-300">Mantenimiento Premium</h2>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  Nuestro servicio técnico especializado ofrece atención personalizada para mantener su equipo de ultrasonido en condiciones óptimas. Garantizamos el rendimiento y la longevidad de sus dispositivos.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">Mantenimiento preventivo programado</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">Reparación y calibración de equipos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">Soporte técnico 24/7</span>
                  </li>
                </ul>
                <Link href="/services/mantenimiento" className="btn-primary">
                  <span>Más información</span>
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
                <h2 className="text-2xl font-light tracking-wider mb-4 text-[#3a3a3a] group-hover:text-[#c78550] transition-colors duration-300">Capacitación Especializada</h2>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  Programas de formación diseñados para profesionales que desean dominar las técnicas más avanzadas en ultrasonido. Nuestros cursos combinan teoría y práctica con los mejores especialistas.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">Cursos teórico-prácticos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">Certificaciones profesionales</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#c78550] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 font-light">Formación continua y actualización</span>
                  </li>
                </ul>
                <Link href="/services/capacitacion" className="btn-primary">
                  <span>Más información</span>
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
            <h2 className="text-3xl font-light tracking-wide text-[#3a3a3a] mb-6">¿Necesita un servicio personalizado?</h2>
            <p className="text-gray-600 mb-10 font-light leading-relaxed">
              Estamos aquí para ayudarle con sus necesidades específicas. Nuestro equipo de expertos está listo para diseñar una solución a medida para su proyecto o empresa.
            </p>
            <Link href="/contacto" className="btn-primary-lg">
              <span>Contáctenos hoy</span>
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
