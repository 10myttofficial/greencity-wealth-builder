
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const mockInvestments = [
  {
    id: 'inv1',
    name: 'Balanced Mutual Fund',
    category: 'Mutual Funds',
    invested: 500000,
    currentValue: 570000,
    roi: 14,
    inception: '2024-01-05',
    maturity: 'Open-ended',
    color: '#2E8B57',
    performance: [
      { month: 'Jan', value: 500000 },
      { month: 'Feb', value: 515000 },
      { month: 'Mar', value: 530000 },
      { month: 'Apr', value: 545000 },
      { month: 'May', value: 570000 },
    ]
  },
  {
    id: 'inv2',
    name: '1-Year Treasury Note',
    category: 'TLNs',
    invested: 300000,
    currentValue: 324000,
    roi: 8,
    inception: '2024-02-10',
    maturity: '2025-02-10',
    color: '#FFD700',
    performance: [
      { month: 'Feb', value: 300000 },
      { month: 'Mar', value: 306000 },
      { month: 'Apr', value: 312000 },
      { month: 'May', value: 324000 },
    ]
  },
  {
    id: 'inv3',
    name: 'Corporate Bond Fund',
    category: 'Fixed Income',
    invested: 250000,
    currentValue: 262500,
    roi: 5,
    inception: '2024-03-15',
    maturity: '2025-09-15',
    color: '#6082B6',
    performance: [
      { month: 'Mar', value: 250000 },
      { month: 'Apr', value: 255000 },
      { month: 'May', value: 262500 },
    ]
  },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

const InvestmentList = () => {
  const [expandedView, setExpandedView] = useState<string | null>(null);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Investment Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {mockInvestments.map((investment) => (
            <AccordionItem key={investment.id} value={investment.id}>
              <AccordionTrigger>
                <div className="flex items-center justify-between w-full pr-4">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 mr-3 rounded-full"
                      style={{ backgroundColor: investment.color }}
                    ></div>
                    <span>{investment.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div>
                      <span className="text-sm text-gray-500">Current: </span>
                      <span className="font-medium">{formatCurrency(investment.currentValue)}</span>
                    </div>
                    <div className="text-green-600 font-medium">
                      +{investment.roi}%
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-2 pb-4">
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Invested Amount</p>
                      <p className="font-medium">{formatCurrency(investment.invested)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Inception Date</p>
                      <p className="font-medium">{new Date(investment.inception).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Maturity Date</p>
                      <p className="font-medium">
                        {investment.maturity === 'Open-ended' 
                          ? 'Open-ended' 
                          : new Date(investment.maturity).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  {expandedView === investment.id ? (
                    <div>
                      <div className="h-[200px] mb-4">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={investment.performance}>
                            <XAxis dataKey="month" />
                            <YAxis 
                              tickFormatter={(value) => `₦${value/1000}k`} 
                              domain={['dataMin - 10000', 'dataMax + 10000']} 
                            />
                            <Tooltip 
                              formatter={(value) => [formatCurrency(Number(value)), 'Value']}
                              labelFormatter={(label) => `Month: ${label}`}
                            />
                            <Line 
                              type="monotone" 
                              dataKey="value" 
                              stroke={investment.color} 
                              strokeWidth={2} 
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Button variant="outline" size="sm">Download Statement</Button>
                        <Button variant="outline" size="sm">Set Alert</Button>
                        {investment.maturity !== 'Open-ended' && (
                          <Button variant="outline" size="sm">Set Auto-renew</Button>
                        )}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mt-4"
                        onClick={() => setExpandedView(null)}
                      >
                        Show Less
                      </Button>
                    </div>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedView(investment.id);
                      }}
                    >
                      View Performance
                    </Button>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default InvestmentList;
