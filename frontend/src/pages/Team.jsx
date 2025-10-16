import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Linkedin, Mail, Quote } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: 'Ricardo Morales',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      linkedin: '#',
      email: 'ricardo@allcom.cl',
      quote: 'Transformando el retail con tecnología'
    },
    {
      name: 'Patricia Díaz',
      role: 'CTO - Jefa Técnica',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      linkedin: '#',
      email: 'patricia@allcom.cl',
      quote: 'Innovación sin límites'
    },
    {
      name: 'Carlos Soto',
      role: 'Ingeniero Senior IA',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
      linkedin: '#',
      email: 'carlos@allcom.cl',
      quote: 'Construyendo el futuro hoy'
    },
    {
      name: 'Ana Fernández',
      role: 'Ingeniera de Soluciones',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      linkedin: '#',
      email: 'ana@allcom.cl',
      quote: 'Simplicidad con impacto'
    }
  ];

  const values = [
    { title: 'Excelencia', description: 'Buscamos la perfección en cada detalle' },
    { title: 'Innovación', description: 'Lideramos el cambio con tecnología' },
    { title: 'Compromiso', description: 'Tu éxito es nuestro éxito' },
    { title: 'Integridad', description: 'Transparencia en cada acción' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Simple and Clean */}
      <section className="relative py-20 bg-gradient-to-br from-[#0B3A5E] to-[#0072CE] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2 backdrop-blur-sm">
              Conoce al Equipo
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Expertos en Retail Tech
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Un equipo apasionado por transformar el retail chileno con las mejores soluciones tecnológicas del mundo
            </p>
            <div className="inline-block px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-sm font-medium">17+ años de experiencia · 500+ clientes satisfechos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Inspired by reference design */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">Liderazgo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              El equipo que hace posible lo imposible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {leadership.map((member, index) => (
              <Card 
                key={index}
                className="border-2 border-gray-200 hover:border-[#0072CE] hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden bg-gray-200">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                    <p className="text-sm text-[#0072CE] font-medium mb-4">{member.role}</p>
                    
                    {/* Quote */}
                    <div className="flex items-start mb-4 p-3 bg-gray-50 rounded-lg">
                      <Quote className="w-4 h-4 text-[#0072CE] mr-2 mt-1 flex-shrink-0" />
                      <p className="text-xs text-gray-700 italic">"{member.quote}"</p>
                    </div>

                    {/* Contact */}
                    <div className="flex gap-2">
                      <a 
                        href={`mailto:${member.email}`}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-[#0072CE] hover:bg-[#0B3A5E] text-white rounded-lg transition-colors text-sm"
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </a>
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center py-2 px-3 border-2 border-[#0072CE] text-[#0072CE] hover:bg-[#0072CE] hover:text-white rounded-lg transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Staff Photo - Full Width */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">Nuestro Equipo Técnico</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profesionales dedicados a tu éxito
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-gray-200 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                    alt="Equipo Técnico ALLCOM"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">15 Técnicos Certificados</h3>
                    <p className="text-lg text-white/90 mb-4">Instalación, mantención y soporte en todo Chile</p>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                        Certificados Internacionales
                      </Badge>
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                        Soporte 24/7
                      </Badge>
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                        Cobertura Nacional
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section - Minimalist */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">Nuestros Valores</h2>
            <p className="text-lg text-gray-600">
              Lo que nos define
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="border-2 border-gray-200 hover:border-[#0072CE] hover:shadow-lg transition-all group text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-[#0072CE]/10 group-hover:bg-[#0072CE] flex items-center justify-center mx-auto mb-4 transition-colors">
                    <span className="text-3xl font-bold text-[#0072CE] group-hover:text-white transition-colors">
                      {value.title[0]}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section className="py-20 bg-gradient-to-br from-[#0072CE] to-[#0B3A5E] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 mx-auto mb-6 text-white/40" />
            <blockquote className="text-3xl md:text-4xl font-light mb-8 leading-relaxed">
              "La tecnología es poderosa,<br />pero las personas la hacen extraordinaria"
            </blockquote>
            <p className="text-xl text-white/80">- Equipo ALLCOM</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[#0072CE] bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  ¿Quieres ser parte del equipo?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Estamos siempre buscando talento excepcional para unirse a nuestra misión de transformar el retail chileno
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="mailto:jobs@allcom.cl"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#0072CE] hover:bg-[#0B3A5E] text-white rounded-lg transition-colors font-medium text-lg"
                  >
                    <Mail className="w-5 h-5" />
                    Enviar CV
                  </a>
                  <a 
                    href="https://wa.me/56912345678?text=Hola, quiero información sobre trabajar en ALLCOM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#0072CE] text-[#0072CE] hover:bg-[#0072CE] hover:text-white rounded-lg transition-colors font-medium text-lg"
                  >
                    Contáctanos
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
