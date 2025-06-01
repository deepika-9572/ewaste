import { useEffect, useRef } from 'react';
import { issuesData } from '../data/mockData';

const Issues = () => {
  const issuesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = issuesRef.current.querySelectorAll('.issue-card');
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

    if (issuesRef.current) {
      observer.observe(issuesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'leaf':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      case 'heart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      case 'gem':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      case 'chart-line':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const getBgColor = (color) => {
    switch (color) {
      case 'green':
        return 'bg-green-50 border-green-500';
      case 'red':
        return 'bg-red-50 border-red-500';
      case 'yellow':
        return 'bg-yellow-50 border-yellow-500';
      case 'blue':
        return 'bg-blue-50 border-blue-500';
      default:
        return 'bg-gray-50 border-gray-500';
    }
  };

  const getIconColor = (color) => {
    switch (color) {
      case 'green':
        return 'text-green-600 bg-green-100 group-hover:bg-green-600';
      case 'red':
        return 'text-red-600 bg-red-100 group-hover:bg-red-600';
      case 'yellow':
        return 'text-yellow-600 bg-yellow-100 group-hover:bg-yellow-600';
      case 'blue':
        return 'text-blue-600 bg-blue-100 group-hover:bg-blue-600';
      default:
        return 'text-gray-600 bg-gray-100 group-hover:bg-gray-600';
    }
  };

  const getTitleColor = (color) => {
    switch (color) {
      case 'green':
        return 'group-hover:text-green-700';
      case 'red':
        return 'group-hover:text-red-700';
      case 'yellow':
        return 'group-hover:text-yellow-700';
      case 'blue':
        return 'group-hover:text-blue-700';
      default:
        return 'group-hover:text-gray-700';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Key <span className="text-emerald-600">E-Waste Issues</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Electronic waste presents numerous environmental, health, and resource challenges that require 
            immediate attention and sustainable solutions.
          </p>
        </div>
        
        <div ref={issuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {issuesData.map((issue, index) => (
            <div 
              key={issue.id} 
              className={`issue-card ${getBgColor(issue.color)} border-t-4 rounded-xl shadow-lg p-6 transition-all duration-500 opacity-0 translate-y-10 hover:shadow-xl hover:-translate-y-2 group`}
            >
              <div className={`p-4 rounded-full ${getIconColor(issue.color)} w-min mb-6 group-hover:text-white transition-colors duration-300`}>
                {getIcon(issue.icon)}
              </div>
              <h3 className={`text-xl font-bold mb-3 text-gray-800 ${getTitleColor(issue.color)} transition-colors duration-300`}>
                {issue.title}
              </h3>
              <p className="text-gray-600">
                {issue.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Issues;
