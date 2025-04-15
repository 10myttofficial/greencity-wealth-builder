
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WelcomeBanner from '@/components/dashboard/WelcomeBanner';
import PortfolioSnapshot from '@/components/dashboard/PortfolioSnapshot';
import ActiveInvestments from '@/components/dashboard/ActiveInvestments';
import AiAssistant from '@/components/dashboard/AiAssistant';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import PortfolioHealth from '@/components/dashboard/PortfolioHealth';
import LearningHubHighlights from '@/components/dashboard/LearningHubHighlights';
import NotificationsUpdates from '@/components/dashboard/NotificationsUpdates';
import QuickActions from '@/components/dashboard/QuickActions';
import FloatingChatButton from '@/components/chat/FloatingChatButton';

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-6 md:py-8">
        <WelcomeBanner user={user} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 space-y-6">
            <PortfolioSnapshot />
            <ActiveInvestments />
            <RecentTransactions />
          </div>
          
          <div className="space-y-6">
            <AiAssistant />
            <PortfolioHealth />
            <NotificationsUpdates />
            <QuickActions />
            <LearningHubHighlights />
          </div>
        </div>
      </main>
      
      <Footer />
      <FloatingChatButton />
    </div>
  );
};

export default Dashboard;
