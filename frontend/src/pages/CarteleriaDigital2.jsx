import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Zap, Cloud, Monitor, Settings, DollarSign, BarChart3, Clock, ShieldCheck, Play, ChevronRight, Calculator } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import SEO from '../components/SEO';

const CarteleriaDigital2 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  
  const seoData = {
    title: 'Cartelería Digital que Vende y se Administra Sola - ROI Calculable',
    description: 'Pantallas profesionales 24/7, alto brillo hasta 3000 cd/m², CMS en la nube y soporte integral ALLCOM. Instalamos, operamos y medimos para maximizar tu negocio. Calcula tu ROI ahora.',
    keywords: 'cartelería digital retail, calculadora ROI digital signage, pantallas restaurantes, menús digitales, CMS horarios, monetización DOOH, pantallas 3000 cd/m², videowall 1.8mm, Android OS signage, soluciones retail Chile',
    canonicalUrl: '/carteleria-digital-2',
    ogImage: 'https://allcom.cl/images/carteleria2_hero.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Cartelería Digital ALLCOM - Solución Integral',
      description: 'Servicio completo de cartelería digital para retail: desde asesoría e instalación hasta operación 24/7 y monetización de pantallas.',
      provider: {
        '@type': 'Organization',
        name: 'ALLCOM',
        url: 'https://allcom.cl',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'CL',
          addressLocality: 'Santiago'
        }
      },
      areaServed: {
        '@type': 'Country',
        name: 'Chile'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Soluciones de Cartelería Digital',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Serie S - Pantallas Profesionales 32"-86"'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Serie B - Bar Displays 23"-47"'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Serie Especial - Videowall y Outdoor'
            }
          }
        ]
      }
    }
  };
  
  // Calculadora ROI
  const [roiInputs, setRoiInputs] = useState({
    pantallas: 5,
    costoImpresion: 150000,
    ingresosPauta: 300000,
    ticketPromedio: 15000,
    uplift: 15
  });

  const calcularROI = () => {
    const transaccionesDiarias = 50; // estimado
    const upliftMensual = (roiInputs.uplift / 100) * roiInputs.ticketPromedio * 30 * transaccionesDiarias * roiInputs.pantallas;
    const costoOperacion = roiInputs.pantallas * 80000; // costo mensual por pantalla
    const ahorroImpresion = roiInputs.costoImpresion;
    const roiMensual = roiInputs.ingresosPauta + upliftMensual + ahorroImpresion - costoOperacion;
    const inversionInicial = roiInputs.pantallas * 1200000; // costo por pantalla
    const mesesRetorno = roiMensual > 0 ? Math.ceil(inversionInicial / roiMensual) : 0;
    
    return {
      roiMensual: Math.round(roiMensual),
      mesesRetorno,
      upliftMensual: Math.round(upliftMensual),
      ahorroImpresion
    };
  };

  const roi = calcularROI();

  const metrics = [
    { value: '3000', unit: 'cd/m²', label: 'brillo día/noche' },
    { value: '24/7', unit: '', label: 'operación continua' },
    { value: '1.8', unit: 'mm', label: 'bezel videowall' },
    { value: 'Android', unit: 'OS', label: 'control total' }
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Solución Integral',
      description: 'Asesoría, hardware, instalación, contenidos y operación 24/7'
    },
    {
      icon: Cloud,
      title: 'CMS en la Nube',
      description: 'Plantillas, programación por horario/tienda y monitoreo remoto'
    },
    {
      icon: Check,
      title: 'Experiencia Retail Chile',
      description: 'Cobertura nacional con soporte cercano y respuesta <24h'
    }
  ];

  const formats = [
    {
      serie: 'Serie S',
      range: '32" - 86"',
      description: 'Señalización FHD/UHD',
      specs: ['Alto brillo', 'Vertical/Horizontal', 'Android OS', 'VESA mount'],
      image: 'https://images.unsplash.com/photo-1639087595550-e9770a85f8c0?w=600&auto=format&fit=crop'
    },
    {
      serie: 'Serie B',
      range: '23" - 47"',
      description: 'Bar displays / Menús',
      specs: ['Formato alargado', 'Menús digitales', 'Android OS', 'Montaje custom'],
      image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?w=600&auto=format&fit=crop'
    },
    {
      serie: 'Especiales',
      range: 'Custom',
      description: 'Videowall / Dual / Outdoor',
      specs: ['Bezel 1.8mm', 'Semi-outdoor 3000cd', 'Dual display', 'Proyectos a medida'],
      image: 'https://images.unsplash.com/photo-1649150849642-c53366ebb480?w=600&auto=format&fit=crop'
    }
  ];

  const services = [
    { step: 1, title: 'Descubrimiento', tasks: ['Análisis de necesidades', 'Visita técnica', 'Propuesta inicial'] },
    { step: 2, title: 'Ingeniería', tasks: ['Diseño de solución', 'Selección de hardware', 'Plan de implementación'] },
    { step: 3, title: 'Instalación', tasks: ['Montaje profesional', 'Cableado e integración', 'Pruebas en sitio'] },
    { step: 4, title: 'Contenidos', tasks: ['Diseño gráfico', 'Plantillas personalizadas', 'Capacitación CMS'] },
    { step: 5, title: 'Operación 24/7', tasks: ['Monitoreo remoto', 'Actualizaciones', 'Soporte continuo'] }
  ];

  const useCases = [
    {
      title: 'Retail',
      benefits: ['Promociones dinámicas', 'Reducción costos impresión'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&auto=format&fit=crop'
    },
    {
      title: 'Restaurantes',
      benefits: ['Menús digitales', 'Actualización en tiempo real'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop'
    },
    {
      title: 'Centros Comerciales',
      benefits: ['Directorios digitales', 'Publicidad dinámica'],
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=400&auto=format&fit=crop'
    },
    {
      title: 'Corporativo',
      benefits: ['Comunicación interna', 'Salas de reunión'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&auto=format&fit=crop'
    }
  ];

  const faqs = [
    {
      q: '¿Cuánto demora la instalación?',
      a: 'Entre 2-5 días hábiles dependiendo del proyecto. Instalación profesional con mínima interrupción.'
    },
    {
      q: '¿Qué incluye el soporte 24/7?',
      a: 'Monitoreo remoto, actualizaciones de contenido, soporte técnico y reemplazo de equipos en garantía.'
    },
    {
      q: '¿Puedo integrar con mi sistema POS?',
      a: 'Sí, nuestro CMS se integra con la mayoría de sistemas POS y kioscos mediante API.'
    },
    {
      q: '¿Quién crea los contenidos?',
      a: 'Podemos crearlos nosotros o capacitarte para que tu equipo los maneje con plantillas prediseñadas.'
    }
  ];

  const cmsFeatures = [
    { title: 'Programación por Horarios', desc: 'Contenido diferente en cada franja horaria' },
    { title: 'Split-View', desc: 'Múltiples zonas en una misma pantalla' },
    { title: 'Dashboard de Monitoreo', desc: 'Estado en tiempo real de todas tus pantallas' },
    { title: 'Actualización Remota', desc: 'Cambios instantáneos desde cualquier lugar' }
  ];

  return (
    <>
      <SEO {...seoData} />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative min-h-[85vh] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(14, 31, 42, 0.7), rgba(14, 31, 42, 0.7)), url('/images/carteleria2_hero.png')`
        }}
      >
        {/* Decorative gradient blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#2ECC71] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2ECC71] opacity-10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-[#2ECC71]/20 backdrop-blur-sm rounded-full text-sm font-medium">
                ✨ Cartelería Digital Profesional
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Cartelería Digital que{' '}
                <span className="text-[#2ECC71]">vende</span> y se{' '}
                <span className="text-[#2ECC71]">administra sola</span>
              </h1>
              
              <p className="text-xl text-gray-300">
                Pantallas profesionales 24/7, alto brillo, CMS en la nube y soporte integral de ALLCOM. 
                Instalamos, operamos y medimos para maximizar tu negocio.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-[#2ECC71] hover:bg-[#27ae60] text-white text-lg px-8"
                >
                  Agendar Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#2ECC71] text-[#2ECC71] hover:bg-[#2ECC71] hover:text-white text-lg px-8"
                >
                  Calcula tu ROI
                  <Calculator className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Before/After Animation */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-400">
                    {showBeforeAfter ? 'Después: Digital' : 'Antes: Papel'}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                    className="bg-[#2ECC71] hover:bg-[#27ae60]"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center text-6xl transition-all duration-500">
                  {showBeforeAfter ? '📺' : '📄'}
                </div>
                <p className="mt-4 text-sm text-gray-400 text-center">
                  {showBeforeAfter 
                    ? 'Actualización instantánea, cero desperdicio' 
                    : 'Impresión costosa, desactualizada'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gradient-to-r from-[#2ECC71] to-[#27ae60]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="text-center group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {metric.value}{metric.unit && <span className="text-2xl ml-1">{metric.unit}</span>}
                  </div>
                  <div className="text-white/80 font-medium">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Por qué ALLCOM? */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Por qué <span className="text-[#2ECC71]">ALLCOM</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Somos especialistas en retail con soluciones end-to-end
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2ECC71] to-[#27ae60] rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portafolio de Formatos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Portafolio de Formatos
            </h2>
            <p className="text-xl text-gray-600">
              Soluciones para cada espacio y necesidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {formats.map((format, idx) => (
              <Card key={idx} className="border-2 border-gray-200 hover:border-[#2ECC71] hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={format.image}
                    alt={format.serie}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-bold">{format.serie}</div>
                    <div className="text-2xl font-bold">{format.range}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{format.description}</h3>
                  <ul className="space-y-2">
                    {format.specs.map((spec, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <Check className="w-4 h-4 text-[#2ECC71] mr-2 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monetización */}
      <section className="py-20 bg-gradient-to-br from-[#0E1F2A] to-[#1a3a47] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-[#2ECC71]/20 rounded-full text-sm font-medium mb-6">
              💰 Monetización DOOH
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Monetiza tus Pantallas
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Vende espacios publicitarios por franja y acelera tu ROI con ingresos recurrentes
            </p>

            {/* Flujo de monetización */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">Marcas</h4>
                  <p className="text-sm text-gray-400">Atraes anunciantes</p>
                </div>
                <div className="flex items-center justify-center">
                  <ChevronRight className="w-6 h-6 text-[#2ECC71]" />
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">Pauta</h4>
                  <p className="text-sm text-gray-400">Programas horarios</p>
                </div>
                <div className="flex items-center justify-center">
                  <ChevronRight className="w-6 h-6 text-[#2ECC71]" />
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">Reportes</h4>
                  <p className="text-sm text-gray-400">Métricas reales</p>
                </div>
              </div>
              
              <Button 
                size="lg"
                className="bg-[#2ECC71] hover:bg-[#27ae60] text-white mt-8"
              >
                Quiero el Modelo de Monetización
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CMS Demo */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Operación sin Fricción
            </h2>
            <p className="text-xl text-gray-600">
              CMS en la nube con control central y reglas por sucursal
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {cmsFeatures.map((feature, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === idx
                      ? 'bg-[#2ECC71] text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {feature.title}
                </button>
              ))}
            </div>

            <Card className="border-none shadow-2xl">
              <CardContent className="p-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2ECC71] to-[#27ae60] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Monitor className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {cmsFeatures[activeTab].title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {cmsFeatures[activeTab].desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios End-to-End */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Servicios <span className="text-[#2ECC71]">End-to-End</span>
            </h2>
            <p className="text-xl text-gray-600">
              Soporte integral a nivel nacional
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#2ECC71] to-[#27ae60]"></div>
              
              {services.map((service, idx) => (
                <div key={idx} className={`relative mb-12 ${idx % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                  <Card className="border-2 border-gray-200 hover:border-[#2ECC71] hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#2ECC71] to-[#27ae60] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">{service.step}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                          <ul className="space-y-2">
                            {service.tasks.map((task, i) => (
                              <li key={i} className="flex items-center text-gray-600">
                                <Check className="w-4 h-4 text-[#2ECC71] mr-2 flex-shrink-0" />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg"
                className="bg-[#2ECC71] hover:bg-[#27ae60] text-white text-lg px-8"
              >
                Arma tu Proyecto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Casos de Uso
            </h2>
            <p className="text-xl text-gray-600">
              Soluciones para múltiples industrias
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => (
              <Card 
                key={idx}
                className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {useCase.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <Check className="w-4 h-4 text-[#2ECC71] mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculadora ROI */}
      <section className="py-20 bg-gradient-to-br from-[#2ECC71] to-[#27ae60] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
                📊 Calculadora Interactiva
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Calcula tu ROI
              </h2>
              <p className="text-xl text-white/90">
                Descubre cuánto puedes ahorrar y ganar con cartelería digital
              </p>
            </div>

            <Card className="border-none shadow-2xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número de Pantallas
                    </label>
                    <input
                      type="number"
                      value={roiInputs.pantallas}
                      onChange={(e) => setRoiInputs({...roiInputs, pantallas: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Costo Impresión POP Mensual ($)
                    </label>
                    <input
                      type="number"
                      value={roiInputs.costoImpresion}
                      onChange={(e) => setRoiInputs({...roiInputs, costoImpresion: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ingresos Pauta Mensual ($)
                    </label>
                    <input
                      type="number"
                      value={roiInputs.ingresosPauta}
                      onChange={(e) => setRoiInputs({...roiInputs, ingresosPauta: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ticket Promedio ($)
                    </label>
                    <input
                      type="number"
                      value={roiInputs.ticketPromedio}
                      onChange={(e) => setRoiInputs({...roiInputs, ticketPromedio: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Uplift Estimado en Ventas (%)
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      value={roiInputs.uplift}
                      onChange={(e) => setRoiInputs({...roiInputs, uplift: parseInt(e.target.value)})}
                      className="w-full"
                    />
                    <div className="text-center text-2xl font-bold text-[#2ECC71] mt-2">
                      {roiInputs.uplift}%
                    </div>
                  </div>
                </div>

                {/* Resultados */}
                <div className="bg-gradient-to-br from-[#2ECC71]/10 to-[#27ae60]/10 rounded-2xl p-8 mb-6">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-sm text-gray-600 mb-2">ROI Mensual</div>
                      <div className="text-3xl font-bold text-[#2ECC71]">
                        ${roi.roiMensual.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-2">Meses de Retorno</div>
                      <div className="text-3xl font-bold text-[#2ECC71]">
                        {roi.mesesRetorno}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-2">Ahorro Impresión</div>
                      <div className="text-3xl font-bold text-[#2ECC71]">
                        ${roi.ahorroImpresion.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  size="lg"
                  className="w-full bg-[#2ECC71] hover:bg-[#27ae60] text-white text-lg"
                >
                  Enviar Cálculo y Cotizar
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Preguntas Frecuentes
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="border-2 border-gray-200 hover:border-[#2ECC71] transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#0E1F2A] to-[#1a3a47] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para Transformar tu Comunicación?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Respuesta en menos de 24 horas. Agenda tu demo personalizada.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-[#2ECC71] hover:bg-[#27ae60] text-white text-lg px-8"
            >
              Cotizar Proyecto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0E1F2A] text-lg px-8"
            >
              Agendar Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarteleriaDigital2;
