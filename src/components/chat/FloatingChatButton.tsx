
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const FloatingChatButton = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpenChat = () => {
    navigate('/chat-support');
    setIsOpen(false);
  };
  
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button 
            className="h-14 w-14 rounded-full shadow-lg green-gradient"
            size="icon"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-0" side="top" align="end">
          <div className="bg-greencity-500 text-white p-3">
            <h3 className="font-medium">Chat with us</h3>
            <p className="text-xs">Our support team is ready to help</p>
          </div>
          <div className="p-3 space-y-2">
            <Button 
              variant="outline" 
              className="w-full justify-start text-left" 
              onClick={handleOpenChat}
            >
              <span className="mr-2">💼</span> Speak with a financial advisor
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start text-left"
              onClick={handleOpenChat}
            >
              <span className="mr-2">❓</span> Ask a question
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-greencity-500" 
              onClick={handleOpenChat}
            >
              Open full chat
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FloatingChatButton;
