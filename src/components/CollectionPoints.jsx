import { useState, useRef, useEffect } from 'react';
import { collectionPointsData } from '../data/mockData';

const CollectionPoints = () => {
  const [activePoint, setActivePoint] = useState(collectionPointsData[0]);
  const collectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          collectionRef.current.classList.add('animate-fade-in');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (collectionRef.current) {
      observer.observe(collectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div 
        ref={collectionRef}
        className="container mx-auto px-4 opacity-100 transition-opacity duration-1000"
      >
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Proper Disposal</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">E-Waste Collection Points</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Authorized centers where you can safely dispose of your electronic waste and ensure it is properly recycled.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Collection Points List */}
            <div className="lg:col-span-1 bg-emerald-50 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Collection Centers</h3>
              <div className="space-y-3">
                {collectionPointsData.map((point) => (
                  <div 
                    key={point.id} 
                    onClick={() => setActivePoint(point)}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${activePoint.id === point.id 
                      ? 'bg-emerald-600 text-white shadow-lg' 
                      : 'bg-white hover:bg-emerald-100'}`}
                  >
                    <h4 className="font-bold">{point.name}</h4>
                    <p className={`text-sm ${activePoint.id === point.id ? 'text-emerald-100' : 'text-gray-600'}`}>
                      {point.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Collection Point Details */}
            <div className="lg:col-span-2 p-8">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{activePoint.name}</h3>
                <div className="w-20 h-1 bg-emerald-500 mb-6"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">Contact Information</h4>
                    <div className="flex items-center text-gray-600 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{activePoint.contact}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{activePoint.hours}</span>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{activePoint.address}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">Accepted Items</h4>
                    <ul className="space-y-2">
                      {activePoint.acceptedItems.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                  >
                    <span>Get Directions</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionPoints;
