import { useState, useEffect, useRef } from 'react';
import { statsData } from '../data/mockData';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title } from 'chart.js';
import { Pie, Doughnut, Bar, Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title
);

const Stats = () => {
  const statsRef = useRef(null);
  const [activeChart, setActiveChart] = useState('pie');
  const [hoveredStat, setHoveredStat] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          statsRef.current.classList.add('animate-fade-in');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'globe':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'recycle':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        );
      case 'map':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        );
      case 'users':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  // Prepare chart data
  const globalRecyclingData = {
    labels: ['Recycled', 'Non-Recycled'],
    datasets: [
      {
        data: [17.4, 82.6],
        backgroundColor: ['#10b981', '#d1d5db'],
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 2,
      },
    ],
  };

  const indiaWasteManagementData = {
    labels: ['Informal Sector', 'Formal Sector'],
    datasets: [
      {
        data: [95, 5],
        backgroundColor: ['#f59e0b', '#10b981'],
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 12,
          },
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.raw + '%';
          }
        }
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeOutBounce'
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
  };
  
  // Bar chart data for e-waste by region
  const regionData = {
    labels: ['Asia', 'Europe', 'Americas', 'Africa', 'Oceania'],
    datasets: [
      {
        label: 'E-Waste Generated (Million Tonnes)',
        data: [24.9, 12.0, 13.1, 2.9, 0.7],
        backgroundColor: [
          'rgba(16, 185, 129, 0.7)',
          'rgba(59, 130, 246, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(239, 68, 68, 0.7)',
          'rgba(139, 92, 246, 0.7)',
        ],
        borderColor: [
          'rgb(16, 185, 129)',
          'rgb(59, 130, 246)',
          'rgb(245, 158, 11)',
          'rgb(239, 68, 68)',
          'rgb(139, 92, 246)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  // Line chart data for e-waste growth over time
  const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
  const growthData = {
    labels: years,
    datasets: [
      {
        label: 'Global E-Waste (Million Tonnes)',
        data: [44.4, 46.1, 47.8, 49.8, 53.6, 57.4, 60.8, 62.0],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        tension: 0.3,
        fill: true,
      },
    ],
  };
  
  // Bar chart options
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'E-Waste Generation by Region (2019)',
        font: {
          size: 16,
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ' + context.raw + ' million tonnes';
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Million Tonnes'
        }
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuad'
    },
  };
  
  // Line chart options
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Global E-Waste Growth Trend',
        font: {
          size: 16,
        }
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Million Tonnes'
        }
      }
    },
    animation: {
      duration: 2000,
    },
    elements: {
      point: {
        radius: 5,
        hoverRadius: 8,
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          E-Waste <span className="text-emerald-600">by the Numbers</span>
        </h2>
        
        <div 
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000"
        >
          {statsData.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-emerald-500 group"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  {getIcon(stat.icon)}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-center">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex rounded-md shadow-sm bg-white p-1 mb-8">
            <button
              onClick={() => setActiveChart('pie')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${activeChart === 'pie' ? 'bg-emerald-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Recycling Rates
            </button>
            <button
              onClick={() => setActiveChart('bar')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${activeChart === 'bar' ? 'bg-emerald-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              By Region
            </button>
            <button
              onClick={() => setActiveChart('line')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${activeChart === 'line' ? 'bg-emerald-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Growth Trend
            </button>
            <button
              onClick={() => setActiveChart('doughnut')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${activeChart === 'doughnut' ? 'bg-emerald-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              India Management
            </button>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-1 gap-10">
          <div className="bg-white rounded-xl shadow-xl p-6 transition-all duration-500 hover:shadow-2xl border-t-4 border-emerald-500">
            {activeChart === 'pie' && (
              <>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Global E-Waste Recycling Rate</h3>
                <div className="h-72 md:h-96 max-w-2xl mx-auto">
                  <Pie 
                    data={globalRecyclingData} 
                    options={chartOptions} 
                    onMouseEnter={() => setHoveredStat('recycling')}  
                    onMouseLeave={() => setHoveredStat(null)}
                  />
                </div>
                <div className="mt-8 p-4 bg-gray-50 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <p className="text-center text-gray-700">Only <span className="font-bold text-emerald-600">17.4%</span> of global e-waste is formally recycled, resulting in a loss of valuable materials worth approximately <span className="font-bold text-emerald-600">$57 billion</span> annually.</p>
                  <p className="mt-2 text-center text-gray-600">The remaining 82.6% is undocumented and likely handled improperly, leading to significant environmental contamination and health hazards.</p>
                </div>
              </>
            )}

            {activeChart === 'doughnut' && (
              <>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">E-Waste Management in India</h3>
                <div className="h-72 md:h-96 max-w-2xl mx-auto">
                  <Doughnut 
                    data={indiaWasteManagementData} 
                    options={chartOptions}
                    onMouseEnter={() => setHoveredStat('india')}  
                    onMouseLeave={() => setHoveredStat(null)}
                  />
                </div>
                <div className="mt-8 p-4 bg-gray-50 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <p className="text-center text-gray-700">In India, approximately <span className="font-bold text-amber-500">95%</span> of e-waste is managed by the informal sector, often using unsafe recycling methods that pose health and environmental risks.</p>
                  <p className="mt-2 text-center text-gray-600">Only 5% is processed through formal recycling facilities that follow environmental guidelines and worker safety protocols.</p>
                </div>
              </>
            )}

            {activeChart === 'bar' && (
              <>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">E-Waste Generation by Region</h3>
                <div className="h-72 md:h-96 max-w-4xl mx-auto">
                  <Bar 
                    data={regionData} 
                    options={barOptions}
                    onMouseEnter={() => setHoveredStat('region')}  
                    onMouseLeave={() => setHoveredStat(null)}
                  />
                </div>
                <div className="mt-8 p-4 bg-gray-50 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <p className="text-center text-gray-700"><span className="font-bold text-blue-600">Asia</span> generates the highest volume of e-waste at <span className="font-bold text-blue-600">24.9 million tonnes</span> annually, followed by the Americas and Europe.</p>
                  <p className="mt-2 text-center text-gray-600">The volume correlates with population size, but per capita e-waste generation is actually highest in Europe and the Americas.</p>
                </div>
              </>
            )}

            {activeChart === 'line' && (
              <>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Global E-Waste Growth Trend</h3>
                <div className="h-72 md:h-96 max-w-4xl mx-auto">
                  <Line 
                    data={growthData} 
                    options={lineOptions}
                    onMouseEnter={() => setHoveredStat('growth')}  
                    onMouseLeave={() => setHoveredStat(null)}
                  />
                </div>
                <div className="mt-8 p-4 bg-gray-50 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <p className="text-center text-gray-700">Global e-waste volume has increased from <span className="font-bold text-emerald-600">44.4 million tonnes</span> in 2015 to <span className="font-bold text-emerald-600">62 million tonnes</span> in 2022.</p>
                  <p className="mt-2 text-center text-gray-600">This represents a 40% increase in just 7 years, with projections suggesting continued growth to 74.7 million tonnes by 2030.</p>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl border-t-4 border-blue-500">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">E-Waste Key Metrics</h3>
          <div className="flex flex-col md:flex-row justify-around items-center gap-6">
            <div 
              className="text-center p-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-50 cursor-pointer"
              onMouseEnter={() => setHoveredStat('growth-rate')}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="inline-block p-6 bg-blue-100 rounded-full mb-3 transition-all duration-300 group-hover:bg-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-1 transition-all duration-300">
                {hoveredStat === 'growth-rate' ? 
                  <span className="text-blue-600 animate-pulse">3-5%</span> : 
                  '3-5%'
                }
              </div>
              <div className="text-gray-600">Annual global growth rate</div>
              {hoveredStat === 'growth-rate' && (
                <div className="mt-2 text-sm text-gray-500 animate-fadeIn">
                  The fastest growing waste stream in the world
                </div>
              )}
            </div>
            
            <div 
              className="text-center p-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-emerald-50 cursor-pointer"
              onMouseEnter={() => setHoveredStat('projection')}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="inline-block p-6 bg-emerald-100 rounded-full mb-3 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-1 transition-all duration-300">
                {hoveredStat === 'projection' ? 
                  <span className="text-emerald-600 animate-pulse">74.7M</span> : 
                  '74.7M'
                }
              </div>
              <div className="text-gray-600">Tonnes by 2030 (projected)</div>
              {hoveredStat === 'projection' && (
                <div className="mt-2 text-sm text-gray-500 animate-fadeIn">
                  Almost double the amount from 2015
                </div>
              )}
            </div>
            
            <div 
              className="text-center p-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-red-50 cursor-pointer"
              onMouseEnter={() => setHoveredStat('per-capita')}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="inline-block p-6 bg-red-100 rounded-full mb-3 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-1 transition-all duration-300">
                {hoveredStat === 'per-capita' ? 
                  <span className="text-red-600 animate-pulse">6.8kg</span> : 
                  '6.8kg'
                }
              </div>
              <div className="text-gray-600">Average e-waste per capita</div>
              {hoveredStat === 'per-capita' && (
                <div className="mt-2 text-sm text-gray-500 animate-fadeIn">
                  Highest in Europe at 16.2kg per person
                </div>
              )}
            </div>
            
            <div 
              className="text-center p-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-purple-50 cursor-pointer"
              onMouseEnter={() => setHoveredStat('material-value')}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="inline-block p-6 bg-purple-100 rounded-full mb-3 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-1 transition-all duration-300">
                {hoveredStat === 'material-value' ? 
                  <span className="text-purple-600 animate-pulse">$57B</span> : 
                  '$57B'
                }
              </div>
              <div className="text-gray-600">Value of materials lost annually</div>
              {hoveredStat === 'material-value' && (
                <div className="mt-2 text-sm text-gray-500 animate-fadeIn">
                  Including gold, silver, copper, and rare earth elements
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
