import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/mockData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
        : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-emerald-600 transition-transform duration-300 hover:scale-105"
        >
          <span className="text-2xl">♻️</span>
          <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : (isHomePage ? 'text-white' : 'text-gray-800')}`}>EcoElectronic</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.id} className="relative">
              <Link
                to={link.path}
                className={`font-medium transition-all duration-300 hover:text-emerald-500 ${isScrolled 
                  ? 'text-gray-700 hover:text-emerald-600' 
                  : (isHomePage ? 'text-white hover:text-emerald-300' : 'text-gray-700 hover:text-emerald-600')}`}
              >
                {link.text}
              </Link>
              {location.pathname === link.path && (
                <div className="absolute bottom-[-8px] left-0 w-full h-1 bg-emerald-500 rounded-full"></div>
              )}
            </div>
          ))}
          <Link 
            to="/contact" 
            className="bg-emerald-600 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg transform hover:-translate-y-1"
          >
            Take Action
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none transition-transform duration-300 hover:scale-110"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : (isHomePage ? 'text-white' : 'text-gray-800')}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : (isHomePage ? 'text-white' : 'text-gray-800')}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${mobileMenuOpen 
          ? 'max-h-screen opacity-100 py-4' 
          : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <div key={link.id} className="relative">
              <Link
                to={link.path}
                className="text-gray-700 font-medium transition-colors duration-300 hover:text-emerald-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </Link>
              {location.pathname === link.path && (
                <div className="h-1 bg-emerald-500 rounded-full mt-1 w-12 mx-auto"></div>
              )}
            </div>
          ))}
          <Link 
            to="/contact" 
            className="bg-emerald-600 text-white px-5 py-2 rounded-full font-medium text-center transition-all duration-300 hover:bg-emerald-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Take Action
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
