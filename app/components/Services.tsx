export default function Services() {
  const services = [
    {
      id: "01",
      title: "Web Design & Landing Pages",
      description: "Desenvolvimento de sites e páginas de vendas com foco absoluto em conversão, velocidade e design premium para escalar negócios."
    },
    {
      id: "02",
      title: "Gestão de Redes Sociais",
      description: "Estratégia, planejamento e gestão de conteúdo. Do setor gastronômico a agências, crio um posicionamento digital que gera desejo e autoridade."
    },
    {
      id: "03",
      title: "Direção de Arte com IA",
      description: "Criação de imagens e vídeos realistas de altíssima fidelidade através de engenharia de prompts técnicos, elevando o valor visual das campanhas."
    }
  ];

  return (
    <section id="servicos" className="py-32 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-20">
          <span className="tracking-[3px] uppercase text-sm text-[#8c7b60] font-semibold block mb-4">
            Serviços
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-gray-900 leading-tight max-w-2xl">
            Soluções pensadas para crescimento escalável.
          </h2>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-[#F8F7F4] p-10 rounded-2xl border border-[#e8e4dd] hover:-translate-y-3 hover:shadow-xl transition-all duration-500 group"
            >
              <span className="text-4xl font-serif text-[#c7b79a] mb-6 block transition-colors group-hover:text-gray-900">
                {service.id}
              </span>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}