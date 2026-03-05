import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function MainLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="layout">
      <nav className="navbar glass-nav">
        <div className="container nav-container">
          <button
            type="button"
            className="logo logo-button"
            onClick={() => handleNavClick('inicio')}
          >
            Kevin<span className="accent">Dev</span>
          </button>

          <button 
            className={`menu-button ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú de navegación"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="nav-link"
              onClick={() => handleNavClick('inicio')}
            >
              Inicio
            </button>
            <button
              type="button"
              className="nav-link"
              onClick={() => handleNavClick('proyectos')}
            >
              Proyectos
            </button>
            <button
              type="button"
              className="nav-link"
              onClick={() => handleNavClick('habilidades')}
            >
              Habilidades
            </button>
            <button
              type="button"
              className="nav-link"
              onClick={() => handleNavClick('sobre-mi')}
            >
              Sobre mí
            </button>
            <button
              type="button"
              className="nav-link"
              onClick={() => handleNavClick('contacto')}
            >
              Contacto
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Kevin<span className="accent">Dev</span></h3>
              <p>Desarrollador Frontend & React</p>
            </div>
            <div className="social-links">
              <a href="https://github.com/kevinaviles123" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/kevin-steven-ga%C3%B1an-aviles-07888430b/" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="mailto:kevinaviles140@gmail.com" className="social-link">
                Email
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} KevinDev. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          type="button"
          className="scroll-top-button"
          onClick={scrollToTop}
          aria-label="Volver arriba"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}