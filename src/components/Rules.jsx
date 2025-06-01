import { useEffect, useRef } from 'react';
import { rulesData } from '../data/mockData';

const Rules = () => {
  const rulesRef = useRef(null);
  const rulesContentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          rulesRef.current.classList.add('animate-fade-in');
          setTimeout(() => {
            rulesContentRef.current.classList.remove('opacity-0');
            rulesContentRef.current.classList.remove('translate-y-10');
          }, 300);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (rulesRef.current) {
      observer.observe(rulesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-emerald-50">
      <div 
        ref={rulesRef} 
        className="container mx-auto px-4 opacity-100 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Framework for Action</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">{rulesData.title}</h2>
          <p className="text-gray-600">{rulesData.description}</p>
        </div>
        
        <div 
          ref={rulesContentRef}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-700 opacity-0 translate-y-10 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-100 rounded-full transform -translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rulesData.keyPoints.map((point, index) => (
                <div 
                  key={point.id} 
                  className="relative transition-all duration-300 hover:shadow-lg p-6 rounded-xl group hover:bg-emerald-50"
                >
                  <div className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full font-bold text-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    {index + 1}
                  </div>
                  <div className="ml-16">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-gray-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 text-center relative z-10">
            <a 
              href="https://cpcb.nic.in/rules-6/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <span>Read Full Rules Documentation</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
