import React from 'react';

const PartnersCarousel = () => {
  const partners = [
    { name: 'JUSTO', logo: 'https://www.getjusto.com/hs-fs/hubfs/Logo%20Justo-1.png?width=300&height=100' },
    { name: 'IBM', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"%3E%3Cg fill="%231f70c1"%3E%3Crect x="20" y="20" width="160" height="8"/%3E%3Crect x="20" y="36" width="160" height="8"/%3E%3Crect x="20" y="52" width="160" height="8"/%3E%3Ctext x="70" y="45" font-family="Arial" font-size="28" font-weight="bold" fill="%231f70c1"%3EIBM%3C/text%3E%3C/g%3E%3C/svg%3E' },
    { name: 'Oracle', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"%3E%3Ctext x="30" y="40" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="%23f80000"%3EORACLE%3C/text%3E%3C/svg%3E' },
    { name: 'NCR', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"%3E%3Ctext x="50" y="40" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="%23009fdb"%3ENCR%3C/text%3E%3C/svg%3E' },
    { name: 'Zebra', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"%3E%3Ctext x="40" y="40" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="%23000000"%3EZEBRA%3C/text%3E%3C/svg%3E' },
    { name: 'Epson', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"%3E%3Ctext x="40" y="40" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="%230046ad"%3EEPSON%3C/text%3E%3C/svg%3E' },
    { name: 'HP', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"%3E%3Ccircle cx="100" cy="30" r="25" fill="%230096d6"/%3E%3Ctext x="85" y="40" font-family="Arial" font-size="28" font-weight="bold" fill="white"%3EHP%3C/text%3E%3C/svg%3E' },
  ];

  // Duplicar partners para efecto de loop infinito
  const allPartners = [...partners, ...partners];

  return (
    <section className="py-12 bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden" data-testid="partners-carousel">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
          Partners Tecnológicos
        </h2>
        <p className="text-center text-gray-600">
          Trabajamos con las mejores marcas del mundo
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-emerald-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-teal-50 to-transparent z-10"></div>

        {/* Scrolling Track */}
        <div className="flex animate-scroll-partners">
          {allPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: '180px', height: '80px' }}
            >
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-partners {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-partners {
          animation: scroll-partners 30s linear infinite;
          display: flex;
          width: fit-content;
        }

        .animate-scroll-partners:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersCarousel;
