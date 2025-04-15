
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, BarChart2, Wallet, LineChart, Clock } from 'lucide-react';

const categories = [
  {
    id: '1',
    title: 'Investment Basics',
    description: 'For total beginners. Risk, return, compounding.',
    icon: <Brain className="text-greencity-500" size={24} />,
    articles: 8,
    color: 'bg-greencity-50 border-greencity-100'
  },
  {
    id: '2',
    title: 'Understanding Products',
    description: 'Deep dives into Mutual Funds, TLNs, Fixed Income.',
    icon: <BarChart2 className="text-gold-600" size={24} />,
    articles: 12,
    color: 'bg-gold-50 border-gold-100'
  },
  {
    id: '3',
    title: 'Personal Finance',
    description: 'Budgeting, saving, goal-setting.',
    icon: <Wallet className="text-blue-600" size={24} />,
    articles: 7,
    color: 'bg-blue-50 border-blue-100'
  },
  {
    id: '4',
    title: 'Market Insights',
    description: 'Updates & trends in Nigeria\'s investment space.',
    icon: <LineChart className="text-purple-600" size={24} />,
    articles: 5,
    color: 'bg-purple-50 border-purple-100'
  },
  {
    id: '5',
    title: 'Retirement Planning',
    description: 'Secure income strategies for the future.',
    icon: <Clock className="text-emerald-600" size={24} />,
    articles: 6,
    color: 'bg-emerald-50 border-emerald-100'
  },
];

const LearningCategories = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Card 
          key={category.id} 
          className={`${category.color} hover:shadow-md transition-shadow`}
        >
          <CardContent className="p-6">
            <div className="mb-4">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{category.title}</h3>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{category.articles} articles</span>
              <Button variant="ghost" className="text-greencity-600 hover:text-greencity-700 hover:bg-greencity-50">
                Explore
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LearningCategories;
