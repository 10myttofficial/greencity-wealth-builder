
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Amara Okonkwo',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'GreenCity Financials has transformed my approach to investing. Their mutual funds have consistently outperformed the market, and their team is always available to answer my questions.',
    rating: 5
  },
  {
    id: 2,
    name: 'Emmanuel Adeyemi',
    role: 'Retired Civil Servant',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'After retirement, I was worried about maintaining my income. GreenCity\'s fixed income services provide me with reliable monthly returns that help me maintain my lifestyle with peace of mind.',
    rating: 5
  },
  {
    id: 3,
    name: 'Chika Nwosu',
    role: 'Tech Entrepreneur',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'I appreciate GreenCity\'s focus on sustainable investing. Their portfolio management service has helped me align my investments with my values while still achieving impressive returns.',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't take our word for it. Hear from some of our satisfied clients about their experience with GreenCity Financials.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-100 overflow-hidden h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i + testimonial.rating} className="w-4 h-4 text-gray-300" />
                  ))}
                </div>
                
                <p className="text-gray-600 italic flex-grow">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
