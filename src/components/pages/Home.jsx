import React, { useEffect, useState } from 'react';
import {
  Code,
  Palette,
  Smartphone,
  Zap,
  Server,
  Database,
  GitBranch,
  Laptop,
  Rocket,
  Package,
  Link as LinkIcon,
  HardDrive,
  Settings,
} from 'lucide-react';
import Card from '../ui/Card';

const stats = [
  { id: 1, label: 'Proyectos completados', value: 8 },
  { id: 2, label: 'Tecnologías dominadas', value: 12 },
  { id: 3, label: 'Meses de experiencia', value: 6 },
];

const projects = [
  {
    id: 1,
    nombre: 'InventarioPro',
    destacado: true,
    descripcion:
      'Sistema de gestión de inventario PWA para pequeños negocios con soporte offline e interfaz optimizada para punto de venta.',
    imagen: '/images/inventario.png',
    stack: ['React', 'Tailwind CSS', 'localStorage', 'PWA'],
    demo: 'https://inventario-hbwn.vercel.app/login',
    codigo: 'https://github.com/kevinaviles123/inventario',
  },
  {
    id: 2,
    nombre: 'Task Manager App',
    descripcion:
      'Aplicación de gestión de tareas con organización por proyectos y experiencia centrada en productividad.',
    imagen: '/images/taskmanager.jpg',
    stack: ['React', 'Firebase', 'Material UI'],
    demo: 'https://tasks.kevindev.com',
    codigo: 'https://github.com/kevinaviles123/taskmanager',
  },
  {
    id: 3,
    nombre: 'Blog Platform',
    descripcion:
      'Plataforma de blogging con editor moderno, sistema de comentarios y búsqueda avanzada.',
    imagen: '/images/blog.jpg',
    stack: ['Next.js', 'Prisma', 'PostgreSQL'],
    demo: 'https://blog.kevindev.com',
    codigo: 'https://github.com/kevinaviles123/blog',
  },
];

