import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Wifi, Shield, Smartphone, Battery, Monitor, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const AeropuertoCharger = () => {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
      {/* Hero Section - Electric Blue */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#2D7FF9] via-[#0072CE] to-[#005DAE]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">ALLCOM +AX Airport Charger</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Estaciones de Carga Inteligentes para Aeropuertos
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Soluciones de carga rápida para pasajeros. Diseño robusto, seguro y moderno.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#2D7FF9] hover:bg-gray-100 shadow-lg font-semibold"
                data-testid="airport-cta-quote"
              >
                <Link to="/contacto">Solicitar información</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#2D7FF9]"
                data-testid="airport-cta-specs"
              >
                <Link to="#especificaciones">Ver especificaciones</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#2D7FF9] mb-2">8</div>
              <div className="text-gray-600">Enchufes universales</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#2D7FF9] mb-2">8</div>
              <div className="text-gray-600">Puertos USB/USB-C</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#2D7FF9] mb-2">4</div>
              <div className="text-gray-600">Cargadores inalámbricos Qi</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#2D7FF9] mb-2">180W</div>
              <div className="text-gray-600">Capacidad total</div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Principales */}
      <section id="especificaciones" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Diseñado para alto tráfico</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tecnología de carga rápida y construcción robusta para aeropuertos y terminales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all border-t-4 border-[#2D7FF9]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2D7FF9]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#2D7FF9]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Chasis Metálico Reforzado</h3>
                <p className="text-gray-600">Acero de alta resistencia con acabado grafito electropintado. Bordes redondeados para seguridad.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-t-4 border-[#2D7FF9]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2D7FF9]/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#2D7FF9]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Carga Rápida</h3>
                <p className="text-gray-600">Puertos USB/USB-C con tecnología de carga rápida. Compatibles con iOS y Android.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-t-4 border-[#2D7FF9]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2D7FF9]/10 rounded-lg flex items-center justify-center mb-4">
                  <Wifi className="w-6 h-6 text-[#2D7FF9]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Carga Inalámbrica Qi</h3>
                <p className="text-gray-600">4 plataformas de carga inalámbrica para dispositivos de última generación.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-t-4 border-[#2D7FF9]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2D7FF9]/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#2D7FF9]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Seguridad Eléctrica</h3>
                <p className="text-gray-600">Automático 10A, interruptor diferencial y protección contra sobrecarga.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-t-4 border-[#2D7FF9]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2D7FF9]/10 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-[#2D7FF9]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Personalización</h3>
                <p className="text-gray-600">Panel superior en acrílico para branding corporativo y señalética.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-t-4 border-[#2D7FF9]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2D7FF9]/10 rounded-lg flex items-center justify-center mb-4">
                  <Battery className="w-6 h-6 text-[#2D7FF9]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Bajo Consumo</h3>
                <p className="text-gray-600">Iluminación LED de baja potencia. Consumo total estimado: 160-180W.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Especificaciones Técnicas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Especificaciones Técnicas</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-[#2D7FF9]">Capacidades de Carga</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#2D7FF9] mr-2 mt-0.5 flex-shrink-0" />
                      <span>8 enchufes universales (notebooks, celulares)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#2D7FF9] mr-2 mt-0.5 flex-shrink-0" />
                      <span>8 puertos USB / USB-C de carga rápida</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#2D7FF9] mr-2 mt-0.5 flex-shrink-0" />
                      <span>4 cargadores inalámbricos Qi</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-[#2D7FF9]">Construcción</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#2D7FF9] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Chasis metálico grafito electropintado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#2D7FF9] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Base reforzada con perforaciones para anclaje</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#2D7FF9] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Puerta registrable inferior para mantenimiento</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-[#2D7FF9]">Seguridad Eléctrica</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#2D7FF9] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automático de 10A</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#2D7FF9] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Interruptor diferencial</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#2D7FF9] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Caja plástica derivadora interna</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-[#2D7FF9]">Opciones de Anclaje</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#2D7FF9] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Perno a losa para superficies sólidas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#2D7FF9] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Perno con tuerca para pisos falsos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-gradient-to-br from-[#E6F2FF] to-[#D6E8FF]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Beneficios clave</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Smartphone className="w-8 h-8 text-[#2D7FF9] mb-3" />
                <h3 className="font-semibold mb-2">Experiencia del Pasajero</h3>
                <p className="text-gray-600 text-sm">Mejora la satisfacción ofreciendo carga rápida y confiable mientras esperan.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Shield className="w-8 h-8 text-[#2D7FF9] mb-3" />
                <h3 className="font-semibold mb-2">Robustez Comprobada</h3>
                <p className="text-gray-600 text-sm">Diseño anti-vandalismo ideal para espacios públicos de alto tráfico.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Battery className="w-8 h-8 text-[#2D7FF9] mb-3" />
                <h3 className="font-semibold mb-2">Carga Simultánea</h3>
                <p className="text-gray-600 text-sm">Hasta 20 dispositivos cargando al mismo tiempo sin problemas.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Monitor className="w-8 h-8 text-[#2D7FF9] mb-3" />
                <h3 className="font-semibold mb-2">Publicidad Personalizada</h3>
                <p className="text-gray-600 text-sm">Panel superior para mensajes corporativos y branding del aeropuerto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#2D7FF9] to-[#005DAE] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderniza tu aeropuerto</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Solicita una cotización personalizada y conoce nuestros planes de implementación
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#2D7FF9] hover:bg-gray-100 shadow-lg font-semibold"
          >
            <Link to="/contacto">
              Contactar a un especialista
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default AeropuertoCharger;