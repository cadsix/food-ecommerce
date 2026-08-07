import './App.css';
import './styles/DarkMode.css';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Menu from './components/Menu';
import SpecialOffer from './components/SpecialOffer';
import Newsletter from './components/Newsletter';
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
        <Header />

        <div className="wrap">
          <Hero onViewMenu={scrollToMenu} />
        </div>

        <HowItWorks />

        <div className="wrap">
          <Menu />
          <SpecialOffer />
          <Newsletter />
          <AppDownload />
        </div>

        <Footer />
        <CartModal />
      </div>
    </CartProvider>
  );
}

export default App;
