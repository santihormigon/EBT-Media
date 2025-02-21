import React, { useState, useRef } from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactComponent = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
        });
        form.current.reset();
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[rgb(254,255,254)] text-[rgb(41,77,154)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16 text-[rgb(41,77,154)]">Contáctanos</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[rgb(41,77,154)]">Ponte en Contacto</h2>
              <p className="text-[rgb(41,77,154)] mb-10 leading-relaxed">
                ¿Listo para llevar tu presencia digital al siguiente nivel? Contáctanos hoy 
                y conversemos sobre cómo podemos ayudar a tu empresa a crecer.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-[rgb(41,77,154)] bg-opacity-10 rounded-xl flex items-center justify-center">
                    <Phone className="h-7 w-7 text-[rgb(41,77,154)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[rgb(41,77,154)] text-lg mb-1">Teléfono</h3>
                    <p className="text-[rgb(41,77,154)]">+56 9 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-[rgb(41,77,154)] bg-opacity-10 rounded-xl flex items-center justify-center">
                    <Mail className="h-7 w-7 text-[rgb(41,77,154)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[rgb(41,77,154)] text-lg mb-1">Correo</h3>
                    <p className="text-[rgb(41,77,154)]">contacto@ebtmedia.cl</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-[rgb(41,77,154)] bg-opacity-10 rounded-xl flex items-center justify-center">
                    <MessageSquare className="h-7 w-7 text-[rgb(41,77,154)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[rgb(41,77,154)] text-lg mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/56912345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(41,77,154)] hover:text-[rgb(38,108,64)] transition-colors"
                    >
                      Escríbenos por WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
                  alt="Equipo de soporte" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div>
              <form ref={form} onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
                {submitStatus.type && (
                  <div 
                    className={`mb-6 p-4 rounded-lg ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-100 text-green-700 border border-green-200' 
                        : 'bg-red-100 text-red-700 border border-red-200'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div className="mb-6">
                  <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(41,77,154)] focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(41,77,154)] focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="user_phone"
                    name="user_phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(41,77,154)] focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(41,77,154)] focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[rgb(234,38,48)] text-white px-6 py-3.5 rounded-lg hover:bg-[rgb(244,142,60)] transition-colors shadow-md font-medium ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};