"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Trava o scroll do site quando o menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isOpen ? "bg-[#F8F7F4] border-transparent" : "bg-[#F8F7F4]/85 backdrop-blur-md border-b border-[#e7e3dc]"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 h-[90px] flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-2xl font-serif font-semibold text-gray-900 tracking-tight z-50 relative">
            Jairyelle Rabenschlag.
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 text-sm font-medium text-gray-600">
              <li><Link href="#sobre" className="hover:text-[#b69d73] transition-colors">Sobre</Link></li>
              <li><Link href="#servicos" className="hover:text-[#b69d73] transition-colors">Serviços</Link></li>
              <li><Link href="#portfolio" className="hover:text-[#b69d73] transition-colors">Portfólio</Link></li>
              <li><Link href="#depoimentos" className="hover:text-[#b69d73] transition-colors">Depoimentos</Link></li>
            </ul>
            
            <a 
              href="https://wa.me/5582996391100?text=Olá,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consultoria." 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#d7ccb9] px-6 py-3 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              Agendar Conversa
            </a>
          </nav>

          {/* Botão Menu Mobile */}
          <button 
            className="md:hidden text-2xl text-gray-900 z-50 relative focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>
      </header>

      {/* Menu Mobile (Overlay Tela Cheia independente do Header) */}
      <div 
        className={`fixed inset-0 bg-[#F8F7F4] z-40 flex flex-col items-center justify-start pt-32 transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-2xl font-serif text-gray-900 mb-12">
          <li><Link href="#sobre" onClick={closeMenu} className="hover:text-[#b69d73] transition-colors">Sobre</Link></li>
          <li><Link href="#servicos" onClick={closeMenu} className="hover:text-[#b69d73] transition-colors">Serviços</Link></li>
          <li><Link href="#portfolio" onClick={closeMenu} className="hover:text-[#b69d73] transition-colors">Portfólio</Link></li>
          <li><Link href="#depoimentos" onClick={closeMenu} className="hover:text-[#b69d73] transition-colors">Depoimentos</Link></li>
        </ul>
        <a 
          href="https://wa.me/5582996391100?text=Olá,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consultoria." 
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-[#c7b79a] transition-colors duration-300 shadow-xl"
        >
          Agendar Conversa
        </a>
      </div>
    </>
  );
}