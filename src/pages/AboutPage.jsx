import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

const AboutPage = () => {
  // Custom hook for checking if element is in view
  const useCustomInView = () => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true, threshold: 0.2 });
    
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
    
    return { ref, controls };
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const headerControls = useAnimation();
  
  useEffect(() => {
    headerControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    });
  }, []);

  const { ref: missionRef, controls: missionControls } = useCustomInView();
  const { ref: visionRef, controls: visionControls } = useCustomInView();
  const { ref: approachRef, controls: approachControls } = useCustomInView();
  const { ref: teamRef, controls: teamControls } = useCustomInView();

  return (
    <div className="pt-20 min-h-screen overflow-hidden">
      <motion.div 
        className="bg-gradient-to-r from-emerald-800 to-emerald-600 py-20 text-white relative"
        initial={{ opacity: 0, y: -20 }}
        animate={headerControls}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute w-64 h-64 rounded-full bg-emerald-500 opacity-20 -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 rounded-full bg-emerald-400 opacity-10 -bottom-40 -right-20"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-emerald-50 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Learning about our mission, vision, and commitment to e-waste management in India.
          </motion.p>
        </div>
      </motion.div>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={missionRef}
            initial="hidden"
            animate={missionControls}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative inline-block">
                Our Mission
                <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 rounded transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </h2>
              <motion.p 
                className="text-gray-600 mb-6 text-lg leading-relaxed"
                variants={fadeIn}
              >
                At EcoElectronic, our mission is to address the growing challenge of electronic waste through education, 
                awareness, and action. We aim to be a catalyst for sustainable e-waste management practices in India 
                and contribute to a circular economy where electronic resources are valued and preserved.
              </motion.p>
              <motion.p 
                className="text-gray-600 text-lg leading-relaxed"
                variants={fadeIn}
              >
                We believe that by providing accessible information, connecting consumers with proper disposal channels, 
                and promoting sustainable consumption habits, we can collectively reduce the environmental and health 
                impacts of e-waste while recovering valuable resources.
              </motion.p>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="rounded-xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img 
                src="/recycling.svg" 
                alt="3D illustration of recycling e-waste" 
                className="w-full h-auto transition-all duration-500 group-hover:brightness-110"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            ref={visionRef}
            initial="hidden"
            animate={visionControls}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 md:flex-row-reverse"
          >
            <motion.div className="md:order-2" variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative inline-block">
                Our Vision
                <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 rounded transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </h2>
              <motion.p 
                className="text-gray-600 mb-6 text-lg leading-relaxed"
                variants={fadeIn}
              >
                We envision a future where e-waste is no longer a burden on our environment but a valuable resource 
                stream in a truly circular economy. A world where every electronic device is designed for longevity, 
                repairability, and ultimately, complete recyclability.
              </motion.p>
              <motion.p 
                className="text-gray-600 text-lg leading-relaxed"
                variants={fadeIn}
              >
                Our vision includes an India where consumers are fully aware of the impact of their electronic 
                purchases and disposals, where government regulations are effectively implemented, and where formal 
                recycling infrastructure makes responsible e-waste management accessible to all.
              </motion.p>
            </motion.div>
            <motion.div 
              className="md:order-1 rounded-xl overflow-hidden shadow-2xl group"
              variants={fadeIn}
              whileHover={{ scale: 1.03, rotate: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Sustainable future vision" 
                className="w-full h-auto transition-all duration-500 group-hover:brightness-110"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            ref={approachRef}
            initial="hidden"
            animate={approachControls}
            variants={staggerContainer}
            className="max-w-4xl mx-auto mb-24"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center relative inline-block mx-auto"
            >
              <span className="relative inline-block">
                Our Approach
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                ></motion.div>
              </span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                variants={fadeIn}
                className="bg-gradient-to-b from-emerald-50 to-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center group"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Educate</h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide comprehensive, accessible information about e-waste impacts, regulations, and best practices to raise awareness among all stakeholders.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-gradient-to-b from-emerald-50 to-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100"
                whileHover={{ scale: 1.05 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center group"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Connect</h3>
                <p className="text-gray-600 leading-relaxed">
                  We bridge the gap between consumers and proper e-waste disposal channels by highlighting collection centers and authorized recyclers.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-gradient-to-b from-emerald-50 to-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100"
                whileHover={{ scale: 1.05 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center group"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Transform</h3>
                <p className="text-gray-600 leading-relaxed">
                  We advocate for systemic changes in how electronic products are designed, used, and recycled to create a truly circular economy.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            ref={teamRef}
            initial="hidden"
            animate={teamControls}
            variants={staggerContainer}
            className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-xl p-10 shadow-xl mb-16"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center"
            >
              <span className="relative inline-block">
                Meet The Creator
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                ></motion.div>
              </span>
            </motion.h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <motion.div 
                variants={fadeIn}
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src="/deepika.png" 
                    alt="Deepika Suman" 
                    className="w-full h-full object-cover object-center flex items-center justify-center transition-transform duration-500 group-hover:scale-100"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="max-w-xl text-center md:text-left"
              >
                <motion.h3 
                  className="text-3xl font-bold text-gray-800 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Deepika Suman
                </motion.h3>
                
                <motion.p 
                  className="text-emerald-600 text-xl font-semibold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  Through EcoElectronic, Deepika aims to bridge the information gap in e-waste management and inspire individuals and organizations to take responsible action. Her innovative approach combines education, connection, and advocacy to create meaningful change in how we handle electronic waste.
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <Link 
                    to="/contact" 
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors duration-300"
                    style={{ textDecoration: 'none' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Deepika
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
