
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const investmentData = [
  { name: 'Jan', value: 240 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 290 },
  { name: 'Apr', value: 330 },
  { name: 'May', value: 380 },
  { name: 'Jun', value: 420 },
  { name: 'Jul', value: 490 },
  { name: 'Aug', value: 540 },
  { name: 'Sep', value: 580 },
  { name: 'Oct', value: 620 },
  { name: 'Nov', value: 700 },
  { name: 'Dec', value: 750 }
];

const activeUsersData = [
  { name: 'Mon', value: 3200 },
  { name: 'Tue', value: 4000 },
  { name: 'Wed', value: 3800 },
  { name: 'Thu', value: 4200 },
  { name: 'Fri', value: 4100 },
  { name: 'Sat', value: 3000 },
  { name: 'Sun', value: 2800 }
];

const transactionData = [
  { name: '0-50k', value: 1200 },
  { name: '50k-100k', value: 900 },
  { name: '100k-500k', value: 700 },
  { name: '500k-1M', value: 300 },
  { name: '1M-5M', value: 200 },
  { name: '5M+', value: 50 }
];

const supportData = [
  { name: 'Account Issues', value: 30 },
  { name: 'Investment Help', value: 25 },
  { name: 'KYC Verification', value: 15 },
  { name: 'Withdrawal Problems', value: 20 },
  { name: 'Others', value: 10 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const AnalyticsPanel = () => {
  return (
    <Card className="border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Analytics & Platform Health</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="growth">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="growth">Investment Growth</TabsTrigger>
            <TabsTrigger value="users">Active Users</TabsTrigger>
            <TabsTrigger value="transactions">Transaction Size</TabsTrigger>
            <TabsTrigger value="support">Support Requests</TabsTrigger>
          </TabsList>
          
          <TabsContent value="growth" className="mt-0">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={investmentData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`₦${value}M`, 'AUM']} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#2E8B57"
                    fill="#2E8B57"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="users" className="mt-0">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={activeUsersData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [value, 'Active Users']} />
                  <Bar dataKey="value" fill="#2E8B57" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="transactions" className="mt-0">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={transactionData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [value, 'Transactions']} />
                  <Bar dataKey="value" fill="#FFD700" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="support" className="mt-0">
            <div className="h-80 flex justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={supportData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {supportData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [value, 'Requests']} />
                  <Legend layout="vertical" verticalAlign="middle" align="right" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AnalyticsPanel;
