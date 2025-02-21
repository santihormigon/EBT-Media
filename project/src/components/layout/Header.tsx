import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Menu, X } from 'lucide-react';

export const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-[rgb(41,77,154)] shadow-md z-50">
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center h-full py-2">
            <img 
              src="/ebt-media-logo.png" 
              alt="EBT Media Logo"
              className="w-auto object-contain max-h-16 sm:max-h-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gray-200 font-medium">Inicio</Link>
            <Link to="/about" className="text-white hover:text-gray-200 font-medium">Nosotros</Link>
            <Link to="/services" className="text-white hover:text-gray-200 font-medium">Servicios</Link>
            <Link to="/contact" className="text-white hover:text-gray-200 font-medium">Contacto</Link>
            <a 
              href="https://wa.me/56912345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[rgb(48,118,74)] text-white px-5 py-2.5 rounded-lg font-medium flex items-center space-x-2 hover:bg-[rgb(38,108,64)] transition-colors shadow-md"
            >
              <MessageSquare className="h-5 w-5 text-white" />
              <span>Chatear</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <a 
              href="https://wa.me/56912345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[rgb(48,118,74)] text-white p-2 rounded-lg hover:bg-[rgb(38,108,64)] transition-colors shadow-md"
            >
              <MessageSquare className="h-5 w-5 text-white" />
            </a>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 bg-[rgb(41,77,154)] shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4 px-6">
            <Link 
              to="/" 
              className="text-white hover:text-gray-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-gray-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-gray-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-gray-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};