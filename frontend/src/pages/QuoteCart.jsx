import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { QuoteContext } from '../App';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Trash2, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const QuoteCart = () => {
  const { quoteItems, updateQuoteItem, removeFromQuote, clearQuote } = useContext(QuoteContext);
  const [formData, setFormData] = useState({
    company: '',
    rut: '',
    contact_name: '',
    email: '',
    phone: '',
    region: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) return;
    updateQuoteItem(productId, { quantity });
  };

  const handleNotesChange = (productId, notes) => {
    updateQuoteItem(productId, { notes });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (quoteItems.length === 0) {
      toast.error('El carrito de cotización está vacío');
      return;
    }

    setLoading(true);
    try {
      const quoteData = {
        ...formData,
        items: quoteItems
      };
      await axios.post(`${BACKEND_URL}/api/quote`, quoteData);
      toast.success('¡Cotización enviada! Te contactaremos dentro de 24 horas hábiles.');
      clearQuote();
      setFormData({
        company: '',
        rut: '',
        contact_name: '',
        email: '',
        phone: '',
        region: '',
        notes: ''
      });
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast.error('Error al enviar cotización. Inténtalo nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8" data-testid="quote-cart-title">
            Carrito de Cotización
          </h1>

          {quoteItems.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Tu carrito está vacío</h2>
                <p className="text-gray-600 mb-6">Agrega productos para solicitar una cotización</p>
                <Button asChild data-testid="go-to-products">
                  <Link to="/productos">Ver catálogo</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Items */}
              <div className="md:col-span-2 space-y-4">
                {quoteItems.map((item) => (
                  <Card key={item.product_id} data-testid={`quote-item-${item.product_id}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{item.product_name}</h3>
                          <div className="flex items-center space-x-3 mt-2">
                            <Label>Cantidad:</Label>
                            <Input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.product_id, parseInt(e.target.value))}
                              data-testid={`quantity-${item.product_id}`}
                              className="w-20"
                            />
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromQuote(item.product_id)}
                          data-testid={`remove-${item.product_id}`}
                          className="text-red-600 hover:text-red-700 p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <div>
                        <Label>Notas (opcional):</Label>
                        <Textarea
                          value={item.notes || ''}
                          onChange={(e) => handleNotesChange(item.product_id, e.target.value)}
                          data-testid={`notes-${item.product_id}`}
                          placeholder="Especificaciones adicionales..."
                          rows={2}
                          className="mt-1"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quote Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Datos de contacto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <Label htmlFor="company">Empresa *</Label>
                        <Input
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          data-testid="quote-company"
                        />
                      </div>

                      <div>
                        <Label htmlFor="rut">RUT *</Label>
                        <Input
                          id="rut"
                          name="rut"
                          required
                          value={formData.rut}
                          onChange={handleChange}
                          data-testid="quote-rut"
                          placeholder="12345678-9"
                        />
                      </div>

                      <div>
                        <Label htmlFor="contact_name">Nombre contacto *</Label>
                        <Input
                          id="contact_name"
                          name="contact_name"
                          required
                          value={formData.contact_name}
                          onChange={handleChange}
                          data-testid="quote-name"
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
                          data-testid="quote-email"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Teléfono *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          data-testid="quote-phone"
                        />
                      </div>

                      <div>
                        <Label htmlFor="region">Región *</Label>
                        <Input
                          id="region"
                          name="region"
                          required
                          value={formData.region}
                          onChange={handleChange}
                          data-testid="quote-region"
                        />
                      </div>

                      <div>
                        <Label htmlFor="notes">Notas adicionales</Label>
                        <Textarea
                          id="notes"
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          data-testid="quote-notes"
                          rows={3}
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        data-testid="quote-submit"
                        className="w-full bg-slate-700 hover:bg-slate-800"
                        size="lg"
                      >
                        {loading ? 'Enviando...' : 'Enviar cotización'}
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        Te contactaremos dentro de 24 horas hábiles
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default QuoteCart;