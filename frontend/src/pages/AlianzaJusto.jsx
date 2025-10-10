import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Wifi, TrendingUp, Users, BarChart3, ShoppingCart, Package, Smartphone, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const AlianzaJusto = () => {
  return (
    <main className="bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50">
      {/* Hero Section - Fresh Lime */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#6EEA6A] via-[#5FD65C] to-[#4CB748]">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-gray-900">
            <div className="inline-block bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">ALIANZA ESTRATÉGICA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ALLCOM + JUSTO
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold">
              Hardware + Software = Solución Completa
            </p>
            <p className="text-xl mb-8 opacity-90">
              La alianza perfecta para restaurantes, cafeterías y negocios gastronómicos.
              <br />Hardware robusto de ALLCOM + Software inteligente de JUSTO.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#6EEA6A] hover:bg-gray-100 shadow-lg font-semibold"
                data-testid="justo-cta-quote"
              >
                <Link to="/contacto">Solicitar demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-white/20 text-gray-900 hover:bg-white"
                data-testid="justo-cta-learn"
              >
                <Link to="#beneficios">Conocer más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* La Alianza */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 rounded-2xl">
                  <Cpu className="w-16 h-16 text-emerald-700 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">ALLCOM</h3>
                  <p className="text-gray-700 mb-4">Especialistas en hardware para retail desde 2008</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" />
                      <span>Terminales POS robustos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" />
                      <span>Impresoras térmicas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" />
                      <span>Pantallas para cocina</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" />
                      <span>Tablets para meseros</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" />
                      <span>Soporte técnico 24/7</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-lime-100 to-lime-200 p-8 rounded-2xl">
                  <Smartphone className="w-16 h-16 text-lime-700 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">JUSTO</h3>
                  <p className="text-gray-700 mb-4">Plataforma líder en software gastronómico</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                      <span>POS intuitivo y rápido</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                      <span>Inventario inteligente</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                      <span>Reportes en tiempo real</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                      <span>Integración con delivery</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                      <span>Facturación automática</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-emerald-500 to-lime-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg">
                <span>ALLCOM</span>
                <span className="text-3xl">+</span>
                <span>JUSTO</span>
                <span className="text-3xl">=</span>
                <span>🚀 Solución Completa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por qué esta alianza funciona</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hardware y software diseñados para trabajar juntos sin fricciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all border-t-4 border-[#6EEA6A]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#6EEA6A]/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#6EEA6A]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Instalación Llave en Mano</h3>
                <p className="text-gray-600">Hardware + software instalado, configurado y funcionando en 48 horas.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-t-4 border-[#6EEA6A]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#6EEA6A]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#6EEA6A]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Capacitación Completa</h3>
                <p className="text-gray-600">Entrenamiento para todo tu equipo en el uso del sistema completo.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-t-4 border-[#6EEA6A]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#6EEA6A]/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-[#6EEA6A]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Reportes Unificados</h3>
                <p className="text-gray-600">Dashboard único con todas las métricas de ventas, inventario y operación.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-t-4 border-[#6EEA6A]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#6EEA6A]/10 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-[#6EEA6A]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Múltiples Canales</h3>
                <p className="text-gray-600">Integración con delivery apps, pedidos online y reservas.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-t-4 border-[#6EEA6A]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#6EEA6A]/10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-[#6EEA6A]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Inventario Sincronizado</h3>
                <p className="text-gray-600">Control en tiempo real de stock, mermas y costos de insumos.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-t-4 border-[#6EEA6A]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#6EEA6A]/10 rounded-lg flex items-center justify-center mb-4">
                  <Wifi className="w-6 h-6 text-[#6EEA6A]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Cloud & Móvil</h3>
                <p className="text-gray-600">Accede desde cualquier lugar. App móvil para gerentes y dueños.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Perfecto para tu negocio</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-emerald-100 to-lime-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">☕</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cafeterías</h3>
                <p className="text-gray-600">Pedidos rápidos, menú digital y control de inventario para coffee shops.</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-emerald-100 to-lime-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍴</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Restaurantes</h3>
                <p className="text-gray-600">Gestión de mesas, comandas a cocina y facturación automática.</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-emerald-100 to-lime-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍰</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pastelerías</h3>
                <p className="text-gray-600">Control de productos perecibles, pedidos anticipados y delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-emerald-100 to-lime-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <blockquote className="text-xl md:text-2xl text-gray-800 italic mb-6">
              "Desde que implementamos ALLCOM + JUSTO, nuestras ventas aumentaron 30% y los errores en comandas bajaron a cero. La integración es perfecta."
            </blockquote>
            <p className="font-semibold text-gray-900">Carlos Muñoz</p>
            <p className="text-gray-600">Dueño, Café Central</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#6EEA6A] to-[#4CB748] text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforma tu negocio hoy</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Agenda una demo gratuita y descubre cómo ALLCOM + JUSTO pueden llevar tu negocio al siguiente nivel
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#6EEA6A] hover:bg-gray-100 shadow-lg font-semibold"
            >
              <Link to="/contacto">
                Agendar demo gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-white/20 hover:bg-white text-gray-900"
            >
              <Link to="/contacto">Hablar con un especialista</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AlianzaJusto;