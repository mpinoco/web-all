import React from 'react';

const ClientsGrid = () => {
  const clients = [
    { name: 'Falabella', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"%3E%3Ctext x="30" y="45" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="%23666"%3EFalabella%3C/text%3E%3C/svg%3E' },
    { name: 'Cencosud', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"%3E%3Ctext x="30" y="45" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="%23666"%3ECencosud%3C/text%3E%3C/svg%3E' },
    { name: 'Walmart Chile', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"%3E%3Ctext x="35" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="%23666"%3EWalmart%3C/text%3E%3C/svg%3E' },
    { name: 'SMU', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"%3E%3Ctext x="70" y="45" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="%23666"%3ESMU%3C/text%3E%3C/svg%3E' },
    { name: 'Ripley', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"%3E%3Ctext x="50" y="45" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="%23666"%3ERipley%3C/text%3E%3C/svg%3E' },
    { name: 'Paris', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"%3E%3Ctext x="60" y="45" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="%23666"%3EParis%3C/text%3E%3C/svg%3E' },
    { name: 'Sodimac', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"%3E%3Ctext x="40" y="45" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="%23666"%3ESodimac%3C/text%3E%3C/svg%3E' },
    { name: 'Aramark', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"%3E%3Ctext x="35" y="45" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="%23666"%3EAramark%3C/text%3E%3C/svg%3E' },
    { name: 'Copec', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"%3E%3Ctext x="55" y="45" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="%23666"%3ECopec%3C/text%3E%3C/svg%3E' },
    { name: 'Enex', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"%3E%3Ctext x="65" y="45" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="%23666"%3EEnex%3C/text%3E%3C/svg%3E' },
  ];

  return (
    <section className="py-16 bg-white" data-testid="clients-grid">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Clientes que confían en nosotros
          </h2>
          <p className="text-gray-600">
            Más de 400 empresas en Chile y Latinoamérica
          </p>
        </div>

        {/* Grid de logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              data-testid={`client-${index}`}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full h-auto object-contain hover:scale-110 transition-transform duration-300"
                style={{ maxHeight: '60px' }}
              />
            </div>
          ))}
        </div>

        {/* Divider ornamental */}
        <div className="flex items-center justify-center mt-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientsGrid;
