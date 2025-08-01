import Link from "next/link";

export default function Second() {
  return (
    <section className="bg-gradient-to-br from-[#070710] via-[#0c0c14] to-[#070710] text-white py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37]/70 mb-4 block">Experiencia Exclusiva</span>
            <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-wide leading-tight">
              Tecnología de <span className="gold-text font-normal">ultrasonido</span> de alta <span className="gold-text font-normal">precisión</span>
            </h1>
            <p className="text-gray-300 mb-10 font-light leading-relaxed">
              Soluciones innovadoras y exclusivas para el sector médico e industrial, con la más alta calidad y sofisticación.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/servicios" className="btn-primary">
                Descubrir Servicios
              </Link>
              <Link href="/contacto" className="btn-secondary">
                Consulta Privada
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="couture-frame">
              <div className="w-full h-80 md:h-96 flex items-center justify-center relative overflow-hidden bg-[#0c0c14]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9d4eff]/10 to-transparent opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <span className="gold-text text-4xl font-light tracking-widest mb-4">ULTRA</span>
                  <div className="w-16 h-px bg-[#d4af37]/50 mb-4"></div>
                  <p className="text-center text-gray-300 font-light tracking-wider">TECNOLOGÍA EXCLUSIVA</p>
                </div>
                {/* Replace with actual image when available */}
                {/* <Image 
                  src="/images/hero.jpg" 
                  alt="Ultrasonidos tecnología" 
                  fill
                  className="object-cover"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
