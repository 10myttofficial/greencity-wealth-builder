
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, AlertCircle, FileCheck } from 'lucide-react';

const notifications = [
  {
    id: 1,
    message: 'New investment product submitted for review',
    time: '10 mins ago',
    priority: 'high',
    icon: <FileCheck className="h-4 w-4 text-blue-500" />,
  },
  {
    id: 2,
    message: 'High-risk transaction flagged by system',
    time: '1 hour ago',
    priority: 'critical',
    icon: <AlertCircle className="h-4 w-4 text-red-500" />,
  },
  {
    id: 3,
    message: 'Audit report due next week',
    time: '1 day ago',
    priority: 'medium',
    icon: <Clock className="h-4 w-4 text-amber-500" />,
  },
];

const AdminNotifications = () => {
  return (
    <Card className="border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl">
          Admin Notifications
          <Badge className="ml-2 bg-red-500 text-white">New</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="mr-3">{notification.icon}</div>
              <div className="flex-1">
                <p className="text-sm">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
              </div>
              <Badge
                variant="outline"
                className={
                  notification.priority === 'critical'
                    ? 'bg-red-100 text-red-800 hover:bg-red-100'
                    : notification.priority === 'high'
                    ? 'bg-amber-100 text-amber-800 hover:bg-amber-100'
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                }
              >
                {notification.priority}
              </Badge>
            </div>
          ))}
          <button className="text-sm text-greencity-600 font-medium hover:text-greencity-700 mt-2 w-full text-center">
            View all notifications
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminNotifications;
