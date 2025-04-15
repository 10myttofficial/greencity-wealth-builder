
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockPerformanceData = {
  '1M': [
    { date: '05/01', value: 1200000 },
    { date: '05/08', value: 1225000 },
    { date: '05/15', value: 1215000 },
    { date: '05/22', value: 1235000 },
    { date: '05/29', value: 1250000 },
  ],
  '3M': [
    { date: '03/01', value: 1150000 },
    { date: '03/15', value: 1175000 },
    { date: '04/01', value: 1190000 },
    { date: '04/15', value: 1210000 },
    { date: '05/01', value: 1225000 },
    { date: '05/15', value: 1240000 },
    { date: '06/01', value: 1250000 },
  ],
  '6M': [
    { date: 'Dec', value: 1100000 },
    { date: 'Jan', value: 1125000 },
    { date: 'Feb', value: 1140000 },
    { date: 'Mar', value: 1175000 },
    { date: 'Apr', value: 1225000 },
    { date: 'May', value: 1250000 },
  ],
  '1Y': [
    { date: 'Jun', value: 950000 },
    { date: 'Aug', value: 980000 },
    { date: 'Oct', value: 1050000 },
    { date: 'Dec', value: 1100000 },
    { date: 'Feb', value: 1160000 },
    { date: 'Apr', value: 1220000 },
    { date: 'May', value: 1250000 },
  ],
  'All': [
    { date: '2022', value: 750000 },
    { date: '2023', value: 980000 },
    { date: '2024', value: 1250000 },
  ],
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

const PerformanceChart = () => {
  const [showMarketComparison, setShowMarketComparison] = useState(false);
  const [timeRange, setTimeRange] = useState('3M');
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle>Portfolio Performance</CardTitle>
          <div className="text-right text-sm">
            <label className="mr-2 text-gray-500">
              <input 
                type="checkbox" 
                checked={showMarketComparison}
                onChange={() => setShowMarketComparison(!showMarketComparison)}
                className="mr-1"
              />
              Show Market Index
            </label>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={timeRange} onValueChange={setTimeRange}>
          <TabsList className="grid w-full grid-cols-5 mb-4">
            <TabsTrigger value="1M">1M</TabsTrigger>
            <TabsTrigger value="3M">3M</TabsTrigger>
            <TabsTrigger value="6M">6M</TabsTrigger>
            <TabsTrigger value="1Y">1Y</TabsTrigger>
            <TabsTrigger value="All">All</TabsTrigger>
          </TabsList>
          
          {Object.keys(mockPerformanceData).map((key) => (
            <TabsContent key={key} value={key}>
              <div className="h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={mockPerformanceData[key as keyof typeof mockPerformanceData]}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="date" />
                    <YAxis tickFormatter={(value) => `₦${value/1000000}M`} />
                    <Tooltip 
                      formatter={(value) => [formatCurrency(Number(value)), 'Value']}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        borderRadius: '0.5rem',
                        border: '1px solid #e2e8f0'  
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#2E8B57" 
                      fill="#2E8B57" 
                      fillOpacity={0.2} 
                    />
                    {showMarketComparison && (
                      <Area 
                        type="monotone" 
                        dataKey="market" 
                        stroke="#8884d8" 
                        fill="#8884d8" 
                        fillOpacity={0.1}
                        // This is just for illustration as the mock data doesn't have market values
                        // You would add actual market comparison data if available
                        data={mockPerformanceData[key as keyof typeof mockPerformanceData].map(
                          item => ({...item, market: item.value * 0.9 + Math.random() * 50000})
                        )}
                      />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Overall Return</p>
            <p className="text-lg font-medium text-green-600">+15.6%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Period Change</p>
            <p className="text-lg font-medium text-green-600">+₦50,000 (+4.2%)</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
