import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Truck, ShieldCheck, Code, Headset } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/services`);
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      Truck: Truck,
      ShieldCheck: ShieldCheck,
      Code: Code,
      Headset: Headset
    };
    return icons[iconName] || ShieldCheck;
  };

  return (
    <main className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-testid="services-title">
            Servicios integrales para tiendas y grandes superficies
          </h1>
          <p className="text-xl text-gray-600">
            Despliegue masivo, homologación, desarrollo a medida, arriendo/leasing y soporte 24/7
          </p>
        </div>

        {/* Services */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Cargando servicios...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service) => {
              const IconComponent = getIcon(service.icon);
              return (
                <Card key={service.id} data-testid={`service-${service.slug}`} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-slate-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.summary}</p>
                    <ul className="space-y-2">
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <span className="text-slate-700 mr-2 mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center bg-white rounded-lg p-12 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Solicita una propuesta técnica</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Nuestro equipo de especialistas está listo para diseñar una solución a la medida de tu negocio
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              data-testid="services-contact-cta"
              className="bg-slate-700 hover:bg-slate-800"
            >
              <Link to="/contacto">Solicitar propuesta</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              data-testid="services-whatsapp-cta"
            >
              <Link to="/contacto">Hablar por WhatsApp</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;