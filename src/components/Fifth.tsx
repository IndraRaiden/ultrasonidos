import Link from "next/link";

export default function Fifth() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="container-custom">
        <div className="relative overflow-hidden border border-[#e8a87c]/30 bg-[#ffffff]">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e8a87c]/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
          <div className="py-16 px-8 md:px-16 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c78550]/80 mb-4 block">Experiencia Exclusiva</span>
            <h2 className="text-3xl font-light mb-6 tracking-wide text-[#3a3a3a]">¿Listo para una <span className="gradient-text">experiencia excepcional</span>?</h2>
            <p className="text-gray-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
              Solicite una consulta privada para descubrir cómo nuestras soluciones de ultrasonido de alta precisión pueden adaptarse a sus necesidades específicas.
            </p>
            <Link 
              href="/contacto" 
              className="btn-primary border border-[#e8a87c]/40 bg-transparent hover:bg-[#e8a87c]/10 text-[#c78550] hover:text-[#3a3a3a] group relative overflow-hidden inline-block"
            >
              <span className="relative z-10 uppercase tracking-widest text-xs font-light">Solicitar Consulta</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#e8a87c]/0 via-[#e8a87c]/30 to-[#e8a87c]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
