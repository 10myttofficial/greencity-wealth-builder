
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import ProductShowcase from '../components/home/ProductShowcase';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import CtaSection from '../components/home/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductShowcase />
        <Features />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
