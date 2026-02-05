import { useState, useEffect } from 'react'; // <--- AQUI ESTAVA FALTANDO ISSO
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;