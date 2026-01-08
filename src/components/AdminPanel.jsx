import { useState } from 'react';
import { Lock, Unlock, Eye, EyeOff } from 'lucide-react';
import Calendar from './Calendar';
import './AdminPanel.css';

const AdminPanel = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  
  const ADMIN_PASSWORD = 'brink23000_perry';

  const handleUnlock = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('❌ Contraseña incorrecta');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleLock = () => {
    setIsUnlocked(false);
    setPassword('');
  };

  if (!isUnlocked) {
    return (
      <div className="admin-panel">
        <div className="admin-lock-container">
          <div className="lock-icon-wrapper">
            <Lock size={48} />
          </div>
          
          <h2 className="lock-title">🔐 Panel de Administración</h2>
          <p className="lock-description">
            Ingresa la contraseña para acceder al control del calendario
          </p>

          <form onSubmit={handleUnlock} className="lock-form">
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="password-input"
                autoFocus
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <button type="submit" className="unlock-btn">
              <Unlock size={20} />
              Desbloquear
            </button>
          </form>

          <div className="lock-hint">
            💡 Pista: Si olvidaste la contraseña????
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel unlocked">
      <div className="admin-header">
        <div className="admin-header-content">
          <div className="admin-title-wrapper">
            <div className="admin-icon">🔓</div>
            <div>
              <h2 className="admin-title">Panel de Administración</h2>
              <p className="admin-subtitle">Controla la disponibilidad del calendario</p>
            </div>
          </div>
          
          <button className="lock-btn" onClick={handleLock}>
            <Lock size={20} />
            Cerrar Sesión
          </button>
        </div>
      </div>

      <div className="admin-content">
        <div className="admin-instructions">
          <h3 className="instructions-title">📋 Instrucciones</h3>
          <ul className="instructions-list">
            <li>✅ <strong>Click 1:</strong> Marca el día como <span className="tag-apartado">Apartado</span></li>
            <li>🎪 <strong>Click 2:</strong> Marca el día como <span className="tag-rentado">Rentado</span></li>
            <li>⚪ <strong>Click 3:</strong> Regresa a disponible (sin marca)</li>
          </ul>
        </div>

        <Calendar isAdmin={true} />
      </div>
    </div>
  );
};

export default AdminPanel;