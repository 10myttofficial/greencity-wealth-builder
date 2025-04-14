
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, ArrowUpRight, Search, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickActions = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Quick Actions</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button 
          variant="outline" 
          className="flex-col h-24 border-dashed border-gray-300 hover:border-greencity-500 hover:bg-greencity-50"
          asChild
        >
          <Link to="/invest">
            <PlusCircle className="h-6 w-6 mb-2 text-greencity-500" />
            <span>New Investment</span>
          </Link>
        </Button>
        
        <Button 
          variant="outline" 
          className="flex-col h-24 border-dashed border-gray-300 hover:border-greencity-500 hover:bg-greencity-50"
          asChild
        >
          <Link to="/wallet/fund">
            <ArrowUpRight className="h-6 w-6 mb-2 text-greencity-500" />
            <span>Fund Wallet</span>
          </Link>
        </Button>
        
        <Button 
          variant="outline" 
          className="flex-col h-24 border-dashed border-gray-300 hover:border-greencity-500 hover:bg-greencity-50"
          asChild
        >
          <Link to="/products">
            <Search className="h-6 w-6 mb-2 text-greencity-500" />
            <span>Explore Products</span>
          </Link>
        </Button>
        
        <Button 
          variant="outline" 
          className="flex-col h-24 border-dashed border-gray-300 hover:border-greencity-500 hover:bg-greencity-50"
          asChild
        >
          <Link to="/wallet">
            <Wallet className="h-6 w-6 mb-2 text-greencity-500" />
            <span>My Wallet</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default QuickActions;
