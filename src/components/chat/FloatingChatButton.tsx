
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FloatingChatButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => navigate('/chat-support')}
        className="bg-greencity-500 hover:bg-greencity-600 text-white border border-white rounded-full p-4 shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 group"
      >
        <MessageSquare className="text-white h-6 w-6" />
        <span className="text-white font-medium overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          Talk to an Advisor
        </span>
      </Button>
    </div>
  );
};

export default FloatingChatButton;
