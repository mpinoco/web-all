import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '@/App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import QuoteCart from './pages/QuoteCart';
import EventosKioskos from './pages/EventosKioskos';
import AeropuertoCharger from './pages/AeropuertoCharger';
import AlianzaJusto from './pages/AlianzaJusto';
import AlianzaIMIN from './pages/AlianzaIMIN';
import AlianzaWintec from './pages/AlianzaWintec';
import AlianzaMarques from './pages/AlianzaMarques';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AISearchModal from './components/AISearchModal';
import { Toaster } from './components/ui/sonner';

export const QuoteContext = React.createContext();

function App() {
  const [quoteItems, setQuoteItems] = useState([]);
  const [showAISearch, setShowAISearch] = useState(false);

  // Load quote items from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('quoteItems');
    if (saved) {
      setQuoteItems(JSON.parse(saved));
    }
  }, []);

  // Save quote items to localStorage
  useEffect(() => {
    localStorage.setItem('quoteItems', JSON.stringify(quoteItems));
  }, [quoteItems]);

  const addToQuote = (product) => {
    const existingItem = quoteItems.find(item => item.product_id === product.id);
    if (existingItem) {
      setQuoteItems(quoteItems.map(item => 
        item.product_id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setQuoteItems([...quoteItems, {
        product_id: product.id,
        product_name: product.name,
        quantity: 1,
        notes: ''
      }]);
    }
  };

  const updateQuoteItem = (productId, updates) => {
    setQuoteItems(quoteItems.map(item =>
      item.product_id === productId ? { ...item, ...updates } : item
    ));
  };

  const removeFromQuote = (productId) => {
    setQuoteItems(quoteItems.filter(item => item.product_id !== productId));
  };

  const clearQuote = () => {
    setQuoteItems([]);
  };

  return (
    <QuoteContext.Provider value={{ 
      quoteItems, 
      addToQuote, 
      updateQuoteItem, 
      removeFromQuote,
      clearQuote
    }}>
      <div className="App">
        <BrowserRouter>
          <Header onOpenAISearch={() => setShowAISearch(true)} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/producto/:slug" element={<ProductDetail />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/cotizacion" element={<QuoteCart />} />
            <Route path="/eventos-kioskos" element={<EventosKioskos />} />
            <Route path="/aeropuerto-charger" element={<AeropuertoCharger />} />
            <Route path="/alianza-justo" element={<AlianzaJusto />} />
            <Route path="/alianza-imin" element={<AlianzaIMIN />} />
            <Route path="/alianza-wintec" element={<AlianzaWintec />} />
            <Route path="/alianza-marques" element={<AlianzaMarques />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
          <AISearchModal open={showAISearch} onClose={() => setShowAISearch(false)} />
          <Toaster position="top-right" />
        </BrowserRouter>
      </div>
    </QuoteContext.Provider>
  );
}

export default App;