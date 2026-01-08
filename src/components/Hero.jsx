import { Rocket, DollarSign, Phone } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Columna Izquierda - Texto */}
        <div className="hero-content">
          <div className="hero-badge">
            ✨ DIVERSIÓN GARANTIZADA ✨
          </div>
          
          <h1 className="hero-title">
            BRINK<span className="hero-title-highlight">2</span>
          </h1>
          
          <h2 className="hero-subtitle">
            RENTA TU BRINCOLÍN ✨
          </h2>
          
          <div className="hero-description">
            <p className="hero-text">
              🎉 Diversión segura para tus pequeños y precios que te sorprenderán 🎈
            </p>
          </div>

          {/* Botones de acción */}
          <div className="hero-buttons">
            <a 
              href="https://wa.me/527296974784?text=¡Hola!%20Quiero%20rentar%20un%20brincolín%20🎪" 
              className="hero-btn hero-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Rocket size={20} />
              RENTAR AHORA
            </a>
            <a 
              href="/Rentas" 
              className="hero-btn hero-btn-secondary"
            >
              <DollarSign size={20} />
              VER PRECIOS
            </a>
          </div>

          {/* Características */}
          <div className="hero-features">
            <div className="hero-feature">
              <div className="feature-icon">100%</div>
              <div className="feature-text">
                <span className="feature-emoji">🛡️</span> SEGURO
              </div>
            </div>
            <div className="hero-feature">
              <div className="feature-icon">24/7</div>
              <div className="feature-text">
                <span className="feature-emoji">📞</span> SOPORTE
              </div>
            </div>
            <div className="hero-feature">
              <div className="feature-icon">⭐⭐⭐⭐⭐</div>
              <div className="feature-text">
                <span className="feature-emoji">🏆</span> CALIDAD
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha - Imagen */}
        <div className="hero-image-container">
          <div className="hero-badge-nuevo">
            🆕 ¡NUEVO!
          </div>
          
          <div className="hero-image-wrapper">
            <img 
              src="/images/brincolin-hero.jpg" 
              alt="Brincolín BRINK2" 
              className="hero-image"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1530923692395-3421estou7e8?w=800&h=600&fit=crop';
              }}
            />
            <div className="hero-image-overlay">
              <div className="overlay-badge">
                ¡GENIAL! 😍
              </div>
            </div>
          </div>

          {/* Decoraciones flotantes */}
          <div className="floating-decoration" style={{ top: '10%', left: '5%' }}>🎪</div>
          <div className="floating-decoration" style={{ top: '20%', right: '5%' }}>🎉</div>
          <div className="floating-decoration" style={{ bottom: '20%', left: '10%' }}>⭐</div>
          <div className="floating-decoration" style={{ bottom: '10%', right: '10%' }}>🎈</div>
        </div>
      </div>

      {/* Sección de Info */}
      <div className="hero-info-section">
        <div className="hero-info-container">
          <div className="hero-info-badge">
            ✨ NUESTRAS OPCIONES ✨
          </div>
          <h3 className="hero-info-title">
            ELIGE TU <span className="highlight-text">AVENTURA</span>
          </h3>
          <p className="hero-info-text">
            🎉 Todos nuestros brincolines incluyen entrega recolección en San Felipe, Dongu, San Juan Tuxtepec, Santa Elena, instalación y limpieza. Seguridad y diversión garantizada con certificación ASTM 🎈
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;