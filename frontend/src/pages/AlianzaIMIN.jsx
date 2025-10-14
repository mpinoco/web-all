import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Check, 
  Shield, 
  Zap, 
  TrendingUp, 
  Smartphone, 
  Monitor,
  TabletSmartphone,
  Store,
  ShoppingCart,
  Coffee,
  Plane,
  Award,
  Clock,
  Settings,
  ChevronRight
} from 'lucide-react';

const AlianzaIMIN = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Top 5 IMIN Products for Chilean Market
  const products = [
    {
      id: 1,
      name: 'IMIN Falcon 2 Max',
      category: 'Tablet POS',
      tagline: 'El POS portátil más potente',
      image: 'https://www.imin.com/wp-content/uploads/2025/07/falcon-2-max@2x.webp',
      price: 'Desde $890.000 CLP',
      features: [
        'Pantalla 10.1" + Display cliente 2.4"',
        'Procesador Octa-Core 2.0GHz',
        'Impresora térmica integrada 80mm',
        'NFC, WiFi 6, Bluetooth 5.0',
        'Batería larga duración',
        'Android 13'
      ],
      applications: [
        { icon: Store, text: 'Retail móvil y pop-up stores' },
        { icon: Coffee, text: 'Food trucks y cafeterías' },
        { icon: ShoppingCart, text: 'Ventas en terreno' }
      ],
      badge: 'MÁS VENDIDO'
    },
    {
      id: 2,
      name: 'IMIN Swan 2',
      category: 'Desktop POS',
      tagline: 'Elegancia y rendimiento en un solo equipo',
      image: 'https://www.imin.com/wp-content/uploads/2025/07/swan-2@2x.webp',
      price: 'Desde $1.250.000 CLP',
      features: [
        'Doble pantalla 15.6" + 10.1"',
        'Procesador Octa-Core A55 2.0GHz',
        'Diseño moderno giratorio 360°',
        'Múltiples puertos: USB-C, HDMI, RJ45',
        '4GB RAM + 64GB ROM',
        'Compatible con periféricos'
      ],
      applications: [
        { icon: Store, text: 'Tiendas retail y supermercados' },
        { icon: Coffee, text: 'Restaurantes y bares' },
        { icon: ShoppingCart, text: 'Farmacias y comercios' }
      ],
      badge: 'NUEVO'
    },
    {
      id: 3,
      name: 'IMIN D4 Pro',
      category: 'Desktop POS Premium',
      tagline: 'Potencia profesional con IA integrada',
      image: 'https://www.imin.com/wp-content/uploads/2025/07/D4-Pro@2x.webp',
      price: 'Desde $1.690.000 CLP',
      features: [
        'Procesador Dual-Core A78 2.2GHz',
        'Hasta 8GB RAM + 128GB ROM',
        'Pantalla FHD 15.6" táctil',
        'IA para análisis de negocio',
        'Impresora térmica de alta velocidad',
        'Android 13'
      ],
      applications: [
        { icon: Store, text: 'Grandes cadenas retail' },
        { icon: Plane, text: 'Hotelería y turismo' },
        { icon: ShoppingCart, text: 'E-commerce con punto físico' }
      ],
      badge: 'PREMIUM'
    },
    {
      id: 4,
      name: 'IMIN Swift 2 Pro',
      category: 'Mobile POS',
      tagline: 'Movilidad sin compromisos',
      image: 'https://www.imin.com/wp-content/uploads/2025/07/swift-2-Pro@2x.webp',
      price: 'Desde $650.000 CLP',
      features: [
        'Ultra compacto y liviano',
        'Pantalla táctil 5.5" HD',
        'Impresora térmica 58mm',
        'Escáner de código de barras',
        'NFC contactless',
        'Batería removible'
      ],
      applications: [
        { icon: Coffee, text: 'Delivery y domicilio' },
        { icon: Store, text: 'Ventas ambulantes' },
        { icon: ShoppingCart, text: 'Eventos y ferias' }
      ],
      badge: 'COMPACTO'
    },
    {
      id: 5,
      name: 'IMIN K1',
      category: 'Kiosko Interactivo',
      tagline: 'Autoservicio inteligente',
      image: 'https://www.imin.com/wp-content/uploads/2025/04/imin-product-featured-new-K12x-1024x1024.png',
      price: 'Desde $2.100.000 CLP',
      features: [
        'Pantalla táctil 21.5" Full HD',
        'Sistema de pago integrado',
        'Impresora de tickets',
        'Diseño robusto anti-vandálico',
        'Opciones de personalización',
        'Software de gestión incluido'
      ],
      applications: [
        { icon: Plane, text: 'Aeropuertos y terminales' },
        { icon: Store, text: 'Centros comerciales' },
        { icon: Coffee, text: 'Fast food y QSR' }
      ],
      badge: 'AUTOSERVICIO'
    }
  ];

  const allianceFeatures = [
    {
      icon: Shield,
      title: 'Garantía Extendida 3 Años',
      description: 'La mejor protección del mercado chileno. Soporte técnico local y repuestos garantizados.'
    },
    {
      icon: Award,
      title: 'Certificación Justo',
      description: 'Todos nuestros equipos IMIN están certificados para trabajar con el sistema Justo sin problemas de compatibilidad.'
    },
    {
      icon: Zap,
      title: 'Tecnología Android',
      description: 'Flexibilidad total. Compatible con miles de aplicaciones de negocio del ecosistema Android.'
    },
    {
      icon: Clock,
      title: 'Instalación Express',
      description: 'Configuración e instalación en 24-48 horas. Tu negocio operativo de inmediato.'
    },
    {
      icon: Settings,
      title: 'Soporte Técnico Local',
      description: 'Equipo ALLCOM disponible en Chile. Respuesta rápida y servicio en español.'
    },
    {
      icon: TrendingUp,
      title: 'Actualización Gratuita',
      description: 'Actualizaciones de software y firmware sin costo durante toda la garantía.'
    }
  ];

  const whyIMIN = [
    { label: 'Más de', value: '15 años', subtitle: 'en el mercado global' },
    { label: 'Presencia en', value: '100+', subtitle: 'países' },
    { label: 'Más de', value: '5M', subtitle: 'dispositivos vendidos' },
    { label: 'Certificaciones', value: 'EMV, PCI', subtitle: 'seguridad garantizada' }
  ];

  const comparisonTable = [
    { feature: 'Garantía', imin: '3 años', competitors: '1 año' },
    { feature: 'Soporte Local', imin: 'Sí, Chile', competitors: 'Limitado' },
    { feature: 'Compatibilidad Justo', imin: 'Certificada', competitors: 'No garantizada' },
    { feature: 'Actualizaciones', imin: 'Gratuitas', competitors: 'De pago' },
    { feature: 'Tiempo de respuesta', imin: '24-48h', competitors: '5-7 días' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-emerald-700 text-white py-24 overflow-hidden">
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
            <p className="text-xl mb-8 text-green-50 max-w-2xl mx-auto">
              Soluciones Android inteligentes para modernizar tu negocio. 
              Con garantía extendida y soporte local en Chile.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-6 text-lg"
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

      {/* Why IMIN Stats */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {whyIMIN.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                <p className="text-4xl font-bold text-green-600 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alliance Features */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              ¿Por qué elegir IMIN con ALLCOM?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beneficios exclusivos que marcan la diferencia en tu inversión
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {allianceFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                    <feature.icon className="w-8 h-8 text-green-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Equipos IMIN Disponibles en Chile
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Desde móviles hasta kioscos, tenemos la solución perfecta para tu negocio
            </p>
          </div>

          <div className="space-y-12 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Card 
                key={product.id}
                className={`overflow-hidden border-2 transition-all duration-500 ${
                  hoveredProduct === product.id 
                    ? 'border-green-400 shadow-2xl scale-[1.02]' 
                    : 'border-gray-200 hover:border-green-200 hover:shadow-lg'
                }`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    {/* Image Section */}
                    <div className={`relative bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="max-w-full h-auto max-h-80 object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110"
                        />
                        <Badge className="absolute -top-4 -right-4 bg-green-600 text-white px-4 py-2 text-xs">
                          {product.badge}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                      <Badge variant="outline" className="border-green-600 text-green-600 mb-4">
                        {product.category}
                      </Badge>
                      <h3 className="text-3xl font-bold mb-2 text-gray-900">{product.name}</h3>
                      <p className="text-lg text-gray-600 mb-4 italic">{product.tagline}</p>
                      <p className="text-3xl font-bold text-green-600 mb-6">{product.price}</p>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                          <Settings className="w-5 h-5 mr-2 text-green-600" />
                          Características Principales
                        </h4>
                        <ul className="grid grid-cols-1 gap-3">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Applications */}
                      <div className="mb-8">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                          <Store className="w-5 h-5 mr-2 text-green-600" />
                          Ideal Para
                        </h4>
                        <div className="space-y-3">
                          {product.applications.map((app, idx) => (
                            <div key={idx} className="flex items-center bg-green-50 p-3 rounded-lg">
                              <app.icon className="w-5 h-5 text-green-600 mr-3" />
                              <span className="text-gray-700">{app.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
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

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              IMIN vs Competencia
            </h2>
            <p className="text-xl text-gray-600">
              Compara y descubre por qué IMIN es la mejor opción
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-2 border-green-200">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                        <th className="p-6 text-left text-lg font-bold">Característica</th>
                        <th className="p-6 text-center text-lg font-bold">IMIN con ALLCOM</th>
                        <th className="p-6 text-center text-lg font-bold">Competencia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonTable.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="p-6 font-semibold text-gray-900">{row.feature}</td>
                          <td className="p-6 text-center">
                            <span className="inline-flex items-center text-green-600 font-bold">
                              <Check className="w-5 h-5 mr-2" />
                              {row.imin}
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-teal-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para modernizar tu negocio?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Agenda una demo gratuita y descubre cómo IMIN puede transformar tu operación.
              Garantía de 3 años y soporte local incluido.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-6 text-lg"
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
