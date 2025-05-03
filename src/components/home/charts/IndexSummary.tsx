
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface IndexSummaryProps {
  currentValue: number;
  changeValue: number;
  changePercent: number;
  formattedDate: string;
  description: string;
}

const IndexSummary: React.FC<IndexSummaryProps> = ({
  currentValue,
  changeValue,
  changePercent,
  formattedDate,
  description
}) => {
  const isPositive = changeValue >= 0;
  
  return (
    <>
      <p className="text-gray-700 text-sm mb-6">{description}</p>
      
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
    </>
  );
};

export default IndexSummary;
