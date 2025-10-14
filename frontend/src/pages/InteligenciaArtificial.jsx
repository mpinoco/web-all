import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Brain, Sparkles, TrendingUp, BarChart3, Zap, Bot, MessageSquare, ShoppingCart, Eye, Target, Cpu,
  Package, ChevronRight, CheckCircle2, Globe, Layers, Code, Cog, LineChart, PieChart, Activity,
  Lightbulb, Users, DollarSign, Calendar, Clock, AlertCircle, TrendingDown, RefreshCw, FileText
} from 'lucide-react';

const InteligenciaArtificial = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [currentSuggestion, setCurrentSuggestion] = useState(0);
  const [dashboardData, setDashboardData] = useState({ sales: 0, customers: 0, accuracy: 0, efficiency: 0 });

  // 25 AI Suggestions (no API, stored locally)
  const aiSuggestions = [
    { icon: TrendingUp, text: 'Aumento ventas "Lácteos" (+23%)', color: '#6EEA6A' },
    { icon: AlertCircle, text: 'Stock bajo "Arroz". Reponer 150 unidades', color: '#D81B60' },
    { icon: Users, text: '45 clientes nuevos. Ampliar campañas', color: '#0072CE' },
    { icon: DollarSign, text: 'Ajustar precio "Aceite" -5%', color: '#23C7C2' },
    { icon: Calendar, text: 'Fin de semana largo. +40% stock bebidas', color: '#7A5CFF' },
    { icon: Clock, text: 'Peak 18-19:30h. +2 cajeros', color: '#2D7FF9' },
    { icon: TrendingDown, text: 'Baja demanda "Helados". Promo 2x1', color: '#D81B60' },
    { icon: Package, text: 'Orgánicos +15%. Expandir sección', color: '#6EEA6A' },
    { icon: Eye, text: '234 vieron "Vino" sin comprar. Oferta', color: '#7A5CFF' },
    { icon: RefreshCw, text: 'Rotación lenta "Galletas". Reubicar', color: '#D81B60' },
    { icon: Target, text: 'Cliente frecuente. Cupón 10% generado', color: '#23C7C2' },
    { icon: BarChart3, text: 'Proyección mes: $2.8M (+12%)', color: '#6EEA6A' },
    { icon: ShoppingCart, text: 'Ticket bajo. Sugerir complementos', color: '#0072CE' },
    { icon: Lightbulb, text: 'Bundle "Pan+Jamón+Queso" +18%', color: '#7A5CFF' },
    { icon: FileText, text: 'Inventario listo. 5 discrepancias', color: '#D81B60' },
    { icon: Users, text: '12 clientes inactivos 30d. Reactivar', color: '#2D7FF9' },
    { icon: TrendingUp, text: '"Snacks" +34% trimestre. Ampliar', color: '#6EEA6A' },
    { icon: Clock, text: 'Tiempo caja: 3.2min. Optimizar', color: '#23C7C2' },
    { icon: DollarSign, text: 'Margen bajo "Frutas". Subir +8%', color: '#D81B60' },
    { icon: Package, text: 'Proveedor nuevo -12% precios', color: '#0072CE' },
    { icon: Target, text: '"Familias" 45% ventas. Personalizar', color: '#7A5CFF' },
    { icon: TrendingDown, text: 'Competencia bajó "Leche". Ajustar -3%', color: '#D81B60' },
    { icon: Sparkles, text: 'Sin gluten trending. +25 SKUs', color: '#6EEA6A' },
    { icon: BarChart3, text: 'Conversión web 23%. Click&collect', color: '#2D7FF9' },
    { icon: MessageSquare, text: '18 WhatsApp sin responder. Automatizar', color: '#23C7C2' }
  ];

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

  useEffect(() => {
    const suggestionInterval = setInterval(() => {
      setCurrentSuggestion(prev => (prev + 1) % aiSuggestions.length);
    }, 4000);
    return () => clearInterval(suggestionInterval);
  }, []);

  const aiEngines = [
    { name: 'Emergent AI', logo: 'E', color: 'from-[#7A5CFF] to-[#D81B60]', description: 'Agentes de IA líder', features: ['Agentes Autónomos', 'LLM Multi-modelo'] },
    { name: 'OpenAI GPT', logo: '🤖', color: 'from-[#6EEA6A] to-[#23C7C2]', description: 'Motor lenguaje avanzado', features: ['GPT-4 Turbo', 'Visión IA'] },
    { name: 'Google AI', logo: 'G', color: 'from-[#0072CE] to-[#2D7FF9]', description: 'Gemini y Vertex AI', features: ['Multimodal', 'Cloud Native'] },
    { name: 'Banana Dev', logo: '🍌', color: 'from-[#6EEA6A] to-[#D81B60]', description: 'GPU serverless', features: ['Inference Rápida', 'Scale Auto'] }
  ];

  const solutions = [
    { title: 'Agentes Conversacionales', icon: MessageSquare, description: 'Asistentes 24/7', features: ['Tiempo real', 'Multi-idioma'], colorClass: 'text-[#0072CE]', bgClass: 'bg-[#0072CE]/10', stats: { e: '+85%', s: '4.8/5' } },
    { title: 'Análisis Predictivo', icon: TrendingUp, description: 'Predicción ventas', features: ['Forecasting', 'Alertas auto'], colorClass: 'text-[#6EEA6A]', bgClass: 'bg-[#6EEA6A]/10', stats: { a: '95%+', s: '-30%' } },
    { title: 'Visión Computadora', icon: Eye, description: 'Reconocimiento productos', features: ['Detección objetos', 'Analytics'], colorClass: 'text-[#7A5CFF]', bgClass: 'bg-[#7A5CFF]/10', stats: { d: '98%', s: '<100ms' } },
    { title: 'Personalización', icon: Target, description: 'Recomendaciones 1:1', features: ['Dynamic pricing', 'A/B testing'], colorClass: 'text-[#D81B60]', bgClass: 'bg-[#D81B60]/10', stats: { c: '+45%', r: '+32%' } },
    { title: 'Automatización', icon: Cog, description: 'RPA + IA retail', features: ['Proceso órdenes', 'Facturación'], colorClass: 'text-[#23C7C2]', bgClass: 'bg-[#23C7C2]/10', stats: { t: '-70%', e: '-95%' } },
    { title: 'Suite Gestión', icon: Layers, description: 'Plataforma completa', features: ['Dashboard único', 'Monitoreo 24/7'], colorClass: 'text-[#2D7FF9]', bgClass: 'bg-[#2D7FF9]/10', stats: { u: '99.9%', e: '+60%' } }
  ];

  const implementations = [
    { title: 'Kioscos Aeropuerto IA', image: '✈️', description: 'Autoservicio con reconocimiento facial', tech: ['GPT-4', 'Vision', 'NLP'], results: ['-60% espera', '4.9/5', '15K/día'], location: 'SCL', status: 'Operación' },
    { title: 'Balanzas IA', image: '⚖️', description: 'Reconocimiento automático productos', tech: ['Google Vision', 'Emergent'], results: ['ID automático', 'Precio dinámico', 'Fraude 98%'], location: 'Cadena', status: 'Producción' },
    { title: 'Suite Gestión IA', image: '🏪', description: 'Administración tiendas predictiva', tech: ['Emergent', 'GPT-4', 'ML'], results: ['Dashboard multi', '95% accuracy', 'Alertas auto'], location: 'Nacional', status: 'Activo' },
    { title: 'Chatbot 24/7', image: '💬', description: 'Asistente e-commerce WhatsApp', tech: ['GPT-4', 'Banana', 'WhatsApp'], results: ['Instantáneo', '+35% conv', '4.7/5'], location: 'E-commerce', status: 'Escalando' }
  ];

  const metrics = [
    { label: 'Ventas', value: dashboardData.sales, unit: '%', icon: TrendingUp, color: '#6EEA6A' },
    { label: 'Clientes', value: dashboardData.customers, unit: '', icon: ShoppingCart, color: '#0072CE' },
    { label: 'Precisión', value: dashboardData.accuracy, unit: '%', icon: Target, color: '#7A5CFF' },
    { label: 'Eficiencia', value: dashboardData.efficiency, unit: '%', icon: Zap, color: '#23C7C2' }
  ];

  const currentSug = aiSuggestions[currentSuggestion];
  const SuggestionIcon = currentSug.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero - With background image */}
      <section className="relative text-white py-16 overflow-hidden" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(122, 92, 255, 0.95) 0%, rgba(216, 27, 96, 0.9) 50%, rgba(0, 114, 206, 0.95) 100%), url(https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlend: 'overlay'
      }}>
        <div className="absolute inset-0 opacity-20 animate-pulse" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 animate-bounce">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <Badge className="bg-white/20 text-white border-white/30 mb-4 text-sm px-3 py-1 backdrop-blur-sm">
              IA Aplicada al Retail
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              IA que Transforma tu Negocio
            </h1>
            
            <p className="text-xl md:text-2xl mb-3 font-light">
              Mejores Motores de IA del Mundo
            </p>
            
            <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Agentes de IA, LLMs personalizados y suites completas para retail
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-white text-[#7A5CFF] hover:bg-gray-100 px-6 py-4 text-base shadow-xl"
                onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Ver Soluciones
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/20 px-6 py-4 text-base backdrop-blur-sm"
                onClick={() => window.open('https://wa.me/56912345678?text=Info IA', '_blank')}
              >
                Contactar
              </Button>
            </div>

            {/* AI Engines */}
            <div className="flex flex-wrap justify-center gap-4">
              {aiEngines.map((engine, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${engine.color} bg-clip-text text-transparent mb-1`}>
                    {engine.logo}
                  </div>
                  <div className="text-xs font-bold text-white">{engine.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard + AI Suggestions - White background, reduced 25% */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-[#7A5CFF] text-white mb-3 px-3 py-1">
                <Activity className="w-3 h-3 inline mr-1" />
                Dashboard Tiempo Real
              </Badge>
              <h2 className="text-3xl font-bold mb-2">Analytics Potenciados por IA</h2>
              <p className="text-gray-600">Métricas automáticas actualizándose cada 3 segundos</p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {/* Metrics - 4 columns */}
              {metrics.map((metric, index) => (
                <Card 
                  key={index}
                  className={`border-2 transition-all duration-500 ${
                    activeMetric === index ? 'scale-105 shadow-xl border-[#7A5CFF]' : 'border-gray-200'
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <metric.icon className="w-6 h-6" style={{ color: metric.color }} />
                      <Badge className="bg-[#6EEA6A] text-white text-xs animate-pulse">Live</Badge>
                    </div>
                    <div className="text-3xl font-bold mb-1">{metric.value}{metric.unit}</div>
                    <div className="text-gray-600 text-xs">{metric.label}</div>
                    <div className="mt-3 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full transition-all duration-1000"
                        style={{ 
                          width: `${metric.value}%`,
                          backgroundColor: metric.color
                        }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* AI Suggestions Box - 1 column */}
              <Card className="border-2 border-[#D81B60] bg-gradient-to-br from-[#D81B60]/5 to-[#7A5CFF]/5">
                <CardContent className="p-4 h-full flex flex-col justify-center">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${currentSug.color}20` }}
                      >
                        <SuggestionIcon className="w-5 h-5" style={{ color: currentSug.color }} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge className="bg-[#7A5CFF] text-white text-xs mb-2">
                        <Sparkles className="w-3 h-3 mr-1" />
                        IA Sugiere
                      </Badge>
                      <p className="text-sm text-gray-700 leading-tight font-medium">
                        {currentSug.text}
                      </p>
                      <div className="mt-2 flex items-center gap-1">
                        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#7A5CFF] rounded-full animate-pulse"
                            style={{ width: '100%' }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-400">
                          {currentSuggestion + 1}/{aiSuggestions.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mini Charts - Reduced */}
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <LineChart className="w-4 h-4 text-[#0072CE] mr-2" />
                    <span className="text-xs font-bold">Tendencias</span>
                  </div>
                  <div className="h-20 flex items-end justify-around space-x-1">
                    {[...Array(10)].map((_, i) => (
                      <div 
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[#0072CE] to-[#2D7FF9] rounded-t"
                        style={{ height: `${Math.random() * 100}%` }}
                      ></div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <PieChart className="w-4 h-4 text-[#7A5CFF] mr-2" />
                    <span className="text-xs font-bold">Distribución</span>
                  </div>
                  <div className="flex items-center justify-center h-20">
                    <div className="relative w-20 h-20">
                      <div className="absolute inset-0 rounded-full border-4 border-[#7A5CFF] animate-spin" style={{ borderTopColor: 'transparent' }}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold">87%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <BarChart3 className="w-4 h-4 text-[#6EEA6A] mr-2" />
                    <span className="text-xs font-bold">Comparativa</span>
                  </div>
                  <div className="space-y-2">
                    {['IA', 'Manual', 'Híbrido'].map((label, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs mb-1">
                          <span>{label}</span>
                          <span>{[95, 45, 70][i]}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full"
                            style={{ 
                              width: `${[95, 45, 70][i]}%`,
                              backgroundColor: i === 0 ? '#6EEA6A' : i === 1 ? '#D81B60' : '#23C7C2'
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Engines Section - Reduced 25% */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-[#0072CE] text-white mb-3 px-3 py-1">
              <Cpu className="w-3 h-3 inline mr-1" />
              Tecnología
            </Badge>
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Motores IA de Clase Mundial</h2>
            <p className="text-lg text-gray-600">Los mejores proveedores de IA</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {aiEngines.map((engine, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all group">
                <CardContent className="p-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${engine.color} flex items-center justify-center text-3xl font-bold text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {engine.logo}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{engine.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{engine.description}</p>
                  <div className="space-y-1">
                    {engine.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-700">
                        <CheckCircle2 className="w-3 h-3 text-[#6EEA6A] mr-1 flex-shrink-0" />
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

      {/* Solutions - Reduced 25% */}
      <section id="soluciones" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-[#7A5CFF] text-white mb-3 px-3 py-1">
              <Bot className="w-3 h-3 inline mr-1" />
              Soluciones
            </Badge>
            <h2 className="text-3xl font-bold mb-2 text-gray-900">IA Aplicada al Retail</h2>
            <p className="text-lg text-gray-600">Agentes, LLMs y suites completas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all group">
                <CardContent className="p-5">
                  <div className={`w-12 h-12 rounded-xl ${solution.bgClass} flex items-center justify-center mb-4`}>
                    <solution.icon className={`w-6 h-6 ${solution.colorClass}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{solution.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                  
                  <div className="space-y-1 mb-4">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Sparkles className={`w-3 h-3 ${solution.colorClass} mr-2 mt-1 flex-shrink-0`} />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-3 border-t border-gray-200">
                    {Object.entries(solution.stats).map(([key, value], idx) => (
                      <div key={idx} className="flex-1">
                        <div className={`text-lg font-bold ${solution.colorClass}`}>{value}</div>
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

      {/* Implementations - Reduced 25% */}
      <section className="py-12 bg-[#0B3A5E] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-white/20 text-white mb-3 px-3 py-1">
              <Globe className="w-3 h-3 inline mr-1" />
              Casos Éxito
            </Badge>
            <h2 className="text-3xl font-bold mb-2">Implementaciones Reales</h2>
            <p className="text-lg text-white/80">Proyectos en producción</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {implementations.map((impl, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{impl.image}</div>
                    <Badge className="bg-[#6EEA6A] text-white text-xs">{impl.status}</Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{impl.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{impl.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {impl.tech.map((tech, idx) => (
                      <Badge key={idx} className="bg-[#7A5CFF] text-white text-xs">
                        <Code className="w-2 h-2 mr-1" />
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 mb-4">
                    {impl.results.map((result, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-[#6EEA6A] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white/90">{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/20">
                    <div className="flex items-center text-xs">
                      <Globe className="w-3 h-3 mr-1 text-white/60" />
                      {impl.location}
                    </div>
                    <Button 
                      size="sm"
                      className="bg-white text-[#0B3A5E] hover:bg-white/90 text-xs py-1"
                      onClick={() => window.open('https://wa.me/56912345678?text=Info caso', '_blank')}
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

      {/* CTA - Reduced 25% */}
      <section className="py-16 bg-gradient-to-br from-[#7A5CFF] via-[#D81B60] to-[#0072CE] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Brain className="w-16 h-16 mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para Revolucionar tu Retail?
            </h2>
            <p className="text-lg mb-6 text-white/90">
              Expertos en IA listos para desarrollar tu solución perfecta
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#7A5CFF] hover:bg-gray-100 px-6 py-4 text-base shadow-xl"
                onClick={() => window.open('https://wa.me/56912345678?text=Consultoría IA', '_blank')}
              >
                <Sparkles className="mr-2" />
                Agendar Consultoría
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/20 px-6 py-4 text-base"
                onClick={() => window.open('mailto:ia@allcom.cl', '_blank')}
              >
                <MessageSquare className="mr-2" />
                Email Expertos
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl font-bold mb-1">50+</div>
                <div className="text-xs text-white/80">Proyectos IA</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">95%</div>
                <div className="text-xs text-white/80">Precisión</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-xs text-white/80">Soporte</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-xs text-white/80">Custom</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteligenciaArtificial;
