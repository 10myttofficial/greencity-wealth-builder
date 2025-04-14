
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import PortfolioSummary from '../components/dashboard/PortfolioSummary';
import QuickActions from '../components/dashboard/QuickActions';
import ActiveInvestments from '../components/dashboard/ActiveInvestments';
import MarketInsights from '../components/dashboard/MarketInsights';
import { Button } from '@/components/ui/button';
import { BellRing, Mail } from 'lucide-react';
import Footer from '../components/layout/Footer';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome, John</h1>
            <p className="text-gray-500">Here's what's happening with your investments today.</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" size="icon" className="relative">
              <BellRing size={20} />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">3</span>
            </Button>
            <Button variant="outline" size="icon" className="relative">
              <Mail size={20} />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">2</span>
            </Button>
          </div>
        </div>
        
        <div className="space-y-8">
          <PortfolioSummary />
          
          <QuickActions />
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ActiveInvestments />
            </div>
            <div>
              <MarketInsights />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
