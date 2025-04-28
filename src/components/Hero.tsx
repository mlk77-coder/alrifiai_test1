import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-primary-900/80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 mt-12">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 text-primary-300 text-sm font-medium mb-6 animate-pulse">
            Next-Generation AI Solutions
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Transform Your Business with Cutting-Edge <span className="text-primary-400">AI Solutions</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl">
            Alrifiai AI Agency delivers intelligent automation, machine learning, and AI-driven insights to boost efficiency and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium text-center flex items-center justify-center group"
            >
              Get a Free Consultation
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full transition-all duration-300 font-medium text-center"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
            <ChevronRight size={20} className="text-white transform rotate-90" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;