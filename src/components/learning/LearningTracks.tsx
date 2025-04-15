
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Progress
} from "@/components/ui/progress";
import { CheckCircle2 } from '@/components/ui/icons';

const tracks = [
  {
    id: 'beginner',
    name: 'Beginner Track',
    tagline: 'New to Investing?',
    description: 'Start your investment journey with the fundamentals.',
    progress: 80,
    lessonsCompleted: 4,
    totalLessons: 5,
    color: 'bg-green-50 border-green-200',
    progressColor: 'bg-green-500',
    icon: '🟢'
  },
  {
    id: 'intermediate',
    name: 'Intermediate Track',
    tagline: 'Ready to Diversify?',
    description: 'Take your investments to the next level with advanced strategies.',
    progress: 40,
    lessonsCompleted: 2,
    totalLessons: 5,
    color: 'bg-gold-50 border-gold-200',
    progressColor: 'bg-gold-500',
    icon: '🟡'
  },
  {
    id: 'advanced',
    name: 'Pro Track',
    tagline: 'Advanced Portfolio Management',
    description: 'Master sophisticated investment techniques and analytics.',
    progress: 0,
    lessonsCompleted: 0,
    totalLessons: 5,
    color: 'bg-red-50 border-red-200',
    progressColor: 'bg-red-500',
    icon: '🔴'
  }
];

const LearningTracks = () => {
  return (
    <div className="space-y-6">
      {tracks.map((track) => (
        <Card 
          key={track.id} 
          className={`${track.color} hover:shadow-md transition-shadow`}
        >
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{track.icon}</span>
                  <h3 className="text-xl font-bold">{track.name}</h3>
                </div>
                <p className="text-lg font-medium mb-2">{track.tagline}</p>
                <p className="text-gray-600 mb-4 md:max-w-md">{track.description}</p>
              </div>
              
              <div className="flex items-center gap-2">
                {track.progress > 0 ? (
                  <Button className="green-gradient">Continue</Button>
                ) : (
                  <Button className="green-gradient">Start Track</Button>
                )}
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <span className="text-sm font-medium">Progress</span>
                </div>
                <span className="text-sm text-gray-600">
                  {track.lessonsCompleted}/{track.totalLessons} lessons
                </span>
              </div>
              <Progress value={track.progress} className={track.progressColor} />
              
              {track.progress === 100 && (
                <div className="flex items-center mt-4 text-green-600">
                  <CheckCircle2 className="mr-2" size={16} />
                  <span>Track Completed! <Button variant="link" className="p-0 h-auto">View Certificate</Button></span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LearningTracks;
