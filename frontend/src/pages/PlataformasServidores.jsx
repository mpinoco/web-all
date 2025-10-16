import React, { useState } from 'react';
import { Server, Cloud, Award, CheckCircle, Zap, Shield, TrendingUp, Users } from 'lucide-react';

const PlataformasServidores = () => {
  const [activeTab, setActiveTab] = useState('tower');

  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Venta de Servidores",
      description: "Servidores HP, Lenovo y Dell con licencias oficiales para retail"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Configuración y Puesta en Marcha",
      description: "Configuración especializada para tiendas y supermercados"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Mantención y Soporte",
      description: "Soporte técnico 24/7 con certificaciones oficiales"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Virtualización VMware",
      description: "Plataformas virtuales para ahorro de costos y escalabilidad"
    }
  ];

  const certifications = [
    { name: "Windows Server", icon: "💻" },
    { name: "Linux", icon: "🐧" },
    { name: "Android", icon: "🤖" },
    { name: "VMware Certified", icon: "☁️" }
  ];

  const partners = [
    { name: "HP Partner", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/200px-HP_logo_2012.svg.png" },
    { name: "Lenovo Partner", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/200px-Lenovo_logo_2015.svg.png" },
    { name: "Dell Partner", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/200px-Dell_Logo.svg.png" },
    { name: "VMware", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/VMware_logo.svg/200px-VMware_logo.svg.png" }
  ];

  const towerServers = [
    {
      brand: "Lenovo",
      model: "ThinkSystem ST250 V2",
      specs: "Intel Xeon E-2300 | 32GB RAM | 2TB Storage",
      image: "https://p2-ofp.static.pub/fes/cms/2021/05/13/x3u2qh0aazwxu3c7qsovyrbg5xjm91708948.png"
    },
    {
      brand: "HP",
      model: "ProLiant ML350 Gen10",
      specs: "Intel Xeon Silver | 64GB RAM | 4TB Storage",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06286155.png"
    },
    {
      brand: "Dell",
      model: "PowerEdge T340",
      specs: "Intel Xeon E-2200 | 32GB RAM | 2TB Storage",
      image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/servers/poweredge/t340/global-spi/ng/server-poweredge-t340-hero-504x350-ng.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1146&qlt=100,1&resMode=sharp2&size=1146,804&chrss=full"
    }
  ];

  const rackServers = [
    {
      brand: "Lenovo",
      model: "ThinkSystem SR650 V2",
      specs: "Dual Intel Xeon Gold | 128GB RAM | 8TB Storage",
      image: "https://p2-ofp.static.pub/fes/cms/2021/05/13/cw66ioqebnwh0o7ow1ej5nbw79qv82859417.png"
    },
    {
      brand: "Dell",
      model: "PowerEdge R650",
      specs: "Dual Intel Xeon Scalable | 256GB RAM | 16TB Storage",
      image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/servers/poweredge/r650/media-gallery/server-poweredge-r650-gallery-504x350-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1146&qlt=100,1&resMode=sharp2&size=1146,804&chrss=full"
    }
  ];

  const successCases = [
    {
      client: "Tottus",
      stores: "70 locales",
      solution: "Lenovo + VMware",
      description: "Implementación completa de infraestructura de servidores virtualizados para cadena nacional",
      icon: "🛒"
    },
    {
      client: "Preunic",
      stores: "160 locales",
      solution: "IBM + VMware",
      description: "Migración y consolidación de plataforma retail con alta disponibilidad",
      icon: "🏬"
    },
    {
      client: "Ikea",
      stores: "2 locales",
      solution: "Lenovo + VMware",
      description: "Servidores de alto rendimiento con virtualización para retail internacional",
      icon: "🛋️"
    },
    {
      client: "La Polar",
      stores: "20 locales",
      solution: "HP + Suse",
      description: "Infraestructura Linux enterprise para operaciones críticas de retail",
      icon: "🏪"
    },
    {
      client: "Cencosud (Jumbo y Santa Isabel)",
      stores: "300 locales",
      solution: "Dell",
      description: "Roll-out masivo de recambio de servidores en toda la red nacional",
      icon: "🏢"
    }
  ];

  const benefits = [
    { icon: <TrendingUp />, title: "Ahorro de Costos", text: "Hasta 60% de reducción en hardware con virtualización" },
    { icon: <Zap />, title: "Alta Escalabilidad", text: "Crecimiento flexible según necesidades del negocio" },
    { icon: <Shield />, title: "Seguridad Enterprise", text: "Protección de datos con certificaciones internacionales" },
    { icon: <Users />, title: "Soporte 24/7", text: "Equipo certificado con más de 15 años de experiencia" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Lenovo Style */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-[#E2231A] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Plataformas y Servidores
              <span className="block text-[#E2231A] mt-2">Para Retail</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Soluciones empresariales con HP, Lenovo y Dell. Virtualización VMware para máxima eficiencia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="bg-[#E2231A] hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                Solicitar Cotización
              </a>
              <a href="#casos-exito" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold backdrop-blur-sm transition-all">
                Ver Casos de Éxito
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Partners Oficiales</h2>
            <p className="text-gray-600">Certificados y autorizados por las marcas líderes</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src={partner.logo} alt={partner.name} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
          
          {/* Certifications */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Certificaciones</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 flex items-center gap-2">
                  <span className="text-2xl">{cert.icon}</span>
                  <span className="font-medium text-gray-700">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones integrales desde la venta hasta el mantenimiento
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group p-6 rounded-xl hover:bg-gray-50 transition-all border border-gray-100">
                <div className="text-[#E2231A] mb-4 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VMware Virtualization Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Virtualización con VMware</h2>
              <p className="text-xl text-gray-300 mb-6">
                Optimiza tu infraestructura con plataformas virtuales diseñadas para retail y supermercados
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="text-[#E2231A] mt-1">{benefit.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg">{benefit.title}</h4>
                      <p className="text-gray-400">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://www.vmware.com/content/dam/digitalmarketing/vmware/en/images/gallery/thumbnails/tn-vmware-cloud-infrastructure.jpg"
                alt="VMware Virtualization"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#E2231A] text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">60%</div>
                <div className="text-sm">Ahorro en costos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Servidores Disponibles</h2>
            <p className="text-xl text-gray-600">Equipos enterprise para cada necesidad</p>
          </div>
          
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('tower')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'tower' 
                  ? 'bg-[#E2231A] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Servidores Tower
            </button>
            <button
              onClick={() => setActiveTab('rack')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'rack' 
                  ? 'bg-[#E2231A] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Servidores Rack
            </button>
          </div>

          {/* Tower Servers */}
          {activeTab === 'tower' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {towerServers.map((server, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="bg-gray-50 p-6 flex items-center justify-center min-h-[250px]">
                    <img src={server.image} alt={server.model} className="w-full h-auto object-contain max-h-[220px]" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-semibold text-[#E2231A] mb-1">{server.brand}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{server.model}</h3>
                    <p className="text-gray-600 text-sm mb-4">{server.specs}</p>
                    <button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-colors">
                      Solicitar Información
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Rack Servers */}
          {activeTab === 'rack' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rackServers.map((server, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="bg-gray-50 p-6 flex items-center justify-center min-h-[250px]">
                    <img src={server.image} alt={server.model} className="w-full h-auto object-contain max-h-[220px]" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-semibold text-[#E2231A] mb-1">{server.brand}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{server.model}</h3>
                    <p className="text-gray-600 text-sm mb-4">{server.specs}</p>
                    <button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-colors">
                      Solicitar Información
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Success Cases Section */}
      <section id="casos-exito" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Casos de Éxito</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 500 locales implementados con nuestras soluciones de servidores
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successCases.map((caseItem, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{caseItem.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{caseItem.client}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#E2231A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {caseItem.stores}
                  </span>
                  <span className="text-gray-500 text-sm font-medium">{caseItem.solution}</span>
                </div>
                <p className="text-gray-600">{caseItem.description}</p>
                <div className="mt-4 flex items-center text-green-600 font-semibold">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Implementado con éxito
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-[#E2231A] to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para modernizar tu infraestructura?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos y descubre cómo nuestras soluciones pueden transformar tu operación
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contacto" className="bg-white text-[#E2231A] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105">
              Contactar Ahora
            </a>
            <a href="tel:+56912345678" className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Llamar: +56 9 1234 5678
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlataformasServidores;
