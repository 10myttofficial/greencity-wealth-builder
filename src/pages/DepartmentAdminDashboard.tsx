
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  Users, 
  Bell, 
  BarChart2, 
  Clock, 
  FileText, 
  Calendar, 
  MessageSquare,
  Download,
  Mail,
  AlertCircle
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from 'sonner';
import { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent 
} from '@/components/ui/chart';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import FloatingChatButton from '@/components/chat/FloatingChatButton';

// Sample data for charts and tables
const performanceData = [
  { month: 'Jan', portfolioROI: 10.2, benchmarkROI: 9.1 },
  { month: 'Feb', portfolioROI: 10.8, benchmarkROI: 9.3 },
  { month: 'Mar', portfolioROI: 11.5, benchmarkROI: 9.7 },
  { month: 'Apr', portfolioROI: 12.1, benchmarkROI: 10.2 },
  { month: 'May', portfolioROI: 11.8, benchmarkROI: 10.4 },
  { month: 'Jun', portfolioROI: 11.9, benchmarkROI: 10.1 },
];

const clientData = [
  { id: 1, name: 'Adekunle Johnson', investmentSize: '₦12.5M', riskProfile: 'Moderate', tenure: '2 years', status: 'Active' },
  { id: 2, name: 'Blessing Okafor', investmentSize: '₦45.2M', riskProfile: 'Aggressive', tenure: '3 years', status: 'Active' },
  { id: 3, name: 'Chinedu Eze', investmentSize: '₦8.7M', riskProfile: 'Conservative', tenure: '1 year', status: 'Active' },
  { id: 4, name: 'Damilola Adeyemi', investmentSize: '₦22.1M', riskProfile: 'Moderate', tenure: '2 years', status: 'Under Review' },
  { id: 5, name: 'Folake Balogun', investmentSize: '₦67.8M', riskProfile: 'Aggressive', tenure: '4 years', status: 'Active' },
];

const teamMembers = [
  { id: 1, name: 'John Adesina', role: 'Senior Analyst', lastLogin: 'Today', status: 'Active' },
  { id: 2, name: 'Ngozi Kalu', role: 'Advisor', lastLogin: 'Yesterday', status: 'Suspended' },
  { id: 3, name: 'Emeka Obi', role: 'Client Relations', lastLogin: 'Today', status: 'Active' },
  { id: 4, name: 'Amina Yusuf', role: 'Portfolio Analyst', lastLogin: '2 days ago', status: 'Active' },
  { id: 5, name: 'Tunde Bakare', role: 'Junior Advisor', lastLogin: 'Today', status: 'Training' },
];

const upcomingTasks = [
  { id: 1, title: 'Quarterly Portfolio Review', dueDate: '2025-04-30', assignedTo: 'John Adesina', priority: 'High' },
  { id: 2, title: 'New Client Onboarding', dueDate: '2025-04-21', assignedTo: 'Ngozi Kalu', priority: 'Medium' },
  { id: 3, title: 'Performance Report Generation', dueDate: '2025-04-25', assignedTo: 'Emeka Obi', priority: 'High' },
  { id: 4, title: 'Team Meeting', dueDate: '2025-04-20', assignedTo: 'All', priority: 'Low' },
];

const notifications = [
  { id: 1, title: 'Report Deadline', message: 'Q1 Performance Reports due in 2 days', time: '1 hour ago', type: 'deadline' },
  { id: 2, title: 'Client Escalation', message: 'Mrs. Adeyemi requests urgent portfolio review', time: '3 hours ago', type: 'escalation' },
  { id: 3, title: 'Compliance Update', message: 'New KYC requirements effective next month', time: 'Yesterday', type: 'compliance' },
];

const DepartmentAdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('clients');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Department details - in a real app, these would come from an API
  const departmentDetails = {
    name: 'Portfolio Management',
    teamMembers: 5,
    activeClients: 1240,
    totalAssets: '₦5.2 Billion',
    clientRetention: '93%',
    newClients: 42,
    portfolioROI: '11.8%'
  };
  
  // Filter clients based on search query
  const filteredClients = clientData.filter(client => 
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.investmentSize.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.riskProfile.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleGenerateReport = (type: string) => {
    toast.success(`${type} report generated successfully!`);
  };
  
  const handleUpdateClientNotes = (clientId: number) => {
    toast.success(`Client notes updated for ID: ${clientId}`);
  };
  
  const handleTeamAction = (action: string, memberId: number) => {
    toast.success(`${action} action performed for team member ID: ${memberId}`);
  };
  
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 18) return 'afternoon';
    return 'evening';
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-6 md:py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-gray-800">
                Good {getTimeOfDay()}, {user?.user_metadata?.first_name || 'Manager'}
              </h1>
              <p className="text-gray-600 mt-1">
                🏢 Department: {departmentDetails.name} Lead
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 space-y-2">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-700">
                  <Users size={18} className="mr-2" />
                  <span>Team Members: <strong>{departmentDetails.teamMembers}</strong></span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <BarChart2 size={18} className="mr-2" />
                  <span>Active Clients: <strong>{departmentDetails.activeClients}</strong></span>
                </div>
              </div>
              
              <div className="flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center">
                      <Bell size={18} className="mr-2" />
                      Notifications <Badge className="ml-2 bg-red-500">{notifications.length}</Badge>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80 p-0">
                    <DropdownMenuLabel className="font-normal py-2 px-4 border-b">
                      <div className="font-medium">Recent Notifications</div>
                    </DropdownMenuLabel>
                    {notifications.map(notification => (
                      <DropdownMenuItem key={notification.id} className="p-0">
                        <div className="p-3 w-full hover:bg-gray-50 cursor-pointer">
                          <div className="flex justify-between">
                            <span className="font-medium">{notification.title}</span>
                            <span className="text-xs text-gray-500">{notification.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        </div>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="p-2">
                      <Button variant="ghost" className="w-full text-primary">View All Notifications</Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
        
        {/* Department Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-playfair">Total Assets Managed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{departmentDetails.totalAssets}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-playfair">Client Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{departmentDetails.clientRetention}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-playfair">New Clients (This Month)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{departmentDetails.newClients}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-playfair">Portfolio ROI (Avg)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{departmentDetails.portfolioROI}</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-playfair">Portfolio Performance</CardTitle>
              <CardDescription>Monthly ROI comparison vs benchmark</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={performanceData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="portfolioROI"
                      name="Portfolio ROI"
                      stroke="#2E8B57"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="benchmarkROI"
                      name="Benchmark ROI"
                      stroke="#FFD700"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-playfair">Upcoming Tasks</CardTitle>
              <CardDescription>High priority items</CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <div className="space-y-4">
                {upcomingTasks.filter(task => task.priority === 'High').map(task => (
                  <div key={task.id} className="px-6 py-2 border-l-4 border-primary hover:bg-gray-50">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{task.title}</h4>
                      <span className="text-xs text-gray-500">
                        {new Date(task.dueDate).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Assigned to: {task.assignedTo}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Tasks</Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Main Tabs Interface */}
        <Tabs defaultValue="clients" className="mb-6" onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="clients" className="text-base">Client Management</TabsTrigger>
            <TabsTrigger value="team" className="text-base">Team Management</TabsTrigger>
            <TabsTrigger value="reports" className="text-base">Reports & Insights</TabsTrigger>
            <TabsTrigger value="tasks" className="text-base">Tasks & Calendar</TabsTrigger>
            <TabsTrigger value="comms" className="text-base">Communication</TabsTrigger>
          </TabsList>
          
          {/* Client Management Tab */}
          <TabsContent value="clients" className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-playfair font-bold">Client Management</h2>
              <div className="flex items-center space-x-4">
                <Input
                  placeholder="Search clients..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-64"
                />
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Clients</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="review">Under Review</SelectItem>
                    <SelectItem value="high-value">High Value</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Investment Size</TableHead>
                  <TableHead>Risk Profile</TableHead>
                  <TableHead>Tenure</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClients.map(client => (
                  <TableRow key={client.id}>
                    <TableCell className="font-medium">{client.name}</TableCell>
                    <TableCell>{client.investmentSize}</TableCell>
                    <TableCell>{client.riskProfile}</TableCell>
                    <TableCell>{client.tenure}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={client.status === 'Active' ? 'default' : 'outline'}
                        className={client.status === 'Active' ? 'bg-green-500' : ''}
                      >
                        {client.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            Actions
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => toast.success(`Viewing summary for ${client.name}`)}>
                            View Client Summary
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleUpdateClientNotes(client.id)}>
                            Update Client Notes
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleGenerateReport(`Performance report for ${client.name}`)}>
                            Generate Performance Report
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => toast.success(`Portfolio Manager assignment form for ${client.name}`)}>
                            Assign Portfolio Manager
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          
          {/* Team Management Tab */}
          <TabsContent value="team" className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-playfair font-bold">Team Management</h2>
              <Button>
                <Users size={16} className="mr-2" />
                Add Team Member
              </Button>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamMembers.map(member => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">{member.name}</TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>{member.lastLogin}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={member.status === 'Active' ? 'default' : 'outline'}
                        className={
                          member.status === 'Active' ? 'bg-green-500' : 
                          member.status === 'Suspended' ? 'bg-red-500' : ''
                        }
                      >
                        {member.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            Actions
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleTeamAction('Change Role', member.id)}>
                            Change Role
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleTeamAction('View Activity', member.id)}>
                            View Activity Logs
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            onClick={() => handleTeamAction(member.status === 'Active' ? 'Deactivate' : 'Activate', member.id)}
                            className={member.status === 'Active' ? 'text-red-500' : 'text-green-500'}
                          >
                            {member.status === 'Active' ? 'Deactivate' : 'Activate'}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          
          {/* Reports & Insights Tab */}
          <TabsContent value="reports" className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-playfair font-bold mb-4">Reports & Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair">Portfolio Reports</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start" onClick={() => handleGenerateReport('Portfolio Performance')}>
                      <FileText size={16} className="mr-2" />
                      Portfolio Performance
                    </Button>
                    <Button variant="outline" className="w-full justify-start" onClick={() => handleGenerateReport('Client Summaries')}>
                      <FileText size={16} className="mr-2" />
                      Client Performance Summaries
                    </Button>
                    <Button variant="outline" className="w-full justify-start" onClick={() => handleGenerateReport('Quarterly ROI')}>
                      <FileText size={16} className="mr-2" />
                      Department ROI by Quarter
                    </Button>
                    <Button variant="outline" className="w-full justify-start" onClick={() => handleGenerateReport('Churn Prediction')}>
                      <AlertCircle size={16} className="mr-2" />
                      Churn Prediction List
                    </Button>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="secondary" size="sm">
                      <Download size={16} className="mr-2" />
                      Download CSV
                    </Button>
                    <Button variant="secondary" size="sm">
                      <Mail size={16} className="mr-2" />
                      Email to Compliance
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair">Recently Generated Reports</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-4 border-primary pl-3 py-1">
                      <p className="font-medium">Q1 Performance Summary</p>
                      <p className="text-sm text-gray-600">Generated: April 15, 2025</p>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-3 py-1">
                      <p className="font-medium">High-Value Client Analysis</p>
                      <p className="text-sm text-gray-600">Generated: April 10, 2025</p>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-3 py-1">
                      <p className="font-medium">Monthly Risk Assessment</p>
                      <p className="text-sm text-gray-600">Generated: April 5, 2025</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Calendar size={16} className="mr-2" />
                      Schedule Monthly Report
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Tasks & Calendar Tab */}
          <TabsContent value="tasks" className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-playfair font-bold mb-4">Tasks & Calendar</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="font-playfair">Upcoming Tasks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Task</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead>Assigned To</TableHead>
                          <TableHead>Priority</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {upcomingTasks.map(task => (
                          <TableRow key={task.id}>
                            <TableCell className="font-medium">{task.title}</TableCell>
                            <TableCell>{new Date(task.dueDate).toLocaleDateString()}</TableCell>
                            <TableCell>{task.assignedTo}</TableCell>
                            <TableCell>
                              <Badge 
                                className={
                                  task.priority === 'High' ? 'bg-red-500' : 
                                  task.priority === 'Medium' ? 'bg-yellow-500' : 'bg-blue-500'
                                }
                              >
                                {task.priority}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">
                      <Calendar size={16} className="mr-2" />
                      View Calendar
                    </Button>
                    <Button>Add New Task</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair">Task Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[
                          { name: 'Completed', value: 24 },
                          { name: 'Pending', value: 18 },
                          { name: 'Overdue', value: 5 },
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="value" fill="#2E8B57" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Communication Tab */}
          <TabsContent value="comms" className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-playfair font-bold mb-4">Communication Hub</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair">Internal Memos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex justify-between">
                        <h4 className="font-medium">New Risk Assessment Procedure</h4>
                        <span className="text-xs text-gray-500">Apr 15, 2025</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Please implement the new risk assessment checklist for all client onboarding starting May 1st...
                      </p>
                      <Button variant="link" className="px-0 text-primary">Read More</Button>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Quarterly Review Schedule</h4>
                        <span className="text-xs text-gray-500">Apr 10, 2025</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        The schedule for Q2 client reviews has been finalized. Please check your assigned appointments...
                      </p>
                      <Button variant="link" className="px-0 text-primary">Read More</Button>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Compose Memo</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair">Compliance Notices</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-amber-50 p-3 rounded-md border-l-4 border-amber-500">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Updated KYC Requirements</h4>
                        <span className="text-xs text-gray-500">Apr 12, 2025</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Important: New KYC verification standards will be implemented starting next month...
                      </p>
                      <div className="flex mt-2">
                        <Badge variant="outline" className="mr-2">Required Reading</Badge>
                        <Badge variant="outline" className="bg-amber-100">High Priority</Badge>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md border-l-4 border-gray-300">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Quarterly Compliance Training</h4>
                        <span className="text-xs text-gray-500">Apr 5, 2025</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Please ensure all team members complete the mandatory compliance training by April 30th...
                      </p>
                      <div className="flex mt-2">
                        <Badge variant="outline">Required Action</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">View All Notices</Button>
                    <Button variant="outline">Knowledge Base</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
      <FloatingChatButton />
    </div>
  );
};

export default DepartmentAdminDashboard;
