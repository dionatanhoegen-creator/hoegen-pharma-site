
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="quem-somos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/img/foto-perfil.jpg"
                alt="Consultoria Profissional" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-900 rounded-2xl -z-10 hidden md:block"></div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Sua parceira estratégica no mercado magistral
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                A <strong>Hoegen Pharma Solution</strong> atua como representação comercial e atendimento consultivo especializado para o mercado magistral, conectando farmácias de manipulação, prescritores e fornecedores de insumos de forma ética, estratégica e eficiente.
              </p>
              <p>
                Nossa filosofia é baseada em transparência, visão de longo prazo e atendimento consultivo, priorizando relações sólidas, crescimento estruturado e resultados consistentes para farmácias e prescritores parceiros.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <h4 className="text-blue-900 font-bold text-lg mb-2">Ética</h4>
                  <p className="text-sm">Compromisso com as normas regulatórias e transparência.</p>
                </div>
                <div>
                  <h4 className="text-blue-900 font-bold text-lg mb-2">Expertise</h4>
                  <p className="text-sm">Atuação sólida em representação comercial no setor magistral, com amplo conhecimento técnico, comercial e de mercado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
