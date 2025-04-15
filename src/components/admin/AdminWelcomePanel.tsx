
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, AlertTriangle, BarChart3 } from 'lucide-react';

interface AdminWelcomePanelProps {
  user: any;
}

const AdminWelcomePanel = ({ user }: AdminWelcomePanelProps) => {
  // Get admin's first name or default to "Admin"
  const firstName = user?.user_metadata?.first_name || 'Admin';
  
  return (
    <Card className="border-gray-100 overflow-hidden bg-white">
      <CardContent className="p-0">
        <div className="bg-greencity-500/10 p-6">
          <h2 className="text-2xl font-bold text-greencity-800">
            Welcome back, Admin {firstName} 👋
          </h2>
          <p className="text-greencity-600 mt-1">
            Here's your daily overview for GreenCity Financials
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
          <QuickStatCard 
            icon={<Users className="h-5 w-5 text-blue-500" />} 
            label="Active Users" 
            value="24,300"
            bgColor="bg-blue-50" 
          />
          
          <QuickStatCard 
            icon={<BarChart3 className="h-5 w-5 text-green-500" />} 
            label="Total AUM" 
            value="₦18.4 Billion"
            bgColor="bg-green-50" 
          />
          
          <QuickStatCard 
            icon={<Shield className="h-5 w-5 text-amber-500" />} 
            label="Pending Verifications" 
            value="12"
            bgColor="bg-amber-50" 
          />
          
          <QuickStatCard 
            icon={<AlertTriangle className="h-5 w-5 text-red-500" />} 
            label="Compliance Alerts" 
            value="3"
            bgColor="bg-red-50" 
          />
        </div>
      </CardContent>
    </Card>
  );
};

interface QuickStatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  bgColor: string;
}

const QuickStatCard = ({ icon, label, value, bgColor }: QuickStatCardProps) => {
  return (
    <div className={`${bgColor} rounded-lg p-4 flex flex-col items-start`}>
      <div className="mb-2">{icon}</div>
      <div className="text-xl font-bold">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

export default AdminWelcomePanel;
