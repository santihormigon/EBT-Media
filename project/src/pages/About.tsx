import React from 'react';

export const AboutComponent = () => (
  <div className="pt-32 pb-24 bg-[rgb(254,255,254)] text-[rgb(41,77,154)]">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-[rgb(41,77,154)] text-center">Sobre EBT Media</h1>
        <div className="relative mb-12">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
            alt="Reunión de equipo" 
            className="w-full rounded-xl shadow-lg"
          />
          <div className="absolute -bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-[rgb(41,77,154)] font-bold">3+ Años</p>
            <p className="text-gray-600 text-sm">de Experiencia</p>
          </div>
        </div>
        <div className="prose max-w-none">
          <p className="text-lg text-[rgb(41,77,154)] mb-8 leading-relaxed">
            Durante los últimos 3 años, EBT Media ha estado a la vanguardia de la innovación en marketing digital, 
            ayudando a empresas a alcanzar sus objetivos de crecimiento a través de soluciones digitales estratégicas.
          </p>
          <p className="text-lg text-[rgb(41,77,154)] mb-12 leading-relaxed">
            Nuestro equipo de profesionales experimentados combina creatividad con análisis de datos para 
            entregar resultados excepcionales a nuestros clientes. Nos enorgullecemos de mantenernos adelante 
            en las tendencias de la industria y mantener relaciones sólidas con nuestros clientes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800" 
              alt="Equipo colaborando" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
              alt="Análisis de datos" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <h2 className="text-3xl font-bold mt-16 mb-10 text-[rgb(41,77,154)]">Nuestros Valores</h2>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgb(41,77,154)] flex items-center justify-center text-white">✓</div>
              <div>
                <h3 className="text-xl font-bold text-[rgb(41,77,154)] mb-2">Innovación</h3>
                <p className="text-[rgb(41,77,154)]">Constantemente exploramos nuevas tecnologías y estrategias para mantener a nuestros clientes a la vanguardia.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgb(41,77,154)] flex items-center justify-center text-white">✓</div>
              <div>
                <h3 className="text-xl font-bold text-[rgb(41,77,154)] mb-2">Transparencia</h3>
                <p className="text-[rgb(41,77,154)]">Creemos en la comunicación abierta y los resultados medibles.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgb(41,77,154)] flex items-center justify-center text-white">✓</div>
              <div>
                <h3 className="text-xl font-bold text-[rgb(41,77,154)] mb-2">Éxito del Cliente</h3>
                <p className="text-[rgb(41,77,154)]">Tu crecimiento es nuestra prioridad. Medimos nuestro éxito a través de tus logros.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);