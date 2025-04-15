
import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Send, PaperclipIcon, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { toast } from 'sonner';
import ChatMessage from './ChatMessage';
import SupportOptions from './SupportOptions';

interface Message {
  id: string;
  content: string;
  sender_id: string;
  is_support: boolean;
  created_at: string;
  read_at?: string;
}

const ChatInterface = () => {
  const { user } = useAuth();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fetch chat history
  useEffect(() => {
    const fetchMessages = async () => {
      if (!user) return;
      
      setIsLoading(true);
      try {
        // In a real implementation, you would fetch messages from your database
        // This is a placeholder that simulates a welcome message
        const welcomeMessage: Message = {
          id: 'welcome',
          content: 'Welcome to GreenCity Support! How can we help you today?',
          sender_id: 'system',
          is_support: true,
          created_at: new Date().toISOString()
        };
        
        setMessages([welcomeMessage]);
      } catch (error) {
        console.error('Error fetching messages:', error);
        toast.error('Could not load chat history');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, [user]);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!message.trim() || !user) return;

    const newMessage: Message = {
      id: `user-${Date.now()}`,
      content: message,
      sender_id: user.id,
      is_support: false,
      created_at: new Date().toISOString()
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    setShowOptions(false);

    // Simulate response after a delay
    setTimeout(() => {
      const supportResponse: Message = {
        id: `support-${Date.now()}`,
        content: "Thank you for your message. One of our financial advisors will respond shortly. Our typical response time is within 5 minutes during business hours (9AM-5PM, Monday-Friday).",
        sender_id: 'system',
        is_support: true,
        created_at: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, supportResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleOptionSelect = (option: string) => {
    setMessage(option);
    setShowOptions(false);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Chat header */}
      <div className="bg-greencity-500 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Avatar className="mr-3">
            <AvatarFallback className="bg-greencity-600 text-white">GC</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">GreenCity Support</h3>
            <p className="text-xs opacity-80">
              <span className="inline-block mr-1 w-2 h-2 rounded-full bg-green-300"></span>
              Available Now
            </p>
          </div>
        </div>
        <div className="text-sm">
          <span>Business hours: 9AM-5PM, Mon-Fri</span>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-grow overflow-y-auto p-4">
        {isLoading ? (
          <div className="flex justify-center py-10">
            <div className="animate-pulse text-gray-500">Loading conversations...</div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map(msg => (
              <ChatMessage key={msg.id} message={msg} user={user} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Support options */}
      {showOptions && messages.length === 1 && (
        <SupportOptions onOptionSelect={handleOptionSelect} />
      )}

      {/* Chat input */}
      <div className="border-t p-3 bg-white">
        <div className="flex items-end space-x-2">
          <div className="flex-grow">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message here..."
              className="resize-none min-h-[60px]"
              maxRows={4}
            />
          </div>
          <Button 
            className="green-gradient" 
            size="icon" 
            onClick={handleSendMessage}
            disabled={!message.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex mt-2 text-xs text-gray-500 justify-between items-center">
          <div>
            Press Enter to send, Shift+Enter for new line
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="p-1 h-auto">
              <PaperclipIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="p-1 h-auto">
              <Smile className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
