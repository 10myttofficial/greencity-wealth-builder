
import React from 'react';
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
import { HelpCircle } from 'lucide-react';

interface IndexOption {
  value: string;
  label: string;
}

interface IndexSelectorsProps {
  indices: IndexOption[];
  compareOptions: IndexOption[];
  selectedIndex: string;
  compareIndex: string;
  setSelectedIndex: (index: string) => void;
  setCompareIndex: (index: string) => void;
}

const IndexSelectors: React.FC<IndexSelectorsProps> = ({
  indices,
  compareOptions,
  selectedIndex,
  compareIndex,
  setSelectedIndex,
  setCompareIndex
}) => {
  return (
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
  );
};

export default IndexSelectors;
