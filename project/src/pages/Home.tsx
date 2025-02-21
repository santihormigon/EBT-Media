import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, PenTool, BarChart3, MessageSquare, ArrowRight, Store } from 'lucide-react';
import { ImageCarousel } from '../components/common/ImageCarousel';

export const HomeComponent = () => (
  <div>
    <section className="pt-32 pb-24 bg-[rgb(254,255,254)] text-[rgb(41,77,154)] relative group">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-opacity group-hover:opacity-65"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070")',
          opacity: 0.3
        }}
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8 leading-tight">Transforma tu Presencia Digital</h1>
          <p className="text-xl mb-10">Ayudamos a empresas a crecer a través de soluciones estratégicas de marketing digital.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[rgb(234,38,48)] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[rgb(244,142,60)] transition-colors shadow-lg">
              Comenzar
            </Link>
            <a 
              href="https://wa.me/56912345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[rgb(48,118,74)] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[rgb(38,108,64)] transition-colors shadow-lg flex items-center space-x-2"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Chatear</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-[rgb(254,255,254)]">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-16 text-[rgb(41,77,154)]">
      Nuestros Servicios
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Card 1 */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-all filter brightness-75 group-hover:brightness-50"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015")'
          }}
        ></div>
        <div className="relative z-10">
          <Globe2 className="h-14 w-14 text-white mb-6" />
          <h3 className="text-2xl font-bold mb-4 text-white">Publicidad Digital</h3>
          <p className="text-white font-bold mb-10">
            Campañas estratégicas en Google y Meta para alcanzar a tu público objetivo.
          </p>
          <Link 
            to="/services" 
            className="text-white flex items-center space-x-2 hover:text-[rgb(41,77,154)] font-medium"
          >
            <span>Ver Más</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-all filter brightness-75 group-hover:brightness-50"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070")'
          }}
        ></div>
        <div className="relative z-10">
          <PenTool className="h-14 w-14 text-white mb-6" />
          <h3 className="text-2xl font-bold mb-4 text-white">Desarrollo Web</h3>
          <p className="text-white font-bold mb-10">
            Sitios web personalizados construidos en un mes, diseñados para convertir visitantes en clientes.
          </p>
          <Link 
            to="/services" 
            className="text-white flex items-center space-x-2 hover:text-[rgb(41,77,154)] font-medium"
          >
            <span>Ver Más</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      {/* Card 3 */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-all filter brightness-75 group-hover:brightness-50"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070")'
          }}
        ></div>
        <div className="relative z-10">
          <BarChart3 className="h-14 w-14 text-white mb-6" />
          <h3 className="text-2xl font-bold mb-4 text-white">Asesoría en Marketing</h3>
          <p className="text-white font-bold mb-10">
            Orientación experta para ayudarte a tomar decisiones informadas de marketing.
          </p>
          <Link 
            to="/services" 
            className="text-white flex items-center space-x-2 hover:text-[rgb(41,77,154)] font-medium"
          >
            <span>Ver Más</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      {/* Card 4 */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-all filter brightness-75 group-hover:brightness-50"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2000")'
          }}
        ></div>
        <div className="relative z-10">
          <Store className="h-14 w-14 text-white mb-6" />
          <h3 className="text-2xl font-bold mb-4 text-white">Servicios Shopify</h3>
          <p className="text-white font-bold mb-10">
            Soluciones completas para tu tienda online en Shopify, desde la creación hasta la optimización.
          </p>
          <Link 
            to="/services" 
            className="text-white flex items-center space-x-2 hover:text-[rgb(41,77,154)] font-medium"
          >
            <span>Ver Más</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070")'
        }}
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[rgb(41,77,154)]">¿Por qué elegirnos?</h2>
            <p className="text-gray-700 mb-8">Combinamos estrategia, creatividad y tecnología para impulsar el crecimiento de tu negocio en el mundo digital.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-[rgb(234,38,48)] flex items-center justify-center text-white text-sm">✓</div>
                <span className="text-gray-700">Estrategias personalizadas para cada cliente</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-[rgb(234,38,48)] flex items-center justify-center text-white text-sm">✓</div>
                <span className="text-gray-700">Equipo experto y dedicado</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-[rgb(234,38,48)] flex items-center justify-center text-white text-sm">✓</div>
                <span className="text-gray-700">Resultados medibles y transparentes</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
              alt="Equipo trabajando" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-[rgb(41,77,154)] font-bold text-xl">+500</p>
              <p className="text-gray-600 text-sm">Clientes Satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ImageCarousel />
  </div>
);