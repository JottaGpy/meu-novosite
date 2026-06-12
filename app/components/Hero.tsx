import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32 lg:pt-40 pb-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Bloco de Texto */}
        <div>
          <span className="tracking-[3px] uppercase text-sm text-[#8c7b60] font-semibold block mb-8">
            Estratégia • Web Design • Direção de Arte IA
          </span>
          
          <h1 className="text-5xl lg:text-7xl font-serif font-semibold leading-[1.05] text-gray-900 mb-6">
            Marcas fortes começam com visão estratégica.
          </h1>
          
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-8">
            Desenvolvo posicionamento premium, plataformas web de alta conversão e conteúdo visual de altíssima fidelidade. Da experiência gastronômica ao mercado digital, construo a autoridade que o seu negócio exige.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#contato" 
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-[#c7b79a] transition-colors duration-300"
            >
              Agendar Consultoria
            </a>
            <a 
              href="#portfolio" 
              className="border border-[#d6c8ae] text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-white transition-colors duration-300"
            >
              Explorar Projetos
            </a>
          </div>
        </div>

        {/* Bloco de Imagem */}
        <div className="relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl bg-[#e8e4dd]">
          <Image 
            src="/assets/foto-hero.jpg" 
            alt="Jairyelle - Estratégia e Marketing"
            fill
            className="object-cover object-top hover:scale-105 transition-transform duration-700"
            priority
          />
        </div>

      </div>
    </section>
  );
}