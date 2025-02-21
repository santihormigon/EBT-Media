import React from 'react';

export const WhatsAppBubbleComponent = () => (
  <a
    href="https://wa.me/56912345678"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-all z-50 flex items-center justify-center"
    title="Contactar al Director"
  >
    <img 
      src="/whatsapp-logo.png" 
      alt="WhatsApp"
      className="w-12 h-12"
    />
    <span className="absolute -top-2 -right-2 bg-[rgb(234,38,48)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span>
  </a>
);