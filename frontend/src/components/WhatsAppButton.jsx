import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    // Mockup - just show alert
    alert('WhatsApp: +56 9 1234 5678\n\nEsta es una demostración. En producción, esto abriría WhatsApp Business.');
  };

  return (
    <button
      onClick={handleClick}
      data-testid="whatsapp-float-button"
      className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50"
      title="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;