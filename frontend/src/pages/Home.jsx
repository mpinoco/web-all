import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowRight, Scale, Monitor, CreditCard, Smartphone, Truck, ShieldCheck, Code, Headset } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import KPISection from '../components/KPISection';
import KPIVertical from '../components/KPIVertical';
import ProductsMenuVisual from '../components/ProductsMenuVisual';
import PartnersCarousel from '../components/PartnersCarousel';
import ClientsGrid from '../components/ClientsGrid';
import SEO from '../components/SEO';
import Hashtags from '../components/Hashtags';
import seoData from '../data/seoData';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);

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

      {/* Logo and IA Badge Section */}
      <section className="py-6 md:py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-start gap-4 md:gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/images/logo_emergent_gris.png" 
                alt="Emergent AI Logo" 
                className="h-12 md:h-14 w-auto"
              />
            </div>
            {/* Text */}
            <div className="flex items-center">
              <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-700 text-center md:text-left">
                Nueva imagen, misma cercanía + IA
              </p>
            </div>
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