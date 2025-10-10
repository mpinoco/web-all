import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    region: '',
    intent: 'cotizacion',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${BACKEND_URL}/api/contact`, formData);
      toast.success('¡Mensaje enviado! Te contactaremos dentro de 24 horas hábiles.');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        region: '',
        intent: 'cotizacion',
        message: ''
      });
    } catch (error) {
      console.error('Error sending contact:', error);
      toast.error('Error al enviar mensaje. Inténtalo nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-testid="contact-title">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-600">
              Estamos aquí para ayudarte. Respuesta garantizada en 24 horas hábiles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nombre completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      data-testid="contact-name"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Empresa *</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      data-testid="contact-company"
                      placeholder="Mi Empresa S.A."
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      data-testid="contact-email"
                      placeholder="juan@empresa.cl"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono / WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      data-testid="contact-phone"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>

                  <div>
                    <Label htmlFor="region">Región *</Label>
                    <Input
                      id="region"
                      name="region"
                      type="text"
                      required
                      value={formData.region}
                      onChange={handleChange}
                      data-testid="contact-region"
                      placeholder="Región Metropolitana"
                    />
                  </div>

                  <div>
                    <Label htmlFor="intent">Motivo de contacto *</Label>
                    <Select
                      value={formData.intent}
                      onValueChange={(value) => setFormData({ ...formData, intent: value })}
                    >
                      <SelectTrigger data-testid="contact-intent">
                        <SelectValue placeholder="Selecciona un motivo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cotizacion">Solicitar cotización</SelectItem>
                        <SelectItem value="compra">Consulta de compra</SelectItem>
                        <SelectItem value="soporte">Soporte técnico</SelectItem>
                        <SelectItem value="partner">Alianza comercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      data-testid="contact-message"
                      placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    data-testid="contact-submit"
                    className="w-full bg-slate-700 hover:bg-slate-800"
                    size="lg"
                  >
                    {loading ? 'Enviando...' : 'Enviar mensaje'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                      <p className="text-gray-600">+56 2 1234 5678</p>
                      <p className="text-sm text-gray-500">Lun-Vie, 9:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">WhatsApp Business</h3>
                      <p className="text-gray-600">+56 9 1234 5678</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        data-testid="contact-whatsapp"
                      >
                        Abrir chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">ventas@alcom.cl</p>
                      <p className="text-sm text-gray-500">Respuesta en 24h hábiles</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                      <p className="text-gray-600">Av. Providencia 1234</p>
                      <p className="text-gray-600">Santiago, Chile</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;