"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function StuffedAnimalsCard() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      // @ts-ignore - custom event detail
      setCurrentLanguage(event.detail?.language || "en");
    };

    document.addEventListener(
      "languageChange",
      handleLanguageChange as unknown as EventListener
    );

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener(
        "languageChange",
        handleLanguageChange as unknown as EventListener
      );
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    const prevent = (e: Event) => {
      e.preventDefault();
    };
    window.addEventListener("wheel", prevent as EventListener, { passive: false } as AddEventListenerOptions);
    window.addEventListener("touchmove", prevent as EventListener, { passive: false } as AddEventListenerOptions);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener("wheel", prevent as EventListener);
      window.removeEventListener("touchmove", prevent as EventListener);
    };
  }, [open]);

  const images: string[] = [
    "/peluches/IMG-20251004-WA0004.jpg",
    "/peluches/IMG-20251004-WA0005.jpg",
    "/peluches/IMG-20251004-WA0006.jpg",
    "/peluches/IMG-20251004-WA0007.jpg",
    "/peluches/IMG-20251004-WA0008.jpg",
    "/peluches/IMG-20251004-WA0010.jpg",
    "/peluches/IMG-20251004-WA0011.jpg",
    "/peluches/IMG-20251004-WA0013.jpg",
    "/peluches/IMG-20251004-WA0014.jpg",
    "/peluches/Imagen de WhatsApp 2025-10-01 a las 18.58.09_9b9b49ed.jpg",
    "/peluches/Imagen de WhatsApp 2025-10-01 a las 18.58.18_fd2e99b1.jpg",
  ];

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="group cursor-pointer"
        style={{
          borderRadius: "0.5rem",
          overflow: "hidden",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.03)",
          background: "white",
          transition: "transform 0.3s ease",
        }}
      >
        <div className="aspect-[4/3] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8a63d2]/10 to-transparent opacity-30"></div>
          <Image
            src="/indexmain/800.jpg"
            alt="Stuffed Animals"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
        <div
          style={{
            padding: "1.5rem",
            background: "white",
            position: "relative",
            minHeight: "12rem",
          }}
        >
          <h3 className="text-xl font-medium tracking-wider mb-3 text-[#3a3a3a] group-hover:text-[#6642c8] transition-colors duration-300">
            <span className="block text-sm text-purple-500 mb-1 font-semibold uppercase">
              {currentLanguage === "en" ? "Keepsakes" : "Recuerdos"}
            </span>
            {currentLanguage === "en" ? "🧸 STUFFED ANIMALS" : "🧸 PELUCHES"}
          </h3>
          <p className="text-gray-600 mb-6 text-sm font-light">
            {currentLanguage === "en"
              ? "Adorable plush animals with a special recording of your baby's heartbeat inside, creating a cherished keepsake that will last a lifetime."
              : "Adorables animales de peluche con una grabación especial del latido del corazón de su bebé en el interior, creando un recuerdo preciado que durará toda la vida."}
          </p>
          <div style={{ display: "flex", alignItems: "center", position: "absolute", bottom: "1.5rem", left: "1.5rem" }}>
            <span className="text-xs uppercase tracking-widest">
              {currentLanguage === "en" ? "✨ View gallery" : "✨ Ver galería"}
            </span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>
        </div>
      </div>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overscroll-contain">
            <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden" role="dialog" aria-modal="true">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 z-10 inline-flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 w-8 h-8"
                aria-label={currentLanguage === "en" ? "Close" : "Cerrar"}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-4 border-b">
                <h4 className="text-lg font-medium">
                  {currentLanguage === "en" ? "Stuffed Animals Gallery" : "Galería de Peluches"}
                </h4>
              </div>

              <div className="p-4 overflow-auto h-[calc(90vh-4rem)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {images.map((src, idx) => (
                    <div key={idx} className="relative w-full aspect-square overflow-hidden rounded">
                      <Image
                        src={encodeURI(src)}
                        alt={currentLanguage === "en" ? "Stuffed animal" : "Peluche"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        priority={idx < 3}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
