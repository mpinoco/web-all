import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowRight, Scale, Monitor, CreditCard, Smartphone, Truck, ShieldCheck, Code, Headset, Sparkles, Activity, TrendingUp, Globe, Zap, Eye } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import KPISection from '../components/KPISection';
import KPIVertical from '../components/KPIVertical';
import ProductsMenuVisual from '../components/ProductsMenuVisual';
import PartnersCarousel from '../components/PartnersCarousel';
import ClientsGrid from '../components/ClientsGrid';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  
  // AI Configurator States
  const [selectedEnvironment, setSelectedEnvironment] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [showDemo, setShowDemo] = useState(false);
  
  // Live Metrics States
  const [equiposActivos, setEquiposActivos] = useState(1000);
  const [interaccionesHoy, setInteraccionesHoy] = useState(35000);
  const [reduccionTiempo, setReduccionTiempo] = useState(30);
  
  // Gallery States
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [galleryContext, setGalleryContext] = useState('retail');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, servicesRes] = await Promise.all([
          axios.get(`${BACKEND_URL}/api/categories`),
          axios.get(`${BACKEND_URL}/api/services`)
        ]);
        setCategories(categoriesRes.data);
        setServices(servicesRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  // Animated Live Metrics
  useEffect(() => {
    const intervals = [
      setInterval(() => setEquiposActivos(prev => prev + Math.floor(Math.random() * 3)), 5000),
      setInterval(() => setInteraccionesHoy(prev => prev + Math.floor(Math.random() * 50)), 3000),
      setInterval(() => setReduccionTiempo(prev => Math.min(40, prev + (Math.random() > 0.5 ? 0.1 : 0))), 4000)
    ];
    
    return () => intervals.forEach(clearInterval);
  }, []);
  
  // AI Configurator Logic
  const handleConfiguratorSubmit = () => {
    if (!selectedEnvironment || !selectedGoal) return;
    
    const suggestions = {
      'Retail-Reducir tiempos': 'IM Station + Balanza Inteligente + Software QTruck',
      'Retail-Automatizar': 'Kiosko Autopago + POS Táctil + Sistema de Cola Digital',
      'Retail-Mejorar atención': 'Terminal POS Premium + CRM Integrado + Dashboard Analytics',
      'Minería-Reducir tiempos': 'Balanza Industrial + Terminal Rugerizado + Software Pesaje',
      'Minería-Automatizar': 'Sistema Automatizado de Pesaje + IoT Sensors + Cloud Platform',
      'Minería-Mejorar atención': 'Terminal Móvil + Sistema de Tickets + Monitoreo Remoto',
      'Banca-Reducir tiempos': 'Tótem de Autoservicio + Cola Digital + App Móvil',
      'Banca-Automatizar': 'Sistema de Turnos IA + Kiosko Bancario + Firma Digital',
      'Banca-Mejorar atención': 'Terminal Interactivo + CRM Bancario + Video Asistencia',
      'Ciudad-Reducir tiempos': 'Cargadores Públicos + Sensores IoT + Dashboard Urbano',
      'Ciudad-Automatizar': 'Sistema de Iluminación IA + Monitoreo Tráfico + Alertas Automáticas',
      'Ciudad-Mejorar atención': 'Tótems Informativos + App Ciudadana + Reportes en Tiempo Real'
    };
    
    const key = `${selectedEnvironment}-${selectedGoal}`;
    setAiSuggestion(suggestions[key] || 'IM Station + POS + Software Integrado');
    setShowDemo(true);
    
    setTimeout(() => {
      document.querySelector('#ai-result')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const getIcon = (iconName) => {
    const icons = {
      Scale: Scale,
      Monitor: Monitor,
      CreditCard: CreditCard,
      Smartphone: Smartphone,
      Truck: Truck,
      ShieldCheck: ShieldCheck,
      Code: Code,
      Headset: Headset
    };
    return icons[iconName] || Monitor;
  };

  useEffect(() => {
    // Force video to play
    const video = document.querySelector('video');
    if (video) {
      video.play().catch(err => console.log('Autoplay prevented:', err));
    }
  }, []);

  return (
    <>
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ALLCOM",
          "alternateName": "ALLCOM Chile",
          "url": "https://allcom.cl",
          "logo": "https://allcom.cl/logo-allcom.png",
          "description": "Soluciones de hardware y software para retail: Kioskos de autopago, terminales POS, balanzas comerciales. +17 años de experiencia en Chile.",
          "foundingDate": "2008",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Providencia 1234",
            "addressLocality": "Santiago",
            "addressRegion": "RM",
            "addressCountry": "CL"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+56-2-1234-5678",
            "contactType": "sales",
            "areaServed": "CL",
            "availableLanguage": ["Spanish"]
          },
          "sameAs": [
            "https://www.linkedin.com/company/allcom",
            "https://www.facebook.com/allcom"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127"
          }
        })}
      </script>
      
      <main>
      {/* Hero Section with Video Background */}
      <section 
        className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-slate-800"
        data-testid="hero-section"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          ref={(el) => {
            if (el) {
              el.play().catch(() => {});
            }
          }}
        >
          <source 
            src="/videos/video_intro_allcom.mp4" 
            type="video/mp4" 
          />
          Tu navegador no soporta el tag de video.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/70"></div>

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-4xl fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Tecnología para tiendas, sin enredos
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Nos encanta que te vaya bien !!!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                data-testid="hero-cta-products"
                className="bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg"
              >
                <Link to="/productos">
                  Ver soluciones
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                data-testid="hero-cta-contact"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500"
              >
                <Link to="/contacto">Hablar por WhatsApp</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 – CONFIGURADOR INTELIGENTE (IA interactiva) */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-900">Inteligencia Artificial</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Descubre tu ecosistema ideal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestra IA te ayuda a encontrar la solución perfecta para tu negocio
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
              {/* Step 1: Environment Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  1. Selecciona tu entorno:
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Retail', 'Minería', 'Banca', 'Ciudad'].map((env) => (
                    <button
                      key={env}
                      onClick={() => setSelectedEnvironment(env)}
                      className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
                        selectedEnvironment === env
                          ? 'border-purple-600 bg-purple-50 shadow-lg'
                          : 'border-gray-200 bg-white hover:border-purple-300'
                      }`}
                    >
                      <div className="text-3xl mb-2">
                        {env === 'Retail' && '🛒'}
                        {env === 'Minería' && '⛏️'}
                        {env === 'Banca' && '🏦'}
                        {env === 'Ciudad' && '🌆'}
                      </div>
                      <div className="text-sm font-medium text-gray-900">{env}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Goal Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  2. ¿Cuál es tu objetivo?
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  {['Reducir tiempos', 'Automatizar', 'Mejorar atención'].map((goal) => (
                    <button
                      key={goal}
                      onClick={() => setSelectedGoal(goal)}
                      className={`p-6 rounded-xl border-2 transition-all transform hover:scale-105 ${
                        selectedGoal === goal
                          ? 'border-blue-600 bg-blue-50 shadow-lg'
                          : 'border-gray-200 bg-white hover:border-blue-300'
                      }`}
                    >
                      <div className="font-semibold text-gray-900">{goal}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  onClick={handleConfiguratorSubmit}
                  disabled={!selectedEnvironment || !selectedGoal}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl flex items-center gap-3 mx-auto"
                >
                  <Sparkles className="w-6 h-6" />
                  Generar Recomendación IA
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>

              {/* AI Result */}
              {showDemo && (
                <div id="ai-result" className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl border-2 border-purple-300 animate-fade-in">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Tu solución ideal es:
                      </h3>
                      <p className="text-2xl font-bold text-purple-900 mb-4">
                        {aiSuggestion}
                      </p>
                      <div className="flex gap-3">
                        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all shadow-md">
                          Ver Demo
                        </button>
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md">
                          Solicitar Cotización
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 – DATOS EN VIVO (Ecosistema funcionando) */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Animated Connection Lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,30 50,50 T100,50" stroke="currentColor" strokeWidth="0.5" fill="none" className="animate-pulse" />
            <path d="M0,60 Q25,40 50,60 T100,60" stroke="currentColor" strokeWidth="0.5" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
              <Activity className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">En Tiempo Real</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestra tecnología en acción
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Métricas en vivo de nuestro ecosistema global
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Metric 1 */}
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all border border-white/20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-cyan-400 mb-2 font-mono">
                  {equiposActivos.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-300 font-medium">Equipos Activos</div>
                <div className="mt-2 flex items-center justify-center gap-2 text-green-400 text-xs">
                  <TrendingUp className="w-4 h-4" />
                  <span>+3 en últimos 5min</span>
                </div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all border border-white/20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-purple-400 mb-2 font-mono">
                  {interaccionesHoy.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-300 font-medium">Interacciones Hoy</div>
                <div className="mt-2 flex items-center justify-center gap-2 text-green-400 text-xs">
                  <Zap className="w-4 h-4" />
                  <span>Actualizando...</span>
                </div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all border border-white/20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-green-400 mb-2 font-mono">
                  {reduccionTiempo.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-300 font-medium">Menos Tiempo de Espera</div>
                <div className="mt-2 flex items-center justify-center gap-2 text-green-400 text-xs">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>Mejorando</span>
                </div>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all border border-white/20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-orange-400 mb-2 font-mono">
                  12
                </div>
                <div className="text-sm text-gray-300 font-medium">Países Conectados</div>
                <div className="mt-2 flex items-center justify-center gap-2 text-blue-400 text-xs">
                  <Shield Check className="w-4 h-4" />
                  <span>100% Uptime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Pulse Effect */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 text-cyan-400">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
              <span className="text-sm font-medium">Sistema sincronizado en tiempo real</span>
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 – GALERÍA INTERACTIVA DE PRODUCTOS (IA visual) */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-2 rounded-full mb-4">
              <Eye className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Visualización IA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Galería Interactiva de Productos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Explora nuestros equipos con etiquetas inteligentes y contextos personalizados
            </p>

            {/* Context Switcher */}
            <div className="flex justify-center gap-4 mb-12">
              {[
                { id: 'retail', label: 'Ver en Retail', icon: '🛒' },
                { id: 'mineria', label: 'Ver en Minería', icon: '⛏️' },
                { id: 'banca', label: 'Ver en Banca', icon: '🏦' }
              ].map((context) => (
                <button
                  key={context.id}
                  onClick={() => setGalleryContext(context.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                    galleryContext === context.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <span className="mr-2">{context.icon}</span>
                  {context.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'IM Station',
                image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop',
                tags: ['Pantalla táctil IA', 'Lector QR', 'Sistema Android']
              },
              {
                name: 'Balanza Inteligente',
                image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&h=500&fit=crop',
                tags: ['Pesaje Automático', 'Conexión IoT', 'Impresora Térmica']
              },
              {
                name: 'Terminal POS',
                image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop',
                tags: ['Reconocimiento Facial', 'POS Integrado', 'Pago Contactless']
              }
            ].map((product, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setSelectedProduct(idx)}
                onMouseLeave={() => setSelectedProduct(null)}
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Context Badge */}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {galleryContext === 'retail' && '🛒 Retail'}
                    {galleryContext === 'mineria' && '⛏️ Minería'}
                    {galleryContext === 'banca' && '🏦 Banca'}
                  </div>
                  
                  {/* Smart Tags - Show on Hover */}
                  {selectedProduct === idx && (
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm p-4 flex flex-col justify-center gap-2 animate-fade-in">
                      {product.tags.map((tag, tagIdx) => (
                        <div
                          key={tagIdx}
                          className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-semibold text-gray-900 shadow-lg animate-slide-in"
                          style={{ animationDelay: `${tagIdx * 100}ms` }}
                        >
                          <span className="text-blue-600 mr-2">✓</span>
                          {tag}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Adaptado para {galleryContext === 'retail' ? 'tiendas y supermercados' : galleryContext === 'mineria' ? 'operaciones industriales' : 'sucursales bancarias'}
                  </p>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main KPI Section - Full 6 indicators */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-700">
        <KPISection variant="main" />
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" data-testid="categories-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Soluciones para cada necesidad</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hardware especializado para retail, bancos y servicios
            </p>
          </div>

          {/* Compact KPI Section - 2 indicators */}
          <div className="mb-12">
            <KPISection variant="compact" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = getIcon(category.icon);
              return (
                <Card
                  key={category.id}
                  data-testid={`category-card-${category.slug}`}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => window.location.href = `/productos?category=${category.slug}`}
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-emerald-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Visual Menu */}
      <ProductsMenuVisual />

      {/* KPI Vertical Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Impacto Global</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Métricas que demuestran nuestro alcance y compromiso con la excelencia
            </p>
          </div>
          <KPIVertical />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" data-testid="services-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Servicios integrales</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Desde el diseño hasta el soporte continuo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = getIcon(service.icon);
              return (
                <div
                  key={service.id}
                  data-testid={`service-card-${service.slug}`}
                  className="bg-gradient-to-br from-white to-emerald-50 border border-emerald-100 rounded-lg p-6 hover:shadow-lg hover:border-emerald-200 transition-all"
                >
                  <IconComponent className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.summary}</p>
                  <ul className="space-y-1">
                    {service.bullets.slice(0, 2).map((bullet, idx) => (
                      <li key={idx} className="text-xs text-gray-500 flex items-start">
                        <span className="text-slate-700 mr-2">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              data-testid="services-cta"
              className="bg-emerald-600 hover:bg-emerald-700 shadow-lg"
            >
              <Link to="/servicios">Ver todos los servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <PartnersCarousel />

      {/* Clients Grid */}
      <ClientsGrid />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-800 text-white" data-testid="cta-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para optimizar tu operación?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Agenda una consultoría técnica sin costo y descubre cómo podemos ayudarte
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              data-testid="cta-quote"
              className="bg-white text-emerald-800 hover:bg-emerald-50 shadow-lg"
            >
              <Link to="/cotizacion">Solicitar cotización</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              data-testid="cta-contact"
              className="border-white text-white hover:bg-white hover:text-emerald-800"
            >
              <Link to="/contacto">Contactar ahora</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Home;