
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import { PlusCircle, ArrowDownToLine, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const data = [
  { name: 'Jan', value: 2100000 },
  { name: 'Feb', value: 2150000 },
  { name: 'Mar', value: 2300000 },
  { name: 'Apr', value: 2250000 },
  { name: 'May', value: 2500000 },
];

const PortfolioSnapshot = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <Card className="border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">My Portfolio Snapshot</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500">Total Portfolio Value</p>
            <p className="text-2xl font-bold">{formatCurrency(2500000)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Returns</p>
            <div className="flex items-center">
              <p className="text-2xl font-bold mr-2">{formatCurrency(280000)}</p>
              <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-xs font-medium flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.6%
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500">Invested Capital</p>
            <p className="text-2xl font-bold">{formatCurrency(2220000)}</p>
          </div>
        </div>
        
        <div className="h-[100px] mt-6 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <Tooltip 
                formatter={(value) => [formatCurrency(Number(value)), 'Value']}
                contentStyle={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#2E8B57" 
                strokeWidth={2} 
                dot={{ strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <Button 
            className="bg-greencity-500 hover:bg-greencity-600"
            asChild
          >
            <Link to="/portfolio">View Details</Link>
          </Button>
          <Button 
            variant="outline" 
            className="border-greencity-500 text-greencity-500 hover:text-greencity-600 hover:border-greencity-600"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Funds
          </Button>
          <Button 
            variant="outline" 
            className="border-greencity-500 text-greencity-500 hover:text-greencity-600 hover:border-greencity-600"
          >
            <ArrowDownToLine className="mr-2 h-4 w-4" />
            Withdraw
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSnapshot;
