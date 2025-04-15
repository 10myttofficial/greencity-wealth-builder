
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, CheckCircle2, Calendar, RefreshCw } from 'lucide-react';

const notifications = [
  {
    id: 1,
    message: 'Your TLN matures in 3 days',
    icon: Calendar,
    iconColor: 'text-amber-500',
    bgColor: 'bg-amber-50'
  },
  {
    id: 2,
    message: 'New Mutual Fund option launched',
    icon: Bell,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    id: 3,
    message: 'Auto-reinvest is enabled',
    icon: RefreshCw,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-50'
  }
];

const NotificationsUpdates = () => {
  return (
    <Card className="border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl">
          <Bell className="mr-2 h-5 w-5 text-greencity-500" />
          Notifications & Updates
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {notifications.map(notification => (
            <div 
              key={notification.id} 
              className="flex items-center p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className={`${notification.bgColor} p-2 rounded-full mr-3`}>
                <notification.icon className={`h-4 w-4 ${notification.iconColor}`} />
              </div>
              <p className="text-sm">{notification.message}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationsUpdates;
