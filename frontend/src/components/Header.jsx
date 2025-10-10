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
              className={`text-sm font-medium hover:text-emerald-600 transition-colors ${
                isActive('/') ? 'text-emerald-700' : 'text-gray-600'
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/productos"
              data-testid="nav-products"
              className={`text-sm font-medium hover:text-emerald-600 transition-colors ${
                isActive('/productos') ? 'text-emerald-700' : 'text-gray-600'
              }`}
            >
              Productos
            </Link>
            
            {/* Soluciones Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors flex items-center">
                Soluciones
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    to="/eventos-kioskos"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition-colors border-l-2 border-transparent hover:border-cyan-500"
                    data-testid="nav-eventos"
                  >
                    <div className="font-medium">Arriendo Kioskos Eventos</div>
                    <div className="text-xs text-gray-500">Festivales y conferencias</div>
                  </Link>
                  <Link
                    to="/aeropuerto-charger"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors border-l-2 border-transparent hover:border-blue-500"
                    data-testid="nav-aeropuerto"
                  >
                    <div className="font-medium">Cargadores Aeropuertos</div>
                    <div className="text-xs text-gray-500">Estaciones de carga inteligentes</div>
                  </Link>
                  <Link
                    to="/alianza-justo"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-lime-50 hover:text-lime-700 transition-colors"
                    data-testid="nav-justo"
                  >
                    <div className="font-medium">Software POS Restaurantes</div>
                    <div className="text-xs text-gray-500">Alianza ALLCOM + JUSTO</div>
                  </Link>
                </div>\n              </div>
            </div>
            
            <Link
              to="/servicios"
              data-testid="nav-services"
              className={`text-sm font-medium hover:text-emerald-600 transition-colors ${
                isActive('/servicios') ? 'text-emerald-700' : 'text-gray-600'
              }`}
            >
              Servicios
            </Link>
            <Link
              to="/contacto"
              data-testid="nav-contact"
              className={`text-sm font-medium hover:text-emerald-600 transition-colors ${
                isActive('/contacto') ? 'text-emerald-700' : 'text-gray-600'
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