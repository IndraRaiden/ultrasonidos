import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] text-[#3a3a3a] py-16 border-t border-[#e8a87c]/20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <div className="w-8 h-8 relative mr-3">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f6c9a0]/50 to-[#c78550]/50 opacity-75 blur-sm"></div>
                <div className="absolute inset-0.5 rounded-full bg-[#ffffff] flex items-center justify-center">
                  <span className="gold-text font-light text-sm tracking-widest">U</span>
                </div>
              </div>
              <span className="gold-text text-sm uppercase tracking-[0.15em] font-light">Ultrasonidos</span>
            </div>
            <p className="text-gray-500 text-xs font-light">© {new Date().getFullYear()} Todos los derechos reservados</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link href="/" className="text-xs uppercase tracking-widest text-gray-500 hover:text-[#c78550] transition-colors duration-300">Inicio</Link>
            <Link href="/servicios" className="text-xs uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Servicios</Link>
            <Link href="/nosotros" className="text-xs uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Nosotros</Link>
            <Link href="/contacto" className="text-xs uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