const skillCategories = [
  {
    title: 'Frontend',
    items: [
      { Icon: Code, nombre: 'React' },
      { Icon: Code, nombre: 'TypeScript' },
      { Icon: Palette, nombre: 'Tailwind CSS' },
      { Icon: Smartphone, nombre: 'Responsive Design' },
      { Icon: Zap, nombre: 'Vite' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { Icon: Server, nombre: 'Node.js' },
      { Icon: Server, nombre: 'Express' },
      { Icon: Database, nombre: 'MongoDB' },
      { Icon: Database, nombre: 'Autenticación JWT' },
    ],
  },
  {
    title: 'Herramientas',
    items: [
      { Icon: GitBranch, nombre: 'Git & GitHub' },
      { Icon: Laptop, nombre: 'VS Code' },
      { Icon: Palette, nombre: 'Figma' },
      { Icon: Rocket, nombre: 'Vercel / Netlify' },
    ],
  },
  {
    title: 'Otros',
    items: [
      { Icon: Package, nombre: 'PWA' },
      { Icon: LinkIcon, nombre: 'REST APIs' },
      { Icon: HardDrive, nombre: 'localStorage' },
      { Icon: Settings, nombre: 'Buenas prácticas UI/UX' },
    ],
  },
];

export default function Home() {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1200;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setCounters(
        stats.map((stat) => Math.floor(stat.value * progress)),
      );
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="home">
      {/* Hero */}
      <section
        id="inicio"
        className="hero hero-gradient"
      >
        <div className="container hero-inner">
          <div className="hero-content animate-fade-in-up">
            <p className="hero-kicker">
              ¡Hola! Soy
            </p>
            <h1 className="hero-title">
              Kevin Avilés
            </h1>
            <h2 className="hero-subtitle typing">
              Desarrollador Frontend
              <span className="typing-caret" />
            </h2>
            <p className="hero-description">
              Creo aplicaciones web modernas, rápidas y enfocadas en ofrecer una experiencia de usuario impecable.
            </p>
            <div className="hero-buttons">
              <button
                type="button"
                className="button"
                onClick={() => {
                  const section = document.getElementById('proyectos');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Ver proyectos
              </button>
              <button
                type="button"
                className="button button-outline"
                onClick={() => {
                  const section = document.getElementById('contacto');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contactar
              </button>
            </div>

            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={stat.id} className="hero-stat-card">
                  <span className="hero-stat-value">
                    {counters[index]}+
                  </span>
                  <span className="hero-stat-label">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-avatar-wrapper animate-fade-in-up-delay">
            <div className="hero-avatar-ring">
              <div className="hero-avatar" aria-hidden="true">
                KA
              </div>
            </div>
            <p className="hero-avatar-caption">
              Disponible para oportunidades como&nbsp;
              <span>Desarrollador Frontend React</span>
            </p>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Proyectos destacados</h2>
            <p>
              Selección de proyectos que representan cómo trabajo rendimiento, diseño y experiencia de usuario.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((proyecto) => (
              <div
                key={proyecto.id}
                className={`project-card ${proyecto.destacado ? 'project-card-featured' : ''}`}
              >
                <div className="project-image-wrapper">
                  <div className="project-image">
                    <img
                      src={proyecto.imagen}
                      alt={`Captura del proyecto ${proyecto.nombre}`}
                    />
                  </div>

                  <div className="project-overlay">
                    <a
                      href={proyecto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button project-button-primary"
                    >
                      Ver demo
                    </a>
                    <a
                      href={proyecto.codigo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-outline project-button-outline"
                    >
                      Código
                    </a>
                  </div>
                </div>

                <div className="project-info">
                  <h3>{proyecto.nombre}</h3>
                  <p>{proyecto.descripcion}</p>
                  <div className="project-stack">
                    {proyecto.stack.map((tech) => (
                      <span key={tech} className="stack-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Habilidades</h2>
            <p>
              Tecnologías y herramientas que utilizo para construir productos listos para producción.
            </p>
          </div>

          <div className="skills-grid">
            {skillCategories.map((category) => (
              <Card key={category.title} title={category.title}>
                <div className="skills-badges">
                  {category.items.map((skill) => {
                    const Icon = skill.Icon;
                    return (
                      <div key={skill.nombre} className="skill-badge">
                        <span className="skill-icon">
                          <Icon size={18} />
                        </span>
                        <span className="skill-name">{skill.nombre}</span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="section">
        <div className="container about-section">
          <div className="about-text">
            <h2>Sobre mí</h2>
            <p>
              Soy desarrollador Frontend con foco en crear interfaces claras, accesibles y pensadas para el usuario.
              Actualmente profundizo en el ecosistema React y buenas prácticas de arquitectura en el frontend.
            </p>
            <p>
              Disfruto trabajar en productos donde pueda aportar tanto a la parte visual como a las decisiones técnicas,
              desde el rendimiento hasta la mantenibilidad del código.
            </p>
            <p>
              Estoy abierto a oportunidades de trabajo remoto o híbrido donde pueda seguir creciendo y aportar valor real
              a equipos de producto.
            </p>
            <a
              href="/CV_KEVIN_STEVEN_GAÑAN_AVILES.docx"
              download="CV_KEVIN_STEVEN_GAÑAN_AVILES.docx"
              className="button"
            >
              Descargar CV
            </a>
          </div>

          <div className="about-card">
            <Card title="Lo que me mueve">
              <ul className="about-list">
                <li>Construir interfaces que se sientan profesionales y modernas.</li>
                <li>Aprender constantemente nuevas tecnologías del ecosistema JavaScript.</li>
                <li>Trabajar en equipo y compartir conocimiento.</li>
                <li>Convertir ideas en productos funcionales.</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section section-alt">
        <div className="container contact-section">
          <div className="section-header">
            <h2>Contacto</h2>
            <p>
              ¿Tienes un proyecto en mente o una vacante que encaje con mi perfil? Hablemos.
            </p>
          </div>

          <div className="contact-grid">
            <Card title="Hablemos de tu proyecto">
              <p className="contact-text">
                Cuéntame sobre el reto, el contexto del negocio y qué te gustaría lograr.
                Responderé lo antes posible con ideas de cómo puedo ayudarte.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-method-label">Email</span>
                  <a href="mailto:kevinaviles140@gmail.com">kevinaviles140@gmail.com</a>
                </div>
                <div className="contact-method">
                  <span className="contact-method-label">Ubicación</span>
                  <p>Armenia, Colombia</p>
                </div>
                <div className="contact-method">
                  <span className="contact-method-label">Teléfono</span>
                  <a href="tel:+573113114318">+57 311 311 4318</a>
                </div>
              </div>
              <div className="social-links-contact">
                <a
                  href="https://github.com/kevinaviles123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/kevin-steven-ga%C3%B1an-aviles-07888430b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  LinkedIn
                </a>
              </div>
            </Card>

            <Card title="Envíame un mensaje">
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  // eslint-disable-next-line no-console
                  console.log('Formulario enviado:', Object.fromEntries(formData.entries()));
                  e.currentTarget.reset();
                }}
              >
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input id="name" name="name" type="text" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea id="message" name="message" rows="5" required />
                </div>
                <button type="submit" className="button">
                  Enviar mensaje
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}