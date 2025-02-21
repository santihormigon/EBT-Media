import React, { useState, useEffect } from 'react';

const clients = [
  {
    logo: "/ebt_logo/HM Youtube.png",
    name: "HM Youtube",
    description: "Servicios de Marketing Digital"
  },
  {
    logo: "/ebt_logo/JPG VERTICAL COLOR - copia.jpg",
    name: "EBT Media",
    description: "Agencia de Marketing Digital"
  },
  {
    logo: "/ebt_logo/logo_login.jpg",
    name: "EBT Media Login",
    description: "Soluciones Digitales Integrales"
  },
  {
    logo: "/ebt_logo/playplaza vertical color.png",
    name: "Play Plaza",
    description: "Entretenimiento Digital"
  },
  {
    logo: "/ebt_logo/step2 logo.jpg",
    name: "Step2",
    description: "Innovación en Marketing"
  }
];

export const ImageCarousel = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev - 1));
    }, 50); // Velocidad de la animación

    return () => clearInterval(interval);
  }, []);

  const getTransformValue = () => {
    const itemWidth = 300; // Ancho de cada elemento
    const totalWidth = clients.length * itemWidth;
    const normalizedPosition = position % totalWidth;
    return `translateX(${normalizedPosition}px)`;
  };

  // Duplicar los clientes para crear un efecto infinito
  const displayClients = [...clients, ...clients];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold text-center text-[rgb(41,77,154)] mb-4">
          Nuestros Clientes
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Empresas que confían en nosotros para su transformación digital
        </p>
      </div>

      <div className="relative overflow-hidden w-full">
        <div 
          className="flex transition-transform duration-[50ms] ease-linear"
          style={{ transform: getTransformValue() }}
        >
          {displayClients.map((client, index) => (
            <div
              key={index}
              className="flex-none w-[300px] mx-4"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-[200px] flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={client.logo}
                  alt={client.name}
                  className="w-32 h-32 mb-4 object-contain"
                />
                <h3 className="text-lg font-bold text-[rgb(41,77,154)] text-center mb-2">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gradientes para suavizar los bordes */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
      </div>
    </div>
  );
};