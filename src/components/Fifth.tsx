import Link from "next/link";

export default function Fifth() {
  return (
    <section className="py-24 bg-[#070710]">
      <div className="container-custom">
        <div className="relative overflow-hidden border border-[#d4af37]/20 bg-[#0c0c14]">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
          <div className="py-16 px-8 md:px-16 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37]/70 mb-4 block">Experiencia Exclusiva</span>
            <h2 className="text-3xl font-light mb-6 tracking-wide">¿Listo para una <span className="gold-text">experiencia excepcional</span>?</h2>
            <p className="text-gray-300 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
              Solicite una consulta privada para descubrir cómo nuestras soluciones de ultrasonido de alta precisión pueden adaptarse a sus necesidades específicas.
            </p>
            <Link 
              href="/contacto" 
              className="btn-primary border border-[#d4af37]/30 bg-transparent hover:bg-[#9d4eff]/10 text-[#d4af37] hover:text-white group relative overflow-hidden inline-block"
            >
              <span className="relative z-10 uppercase tracking-widest text-xs font-light">Solicitar Consulta</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#9d4eff]/0 via-[#9d4eff]/30 to-[#9d4eff]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
