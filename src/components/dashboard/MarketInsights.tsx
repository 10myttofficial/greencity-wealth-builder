
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown, TrendingUp, Bell } from 'lucide-react';

const marketData = [
  {
    name: 'NGX All Share Index',
    value: '68,212.41',
    change: '+1.24%',
    isPositive: true
  },
  {
    name: 'USD/NGN Rate',
    value: '₦1,450.32',
    change: '-0.58%',
    isPositive: false
  },
  {
    name: 'Inflation Rate',
    value: '28.92%',
    change: '+0.22%',
    isPositive: false
  },
];

const insights = [
  {
    title: 'Global Markets Update',
    content: 'U.S. equities show resilience despite inflation concerns. European markets continue to strengthen.',
    time: '2 hours ago'
  },
  {
    title: 'GreenCity Report',
    content: 'Our analysts predict a bullish outlook for the Nigerian stock market in Q3 2025.',
    time: '1 day ago'
  },
  {
    title: 'Central Bank Decision',
    content: 'CBN maintains benchmark interest rate at 25.75%, signaling stability in monetary policy.',
    time: '3 days ago'
  }
];

const MarketInsights = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Market Insights</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {marketData.map((item, index) => (
          <Card key={index} className="border border-gray-100">
            <CardContent className="p-6">
              <h3 className="text-gray-500 font-medium mb-2">{item.name}</h3>
              <div className="flex justify-between items-end">
                <p className="text-2xl font-bold">{item.value}</p>
                <div className={`flex items-center ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {item.isPositive ? (
                    <ArrowUp size={16} className="mr-1" />
                  ) : (
                    <ArrowDown size={16} className="mr-1" />
                  )}
                  {item.change}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="border border-gray-100">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold flex items-center">
              <TrendingUp size={18} className="mr-2 text-greencity-500" />
              Latest Insights
            </h3>
          </div>
          
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div 
                key={index} 
                className={`p-4 ${index !== insights.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="flex justify-between">
                  <h4 className="font-bold">{insight.title}</h4>
                  <span className="text-xs text-gray-500">{insight.time}</span>
                </div>
                <p className="text-gray-600 mt-1">{insight.content}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketInsights;
