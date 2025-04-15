
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PlusCircle, RefreshCw, Ban, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const roles = [
  {
    id: 1,
    role: 'Asset Manager',
    description: 'Full platform access and management capabilities',
    count: 3,
    color: 'bg-purple-100 text-purple-800 hover:bg-purple-100',
  },
  {
    id: 2,
    role: 'Compliance Officer',
    description: 'Oversees regulatory compliance and KYC verification',
    count: 5,
    color: 'bg-blue-100 text-blue-800 hover:bg-blue-100',
  },
  {
    id: 3,
    role: 'Relationship Manager',
    description: 'Manages client accounts and investment guidance',
    count: 12,
    color: 'bg-green-100 text-green-800 hover:bg-green-100',
  },
  {
    id: 4,
    role: 'Investment Advisor',
    description: 'Provides investment advice and portfolio management',
    count: 8,
    color: 'bg-amber-100 text-amber-800 hover:bg-amber-100',
  },
  {
    id: 5,
    role: 'Support Agent',
    description: 'Handles customer inquiries and basic support',
    count: 15,
    color: 'bg-gray-100 text-gray-800 hover:bg-gray-100',
  },
];

const UserRoleManagement = () => {
  return (
    <Card className="border-gray-100">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-2">
        <CardTitle className="text-xl">User Role & Access Management</CardTitle>
        <Button className="mt-2 sm:mt-0 bg-greencity-500 hover:bg-greencity-600" size="sm">
          <PlusCircle className="mr-2 h-4 w-4" /> Invite Admin
        </Button>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead className="hidden md:table-cell">Description</TableHead>
                <TableHead>Users</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roles.map((role) => (
                <TableRow key={role.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{role.role}</div>
                      <div className="text-sm text-gray-500 md:hidden">{role.description}</div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {role.description}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={role.color}
                    >
                      {role.count}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-2"
                      >
                        <RefreshCw className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-2"
                      >
                        <Ban className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-2"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserRoleManagement;
