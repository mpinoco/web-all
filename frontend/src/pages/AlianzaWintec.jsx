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
  TrendingUp,
  Scale,
  Tag,
  Tv
} from 'lucide-react';

const AlianzaWintec = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  // Product categories (different structure from IMIN)
  const tabs = [
    { id: 'all', label: 'Todos los Productos', icon: Monitor },
    { id: 'pos', label: 'Terminales POS', icon: CreditCard },
    { id: 'kiosks', label: 'Kioscos Autoservicio', icon: Package },
    { id: 'scale', label: 'POS con Balanza', icon: Scale },
    { id: 'esl', label: 'Flejes Electrónicos', icon: Tag },
    { id: 'signage', label: 'Digital Signage', icon: Tv }
  ];

  // Wintec Products organized by category
  const products = [
    // POS Terminals
    {
      id: 1,
      name: 'Wintec AnyPOS300',
      category: 'pos',
      categoryLabel: 'Terminal POS All-in-One',
      tagline: 'Potencia y versatilidad para tu negocio',
      image: '/wintec-products/anypos300.png',
      price: 'Desde $750.000 CLP',
      features: [
        'Pantalla táctil 15.6" capacitiva',
        'Procesador Intel Celeron J4125',
        'Sistema operativo Windows 10',
        'Múltiples opciones de conectividad',
        'Diseño elegante y compacto'
      ],
      applications: [
        { icon: CreditCard, text: 'Retail general' },
        { icon: Coffee, text: 'Restaurantes' },
        { icon: ShoppingCart, text: 'Supermercados' }
      ],
      badge: 'BESTSELLER'
    },
    {
      id: 2,
      name: 'Wintec AnyPOS100',
      category: 'pos',
      categoryLabel: 'Terminal POS Compacto',
      tagline: 'Solución eficiente para espacios reducidos',
      image: '/wintec-products/anypos100.png',
      price: 'Desde $580.000 CLP',
      features: [
        'Pantalla táctil 10.1" o 15.6"',
        'Procesador Rockchip',
        'Android 7.1',
        'Impresora térmica integrada',
        'Diseño ultracompacto'
      ],
      applications: [
        { icon: Coffee, text: 'Cafeterías' },
        { icon: CreditCard, text: 'Tiendas pequeñas' },
        { icon: ShoppingCart, text: 'Food trucks' }
      ],
      badge: 'COMPACTO'
    },
    {
      id: 3,
      name: 'Wintec AnyPOS600',
      category: 'pos',
      categoryLabel: 'POS Premium Dual Screen',
      tagline: 'Doble pantalla para máxima eficiencia',
      image: '/wintec-products/anypos600.png',
      price: 'Desde $1.290.000 CLP',
      features: [
        'Doble pantalla 15.6" + 15.6"',
        'Procesador Intel i3/i5/i7',
        'Windows 10 Pro',
        'Impresora térmica 80mm opcional',
        'Diseño profesional premium'
      ],
      applications: [
        { icon: ShoppingCart, text: 'Grandes superficies' },
        { icon: Plane, text: 'Hotelería premium' },
        { icon: CreditCard, text: 'Retail especializado' }
      ],
      badge: 'PREMIUM'
    },
    {
      id: 4,
      name: 'Wintec NPOS60',
      category: 'pos',
      categoryLabel: 'Terminal POS Móvil',
      tagline: 'Movilidad y potencia juntas',
      image: '/wintec-products/npos60.png',
      price: 'Desde $620.000 CLP',
      features: [
        'Pantalla táctil 6" portátil',
        'Batería de larga duración',
        'Impresora térmica integrada',
        '4G LTE + WiFi',
        'Android 11'
      ],
      applications: [
        { icon: Coffee, text: 'Delivery' },
        { icon: ShoppingCart, text: 'Ventas en terreno' },
        { icon: CreditCard, text: 'Eventos' }
      ],
      badge: 'MÓVIL'
    },
    // Self-Service Kiosks
    {
      id: 5,
      name: 'Wintec SelfPOS70',
      category: 'kiosks',
      categoryLabel: 'Kiosko Autoservicio Premium',
      tagline: 'Autoservicio inteligente de última generación',
      image: '/wintec-products/selfpos70.png',
      price: 'Desde $2.490.000 CLP',
      features: [
        'Pantalla táctil 21.5" o 27"',
        'Lector de tarjetas integrado',
        'Impresora térmica',
        'Cámara y escáner opcionales',
        'Diseño robusto anti-vandálico'
      ],
      applications: [
        { icon: Plane, text: 'Aeropuertos' },
        { icon: ShoppingCart, text: 'Supermercados' },
        { icon: Coffee, text: 'Fast food' }
      ],
      badge: 'AUTOSERVICIO'
    },
    {
      id: 6,
      name: 'Wintec SelfPOS200',
      category: 'kiosks',
      categoryLabel: 'Kiosko Compacto',
      tagline: 'Autoservicio en espacios reducidos',
      image: '/wintec-products/selfpos200.png',
      price: 'Desde $1.890.000 CLP',
      features: [
        'Pantalla táctil 15.6"',
        'Diseño compacto de mesa',
        'Sistema de pago integrado',
        'Impresora de tickets',
        'Fácil instalación'
      ],
      applications: [
        { icon: Coffee, text: 'Cafeterías' },
        { icon: CreditCard, text: 'Tiendas retail' },
        { icon: ShoppingCart, text: 'Farmacias' }
      ],
      badge: 'COMPACTO'
    },
    {
      id: 7,
      name: 'Wintec SelfPOS10',
      category: 'kiosks',
      categoryLabel: 'Kiosko Modular',
      tagline: 'Flexibilidad y personalización',
      image: 'https://www.wintec.co/uploads/images/product/thumb/1656576482.png',
      price: 'Desde $1.690.000 CLP',
      features: [
        'Diseño modular personalizable',
        'Múltiples tamaños de pantalla',
        'Opciones de periféricos',
        'Software de gestión incluido',
        'Actualizable y escalable'
      ],
      applications: [
        { icon: CreditCard, text: 'Retail moderno' },
        { icon: Plane, text: 'Hoteles' },
        { icon: Coffee, text: 'Restaurantes' }
      ],
      badge: 'MODULAR'
    },
    // Scale POS
    {
      id: 8,
      name: 'Wintec ACS-S100',
      category: 'scale',
      categoryLabel: 'POS con Balanza Integrada',
      tagline: 'Perfecto para comercio de alimentos',
      image: 'https://www.wintec.co/uploads/images/product/thumb/1654055033.png',
      price: 'Desde $890.000 CLP',
      features: [
        'Balanza de alta precisión',
        'Pantalla táctil 15.6"',
        'Impresora de etiquetas',
        'Software de gestión incluido',
        'Cumple normativas metrológicas'
      ],
      applications: [
        { icon: ShoppingCart, text: 'Supermercados' },
        { icon: Coffee, text: 'Fruterías y verdulerías' },
        { icon: CreditCard, text: 'Carnicerías' }
      ],
      badge: 'CON BALANZA'
    },
    {
      id: 9,
      name: 'Wintec ACS-S500',
      category: 'scale',
      categoryLabel: 'Scale POS Premium',
      tagline: 'Máxima precisión y rendimiento',
      image: 'https://www.wintec.co/uploads/images/product/thumb/1654158131.png',
      price: 'Desde $1.190.000 CLP',
      features: [
        'Balanza profesional certificada',
        'Doble pantalla touch',
        'Impresora de alta velocidad',
        'Conectividad completa',
        'Software avanzado de gestión'
      ],
      applications: [
        { icon: ShoppingCart, text: 'Supermercados grandes' },
        { icon: CreditCard, text: 'Mercados mayoristas' },
        { icon: Coffee, text: 'Tiendas gourmet' }
      ],
      badge: 'PROFESIONAL'
    },
    // Electronic Shelf Labels
    {
      id: 10,
      name: 'Wintec ESL System',
      category: 'esl',
      categoryLabel: 'Sistema de Etiquetas Electrónicas',
      tagline: 'Actualización de precios en tiempo real',
      image: 'https://via.placeholder.com/400x400/001F3F/FFFFFF?text=ESL+System',
      price: 'Consultar',
      features: [
        'Actualización inalámbrica de precios',
        'Pantalla e-paper de bajo consumo',
        'Múltiples tamaños disponibles',
        'Batería de larga duración',
        'Software de gestión centralizada'
      ],
      applications: [
        { icon: ShoppingCart, text: 'Supermercados' },
        { icon: CreditCard, text: 'Tiendas retail' },
        { icon: Coffee, text: 'Farmacias' }
      ],
      badge: 'INNOVACIÓN'
    },
    // Digital Signage
    {
      id: 11,
      name: 'Wintec Digital Signage',
      category: 'signage',
      categoryLabel: 'Pantallas Señalización Digital',
      tagline: 'Comunicación visual impactante',
      image: 'https://via.placeholder.com/400x400/001F3F/FFFFFF?text=Digital+Signage',
      price: 'Consultar',
      features: [
        'Pantallas de 32" a 86"',
        'Alta resolución 4K',
        'Gestión de contenido remota',
        'Compatibilidad multimedia',
        'Diseño profesional delgado'
      ],
      applications: [
        { icon: ShoppingCart, text: 'Centros comerciales' },
        { icon: Plane, text: 'Aeropuertos y hoteles' },
        { icon: CreditCard, text: 'Tiendas flagship' }
      ],
      badge: 'VISUAL'
    }
  ];

  const allianceFeatures = [
    {
      icon: Shield,
      title: 'Garantía Internacional 2 Años',
      description: 'Respaldo global con soporte ALLCOM local en Chile.'
    },
    {
      icon: Award,
      title: 'Certificación Global',
      description: 'Productos aprobados en 60+ países. Compatible con Justo, Toteat.'
    },
    {
      icon: Wrench,
      title: 'Instalación Profesional',
      description: 'Técnicos certificados Wintec en todo Chile.'
    },
    {
      icon: Clock,
      title: 'Soporte 24/7',
      description: 'Atención inmediata para tu negocio.'
    },
    {
      icon: TrendingUp,
      title: 'Actualizaciones',
      description: 'Software y firmware siempre actualizados.'
    },
    {
      icon: Settings,
      title: 'Personalización',
      description: 'Soluciones adaptadas a tu industria.'
    }
  ];

  const comparisonTable = [
    { feature: 'Presencia Global', allcom: '60+ países', competitors: 'Regional' },
    { feature: 'Garantía', allcom: '2 años incluida', competitors: '1 año' },
    { feature: 'Instalación', allcom: 'Incluida', competitors: 'Costo adicional' },
    { feature: 'Soporte Chile', allcom: '24/7 local', competitors: 'Limitado' },
    { feature: 'Compatibilidad', allcom: 'Justo, Toteat certificada', competitors: 'No garantizada' },
    { feature: 'Personalización', allcom: 'Disponible', competitors: 'Limitada' }
  ];

  const filteredProducts = selectedTab === 'all' 
    ? products 
    : products.filter(p => p.category === selectedTab);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Wintec Blue gradient */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 text-sm px-4 py-2 backdrop-blur-sm">
              Alianza Estratégica Global
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              ALLCOM + WINTEC
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-light">
              Soluciones POS de Clase Mundial
            </p>
            <p className="text-xl mb-6 text-blue-100 max-w-3xl">
              Líder global en terminales POS, kioscos de autoservicio y soluciones retail inteligentes. 
              Presente en más de 60 países con tecnología probada.
            </p>
            
            {/* Stats inline */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">90+</div>
                <div className="text-sm text-blue-200">Patentes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">60+</div>
                <div className="text-sm text-blue-200">Países</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">15</div>
                <div className="text-sm text-blue-200">Oficinas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">8</div>
                <div className="text-sm text-blue-200">Subsidiarias</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg shadow-xl"
                onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explorar Productos <ChevronRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg backdrop-blur-sm shadow-xl"
                onClick={() => window.open('https://wa.me/56912345678?text=Hola, quiero información sobre Wintec', '_blank')}
              >
                Solicitar Cotización
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Alliance Features - Compact Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">
              Ventajas Exclusivas ALLCOM + Wintec
            </h2>
            <p className="text-lg text-gray-600">
              Soporte global, servicio local
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {allianceFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-5 text-center">
                  <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-3 mx-auto group-hover:bg-blue-900 transition-colors">
                    <feature.icon className="w-7 h-7 text-blue-900 group-hover:text-white" />
                  </div>
                  <h3 className="text-sm font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation - Different from IMIN category selector */}
      <section id="productos" className="py-12 bg-white border-b-4 border-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Catálogo de Productos Wintec
            </h2>
            <p className="text-xl text-gray-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'} disponibles
            </p>
          </div>

          {/* Horizontal tabs */}
          <div className="flex overflow-x-auto space-x-2 pb-4 mb-8 max-w-6xl mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg whitespace-nowrap transition-all ${
                  selectedTab === tab.id
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Products Grid - 3 columns (different from IMIN's 2) */}
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredProducts.map((product) => (
              <Card 
                key={product.id}
                className="overflow-hidden border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  {/* Image at top */}
                  <div className="relative bg-gradient-to-br from-blue-50 to-gray-50 p-8 flex items-center justify-center h-64">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-h-full w-auto object-contain drop-shadow-xl"
                    />
                    <Badge className="absolute top-4 right-4 bg-blue-900 text-white px-3 py-1 text-xs">
                      {product.badge}
                    </Badge>
                  </div>

                  {/* Content below */}
                  <div className="p-5">
                    <Badge variant="outline" className="border-blue-900 text-blue-900 mb-2 text-xs">
                      {product.categoryLabel}
                    </Badge>
                    <h3 className="text-xl font-bold mb-1 text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 italic">{product.tagline}</p>
                    <p className="text-2xl font-bold text-blue-900 mb-4">{product.price}</p>

                    {/* Features - compact */}
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center text-xs">
                        <Settings className="w-3 h-3 mr-1 text-blue-900" />
                        Características
                      </h4>
                      <ul className="space-y-1">
                        {product.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="w-3 h-3 text-blue-900 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-xs">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications - compact */}
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center text-xs">
                        <CreditCard className="w-3 h-3 mr-1 text-blue-900" />
                        Aplicaciones
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.map((app, idx) => (
                          <div key={idx} className="flex items-center bg-blue-50 px-2 py-1 rounded text-xs">
                            <app.icon className="w-3 h-3 text-blue-900 mr-1" />
                            <span className="text-gray-700">{app.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Download Buttons */}
                    <div className="flex gap-2 mb-3">
                      <Button 
                        size="sm"
                        variant="outline"
                        className="flex-1 border-blue-900 text-blue-900 hover:bg-blue-50 text-xs"
                        onClick={() => window.open(`/manuales/${product.name.replace(/\s+/g, '-')}.pdf`, '_blank')}
                      >
                        <Download className="w-3 h-3 mr-1" />
                        Manual
                      </Button>
                      <Button 
                        size="sm"
                        variant="outline"
                        className="flex-1 border-blue-900 text-blue-900 hover:bg-blue-50 text-xs"
                        onClick={() => window.open(`/especificaciones/${product.name.replace(/\s+/g, '-')}.pdf`, '_blank')}
                      >
                        <FileText className="w-3 h-3 mr-1" />
                        Ficha
                      </Button>
                    </div>

                    <Button 
                      className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-sm"
                      onClick={() => window.open(`https://wa.me/56912345678?text=Hola, quiero cotizar el ${product.name}`, '_blank')}
                    >
                      Cotizar <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              ALLCOM + Wintec vs Competencia
            </h2>
            <p className="text-xl text-gray-600">
              Tecnología global, servicio local
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-2 border-blue-200 shadow-xl">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                        <th className="p-6 text-left text-lg font-bold">Característica</th>
                        <th className="p-6 text-center text-lg font-bold">ALLCOM + Wintec</th>
                        <th className="p-6 text-center text-lg font-bold">Competencia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonTable.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                          <td className="p-6 font-semibold text-gray-900">{row.feature}</td>
                          <td className="p-6 text-center">
                            <span className="inline-flex items-center text-blue-900 font-bold">
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

            {/* Services included note */}
            <div className="mt-10 bg-blue-900 text-white rounded-xl p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-full p-3 flex-shrink-0">
                  <Wrench className="w-8 h-8 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Todo Incluido con ALLCOM
                  </h3>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    <strong>Garantía de 2 años, instalación profesional y soporte técnico 24/7 están incluidos</strong> en todos los productos Wintec. 
                    Respaldo de una marca global con presencia en 60+ países y servicio local de excelencia en Chile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Descubre por qué Wintec es la elección de grandes marcas como Walmart, AEON, H&M y Pizza Hut.
              Solicita una demo gratuita hoy mismo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg shadow-xl"
                onClick={() => window.open('https://wa.me/56912345678?text=Hola, quiero agendar una demo de Wintec', '_blank')}
              >
                Agendar Demo Gratuita
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
                onClick={() => window.open('mailto:ventas@allcom.cl?subject=Consulta sobre Wintec', '_blank')}
              >
                Contactar Ventas
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlianzaWintec;
