
// Mock data for index trackers
export const indices = [
  { value: 'ngx-banking', label: 'NGX BANKING' },
  { value: 'ngx-30', label: 'NGX 30' },
  { value: 'ngx-insurance', label: 'NGX INSURANCE' },
  { value: 'ngx-consumer-goods', label: 'NGX CONSUMER GOODS' },
  { value: 'ngx-oil-gas', label: 'NGX OIL & GAS' },
  { value: 'ngx-listed', label: 'NGX LISTED' },
  { value: 'nasd-unlisted', label: 'NASD UNLISTED' },
  { value: 'global-markets', label: 'GLOBAL MARKETS' },
  { value: 'african-markets', label: 'AFRICAN MARKETS' },
  { value: 'fixed-income', label: 'FIXED INCOME' },
  { value: 'commodity-market', label: 'COMMODITY MARKET' },
  { value: 'currency-market', label: 'CURRENCY MARKET' },
];

export const compareOptions = [
  { value: 'none', label: 'NONE' },
  ...indices,
];

export const timeRangeOptions = [
  { value: '1m', label: '1m' },
  { value: '3m', label: '3m' },
  { value: '6m', label: '6m' },
  { value: 'ytd', label: 'YTD' },
  { value: '1y', label: '1y' },
  { value: 'all', label: 'All' },
];

