import React from 'react';
import Challenges from '../components/Challenges';

const ChallengesPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-emerald-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">E-Waste Management Challenges</h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Exploring the obstacles to effective e-waste management in India and around the world.
          </p>
        </div>
      </div>
      
      <Challenges />
      
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-600 text-emerald-100 font-semibold text-sm uppercase tracking-wider mb-3">Global Perspective</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">Comparative Analysis</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">Examining e-waste management approaches across different regions</p>
          </div>
          
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 h-40 w-40 bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-emerald-600 opacity-10 rounded-full blur-3xl"></div>

            <div className="relative overflow-x-auto rounded-2xl shadow-2xl">
              <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 p-1 rounded-2xl">
                <div className="bg-white rounded-xl overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-gradient-to-r from-emerald-800 to-emerald-600">
                        <th className="py-5 px-6 text-left text-white font-bold text-lg rounded-tl-xl">
                          <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <span>Parameter</span>
                          </div>
                        </th>
                        <th className="py-5 px-6 text-left text-white font-bold text-lg">
                          <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                            </svg>
                            <span>India</span>
                          </div>
                        </th>
                        <th className="py-5 px-6 text-left text-white font-bold text-lg">
                          <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Global North</span>
                          </div>
                        </th>
                        <th className="py-5 px-6 text-left text-white font-bold text-lg rounded-tr-xl">
                          <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Global South</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="group cursor-pointer transition-colors duration-300 hover:bg-emerald-50">
                        <td className="py-5 px-6 font-semibold">
                          <div className="flex items-center">
                            <div className="mr-3 flex-shrink-0 h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                              </svg>
                            </div>
                            <span className="text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">Collection Infrastructure</span>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Limited, largely informal</span>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Well-established, formal</span>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Varying levels, mostly informal</span>
                        </td>
                      </tr>
                      <tr className="group cursor-pointer transition-colors duration-300 hover:bg-emerald-50">
                        <td className="py-5 px-6 font-semibold">
                          <div className="flex items-center">
                            <div className="mr-3 flex-shrink-0 h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <span className="text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">Regulatory Framework</span>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Comprehensive but implementation challenges</span>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Robust with effective enforcement</span>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Often weak or non-existent</span>
                        </td>
                      </tr>
                      <tr className="group cursor-pointer transition-colors duration-300 hover:bg-emerald-50">
                        <td className="py-5 px-6 font-semibold">
                          <div className="flex items-center">
                            <div className="mr-3 flex-shrink-0 h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                            <span className="text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">Public Awareness</span>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Low to moderate</span>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Moderate to high</span>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Generally low</span>
                        </td>
                      </tr>
                      <tr className="group cursor-pointer transition-colors duration-300 hover:bg-emerald-50">
                        <td className="py-5 px-6 font-semibold">
                          <div className="flex items-center">
                            <div className="mr-3 flex-shrink-0 h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <span className="text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">Recycling Technology</span>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Limited advanced facilities</span>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Advanced technologies available</span>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Predominantly manual, low-tech</span>
                        </td>
                      </tr>
                      <tr className="group cursor-pointer transition-colors duration-300 hover:bg-emerald-50">
                        <td className="py-5 px-6 font-semibold">
                          <div className="flex items-center">
                            <div className="mr-3 flex-shrink-0 h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <span className="text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">Informal Sector</span>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Dominant ({'>'}90%)</span>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Limited presence</span>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Significant presence</span>
                        </td>
                      </tr>
                      <tr className="group cursor-pointer transition-colors duration-300 hover:bg-emerald-50">
                        <td className="py-5 px-6 font-semibold">
                          <div className="flex items-center">
                            <div className="mr-3 flex-shrink-0 h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                            </div>
                            <span className="text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">EPR Implementation</span>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Challenging with low compliance</span>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Relatively successful</span>
                        </td>
                        <td className="py-5 px-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Limited or early stages</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Success Stories</h3>
              <p className="text-gray-600 mb-4">
                Despite challenges, there are encouraging developments in e-waste management globally. Countries like Switzerland, Belgium, and South Korea have achieved high collection and recycling rates through effective EPR systems, public awareness campaigns, and advanced recycling infrastructure.
              </p>
              <p className="text-gray-600">
                In India, initiatives like the Clean E-India program and public-private partnerships have shown promise in formalizing e-waste management and increasing collection rates in urban areas.
              </p>
            </div>
            
            <div className="bg-emerald-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Path Forward</h3>
              <p className="text-gray-600 mb-4">
                Addressing e-waste challenges requires a multi-stakeholder approach. Key strategies include strengthening regulatory enforcement, integrating the informal sector into formal systems, enhancing consumer awareness, and promoting sustainable product design.
              </p>
              <p className="text-gray-600">
                International cooperation is essential to address transboundary movement of e-waste and to share best practices, technologies, and resources for sustainable e-waste management globally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChallengesPage;
