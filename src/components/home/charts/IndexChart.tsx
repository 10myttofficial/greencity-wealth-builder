
import React from 'react';
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
import { ChartContainer } from '@/components/ui/chart';

interface IndexChartProps {
  chartData: {
    date: Date;
    value: number;
  }[];
  formatDate: (date: Date) => string;
}

const IndexChart: React.FC<IndexChartProps> = ({ chartData, formatDate }) => {
  return (
    <div className="h-[400px] mb-6">
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
  );
};

export default IndexChart;