export const generateChartData = () => {
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

// Company data by sector
export const companiesByIndex = {
  'ngx-banking': [
    { name: 'ACCESSCORP', marketCap: 1268964554705.40 },
    { name: 'ETI', marketCap: 587185638880.00 },
    { name: 'FCMB', marketCap: 360409335968.50 },
    { name: 'FIDELITYBK', marketCap: 1006754837186.55 },
    { name: 'GTCO', marketCap: 2150629709382.00 },
    { name: 'FIRSTHOLDCO', marketCap: 1046946039775.00 },
    { name: 'UBA', marketCap: 854782301928.75 },
    { name: 'ZENITHBANK', marketCap: 1768542309876.20 },
  ],
  'ngx-30': [
    { name: 'DANGCEM', marketCap: 4350629709382.00 },
    { name: 'AIRTELAFR', marketCap: 3768542309876.20 },
    { name: 'MTNN', marketCap: 3654782301928.75 },
    { name: 'GTCO', marketCap: 2150629709382.00 },
    { name: 'ZENITHBANK', marketCap: 1768542309876.20 },
  ],
  'ngx-insurance': [
    { name: 'AIICO', marketCap: 34209335968.50 },
    { name: 'CUSTODIAN', marketCap: 47185638880.00 },
    { name: 'MANSARD', marketCap: 53964554705.40 },
    { name: 'NEM', marketCap: 28754837186.55 },
    { name: 'LASACO', marketCap: 19946039775.00 },
  ],
  'ngx-consumer-goods': [
    { name: 'NESTLE', marketCap: 868964554705.40 },
    { name: 'CADBURY', marketCap: 127185638880.00 },
    { name: 'FLOURMILL', marketCap: 210409335968.50 },
    { name: 'DANGSUGAR', marketCap: 306754837186.55 },
    { name: 'UNILEVER', marketCap: 146946039775.00 },
  ],
  'ngx-oil-gas': [
    { name: 'SEPLAT', marketCap: 968964554705.40 },
    { name: 'OANDO', marketCap: 257185638880.00 },
    { name: 'TOTAL', marketCap: 548964554705.40 },
    { name: 'CONOIL', marketCap: 176754837186.55 },
    { name: 'ETERNA', marketCap: 86946039775.00 },
  ],
  'ngx-listed': [
    { name: 'TRANSCORP', marketCap: 568964554705.40 },
    { name: 'FBN HOLDINGS', marketCap: 387185638880.00 },
    { name: 'GUINNESS', marketCap: 279409335968.50 },
    { name: 'PRESCO', marketCap: 186754837186.55 },
    { name: 'DANGOTE SUGAR', marketCap: 156946039775.00 },
  ],
  'nasd-unlisted': [
    { name: 'FRIESLANDCAMPINA', marketCap: 258964554705.40 },
    { name: 'NIPCO', marketCap: 157185638880.00 },
    { name: 'CENTRAL SECURITIES', marketCap: 100409335968.50 },
    { name: 'ACORN PET.', marketCap: 86754837186.55 },
    { name: 'FAMAD', marketCap: 56946039775.00 },
  ],
  'global-markets': [
    { name: 'APPLE', marketCap: 5268964554705.40 },
    { name: 'MICROSOFT', marketCap: 4587185638880.00 },
    { name: 'AMAZON', marketCap: 3360409335968.50 },
    { name: 'GOOGLE', marketCap: 2906754837186.55 },
    { name: 'TESLA', marketCap: 1546946039775.00 },
  ],
  'african-markets': [
    { name: 'SASOL (JSE)', marketCap: 468964554705.40 },
    { name: 'MTN (JSE)', marketCap: 387185638880.00 },
    { name: 'SAFARICOM (NSE)', marketCap: 260409335968.50 },
    { name: 'EQUITY GROUP (NSE)', marketCap: 186754837186.55 },
    { name: 'ATTIJARIWAFA (CSE)', marketCap: 156946039775.00 },
  ],
  'fixed-income': [
    { name: 'FGN BOND 2026', marketCap: 868964554705.40 },
    { name: 'FGN BOND 2030', marketCap: 787185638880.00 },
    { name: 'CORPORATE BOND A', marketCap: 560409335968.50 },
    { name: 'T-BILLS 91-DAY', marketCap: 386754837186.55 },
    { name: 'T-BILLS 182-DAY', marketCap: 256946039775.00 },
  ],
  'commodity-market': [
    { name: 'CRUDE OIL (BRENT)', marketCap: 668964554705.40 },
    { name: 'GOLD', marketCap: 487185638880.00 },
    { name: 'COCOA', marketCap: 260409335968.50 },
    { name: 'WHEAT', marketCap: 186754837186.55 },
    { name: 'SUGAR', marketCap: 126946039775.00 },
  ],
  'currency-market': [
    { name: 'USD/NGN', marketCap: 568964554705.40 },
    { name: 'EUR/NGN', marketCap: 387185638880.00 },
    { name: 'GBP/NGN', marketCap: 260409335968.50 },
    { name: 'USD/EUR', marketCap: 186754837186.55 },
    { name: 'USD/JPY', marketCap: 156946039775.00 },
  ],
};

export const indexDescriptions = {
  'ngx-banking': "Designed to provide an investable benchmark to capture the performance of the banking sector, this index comprises the most capitalized and liquid companies in banking. The index is based on the market capitalization methodology.",
  'ngx-30': "The NGX 30 Index is designed to provide an investable benchmark to capture the performance of the top 30 companies in terms of market capitalization and liquidity.",
  'ngx-insurance': "The NGX Insurance Index tracks the performance of the most capitalized and liquid companies in the insurance sector of the Nigerian exchange.",
  'ngx-consumer-goods': "The NGX Consumer Goods Index represents companies involved in the production or manufacturing of goods purchased by individuals rather than by manufacturers and industries.",
  'ngx-oil-gas': "The NGX Oil & Gas Index tracks companies involved in the exploration, extraction, refining, and distribution of oil and gas products in Nigeria.",
  'ngx-listed': "This tracks all companies listed on the Nigerian Exchange Group (NGX), providing a broad view of the performance of publicly traded Nigerian stocks.",
  'nasd-unlisted': "The NASD OTC Securities Exchange is a platform for trading the shares of unlisted public companies in Nigeria, offering access to securities not available on the main exchange.",
  'global-markets': "Tracks major international stock markets including the NYSE, NASDAQ, FTSE, and others, providing insight into global economic trends.",
  'african-markets': "Monitors stock exchanges across the African continent, including Johannesburg Stock Exchange (JSE), Nairobi Securities Exchange, Egyptian Exchange, and more.",
  'fixed-income': "Covers bonds, treasury bills, and other debt instruments with predetermined interest payments and maturity dates, offering more stable investment returns.",
  'commodity-market': "Tracks the trading and pricing of raw materials and primary products such as oil, gold, agricultural products, and other physical goods.",
  'currency-market': "Follows the foreign exchange (Forex) market where currencies are traded against one another, reflecting relative economic strength and monetary policy.",
};
