
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AnimatedHero from '../components/home/AnimatedHero';
import ProductShowcase from '../components/home/ProductShowcase';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import CtaSection from '../components/home/CtaSection';
import FloatingChatButton from '../components/chat/FloatingChatButton';
import StockTicker from '../components/ticker/StockTicker';
import IndexTrackerCard from '../components/home/IndexTrackerCard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <StockTicker />
      <main className="flex-grow">
        <AnimatedHero />
        <section className="container mx-auto px-4 py-8">
          <IndexTrackerCard />
        </section>
        <ProductShowcase />
        <Features />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
      <FloatingChatButton />
    </div>
  );
};

export default Index;
