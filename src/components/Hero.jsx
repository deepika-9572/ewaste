import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroData } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const imageContainerRef = useRef(null);
  
  const [imageError, setImageError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isNextImageLoading, setIsNextImageLoading] = useState(false);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [nextImageLoaded, setNextImageLoaded] = useState(false);
  const isMounted = useRef(true);

  // Array of e-waste related images - using more reliable images
  const ewasteImages = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1740&q=80', // Beautiful e-waste recycling image from Unsplash
    'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', // Working image from before
    'https://images.pexels.com/photos/3584937/pexels-photo-3584937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Circuit board];
  ]
  // Preload images to prevent loading errors
  const [imagesLoaded, setImagesLoaded] = useState([false, false, false]);
  const [allImagesPreloaded, setAllImagesPreloaded] = useState(false);

  // Function to preload images
  const preloadImage = (index) => {
    const img = new Image();
    img.src = ewasteImages[index];
    img.onload = () => {
      const newLoaded = [...imagesLoaded];
      newLoaded[index] = true;
      setImagesLoaded(newLoaded);
      if (newLoaded.every(loaded => loaded)) {
        setAllImagesPreloaded(true);
      }
    };
    img.onerror = () => {
      console.warn(`Could not preload image ${index + 1}`);
      // Mark as loaded anyway to prevent blocking
      const newLoaded = [...imagesLoaded];
      newLoaded[index] = true;
      setImagesLoaded(newLoaded);
    };
  };

  useEffect(() => {
    // Staggered animation for text elements
    const elements = [
      { ref: titleRef, delay: 0 },
      { ref: subtitleRef, delay: 200 },
      { ref: descriptionRef, delay: 400 },
      { ref: ctaRef, delay: 600 },
      { ref: imageContainerRef, delay: 300 },
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current.classList.remove('opacity-0');
          ref.current.classList.remove('translate-y-10');
          ref.current.classList.add('opacity-100');
          ref.current.classList.add('translate-y-0');
        }, delay);
      }
    });
  }, []);
  
  // Image carousel effect - preload next image before transition
  useEffect(() => {
    isMounted.current = true;
    let timer;
    let nextIdx = (currentImageIndex + 1) % ewasteImages.length;
    setNextImageIndex(nextIdx);
    setIsNextImageLoading(true);
    setNextImageLoaded(false);

    // Preload the next image
    const img = new window.Image();
    img.src = ewasteImages[nextIdx];
    img.onload = () => {
      if (!isMounted.current) return;
      setNextImageLoaded(true);
      setIsNextImageLoading(false);
      // Wait for 2s before switching
      timer = setTimeout(() => {
        if (!isMounted.current) return;
        setCurrentImageIndex(nextIdx);
      }, 4000);
    };
    img.onerror = () => {
      if (!isMounted.current) return;
      setNextImageLoaded(true);
      setIsNextImageLoading(false);
      timer = setTimeout(() => {
        if (!isMounted.current) return;
        setCurrentImageIndex(nextIdx);
      }, 2000);
    };

    return () => {
      isMounted.current = false;
      clearTimeout(timer);
    };
  }, [currentImageIndex, ewasteImages.length]);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-800">
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full bg-emerald-500/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: Math.random() * 0.5 + 0.3, 
              scale: 1,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50, 
            }}
            transition={{ 
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              width: `${Math.random() * 120 + 50}px`,
              height: `${Math.random() * 120 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: `blur(${Math.random() * 2 + 1}px)`,
              background: `radial-gradient(circle, rgba(16,185,129,${Math.random() * 0.4 + 0.1}) 0%, rgba(6,95,70,0) 70%)`
            }}
          />
        ))}
      </div>
      
      {/* Animated wave */}
      <div className="absolute bottom-0 w-full h-24 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="rgba(16, 185, 129, 0.2)" fillOpacity="1" d="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,234.7C672,224,768,160,864,133.3C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            <animate attributeName="d" dur="20s" repeatCount="indefinite" values="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,234.7C672,224,768,160,864,133.3C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,197.3C96,203,192,213,288,186.7C384,160,480,96,576,96C672,96,768,160,864,165.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,234.7C672,224,768,160,864,133.3C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </path>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-24 flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div 
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight transition-all duration-700 ease-out opacity-0 translate-y-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="text-emerald-400 relative inline-block">
              {heroData.title.split(' ')[0]}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-400 rounded-full transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </span>{' '}
            <span className="bg-gradient-to-r from-white to-gray-200 text-transparent bg-clip-text">
              {heroData.title.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>
          
          <motion.h2 
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl text-emerald-100 mb-6 transition-all duration-700 ease-out opacity-0 translate-y-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {heroData.subtitle}
          </motion.h2>
          
          <motion.p 
            ref={descriptionRef}
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 transition-all duration-700 ease-out opacity-0 translate-y-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {heroData.description}
          </motion.p>
          
          <motion.div 
            ref={ctaRef}
            className="transition-all duration-700 ease-out opacity-0 translate-y-10 space-y-4 sm:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/issues" 
                  className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:from-emerald-600 hover:to-teal-700"
                >
                  {heroData.ctaText}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/resources" 
                  className="inline-block text-emerald-300 font-semibold py-3 px-6 rounded-full text-lg border border-emerald-500/30 transition-all duration-300 hover:bg-emerald-500/10 hover:border-emerald-500/70 backdrop-blur-sm"
                >
                  Explore Resources
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Interactive counter section */}
            <motion.div 
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg text-center w-32 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                <span className="text-emerald-400 text-2xl font-bold block">53.6M</span>
                <span className="text-gray-300 text-xs">Tonnes E-waste (2019)</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg text-center w-32 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                <span className="text-emerald-400 text-2xl font-bold block">17.4%</span>
                <span className="text-gray-300 text-xs">Properly Recycled</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg text-center w-32 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                <span className="text-emerald-400 text-2xl font-bold block">3.2M</span>
                <span className="text-gray-300 text-xs">Tonnes in India</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Hero image with more animation effects */}
        <motion.div 
          ref={imageContainerRef}
          className="w-full lg:w-1/2 relative transition-all duration-700 ease-out opacity-0 translate-y-10"
          initial={{ opacity: 0, y: 30, rotateY: 5 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-emerald-900/50 transition-all duration-500 group hover:shadow-emerald-500/30 hover:shadow-xl">
            {/* Image overlay with gradient and animations */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/30 to-transparent z-10"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            
            {/* E-Waste Image Carousel with Transitions */}
            <div className="relative w-full h-full overflow-hidden group">
              {/* Image carousel with animated transitions */}
              <AnimatePresence mode="wait">
                {/* Show current image until next is loaded */}
                <motion.img 
                  key={currentImageIndex}
                  src={ewasteImages[currentImageIndex]} 
                  alt={`E-Waste Management Image ${currentImageIndex + 1}`} 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  onError={(e) => {
                    console.error(`Image ${currentImageIndex + 1} failed to load`);
                    setImageError(true);
                    e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
                  }}
                />
                {/* Optionally, you can show a loading spinner or overlay while next image is loading */}
                {isNextImageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 z-20">
                    <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </AnimatePresence>
              
              {/* Hover light effect overlay - improved */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent transition-all duration-300"
                whileHover={{ 
                  background: "linear-gradient(to top, rgba(6, 78, 59, 0.7) 0%, rgba(16, 185, 129, 0.1) 70%, transparent 100%)",
                  boxShadow: "inset 0 0 30px rgba(16, 185, 129, 0.3)"
                }}
              />
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                {ewasteImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                    ${currentImageIndex === index ? 'bg-emerald-400 w-6' : 'bg-white/50 hover:bg-white/80'}
                    `}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Navigation arrows */}
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-emerald-900/50 hover:bg-emerald-700/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                onClick={() => setCurrentImageIndex(prev => (prev - 1 + ewasteImages.length) % ewasteImages.length)}
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-emerald-900/50 hover:bg-emerald-700/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                onClick={() => setCurrentImageIndex(prev => (prev + 1) % ewasteImages.length)}
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Interactive overlay with text and hover effects */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-emerald-900 to-transparent"
              initial={{ y: 20, opacity: 0.9 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <motion.p 
                className="text-emerald-100 font-medium mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Join the movement for sustainable e-waste management
              </motion.p>
              
              <motion.div 
                className="flex gap-2 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/40 to-transparent"></div>
                <span className="inline-block px-3 py-1 bg-emerald-600/70 backdrop-blur-sm text-xs text-white rounded-full">Recycle</span>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/40 to-transparent"></div>
                <span className="inline-block px-3 py-1 bg-emerald-600/70 backdrop-blur-sm text-xs text-white rounded-full">Sustainable</span>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/40 to-transparent"></div>
                <span className="inline-block px-3 py-1 bg-emerald-600/70 backdrop-blur-sm text-xs text-white rounded-full">Future</span>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Enhanced 3D decorative elements with animations */}
          <motion.div 
            className="absolute -top-8 -right-8 w-32 h-32 bg-emerald-400/30 rounded-full blur-xl z-0"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
              rotateZ: [0, 15, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.3))' }}
          ></motion.div>
          
          <motion.div 
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-400/20 rounded-full blur-xl z-0"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
              rotateZ: [0, -15, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
            style={{ filter: 'drop-shadow(0 0 10px rgba(20, 184, 166, 0.25))' }}
          ></motion.div>
          
          {/* 3D particle effects */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full bg-emerald-400/40"
                style={{
                  width: `${Math.random() * 10 + 4}px`,
                  height: `${Math.random() * 10 + 4}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  filter: 'blur(1px)'
                }}
                animate={{
                  y: [0, -50],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0.5]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>
          

        </motion.div>
      </div>

      {/* Interactive Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 cursor-pointer z-30"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.1, color: 'rgba(16, 185, 129, 0.9)' }}
        onClick={() => window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        })}
      >
        <motion.span 
          className="text-sm mb-2 font-medium backdrop-blur-sm px-3 py-1 rounded-full bg-white/10"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.span>
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Hero;
