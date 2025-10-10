import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, MessageCircle } from 'lucide-react';
import { QuoteContext } from '../App';
import { Button } from './ui/button';

const Header = ({ onOpenAISearch }) => {
  const location = useLocation();
  const { quoteItems } = useContext(QuoteContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" data-testid="logo-link">
            <img 
              src="/logo-allcom.png" 
              alt="ALLCOM" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              data-testid="nav-home"
              className={`text-sm font-medium hover:text-slate-700 transition-colors ${
                isActive('/') ? 'text-slate-900' : 'text-gray-600'
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/productos"
              data-testid="nav-products"
              className={`text-sm font-medium hover:text-slate-700 transition-colors ${
                isActive('/productos') ? 'text-slate-900' : 'text-gray-600'
              }`}
            >
              Productos
            </Link>
            <Link
              to="/servicios"
              data-testid="nav-services"
              className={`text-sm font-medium hover:text-slate-700 transition-colors ${
                isActive('/servicios') ? 'text-slate-900' : 'text-gray-600'
              }`}
            >
              Servicios
            </Link>
            <Link
              to="/contacto"
              data-testid="nav-contact"
              className={`text-sm font-medium hover:text-slate-700 transition-colors ${
                isActive('/contacto') ? 'text-slate-900' : 'text-gray-600'
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenAISearch}
              data-testid="ai-search-button"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Búsqueda inteligente"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            <Link
              to="/cotizacion"
              data-testid="quote-cart-button"
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Carrito de cotización"
            >
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              {quoteItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-slate-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {quoteItems.length}
                </span>
              )}
            </Link>

            <Button
              data-testid="whatsapp-header-button"
              className="hidden md:flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </Button>

            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2"
              data-testid="mobile-menu-button"
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden py-4 border-t border-gray-200" data-testid="mobile-menu">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-sm font-medium text-gray-600 hover:text-slate-900">Inicio</Link>
              <Link to="/productos" className="text-sm font-medium text-gray-600 hover:text-slate-900">Productos</Link>
              <Link to="/servicios" className="text-sm font-medium text-gray-600 hover:text-slate-900">Servicios</Link>
              <Link to="/contacto" className="text-sm font-medium text-gray-600 hover:text-slate-900">Contacto</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;