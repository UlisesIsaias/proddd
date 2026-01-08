import { useState } from 'react';
import Calendar from '../components/Calendar';
import AdminPanel from '../components/AdminPanel';
import { MessageCircle } from 'lucide-react';
import './Disponibilidad.css';

const Disponibilidad = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Botón oculto: 5 clicks rápidos en el título para acceder al admin
  const handleTitleClick = () => {
    setClickCount(prev => prev + 1);
    
    if (clickCount + 1 >= 5) {
      setShowAdmin(true);
      setClickCount(0);
    }

    // Reset del contador después de 2 segundos
    setTimeout(() => setClickCount(0), 2000);
  };

  if (showAdmin) {
    return (
      <div className="disponibilidad-page">
        <div className="disponibilidad-container">
          <AdminPanel />
        </div>
      </div>
    );
  }

  return (
    <div className="disponibilidad-page">
      <div className="disponibilidad-container">
        {/* Hero */}
        <section className="disponibilidad-hero">
          <div className="disponibilidad-badge">
            📅 DISPONIBILIDAD
          </div>
          <h1 className="disponibilidad-title" onClick={handleTitleClick}>
            Consulta Nuestro <span className="highlight">Calendario</span>
          </h1>
          <p className="disponibilidad-text">
            Revisa la disponibilidad de nuestros brincolines y aparta tu fecha ideal. 
            ¡No te quedes sin diversión! 🎉
          </p>
        </section>

        {/* Calendario */}
        <section className="calendar-section">
          <Calendar isAdmin={false} />
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-card">
            <div className="cta-icon">🎪</div>
            <h2 className="cta-title">¿Encontraste tu fecha perfecta?</h2>
            <p className="cta-text">
              Contáctanos por WhatsApp para confirmar tu reserva y obtener más información sobre nuestros servicios
            </p>
            <a 
              href="https://wa.me/527296974784?text=¡Hola!%20Vi%20el%20calendario%20y%20quiero%20apartar%20una%20fecha%20🎪"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              Reservar Ahora por WhatsApp
            </a>
          </div>
        </section>

        {/* Información adicional */}
        <section className="info-grid-section">
          <div className="info-grid">
            <div className="info-item">
              <div className="info-item-icon">✅</div>
              <h3 className="info-item-title">Apartado</h3>
              <p className="info-item-text">
                Días marcados en verde están apartados pero aún puedes consultarnos
              </p>
            </div>

            <div className="info-item">
              <div className="info-item-icon">🎪</div>
              <h3 className="info-item-title">Rentado</h3>
              <p className="info-item-text">
                Días marcados en rojo ya están confirmados y entregados
              </p>
            </div>

            <div className="info-item">
              <div className="info-item-icon">⚪</div>
              <h3 className="info-item-title">Disponible</h3>
              <p className="info-item-text">
                Días sin marca están completamente disponibles para tu evento
              </p>
            </div>

            <div className="info-item">
              <div className="info-item-icon">📞</div>
              <h3 className="info-item-title">24/7</h3>
              <p className="info-item-text">
                Atención inmediata por WhatsApp o llamada telefónica
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Disponibilidad;