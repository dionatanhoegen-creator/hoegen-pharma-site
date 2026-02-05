
import React from 'react';

const ServiceCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactNode 
}> = ({ title, description, icon }) => (
  <div className="p-8 bg-white border border-slate-100 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
    <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossas Soluções</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-600">
            Oferecemos suporte completo e consultivo para otimizar processos comerciais e técnicos no setor farmacêutico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Representação Comercial"
            description="Atuação consultiva focada no desenvolvimento de parcerias estratégicas, expansão de portfólio e fortalecimento do relacionamento comercial no mercado magistral."
            icon={
              <svg className="w-7 h-7 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />
          <ServiceCard 
            title="Assessoria em Compras"
            description="Gestão e suporte no processo de compra de matéria-prima, conectando farmácias a fornecedores qualificados e garantindo negociações seguras e competitivas."
            icon={
              <svg className="w-7 h-7 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            }
          />
          <ServiceCard 
            title="Materiais Técnicos"
            description="Desenvolvimento de lâminas e conteúdos personalizados alinhados à identidade do prescritor, focando em evidências clínicas e necessidades individuais de cada paciente."
            icon={
              <svg className="w-7 h-7 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
