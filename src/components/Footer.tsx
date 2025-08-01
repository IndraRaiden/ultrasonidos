import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#070710] text-white py-16 border-t border-[#d4af37]/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <div className="w-8 h-8 relative mr-3">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#b47aff]/50 to-[#7e3bd0]/50 opacity-75 blur-sm"></div>
                <div className="absolute inset-0.5 rounded-full bg-[#070710] flex items-center justify-center">
                  <span className="gold-text font-light text-sm tracking-widest">U</span>
                </div>
              </div>
              <span className="gold-text text-sm uppercase tracking-[0.15em] font-light">Ultrasonidos</span>
            </div>
            <p className="text-gray-500 text-xs font-light">© {new Date().getFullYear()} Todos los derechos reservados</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link href="/" className="text-xs uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Inicio</Link>
            <Link href="/servicios" className="text-xs uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Servicios</Link>
            <Link href="/nosotros" className="text-xs uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Nosotros</Link>
            <Link href="/contacto" className="text-xs uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
