
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, TrendingUp, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const investments = [
  {
    id: 1,
    name: 'GreenCity Growth Fund',
    type: 'Mutual Fund',
    amount: 250000.00,
    growth: 12.5,
    isPositive: true,
    maturity: 'Dec 15, 2025',
    color: 'bg-greencity-100',
    iconColor: 'text-greencity-500',
  },
  {
    id: 2,
    name: 'Federal Treasury Notes',
    type: 'Treasury Linked Note',
    amount: 375000.00,
    growth: 8.2,
    isPositive: true,
    maturity: 'Mar 10, 2024',
    color: 'bg-gold-100',
    iconColor: 'text-gold-500',
  },
  {
    id: 3,
    name: 'Corporate Bond Portfolio',
    type: 'Fixed Income',
    amount: 150000.00,
    growth: -2.4,
    isPositive: false,
    maturity: 'Aug 22, 2024',
    color: 'bg-blue-100',
    iconColor: 'text-blue-500',
  },
];

const ActiveInvestments = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Active Investments</h2>
        <Button variant="ghost" size="sm" className="text-greencity-500" asChild>
          <Link to="/portfolio" className="flex items-center">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>
      
      <div className="grid gap-6">
        {investments.map((investment) => (
          <Card key={investment.id} className="border border-gray-100">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-lg ${investment.color} flex items-center justify-center mr-4`}>
                    {investment.isPositive ? (
                      <TrendingUp className={`h-6 w-6 ${investment.iconColor}`} />
                    ) : (
                      <TrendingDown className={`h-6 w-6 ${investment.iconColor}`} />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{investment.name}</h3>
                    <p className="text-gray-500">{investment.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{formatCurrency(investment.amount)}</p>
                  <div className="flex items-center justify-end">
                    <span className={investment.isPositive ? 'text-green-500' : 'text-red-500'}>
                      {investment.isPositive ? '+' : ''}{investment.growth}%
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Maturity Date</p>
                  <p className="font-medium">{investment.maturity}</p>
                </div>
                <Button variant="outline" size="sm" className="text-greencity-500 border-greencity-500" asChild>
                  <Link to={`/portfolio/${investment.id}`}>
                    View Details
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActiveInvestments;
