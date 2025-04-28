import React from 'react';
import { BrainCircuit, MoveRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <span>About Alrifiai AI</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              We Leverage AI to Drive Business <span className="text-primary-600">Innovation</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              We are a leading AI agency specializing in custom AI solutions for businesses. Our expertise includes NLP, computer vision, predictive analytics, and AI-powered automation.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <BrainCircuit className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Expert Team</h3>
                  <p className="text-gray-600">AI researchers and engineers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <BrainCircuit className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Innovative Solutions</h3>
                  <p className="text-gray-600">Cutting-edge AI technology</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#services" 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group"
            >
              Discover our services 
              <MoveRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </div>
          
          <div className="relative">
            <div className="h-64 sm:h-80 md:h-96 bg-gradient-to-br from-primary-600 to-accent-700 rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181292/pexels-photo-1181292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team working on AI solutions" 
                className="w-full h-full object-cover mix-blend-overlay opacity-50"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <BrainCircuit className="text-primary-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">Since 2020</h3>
              </div>
              <p className="text-gray-600">
                Helping businesses transform with AI solutions for over 3 years
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;