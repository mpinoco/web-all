import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Zap, TrendingUp, CheckCircle, ArrowRight, Clock, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const EventosKioskos = () => {
  return (
    <main className="bg-gradient-to-br from-cyan-50 via-teal-50 to-cyan-100">
      {/* Hero Section - Neo Teal with Background Image */}
      <section className="relative py-20 md:py-32 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/evento-hero.jpg)' }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#23C7C2]/80 via-[#1DA89E]/75 to-[#188F8A]/80"></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Arriendo de Kioskos para Eventos
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 drop-shadow-md">
              Soluciones móviles de autoatención para festivales, conferencias y eventos masivos
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#23C7C2] hover:bg-gray-100 shadow-lg font-semibold"
                data-testid="eventos-cta-quote"
              >
                <Link to="/contacto">Cotizar para mi evento</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#23C7C2] backdrop-blur-sm"
                data-testid="eventos-cta-learn"
              >
                <Link to="#caracteristicas">Ver características</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#23C7C2] mb-2">500+</div>
              <div className="text-gray-600">Eventos realizados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#23C7C2] mb-2">50K+</div>
              <div className="text-gray-600">Transacciones procesadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#23C7C2] mb-2">24/7</div>
              <div className="text-gray-600">Soporte técnico</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#23C7C2] mb-2">98%</div>
              <div className="text-gray-600">Disponibilidad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Por qué elegir nuestros kioskos?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tecnología probada en los eventos más grandes de Chile
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all border-t-4 border-[#23C7C2]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#23C7C2]/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#23C7C2]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Instalación Rápida</h3>
                <p className="text-gray-600">Montaje y configuración en menos de 2 horas. Plug & play.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-t-4 border-[#23C7C2]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#23C7C2]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#23C7C2]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Alto Throughput</h3>
                <p className="text-gray-600">Procesa hasta 200 transacciones por hora por kiosko.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-t-4 border-[#23C7C2]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#23C7C2]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#23C7C2]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Robusto & Seguro</h3>
                <p className="text-gray-600">Diseño anti-vandalismo, resistente a condiciones extremas.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-t-4 border-[#23C7C2]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#23C7C2]/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#23C7C2]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Pagos Múltiples</h3>
                <p className="text-gray-600">Efectivo, tarjetas, QR, contactless. Todo integrado.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-t-4 border-[#23C7C2]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#23C7C2]/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#23C7C2]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Reportes en Tiempo Real</h3>
                <p className="text-gray-600">Dashboard con métricas de ventas y operación en vivo.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-t-4 border-[#23C7C2]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#23C7C2]/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#23C7C2]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Soporte On-Site</h3>
                <p className="text-gray-600">Técnicos en terreno durante todo el evento.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Eventos que ya confían en nosotros</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Calendar className="w-12 h-12 text-[#23C7C2] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Festivales Musicales</h3>
              <p className="text-gray-600">Lollapalooza, Primavera Sound, Fauna Primavera</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-[#23C7C2] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Conferencias</h3>
              <p className="text-gray-600">Eventos corporativos, congresos, ferias comerciales</p>
            </div>
            <div className="text-center p-6">
              <TrendingUp className="w-12 h-12 text-[#23C7C2] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eventos Deportivos</h3>
              <p className="text-gray-600">Estadios, marathones, competencias</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#23C7C2] to-[#188F8A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para tu próximo evento?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Cotiza ahora y asegura la mejor experiencia de autoatención para tus asistentes
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#23C7C2] hover:bg-gray-100 shadow-lg font-semibold"
          >
            <Link to="/contacto">
              Solicitar cotización
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default EventosKioskos;