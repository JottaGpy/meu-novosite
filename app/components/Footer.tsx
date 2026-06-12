export default function Footer() {
  return (
    <footer className="bg-[#F8F7F4] border-t border-[#e3ddd5]">
      
      {/* Seção de CTA Final */}
      <div className="py-20 px-6 lg:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-gray-900 leading-tight mb-4">
            Sua marca merece ser percebida pelo seu verdadeiro valor.
          </h2>
          <p className="text-lg text-gray-600">
            Vamos construir uma presença digital elegante, inteligente e orientada a resultados.
          </p>
        </div>
      </div>

      {/* Rodapé Base */}
      <div className="border-t border-[#e3ddd5] py-10 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-semibold text-gray-900 mb-1">
              Jairyelle Rabenschlag
            </h3>
            <p className="text-sm text-gray-600">
              Estratégia • Web Design • Marketing
            </p>
          </div>

          <div className="flex gap-8 text-sm font-medium text-gray-600">
            <a href="https://instagram.com/jaygaudenciomkt" target="_blank" rel="noopener noreferrer" className="hover:text-[#b69d73] transition-colors">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/jairyelle-rabenschlag-14a21621a" target="_blank" rel="noopener noreferrer" className="hover:text-[#b69d73] transition-colors">
              LinkedIn
            </a>
            <a href="https://wa.me/5582996391100" target="_blank" rel="noopener noreferrer" className="hover:text-[#b69d73] transition-colors">
              WhatsApp
            </a>
          </div>

        </div>
        
        <div className="text-center text-sm text-gray-400 mt-10">
          © 2026 Todos os direitos reservados.
        </div>
      </div>

    </footer>
  );
}