import React from 'react';
import Card from '../ui/Card';

export default function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>Sobre Mí</h1>
          <p className="about-description">
            Soy un apasionado desarrollador web con experiencia en crear
            aplicaciones web modernas y escalables.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <Card title="Mi Historia">
              <p>
                Comencé mi viaje en el desarrollo web hace varios años,
                fascinado por la capacidad de crear soluciones digitales
                que impactan positivamente en la vida de las personas.
              </p>
              <p>
                Me especializo en el desarrollo de aplicaciones web modernas
                utilizando las últimas tecnologías y mejores prácticas.
              </p>
            </Card>

            <Card title="Educación">
              <ul>
                <li>
                  <h3>Ingeniería en Sistemas</h3>
                  <p>Universidad XYZ - 2020</p>
                </li>
                <li>
                  <h3>Certificación en Desarrollo Web</h3>
                  <p>Platzi - 2021</p>
                </li>
              </ul>
            </Card>

            <Card title="Experiencia">
              <ul>
                <li>
                  <h3>Desarrollador web</h3>
                  <p>Empresa ABC - 2021-Presente</p>
                  <ul>
                    <li>Desarrollo de aplicaciones web con React y Node.js</li>
                    <li>Optimización de rendimiento</li>
                  </ul>
                </li>
              </ul>
            </Card>

            <Card title="Hobbies">
              <ul>
                <li>Programación de proyectos personales</li>
                <li>Lectura de libros técnicos</li>
                <li>Contribuir a proyectos open source</li>
                <li>Fotografía</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}