
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Activity, PieChart } from 'lucide-react';

const portfolioData = {
  totalValue: 1250000.00,
  totalReturn: 125000.00,
  returnPercentage: 11.1,
  isPositive: true,
  allocation: [
    { name: 'Mutual Funds', value: 500000, percentage: 40, color: '#2E8B57' },
    { name: 'Treasury Notes', value: 375000, percentage: 30, color: '#FFD700' },
    { name: 'Fixed Income', value: 250000, percentage: 20, color: '#6082B6' },
    { name: 'Others', value: 125000, percentage: 10, color: '#8884d8' },
  ]
};

const PortfolioSummary = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Portfolio Summary</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border border-gray-100">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-500 font-medium">Total Value</h3>
              <Activity className="text-gray-400" size={20} />
            </div>
            <p className="text-3xl font-bold">{formatCurrency(portfolioData.totalValue)}</p>
            <div className="mt-4 flex items-center">
              {portfolioData.isPositive ? (
                <TrendingUp className="text-green-500 mr-1" size={16} />
              ) : (
                <TrendingDown className="text-red-500 mr-1" size={16} />
              )}
              <span className={portfolioData.isPositive ? 'text-green-500' : 'text-red-500'}>
                {portfolioData.isPositive ? '+' : '-'}{portfolioData.returnPercentage}%
              </span>
              <span className="text-gray-500 ml-1">this month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border border-gray-100">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-500 font-medium">Total Return</h3>
              <TrendingUp className="text-gray-400" size={20} />
            </div>
            <p className="text-3xl font-bold">{formatCurrency(portfolioData.totalReturn)}</p>
            <div className="mt-4 flex items-center">
              <span className={portfolioData.isPositive ? 'text-green-500' : 'text-red-500'}>
                {portfolioData.isPositive ? '+' : '-'}{portfolioData.returnPercentage}%
              </span>
              <span className="text-gray-500 ml-1">all time</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border border-gray-100 md:col-span-2 lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-500 font-medium">Asset Allocation</h3>
              <PieChart className="text-gray-400" size={20} />
            </div>
            <div className="flex flex-col space-y-3">
              {portfolioData.allocation.map((asset) => (
                <div key={asset.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{asset.name}</span>
                    <span>{asset.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{ width: `${asset.percentage}%`, backgroundColor: asset.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PortfolioSummary;
