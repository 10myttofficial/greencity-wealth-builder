
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot } from 'lucide-react';

const AiAssistant = () => {
  const [query, setQuery] = useState('');

  const suggestions = [
    "What's trending in Mutual Funds?",
    "When will my TLN mature?",
    "Suggest an investment based on my risk profile"
  ];

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the query to an AI service
    console.log("AI Assistant query:", query);
    // Reset the input
    setQuery('');
  };

  return (
    <Card className="border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl">
          <Bot className="mr-2 h-5 w-5 text-greencity-500" />
          AI Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-2">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask GreenCity Assistant..."
              className="flex-grow"
            />
            <Button type="submit" size="icon" className="bg-greencity-500 hover:bg-greencity-600">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>

        <div className="mt-4">
          <p className="text-xs text-gray-500 mb-2">Suggestions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs border-gray-200 text-gray-700"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AiAssistant;
