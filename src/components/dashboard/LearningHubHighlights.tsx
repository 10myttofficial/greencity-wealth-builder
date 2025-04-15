
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, BookOpen, Video, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const learningItems = [
  {
    id: 1,
    title: '5 Things Every Beginner Investor Should Know',
    type: 'article',
    icon: BookOpen,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-500'
  },
  {
    id: 2,
    title: 'Mutual Funds Explained (Video)',
    type: 'video',
    icon: Video,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-500'
  },
  {
    id: 3,
    title: 'Quiz: Know Your Risk Appetite',
    type: 'quiz',
    icon: Brain,
    bgColor: 'bg-amber-100',
    iconColor: 'text-amber-500'
  }
];

const LearningHubHighlights = () => {
  return (
    <Card className="border-gray-100">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Learning Hub</CardTitle>
        <Button variant="ghost" size="sm" className="text-greencity-500" asChild>
          <Link to="/learn" className="flex items-center">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {learningItems.map(item => (
            <Link to="/learn" key={item.id}>
              <div className="flex items-center p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                <div className={`${item.bgColor} p-2 rounded-full mr-3`}>
                  <item.icon className={`h-4 w-4 ${item.iconColor}`} />
                </div>
                <p className="text-sm font-medium">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningHubHighlights;
