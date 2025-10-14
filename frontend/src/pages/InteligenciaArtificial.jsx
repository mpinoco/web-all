import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Brain,
  Sparkles,
  TrendingUp,
  BarChart3,
  Zap,
  Bot,
  MessageSquare,
  ShoppingCart,
  Eye,
  Target,
  Cpu,
  Package,
  ChevronRight,
  CheckCircle2,
  Globe,
  Layers,
  Code,
  Database,
  Cog,
  LineChart,
  PieChart,
  Activity
} from 'lucide-react';

const InteligenciaArtificial = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [dashboardData, setDashboardData] = useState({
    sales: 0,
    customers: 0,
    accuracy: 0,
    efficiency: 0
  });

  // Animated dashboard metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setDashboardData({
        sales: Math.floor(Math.random() * 40) + 60,
        customers: Math.floor(Math.random() * 300) + 150,
        accuracy: Math.floor(Math.random() * 5) + 95,
        efficiency: Math.floor(Math.random() * 10) + 85
      });
      setActiveMetric(prev => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const aiEngines = [
    {
      name: 'Emergent AI',
      logo: 'E',
      color: 'from-purple-500 to-pink-500',
      description: 'Plataforma líder en agentes de IA',
      features: ['Agentes Autónomos', 'LLM Multi-modelo', 'Retail First']
    },
    {
      name: 'OpenAI GPT',
      logo: '🤖',
      color: 'from-green-500 to-teal-500',
      description: 'Motor de lenguaje más avanzado',
      features: ['GPT-4 Turbo', 'Visión por IA', 'Code Interpreter']
    },
    {
      name: 'Google AI',
      logo: 'G',
      color: 'from-blue-500 to-cyan-500',
      description: 'Gemini y Vertex AI',
      features: ['Multimodal', 'Cloud Native', 'Enterprise Ready']
    },
    {
      name: 'Banana Dev',
      logo: '🍌',
      color: 'from-yellow-500 to-orange-500',
      description: 'GPU serverless para ML',
      features: ['Inference Rápida', 'Scale Automático', 'Cost Efectivo']
    }
  ];

  const solutions = [
    {
      title: 'Agentes de IA Conversacional',
      icon: MessageSquare,
      description: 'Asistentes virtuales inteligentes para atención al cliente 24/7',
      features: [
        'Respuestas en tiempo real',
        'Comprensión de contexto',
        'Multi-idioma',
        'Integración WhatsApp/Web'
      ],
      color: 'blue',
      stats: { efficiency: '+85%', satisfaction: '4.8/5' }
    },
    {
      title: 'Análisis Predictivo de Demanda',
      icon: TrendingUp,
      description: 'Predicción de ventas y optimización de inventario con ML',
      features: [
        'Forecasting avanzado',
        'Detección de patrones',
        'Alertas automáticas',
        'Optimización de stock'
      ],
      color: 'green',
      stats: { accuracy: '95%+', savings: '-30% costos' }
    },
    {
      title: 'Visión por Computadora',
      icon: Eye,
      description: 'Reconocimiento de productos, detección de fraude y analytics visual',
      features: [
        'Detección de objetos',
        'Control de calidad',
        'Analytics de tráfico',
        'Prevención de pérdidas'
      ],
      color: 'purple',
      stats: { detection: '98%', speed: '<100ms' }
    },
    {
      title: 'Personalización Dinámica',
      icon: Target,
      description: 'Recomendaciones personalizadas y pricing inteligente',
      features: [
        'Recomendaciones 1:1',
        'Dynamic pricing',
        'Segmentación avanzada',
        'A/B testing automático'
      ],
      color: 'orange',
      stats: { conversion: '+45%', revenue: '+32%' }
    },
    {
      title: 'Automatización de Procesos',
      icon: Cog,
      description: 'RPA + IA para automatizar operaciones retail',
      features: [
        'Procesamiento de órdenes',
        'Gestión de inventario',
        'Facturación automática',
        'Conciliación bancaria'
      ],
      color: 'red',
      stats: { time: '-70%', errors: '-95%' }
    },
    {
      title: 'Suite de Gestión Inteligente',
      icon: Layers,
      description: 'Plataforma completa para administrar hardware y software retail',
      features: [
        'Dashboard unificado',
        'Monitoreo en tiempo real',
        'Mantenimiento predictivo',
        'Reportes automáticos'
      ],
      color: 'indigo',
      stats: { uptime: '99.9%', efficiency: '+60%' }
    }
  ];

  const implementations = [
    {
      title: 'Kioscos Aeropuerto con IA',
      image: '✈️',
      description: 'Sistema de autoservicio inteligente con reconocimiento facial y asistente virtual',
      technologies: ['OpenAI GPT-4', 'Computer Vision', 'NLP'],
      results: [
        'Reducción 60% tiempo de espera',
        'Satisfacción cliente 4.9/5',
        '15,000 transacciones/día',
        'Multi-idioma automático'
      ],
      location: 'Aeropuerto Santiago',
      status: 'En Operación'
    },
    {
      title: 'Balanzas Comerciales IA',
      image: '⚖️',
      description: 'Balanzas inteligentes con reconocimiento de productos y sugerencias de precio',
      technologies: ['Google Vision AI', 'Emergent', 'ML Models'],
      results: [
        'Identificación automática productos',
        'Sugerencias precio dinámico',
        'Detección fraude 98%',
        'Integración inventario real-time'
      ],
      location: 'Cadena Supermercados',
      status: 'Producción'
    },
    {
      title: 'Suite Gestión Retail IA',
      image: '🏪',
      description: 'Plataforma completa para administrar tiendas con IA predictiva',
      technologies: ['Emergent Agents', 'GPT-4', 'Analytics ML'],
      results: [
        'Dashboard unificado multi-tienda',
        'Predicción demanda 95% accuracy',
        'Alertas automáticas stock',
        'Reportes IA en tiempo real'
      ],
      location: 'Retail Nacional',
      status: 'Activo'
    },
    {
      title: 'Chatbot Ventas 24/7',
      image: '💬',
      description: 'Asistente virtual inteligente para e-commerce y WhatsApp',
      technologies: ['GPT-4 Turbo', 'Banana Dev', 'WhatsApp API'],
      results: [
        'Respuestas instantáneas',
        'Conversión +35%',
        'Atención 24/7 sin personal',
        'Satisfacción 4.7/5'
      ],
      location: 'E-commerce Multi-marca',
      status: 'Escalando'
    }
  ];

  const metrics = [
    { label: 'Ventas', value: dashboardData.sales, unit: '%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Clientes', value: dashboardData.customers, unit: '', icon: ShoppingCart, color: 'text-blue-600' },
    { label: 'Precisión', value: dashboardData.accuracy, unit: '%', icon: Target, color: 'text-purple-600' },
    { label: 'Eficiencia', value: dashboardData.efficiency, unit: '%', icon: Zap, color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <Badge className="bg-white/20 text-white border-white/30 mb-6 text-sm px-4 py-2 backdrop-blur-sm">
              Inteligencia Artificial Aplicada al Retail
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              IA que Transforma tu Negocio
            </h1>
            
            <p className="text-2xl md:text-3xl mb-4 font-light">
              Soluciones Inteligentes con los Mejores Motores de IA
            </p>
            
            <p className="text-xl mb-8 text-indigo-50 max-w-3xl mx-auto">
              ALLCOM desarrolla agentes de IA, LLMs personalizados y suites completas para revolucionar 
              el retail con tecnología de punta.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg shadow-xl"
                onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Sparkles className="mr-2" />
                Ver Soluciones
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg backdrop-blur-sm shadow-xl"
                onClick={() => window.open('https://wa.me/56912345678?text=Hola, quiero información sobre IA', '_blank')}
              >
                Contactar Expertos
              </Button>
            </div>

            {/* Animated Logos of AI Engines */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {aiEngines.map((engine, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`text-4xl font-bold bg-gradient-to-r ${engine.color} bg-clip-text text-transparent mb-2`}>
                    {engine.logo}
                  </div>
                  <div className="text-sm font-bold text-white">{engine.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Dashboard Demo */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-purple-500 text-white mb-4 px-4 py-2">
                <Activity className="w-4 h-4 inline mr-2" />
                Dashboard en Tiempo Real
              </Badge>
              <h2 className="text-4xl font-bold mb-4">
                Analytics Potenciados por IA
              </h2>
              <p className="text-gray-400 text-lg">
                Visualiza el poder de nuestras soluciones en acción
              </p>
            </div>

            {/* Animated Dashboard */}
            <Card className="bg-gray-800 border-gray-700 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  {metrics.map((metric, index) => (
                    <div 
                      key={index}
                      className={`bg-gray-900 rounded-lg p-6 transform transition-all duration-500 ${
                        activeMetric === index ? 'scale-110 shadow-2xl ring-2 ring-purple-500' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <metric.icon className={`w-8 h-8 ${metric.color}`} />
                        <Badge className="bg-green-500 text-white animate-pulse">Live</Badge>
                      </div>
                      <div className="text-4xl font-bold mb-2">
                        {metric.value}{metric.unit}
                      </div>
                      <div className="text-gray-400 text-sm">{metric.label}</div>
                      <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${
                            index === 0 ? 'from-green-500 to-emerald-500' :
                            index === 1 ? 'from-blue-500 to-cyan-500' :
                            index === 2 ? 'from-purple-500 to-pink-500' :
                            'from-orange-500 to-red-500'
                          } transition-all duration-1000`}
                          style={{ width: `${metric.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Animated Charts */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-900 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <LineChart className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="text-sm font-bold">Tendencias</span>
                    </div>
                    <div className="h-32 flex items-end justify-around space-x-1">
                      {[...Array(12)].map((_, i) => (
                        <div 
                          key={i}
                          className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t animate-pulse"
                          style={{ 
                            height: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <PieChart className="w-5 h-5 text-purple-500 mr-2" />
                      <span className="text-sm font-bold">Distribución</span>
                    </div>
                    <div className="flex items-center justify-center h-32">
                      <div className="relative w-32 h-32">
                        <div className="absolute inset-0 rounded-full border-8 border-purple-500 animate-spin" style={{ borderTopColor: 'transparent' }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold">87%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <BarChart3 className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm font-bold">Comparativa</span>
                    </div>
                    <div className="space-y-3">
                      {['IA', 'Manual', 'Híbrido'].map((label, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-xs mb-1">
                            <span>{label}</span>
                            <span>{[95, 45, 70][i]}%</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${
                                i === 0 ? 'from-green-500 to-emerald-500' :
                                i === 1 ? 'from-red-500 to-orange-500' :
                                'from-yellow-500 to-amber-500'
                              } animate-pulse`}
                              style={{ width: `${[95, 45, 70][i]}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Engines Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-indigo-100 text-indigo-600 mb-4 px-4 py-2">
              <Cpu className="w-4 h-4 inline mr-2" />
              Tecnología de Vanguardia
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Motores de IA de Clase Mundial
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabajamos con los mejores proveedores de inteligencia artificial para crear soluciones únicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {aiEngines.map((engine, index) => (
              <Card 
                key={index}
                className="border-2 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${engine.color} flex items-center justify-center text-4xl font-bold text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {engine.logo}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{engine.name}</h3>
                  <p className="text-gray-600 mb-6">{engine.description}</p>
                  <div className="space-y-2">
                    {engine.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="soluciones" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-600 mb-4 px-4 py-2">
              <Bot className="w-4 h-4 inline mr-2" />
              Nuestras Soluciones
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              IA Aplicada al Retail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desarrollamos agentes, LLMs y suites completas para transformar tu operación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <Card 
                key={index}
                className={`border-2 border-${solution.color}-100 hover:border-${solution.color}-300 hover:shadow-2xl transition-all duration-300 group`}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-${solution.color}-100 flex items-center justify-center mb-6 group-hover:bg-${solution.color}-600 transition-colors`}>
                    <solution.icon className={`w-8 h-8 text-${solution.color}-600 group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Sparkles className={`w-4 h-4 text-${solution.color}-500 mr-2 mt-1 flex-shrink-0`} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-gray-200">
                    {Object.entries(solution.stats).map(([key, value], idx) => (
                      <div key={idx} className="flex-1">
                        <div className={`text-xl font-bold text-${solution.color}-600`}>{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementations Section */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-white/20 text-white mb-4 px-4 py-2">
              <Globe className="w-4 h-4 inline mr-2" />
              Casos de Éxito
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Implementaciones Reales con IA
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Proyectos en producción que demuestran el poder de la IA en retail
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {implementations.map((impl, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl">{impl.image}</div>
                    <Badge className="bg-green-500 text-white">{impl.status}</Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{impl.title}</h3>
                  <p className="text-indigo-200 mb-6">{impl.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {impl.technologies.map((tech, idx) => (
                      <Badge key={idx} className="bg-purple-500 text-white">
                        <Code className="w-3 h-3 mr-1" />
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    {impl.results.map((result, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-indigo-100">{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="flex items-center text-sm">
                      <Globe className="w-4 h-4 mr-2 text-indigo-300" />
                      {impl.location}
                    </div>
                    <Button 
                      size="sm"
                      className="bg-white text-indigo-900 hover:bg-indigo-50"
                      onClick={() => window.open('https://wa.me/56912345678?text=Quiero saber más sobre este caso', '_blank')}
                    >
                      Ver Más
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Brain className="w-20 h-20 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para Revolucionar tu Retail con IA?
            </h2>
            <p className="text-xl mb-8 text-pink-100">
              Nuestro equipo de expertos en IA está listo para desarrollar la solución perfecta para tu negocio.
              Desde agentes conversacionales hasta suites completas de gestión inteligente.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-pink-50 px-8 py-6 text-lg shadow-xl"
                onClick={() => window.open('https://wa.me/56912345678?text=Hola, quiero implementar IA en mi negocio', '_blank')}
              >
                <Sparkles className="mr-2" />
                Agendar Consultoría IA
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
                onClick={() => window.open('mailto:ia@allcom.cl?subject=Consulta sobre IA', '_blank')}
              >
                <MessageSquare className="mr-2" />
                Hablar con Expertos
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm text-pink-100">Proyectos IA</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm text-pink-100">Precisión Media</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm text-pink-100">Soporte IA</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-pink-100">Personalizado</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteligenciaArtificial;
