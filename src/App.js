import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import { CartProvider } from './context/CartContext';

function App() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <CartProvider>
      <div className="App">
        <div className="page-wrap">
          <Header />
          <Hero onViewMenu={scrollToMenu} />
          <Menu />
          <AppDownload />
        </div>
        <Footer />
        <CartModal />
      </div>
    </CartProvider>
  );
}

export default App;
