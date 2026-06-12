export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Os insights que ela compartilhou nos ajudaram a enxergar oportunidades que não estávamos percebendo e a fazer ajustes estratégicos, inclusive na estrutura do perfil, que fizeram toda a diferença para o nosso crescimento.",
      author: "Cris e Vi",
      company: "Odisseia Qualquer"
    },
    {
      id: 2,
      quote: "A Jay desenvolveu meu site exatamente como eu imaginava! Ficou lindo, moderno e com a cara da minha marca. Amei o resultado e recomendo muito o trabalho dela.",
      author: "Baddie Dane",
      company: "Baddie Place Studio"
    }
  ];

  return (
    <section id="depoimentos" className="py-32 px-6 lg:px-20 bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <span className="tracking-[3px] uppercase text-sm text-[#c7b79a] font-semibold block mb-4">
            Depoimentos
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold leading-tight">
            Resultados percebidos por quem confiou no processo.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testi) => (
            <div 
              key={testi.id}
              className="bg-[#2a2a2a] p-10 rounded-2xl border border-[#333] relative"
            >
              <span className="absolute top-6 left-6 text-6xl font-serif text-[#c7b79a] opacity-20">
                "
              </span>
              <p className="text-lg leading-relaxed text-gray-300 mb-8 relative z-10 italic">
                {testi.quote}
              </p>
              <div>
                <strong className="block font-serif text-xl text-white">
                  {testi.author}
                </strong>
                <span className="text-sm text-[#c7b79a]">
                  {testi.company}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}