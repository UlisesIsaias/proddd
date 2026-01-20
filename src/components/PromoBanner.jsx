import { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import './PromoBanner.css';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const promos = [
    {
      id: 1,
      texto: "🎉 ¡9% DE DESCUENTO en tu PRIMERA RENTA! 🎉",
      subTexto: "Usa el código: PRIMERAVEZ",
      color: "promo-1"
    },
    {
      id: 2,
      texto: "🎪 ¡ENVÍO GRATIS en San Felipe y zonas cercanas! 🚚",
      subTexto: "Instalación incluida sin costo extra",
      color: "promo-2"
    },
    {
      id: 3,
      texto: "✨ ¡PAQUETES ESPECIALES! Ahorra hasta 15% ✨",
      subTexto: "Renta 2 o más artículos y obtén descuento",
      color: "promo-3"
    }
  ];

  const [currentPromo, setCurrentPromo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [promos.length]);

  if (!isVisible) return null;

  return (
    <div className={`promo-banner ${promos[currentPromo].color}`}>
      <div className="promo-content">
        <Sparkles className="promo-icon" size={24} />
        <div className="promo-text-container">
          <p className="promo-text">{promos[currentPromo].texto}</p>
          <p className="promo-subtext">{promos[currentPromo].subTexto}</p>
        </div>
        <Sparkles className="promo-icon" size={24} />
      </div>

      {/* Indicadores */}
      <div className="promo-indicators">
        {promos.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentPromo ? 'active' : ''}`}
            onClick={() => setCurrentPromo(index)}
            aria-label={`Ver promoción ${index + 1}`}
          />
        ))}
      </div>

      {/* Botón cerrar */}
      <button 
        className="promo-close"
        onClick={() => setIsVisible(false)}
        aria-label="Cerrar banner"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default PromoBanner;