
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
  { symbol: 'MTNN', price: 235.50, percentageChange: 1.80, companyName: 'MTN Nigeria Communications Plc' },
  { symbol: 'AIRTELAFRI', price: 2050.00, percentageChange: 2.15, companyName: 'Airtel Africa Plc' },
  { symbol: 'BUACEMENT', price: 95.00, percentageChange: -0.50, companyName: 'BUA Cement Plc' },
  { symbol: 'BUAFOODS', price: 128.50, percentageChange: 1.20, companyName: 'BUA Foods Plc' },
  { symbol: 'NESTLE', price: 1150.00, percentageChange: -0.90, companyName: 'Nestle Nigeria Plc' },
  { symbol: 'NB', price: 37.00, percentageChange: -1.80, companyName: 'Nigerian Breweries Plc' },
  { symbol: 'SEPLAT', price: 1480.00, percentageChange: 3.25, companyName: 'Seplat Energy Plc' },
  { symbol: 'STANBIC', price: 55.00, percentageChange: 0.85, companyName: 'Stanbic IBTC Holdings Plc' },
  { symbol: 'FBNH', price: 16.95, percentageChange: -0.60, companyName: 'FBN Holdings Plc' },
  { symbol: 'UBA', price: 19.50, percentageChange: 1.40, companyName: 'United Bank for Africa Plc' },
  { symbol: 'OANDO', price: 8.45, percentageChange: -2.10, companyName: 'Oando Plc' },
  { symbol: 'TRANSCORP', price: 5.20, percentageChange: 4.20, companyName: 'Transnational Corporation Plc' },
  { symbol: 'FLOURMILL', price: 32.80, percentageChange: -0.95, companyName: 'Flour Mills of Nigeria Plc' },
  { symbol: 'GUINNESS', price: 75.00, percentageChange: 1.75, companyName: 'Guinness Nigeria Plc' },
  { symbol: 'PZ', price: 22.35, percentageChange: -1.15, companyName: 'PZ Cussons Nigeria Plc' },
  { symbol: 'TOTAL', price: 310.50, percentageChange: 2.40, companyName: 'TotalEnergies Marketing Nigeria Plc' },
  { symbol: 'INTBREW', price: 4.95, percentageChange: -3.20, companyName: 'International Breweries Plc' },
  { symbol: 'CADBURY', price: 17.80, percentageChange: 1.60, companyName: 'Cadbury Nigeria Plc' },
  { symbol: 'WAPCO', price: 45.20, percentageChange: 0.90, companyName: 'Lafarge Africa Plc' },
  { symbol: 'UACN', price: 12.85, percentageChange: -0.75, companyName: 'UAC of Nigeria Plc' }
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
