
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-20 bg-greencity-500 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-white/10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of satisfied investors and start growing your wealth with GreenCity Financials today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-greencity-500 hover:bg-white/90 text-base h-12 px-6">
              <Link to="/signup">Create Account</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 text-base h-12 px-6">
              <Link to="/contact">Talk to an Advisor</Link>
            </Button>
          </div>
          
          <div className="mt-10 text-sm text-white/80">
            <p>Have questions? Call us at <span className="font-semibold">+234 800 123 4567</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
