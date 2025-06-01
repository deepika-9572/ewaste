import { useRef, useEffect } from 'react';
import { recyclingPartnersData } from '../data/mockData';

const RecyclingPartners = () => {
  const partnersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = partnersRef.current.querySelectorAll('.partner-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.remove('opacity-0');
              card.classList.remove('translate-y-10');
            }, 150 * index);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (partnersRef.current) {
      observer.observe(partnersRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Working Together</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Recycling Partners</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Collaborating with trusted organizations to ensure safe and environmentally responsible e-waste recycling.
          </p>
        </div>
        
        <div 
          ref={partnersRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {recyclingPartnersData.map((partner) => (
            <div 
              key={partner.id} 
              className="partner-card bg-white rounded-xl shadow-lg p-6 transition-all duration-500 opacity-0 translate-y-10 hover:shadow-xl transform hover:-translate-y-2 hover:border-emerald-200 border border-transparent"
            >
              <div className="h-20 flex items-center justify-center mb-6">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{partner.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">
                {partner.description}
              </p>
              <a 
                href={partner.website} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors duration-300 text-sm font-medium"
              >
                <span>Visit Website</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecyclingPartners;
