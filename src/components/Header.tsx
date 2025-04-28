import React, { useState, useEffect } from 'react';
import { BrainCircuit, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <BrainCircuit size={32} className="text-primary-500" />
            <span className="text-xl font-bold text-white">Alrifiai AI</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white/80 hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="text-white/80 hover:text-white transition-colors">
              Services
            </a>
            <a href="#case-studies" className="text-white/80 hover:text-white transition-colors">
              Case Studies
            </a>
            <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full transition-colors font-medium"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md md:hidden py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#case-studies" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </a>
            <a 
              href="#testimonials" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full transition-colors font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;