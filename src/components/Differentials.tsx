
import React from 'react';

const DifferentialItem: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="flex items-start space-x-4">
    <div className="mt-1">
      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
        <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
    <div>
      <h4 className="text-xl font-bold text-slate-900 mb-1">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{subtitle}</p>
    </div>
  </div>
);

const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Por que escolher nossos serviços?</h2>
              <p className="text-slate-400 mb-8 max-w-lg">
                Nossa atuação vai além da intermediação. Somos parceiros do seu crescimento através de pilares sólidos.
              </p>
              <div className="space-y-8">
                <div className="flex items-center space-x-4 group">
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                     <span className="font-bold text-lg">01</span>
                   </div>
                   <span className="text-xl font-medium">Atendimento Personalizado</span>
                </div>
                <div className="flex items-center space-x-4 group">
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                     <span className="font-bold text-lg">02</span>
                   </div>
                   <span className="text-xl font-medium">Atuação Ética e Responsável</span>
                </div>
                <div className="flex items-center space-x-4 group">
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                     <span className="font-bold text-lg">03</span>
                   </div>
                   <span className="text-xl font-medium">Visão estratégica do Setor</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Diferenciais Competitivos</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4 py-2">
                  <h4 className="font-bold text-lg">Inteligência de Mercado</h4>
                  <p className="text-sm text-slate-400">Domínio das tendências do mercado magistral e das necessidades clínicas.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4 py-2">
                  <h4 className="font-bold text-lg">Fornecedores Qualificados</h4>
                  <p className="text-sm text-slate-400">Acesso a fornecedores homologados e canais de distribuição confiáveis.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4 py-2">
                  <h4 className="font-bold text-lg">Foco em Resultados</h4>
                  <p className="text-sm text-slate-400">Relacionamentos de longo prazo pautados em confiança mútua.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
