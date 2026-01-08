import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Decoración superior */}
      <div className="footer-decoration">
        <div className="decoration-wave"></div>
        <div className="floating-icons">
          <span className="float-icon" style={{ left: '10%', animationDelay: '0s' }}>🎪</span>
          <span className="float-icon" style={{ left: '30%', animationDelay: '1s' }}>🎉</span>
          <span className="float-icon" style={{ left: '50%', animationDelay: '0.5s' }}>⭐</span>
          <span className="float-icon" style={{ left: '70%', animationDelay: '1.5s' }}>🎈</span>
          <span className="float-icon" style={{ left: '90%', animationDelay: '0.8s' }}>✨</span>
        </div>
      </div>

      <div className="footer-container">
        {/* Columna 1: Branding */}
        <div className="footer-column">
          <div className="footer-logo">
            <div className="footer-logo-icon">B2</div>
            <div className="footer-logo-text">
              <span className="footer-logo-title">BRINK2</span>
              <span className="footer-logo-subtitle">READY TO JUMP ✨</span>
            </div>
          </div>
          <p className="footer-description">
            ✨ La mejor opción en renta de brincolines. Diversión segura y garantizada para todos tus eventos. ¡Haz que cada celebración sea inolvidable! 💫
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div className="footer-column">
          <h3 className="footer-title">📞 CONTACTO</h3>
          <div className="footer-links">
            <a href="https://wa.me/527296974784" className="footer-contact-item" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
            <a href="tel:+527296974784" className="footer-contact-item">
              <Phone size={20} />
              <span>Llamar ahora</span>
            </a>
            <div className="footer-contact-item">
              <MapPin size={20} />
              <span>San Felipe Coamango</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={20} />
              <span>24/7 Disponible</span>
            </div>
          </div>
        </div>

        {/* Columna 3: Acciones Rápidas */}
        <div className="footer-column">
          <h3 className="footer-title">🚀 ACCIONES RÁPIDAS</h3>
          <div className="footer-actions">
            <a 
              href="https://wa.me/527296974784?text=¡Hola!%20Quiero%20hacer%20una%20cotización%20de%20renta%20🎪" 
              className="footer-btn footer-btn-cotizacion"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Hacer cotización
            </a>
            <a 
              href="/Disponibilidad" 
              className="footer-btn footer-btn-disponibilidad"
            >
              📅 Consultar disponibilidad
            </a>
            <a 
              href="https://wa.me/527296974784?text=¡Hola!%20Quiero%20información%20sobre%20paquetes%20especiales%20🎉" 
              className="footer-btn footer-btn-paquetes"
              target="_blank"
              rel="noopener noreferrer"
            >
              🎁 Ver paquetes especiales
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            © {currentYear} <span className="brand-name">BRINK2</span> 🎪 ¡Todos los derechos reservados para la diversión U! ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;