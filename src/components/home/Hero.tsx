
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-20 md:py-28 overflow-hidden">
      {/* Abstract shapes in the background */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-greencity-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <span className="inline-block py-1 px-3 bg-greencity-50 text-greencity-600 rounded-full text-sm font-medium">
              Sustainable Wealth Creation
            </span>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Build Your </span>
              <span className="text-greencity-500">Financial Future</span>
              <span className="text-gray-900"> Today</span>
            </h1>
            
            <p className="text-gray-600 text-lg max-w-lg mx-auto md:mx-0">
              Empowering individuals and institutions in Nigeria and beyond with innovative, secure, and tailored financial solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild className="green-gradient hover:opacity-90 text-base h-12 px-6">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-greencity-500 text-greencity-500 hover:bg-greencity-50 text-base h-12 px-6">
                <Link to="/products" className="flex items-center">
                  Explore Products <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-greencity-500">₦50B+</p>
                <p className="text-sm text-gray-600">Assets Managed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-greencity-500">20K+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-greencity-500">15%</p>
                <p className="text-sm text-gray-600">Avg Annual ROI</p>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
              <img 
                src="https://github.com/10myttofficial/greencity-wealth-builder/public/micheile-henderson-lZ_4nPFKcV8-unsplash.jpg" 
                alt="Financial planning" 
                className="rounded-2xl w-full h-[500px] object-cover"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-greencity-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Investment Growth</p>
                    <p className="text-lg font-bold text-green-600">+24.8% YTD</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-gold-500 rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-white text-gold-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Low Risk</p>
                    <p className="text-lg font-bold text-white">AAA Rated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
