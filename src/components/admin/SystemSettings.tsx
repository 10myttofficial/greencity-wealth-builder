
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Edit, AlertTriangle, MessageSquareText } from 'lucide-react';

const SystemSettings = () => {
  return (
    <Card className="border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl">
          <Settings className="mr-2 h-5 w-5 text-greencity-500" />
          System Settings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="flex items-center">
              <Edit className="h-4 w-4 text-blue-500 mr-2" />
              <span className="text-sm">Product Categories</span>
            </div>
            <Button variant="ghost" size="sm">
              Edit
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="flex items-center">
              <Edit className="h-4 w-4 text-blue-500 mr-2" />
              <span className="text-sm">Terms & Policies</span>
            </div>
            <Button variant="ghost" size="sm">
              Edit
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="flex items-center">
              <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
              <span className="text-sm">Maintenance Mode</span>
            </div>
            <Button variant="ghost" size="sm">
              Toggle
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="flex items-center">
              <MessageSquareText className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm">Chatbot Settings</span>
            </div>
            <Button variant="ghost" size="sm">
              Configure
            </Button>
          </div>
          
          <div className="pt-2">
            <Button className="w-full bg-greencity-500 hover:bg-greencity-600" size="sm">
              Save All Changes
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemSettings;
