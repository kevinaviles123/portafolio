import React, { useState } from 'react';
import Card from '../ui/Card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Contacto</h1>
          <p className="contact-description">
            ¿Tienes un proyecto en mente? ¡Me encantaría escucharlo!
            Contáctame y hablemos sobre cómo puedo ayudarte.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <Card className="contact-info">
              <h2>Información de Contacto</h2>
              <div className="contact-methods">
                <div className="contact-method">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  <div>
                    <h3>Email</h3>
                    <a href="kevinaviles140@gmail.com">kevinaviles140@gmail.com</a>
                  </div>
                </div>
                <div className="contact-method">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <div>
                    <h3>Ubicación</h3>
                    <p>Colombia , Armenia</p>
                  </div>
                </div>
                <div className="contact-method">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                  </svg>
                  <div>
                    <h3>Teléfono</h3>
                    <a href="tel:+525512345678">+57 311 311 4318</a>
                  </div>
                </div>
              </div>
              <div className="social-links-contact">
                <a href="https://github.com/kevinaviles123" target="_blank" rel="noopener noreferrer" className="social-link">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/kevin-steven-ga%C3%B1an-aviles-07888430b/" target="_blank" rel="noopener noreferrer" className="social-link">
                  LinkedIn
                </a>
              </div>
            </Card>

            <Card className="contact-form">
              <h2>Envíame un Mensaje</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="button">
                  Enviar Mensaje
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 