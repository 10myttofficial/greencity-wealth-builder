
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FloatingChatButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={() => navigate('/chat-support')}
        className="bg-greencity-500 text-white border-2 border-white hover:bg-greencity-600 transition-all duration-300 group rounded-full p-4 shadow-lg flex items-center gap-2"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="font-medium overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          Talk to an Advisor
        </span>
      </Button>
    </div>
  );
};

export default FloatingChatButton;
