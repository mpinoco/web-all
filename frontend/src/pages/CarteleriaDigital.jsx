import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Tv, Smartphone, Zap, Cloud, Settings, CheckCircle, ArrowRight, Package, Code, Wrench, Palette, Truck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const CarteleriaDigital = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Alto Brillo & 24/7',
      description: 'Pantallas con 2x más brillo que TV convencional, diseñadas para operación continua'
    },
    {
      icon: Cloud,
      title: 'Gestión en la Nube',
      description: 'CMS flexible para actualizar contenido desde cualquier dispositivo de forma remota'
    },
    {
      icon: Settings,
      title: 'Fácil Instalación',
      description: 'Soluciones VESA, montaje personalizado y diseño adaptable a cualquier espacio'
    },
    {
      icon: Monitor,
      title: 'Múltiples Formatos',
      description: 'Pantallas profesionales, displays tipo barra, video walls y pantallas especiales'
    },
    {
      icon: Package,
      title: 'Monetización Publicitaria',
      description: 'Genera ingresos adicionales vendiendo espacios publicitarios en tus pantallas'
    }
  ];

  const products = [
    {
      series: 'Serie S',
      title: 'Pantallas Profesionales',
      description: 'Displays de alta calidad para aplicaciones profesionales',
      sizes: ['32"', '43"', '55"', '65"', '75"', '86"'],
      resolution: 'FHD / UHD',
      icon: Tv,
      color: 'from-gray-600 to-gray-800',
      image: 'https://images.unsplash.com/photo-1639087595550-e9770a85f8c0?w=800&auto=format&fit=crop'
    },
    {
      series: 'Serie B',
      title: 'Displays tipo Barra',
      description: 'Formato alargado ideal para menús y señalización',
      sizes: ['23"', '24"', '25"', '29"', '35"', '37"', '47"'],
      resolution: 'FHD / UHD',
      icon: Smartphone,
      color: 'from-gray-500 to-gray-700',
      image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop'
    },
    {
      series: 'Serie Especial',
      title: 'Soluciones Personalizadas',
      description: 'Video walls, displays duales, transparentes y más',
      sizes: ['10.1"', '49"', '55"', 'Dual', 'Video Wall'],
      resolution: 'UHD / Custom',
      icon: Package,
      color: 'from-gray-700 to-gray-900',
      image: 'https://images.unsplash.com/photo-1649150849642-c53366ebb480?w=800&auto=format&fit=crop'
    }
  ];

  const useCases = [
    {
      title: 'Retail & Supermercados',
      description: 'Promociones dinámicas, información de productos, publicidad en punto de venta',
      icon: '🛒'
    },
    {
      title: 'Restaurantes & Cafeterías',
      description: 'Menús digitales, promociones de temporada, contenido interactivo',
      icon: '🍽️'
    },
    {
      title: 'Corporativo & Educación',
      description: 'Salas de reuniones, aulas, comunicación interna, boletines electrónicos',
      icon: '🏢'
    },
    {
      title: 'Centros Comerciales',
      description: 'Directorios interactivos, publicidad, wayfinding, experiencias inmersivas',
      icon: '🏬'
    },
    {
      title: 'Transporte & Aeropuertos',
      description: 'Información de vuelos, mapas interactivos, publicidad digital',
      icon: '✈️'
    },
    {
      title: 'Hoteles & Hospitalidad',
      description: 'Información de eventos, menús, servicios, publicidad local',
      icon: '🏨'
    }
  ];

  const allcomServices = [
    {
      icon: Code,
      title: 'Desarrollo de Aplicaciones',
      description: 'Software personalizado para gestión de contenido y experiencias interactivas'
    },
    {
      icon: Palette,
      title: 'Diseño de Contenido',
      description: 'Creación de contenido visual atractivo y efectivo para tus pantallas'
    },
    {
      icon: Wrench,
      title: 'Instalación & Montaje',
      description: 'Instalación profesional con soporte VESA y montaje personalizado'
    },
    {
      icon: Truck,
      title: 'Mantenimiento & Soporte',
      description: 'Soporte técnico continuo y mantenimiento preventivo 24/7'
    }
  ];

  const features = [
    'Pantallas con brillo hasta 3000 cd/m² para exterior',
    'Sistema operativo Android integrado',
    'CMS con gestión multi-plantilla y horarios',
    'Conectividad WiFi y Ethernet',
    'Actualizaciones remotas FOTA',
    'Bezels ultra delgados (1.8mm)',
    'Ángulo de visión amplio',
    'Certificación para video walls'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/carteleria_hero.jpg')`,
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-slate-900/10"></div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-gray-800/90 text-white rounded-full text-sm font-semibold mb-6">
              ✨ Soluciones de Cartelería Digital
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transforma tu
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Comunicación Visual
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Pantallas digitales profesionales con tecnología SOLUM. Gestión en la nube, 
              contenido dinámico y soporte integral de ALLCOM.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white shadow-lg"
              >
                <Link to="/contacto">
                  Solicitar Asesoría
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Link to="/productos">Ver Catálogo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Por qué Cartelería Digital?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tecnología de punta que revoluciona la forma en que te comunicas con tus clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Line Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Línea de Productos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones SOLUM para cada necesidad y espacio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card 
                  key={index}
                  className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-70`}></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/95 p-3 rounded-full">
                        <IconComponent className="w-6 h-6 text-gray-900" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${product.color} text-white rounded-full text-sm font-semibold mb-3`}>
                      {product.series}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="font-semibold">Resolución:</span>
                        <span className="ml-2">{product.resolution}</span>
                      </div>
                      <div className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                        <div>
                          <span className="font-semibold">Tamaños disponibles:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {product.sizes.map((size, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-1 bg-gray-100 rounded text-xs font-medium"
                              >
                                {size}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Características Técnicas
              </h2>
              <p className="text-xl text-gray-300">
                Tecnología de vanguardia para resultados excepcionales
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-gray-300 flex-shrink-0 mt-1" />
                  <span className="text-gray-100">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Monetization Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-semibold mb-4">
                💰 Monetización Inteligente
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Convierte tus Pantallas en una Fuente de Ingresos
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Genera ingresos adicionales vendiendo espacios publicitarios mientras informas a tus clientes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Vende Espacios</h3>
                  <p className="text-gray-600">
                    Ofrece espacios publicitarios a marcas locales o nacionales en horarios específicos
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">⏰</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Gestión Horaria</h3>
                  <p className="text-gray-600">
                    Programa contenido propio y anuncios publicitarios en diferentes franjas horarias
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">💵</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">ROI Acelerado</h3>
                  <p className="text-gray-600">
                    Recupera la inversión en pantallas más rápido con ingresos publicitarios recurrentes
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Modelo de Negocio Dual
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Tus pantallas trabajan para ti: informan a tus clientes durante el día 
                    y generan ingresos publicitarios las 24 horas
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
                  >
                    <Link to="/contacto">
                      Consultar Modelo de Monetización
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Aplicaciones & Casos de Uso
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones versátiles para múltiples industrias
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card 
                key={index}
                className="border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ALLCOM Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-semibold mb-4">
              🚀 Servicios ALLCOM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Solución Integral de Principio a Fin
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No solo vendemos pantallas, creamos experiencias digitales completas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allcomServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index}
                  className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              <strong>Desde el concepto hasta la implementación:</strong> Diseñamos, instalamos y damos soporte a tu proyecto completo
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para revolucionar tu comunicación?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Agenda una demostración gratuita y descubre cómo la cartelería digital 
            puede transformar tu negocio
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl"
            >
              <Link to="/contacto">
                Agendar Demo Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link to="/cotizacion">Solicitar Cotización</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarteleriaDigital;
