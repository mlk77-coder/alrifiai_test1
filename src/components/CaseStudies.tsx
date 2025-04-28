import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyProps {
  image: string;
  category: string;
  title: string;
  description: string;
  result: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ image, category, title, description, result }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 group">
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <span className="px-3 py-1 bg-primary-600/90 text-white text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        <div className="bg-primary-50 p-4 rounded-lg mb-5">
          <p className="text-primary-800 font-medium">
            {result}
          </p>
        </div>
        
        <a 
          href="#contact" 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group/link"
        >
          Read case study
          <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={18} />
        </a>
      </div>
    </div>
  );
};

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Healthcare",
      title: "AI-Powered Diagnostic Tool for XYZ Hospital",
      description: "We developed an AI-based diagnostic system to assist radiologists in detecting early signs of diseases from medical images.",
      result: "Result: 87% increase in early detection rates with 40% reduction in diagnostic time"
    },
    {
      image: "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "E-commerce",
      title: "Predictive Inventory Management for ABC Retail",
      description: "We implemented a machine learning system to optimize inventory levels based on seasonal trends and customer behavior.",
      result: "Result: 32% reduction in inventory costs with 24% decrease in stockouts"
    },
    {
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Manufacturing",
      title: "Automated Quality Control for DEF Manufacturing",
      description: "We built a computer vision system to detect product defects in real-time on the production line, replacing manual inspection.",
      result: "Result: 95% defect detection accuracy with 60% faster quality checks"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <span>Case Studies</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Real Results for Real Businesses
          </h2>
          
          <p className="text-lg text-gray-700">
            Discover how our AI solutions have transformed operations and driven growth for our clients across different industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index}
              image={study.image}
              category={study.category}
              title={study.title}
              description={study.description}
              result={study.result}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;