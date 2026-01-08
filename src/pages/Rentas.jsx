import ProductCard from '../components/ProductCard';
import productosData from '../data/products.json';
import { MessageCircle, Phone } from 'lucide-react';
import './Rentas.css';

const Rentas = () => {
  return (
    <div className="rentas-page">
      {/* Hero de Rentas */}
      <section className="rentas-hero">
        <div className="rentas-hero-container">
          <div className="rentas-hero-badge">
            🎪 RENTAS BRINK2
          </div>
          <h1 className="rentas-hero-title">
            Diversión <span className="highlight-rosa">Segura</span> y <span className="highlight-amarillo">Garantizada</span>
          </h1>
          <p className="rentas-hero-text">
            Explora nuestras opciones de renta y encuentra el brincolín perfecto para tu evento. 
            Precios accesibles y calidad premium 🎉
          </p>

          <div className="rentas-hero-buttons">
            <a 
              href="https://wa.me/527296974784?text=¡Hola!%20Quiero%20información%20sobre%20rentas%20🎪"
              className="rentas-btn rentas-btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              Cotizar por WhatsApp
            </a>
            <a 
              href="tel:+527296974784"
              className="rentas-btn rentas-btn-call"
            >
              <Phone size={20} />
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="rentas-products-section">
        <div className="rentas-products-container">
          <div className="products-grid">
            {productosData.brincolines.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>

      {/* Info adicional */}
      <section className="rentas-info-section">
        <div className="rentas-info-container">
          <div className="info-card">
            <div className="info-icon">🚚</div>
            <h3 className="info-title">Entrega Incluida</h3>
            <p className="info-text">
              Servicio de entrega y recolección en San Felipe, Dongu, San Juan Tuxtepec y Santa Elena
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">🛠️</div>
            <h3 className="info-title">Instalación Profesional</h3>
            <p className="info-text">
              Instalamos y limpiamos todo por ti. Solo disfruta del evento sin preocupaciones
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">✅</div>
            <h3 className="info-title">Certificación ASTM</h3>
            <p className="info-text">
              Todos nuestros brincolines cumplen con estándares de seguridad certificados
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">💯</div>
            <h3 className="info-title">Limpieza Garantizada</h3>
            <p className="info-text">
              Desinfección completa antes y después de cada renta para tu tranquilidad
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rentas;