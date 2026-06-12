import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-32 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Bloco de Imagem - Foto Profissional */}
        <div className="relative h-[700px] rounded-2xl bg-[#e8e4dd] lg:shadow-xl group">
          <Image 
            src="/assets/about.jpg" 
            alt="Jairyelle Rabenschlag - Estrategista e Web Designer"
            fill
            priority={false} // Imagem abaixo da dobra, prioridade padrão
            className="object-cover object-top rounded-2xl group-hover:scale-[1.02] transition-transform duration-700"
          />
          
          {/* Detalhe de design: Borda flutuante atrás da imagem (apenas no Desktop) */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#d7ccb9] rounded-2xl -z-10 hidden lg:block transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
        </div>

        {/* Bloco de Texto */}
        <div>
          <span className="tracking-[3px] uppercase text-sm text-[#8c7b60] font-semibold block mb-4">
            Sobre Mim
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-gray-900 leading-tight mb-6">
            Estratégia, inteligência e percepção de valor.
          </h2>
          
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-10">
            <p>
              Acredito que o branding e o design vão muito além da estética. Trata-se da percepção construída em cada ponto de contato que o cliente tem com a sua marca.
            </p>
            <p>
              Minha missão é transformar empresas e profissionais em marcas memoráveis. Combinando o olhar analítico do marketing digital com o desenvolvimento web de alta performance, eu crio ecossistemas digitais que não apenas parecem premium, mas que convertem e escalam negócios de forma sustentável.
            </p>
          </div>

          {/* Missão, Visão e Valores (Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#e8e4dd]">
            <div>
              <h4 className="font-serif text-xl font-semibold text-gray-900 mb-2">Missão</h4>
              <p className="text-sm text-gray-600">Gerar crescimento real através de estratégia orientada a dados e design.</p>
            </div>
            <div>
              <h4 className="font-serif text-xl font-semibold text-gray-900 mb-2">Visão</h4>
              <p className="text-sm text-gray-600">Construir marcas que liderem seus mercados e permaneçam relevantes.</p>
            </div>
            <div>
              <h4 className="font-serif text-xl font-semibold text-gray-900 mb-2">Valores</h4>
              <p className="text-sm text-gray-600">Elegância, inteligência analítica, ética e inovação constante.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}