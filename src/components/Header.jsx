import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-icon">B2</div>
          <div className="logo-text">
            <span className="logo-title">BRINK2</span>
            <span className="logo-subtitle">READY TO JUMP ✨</span>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/')}`}
            onClick={() => setIsMenuOpen(false)}
          >
            INICIO
          </Link>
          <Link 
            to="/Rentas" 
            className={`nav-link ${isActive('/rentas')}`}
            onClick={() => setIsMenuOpen(false)}
          >
            RENTAS
          </Link>
          <Link 
            to="/Disponibilidad" 
            className={`nav-link btn-disponibilidad ${isActive('/disponibilidad')}`}
            onClick={() => setIsMenuOpen(false)}
          >
          <Calendar size={18} />
            DISPONIBILIDAD 
          </Link>
           <a 
          href="tel:7296974784" 
          className="btn-llamar desktop-only"
        >
          <Phone size={18} />
          LLAMAR
        </a>
        </nav>
        {/* Botones Mobile */}
        <div className="mobile-actions">
          <a 
            href="tel:7296974784" 
            className="btn-mobile btn-mobile-llamar"
            aria-label="Llamar"
          >
            <Phone size={18} />
          </a>
          <Link 
            to="/disponibilidad" 
            className="btn-mobile btn-mobile-disponibilidad"
            aria-label="Disponibilidad"
          >
            <Calendar size={18} />
          </Link>
        </div>
        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;