
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const featuredContent = [
  {
    id: '1',
    title: 'Investing 101: Start With ₦10,000',
    category: 'Basics',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1679401322404-08f3a6efdde1?q=80&w=2069&auto=format&fit=crop',
    color: 'bg-greencity-50 border-greencity-100'
  },
  {
    id: '2',
    title: 'TLNs vs Treasury Bills: What\'s the Difference?',
    category: 'Products',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2071&auto=format&fit=crop',
    color: 'bg-gold-50 border-gold-100'
  },
  {
    id: '3',
    title: 'How to Read Your Portfolio Like a Pro',
    category: 'Advanced',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236e3?q=80&w=2070&auto=format&fit=crop',
    color: 'bg-blue-50 border-blue-100'
  },
  {
    id: '4',
    title: 'Maximizing Returns in a Bear Market',
    category: 'Strategy',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop',
    color: 'bg-purple-50 border-purple-100'
  },
];

const FeaturedContentCarousel = () => {
  // In a real implementation, you'd use state to track the current slide
  // and provide carousel functionality
  
  return (
    <div className="relative">
      <div className="flex overflow-x-auto space-x-4 py-4 px-2 -mx-2 scrollbar-hide snap-x">
        {featuredContent.map((content) => (
          <div key={content.id} className="min-w-[280px] md:min-w-[320px] flex-shrink-0 snap-start">
            <Card className={`overflow-hidden h-full ${content.color}`}>
              <div 
                className="h-32 bg-cover bg-center"
                style={{ backgroundImage: `url(${content.image})` }}
              ></div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="bg-white">
                    {content.category}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock size={12} className="mr-1" />
                    {content.readTime} read
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">{content.title}</h3>
                <Button variant="ghost" className="text-greencity-600 p-0 h-auto hover:text-greencity-700 hover:bg-transparent">
                  Read Article
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      
      {/* Carousel Navigation - these would be functional in a real implementation */}
      <div className="hidden md:block">
        <Button
          size="icon"
          variant="outline"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full"
        >
          <ChevronLeft size={18} />
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-white rounded-full"
        >
          <ChevronRight size={18} />
        </Button>
      </div>
    </div>
  );
};

export default FeaturedContentCarousel;
