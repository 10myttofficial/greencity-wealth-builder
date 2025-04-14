
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, DollarSign, Shield, LineChart, PiggyBank } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'mutual-funds',
    name: 'Mutual Funds',
    description: 'Professionally managed investment pools that aggregate capital from multiple investors to purchase diversified portfolios of stocks, bonds, or other securities.',
    cta: 'Start with as low as ₦10,000 and let experts grow your wealth.',
    icon: <DollarSign size={24} className="text-greencity-500" />,
    color: 'bg-greencity-50 border-greencity-100',
    route: '/products/mutual-funds'
  },
  {
    id: 'treasury-linked-notes',
    name: 'Treasury Linked Notes',
    description: 'Short-to-medium-term debt instruments backed by government securities, offering competitive fixed returns.',
    cta: 'Secure your funds with government-backed returns.',
    icon: <Shield size={24} className="text-gold-500" />,
    color: 'bg-gold-50 border-gold-100',
    route: '/products/treasury-linked-notes'
  },
  {
    id: 'portfolio-management',
    name: 'Portfolio Management',
    description: 'Customized investment strategies tailored to individual risk appetites and financial goals. Includes active monitoring and rebalancing by expert fund managers.',
    cta: 'Let us build a portfolio that aligns with your aspirations.',
    icon: <LineChart size={24} className="text-greencity-500" />,
    color: 'bg-greencity-50 border-greencity-100',
    route: '/products/portfolio-management'
  },
  {
    id: 'fixed-income',
    name: 'Fixed Income Services',
    description: 'Investment in bonds, treasury bills, and other debt instruments providing predictable income streams. Targets retirees and low-risk investors.',
    cta: 'Earn steady returns with minimal volatility.',
    icon: <PiggyBank size={24} className="text-gold-500" />,
    color: 'bg-gold-50 border-gold-100',
    route: '/products/fixed-income'
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Financial Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of innovative financial solutions designed to help you achieve your financial goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className={`border ${product.color} hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                <p className="text-sm text-greencity-600 italic mb-4">{product.cta}</p>
                <Button asChild variant="ghost" className="text-greencity-500 hover:text-greencity-700 hover:bg-greencity-50 p-0 flex justify-start">
                  <Link to={product.route} className="flex items-center">
                    Learn more <ChevronRight size={16} className="ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild className="green-gradient hover:opacity-90">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
