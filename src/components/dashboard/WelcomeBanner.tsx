
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WelcomeBannerProps {
  user: any;
}

const WelcomeBanner = ({ user }: WelcomeBannerProps) => {
  // Get time of day for greeting
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const firstName = user?.user_metadata?.first_name || 'Investor';

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            {getTimeOfDay()}, {firstName} 👋
          </h1>
          <p className="text-greencity-600 font-medium mt-2">
            Your portfolio is up by <span className="text-green-600">+3.2%</span> this month
          </p>
        </div>
        <Button 
          className="mt-4 md:mt-0 bg-greencity-500 hover:bg-greencity-600"
          asChild
        >
          <Link to="/products" className="flex items-center">
            Explore new investment opportunities
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default WelcomeBanner;
