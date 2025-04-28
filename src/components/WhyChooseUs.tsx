import React from 'react';
import { CheckCircle2, Users, ClipboardCheck, Shield } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Users size={24} className="text-primary-600" />,
      title: "Industry-leading AI experts",
      description: "Our team consists of PhD-level AI researchers and experienced engineers with extensive industry experience."
    },
    {
      icon: <ClipboardCheck size={24} className="text-primary-600" />,
      title: "Custom solutions, no one-size-fits-all",
      description: "We develop tailored AI solutions specific to your business needs, not generic off-the-shelf products."
    },
    {
      icon: <Shield size={24} className="text-primary-600" />,
      title: "Data security & compliance",
      description: "We prioritize data protection with strict security protocols and compliance with regulations like GDPR and HIPAA."
    },
    {
      icon: <CheckCircle2 size={24} className="text-primary-600" />,
      title: "Fast deployment & scalable AI models",
      description: "Our solutions are designed for quick implementation and can scale as your business grows."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <span>Why Choose Alrifiai AI</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What Makes Us Your <span className="text-primary-600">Ideal AI Partner</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              We combine technical expertise with business acumen to deliver AI solutions that drive real results. Our approach ensures you get the maximum value from artificial intelligence technology.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden h-96 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 z-10"></div>
              <img 
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team of AI experts" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Client Satisfaction</h3>
                <span className="text-primary-600 font-bold text-xl">98%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary-600 h-2.5 rounded-full w-[98%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;