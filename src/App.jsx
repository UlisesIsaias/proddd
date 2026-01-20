import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PromoBanner from './components/PromoBanner';
import Home from './pages/Home';
import Rentas from './pages/Rentas';
import Disponibilidad from './pages/Disponibilidad';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <PromoBanner />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rentas" element={<Rentas />} />
            <Route path="/disponibilidad" element={<Disponibilidad />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;