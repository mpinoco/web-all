import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, Package, Smartphone, FileText, Headphones, Shield, 
  GraduationCap, Recycle, Store, Cube, Monitor, CheckCircle, 
  ArrowRight, Zap, Cloud, Calculator, Clock, TrendingUp, Bell,
  Camera, Wifi, CreditCard, Users, Award, Sparkles, Target,
  Lightbulb, Rocket, Heart
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import SEO from '../components/SEO';
import Hashtags from '../components/Hashtags';

const EstoHacemos = () => {
  const [activeCategory, setActiveCategory] = useState('todo');

  const seoData = {
    title: 'Esto Hacemos en ALLCOM - Soluciones Integrales para Retail Chile',
    description: 'Descubre todo lo que ALLCOM ofrece: Dashboard Analytics, Inventario Inteligente, Menú QR, Facturación Electrónica, Soporte IA 24/7, ALLCOM Academy, Trade-In, Virtual Showroom y más. Líder en tecnología retail.',
    keywords: 'soluciones retail Chile, dashboard analytics, inventario inteligente, menu QR, facturación electrónica, soporte 24/7, ALLCOM academy, trade-in POS, virtual showroom',
    canonicalUrl: '/esto-hacemos',
    hashtags: ['#AllcomSoluciones', '#RetailTechChile', '#InnovaciónRetail', '#TecnologíaIntegral', '#SoporteTotal']
  };

  const coreServices = [
    {
      icon: BarChart3,
      title: 'Dashboard Analytics en Tiempo Real',
      category: 'operaciones',
      description: 'Visualiza métricas de tu negocio actualizadas cada minuto',
      features: [
        'KPIs en tiempo real',
        'Análisis de comportamiento de clientes',
        'Reportes por hora/día/mes',
        'Exportación PDF/Excel',
        'Alertas automáticas'
      ],
      color: 'from-blue-500 to-cyan-500',
      status: 'disponible',
      cta: 'Ver Demo'
    },
    {
      icon: Package,
      title: 'Inventario Inteligente con IA',
      category: 'operaciones',
      description: 'Gestión automática de stock con predicción de demanda',
      features: [
        'Sincronización en tiempo real',
        'Predicción de demanda con IA',
        'Alertas WhatsApp automáticas',
        'Control de mermas',
        'Sugerencias de reposición'
      ],
      color: 'from-purple-500 to-pink-500',
      status: 'disponible',
      cta: 'Probar Gratis'
    },
    {
      icon: Smartphone,
      title: 'Menú Digital QR + Pedidos',
      category: 'digital',
      description: 'QR para menú y pedidos sin app, actualización en tiempo real',
      features: [
        'Generador QR personalizado',
        'Pedidos desde celular',
        'Sin instalación de app',
        'Integración con POS',
        'Actualización instantánea'
      ],
      color: 'from-emerald-500 to-teal-500',
      status: 'disponible',
      cta: 'Generar Gratis'
    },
    {
      icon: FileText,
      title: 'Facturación Electrónica SII',
      category: 'operaciones',
      description: 'Facturación integrada con cumplimiento SII Chile',
      features: [
        'Emisión desde POS',
        'Cumplimiento SII',
        'Envío automático email',
        'Almacenamiento cloud',
        'Descarga masiva XML'
      ],
      color: 'from-orange-500 to-red-500',
      status: 'disponible',
      cta: 'Activar Ahora'
    },
    {
      icon: Headphones,
      title: 'Soporte 24/7/365 + IA',
      category: 'soporte',
      description: 'Chatbot IA + técnicos humanos disponibles siempre',
      features: [
        'Chatbot IA primera línea',
        'Técnicos 24/7 casos complejos',
        'WhatsApp Business API',
        'Base conocimientos interactiva',
        'Video tutoriales'
      ],
      color: 'from-indigo-500 to-purple-500',
      status: 'activo',
      cta: 'Contactar Soporte'
    },
    {
      icon: Monitor,
      title: 'Tótems de Autoatención',
      category: 'hardware',
      description: 'Kioskos IMIN con menú personalizable en tiempo real',
      features: [
        'Menú dinámico en tiempo real',
        'Integración cocina KDS',
        'Reducción tiempos de espera',
        'Experiencia cliente mejorada',
        'Analytics integrado'
      ],
      color: 'from-cyan-500 to-blue-500',
      status: 'disponible',
      cta: 'Ver Modelos'
    }
  ];

  const uniquePrograms = [
    {
      icon: Shield,
      title: 'ALLCOM Garantiza',
      subtitle: 'Programa de Garantía Total',
      description: 'La garantía más completa del mercado con seguro de negocio incluido',
      benefits: [
        'Técnico en sitio en 4 horas si falla',
        'Equipo de respaldo mientras se repara',
        'Seguro de lucro cesante',
        'Actualización software 3 años gratis',
        'Sin costos ocultos'
      ],
      color: 'from-green-500 to-emerald-500',
      badge: 'Único en Chile'
    },
    {
      icon: GraduationCap,
      title: 'ALLCOM Academy',
      subtitle: 'Universidad Gratuita para Clientes',
      description: 'Certifica a tu equipo en el uso de sistemas POS y retail tech',
      benefits: [
        'Cursos gratuitos online',
        'Certificación Operador POS Nivel 1-3',
        'Badge digital para empleados',
        'Gamificación con premios',
        'Biblioteca de recursos'
      ],
      color: 'from-blue-500 to-indigo-500',
      badge: 'Exclusivo'
    },
    {
      icon: Recycle,
      title: 'Trade-In Program',
      subtitle: 'Intercambio de Equipos Viejos',
      description: 'Descuento al traer tu equipo viejo + reciclaje responsable',
      benefits: [
        'Valuación inmediata',
        'Crédito 10-30% descuento',
        'Reciclaje certificado',
        'Certificado sustentabilidad',
        'Proceso en 24 horas'
      ],
      color: 'from-teal-500 to-cyan-500',
      badge: 'Eco-friendly'
    },
    {
      icon: Store,
      title: 'ALLCOM Connect',
      subtitle: 'Marketplace de Apps',
      description: 'Tienda de aplicaciones para tus dispositivos ALLCOM',
      benefits: [
        'Apps de terceros certificadas',
        'Apps propias ALLCOM',
        'Instalación one-click',
        'Revenue share developers',
        'Actualizaciones automáticas'
      ],
      color: 'from-purple-500 to-pink-500',
      badge: 'Próximamente'
    },
    {
      icon: Cube,
      title: 'Virtual Showroom 360°',
      subtitle: 'Tour Virtual 3D',
      description: 'Recorre nuestro showroom desde casa en realidad virtual',
      benefits: [
        'Tour 3D interactivo',
        'Ve productos funcionando',
        'Agenda demo desde el tour',
        'Realidad aumentada (AR)',
        'Disponible 24/7'
      ],
      color: 'from-orange-500 to-red-500',
      badge: 'Innovación'
    }
  ];

  const industriesServed = [
    {
      icon: '🛒',
      title: 'Retail & Supermercados',
      subtitle: 'Vende más, gestiona menos',
      solutions: ['POS Inteligentes', 'Balanzas Conectadas', 'Cartelería Digital', 'Inventario Automático'],
      link: '/retail-supermercados'
    },
    {
      icon: '🍽️',
      title: 'Restaurantes & Cafeterías',
      subtitle: 'Tu cocina conectada, tu negocio automatizado',
      solutions: ['POS JUSTO', 'Menú QR', 'KDS Cocina', 'Delivery Integrado'],
      link: '/restaurantes-cafeterias'
    },
    {
      icon: '💊',
      title: 'Farmacias & Minimarkets',
      subtitle: 'Tecnología que vende por ti',
      solutions: ['POS 24/7', 'Control Stock', 'Facturación SII', 'Analytics'],
      link: '/farmacias-minimarkets'
    },
    {
      icon: '🏬',
      title: 'Centros Comerciales',
      subtitle: 'Experiencias digitales que convierten',
      solutions: ['Cartelería DOOH', 'Directorios Digitales', 'Cargadores Smart', 'Analytics Tráfico'],
      link: '/centros-comerciales'
    }
  ];

  const quickWins = [
    {
      icon: Calculator,
      title: 'Calculadoras ROI',
      description: 'Herramientas interactivas para calcular retorno de inversión',
      action: 'Usar Ahora'
    },
    {
      icon: Users,
      title: 'Comparador de Productos',
      description: 'Encuentra tu POS ideal en 1 minuto con quiz interactivo',
      action: 'Comparar'
    },
    {
      icon: Award,
      title: 'Resultados Reales',
      description: 'Casos de éxito con números verificados de clientes',
      action: 'Ver Casos'
    },
    {
      icon: Lightbulb,
      title: 'Consultoría Gratuita',
      description: 'Asesoría personalizada sin costo para tu proyecto',
      action: 'Agendar'
    }
  ];

  const stats = [
    { number: '2,600+', label: 'Clientes Activos', icon: Users },
    { number: '17', label: 'Años de Experiencia', icon: Award },
    { number: '24/7', label: 'Soporte Continuo', icon: Clock },
    { number: '100%', label: 'Cobertura Chile', icon: Target }
  ];

  const categories = [
    { id: 'todo', label: 'Todo', icon: Sparkles },
    { id: 'operaciones', label: 'Operaciones', icon: BarChart3 },
    { id: 'digital', label: 'Digital', icon: Smartphone },
    { id: 'hardware', label: 'Hardware', icon: Monitor },
    { id: 'soporte', label: 'Soporte', icon: Headphones }
  ];

  const filteredServices = activeCategory === 'todo' 
    ? coreServices 
    : coreServices.filter(s => s.category === activeCategory);

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMTZoLTJ2MThoLTJ2Mmgyem0wLTMwaC0ydjJoMlY0em0wIDI4di0yaC0ydjJoMnptMC0xNlYxNGgtMnYyaDJ6bTAtOHYtMmgtMnYyaDJ6bS0yIDB2LTJoLTJ2Mmgyem0yLTJ2LTJoLTJ2Mmgyem0tNCAwdi0yaC0ydjJoMnptMi0ydi0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                ✨ Más que Tecnología, una Solución Completa
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Esto es lo que{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
                  ALLCOM hace por ti
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Soluciones integrales que ningún competidor ofrece. Hardware + Software + Soporte + Innovación.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, idx) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={idx} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-2">
                        <IconComponent className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Services Categories Filter */}
        <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-0 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeCategory === cat.id
                        ? 'bg-emerald-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Servicios que Transforman tu Negocio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada funcionalidad diseñada para que vendas más, gastes menos y crezcas sin límites
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={idx}
                    className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
                  >
                    <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          service.status === 'disponible' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {service.status === 'disponible' ? '✓ Disponible' : '⚡ Activo'}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90`}>
                        {service.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Unique Programs */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-semibold mb-4">
                🌟 Programas Únicos ALLCOM
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Lo que Nadie Más Ofrece
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Innovaciones exclusivas que nos convierten en el líder indiscutible del mercado
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {uniquePrograms.map((program, idx) => {
                const IconComponent = program.icon;
                return (
                  <Card 
                    key={idx}
                    className="border-2 border-gray-200 hover:border-emerald-400 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${program.color} text-white rounded-full text-xs font-bold shadow-lg`}>
                        {program.badge}
                      </span>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{program.title}</h3>
                      <p className="text-sm font-medium text-gray-500 mb-3">{program.subtitle}</p>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      
                      <div className="space-y-2">
                        {program.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start">
                            <Sparkles className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        className={`w-full mt-6 bg-gradient-to-r ${program.color} hover:opacity-90 text-white`}
                      >
                        Más Información
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Soluciones por Industria
              </h2>
              <p className="text-xl text-gray-600">
                Cada sector tiene necesidades únicas. Tenemos la solución perfecta para ti.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industriesServed.map((industry, idx) => (
                <Card 
                  key={idx}
                  className="border-2 border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4">{industry.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{industry.title}</h3>
                    <p className="text-sm text-emerald-600 font-medium mb-4">{industry.subtitle}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {industry.solutions.map((solution, i) => (
                        <li key={i} className="text-sm text-gray-600">
                          • {solution}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline"
                      className="w-full group-hover:bg-emerald-600 group-hover:text-white"
                    >
                      Ver Soluciones
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Wins */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Herramientas Gratuitas
              </h2>
              <p className="text-xl text-gray-600">
                Usa nuestras herramientas sin costo para descubrir el valor que podemos agregarte
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickWins.map((tool, idx) => {
                const IconComponent = tool.icon;
                return (
                  <Card 
                    key={idx}
                    className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                      <Button 
                        size="sm"
                        className="bg-emerald-600 hover:bg-emerald-700"
                      >
                        {tool.action}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <Rocket className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Agenda una consultoría gratuita y descubre cómo ALLCOM puede llevar tu retail al siguiente nivel
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-white text-emerald-900 hover:bg-gray-100 text-lg px-8"
              >
                <Link to="/contacto">
                  Agendar Consultoría Gratis
                  <Heart className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 text-lg px-8"
              >
                <Link to="/productos">
                  Ver Catálogo Completo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Hashtags tags={seoData.hashtags} />
    </>
  );
};

export default EstoHacemos;
