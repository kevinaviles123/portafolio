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
          <a 
            href="/CV_Kevin_Steven_Gañan_Aviles_Frontend.pdf" 
            download="CV_Kevin_Steven_Gañan_Aviles_Frontend.pdf"
            className="button button-primary"
            style={{ marginTop: '1rem', display: 'inline-block' }}
          >
            Descargar mi CV
          </a>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <Card title="Mi Historia">
              <p>
                Actualmente soy aprendiz en desarrollo de software en el SENA,
                donde estoy adquiriendo habilidades fundamentales en programación
                y desarrollo de proyectos académicos.
              </p>
              <p>
                Me apasiona el desarrollo web y estoy aprendiendo a crear
                aplicaciones modernas utilizando tecnologías actuales.
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

            <Card title="Formación">
              <ul>
                <li>
                  <h3>Aprendiz en Desarrollo de Software</h3>
                  <p>SENA - Actualmente</p>
                  <ul>
                    <li>Formación en fundamentos de programación</li>
                    <li>Desarrollo de proyectos académicos</li>
                    <li>Aprendizaje de tecnologías web modernas</li>
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