
import React from 'react';
import { Button } from '@/components/ui/button';

interface SupportOptionsProps {
  onOptionSelect: (option: string) => void;
}

const SupportOptions: React.FC<SupportOptionsProps> = ({ onOptionSelect }) => {
  const options = [
    { text: "I'd like to speak with a financial advisor", icon: "💼" },
    { text: "How do I invest in mutual funds?", icon: "❓" },
    { text: "I need help with a transaction", icon: "📄" },
    { text: "Tell me more about your products", icon: "📘" }
  ];

  return (
    <div className="p-3 bg-gray-50">
      <p className="text-sm text-gray-600 mb-2">Choose an option or type your own question:</p>
      <div className="grid grid-cols-1 gap-2">
        {options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            className="justify-start text-left h-auto py-2"
            onClick={() => onOptionSelect(option.text)}
          >
            <span className="mr-2">{option.icon}</span> {option.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SupportOptions;
