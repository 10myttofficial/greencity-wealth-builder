
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PortfolioSummary from '@/components/dashboard/PortfolioSummary';
import AssetAllocation from '@/components/portfolio/AssetAllocation';
import InvestmentList from '@/components/portfolio/InvestmentList';
import PerformanceChart from '@/components/portfolio/PerformanceChart';
import MaturityTracker from '@/components/portfolio/MaturityTracker';
import RiskIndicator from '@/components/portfolio/RiskIndicator';
import PortfolioAlerts from '@/components/portfolio/PortfolioAlerts';
import PortfolioActions from '@/components/portfolio/PortfolioActions';

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">My Portfolio</h1>
            <p className="text-gray-600 mt-2">Track your investments and performance</p>
          </div>

          <div className="space-y-8">
            {/* Portfolio Snapshot */}
            <PortfolioSummary />
            
            {/* Asset Allocation & Performance */}
            <div className="grid md:grid-cols-2 gap-6">
              <AssetAllocation />
              <PerformanceChart />
            </div>
            
            {/* Investment Products Breakdown */}
            <InvestmentList />
            
            {/* Payout & Maturity Tracker and Risk Indicator */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <MaturityTracker />
              </div>
              <div>
                <RiskIndicator />
              </div>
            </div>
            
            {/* Notifications / Alerts */}
            <PortfolioAlerts />
            
            {/* Sticky bottom actions */}
            <PortfolioActions />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
