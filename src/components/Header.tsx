import { useState, useEffect } from 'react'; // Importação necessária para o funcionamento

// Esta parte abaixo resolve o erro "Property 'scrolled' does not exist" que deu no deploy
interface HeaderProps {
  scrolled?: boolean;
}

const Header = ({ scrolled: _scrolledProps }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* --- ÁREA DO LOGO --- */}
        <a href="#" className="flex items-center">
          <img 
            src="/img/logo.png" 
            alt="Hoegen Pharma" 
            className="h-16 w-auto object-contain py-1" 
          />
        </a>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-900 font-bold"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5544991268348" // Ajustado para o seu número real
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded text-xs font-bold uppercase tracking-wider bg-blue-900 text-white hover:bg-blue-800 transition-all shadow-sm"
          >
            WhatsApp
          </a>
        </nav>

        {/* BOTÃO MOBILE */}
        <button 
          className="md:hidden p-2 text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 mb-1.5 bg-slate-900"></div>
          <div className="w-6 h-0.5 mb-1.5 bg-slate-900"></div>
          <div className="w-6 h-0.5 bg-slate-900"></div>
        </button>
      </div>

      {/* MENU MOBILE */}
      <div 
        className={`fixed inset-0 bg-white z-[60] flex flex-col p-8 transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          className="self-end p-4 text-3xl text-slate-800"
          onClick={() => setIsMenuOpen(false)}
        >
          &times;
        </button>
        <div className="flex flex-col space-y-6 mt-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xl font-bold text-slate-800 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5544991268348" 
            target="_blank"
            className="bg-blue-900 text-white text-center py-4 px-8 rounded font-bold mt-6 w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;