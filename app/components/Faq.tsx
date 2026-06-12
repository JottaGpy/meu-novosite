export default function Faq() {
  const faqs = [
    {
      question: "Como funciona o atendimento e o projeto?",
      answer: "O processo é totalmente personalizado. Começamos com um diagnóstico detalhado do seu momento atual, seguido pela estruturação de uma estratégia clara e a execução de um planejamento inteligente focado em conversão."
    },
    {
      question: "O atendimento é 100% online?",
      answer: "Sim. Estruturo projetos e atendo clientes em todo o Brasil e no exterior, de forma totalmente remota através de videochamadas e acompanhamento constante pelo WhatsApp."
    },
    {
      question: "Em quanto tempo começo a ver resultados?",
      answer: "Os primeiros resultados de percepção de marca e engajamento costumam aparecer nas primeiras semanas após a implementação da estratégia, variando conforme a complexidade e o escopo do seu negócio."
    },
    {
      question: "Como solicito um orçamento para o meu negócio?",
      answer: "Basta entrar em contato pelo botão do WhatsApp aqui no site. Faremos uma conversa inicial para entender suas necessidades e, a partir disso, monto uma proposta sob medida."
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="tracking-[3px] uppercase text-sm text-[#8c7b60] font-semibold block mb-4">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-gray-900">
            Perguntas Frequentes.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group border-b border-[#e8e4dd] py-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between font-serif text-2xl font-medium text-gray-900 outline-none">
                {faq.question}
                <span className="ml-6 flex-shrink-0 text-3xl text-[#c7b79a] transition duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-600 max-w-3xl pr-8">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}