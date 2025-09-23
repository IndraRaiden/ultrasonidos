'use client';

import { useEffect, useState } from "react";

export default function Thirdpointfive() {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    // Initial check for language
    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLanguage(event.detail.language);
    };

    // Add event listener for language changes
    document.addEventListener('languageChange', handleLanguageChange as EventListener);

    // Clean up event listener
    return () => {
      document.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  // Real client review data
  const reviews = [
    {
      id: 1,
      name: 'Danny Orozco',
      nameEs: 'Danny Orozco',
      role: 'Client',
      roleEs: 'Cliente',
      // No image reference needed
      content: 'I had a great experience at the ultrasound, the girls were super nice and very friendly. They left me with no doubts. I like how honest they are, highly recommended ♥️',
      contentEs: 'Tuve una buena experiencia en el ultra sonido, las muchachas súper lindas y muy amables. Me dejaron sin ninguna duda. Me gusta lo honesta que son, súper recomendado ♥️',
      rating: 5,
    },
    {
      id: 2,
      name: 'Rocio Van Eerde',
      nameEs: 'Rocio Van Eerde',
      role: 'Expecting Mother',
      roleEs: 'Futura Madre',
      // No image reference needed
      content: 'Thank you very much for your service, the girls were very friendly and I am happy to see my baby moving especially this Valentine\'s Day as that is my gift to see that little one grow, thank you Hi Baby Ultrasound.',
      contentEs: 'Muchas gracias por su servicio muy amables las muchachas y estoy feliz de ver a mi bebe como se mueve especialmente este día san Valentín que ese es mi regalo ver ese pequeñito crecer gracias Hi Baby Ultrasound.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Daisy Irdiana',
      nameEs: 'Daisy Irdiana',
      role: 'Client',
      roleEs: 'Cliente',
      // No image reference needed
      content: 'Great! We received the first package and the room was very comfortable. The girls were super friendly and professional and made us feel very comfortable at all times. We loved the experience, I recommend it 10/10.',
      contentEs: '¡Genial! Recibimos el primer paquete y la habitación era muy cómoda. Las chicas fueron súper amables y profesionales y nos hicieron sentir muy cómodos en todo momento. Nos encantó la experiencia, la recomiendo 10/10.',
      rating: 5,
    },
  ];

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? "text-yellow-500" : "text-gray-300"}`} 
        fill="currentColor" 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <section className="py-24 bg-violet-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-purple-600 mb-4 block">
            {currentLanguage === 'en' ? 'Client Testimonials' : 'Testimonios de Clientes'}
          </span>
          <h2 className="section-heading centered text-3xl text-gray-900">
            {currentLanguage === 'en' ? 'What Our Clients Say' : 'Lo Que Dicen Nuestros Clientes'}
          </h2>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
            {currentLanguage === 'en' 
              ? 'Discover the experiences of parents who have chosen our ultrasound services for their special moments.'
              : 'Descubra las experiencias de padres que han elegido nuestros servicios de ultrasonido para sus momentos especiales.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="group bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-medium text-gray-900">
                    {currentLanguage === 'en' ? review.name : review.nameEs}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {currentLanguage === 'en' ? review.role : review.roleEs}
                  </p>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-gray-600 italic">
                  "{currentLanguage === 'en' ? review.content : review.contentEs}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
