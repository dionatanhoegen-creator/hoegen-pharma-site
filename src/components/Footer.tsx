import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* LADO ESQUERDO: LOGO E DESCRIÇÃO */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              
              {/* --- IMAGEM DO LOGO CORRIGIDA --- */}
              <img 
                src="/img/logo.png" 
                alt="Hoegen Pharma Logo" 
                // REMOVI: brightness-0 invert (agora o logo aparece colorido)
                className="h-12 w-auto object-contain bg-white/10 rounded px-2 py-1" 
                /* DICA: Adicionei um fundinho branco transparente (bg-white/10) 
                   para o logo não sumir no fundo escuro, caso ele seja azul escuro. */
              />
              
              {/* Se quiser remover este texto escrito e deixar só o logo, apague esse <span> inteiro */}
              <span className="text-white font-bold tracking-tight text-lg">
                HOEGEN <span className="font-light">PHARMA SOLUTIONS</span>
              </span>
            </div>
            <p className="text-sm">Soluções estratégicas para o mercado magistral.</p>
          </div>
          
          {/* LADO DIREITO: LINKS */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Início</a>
            <a href="#quem-somos" className="hover:text-white transition-colors">Quem Somos</a>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
        
        <hr className="my-8 border-slate-800" />
        
        {/* RODAPÉ INFERIOR COM CNPJ */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs space-y-2 md:space-y-0">
          <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-center">
             <p>© {new Date().getFullYear()} Hoegen Pharma Solution.</p>
             <span className="hidden md:block text-slate-600">|</span>
             <p>CNPJ: 61.892.800/0001-59</p>
          </div>
          
          <p className="opacity-60 hover:opacity-100 transition-opacity">
            Desenvolvido com excelência estratégica.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;