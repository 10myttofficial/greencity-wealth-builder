
import React from 'react';
import { cn } from '@/lib/utils';

type TimeRangeOption = {
  value: string;
  label: string;
};

interface ChartControlsProps {
  timeRange: string;
  setTimeRange: (range: string) => void;
  timeRangeOptions: TimeRangeOption[];
}

const ChartControls: React.FC<ChartControlsProps> = ({
  timeRange,
  setTimeRange,
  timeRangeOptions,
}) => {
  return (
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
  );
};

export default ChartControls;
