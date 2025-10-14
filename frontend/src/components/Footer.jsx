import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-white mt-20">{/* ALLCOM green background */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo-allcom.png" 
                alt="ALLCOM" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-emerald-100 text-sm">
              Tecnología para tiendas, sin enredos. Más de 17 años entregando soluciones de hardware y software para retail.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Productos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/productos?category=balanzas" className="text-emerald-100 hover:text-white transition-colors">Balanzas</Link></li>
              <li><Link to="/productos?category=kioskos" className="text-emerald-100 hover:text-white transition-colors">Kioskos</Link></li>
              <li><Link to="/productos?category=pos" className="text-emerald-100 hover:text-white transition-colors">Terminales POS</Link></li>
              <li><Link to="/productos?category=pos-moviles" className="text-emerald-100 hover:text-white transition-colors">POS Móviles</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/servicios" className="text-emerald-100 hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/contacto" className="text-emerald-100 hover:text-white transition-colors">Contacto</Link></li>
              <li><a href="#" className="text-emerald-100 hover:text-white transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="text-emerald-100 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-emerald-100">+56 2 1234 5678</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-emerald-100">ventas@alcom.cl</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-emerald-100">Santiago, Chile</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-600 mt-8 pt-8 text-center text-sm text-emerald-100">
          <p>&copy; {new Date().getFullYear()} Alcom. Todos los derechos reservados.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;