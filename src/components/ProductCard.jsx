import { useState } from 'react';
import { Users, Ruler, Tent, Heart, Eye, EyeOff, Rocket } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ producto }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product-card">
      {/* Badges superiores */}
      <div className="product-badges">
        {producto.premium && (
          <span className="product-badge badge-premium">
            ⭐ PREMIUM
          </span>
        )}
        {producto.nuevo && (
          <span className="product-badge badge-nuevo">
            🆕 ¡NUEVO!
          </span>
        )}
      </div>

      {/* Imagen */}
      <div className="product-image-container">
        <img 
          src={producto.imagen} 
          alt={producto.nombre}
          className="product-image"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1530923692395-3421estou7e8?w=600&h=400&fit=crop';
          }}
        />
        
        {/* Botón favorito */}
        <button 
          className={`btn-favorite ${isFavorite ? 'active' : ''}`}
          onClick={toggleFavorite}
          aria-label="Agregar a favoritos"
        >
          <Heart size={20} fill={isFavorite ? '#ff69b4' : 'none'} />
        </button>

        {/* Decoración */}
        <div className="product-decoration">🎪</div>
      </div>

      {/* Contenido */}
      <div className="product-content">
        <h3 className="product-name">{producto.nombre}</h3>

        {/* Precios */}
        {producto.disponible ? (
          <div className="product-prices">
            {producto.precios.hora && producto.precios.hora !== 1 && (
              <div className="price-item">
                <span className="price-label">⏰ Por hora:</span>
                <span className="price-value">${producto.precios.hora}</span>
              </div>
            )}
            <div className="price-item">
              <span className="price-label">📅 Renta por día:</span>
              <span className="price-value">${producto.precios.dia}</span>
            </div>
            <div className="price-item">
              <span className="price-label">🎉 Fin de semana:</span>
              <span className="price-value">${producto.precios.finSemana}</span>
            </div>
          </div>
        ) : (
          <div className="product-coming-soon">
            <span className="coming-soon-text">PRÓXIMAMENTE</span>
            <span className="coming-soon-price">${producto.precios.dia}</span>
          </div>
        )}

        {/* Características rápidas */}
        <div className="product-quick-features">
          {producto.caracteristicas.map((caracteristica, index) => (
            <div key={index} className="quick-feature">
              {caracteristica}
            </div>
          ))}
        </div>

        {/* Botones de acción */}
        <div className="product-actions">
          <button 
            className="product-btn btn-toggle-details"
            onClick={toggleDetails}
          >
            {showDetails ? (
              <>
                <EyeOff size={18} />
                👇 OCULTAR DETALLES
              </>
            ) : (
              <>
                <Eye size={18} />
                👀 VER DETALLES
              </>
            )}
          </button>

          {producto.disponible && (
            <a 
              href={`https://wa.me/527296974784?text=¡Hola!%20Quiero%20rentar%20el%20${encodeURIComponent(producto.nombre)}%20🎪`}
              className="product-btn btn-rent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Rocket size={18} />
              🚀 RENTAR AHORA
            </a>
          )}
        </div>

        {/* Detalles expandibles */}
        {showDetails && (
          <div className="product-details">
            <div className="details-section">
              <h4 className="details-title">📏 ESPECIFICACIONES</h4>
              
              {/* Dimensiones */}
              {Object.entries(producto.especificaciones.dimensiones).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <Ruler className="spec-icon" size={18} />
                  <div className="spec-content">
                    <span className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                    <span className="spec-value">{value}</span>
                  </div>
                </div>
              ))}

              {/* Capacidad */}
              {Object.entries(producto.especificaciones.capacidad).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <Users className="spec-icon" size={18} />
                  <div className="spec-content">
                    <span className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                    <span className="spec-value">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Seguridad */}
            <div className="details-section">
              <h4 className="details-title">🛡️ SEGURIDAD</h4>
              {Object.entries(producto.especificaciones.seguridad).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <span className="spec-icon">✅</span>
                  <div className="spec-content">
                    <span className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                    <span className="spec-value">{typeof value === 'boolean' ? (value ? 'Sí' : 'No') : value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Incluye */}
            <div className="details-section">
              <h4 className="details-title">📦 INCLUYE</h4>
              <ul className="includes-list">
                {producto.especificaciones.incluye.map((item, index) => (
                  <li key={index} className="include-item">
                    <span className="include-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="details-section security-section">
              <div className="security-badge">
                <span className="security-icon">✅</span>
                <span className="security-text">Certificado de seguridad</span>
              </div>
              <p className="security-description">
                {producto.textoExtra}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;