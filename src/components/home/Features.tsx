
import React from 'react';
import { Shield, Award, Users, Leaf } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-8 h-8 text-greencity-500" />,
    title: 'Security & Trust',
    description: 'Your investments are secure with our robust systems and regulatory compliance. We prioritize transparency in all our operations.'
  },
  {
    icon: <Award className="w-8 h-8 text-greencity-500" />,
    title: 'Expert Management',
    description: 'Our team of professional fund managers has decades of combined experience in navigating diverse market conditions.'
  },
  {
    icon: <Users className="w-8 h-8 text-greencity-500" />,
    title: 'Client-Centric Approach',
    description: 'We build lasting partnerships by prioritizing your financial goals and providing personalized service.'
  },
  {
    icon: <Leaf className="w-8 h-8 text-greencity-500" />,
    title: 'Sustainable Investing',
    description: 'We integrate environmental, social, and governance factors into our investment process for responsible returns.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GreenCity Financials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to helping you achieve financial success through innovative solutions and expert guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-greencity-50 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
