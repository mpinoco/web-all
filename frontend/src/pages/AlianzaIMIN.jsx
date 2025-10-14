import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Check, 
  Shield, 
  Zap, 
  Award,
  Clock,
  Settings,
  ChevronRight,
  Download,
  FileText,
  Monitor,
  Coffee,
  Plane,
  ShoppingCart,
  Package,
  MonitorPlay,
  CreditCard,
  Smartphone,
  Wrench,
  TrendingUp
} from 'lucide-react';

const AlianzaIMIN = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Categories for filtering with updated icons
  const categories = [
    { id: 'all', label: 'Todos', icon: Monitor },
    { id: 'kioscos', label: 'Kioscos de Autoservicio', icon: Package },
    { id: 'pos', label: 'Puntos de Venta', icon: CreditCard },
    { id: 'kds', label: 'KDS', icon: MonitorPlay },
    { id: 'pda', label: 'PDA', icon: Smartphone }
  ];

  // IMIN Products for Chilean Market
  const products = [
    {
      id: 1,
      name: 'IMIN Falcon 2 Max',
      category: 'pos',
      categoryLabel: 'Tablet POS',
      tagline: 'El POS portátil más potente',
      image: 'https://www.imin.com/wp-content/uploads/2025/07/falcon-2-max@2x.webp',
      price: 'Desde $890.000 CLP',
      features: [
        'Pantalla 10.1" + Display cliente 2.4"',
        'Procesador Octa-Core 2.0GHz',
        'Impresora térmica integrada 80mm',
        'NFC, WiFi 6, Bluetooth 5.0',
        'Android 13'
      ],
      applications: [
        { icon: CreditCard, text: 'Retail móvil' },
        { icon: Coffee, text: 'Food trucks' },
        { icon: ShoppingCart, text: 'Ventas en terreno' }
      ],
      badge: 'MÁS VENDIDO'
    },
    {
      id: 2,
      name: 'IMIN Swan 2',
      category: 'pos',
      categoryLabel: 'Desktop POS',
      tagline: 'Elegancia y rendimiento',
      image: 'https://www.imin.com/wp-content/uploads/2025/07/swan-2@2x.webp',
      price: 'Desde $1.250.000 CLP',
      features: [
        'Doble pantalla 15.6" + 10.1"',
        'Procesador Octa-Core A55 2.0GHz',
        'Diseño giratorio 360°',
        'USB-C, HDMI, RJ45',
        '4GB RAM + 64GB ROM'
      ],
      applications: [
        { icon: CreditCard, text: 'Retail y supermercados' },
        { icon: Coffee, text: 'Restaurantes' },
        { icon: ShoppingCart, text: 'Farmacias' }
      ],
      badge: 'NUEVO'
    },
    {
      id: 3,
      name: 'IMIN D4 Pro',
      category: 'pos',
      categoryLabel: 'Desktop POS Premium',
      tagline: 'Potencia con IA integrada',
      image: 'https://www.imin.com/wp-content/uploads/2025/07/D4-Pro@2x.webp',
      price: 'Desde $1.690.000 CLP',
      features: [
        'Procesador Dual-Core A78 2.2GHz',
        'Hasta 8GB RAM + 128GB ROM',
        'Pantalla FHD 15.6" táctil',
        'IA para análisis de negocio',
        'Android 13'
      ],
      applications: [
        { icon: CreditCard, text: 'Grandes cadenas' },
        { icon: Plane, text: 'Hotelería' },
        { icon: ShoppingCart, text: 'E-commerce físico' }
      ],
      badge: 'PREMIUM'
    },
    {
      id: 4,
      name: 'IMIN Swift 2 Pro',
      category: 'pda',
      categoryLabel: 'Mobile POS / PDA',
      tagline: 'Movilidad sin compromisos',
      image: 'https://www.imin.com/wp-content/uploads/2025/07/swift-2-Pro@2x.webp',
      price: 'Desde $650.000 CLP',
      features: [
        'Ultra compacto y liviano',
        'Pantalla táctil 5.5" HD',
        'Impresora térmica 58mm',
        'Escáner de barras',
        'NFC contactless'
      ],
      applications: [
        { icon: Coffee, text: 'Delivery' },
        { icon: CreditCard, text: 'Ventas ambulantes' },
        { icon: ShoppingCart, text: 'Eventos' }
      ],
      badge: 'COMPACTO'
    },
    {
      id: 5,
      name: 'IMIN K1',
      category: 'kioscos',
      categoryLabel: 'Kiosko Interactivo',
      tagline: 'Autoservicio inteligente',
      image: 'https://www.imin.com/wp-content/uploads/2025/04/imin-product-featured-new-K12x-1024x1024.png',
      price: 'Desde $2.100.000 CLP',
      features: [
        'Pantalla táctil 21.5" Full HD',
        'Sistema de pago integrado',
        'Impresora de tickets',
        'Diseño anti-vandálico',
        'Software de gestión'
      ],
      applications: [
        { icon: Plane, text: 'Aeropuertos' },
        { icon: CreditCard, text: 'Centros comerciales' },
        { icon: Coffee, text: 'Fast food' }
      ],
      badge: 'AUTOSERVICIO'
    },
    {
      id: 6,
      name: 'IMIN Crane 1',
      category: 'kioscos',
      categoryLabel: 'Digital Signage',
      tagline: 'Señalización interactiva',
      image: 'https://www.imin.com/wp-content/uploads/2025/07/crane-1@2x.webp',
      price: 'Desde $1.890.000 CLP',
      features: [
        'Pantalla táctil gran formato',
        'Android 11 alto rendimiento',
        'Múltiples conectividades',
        'Gestión remota de contenidos',
        'Diseño elegante'
      ],
      applications: [
        { icon: CreditCard, text: 'Centros comerciales' },
        { icon: Plane, text: 'Hoteles' },
        { icon: Coffee, text: 'Restaurantes' }
      ],
      badge: 'INTERACTIVO'
    }
  ];

  const allianceFeatures = [
    {
      icon: Shield,
      title: 'Garantía 3 Años',
      description: 'Protección extendida con soporte local.'
    },
    {
      icon: Award,
      title: 'Certificado Justo, Toteat, FUDO',
      description: 'Compatible con principales plataformas.'
    },
    {
      icon: Zap,
      title: 'Tecnología Android',
      description: 'Flexibilidad total de apps.'
    },
    {
      icon: Clock,
      title: 'Instalación 24-48h',
      description: 'Tu negocio operativo rápido.'
    },
    {
      icon: Settings,
      title: 'Soporte Local',
      description: 'Equipo ALLCOM en Chile.'
    },
    {
      icon: Award,
      title: 'Actualizaciones',
      description: 'Software gratis durante garantía.'
    }
  ];

  const comparisonTable = [
    { feature: 'Garantía', allcom: '3 años incluida', competitors: '1 año' },
    { feature: 'Instalación', allcom: 'Incluida en terreno', competitors: 'Costo adicional' },
    { feature: 'Soporte', allcom: 'Incluido 24/7 Chile', competitors: 'Limitado' },
    { feature: 'Compatibilidad', allcom: 'Justo, Toteat, FUDO', competitors: 'No garantizada' },
    { feature: 'Actualizaciones', allcom: 'Gratuitas', competitors: 'De pago' },
    { feature: 'Tiempo respuesta', allcom: '24-48h', competitors: '5-7 días' }
  ];

  // Crane 1 configurations
  const craneConfigurations = [
    { name: 'Table Stand', sizes: '16", 21.5", 27"', description: 'Ideal para mostrador' },
    { name: 'Floor Stand', sizes: '21.5", 27", 32"', description: 'Autoservicio completo' },
    { name: 'Cashier Stand', sizes: '16"', description: 'Para punto de pago' },
    { name: 'Retail Stand', sizes: '16"', description: 'Formato retail compacto' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - IMIN Orange colors */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 text-sm px-4 py-2">
              Alianza Estratégica 2025
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              ALLCOM + IMIN
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-light">
              Tecnología POS de Clase Mundial
            </p>
            <p className="text-xl mb-8 text-orange-50 max-w-2xl mx-auto">
              Soluciones Android inteligentes para modernizar tu negocio. 
              Con garantía extendida y soporte local en Chile.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg"
                onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Productos <ChevronRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                onClick={() => window.open('https://wa.me/56912345678?text=Hola, quiero información sobre IMIN', '_blank')}
              >
                Solicitar Cotización
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Alliance Features - IMIN Orange theme */}
      <section className="py-12 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">
              ¿Por qué elegir IMIN con ALLCOM?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beneficios exclusivos que marcan la diferencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {allianceFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                    <feature.icon className="w-6 h-6 text-orange-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Selector - IMIN Orange theme */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Selecciona una Categoría</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                    selectedCategory === cat.id
                      ? 'border-orange-500 bg-orange-50 shadow-lg'
                      : 'border-gray-200 hover:border-orange-300 hover:shadow-md'
                  }`}
                >
                  <cat.icon className={`w-8 h-8 ${
                    selectedCategory === cat.id ? 'text-orange-600' : 'text-gray-600'
                  }`} />
                  <span className={`text-sm font-medium text-center ${
                    selectedCategory === cat.id ? 'text-orange-600' : 'text-gray-700'
                  }`}>
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - IMIN Orange theme */}
      <section id="productos" className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Equipos IMIN Disponibles en Chile
            </h2>
            <p className="text-xl text-gray-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'} disponibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {filteredProducts.map((product) => (
              <Card 
                key={product.id}
                className={`overflow-hidden border-2 transition-all duration-500 ${
                  hoveredProduct === product.id 
                    ? 'border-orange-400 shadow-2xl scale-[1.02]' 
                    : 'border-gray-200 hover:border-orange-200 hover:shadow-lg'
                }`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative bg-gradient-to-br from-gray-50 to-orange-50 p-6 flex items-center justify-center">
                      <div className="relative w-full">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110"
                        />
                        <Badge className="absolute -top-2 -right-2 bg-orange-600 text-white px-3 py-1 text-xs">
                          {product.badge}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <Badge variant="outline" className="border-orange-600 text-orange-600 mb-3 text-xs">
                        {product.categoryLabel}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-1 text-gray-900">{product.name}</h3>
                      <p className="text-md text-gray-600 mb-2 italic">{product.tagline}</p>
                      <p className="text-2xl font-bold text-orange-600 mb-4">{product.price}</p>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 mb-2 flex items-center text-sm">
                          <Settings className="w-4 h-4 mr-2 text-orange-600" />
                          Características
                        </h4>
                        <ul className="grid grid-cols-1 gap-1.5">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-xs">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Applications */}
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 mb-2 flex items-center text-sm">
                          <CreditCard className="w-4 h-4 mr-2 text-orange-600" />
                          Ideal Para
                        </h4>
                        <div className="space-y-2">
                          {product.applications.map((app, idx) => (
                            <div key={idx} className="flex items-center bg-orange-50 p-2 rounded-lg">
                              <app.icon className="w-4 h-4 text-orange-600 mr-2" />
                              <span className="text-gray-700 text-xs">{app.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Download Buttons */}
                      <div className="flex gap-2 mb-4">
                        <Button 
                          size="sm"
                          variant="outline"
                          className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50"
                          onClick={() => window.open(`/manuales/${product.name.replace(/\s+/g, '-')}.pdf`, '_blank')}
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Manual
                        </Button>
                        <Button 
                          size="sm"
                          variant="outline"
                          className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50"
                          onClick={() => window.open(`/especificaciones/${product.name.replace(/\s+/g, '-')}.pdf`, '_blank')}
                        >
                          <FileText className="w-4 h-4 mr-1" />
                          Specs
                        </Button>
                      </div>

                      <Button 
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-sm"
                        onClick={() => window.open(`https://wa.me/56912345678?text=Hola, quiero cotizar el ${product.name}`, '_blank')}
                      >
                        Solicitar Cotización <ChevronRight className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Crane 1 Banner - Only shown when Kioscos category is selected */}
      {selectedCategory === 'kioscos' && (
        <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-400 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                IMIN Crane 1: Máxima Versatilidad
              </h2>
              <p className="text-xl text-orange-50 max-w-3xl mx-auto">
                Un kiosko, infinitas configuraciones. Desde 16" hasta 32", con múltiples soportes y accesorios modulares.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {craneConfigurations.map((config, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                  <CardContent className="p-6 text-center">
                    <Package className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{config.name}</h3>
                    <p className="text-orange-100 text-sm mb-2">{config.sizes}</p>
                    <p className="text-orange-50 text-xs">{config.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Accesorios Modulares Disponibles</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="bg-white/20 rounded-lg p-3 mb-2">
                      <CreditCard className="w-6 h-6 text-white mx-auto" />
                    </div>
                    <p className="text-sm">MSR Reader</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 rounded-lg p-3 mb-2">
                      <TrendingUp className="w-6 h-6 text-white mx-auto" />
                    </div>
                    <p className="text-sm">Status Light</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 rounded-lg p-3 mb-2">
                      <Zap className="w-6 h-6 text-white mx-auto" />
                    </div>
                    <p className="text-sm">NFC Module</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 rounded-lg p-3 mb-2">
                      <MonitorPlay className="w-6 h-6 text-white mx-auto" />
                    </div>
                    <p className="text-sm">Scanner</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 rounded-lg p-3 mb-2">
                      <FileText className="w-6 h-6 text-white mx-auto" />
                    </div>
                    <p className="text-sm">Printer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg"
                onClick={() => window.open('https://wa.me/56912345678?text=Hola, quiero información sobre Crane 1', '_blank')}
              >
                Consultar Configuraciones Disponibles
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Comparison Table - ALLCOM vs Competencia */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              ALLCOM vs Competencia
            </h2>
            <p className="text-xl text-gray-600">
              Compara y descubre por qué elegir ALLCOM + IMIN
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-2 border-orange-200">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
                        <th className="p-6 text-left text-lg font-bold">Característica</th>
                        <th className="p-6 text-center text-lg font-bold">ALLCOM</th>
                        <th className="p-6 text-center text-lg font-bold">Competencia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonTable.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="p-6 font-semibold text-gray-900">{row.feature}</td>
                          <td className="p-6 text-center">
                            <span className="inline-flex items-center text-orange-600 font-bold">
                              <Check className="w-5 h-5 mr-2" />
                              {row.allcom}
                            </span>
                          </td>
                          <td className="p-6 text-center text-gray-500">{row.competitors}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Nota final sobre servicios incluidos */}
            <div className="mt-8 bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-600 rounded-full p-3 flex-shrink-0">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Todo Incluido con ALLCOM
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Garantía de 3 años, instalación en terreno y soporte técnico están incluidos</strong> en el precio de todos nuestros equipos IMIN. 
                    Sin costos ocultos, sin sorpresas. Tu inversión está completamente protegida desde el día uno.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - IMIN Orange */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para modernizar tu negocio?
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Agenda una demo gratuita y descubre cómo IMIN puede transformar tu operación.
              Garantía de 3 años, instalación y soporte incluidos.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg"
                onClick={() => window.open('https://wa.me/56912345678?text=Hola, quiero agendar una demo de IMIN', '_blank')}
              >
                Agendar Demo Gratuita
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                onClick={() => window.open('mailto:ventas@allcom.cl?subject=Consulta sobre IMIN', '_blank')}
              >
                Contactar por Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlianzaIMIN;
