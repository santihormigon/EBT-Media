import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageSquare, Facebook, Instagram, Linkedin } from 'lucide-react';

export const FooterComponent = () => (
  <footer className="bg-[rgb(41,77,154)] text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <img 
              src="/ebt-media-logo.png" 
              alt="EBT Media Logo" 
              className="h-70 w-auto"
            />
          </div>
          <p className="text-gray-300 mb-6">
            Transformamos tu presencia digital con estrategias efectivas y resultados medibles.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-6">Servicios</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Publicidad Digital
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Desarrollo Web
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Asesoría en Marketing
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-6">Enlaces</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-6">Contacto</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-300" />
              <span className="text-gray-300">+56 9 1234 5678</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-gray-300" />
              <span className="text-gray-300">contacto@ebtmedia.cl</span>
            </li>
            <li className="flex items-center space-x-3">
              <MessageSquare className="h-5 w-5 text-gray-300" />
              <a 
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
        <p>&copy; {new Date().getFullYear()} EBT Media. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);