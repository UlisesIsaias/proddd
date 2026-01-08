import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import productosData from '../data/products.json';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      
      <section className="products-section">
        <div className="products-container">
          <div className="products-header">
            <div className="products-badge">
              ✨ NUESTRAS OPCIONES ✨
            </div>
            <h2 className="products-title">
              ELIGE TU <span className="highlight">AVENTURA</span>
            </h2>
          </div>

          <div className="products-grid">
            {productosData.brincolines.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;