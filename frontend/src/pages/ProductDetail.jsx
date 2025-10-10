import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { QuoteContext } from '../App';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, Download } from 'lucide-react';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToQuote } = useContext(QuoteContext);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BACKEND_URL}/api/products/${slug}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error('Producto no encontrado');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  const handleAddToQuote = () => {
    addToQuote(product);
    toast.success(`${product.name} agregado al carrito de cotización`);
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-600">Cargando producto...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-600">Producto no encontrado</p>
        <Button asChild className="mt-4">
          <Link to="/productos">Volver al catálogo</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Button
          asChild
          variant="ghost"
          className="mb-6"
          data-testid="back-to-products"
        >
          <Link to="/productos">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al catálogo
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
              data-testid="product-image"
            />
          </div>

          {/* Info */}
          <div>
            <div className="mb-4">
              <Badge variant="outline" className="mb-2">{product.brand}</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2" data-testid="product-name">{product.name}</h1>
              <p className="text-lg text-gray-600">{product.summary}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Características principales</h3>
              <ul className="space-y-2">
                {product.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-slate-700 mr-2 mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-3">
              <Button
                onClick={handleAddToQuote}
                data-testid="add-to-quote-detail"
                className="flex-1 bg-slate-700 hover:bg-slate-800"
                size="lg"
              >
                Añadir a cotización
              </Button>
              <Button
                variant="outline"
                size="lg"
                data-testid="whatsapp-product"
              >
                WhatsApp
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Este producto se cotiza con un especialista. Te contactaremos dentro de 24 horas hábiles.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="specs" data-testid="product-tabs">
            <TabsList>
              <TabsTrigger value="specs" data-testid="tab-specs">Especificaciones</TabsTrigger>
              <TabsTrigger value="compatibility" data-testid="tab-compatibility">Compatibilidad</TabsTrigger>
            </TabsList>

            <TabsContent value="specs">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Especificaciones técnicas</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="border-b border-gray-200 pb-2">
                        <div className="text-sm font-medium text-gray-700">{key}</div>
                        <div className="text-sm text-gray-900">{value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compatibility">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Compatibilidad</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.compatibility.map((item, idx) => (
                      <Badge key={idx} variant="secondary">{item}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;