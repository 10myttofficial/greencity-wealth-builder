
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lightbulb, Users, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-greencity-600 to-greencity-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About GreenCity Financials
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Secure. Smart. Sustainable Wealth.
            </p>
            <p className="mt-8 text-lg max-w-2xl mx-auto">
              Empowering Africa's financial future through innovation, integrity, and impact.
            </p>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-greencity-50 border-greencity-100 shadow-sm">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-4 text-greencity-700">Our Mission</h2>
                  <p className="text-lg">
                    "To empower individuals and institutions in Nigeria and beyond with innovative, secure, 
                    and tailored financial solutions that drive sustainable wealth creation."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gold-50 border-gold-100 shadow-sm">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-4 text-gold-700">Our Vision</h2>
                  <p className="text-lg">
                    "To be Africa's leading asset management firm, recognized for excellence in 
                    delivering superior returns and fostering financial inclusivity."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Core Values</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-greencity-100 text-greencity-600 mb-4">
                    <Shield size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Integrity</h3>
                  <p className="text-gray-600">
                    Transparent and ethical practices in all operations
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-gold-100 text-gold-600 mb-4">
                    <Lightbulb size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p className="text-gray-600">
                    Leveraging technology for cutting-edge financial solutions
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-greencity-100 text-greencity-600 mb-4">
                    <Users size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Client-Centricity</h3>
                  <p className="text-gray-600">
                    Prioritizing client goals and long-term partnerships
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-gold-100 text-gold-600 mb-4">
                    <RefreshCw size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                  <p className="text-gray-600">
                    Commitment to environmentally and socially responsible investing
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Founded with a vision to bridge the gap between traditional investment options and 
                  modern wealth creation strategies, GreenCity Financials brings together financial experts, 
                  cutting-edge technology, and a client-first approach.
                </p>
                <p>
                  Licensed and regulated in Nigeria, we offer a suite of secure, diversified, and 
                  accessible investment products tailored to meet your financial goals. Our team of 
                  experienced professionals is dedicated to helping you navigate the complex investment 
                  landscape with confidence.
                </p>
                <p>
                  At GreenCity, we believe that financial security should be accessible to everyone. 
                  That's why we've designed our products to be transparent, easy to understand, and 
                  suited to investors at all levels of experience and financial capability.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Milestones */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Achievements</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-greencity-600 mb-2">2020</p>
                <p className="text-gray-600">Established</p>
              </div>
              
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-greencity-600 mb-2">₦5B+</p>
                <p className="text-gray-600">Assets Managed</p>
              </div>
              
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-greencity-600 mb-2">10K+</p>
                <p className="text-gray-600">Clients Served</p>
              </div>
              
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-greencity-600 mb-2">98%</p>
                <p className="text-gray-600">Client Retention</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-greencity-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to grow your wealth with a trusted partner?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Button asChild size="lg" className="green-gradient">
                <Link to="/products">Explore Investment Options</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-greencity-500 text-greencity-700">
                <Link to="/signup">Create Account</Link>
              </Button>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default About;
