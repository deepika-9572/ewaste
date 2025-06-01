import { useRef, useEffect } from 'react';
import { awarenessData } from '../data/mockData';

const AwarenessCampaigns = () => {
  const campaignsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = campaignsRef.current.querySelectorAll('.campaign-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.remove('opacity-0');
              card.classList.add('opacity-100');
              card.classList.remove('translate-y-10');
            }, 200 * index);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (campaignsRef.current) {
      observer.observe(campaignsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Creating Change</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">E-Waste Awareness Campaigns</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Educational initiatives and awareness programs aimed at promoting responsible e-waste management practices across India.
          </p>
        </div>
        
        <div 
          ref={campaignsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {awarenessData.map((campaign, idx) => {
  // Assign URLs based on index or campaign.id
  let link = "#";
  if (idx === 0) link = "https://www.cleaneindia.org/";
  else if (idx === 1) link = "https://greene.gov.in/";
  else if (idx === 2) link = "https://www.ewaste1.com/computers-classrooms-schools-can-help-eliminate-e-waste/";
  return (
            <div 
              key={campaign.id} 
              className="campaign-card rounded-xl overflow-hidden shadow-lg transition-all duration-700 opacity-0 translate-y-10 group"
            >
              <div className="relative overflow-hidden h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src={campaign.imageUrl} 
                  alt={campaign.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-2">{campaign.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{campaign.description}</p>
                <a 
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300"
                >
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
           )
          })}
        </div>
      </div>
    </section>
  );
};

export default AwarenessCampaigns;
