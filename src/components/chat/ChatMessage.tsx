
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from '@supabase/supabase-js';

interface Message {
  id: string;
  content: string;
  sender_id: string;
  is_support: boolean;
  created_at: string;
}

interface ChatMessageProps {
  message: Message;
  user: User | null;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, user }) => {
  const isUserMessage = !message.is_support;
  const time = formatDistanceToNow(new Date(message.created_at), { addSuffix: true });
  
  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (!user) return '';
    const firstName = user.user_metadata?.first_name || '';
    const lastName = user.user_metadata?.last_name || '';
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };
  
  return (
    <div className={`flex items-start ${isUserMessage ? 'justify-end' : 'justify-start'}`}>
      {!isUserMessage && (
        <Avatar className="mr-2 flex-shrink-0">
          <AvatarFallback className="bg-greencity-600 text-white">GC</AvatarFallback>
        </Avatar>
      )}
      
      <div className={`max-w-[80%] ${isUserMessage ? 'bg-greencity-100 text-greencity-900' : 'bg-white border'} p-3 rounded-lg shadow-sm`}>
        <div className="text-sm">{message.content}</div>
        <div className="text-xs mt-1 text-gray-500">{time}</div>
      </div>
      
      {isUserMessage && (
        <Avatar className="ml-2 flex-shrink-0">
          <AvatarFallback className="bg-gold-500 text-white">
            {getUserInitials()}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;
