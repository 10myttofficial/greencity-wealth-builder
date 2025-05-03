
// Mock data for index trackers
export const indices = [
  { value: 'ngx-banking', label: 'NGX BANKING' },
  { value: 'ngx-30', label: 'NGX 30' },
  { value: 'ngx-insurance', label: 'NGX INSURANCE' },
  { value: 'ngx-consumer-goods', label: 'NGX CONSUMER GOODS' },
  { value: 'ngx-oil-gas', label: 'NGX OIL & GAS' },
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
};

export const indexDescriptions = {
  'ngx-banking': "Designed to provide an investable benchmark to capture the performance of the banking sector, this index comprises the most capitalized and liquid companies in banking. The index is based on the market capitalization methodology.",
  'ngx-30': "The NGX 30 Index is designed to provide an investable benchmark to capture the performance of the top 30 companies in terms of market capitalization and liquidity.",
  'ngx-insurance': "The NGX Insurance Index tracks the performance of the most capitalized and liquid companies in the insurance sector of the Nigerian exchange.",
  'ngx-consumer-goods': "The NGX Consumer Goods Index represents companies involved in the production or manufacturing of goods purchased by individuals rather than by manufacturers and industries.",
  'ngx-oil-gas': "The NGX Oil & Gas Index tracks companies involved in the exploration, extraction, refining, and distribution of oil and gas products in Nigeria.",
};
