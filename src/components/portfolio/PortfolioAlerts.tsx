
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, ChevronRight, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const mockAlerts = [
  {
    id: '1',
    type: 'maturity',
    title: 'Treasury Note Matures Soon',
    description: 'Your 6-month note will mature in 5 days.',
    date: '2025-05-20',
    priority: 'high',
  },
  {
    id: '2',
    type: 'opportunity',
    title: 'New Investment Opportunity',
    description: 'Based on your profile, our new Fixed Income fund may interest you.',
    date: '2025-05-15',
    priority: 'medium',
  },
  {
    id: '3',
    type: 'performance',
    title: 'Portfolio Performance Alert',
    description: 'Your Mutual Fund has grown by 4.5% this month, outperforming the market.',
    date: '2025-05-10',
    priority: 'low',
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'medium':
      return 'bg-amber-100 text-amber-800 border-amber-200';
    case 'low':
    default:
      return 'bg-green-100 text-green-800 border-green-200';
  }
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-NG', options);
};

const PortfolioAlerts = () => {
  return (
    <Card>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="flex items-center">
          <Bell className="mr-2" size={20} />
          Alerts & Notifications
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-sm">
          Mark All as Read
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          {mockAlerts.length > 0 ? (
            <div className="space-y-3">
              {mockAlerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className={`flex items-start p-3 rounded-md border ${getPriorityColor(alert.priority)}`}
                >
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{alert.title}</h4>
                      <span className="text-xs">{formatDate(alert.date)}</span>
                    </div>
                    <p className="text-sm mt-1">{alert.description}</p>
                    <div className="flex justify-between items-center mt-2">
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-sm flex items-center">
                        Take Action <ChevronRight size={14} className="ml-1" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-sm flex items-center text-gray-500">
                        Dismiss <XCircle size={14} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No new alerts</p>
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default PortfolioAlerts;
