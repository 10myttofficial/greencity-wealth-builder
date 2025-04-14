
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  DollarSign, 
  Shield, 
  LineChart, 
  PiggyBank, 
  ChevronRight 
} from 'lucide-react';

// Product data
const allProducts = [
  {
    id: 'mutual-funds',
    name: 'Mutual Funds',
    description: 'Diversified investment portfolios managed by experts.',
    cta: 'Start with as low as ₦10,000.',
    icon: <DollarSign size={28} className="text-greencity-500" />,
    color: 'bg-greencity-50 border-greencity-100',
    route: '/products/mutual-funds',
    buttonText: 'Invest Now',
    risk: 'medium',
    duration: 'medium'
  },
  {
    id: 'treasury-linked-notes',
    name: 'Treasury Linked Notes',
    description: 'Government-backed fixed return notes for capital preservation.',
    cta: 'Secure your funds today.',
    icon: <Shield size={28} className="text-gold-500" />,
    color: 'bg-gold-50 border-gold-100',
    route: '/products/treasury-linked-notes',
    buttonText: 'Learn More',
    risk: 'low',
    duration: 'short'
  },
  {
    id: 'portfolio-management',
    name: 'Portfolio Management',
    description: 'Custom strategies aligned with your financial goals.',
    cta: 'Let\'s create a plan for you.',
    icon: <LineChart size={28} className="text-greencity-500" />,
    color: 'bg-greencity-50 border-greencity-100',
    route: '/products/portfolio-management',
    buttonText: 'Get Started',
    risk: 'high',
    duration: 'long'
  },
  {
    id: 'fixed-income',
    name: 'Fixed Income Services',
    description: 'Predictable income through bonds and treasury bills.',
    cta: 'Earn steady returns with confidence.',
    icon: <PiggyBank size={28} className="text-gold-500" />,
    color: 'bg-gold-50 border-gold-100',
    route: '/products/fixed-income',
    buttonText: 'Explore Options',
    risk: 'low',
    duration: 'medium'
  }
];

interface ProductsListProps {
  searchQuery: string;
  riskFilter: string;
  durationFilter: string;
}

const ProductsList: React.FC<ProductsListProps> = ({ 
  searchQuery, 
  riskFilter, 
  durationFilter 
}) => {
  // Filter products based on search and filters
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRisk = riskFilter === 'all' || product.risk === riskFilter;
    const matchesDuration = durationFilter === 'all' || product.duration === durationFilter;
    
    return matchesSearch && matchesRisk && matchesDuration;
  });

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-600">No products match your criteria</h3>
          <p className="mt-2 text-gray-500">Try adjusting your filters or search term</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className={`border ${product.color} hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 p-3 rounded-full inline-block bg-white/80 border">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                <p className="text-sm text-greencity-600 italic mb-4">{product.cta}</p>
                
                <div className="flex justify-between items-center">
                  <Button asChild variant="ghost" className="text-greencity-500 hover:text-greencity-700 hover:bg-greencity-50 p-0">
                    <Link to={product.route} className="flex items-center">
                      Learn more <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                  
                  <Button asChild className="green-gradient hover:opacity-90">
                    <Link to={product.route}>
                      {product.buttonText}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
