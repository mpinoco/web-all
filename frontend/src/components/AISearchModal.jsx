import React, { useState } from 'react';
import axios from 'axios';
import { X, Search, Loader2, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AISearchModal = ({ open, onClose }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/api/ai/search`, { query });
      setResults(response.data);
    } catch (error) {
      console.error('AI search error:', error);
      alert('Error en la búsqueda. Inténtalo nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (slug) => {
    navigate(`/producto/${slug}`);
    onClose();
    setQuery('');
    setResults(null);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20" onClick={onClose}>
      <div 
        className="bg-white rounded-lg w-full max-w-2xl mx-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        data-testid="ai-search-modal"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-slate-700" />
            <h2 className="text-lg font-semibold text-gray-900">Búsqueda Inteligente</h2>
          </div>
          <button
            onClick={onClose}
            data-testid="close-ai-search"
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="p-4">
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Ej: Kiosko para alto tráfico con pago sin contacto"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              data-testid="ai-search-input"
              className="flex-1"
              disabled={loading}
            />
            <Button
              type="submit"
              disabled={loading || !query.trim()}
              data-testid="ai-search-submit"
              className="bg-slate-700 hover:bg-slate-800"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            </Button>
          </div>
        </form>

        {/* Results */}
        {loading && (
          <div className="p-8 text-center">
            <Loader2 className="w-8 h-8 animate-spin text-slate-700 mx-auto" />
            <p className="text-sm text-gray-600 mt-2">Analizando catálogo...</p>
          </div>
        )}

        {results && !loading && (
          <div className="p-4 max-h-96 overflow-y-auto">
            {/* Explanation */}
            {results.explanation && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-700">{results.explanation}</p>
              </div>
            )}

            {/* Products */}
            {results.results && results.results.length > 0 ? (
              <div className="space-y-3">
                {results.results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product.slug)}
                    data-testid={`ai-result-${product.slug}`}
                    className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border border-gray-200"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{product.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600 py-8">No se encontraron productos para tu consulta.</p>
            )}
          </div>
        )}

        {!results && !loading && (
          <div className="p-8 text-center text-gray-500">
            <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-sm">Describe lo que necesitas y encontraré los mejores productos para ti.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AISearchModal;