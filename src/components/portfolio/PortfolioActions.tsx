
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Download, RefreshCw, MessageCircle } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const PortfolioActions = () => {
  const handleInvestMore = () => {
    toast({
      title: "Invest More",
      description: "Navigating to investment options...",
    });
  };

  const handleWithdraw = () => {
    toast({
      title: "Withdraw Funds",
      description: "Navigating to withdrawal options...",
    });
  };

  const handleRebalance = () => {
    toast({
      title: "Portfolio Rebalance",
      description: "Preparing rebalancing recommendations...",
    });
  };

  const handleContactAdvisor = () => {
    toast({
      title: "Contact Advisor",
      description: "Connecting you to an investment advisor...",
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-white border-t shadow-lg md:static md:shadow-none md:border-0 md:bg-transparent z-10">
      <div className="container mx-auto px-4 py-3 md:py-0">
        <div className="grid grid-cols-4 gap-2 md:gap-4 md:flex md:justify-end">
          <Button onClick={handleInvestMore} size="sm" className="green-gradient">
            <PlusCircle size={16} className="mr-2" />
            <span className="hidden md:inline">Invest More</span>
            <span className="md:hidden">Invest</span>
          </Button>
          <Button onClick={handleWithdraw} size="sm" variant="outline">
            <Download size={16} className="mr-2" />
            <span className="hidden md:inline">Withdraw Funds</span>
            <span className="md:hidden">Withdraw</span>
          </Button>
          <Button onClick={handleRebalance} size="sm" variant="outline">
            <RefreshCw size={16} className="mr-2" />
            <span className="hidden md:inline">Rebalance</span>
            <span className="md:hidden">Rebalance</span>
          </Button>
          <Button onClick={handleContactAdvisor} size="sm" variant="outline">
            <MessageCircle size={16} className="mr-2" />
            <span className="hidden md:inline">Contact Advisor</span>
            <span className="md:hidden">Advisor</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioActions;
