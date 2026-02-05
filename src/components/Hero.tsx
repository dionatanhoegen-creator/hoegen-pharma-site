import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
      {/* IMAGEM DE FUNDO:
         1. Coloque sua imagem em: public/img/fundo-hero.jpg 
         2. Se o nome for diferente, altere abaixo onde diz url(...) 
      */}
      <div 
        className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: 'url(/img/fundo-hero.png)' }} 
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 mb-6 bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-600/30 rounded">
            Excelência Magistral
          </span>
          
          {/* EDITE O TÍTULO AQUI MANUALMENTE */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Soluções estratégicas para o mercado magistral
          </h1>
          
          {/* EDITE O SUBTÍTULO AQUI */}
          <p className="text-lg md:text-xl text-slate-300 font-light mb-10 leading-relaxed max-w-2xl">
            Conectamos farmácias de manipulação, prescritores e fornecedores através de uma atuação ética, técnica e altamente consultiva.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5544991268348" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded font-bold transition-all text-center"
            >
              Fale conosco no WhatsApp
            </a>
            <a 
              href="#servicos" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm rounded font-bold transition-all text-center"
            >
              Conheça nossos serviços
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;