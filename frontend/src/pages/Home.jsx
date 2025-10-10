import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowRight, Scale, Monitor, CreditCard, Smartphone, Truck, ShieldCheck, Code, Headset } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

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

  return (
    <main>
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-20 md:py-32 overflow-hidden"
        data-testid="hero-section"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Tecnología robusta para operar el retail sin fricción
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Integramos hardware y software para cajas, kioskos y puntos de venta. Rendimiento, soporte y escalabilidad.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  data-testid="hero-cta-products"
                  className="bg-slate-700 hover:bg-slate-800 text-white"
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
                  className="border-slate-700 text-slate-700 hover:bg-slate-50"
                >
                  <Link to="/contacto">Hablar por WhatsApp</Link>
                </Button>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-slate-700">15+</div>
                  <div className="text-sm text-gray-600">Años de experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-700">500+</div>
                  <div className="text-sm text-gray-600">Proyectos entregados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-700">10K+</div>
                  <div className="text-sm text-gray-600">Dispositivos activos</div>
                </div>
              </div>
            </div>

            <div className="slide-up hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxQT1MlMjB0ZXJtaW5hbHxlbnwwfHx8fDE3NjAxMjU3OTF8MA&ixlib=rb-4.1.0&q=85"
                alt="Terminal POS"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white" data-testid="categories-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Soluciones para cada necesidad</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hardware especializado para retail, bancos y servicios
            </p>
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
                    <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-slate-700" />
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

      {/* Services Section */}
      <section className="py-20 bg-slate-50" data-testid="services-section">
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
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <IconComponent className="w-10 h-10 text-slate-700 mb-4" />
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
              className="bg-slate-700 hover:bg-slate-800"
            >
              <Link to="/servicios">Ver todos los servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white" data-testid="cta-section">
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
              className="bg-white text-slate-900 hover:bg-gray-100"
            >
              <Link to="/cotizacion">Solicitar cotización</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              data-testid="cta-contact"
              className="border-white text-white hover:bg-white hover:text-slate-900"
            >
              <Link to="/contacto">Contactar ahora</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;