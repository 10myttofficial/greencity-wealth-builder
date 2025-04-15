
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Shield } from 'lucide-react';

const RiskIndicator = () => {
  // Mock data - this would come from user's actual portfolio analysis
  const riskLevel = 'Moderate';
  const riskScore = 60; // 0-100 scale
  const riskColor = getRiskColor(riskScore);
  const riskTip = 'Diversify more into TLNs for stability.';
  
  // Helper function to determine color based on risk score
  function getRiskColor(score: number) {
    if (score < 33) return { bg: 'bg-green-500', text: 'text-green-700' };
    if (score < 66) return { bg: 'bg-gold-500', text: 'text-gold-700' };
    return { bg: 'bg-red-500', text: 'text-red-700' };
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <Shield className="mr-2" size={20} />
          Risk Level Indicator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-4">
          <h3 className={`text-lg font-bold ${riskColor.text}`}>
            {riskLevel} Risk
          </h3>
          <p className="text-sm text-gray-600">
            Based on your current asset allocation
          </p>
        </div>
        
        {/* Risk meter/dial visualization */}
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden my-4">
          <div 
            className={`absolute top-0 left-0 h-full ${riskColor.bg}`} 
            style={{ width: `${riskScore}%` }}
          ></div>
          <div 
            className="absolute top-0 left-0 h-full w-[3px] bg-black"
            style={{ left: `${riskScore}%`, transform: 'translateX(-50%)' }}
          ></div>
        </div>
        
        <div className="flex justify-between text-xs text-gray-500 mb-6">
          <span>Low Risk</span>
          <span>Moderate</span>
          <span>High Risk</span>
        </div>
        
        {/* Risk tip */}
        <div className="flex items-start mt-4 p-3 bg-amber-50 rounded-md border border-amber-200">
          <AlertTriangle size={18} className="text-amber-500 flex-shrink-0 mr-2 mt-0.5" />
          <p className="text-sm">{riskTip}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskIndicator;
