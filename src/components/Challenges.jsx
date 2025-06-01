import { useState, useEffect, useRef } from 'react';
import { challengesData } from '../data/mockData';

const Challenges = () => {
  const [activeTab, setActiveTab] = useState('India');
  const challengesRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          challengesRef.current.classList.add('animate-fade-in');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (challengesRef.current) {
      observer.observe(challengesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getActiveRegion = () => {
    return challengesData.find(region => region.region === activeTab);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div 
        ref={challengesRef}
        className="container mx-auto px-4 opacity-100 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Understanding the Difficulties</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">E-Waste Management Challenges</h2>
          <p className="text-gray-300">
            Exploring the unique obstacles faced in managing electronic waste in India and around the world.
          </p>
        </div>
        
        {/* Tab navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-800 rounded-full p-1">
            {challengesData.map(region => (
              <button
                key={region.id}
                onClick={() => setActiveTab(region.region)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === region.region 
                  ? 'bg-emerald-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'}`}
              >
                {region.region}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab content with animation */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-10 transition-all duration-300 transform hover:shadow-emerald-500/10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 flex justify-center items-center">
              {activeTab === 'India' ? (
                <div className="relative h-64 w-64 lg:h-80 lg:w-80 rounded-full overflow-hidden border-8 border-gray-700 animate-pulse-slow">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/50 to-emerald-900/80"></div>
                  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full p-6 text-emerald-100/80">
                    <path fill="currentColor" d="M128.07,36c-2.06,0-4,.06-5.89.17A92.15,92.15,0,0,0,44,128c0,3.28.18,6.51.5,9.69C51.32,180,85.87,212.23,128.07,220c42.2-7.77,76.75-40,83.57-82.33.32-3.18.5-6.41.5-9.69a92.15,92.15,0,0,0-78.18-91.81C132.06,36.06,130.13,36,128.07,36Zm46.46,75.86L130.67,155.7a4,4,0,0,1-5.66,0l-15.4-15.4a4,4,0,0,1,5.66-5.66L128,147.38l40.19-40.18a4,4,0,0,1,5.66,0A4,4,0,0,1,174.53,111.86Z"/>
                  </svg>
                </div>
              ) : (
                <div className="relative h-64 w-64 lg:h-80 lg:w-80 rounded-full overflow-hidden border-8 border-gray-700 animate-pulse-slow">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-blue-900/80"></div>
                  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full p-6 text-blue-100/80">
                    <path fill="currentColor" d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,161.37V88a8,8,0,0,1,16,0v73.37l18.34-18.35a8,8,0,0,1,11.32,11.32Z"/>
                  </svg>
                </div>
              )}
            </div>
            
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">
                Challenges in {getActiveRegion().region}
              </h3>
              
              <ul className="space-y-4">
                {getActiveRegion().challenges.map((challenge, index) => (
                  <li 
                    key={index} 
                    className="flex items-start transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-600 flex items-center justify-center mt-0.5 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    <span className="text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <a 
                  href="#" 
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                >
                  <span>Learn more about solutions</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
