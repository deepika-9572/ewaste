import React, { useEffect, useRef } from 'react';
import Rules from '../components/Rules';
import { motion } from 'framer-motion';

const RulesPage = () => {
  const timelineRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.remove('opacity-0');
                item.classList.add('opacity-100');
                item.classList.remove('translate-y-10');
                item.classList.add('translate-y-0');
              }, index * 300); // Stagger the animations
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-emerald-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">E-Waste Management Rules</h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Understanding India's regulatory framework for electronic waste management.
          </p>
        </div>
      </div>

      {/* Timeline Section - Moved to top with enhanced styling and animations */}
      <section className="py-20 bg-gradient-to-b from-emerald-900 to-emerald-800 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-700 text-emerald-100 font-semibold text-sm uppercase tracking-wider mb-3">Historical Progress</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Timeline of E-Waste Regulations in India</h2>
            <p className="text-emerald-100 max-w-3xl mx-auto text-lg">The evolution of India's regulatory approach to managing electronic waste</p>
          </motion.div>
          
          <div 
            ref={timelineRef}
            className="relative max-w-5xl mx-auto py-8"
          >
            {/* Timeline line */}
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-400 z-0"
            ></motion.div>
            
            {/* Timeline items */}
            <div className="timeline-item opacity-0 translate-y-10 transition-all duration-700 ease-out mb-20 relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-emerald-700/40 backdrop-blur-sm p-7 rounded-xl shadow-lg border-l-4 border-emerald-400 hover:shadow-emerald-400/20 hover:shadow-2xl transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-emerald-300 mb-2">2011</h3>
                    <h4 className="text-xl font-semibold text-white mb-3">First E-Waste Rules</h4>
                    <p className="text-emerald-100">Introduction of the first comprehensive rules for e-waste management in India.</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 text-sm font-medium flex items-center text-emerald-300 hover:text-white transition-colors duration-300"
                      onClick={() => alert('2011: First comprehensive regulatory framework for e-waste in India, focusing on responsibilities of producers, collection centers, consumers, and dismantlers.')}
                    >
                      <span>Learn more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </motion.div>
                </div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                  className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-400 border-4 border-emerald-800 shadow-lg shadow-emerald-400/50 z-10">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }} 
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-emerald-400/50 -z-10"
                    ></motion.div>
                  </div>
                </motion.div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
            
            <div className="timeline-item opacity-0 translate-y-10 transition-all duration-700 ease-out mb-20 relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12"></div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                  className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-400 border-4 border-emerald-800 shadow-lg shadow-emerald-400/50 z-10">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }} 
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="absolute inset-0 rounded-full bg-emerald-400/50 -z-10"
                    ></motion.div>
                  </div>
                </motion.div>
                <div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-emerald-700/40 backdrop-blur-sm p-7 rounded-xl shadow-lg border-r-4 border-emerald-400 hover:shadow-emerald-400/20 hover:shadow-2xl transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-emerald-300 mb-2">2016</h3>
                    <h4 className="text-xl font-semibold text-white mb-3">E-Waste Management Rules 2016</h4>
                    <p className="text-emerald-100">Revised framework with expanded producer responsibility and collection targets.</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 text-sm font-medium flex items-center text-emerald-300 hover:text-white transition-colors duration-300"
                      onClick={() => alert('2016: Strengthened EPR framework with specific collection targets for manufacturers. Introduced deposit refund scheme and phase-wise collection targets for e-waste.')}
                    >
                      <span>Learn more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
            
            <div className="timeline-item opacity-0 translate-y-10 transition-all duration-700 ease-out mb-20 relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-emerald-700/40 backdrop-blur-sm p-7 rounded-xl shadow-lg border-l-4 border-emerald-400 hover:shadow-emerald-400/20 hover:shadow-2xl transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-emerald-300 mb-2">2018</h3>
                    <h4 className="text-xl font-semibold text-white mb-3">Amendment to 2016 Rules</h4>
                    <p className="text-emerald-100">Revised collection targets and modifications to reduce compliance burden.</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 text-sm font-medium flex items-center text-emerald-300 hover:text-white transition-colors duration-300"
                      onClick={() => alert('2018: Amended the 2016 rules to revise collection targets progressively until 2023. Provided exemptions for microenterprises and modified certain compliance requirements.')}
                    >
                      <span>Learn more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </motion.div>
                </div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
                  className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-400 border-4 border-emerald-800 shadow-lg shadow-emerald-400/50 z-10">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }} 
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="absolute inset-0 rounded-full bg-emerald-400/50 -z-10"
                    ></motion.div>
                  </div>
                </motion.div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
            
            <div className="timeline-item opacity-0 translate-y-10 transition-all duration-700 ease-out mb-8 relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12"></div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.5, type: "spring" }}
                  className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-400 border-4 border-emerald-800 shadow-lg shadow-emerald-400/50 z-10">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }} 
                      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                      className="absolute inset-0 rounded-full bg-emerald-400/50 -z-10"
                    ></motion.div>
                  </div>
                </motion.div>
                <div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-emerald-700/40 backdrop-blur-sm p-7 rounded-xl shadow-lg border-r-4 border-emerald-400 hover:shadow-emerald-400/20 hover:shadow-2xl transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-emerald-300 mb-2">2022</h3>
                    <h4 className="text-xl font-semibold text-white mb-3">Draft E-Waste Management Rules 2022</h4>
                    <p className="text-emerald-100">Proposed new framework focusing on circular economy principles and enhanced EPR mechanisms.</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 text-sm font-medium flex items-center text-emerald-300 hover:text-white transition-colors duration-300"
                      onClick={() => alert('2022: Proposed draft rules focused on circular economy principles and strengthened EPR. Aimed to integrate informal sector workers into the formal recycling system.')}
                    >
                      <span>Learn more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Legend */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="max-w-3xl mx-auto mt-10 px-6 py-5 bg-emerald-800/50 backdrop-blur-sm rounded-xl text-center"
          >
            <p className="text-emerald-100 mb-4">Click on any 'Learn more' button for additional details about each regulation</p>
            <div className="inline-flex items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-emerald-700 rounded-full text-sm font-medium text-white cursor-pointer hover:bg-emerald-600 transition-colors duration-300"
                onClick={() => window.open('https://cpcb.nic.in/displaypdf.php?id=RS1XYXN0ZS9FLVdhc3RlTV9SdWxlc18yMDE2LnBkZg==', '_blank')}
              >
                View Official Documentation
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Rules />
      
      <section className="py-20 bg-gradient-to-b from-emerald-800 to-emerald-700 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-600 text-emerald-100 font-semibold text-sm uppercase tracking-wider mb-3">Key Aspects</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Regulatory Framework Details</h2>
            <p className="text-emerald-100 max-w-3xl mx-auto text-lg">Important amendments and implementation challenges of E-Waste Management Rules</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="relative bg-emerald-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-emerald-400/20 hover:shadow-2xl transition-all duration-500 border border-emerald-500/30">
                <div className="flex items-center mb-8">
                  <div className="bg-emerald-600 p-3 rounded-full mr-4 shadow-lg shadow-emerald-600/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Amendments and Updates</h2>
                </div>
                
                <ul className="space-y-6 text-emerald-50">
                  <motion.li 
                    whileHover={{ x: 5, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-start group cursor-pointer"
                    onClick={() => alert('2018 Amendments strengthened the EPR framework for manufacturers and producers, making them more accountable for the e-waste generated by their products.')}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mt-1 mr-4 group-hover:bg-emerald-500 transition-colors duration-300">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-emerald-200 group-hover:text-white transition-colors duration-300">Strengthened EPR Framework</h3>
                      <p className="mt-1">The E-Waste Management Rules 2016 were amended in 2018 to strengthen the extended producer responsibility framework.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    whileHover={{ x: 5, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-start group cursor-pointer"
                    onClick={() => alert('Progressive collection targets were introduced to gradually increase the responsibility of producers in collecting e-waste, reaching 70% by 2023.')}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mt-1 mr-4 group-hover:bg-emerald-500 transition-colors duration-300">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-emerald-200 group-hover:text-white transition-colors duration-300">Progressive Targets</h3>
                      <p className="mt-1">Revision of collection targets progressively until 2023, with annual increases to encourage better e-waste management.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    whileHover={{ x: 5, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-start group cursor-pointer"
                    onClick={() => alert('The list of electronic items covered under the rules was expanded to include more categories such as washing machines, refrigerators, and air conditioners.')}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mt-1 mr-4 group-hover:bg-emerald-500 transition-colors duration-300">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-emerald-200 group-hover:text-white transition-colors duration-300">Expanded Coverage</h3>
                      <p className="mt-1">Expanded list of electronic items covered under the rules to include more categories of e-waste.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    whileHover={{ x: 5, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-start group cursor-pointer"
                    onClick={() => alert('Microenterprises were given exemptions from certain compliance requirements to reduce their regulatory burden while still ensuring environmental protection.')}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mt-1 mr-4 group-hover:bg-emerald-500 transition-colors duration-300">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-emerald-200 group-hover:text-white transition-colors duration-300">Microenterprise Exemptions</h3>
                      <p className="mt-1">Exemptions for microenterprises to reduce compliance burden while maintaining environmental standards.</p>
                    </div>
                  </motion.li>
                </ul>
                
                <div className="mt-8 text-center">
                  <motion.a
                    whileHover={{ scale: 1.05, backgroundColor: '#047857' }}
                    whileTap={{ scale: 0.95 }}
                    href="https://cpcb.nic.in/e-waste-rules/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-emerald-600 rounded-full text-white font-medium shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all duration-300"
                  >
                    View Full Amendment Details
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="relative bg-emerald-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-orange-400/20 hover:shadow-2xl transition-all duration-500 border border-orange-500/30">
                <div className="flex items-center mb-8">
                  <div className="bg-orange-500 p-3 rounded-full mr-4 shadow-lg shadow-orange-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Implementation Challenges</h2>
                </div>
                
                <ul className="space-y-6 text-emerald-50">
                  <motion.li 
                    whileHover={{ x: 5, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-start group cursor-pointer"
                    onClick={() => alert('India faces a significant shortage of authorized e-waste collection, dismantling, and recycling facilities, especially in smaller cities and rural areas.')}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mt-1 mr-4 group-hover:bg-orange-400 transition-colors duration-300">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-amber-200 group-hover:text-white transition-colors duration-300">Infrastructure Limitations</h3>
                      <p className="mt-1">Limited infrastructure for collection, dismantling, and recycling of e-waste across the country.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    whileHover={{ x: 5, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-start group cursor-pointer"
                    onClick={() => alert('Most consumers are unaware of the proper disposal methods for e-waste and the environmental hazards of improper disposal, leading to e-waste ending up in general waste streams.')}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mt-1 mr-4 group-hover:bg-orange-400 transition-colors duration-300">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-amber-200 group-hover:text-white transition-colors duration-300">Awareness Gap</h3>
                      <p className="mt-1">Lack of consumer awareness about proper e-waste disposal methods and available facilities.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    whileHover={{ x: 5, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-start group cursor-pointer"
                    onClick={() => alert('Nearly 95% of e-waste in India is processed by the informal sector using hazardous methods, exposing workers to toxic substances and causing environmental pollution.')}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mt-1 mr-4 group-hover:bg-orange-400 transition-colors duration-300">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-amber-200 group-hover:text-white transition-colors duration-300">Informal Sector Dominance</h3>
                      <p className="mt-1">Dominance of the informal sector in e-waste collection and recycling, often using unsafe methods.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    whileHover={{ x: 5, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-start group cursor-pointer"
                    onClick={() => alert('Regulatory agencies often lack resources, technical capacity, and systems to effectively monitor compliance with e-waste management rules across the country.')}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mt-1 mr-4 group-hover:bg-orange-400 transition-colors duration-300">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-amber-200 group-hover:text-white transition-colors duration-300">Regulatory Capacity</h3>
                      <p className="mt-1">Need for strengthening monitoring mechanisms and building capacity of regulatory agencies.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    whileHover={{ x: 5, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-start group cursor-pointer"
                    onClick={() => alert('Many producers struggle to meet the collection targets due to dispersed e-waste generation, lack of consumer participation, and competition from informal collectors.')}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mt-1 mr-4 group-hover:bg-orange-400 transition-colors duration-300">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-amber-200 group-hover:text-white transition-colors duration-300">Target Achievement</h3>
                      <p className="mt-1">Challenges in achieving the collection targets set by the regulations due to various implementation gaps.</p>
                    </div>
                  </motion.li>
                </ul>
                
                <div className="mt-8 text-center">
                  <motion.a
                    whileHover={{ scale: 1.05, backgroundColor: '#d97706' }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.meity.gov.in/e-waste-management" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-orange-500 rounded-full text-white font-medium shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
                  >
                    View Implementation Status
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RulesPage;
