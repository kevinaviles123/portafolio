import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MainLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="container nav-container">
          <Link to="/" className="logo">
            Kevin<span className="accent">Dev</span>
          </Link>

          <button 
            className={`menu-button ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Mí
            </Link>
            <Link 
              to="/projects" 
              className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
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
              <p>Desarrollador web</p>
            </div>
            <div className="social-links">
              <a href="https://github.com/kevinaviles123" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/kevin-steven-ga%C3%B1an-aviles-07888430b/" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} KevinDev. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}