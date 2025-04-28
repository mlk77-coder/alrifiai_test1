import React from 'react';
import { Send } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-cta-pattern bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 backdrop-blur-sm text-white/90 rounded-full text-sm font-medium mb-6">
              <span>Get Started</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Ready to Harness the Power of AI?
            </h2>
            
            <p className="text-lg text-gray-200 mb-8 max-w-lg">
              Let's discuss how AI can transform your business. Our team of experts is ready to help you navigate the world of artificial intelligence and implement solutions that drive real results.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  01
                </div>
                <span className="text-white">Request a consultation</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  02
                </div>
                <span className="text-white">Get a custom strategy</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  03
                </div>
                <span className="text-white">Implement AI solutions</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact-form" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium text-center flex items-center justify-center"
              >
                Book a Free Strategy Call
              </a>
              
              <a 
                href="#services" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full transition-all duration-300 font-medium text-center"
              >
                Explore Our Solutions
              </a>
            </div>
          </div>
          
          <div id="contact-form" className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get a Free Consultation
            </h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="ABC Company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  How can we help?
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your project or needs..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium text-center flex items-center justify-center"
              >
                Submit Request
                <Send className="ml-2" size={18} />
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                We respect your privacy. Your information will not be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;