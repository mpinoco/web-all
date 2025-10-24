import React, { useState, useEffect, useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { QuoteContext } from '../App';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { toast } from 'sonner';
import SEO from '../components/SEO';
import Hashtags from '../components/Hashtags';
import seoData from '../data/seoData';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Products = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const { addToQuote } = useContext(QuoteContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          axios.get(`${BACKEND_URL}/api/products${
            selectedCategory !== 'all' ? `?category=${selectedCategory}` : ''
          }`),
          axios.get(`${BACKEND_URL}/api/categories`)
        ]);
        setProducts(productsRes.data);
        setCategories(categoriesRes.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Error al cargar productos');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const handleAddToQuote = (product) => {
    addToQuote(product);
    toast.success(`${product.name} agregado al carrito de cotización`);
  };

  const getInventoryBadge = (state) => {
    const badges = {
      in_stock: { label: 'En Stock', variant: 'default' },
      low: { label: 'Bajo Stock', variant: 'secondary' },
      by_order: { label: 'Por Pedido', variant: 'outline' },
      discontinued: { label: 'Descontinuado', variant: 'destructive' }
    };
    return badges[state] || badges.in_stock;
  };

  return (
    <>
      <SEO 
        title={seoData.products.title}
        description={seoData.products.description}
        keywords={seoData.products.keywords}
        canonicalUrl={seoData.products.canonicalUrl}
        schema={seoData.products.schema}
      />
    <main className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-testid="products-title">Catálogo de Productos</h1>
          <p className="text-lg text-gray-600">Soluciones de hardware para retail, bancos y comercio</p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            data-testid="filter-all"
            className={selectedCategory === 'all' ? 'bg-slate-700' : ''}
          >
            Todos
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.slug ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.slug)}
              data-testid={`filter-${category.slug}`}
              className={selectedCategory === category.slug ? 'bg-slate-700' : ''}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Cargando productos...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No hay productos disponibles en esta categoría.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="products-grid">
            {products.map((product) => {
              const inventoryBadge = getInventoryBadge(product.inventory_state);
              return (
                <Card
                  key={product.id}
                  data-testid={`product-card-${product.slug}`}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <Link to={`/producto/${product.slug}`}>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </Link>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <Link to={`/producto/${product.slug}`}>
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-slate-700 transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <Badge variant={inventoryBadge.variant} className="text-xs">
                          {inventoryBadge.label}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.summary}</p>

                      <div className="space-y-2 mb-4">
                        {product.bullets.slice(0, 2).map((bullet, idx) => (
                          <div key={idx} className="flex items-start text-xs text-gray-600">
                            <span className="text-slate-700 mr-2">•</span>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          onClick={() => handleAddToQuote(product)}
                          data-testid={`add-to-quote-${product.slug}`}
                          className="flex-1 bg-slate-700 hover:bg-slate-800"
                        >
                          Añadir a cotización
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          data-testid={`view-product-${product.slug}`}
                        >
                          <Link to={`/producto/${product.slug}`}>Ver</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </main>
      <Hashtags tags={seoData.products.hashtags} />
    </>
  );
};

export default Products;