import React from 'react';
import { Brain, MessageSquare, Eye, LineChart, Zap } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group">
      <div className="bg-primary-100 p-4 rounded-lg inline-flex mb-6 group-hover:bg-primary-600 transition-colors duration-300">
        <div className="text-primary-600 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600">
        {description}
      </p>
      
      <a 
        href="#contact" 
        className="inline-flex items-center mt-6 text-primary-600 font-medium hover:text-primary-700 transition-colors"
      >
        Learn more
      </a>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Brain size={28} />,
      title: "AI Consulting",
      description: "Strategic guidance on AI implementation, including roadmap development, technology selection, and integration planning for your business."
    },
    {
      icon: <LineChart size={28} />,
      title: "Machine Learning Models",
      description: "Custom predictive analytics solutions that leverage your data to forecast trends, detect anomalies, and optimize business operations."
    },
    {
      icon: <MessageSquare size={28} />,
      title: "Natural Language Processing",
      description: "Intelligent chatbots, sentiment analysis, text classification, and language understanding tools to automate communication tasks."
    },
    {
      icon: <Eye size={28} />,
      title: "Computer Vision",
      description: "Advanced image and video recognition solutions that enable automated visual inspections, object detection, and surveillance systems."
    },
    {
      icon: <Zap size={28} />,
      title: "AI Automation",
      description: "End-to-end workflow automation powered by AI to reduce manual tasks, minimize errors, and significantly increase operational efficiency."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <span>Our Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive AI Solutions for Your Business
          </h2>
          
          <p className="text-lg text-gray-700">
            We offer a wide range of AI services tailored to meet your specific business needs and challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;