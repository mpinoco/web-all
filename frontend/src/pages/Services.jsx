import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Truck, ShieldCheck, Code, Headset } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hashtags from '../components/Hashtags';
import seoData from '../data/seoData';

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

  const serviceIcons = {
    'instalacion': Truck,
    'desarrollo': Code,
    'soporte': Headset,
    'garantia': ShieldCheck
  };

  return (
    <>
      <SEO 
        title={seoData.services.title}
        description={seoData.services.description}
        keywords={seoData.services.keywords}
        canonicalUrl={seoData.services.canonicalUrl}
        schema={seoData.services.schema}
      />
      <main className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones integrales para tu negocio retail
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Cargando servicios...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => {
                const IconComponent = serviceIcons[service.slug] || ShieldCheck;
                return (
                  <Card key={service._id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-emerald-600 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/contacto">Más información</Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Hashtags tags={seoData.services.hashtags} />
    </>
  );
};

export default Services;
