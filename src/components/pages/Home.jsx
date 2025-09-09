import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>¡Hola! Soy Kevin</h1>
          <h2>Desarrollador web</h2>
          <p className="hero-description">
            Creo experiencias digitales excepcionales con tecnologías modernas.
            Especializado en React native , react , Node.js y desarrollo web.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="button">Ver Proyectos</Link>
            <Link to="/about" className="button button-outline">Sobre Mí</Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="container">
          <h2>Mis Habilidades</h2>
          <div className="skills-grid">
            <Card title="Frontend">
              <ul>
                <li>React & Node.js</li>
                <li>JavaScript ES6+</li>
                <li>Styled Components</li>
                <li>Framer Motion</li>
                <li>Material UI</li>
                <li>Responsive Design</li>
              </ul>
            </Card>
            <Card title="Herramientas">
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Vercel</li>
                <li>Netlify</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <h2>Proyectos Destacados</h2>
          <div className="projects-grid">
            <Card title="E-commerce Platform">
              <p>Plataforma de comercio electrónico construida con MERN Stack.</p>
              <Link to="/projects" className="button button-small">Ver Detalles</Link>
            </Card>
            <Card title="Task Manager App">
              <p>Aplicación de gestión de tareas con autenticación y base de datos en tiempo real.</p>
              <Link to="/projects" className="button button-small">Ver Detalles</Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}