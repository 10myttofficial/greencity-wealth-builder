
import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from "@/lib/utils";

// Mock data structure
interface StockData {
  symbol: string;
  price: number;
  percentageChange: number;
  companyName: string;
}

// Mock data (replace with API data later)
const mockStocks: StockData[] = [
  { symbol: 'AFRIPRUD', price: 16.60, percentageChange: 1.50, companyName: 'Africa Prudential Plc' },
  { symbol: 'DANGCEM', price: 425.00, percentageChange: -0.75, companyName: 'Dangote Cement Plc' },
  { symbol: 'ZENITHBANK', price: 32.45, percentageChange: 2.30, companyName: 'Zenith Bank Plc' },
  { symbol: 'GTCO', price: 28.90, percentageChange: 0.00, companyName: 'Guaranty Trust Holding Co.' },
  { symbol: 'ACCESSCORP', price: 18.75, percentageChange: -1.25, companyName: 'Access Holdings Plc' },
];

export const StockTicker = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [stocks] = useState<StockData[]>(mockStocks);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (isPaused) return;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="w-full bg-greencity-900 border-b border-greencity-800">
      <div 
        ref={scrollRef}
        className="overflow-hidden whitespace-nowrap py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="inline-block">
          {stocks.map((stock, index) => (
            <StockItem key={`${stock.symbol}-${index}`} stock={stock} />
          ))}
        </div>
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
      className="inline-flex items-center px-4 py-1 hover:bg-greencity-800/50 transition-colors"
    >
      <span className="font-medium text-white mr-2">{stock.symbol}</span>
      <span className="text-gray-300 mr-2">₦{stock.price.toFixed(2)}</span>
      <span
        className={cn(
          "inline-flex items-center",
          isPositive ? "text-green-400" : 
          isNeutral ? "text-gray-400" : 
          "text-red-400"
        )}
      >
        {isPositive ? (
          <ArrowUp className="w-3 h-3 mr-1" />
        ) : isNeutral ? null : (
          <ArrowDown className="w-3 h-3 mr-1" />
        )}
        {stock.percentageChange > 0 ? "+" : ""}
        {stock.percentageChange.toFixed(2)}%
      </span>
    </a>
  );
};

export default StockTicker;
