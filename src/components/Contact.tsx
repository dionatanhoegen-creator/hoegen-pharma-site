import React, { useState } from 'react';

const Contact: React.FC = () => {
  // Estado para guardar o que o usuário digita
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    message: ''
  });

  // Atualiza o estado quando o usuário digita
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Função que envia para o WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formata a mensagem
    const text = `*Novo Contato pelo Site* 📄%0A%0A` +
      `*Nome:* ${formData.name}%0A` +
      `*Empresa:* ${formData.company}%0A` +
      `*Telefone:* ${formData.phone}%0A%0A` +
      `*Mensagem:*%0A${formData.message}`;

    // Número do WhatsApp (coloquei o que estava no seu código: 44...)
    const phoneNumber = "554444991268348"; 
    
    // Abre o WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LADO ESQUERDO: TEXTO E INFO */}
          <div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Fale Conosco</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
              Vamos impulsionar o seu negócio?
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Preencha o formulário ao lado para agendar uma conversa inicial. Entenderemos o seu momento atual e desenharemos a melhor estratégia para sua farmácia.
            </p>

            {/* CARD: ATUAÇÃO NACIONAL (Mantive este pois passa credibilidade) */}
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4 max-w-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Atuação Nacional</h4>
                <p className="text-slate-600 text-sm mt-1">
                  Atendemos farmácias de manipulação e prescritores em todo o território brasileiro.
                </p>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: FORMULÁRIO */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Seu Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="Ex: João Silva"
                />
              </div>

              {/* Empresa / Farmácia */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Nome da Farmácia ou Clínica</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="Ex: Farmácia Essência"
                />
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">WhatsApp / Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="(00) 00000-0000"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Como podemos ajudar?</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                  placeholder="Gostaria de saber mais sobre a consultoria..."
                ></textarea>
              </div>

              {/* Botão de Enviar */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Enviar Solicitação</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <p className="text-xs text-center text-slate-400 mt-4">
                Seus dados serão enviados diretamente para nossa equipe via WhatsApp.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;