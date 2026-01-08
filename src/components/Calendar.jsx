import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import './Calendar.css';

const Calendar = ({ isAdmin = false }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState({});
  const [loading, setLoading] = useState(true);

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  // Cargar datos de Firebase
  useEffect(() => {
    loadCalendarData();
  }, [currentDate]);

  const loadCalendarData = async () => {
    try {
      setLoading(true);
      const monthKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}`;
      const docRef = doc(db, 'calendario', monthKey);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setSelectedDates(docSnap.data().dates || {});
      } else {
        setSelectedDates({});
      }
    } catch (error) {
      console.error('Error al cargar calendario:', error);
      setSelectedDates({});
    } finally {
      setLoading(false);
    }
  };

  const saveCalendarData = async (newDates) => {
    try {
      const monthKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}`;
      const docRef = doc(db, 'calendario', monthKey);
      await setDoc(docRef, { dates: newDates });
    } catch (error) {
      console.error('Error al guardar calendario:', error);
    }
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateClick = (day) => {
    if (!isAdmin) return;

    const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`;
    const currentStatus = selectedDates[dateKey];
    
    let newStatus;
    if (!currentStatus) {
      newStatus = 'apartado'; // Verde
    } else if (currentStatus === 'apartado') {
      newStatus = 'rentado'; // Rojo
    } else {
      newStatus = null; // Quitar estado
    }

    const newDates = { ...selectedDates };
    if (newStatus) {
      newDates[dateKey] = newStatus;
    } else {
      delete newDates[dateKey];
    }

    setSelectedDates(newDates);
    saveCalendarData(newDates);
  };

  const getDateStatus = (day) => {
    const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`;
    return selectedDates[dateKey];
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);
  const blanks = Array(startingDayOfWeek).fill(null);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="calendar-component">
      {/* Header del calendario */}
      <div className="calendar-header">
        <button className="calendar-nav-btn" onClick={handlePrevMonth}>
          <ChevronLeft size={24} />
        </button>
        
        <div className="calendar-title">
          <CalendarIcon size={24} />
          <span>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
        </div>
        
        <button className="calendar-nav-btn" onClick={handleNextMonth}>
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Leyenda */}
      <div className="calendar-legend">
        <div className="legend-item">
          <div className="legend-color legend-available"></div>
          <span>Disponible</span>
        </div>
        <div className="legend-item">
          <div className="legend-color legend-apartado"></div>
          <span>Apartado</span>
        </div>
        <div className="legend-item">
          <div className="legend-color legend-rentado"></div>
          <span>Rentado</span>
        </div>
      </div>

      {/* Grid del calendario */}
      <div className="calendar-grid">
        {/* Nombres de los días */}
        {dayNames.map((day) => (
          <div key={day} className="calendar-day-name">
            {day}
          </div>
        ))}

        {/* Días vacíos al inicio */}
        {blanks.map((_, index) => (
          <div key={`blank-${index}`} className="calendar-day blank"></div>
        ))}

        {/* Días del mes */}
        {daysArray.map((day) => {
          const status = getDateStatus(day);
          const isToday = 
            day === new Date().getDate() &&
            currentDate.getMonth() === new Date().getMonth() &&
            currentDate.getFullYear() === new Date().getFullYear();

          return (
            <div
              key={day}
              className={`calendar-day ${status || ''} ${isToday ? 'today' : ''} ${isAdmin ? 'admin-mode' : ''}`}
              onClick={() => handleDateClick(day)}
            >
              <span className="day-number">{day}</span>
              {status && <span className="day-status-icon">
                {status === 'apartado' ? '✅' : '🎪'}
              </span>}
            </div>
          );
        })}
      </div>

      {isAdmin && (
        <div className="calendar-admin-info">
          <p className="admin-info-text">
            🔐 Modo Admin: Click para cambiar estado (Disponible → Apartado → Rentado)
          </p>
        </div>
      )}

      {loading && (
        <div className="calendar-loading">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
};

export default Calendar;