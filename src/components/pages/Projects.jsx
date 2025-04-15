import React from 'react';
import Card from '../ui/Card';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, sistema de pago y panel de administración.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/images/ecommerce.jpg',
    demoLink: 'https://ecommerce-demo.kevindev.com',
    githubLink: 'https://github.com/kevindev/ecommerce',
    deployment: 'Desplegado en Vercel con CI/CD automatizado'
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'Aplicación de gestión de tareas con autenticación, notificaciones y sincronización en tiempo real.',
    technologies: ['React', 'Firebase', 'Material UI'],
    image: '/images/taskmanager.jpg',
    demoLink: 'https://tasks.kevindev.com',
    githubLink: 'https://github.com/kevindev/taskmanager',
    deployment: 'Desplegado en Firebase Hosting con actualización automática'
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'Plataforma de blogging con sistema de comentarios, búsqueda y categorización de posts.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
    image: '/images/blog.jpg',
    demoLink: 'https://blog.kevindev.com',
    githubLink: 'https://github.com/kevindev/blog',
    deployment: 'Desplegado en Railway con base de datos PostgreSQL'
  }
];

export default function Projects() {
  return (
    <div className="projects">
      <section className="projects-hero">
        <div className="container">
          <h1>Mis Proyectos</h1>
          <p className="projects-description">
            Aquí puedes ver algunos de mis proyectos más recientes y destacados.
            Cada proyecto está desplegado y disponible para su demostración en vivo.
          </p>
        </div>
      </section>

      <section className="projects-showcase">
        <div className="container">
          <div className="projects-list">
            {projects.map((project) => (
              <Card key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="button button-outline"
                    >
                      <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Repositorio
                    </a>
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="button button-primary"
                    >
                      <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      Ver Demo
                    </a>
                  </div>
                  <div className="project-deployment">
                    <span className="deployment-tag">
                      <svg className="deployment-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      {project.deployment}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}