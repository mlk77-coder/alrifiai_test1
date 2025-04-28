import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, position, company, image }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <Quote className="text-primary-300 mb-4" size={36} />
      
      <p className="text-gray-700 mb-6 italic">
        "{content}"
      </p>
      
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-gray-600 text-sm">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Alrifiai AI transformed our customer service with their NLP solution. The chatbot handles 70% of inquiries automatically, and our customer satisfaction scores have increased significantly.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "TechFirst Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      content: "The predictive maintenance system developed by Alrifiai AI reduced our downtime by 45% and maintenance costs by 30%. Their team was professional and delivered on schedule.",
      author: "Michael Chen",
      position: "Operations Director",
      company: "GlobalManufacturing",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      content: "We've worked with several AI firms, but Alrifiai stands out for their customized approach. They didn't just offer a generic solution but developed an AI system tailored to our specific needs.",
      author: "Jessica Williams",
      position: "Innovation Lead",
      company: "HealthPlus",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <span>Testimonials</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          
          <p className="text-lg text-gray-700">
            Hear from organizations that have successfully implemented our AI solutions and experienced remarkable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;