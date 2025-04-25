
import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from "@/lib/utils";

interface StockData {
  symbol: string;
  price: number;
  percentageChange: number;
  companyName: string;
}

const mockStocks: StockData[] = [
  { symbol: 'AFRIPRUD', price: 16.60, percentageChange: 1.50, companyName: 'Africa Prudential Plc' },
  { symbol: 'DANGCEM', price: 425.00, percentageChange: -0.75, companyName: 'Dangote Cement Plc' },
  { symbol: 'ZENITHBANK', price: 32.45, percentageChange: 2.30, companyName: 'Zenith Bank Plc' },
  { symbol: 'GTCO', price: 28.90, percentageChange: 0.00, companyName: 'Guaranty Trust Holding Co.' },
  { symbol: 'ACCESSCORP', price: 18.75, percentageChange: -1.25, companyName: 'Access Holdings Plc' },
];

export const StockTicker = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [stocks] = useState<StockData[]>(mockStocks);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Set initial position
    container.scrollLeft = 0;
    
    const animateTicker = () => {
      if (isPaused || !container) return;
      
      // Increment scroll position
      container.scrollLeft += 1;
      
      // Create seamless loop effect
      // When we've scrolled half way through the duplicated content,
      // reset to the beginning without a visible jump
      if (container.scrollLeft >= container.firstElementChild!.scrollWidth) {
        container.scrollLeft = 0;
      }
    };
    
    const interval = setInterval(animateTicker, 20);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="w-full bg-greencity-900 border-b border-greencity-800">
      <div 
        ref={containerRef}
        className="overflow-hidden whitespace-nowrap py-1.5 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="inline-block">
          {stocks.map((stock, index) => (
            <StockItem key={`${stock.symbol}-${index}`} stock={stock} />
          ))}
        </div>
        {/* Duplicate content to create seamless scrolling effect */}
        <div className="inline-block">
          {stocks.map((stock, index) => (
            <StockItem key={`${stock.symbol}-${index}-duplicate`} stock={stock} />
          ))}
        </div>
      </div>
    </div>
  );
};

const StockItem = ({ stock }: { stock: StockData }) => {
  const isPositive = stock.percentageChange > 0;
  const isNeutral = stock.percentageChange === 0;

  return (
    <a
      href={`/stocks/${stock.symbol}`}
      className="inline-flex items-center px-3 py-0.5 hover:bg-greencity-800/50 transition-colors"
    >
      <span className="font-medium text-white text-sm mr-1.5">{stock.symbol}</span>
      <span className="text-gray-300 text-xs mr-1.5">₦{stock.price.toFixed(2)}</span>
      <span
        className={cn(
          "inline-flex items-center text-xs",
          isPositive ? "text-green-400" : 
          isNeutral ? "text-gray-400" : 
          "text-red-400"
        )}
      >
        {isPositive ? (
          <ArrowUp className="w-2.5 h-2.5 mr-0.5" />
        ) : isNeutral ? null : (
          <ArrowDown className="w-2.5 h-2.5 mr-0.5" />
        )}
        {stock.percentageChange > 0 ? "+" : ""}
        {stock.percentageChange.toFixed(2)}%
      </span>
    </a>
  );
};

export default StockTicker;
