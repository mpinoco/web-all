import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, TrendingUp, Shield, Users, Globe, ChevronDown } from 'lucide-react';

const HomeNew = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated metrics
  const metrics = [
    { value: "1,200+", label: "Equipos Activos", icon: <Globe className="w-8 h-8" /> },
    { value: "14", label: "Años de Experiencia", icon: <TrendingUp className="w-8 h-8" /> },
    { value: "12", label: "Países Conectados", icon: <Users className="w-8 h-8" /> },
    { value: "500+", label: "Locales Implementados", icon: <Shield className="w-8 h-8" /> }
  ];

  // Ecosystems
  const ecosystems = [
    {
      id: "retail",
      icon: "🛒",
      title: "Allcom Retail",
      subtitle: "Autoservicio inteligente para tiendas",
      description: "Kioscos, POS, balanzas y software integrado",
      color: "from-emerald-500 to-green-600",
      borderColor: "border-emerald-500",
      link: "/ecosistema-retail"
    },
    {
      id: "banca",
      icon: "🏦",
      title: "Allcom Banca",
      subtitle: "Experiencia bancaria digital",
      description: "Tótems, colas digitales, atención automatizada",
      color: "from-blue-500 to-indigo-600",
      borderColor: "border-blue-500",
      link: "/ecosistema-banca"
    },
    {
      id: "industria",
      icon: "🏭",
      title: "Allcom Industria",
      subtitle: "Infraestructura empresarial",
      description: "Servidores, pesaje industrial, logística",
      color: "from-gray-600 to-gray-800",
      borderColor: "border-gray-600",
      link: "/ecosistema-industria"
    },
    {
      id: "smartcity",
      icon: "🌆",
      title: "Allcom Smart City",
      subtitle: "Ciudades conectadas",
      description: "IoT, carga pública, control urbano",
      color: "from-orange-500 to-red-600",
      borderColor: "border-orange-500",
      link: "/ecosistema-smart-city"
    },
    {
      id: "salud",
      icon: "⚕️",
      title: "Allcom Salud",
      subtitle: "Tecnología hospitalaria",
      description: "Tótems, turnos digitales, gestión de pacientes",
      color: "from-teal-500 to-cyan-600",
      borderColor: "border-teal-500",
      link: "/ecosistema-salud"
    }
  ];

  // Storytelling steps
  const storySteps = [
    {
      title: "Empieza con una necesidad",
      description: "Cada proyecto nace de un desafío real: mejorar la experiencia del cliente, optimizar procesos o escalar operaciones.",
      icon: <Users className="w-12 h-12" />,
      color: "bg-blue-500"
    },
    {
      title: "Agrega inteligencia",
      description: "Transformamos hardware en soluciones inteligentes con software, IA y análisis de datos en tiempo real.",
      icon: <Zap className="w-12 h-12" />,
      color: "bg-purple-500"
    },
    {
      title: "Transforma la experiencia",
      description: "El resultado: procesos más rápidos, datos accionables y clientes satisfechos. Tu negocio evoluciona con tecnología que se adapta.",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "bg-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Video/Animation Concept */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}></div>
        </div>

        {/* Video Placeholder - Replace with actual video */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Donde la tecnología
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mt-2">
              se encuentra con la experiencia humana
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Del contacto humano al autoservicio inteligente. Un solo ADN, múltiples soluciones.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="#ecosistemas" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2">
              Explorar Ecosistemas
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/casos-partners" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
              Ver Casos de Éxito
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </section>

      {/* Live Metrics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <div 
                key={idx} 
                className="text-center transform hover:scale-110 transition-transform cursor-pointer"
                onMouseEnter={() => setActiveMetric(idx)}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  activeMetric === idx ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
                } shadow-lg transition-all`}>
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2">{metric.value}</div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling Scroll Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Un solo ADN, múltiples soluciones</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No vendemos productos. Creamos experiencias conectadas que transforman industrias.
            </p>
          </div>
          
          <div className="space-y-32">
            {storySteps.map((step, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${step.color} text-white mb-6 shadow-2xl`}>
                    {step.icon}
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-xl h-80 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="text-6xl mb-4">📊</div>
                      <p className="text-sm">Animación / Ilustración #{idx + 1}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flywheel Visual */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">El Ciclo de Mejora Continua</h2>
            <p className="text-xl text-gray-300">Cliente → Datos → Mejora → Nuevos Servicios</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Cliente', 'Datos', 'Mejora', 'Nuevos Servicios'].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4 border-4 border-white/30">
                  <span className="text-4xl font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystems Grid */}
      <section id="ecosistemas" className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Ecosistemas que hablan tu idioma</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada industria tiene sus propios desafíos. Nuestros ecosistemas conectan hardware, software y servicios en soluciones completas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystems.map((eco) => (
              <Link 
                key={eco.id}
                to={eco.link}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-l-4 ${eco.borderColor} overflow-hidden`}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${eco.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{eco.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{eco.title}</h3>
                  <p className="text-sm font-semibold text-gray-600 mb-3">{eco.subtitle}</p>
                  <p className="text-gray-600 mb-6">{eco.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Explorar ecosistema
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para transformar tu operación?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Conversemos sobre cómo nuestros ecosistemas pueden resolver tus desafíos específicos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contacto" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
              Contactar Ahora
            </Link>
            <Link to="/casos-partners" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
              Ver Casos Reales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeNew;
