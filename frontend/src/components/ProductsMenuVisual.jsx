import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductsMenuVisual = () => {
  const categories = [
    {
      title: 'Balanzas Inteligentes',
      description: 'Precisión y conectividad para comercio retail',
      image: 'https://images.unsplash.com/photo-1612012060851-20f943c02d3d?w=800',
      link: '/productos?category=balanzas',
      gradient: 'from-slate-900/70 via-slate-800/60 to-emerald-900/70'
    },
    {
      title: 'Kioskos de Autopago',
      description: 'Autoatención rápida para reducir filas',
      image: 'https://images.unsplash.com/photo-1687969962129-dd77e13b95b7?w=800',
      link: '/productos?category=kioskos',
      gradient: 'from-blue-900/70 via-cyan-800/60 to-teal-900/70'
    },
    {
      title: 'Puntos de Venta',
      description: 'Terminales POS robustos para alto tráfico',
      image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800',
      link: '/productos?category=pos',
      gradient: 'from-emerald-900/70 via-teal-800/60 to-cyan-900/70'
    },
    {
      title: 'POS Móviles',
      description: 'Soluciones de pago móvil y portátil',
      image: 'https://images.unsplash.com/photo-1726065235203-4368c41c6f19?w=800',
      link: '/productos?category=pos-moviles',
      gradient: 'from-slate-900/70 via-emerald-800/60 to-teal-900/70'
    }
  ];

  return (
    <section className="py-16 bg-white" data-testid="products-menu-visual">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] block"
              data-testid={`category-visual-${index}`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} transition-opacity duration-500 group-hover:opacity-90`} />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                  <h3 className="text-2xl font-bold mb-2 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-3 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Arrow that appears on hover */}
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    <span className="text-sm font-medium">Ver productos</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
              </div>
              
              {/* Border glow on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-400/50 rounded-xl transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsMenuVisual;
