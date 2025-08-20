import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] text-[#3a3a3a] py-16 border-t border-[#e8a87c]/20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <div className="relative h-10 mr-3">
                <Image 
                  src="/hibaby-logo.png" 
                  alt="HiBaby Logo" 
                  width={100} 
                  height={40} 
                  className="object-contain h-full w-auto"
                />
              </div>
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
