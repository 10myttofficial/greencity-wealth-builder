import React, { useState } from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown, HelpCircle, ZoomIn, ZoomOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Area, 
  AreaChart, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip,
  Brush 
} from 'recharts';

const indices = [
  { value: 'ngx-banking', label: 'NGX BANKING' },
  { value: 'ngx-30', label: 'NGX 30' },
  { value: 'ngx-insurance', label: 'NGX INSURANCE' },
  { value: 'ngx-consumer-goods', label: 'NGX CONSUMER GOODS' },
  { value: 'ngx-oil-gas', label: 'NGX OIL & GAS' },
];

const compareOptions = [
  { value: 'none', label: 'NONE' },
  ...indices,
];

const generateChartData = () => {
  const data = [];
  const startDate = new Date('2024-12-28');
  const endDate = new Date('2025-04-25');
  let currentDate = new Date(startDate);
  
  let value = 1050;
  
  while (currentDate <= endDate) {
    const randomChange = Math.random() * 30 - 10; // Random value between -10 and 20
    value += randomChange;
    
    if (value < 1000) value = 1000 + Math.random() * 50;
    if (value > 1250) value = 1250 - Math.random() * 50;
    
    data.push({
      date: new Date(currentDate),
      value: parseFloat(value.toFixed(2)),
    });
    
    currentDate.setDate(currentDate.getDate() + 3); // Add 3 days
  }
  
  return data;
};

const bankingCompanies = [
  { name: 'ACCESSCORP', marketCap: 1268964554705.40 },
  { name: 'ETI', marketCap: 587185638880.00 },
  { name: 'FCMB', marketCap: 360409335968.50 },
  { name: 'FIDELITYBK', marketCap: 1006754837186.55 },
  { name: 'GTCO', marketCap: 2150629709382.00 },
  { name: 'FIRSTHOLDCO', marketCap: 1046946039775.00 },
  { name: 'UBA', marketCap: 854782301928.75 },
  { name: 'ZENITHBANK', marketCap: 1768542309876.20 },
];

const timeRangeOptions = [
  { value: '1m', label: '1m' },
  { value: '3m', label: '3m' },
  { value: '6m', label: '6m' },
  { value: 'ytd', label: 'YTD' },
  { value: '1y', label: '1y' },
  { value: 'all', label: 'All' },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-NG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const formatDate = (dateString: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: '2-digit'
  }).format(dateString);
};

const IndexTrackerCard: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState('ngx-banking');
  const [compareIndex, setCompareIndex] = useState('none');
  const [timeRange, setTimeRange] = useState('all');
  
  const chartData = generateChartData();
  
  const currentValue = chartData[chartData.length - 1].value;
  const previousValue = chartData[chartData.length - 2].value;
  const changeValue = currentValue - previousValue;
  const changePercent = (changeValue / previousValue) * 100;
  const isPositive = changeValue >= 0;
  const currentDate = new Date();
  
  const formattedDate = formatDate(currentDate);
  
  return (
    <div className="space-y-8">
      <Card className="w-full shadow-md border-gray-200">
        <CardContent className="px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="w-full md:w-64">
              <Select value={selectedIndex} onValueChange={setSelectedIndex}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an index" />
                </SelectTrigger>
                <SelectContent>
                  {indices.map((index) => (
                    <SelectItem key={index.value} value={index.value}>
                      {index.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-64">
              <span className="text-sm font-medium whitespace-nowrap">Compare with:</span>
              <div className="relative flex-1">
                <Select value={compareIndex} onValueChange={setCompareIndex}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Compare with..." />
                  </SelectTrigger>
                  <SelectContent>
                    {compareOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="absolute right-12 top-1/2 -translate-y-1/2">
                        <HelpCircle className="h-4 w-4 text-gray-400" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        Select another index to compare performance with the currently selected index.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 text-sm mb-6">
            Designed to provide an investable benchmark to capture the performance of the banking sector, 
            this index comprises the most capitalized and liquid companies in banking. The index is based 
            on the market capitalization methodology.
          </p>
          
          <div className="mb-6">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold">{currentValue.toFixed(2)}</span>
              <div className={cn(
                "flex items-center text-lg",
                isPositive ? "text-green-600" : "text-red-600"
              )}>
                {isPositive ? (
                  <ArrowUp className="h-5 w-5 mr-1" />
                ) : (
                  <ArrowDown className="h-5 w-5 mr-1" />
                )}
                {isPositive ? "+" : ""}{changePercent.toFixed(2)}%
              </div>
              <span className="text-gray-500 text-sm">{formattedDate}</span>
            </div>
          </div>
          
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-sm font-medium mr-2">Zoom:</span>
            {timeRangeOptions.map((option) => (
              <button
                key={option.value}
                className={cn(
                  "px-3 py-1 text-xs rounded-md",
                  timeRange === option.value
                    ? "bg-greencity-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                )}
                onClick={() => setTimeRange(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
          
          <div className="h-72 mb-6">
            <ChartContainer
              config={{
                index: { color: "#82ca9d" },
                compare: { color: "#8884d8" },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorIndex" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 10 }}
                    tickFormatter={(date) => formatDate(new Date(date))} 
                    minTickGap={30}
                  />
                  <YAxis 
                    domain={['dataMin - 10', 'dataMax + 10']}
                    tick={{ fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <RechartsTooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
                            <p className="text-xs font-medium">{formatDate(new Date(payload[0].payload.date))}</p>
                            <p className="text-sm">{`Value: ${payload[0].value}`}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#82ca9d" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorIndex)" 
                  />
                  <Brush 
                    dataKey="date" 
                    height={30} 
                    stroke="#8884d8"
                    tickFormatter={(date) => ''} // Hide brush labels
                    startIndex={chartData.length - 30} // Show last 30 data points by default
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card className="w-full shadow-md border-gray-200">
        <CardContent className="px-4 py-6">
          <h3 className="text-xl font-bold text-greencity-800 mb-4">NGX BANKING Companies</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-greencity-700">
                <TableRow>
                  <TableHead className="text-white">Company Name</TableHead>
                  <TableHead className="text-white text-right">Market Capitalization in Naira</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bankingCompanies.map((company) => (
                  <TableRow key={company.name} className="even:bg-gray-50">
                    <TableCell className="font-medium">{company.name}</TableCell>
                    <TableCell className="text-right">{formatCurrency(company.marketCap)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IndexTrackerCard;
