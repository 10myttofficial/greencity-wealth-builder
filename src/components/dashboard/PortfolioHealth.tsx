
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AlertCircle } from 'lucide-react';

const PortfolioHealth = () => {
  const diversificationScore = 78;
  const riskExposure = "Moderate";
  const topPerformer = "TLN";
  const topPerformerRate = "+12%";
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "#2E8B57"; // Good - Green
    if (score >= 60) return "#FFD700"; // Moderate - Gold
    return "#EA4335"; // Poor - Red
  };

  return (
    <Card className="border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Portfolio Health</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">Diversification Score</span>
              <span className="font-medium" style={{ color: getScoreColor(diversificationScore) }}>{diversificationScore}% (Good)</span>
            </div>
            <Progress value={diversificationScore} className="h-2" 
              style={{ backgroundColor: '#E5E7EB' }}
            >
              <div 
                className="h-full rounded-full" 
                style={{ width: `${diversificationScore}%`, backgroundColor: getScoreColor(diversificationScore) }} 
              />
            </Progress>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Risk Exposure</span>
            <span className="font-medium text-amber-500">{riskExposure}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Top Performing Product</span>
            <span className="font-medium text-green-600">{topPerformer} ({topPerformerRate})</span>
          </div>

          <div className="mt-4 bg-blue-50 border border-blue-100 rounded-md p-3 text-sm">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-blue-500 mr-2 shrink-0" />
              <p className="text-blue-800">
                Consider rebalancing into Fixed Income for more stability.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioHealth;
