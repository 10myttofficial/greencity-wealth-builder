
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import IndexSelectors from './charts/IndexSelectors';
import IndexSummary from './charts/IndexSummary';
import ChartControls from './charts/ChartControls';
import IndexChart from './charts/IndexChart';
import CompaniesTable from './charts/CompaniesTable';
import { 
  indices, 
  compareOptions, 
  timeRangeOptions, 
  generateChartData, 
  companiesByIndex,
  indexDescriptions
} from '@/data/indexData';

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
  const currentDate = new Date();
  
  const formattedDate = formatDate(currentDate);
  const indexDescription = indexDescriptions[selectedIndex as keyof typeof indexDescriptions] || '';
  const companies = companiesByIndex[selectedIndex as keyof typeof companiesByIndex] || [];
  const indexLabel = indices.find(i => i.value === selectedIndex)?.label || selectedIndex.toUpperCase();
  
  return (
    <div className="space-y-8">
      {/* Index Tracker Chart Card */}
      <Card className="w-full shadow-md border-gray-200 overflow-hidden">
        <CardContent className="px-4 py-6">
          <IndexSelectors 
            indices={indices}
            compareOptions={compareOptions}
            selectedIndex={selectedIndex}
            compareIndex={compareIndex}
            setSelectedIndex={setSelectedIndex}
            setCompareIndex={setCompareIndex}
          />
          
          <IndexSummary 
            currentValue={currentValue}
            changeValue={changeValue}
            changePercent={changePercent}
            formattedDate={formattedDate}
            description={indexDescription}
          />
          
          <ChartControls 
            timeRange={timeRange}
            setTimeRange={setTimeRange}
            timeRangeOptions={timeRangeOptions}
          />
          
          <IndexChart 
            chartData={chartData}
            formatDate={formatDate}
          />
        </CardContent>
      </Card>
      
      {/* Companies table as a separate card */}
      <CompaniesTable 
        companies={companies}
        indexName={indexLabel}
        formatCurrency={formatCurrency}
      />
    </div>
  );
};

export default IndexTrackerCard;
