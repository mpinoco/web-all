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
  Scale,
  Coffee,
  ShoppingCart,
  Factory,
  Truck,
  Store,
  Wrench,
  TrendingUp,
  Building2,
  Smartphone,
  Globe
} from 'lucide-react';

const AlianzaMarques = () => {
  const [activeCategory, setActiveCategory] = useState('comercial');

  // Products organized by main categories
  const products = {
    comercial: [
      {
        id: 1,
        name: 'Balanças Marques BM5 ARM',
        categoryLabel: 'Balanza Comercial Táctil',
        tagline: 'La mejor balanza comercial del mundo',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect fill="%23E63946" width="400" height="400"/%3E%3Crect x="80" y="100" width="240" height="200" rx="12" fill="white"/%3E%3Crect x="100" y="120" width="200" height="120" rx="8" fill="%23F1FAEE"/%3E%3Crect x="100" y="250" width="200" height="30" rx="4" fill="%23F1FAEE"/%3E%3Crect x="150" y="290" width="100" height="20" rx="10" fill="white" opacity="0.5"/%3E%3C/svg%3E',
        price: 'Desde $1.890.000 CLP',
        features: [
          'Pantallas táctiles 15" + 10"',
          'Construcción 100% acero inoxidable',
          'Impresora térmica integrada',
          'Software ETPOS certificado incluido',
          'Tecnología capacitiva tipo iPhone'
        ],
        applications: [
          { icon: ShoppingCart, text: 'Supermercados' },
          { icon: Store, text: 'Fruterías y verdulerías' },
          { icon: Coffee, text: 'Carnicerías y pescaderías' }
        ],
        badge: 'PREMIADA 4 AÑOS',
        awards: true
      },
      {
        id: 2,
        name: 'Balanças Marques BM5 ARM Doble Cuerpo',
        categoryLabel: 'Balanza Táctil Premium',
        tagline: 'Máxima capacidad de pesaje',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect fill="%23E63946" width="400" height="400"/%3E%3Crect x="60" y="100" width="130" height="180" rx="10" fill="white"/%3E%3Crect x="210" y="100" width="130" height="180" rx="10" fill="white"/%3E%3Crect x="75" y="115" width="100" height="110" rx="6" fill="%23F1FAEE"/%3E%3Crect x="225" y="115" width="100" height="110" rx="6" fill="%23F1FAEE"/%3E%3Crect x="140" y="290" width="120" height="20" rx="10" fill="white" opacity="0.5"/%3E%3C/svg%3E',
        price: 'Desde $2.490.000 CLP',
        features: [
          'Dos cuerpos de pesaje independientes',
          'Mayor capacidad y versatilidad',
          'Ideal para alto volumen',
          'Sistema de gestión avanzado',
          'Construcción robusta inoxidable'
        ],
        applications: [
          { icon: ShoppingCart, text: 'Grandes superficies' },
          { icon: Building2, text: 'Mayoristas' },
          { icon: Store, text: 'Cadenas retail' }
        ],
        badge: 'DOBLE CAPACIDAD'
      },
      {
        id: 3,
        name: 'Balanças Marques BM5 XS',
        categoryLabel: 'Balanza Compacta',
        tagline: 'Potencia en formato reducido',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect fill="%23E63946" width="400" height="400"/%3E%3Crect x="120" y="120" width="160" height="180" rx="10" fill="white"/%3E%3Crect x="135" y="135" width="130" height="100" rx="6" fill="%23F1FAEE"/%3E%3Crect x="135" y="245" width="130" height="35" rx="4" fill="%23F1FAEE"/%3E%3Crect x="170" y="290" width="60" height="15" rx="8" fill="white" opacity="0.5"/%3E%3C/svg%3E',
        price: 'Desde $1.190.000 CLP',
        features: [
          'Diseño compacto y ligero',
          'Pantalla táctil 10"',
          'Impresora integrada',
          'Perfecta para espacios reducidos',
          'Software ETPOS incluido'
        ],
        applications: [
          { icon: Coffee, text: 'Tiendas pequeñas' },
          { icon: Store, text: 'Fruterías' },
          { icon: ShoppingCart, text: 'Panaderías' }
        ],
        badge: 'COMPACTA'
      }
    ],
    industrial: [
      {
        id: 4,
        name: 'Básculas Marques PCM M1500E Metálica',
        categoryLabel: 'Báscula Puente Modular',
        tagline: 'La mejor báscula del mundo 4 años consecutivos',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect fill="%23E63946" width="400" height="400"/%3E%3Crect x="40" y="180" width="320" height="100" rx="8" fill="%23457B9D"/%3E%3Crect x="50" y="190" width="300" height="80" rx="6" fill="%23F1FAEE"/%3E%3Crect x="70" y="270" width="40" height="60" fill="%23457B9D"/%3E%3Crect x="290" y="270" width="40" height="60" fill="%23457B9D"/%3E%3Cpath d="M150 230 L250 230 L240 210 L160 210 Z" fill="%23E63946"/%3E%3C/svg%3E',
        price: 'Consultar',
        features: [
          'Estructura modular y móvil',
          'Montaje rápido (1 día)',
          'Control remoto vía APP Quilo',
          'Detección automática de matrícula',
          'Paneles solares opcionales',
          'Electrónica 100% propia'
        ],
        applications: [
          { icon: Truck, text: 'Pesaje de camiones' },
          { icon: Factory, text: 'Industria pesada' },
          { icon: Building2, text: 'Logística' }
        ],
        badge: 'PREMIADA 4 AÑOS',
        awards: true
      },
      {
        id: 5,
        name: 'Básculas Marques PCM C1500',
        categoryLabel: 'Báscula Puente Hormigón',
        tagline: 'Máxima robustez y durabilidad',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect fill="%23E63946" width="400" height="400"/%3E%3Crect x="40" y="170" width="320" height="120" rx="8" fill="%236B7280"/%3E%3Crect x="50" y="180" width="300" height="100" rx="6" fill="%239CA3AF"/%3E%3Crect x="60" y="280" width="50" height="70" fill="%236B7280"/%3E%3Crect x="290" y="280" width="50" height="70" fill="%236B7280"/%3E%3C/svg%3E',
        price: 'Consultar',
        features: [
          'Construcción en hormigón reforzado',
          'Máxima estabilidad',
          'Ideal para instalaciones permanentes',
          'Resistencia extrema',
          'Bajo mantenimiento'
        ],
        applications: [
          { icon: Factory, text: 'Minas y canteras' },
          { icon: Truck, text: 'Pesaje continuo' },
          { icon: Building2, text: 'Construcción' }
        ],
        badge: 'ROBUSTA'
      },
      {
        id: 6,
        name: 'Plataformas de Pesaje Industrial',
        categoryLabel: 'Plataformas Modulares',
        tagline: 'Soluciones a medida para su industria',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect fill="%23E63946" width="400" height="400"/%3E%3Crect x="80" y="150" width="240" height="140" rx="8" fill="%23457B9D"/%3E%3Crect x="90" y="160" width="220" height="120" rx="6" fill="%23F1FAEE"/%3E%3Crect x="100" y="280" width="30" height="40" fill="%23457B9D"/%3E%3Crect x="270" y="280" width="30" height="40" fill="%23457B9D"/%3E%3C/svg%3E',
        price: 'Desde $890.000 CLP',
        features: [
          'Diseño personalizable',
          'Múltiples capacidades disponibles',
          'Construcción robusta',
          'Fácil integración',
          'Certificación metrológica'
        ],
        applications: [
          { icon: Factory, text: 'Manufactura' },
          { icon: Building2, text: 'Almacenes' },
          { icon: Truck, text: 'Distribución' }
        ],
        badge: 'PERSONALIZABLE'
      }
    ],
    software: [
      {
        id: 7,
        name: 'ETPOS - Software de Gestión',
        categoryLabel: 'Sistema de Gestión Comercial',
        tagline: 'Más de 30,000 instalaciones exitosas',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect fill="%23E63946" width="400" height="400"/%3E%3Crect x="100" y="80" width="200" height="240" rx="12" fill="white"/%3E%3Crect x="115" y="95" width="170" height="180" rx="8" fill="%23F1FAEE"/%3E%3Ccircle cx="200" cy="300" r="15" fill="%23E63946"/%3E%3Ctext x="200" y="160" text-anchor="middle" font-size="60" fill="%23E63946" font-weight="bold"%3EETPOS%3C/text%3E%3C/svg%3E',
        price: 'Incluido con equipos',
        features: [
          'Software certificado fiscalmente',
          'Gestión completa del negocio',
          'Facturación electrónica',
          'Control de inventario',
          'Reportes y analytics',
          'Conexión en la nube'
        ],
        applications: [
          { icon: ShoppingCart, text: 'Retail' },
          { icon: Coffee, text: 'Restauración' },
          { icon: Store, text: 'Comercio' }
        ],
        badge: 'CERTIFICADO'
      },
      {
        id: 8,
        name: 'APP Quilo',
        categoryLabel: 'Aplicación Móvil',
        tagline: 'Control remoto de básculas',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect fill="%23E63946" width="400" height="400"/%3E%3Crect x="140" y="60" width="120" height="280" rx="15" fill="white"/%3E%3Crect x="150" y="80" width="100" height="220" rx="8" fill="%23F1FAEE"/%3E%3Ccircle cx="200" cy="320" r="12" fill="%23E63946"/%3E%3Ctext x="200" y="180" text-anchor="middle" font-size="40" fill="%23E63946" font-weight="bold"%3EQuilo%3C/text%3E%3C/svg%3E',
        price: 'Gratuita',
        features: [
          'Visualización remota de peso',
          'Control de múltiples básculas',
          'Detección de matrícula',
          'Acceso para asistencia técnica',
          'Disponible iOS y Android'
        ],
        applications: [
          { icon: Truck, text: 'Logística' },
          { icon: Factory, text: 'Industria' },
          { icon: Building2, text: 'Almacenes' }
        ],
        badge: 'MÓVIL'
      }
    ]
  };

  const allianceFeatures = [
    {
      icon: Award,
      title: '50+ Años de Experiencia',
      description: 'Líder portugués en soluciones de pesaje desde 1967.'
    },
    {
      icon: Globe,
      title: 'Presencia Global',
      description: '20+ países con 5 oficinas directas en Europa y América.'
    },
    {
      icon: Shield,
      title: 'Garantía y Certificación',
      description: 'Productos certificados con garantía internacional.'
    },
    {
      icon: Wrench,
      title: 'Fabricación Propia',
      description: 'Desarrollo y fabricación 100% integrada internamente.'
    },
    {
      icon: Zap,
      title: 'Tecnología Avanzada',
      description: 'Electrónica, software y mecánica desarrollados in-house.'
    },
    {
      icon: Clock,
      title: 'Soporte ALLCOM Chile',
      description: 'Instalación, calibración y soporte técnico local.'
    }
  ];

  const stats = [
    { value: '50+', label: 'Años' },
    { value: '20+', label: 'Países' },
    { value: '2,000+', label: 'Básculas activas' },
    { value: '30,000+', label: 'Clientes ETPOS' }
  ];

  const comparisonTable = [
    { feature: 'Experiencia', allcom: '50+ años', competitors: '10-20 años' },
    { feature: 'Fabricación', allcom: '100% propia', competitors: 'Tercerizada' },
    { feature: 'Software', allcom: 'Certificado incluido', competitors: 'De pago' },
    { feature: 'Garantía', allcom: 'Internacional', competitors: 'Local' },
    { feature: 'Instalación Chile', allcom: 'Incluida por ALLCOM', competitors: 'Costo adicional' },
    { feature: 'Soporte', allcom: 'Local 24/7', competitors: 'Limitado' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Marques Red/Orange gradient */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 text-sm px-4 py-2 backdrop-blur-sm">
              Alianza Estratégica Portugal - Chile
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              ALLCOM + BALANÇAS MARQUES
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-light">
              Líder Europeo en Soluciones de Pesaje
            </p>
            <p className="text-xl mb-8 text-red-50 max-w-3xl mx-auto">
              Más de 50 años de experiencia fabricando las mejores balanzas comerciales y básculas industriales del mundo. 
              Tecnología portuguesa de excelencia, ahora en Chile.
            </p>
            
            {/* Awards badges */}
            <div className="flex justify-center gap-4 mb-8">
              <Badge className="bg-yellow-500 text-gray-900 px-4 py-2 text-sm font-bold">
                🏆 Mejor Balanza 2025
              </Badge>
              <Badge className="bg-yellow-500 text-gray-900 px-4 py-2 text-sm font-bold">
                🏆 Mejor Báscula 2025
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-red-50 px-8 py-6 text-lg shadow-xl"
                onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explorar Catálogo <ChevronRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg backdrop-blur-sm shadow-xl"
                onClick={() => window.open('https://wa.me/56912345678?text=Hola, quiero información sobre Balanças Marques', '_blank')}
              >
                Solicitar Cotización
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alliance Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Ventajas Exclusivas ALLCOM + Marques
            </h2>
            <p className="text-xl text-gray-600">
              Excelencia europea con servicio chileno
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {allianceFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 border-red-100 hover:border-red-300 hover:shadow-2xl transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="bg-red-100 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                    <feature.icon className="w-7 h-7 text-red-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Selector - Different Layout: Large Cards */}
      <section id="productos" className="py-16 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Catálogo Balanças Marques
            </h2>
            <p className="text-xl text-gray-600">
              Selecciona una categoría
            </p>
          </div>

          {/* Large category cards - Different from tabs or small cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <Card 
              className={`cursor-pointer transition-all duration-300 ${
                activeCategory === 'comercial'
                  ? 'border-4 border-red-600 shadow-2xl scale-105'
                  : 'border-2 border-gray-200 hover:border-red-300 hover:shadow-lg'
              }`}
              onClick={() => setActiveCategory('comercial')}
            >
              <CardContent className="p-8 text-center">
                <Scale className={`w-16 h-16 mx-auto mb-4 ${
                  activeCategory === 'comercial' ? 'text-red-600' : 'text-gray-400'
                }`} />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Pesaje Comercial</h3>
                <p className="text-gray-600 mb-4">Balanzas táctiles para tiendas</p>
                <Badge className={activeCategory === 'comercial' ? 'bg-red-600 text-white' : 'bg-gray-200'}>
                  {products.comercial.length} productos
                </Badge>
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all duration-300 ${
                activeCategory === 'industrial'
                  ? 'border-4 border-red-600 shadow-2xl scale-105'
                  : 'border-2 border-gray-200 hover:border-red-300 hover:shadow-lg'
              }`}
              onClick={() => setActiveCategory('industrial')}
            >
              <CardContent className="p-8 text-center">
                <Truck className={`w-16 h-16 mx-auto mb-4 ${
                  activeCategory === 'industrial' ? 'text-red-600' : 'text-gray-400'
                }`} />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Pesaje Industrial</h3>
                <p className="text-gray-600 mb-4">Básculas puente y plataformas</p>
                <Badge className={activeCategory === 'industrial' ? 'bg-red-600 text-white' : 'bg-gray-200'}>
                  {products.industrial.length} productos
                </Badge>
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all duration-300 ${
                activeCategory === 'software'
                  ? 'border-4 border-red-600 shadow-2xl scale-105'
                  : 'border-2 border-gray-200 hover:border-red-300 hover:shadow-lg'
              }`}
              onClick={() => setActiveCategory('software')}
            >
              <CardContent className="p-8 text-center">
                <Smartphone className={`w-16 h-16 mx-auto mb-4 ${
                  activeCategory === 'software' ? 'text-red-600' : 'text-gray-400'
                }`} />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Software</h3>
                <p className="text-gray-600 mb-4">Gestión y aplicaciones móviles</p>
                <Badge className={activeCategory === 'software' ? 'bg-red-600 text-white' : 'bg-gray-200'}>
                  {products.software.length} productos
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Products List - Different: vertical cards with side image */}
          <div className="space-y-8 max-w-6xl mx-auto">
            {products[activeCategory].map((product, index) => (
              <Card 
                key={product.id}
                className="overflow-hidden border-2 border-red-100 hover:border-red-400 hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-5 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    {/* Image Side */}
                    <div className={`md:col-span-2 bg-gradient-to-br from-red-50 to-orange-50 p-8 flex items-center justify-center min-h-[300px] ${
                      index % 2 === 1 ? 'md:col-start-4' : ''
                    }`}>
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="max-w-full h-auto max-h-64 object-contain drop-shadow-2xl"
                        />
                        <Badge className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 text-sm">
                          {product.badge}
                        </Badge>
                        {product.awards && (
                          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-yellow-500 text-gray-900 px-3 py-1 text-xs">
                              🏆 Reader's Choice
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`md:col-span-3 p-8 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                      <Badge variant="outline" className="border-red-600 text-red-600 mb-3">
                        {product.categoryLabel}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">{product.name}</h3>
                      <p className="text-lg text-gray-600 mb-3 italic">{product.tagline}</p>
                      <p className="text-3xl font-bold text-red-600 mb-6">{product.price}</p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                          <Settings className="w-5 h-5 mr-2 text-red-600" />
                          Características
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Applications */}
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                          <Store className="w-5 h-5 mr-2 text-red-600" />
                          Aplicaciones
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {product.applications.map((app, idx) => (
                            <div key={idx} className="flex items-center bg-red-50 px-4 py-2 rounded-lg">
                              <app.icon className="w-4 h-4 text-red-600 mr-2" />
                              <span className="text-gray-700 text-sm">{app.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button 
                          variant="outline"
                          className="border-red-600 text-red-600 hover:bg-red-50"
                          onClick={() => window.open(`/manuales/${product.name.replace(/\s+/g, '-')}.pdf`, '_blank')}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Manual
                        </Button>
                        <Button 
                          variant="outline"
                          className="border-red-600 text-red-600 hover:bg-red-50"
                          onClick={() => window.open(`/especificaciones/${product.name.replace(/\s+/g, '-')}.pdf`, '_blank')}
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Ficha Técnica
                        </Button>
                        <Button 
                          className="bg-red-600 hover:bg-red-700 text-white flex-1"
                          onClick={() => window.open(`https://wa.me/56912345678?text=Hola, quiero cotizar ${product.name}`, '_blank')}
                        >
                          Solicitar Cotización <ChevronRight className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              ALLCOM + Marques vs Competencia
            </h2>
            <p className="text-xl text-gray-600">
              Calidad europea, servicio local
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-2 border-red-200 shadow-xl">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-red-600 to-orange-500 text-white">
                      <th className="p-6 text-left text-lg font-bold">Característica</th>
                      <th className="p-6 text-center text-lg font-bold">ALLCOM + Marques</th>
                      <th className="p-6 text-center text-lg font-bold">Competencia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-red-50'}>
                        <td className="p-6 font-semibold text-gray-900">{row.feature}</td>
                        <td className="p-6 text-center">
                          <span className="inline-flex items-center text-red-600 font-bold">
                            <Check className="w-5 h-5 mr-2" />
                            {row.allcom}
                          </span>
                        </td>
                        <td className="p-6 text-center text-gray-500">{row.competitors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Services note */}
            <div className="mt-10 bg-red-600 text-white rounded-xl p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-full p-3 flex-shrink-0">
                  <Wrench className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Todo Incluido con ALLCOM
                  </h3>
                  <p className="text-red-50 text-lg leading-relaxed">
                    <strong>Garantía internacional, instalación profesional, calibración y soporte técnico local están incluidos</strong> en todos los productos Balanças Marques. 
                    Más de 50 años de experiencia europea con el respaldo de ALLCOM en Chile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para equipar tu negocio con lo mejor?
            </h2>
            <p className="text-xl mb-8 text-red-50">
              Descubre por qué Balanças Marques ha sido premiada como la mejor balanza y báscula del mundo 4 años consecutivos.
              Solicita una demo personalizada.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-red-50 px-8 py-6 text-lg shadow-xl"
                onClick={() => window.open('https://wa.me/56912345678?text=Hola, quiero agendar una demo de Balanças Marques', '_blank')}
              >
                Agendar Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
                onClick={() => window.open('mailto:ventas@allcom.cl?subject=Consulta sobre Balanças Marques', '_blank')}
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

export default AlianzaMarques;
