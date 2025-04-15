
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, RefreshCw, LineChart, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickActions = () => {
  const actions = [
    {
      id: 1,
      name: 'Add New Investment',
      icon: PlusCircle,
      link: '/products',
      color: 'text-green-500'
    },
    {
      id: 2,
      name: 'Set Auto-Reinvest',
      icon: RefreshCw,
      link: '/portfolio',
      color: 'text-blue-500'
    },
    {
      id: 3,
      name: 'Update Risk Profile',
      icon: LineChart,
      link: '/profile',
      color: 'text-amber-500'
    },
    {
      id: 4,
      name: 'Download Statement',
      icon: Download,
      link: '#',
      color: 'text-purple-500',
      onClick: () => console.log('Download statement')
    }
  ];

  return (
    <Card className="border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map(action => (
            action.onClick ? (
              <Button
                key={action.id}
                variant="outline"
                className="h-auto py-4 flex flex-col items-center justify-center text-center border-gray-200 hover:border-greencity-500 hover:text-greencity-500"
                onClick={action.onClick}
              >
                <action.icon className={`h-5 w-5 mb-2 ${action.color}`} />
                <span className="text-sm">{action.name}</span>
              </Button>
            ) : (
              <Button
                key={action.id}
                variant="outline"
                className="h-auto py-4 flex flex-col items-center justify-center text-center border-gray-200 hover:border-greencity-500 hover:text-greencity-500"
                asChild
              >
                <Link to={action.link}>
                  <action.icon className={`h-5 w-5 mb-2 ${action.color}`} />
                  <span className="text-sm">{action.name}</span>
                </Link>
              </Button>
            )
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
