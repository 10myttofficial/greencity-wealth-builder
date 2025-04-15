
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, RefreshCcw, AlertCircle } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockPayoutData = [
  {
    id: '1',
    product: 'Treasury Note',
    amount: 50000,
    date: '2025-05-20',
    action: 'Reinvest',
    status: 'upcoming'
  },
  {
    id: '2',
    product: 'Fixed Income',
    amount: 15000,
    date: '2025-06-02',
    action: 'Auto-Renew On',
    status: 'upcoming'
  },
  {
    id: '3',
    product: 'Mutual Fund Dividend',
    amount: 7500,
    date: '2025-06-15',
    action: 'Pending Decision',
    status: 'pending'
  },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-NG', options);
};

const MaturityTracker = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="flex items-center">
          <Calendar className="mr-2" size={20} />
          Payout & Maturity Tracker
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Amount Due</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockPayoutData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.product}</TableCell>
                <TableCell>{formatCurrency(item.amount)}</TableCell>
                <TableCell>{formatDate(item.date)}</TableCell>
                <TableCell>
                  {item.status === 'pending' ? (
                    <div className="flex items-center">
                      <AlertCircle size={16} className="text-amber-500 mr-1" />
                      <Button variant="outline" size="sm">Set Preference</Button>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <RefreshCcw size={16} className="text-green-500 mr-1" />
                      <span>{item.action}</span>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {mockPayoutData.length === 0 && (
          <div className="text-center py-6">
            <p className="text-gray-500">No upcoming maturities or payouts</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MaturityTracker;
