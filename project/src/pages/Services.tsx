import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, PenTool, BarChart3, Store } from 'lucide-react';

export const ServicesComponent = () => (
  <div className="pt-32 pb-24 bg-[rgb(254,255,254)] text-[rgb(41,77,154)]">
    <div className="container mx-auto px-6">
      <h1 className="text-4xl font-bold text-center mb-16 text-[rgb(41,77,154)]">Nuestros Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-30 transition-all duration-300"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=1000")'
            }}
          ></div>
          <div className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
            <Globe2 className="h-16 w-16 text-[rgb(41,77,154)] mb-6 group-hover:text-[rgb(234,38,48)] transition-colors duration-300" />
            <h2 className="text-2xl font-bold mb-6 text-[rgb(41,77,154)] group-hover:text-[rgb(234,38,48)] transition-colors duration-300">Publicidad Digital</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              Campañas estratégicas en Google y Meta diseñadas para alcanzar a tu público objetivo 
              y generar resultados medibles.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Gestión de Google Ads</span>
              </li>
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Anuncios en Facebook e Instagram</span>
              </li>
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Campañas de Retargeting</span>
              </li>
            </ul>
            <Link 
              to="/contact" 
              className="inline-block bg-[rgb(234,38,48)] text-white px-8 py-3.5 rounded-lg hover:bg-[rgb(244,142,60)] transition-colors shadow-md font-medium"
            >
              Comenzar
            </Link>
          </div>
        </div>
        
        <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-30 transition-all duration-300"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000")'
            }}
          ></div>
          <div className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
            <PenTool className="h-16 w-16 text-[rgb(41,77,154)] mb-6 group-hover:text-[rgb(234,38,48)] transition-colors duration-300" />
            <h2 className="text-2xl font-bold mb-6 text-[rgb(41,77,154)] group-hover:text-[rgb(234,38,48)] transition-colors duration-300">Desarrollo Web</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              Sitios web personalizados construidos en un mes, diseñados para convertir visitantes 
              en clientes y mostrar tu marca profesionalmente.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Diseño Responsivo</span>
              </li>
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Optimización SEO</span>
              </li>
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Sistema de Gestión de Contenido</span>
              </li>
            </ul>
            <Link 
              to="/contact" 
              className="inline-block bg-[rgb(234,38,48)] text-white px-8 py-3.5 rounded-lg hover:bg-[rgb(244,142,60)] transition-colors shadow-md font-medium"
            >
              Comenzar
            </Link>
          </div>
        </div>

        <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-30 transition-all duration-300"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000")'
            }}
          ></div>
          <div className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
            <BarChart3 className="h-16 w-16 text-[rgb(41,77,154)] mb-6 group-hover:text-[rgb(234,38,48)] transition-colors duration-300" />
            <h2 className="text-2xl font-bold mb-6 text-[rgb(41,77,154)] group-hover:text-[rgb(234,38,48)] transition-colors duration-300">Asesoría en Marketing</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              Orientación experta para ayudarte a tomar decisiones informadas de marketing y desarrollar 
              estrategias efectivas para el crecimiento de tu negocio.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Desarrollo de Estrategias</span>
              </li>
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Análisis de Mercado</span>
              </li>
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Optimización de Rendimiento</span>
              </li>
            </ul>
            <Link 
              to="/contact" 
              className="inline-block bg-[rgb(234,38,48)] text-white px-8 py-3.5 rounded-lg hover:bg-[rgb(244,142,60)] transition-colors shadow-md font-medium"
            >
              Comenzar
            </Link>
          </div>
        </div>

        <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-30 transition-all duration-300"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2000")'
            }}
          ></div>
          <div className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
            <Store className="h-16 w-16 text-[rgb(41,77,154)] mb-6 group-hover:text-[rgb(234,38,48)] transition-colors duration-300" />
            <h2 className="text-2xl font-bold mb-6 text-[rgb(41,77,154)] group-hover:text-[rgb(234,38,48)] transition-colors duration-300">Servicios Shopify</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              Soluciones completas para tu tienda online en Shopify, desde la creación hasta la optimización 
              y el crecimiento de tu negocio digital.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Creación y Diseño de Tiendas</span>
              </li>
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Optimización SEO y Rendimiento</span>
              </li>
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Integración de Aplicaciones</span>
              </li>
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Estrategias de Marketing Digital</span>
              </li>
              <li className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-[rgb(41,77,154)] group-hover:bg-[rgb(234,38,48)] flex items-center justify-center text-white text-xs transition-colors duration-300">✓</div>
                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Asesoramiento Continuo</span>
              </li>
            </ul>
            <Link 
              to="/contact" 
              className="inline-block bg-[rgb(234,38,48)] text-white px-8 py-3.5 rounded-lg hover:bg-[rgb(244,142,60)] transition-colors shadow-md font-medium"
            >
              Comenzar
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);