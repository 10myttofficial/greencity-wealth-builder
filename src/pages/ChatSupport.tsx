
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import ChatInterface from '@/components/chat/ChatInterface';
import { Button } from '@/components/ui/button';
import { LogOut, Settings } from 'lucide-react';

const ChatSupport = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-playfair font-bold text-greencity-500">Green<span className="text-gold-500">City</span></span>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard')}>
              Dashboard
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={signOut}
              disabled={loading}
            >
              <LogOut size={18} className="mr-1" /> Sign Out
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 flex-grow flex flex-col">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Chat Support</h1>
          <p className="text-gray-500">Get help from our financial advisors</p>
        </div>
        
        <div className="flex-grow bg-white rounded-lg shadow-md overflow-hidden">
          <ChatInterface />
        </div>
      </main>
    </div>
  );
};

export default ChatSupport;
