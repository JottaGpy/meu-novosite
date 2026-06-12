"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ nome: "", email: "", telefone: "", mensagem: "" }); // Limpa o formulário
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="py-32 px-6 lg:px-20 bg-[#F8F7F4]">
      <div className="max-w-4xl mx-auto bg-white p-10 lg:p-16 rounded-2xl border border-[#e8e4dd] shadow-lg">
        
        <div className="text-center mb-12">
          <span className="tracking-[3px] uppercase text-sm text-[#8c7b60] font-semibold block mb-4">
            Contato
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mb-4">
            Vamos iniciar o seu projeto?
          </h2>
          <p className="text-gray-600">
            Preencha os dados abaixo e entrarei em contato em breve.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
              <input 
                type="text" 
                id="nome"
                required
                className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#e8e4dd] rounded-lg focus:outline-none focus:border-[#c7b79a] transition-colors"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
              <input 
                type="email" 
                id="email"
                required
                className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#e8e4dd] rounded-lg focus:outline-none focus:border-[#c7b79a] transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
            <input 
              type="tel" 
              id="telefone"
              required
              className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#e8e4dd] rounded-lg focus:outline-none focus:border-[#c7b79a] transition-colors"
              value={formData.telefone}
              onChange={(e) => setFormData({...formData, telefone: e.target.value})}
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
            <textarea 
              id="mensagem"
              required
              rows={4}
              className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#e8e4dd] rounded-lg focus:outline-none focus:border-[#c7b79a] transition-colors resize-none"
              value={formData.mensagem}
              onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === "loading"}
            className="w-full bg-gray-900 text-white py-4 rounded-lg font-medium hover:bg-[#c7b79a] transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center mt-4 font-medium">Mensagem enviada com sucesso! Retornarei o contato em breve.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center mt-4 font-medium">Ocorreu um erro ao enviar. Por favor, tente novamente ou use o WhatsApp.</p>
          )}
        </form>

      </div>
    </section>
  );
}