
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import QuickActions from '@/components/dashboard/QuickActions';
import PortfolioSummary from '@/components/dashboard/PortfolioSummary';
import ActiveInvestments from '@/components/dashboard/ActiveInvestments';
import MarketInsights from '@/components/dashboard/MarketInsights';
import FloatingChatButton from '@/components/chat/FloatingChatButton';
import { Button } from '@/components/ui/button';
import { LogOut, Settings } from 'lucide-react';

const Dashboard = () => {
  const { user, signOut, loading } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-playfair font-bold text-greencity-500">Green<span className="text-gold-500">City</span></span>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm">
              <Settings size={18} className="mr-1" /> Settings
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={signOut}
              disabled={loading}
            >
              <LogOut size={18} className="mr-1" /> Sign Out
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Hi, {user?.user_metadata?.first_name || 'there'}!</h1>
          <p className="text-gray-500">Welcome to your financial dashboard</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 space-y-6">
            <QuickActions />
            <MarketInsights />
          </div>
          
          <div className="md:col-span-8 space-y-6">
            <PortfolioSummary />
            <ActiveInvestments />
          </div>
        </div>
      </main>
      
      <FloatingChatButton />
    </div>
  );
};

export default Dashboard;
