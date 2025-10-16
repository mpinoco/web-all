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
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              data-testid="nav-home"
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                isActive('/') ? 'text-blue-700' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            
            {/* Ecosistemas Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                Ecosistemas
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    to="/ecosistema-retail"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors border-l-4 border-transparent hover:border-emerald-500"
                    data-testid="nav-retail"
                  >
                    <div className="font-bold flex items-center gap-2">
                      🛒 Allcom Retail
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Kioscos, POS, Balanzas + Software</div>
                  </Link>
                  <Link
                    to="/ecosistema-banca"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors border-l-4 border-transparent hover:border-blue-500"
                    data-testid="nav-banca"
                  >
                    <div className="font-bold flex items-center gap-2">
                      🏦 Allcom Banca
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Tótems, Colas Digitales, Atención</div>
                  </Link>
                  <Link
                    to="/ecosistema-industria"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors border-l-4 border-transparent hover:border-gray-700"
                    data-testid="nav-industria"
                  >
                    <div className="font-bold flex items-center gap-2">
                      🏭 Allcom Industria
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Servidores, Pesaje, Logística</div>
                  </Link>
                  <Link
                    to="/ecosistema-smart-city"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 transition-colors border-l-4 border-transparent hover:border-orange-500"
                    data-testid="nav-smartcity"
                  >
                    <div className="font-bold flex items-center gap-2">
                      🌆 Allcom Smart City
                    </div>
                    <div className="text-xs text-gray-500 mt-1">IoT, Carga, Control Urbano</div>
                  </Link>
                  <Link
                    to="/ecosistema-salud"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors border-l-4 border-transparent hover:border-teal-500"
                    data-testid="nav-salud"
                  >
                    <div className="font-bold flex items-center gap-2">
                      ⚕️ Allcom Salud
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Tótems Hospitalarios, Turnos</div>
                  </Link>
                </div>
              </div>
            </div>
            
            <Link
              to="/tecnologia"
              data-testid="nav-tecnologia"
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                isActive('/tecnologia') ? 'text-blue-700' : 'text-gray-600'
              }`}
            >
              Tecnología
            </Link>
            
            <Link
              to="/casos-partners"
              data-testid="nav-casos"
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                isActive('/casos-partners') ? 'text-blue-700' : 'text-gray-600'
              }`}
            >
              Casos y Partners
            </Link>
            
            <Link
              to="/cultura-allcom"
              data-testid="nav-cultura"
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                isActive('/cultura-allcom') ? 'text-blue-700' : 'text-gray-600'
              }`}
            >
              Cultura Allcom
            </Link>
            
            <Link
              to="/contacto"
              data-testid="nav-contact"
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                isActive('/contacto') ? 'text-blue-700' : 'text-gray-600'
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
              <Link to="/" className="text-sm font-medium text-gray-600 hover:text-blue-900">Home</Link>
              
              {/* Ecosistemas Section */}
              <div className="border-l-2 border-blue-500 pl-3">
                <div className="text-xs font-semibold text-blue-700 mb-2">ECOSISTEMAS</div>
                <Link to="/ecosistema-retail" className="block text-sm font-medium text-gray-600 hover:text-emerald-900 mb-2">🛒 Allcom Retail</Link>
                <Link to="/ecosistema-banca" className="block text-sm font-medium text-gray-600 hover:text-blue-900 mb-2">🏦 Allcom Banca</Link>
                <Link to="/ecosistema-industria" className="block text-sm font-medium text-gray-600 hover:text-gray-900 mb-2">🏭 Allcom Industria</Link>
                <Link to="/ecosistema-smart-city" className="block text-sm font-medium text-gray-600 hover:text-orange-900 mb-2">🌆 Allcom Smart City</Link>
                <Link to="/ecosistema-salud" className="block text-sm font-medium text-gray-600 hover:text-teal-900 mb-2">⚕️ Allcom Salud</Link>
              </div>
              
              <Link to="/tecnologia" className="text-sm font-medium text-gray-600 hover:text-blue-900">Tecnología</Link>
              <Link to="/casos-partners" className="text-sm font-medium text-gray-600 hover:text-blue-900">Casos y Partners</Link>
              <Link to="/cultura-allcom" className="text-sm font-medium text-gray-600 hover:text-blue-900">Cultura Allcom</Link>
              <Link to="/contacto" className="text-sm font-medium text-gray-600 hover:text-blue-900">Contacto</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;