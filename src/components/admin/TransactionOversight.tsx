
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
import { CheckCircle, XCircle, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const transactions = [
  {
    id: 1,
    requester: 'Uche A.',
    action: 'Withdrawal',
    amount: '₦6,000,000',
    product: 'TLN',
    status: 'Pending',
    requiresReview: false,
  },
  {
    id: 2,
    requester: 'Folake T.',
    action: 'New Fund Creation',
    amount: '₦10,000,000',
    product: 'Custom Portfolio',
    status: 'Pending',
    requiresReview: true,
  },
];

const TransactionOversight = () => {
  return (
    <Card className="border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Transaction Oversight</CardTitle>
        <p className="text-sm text-gray-500">
          Review and approve high-value transactions (₦5M+)
        </p>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Requester</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">
                    {transaction.requester}
                  </TableCell>
                  <TableCell>{transaction.action}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.product}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        transaction.status === 'Pending'
                          ? 'bg-amber-100 text-amber-800 hover:bg-amber-100'
                          : 'bg-green-100 text-green-800 hover:bg-green-100'
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {transaction.requiresReview ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-blue-600 border-blue-200 hover:bg-blue-50"
                      >
                        <FileText className="h-4 w-4 mr-1" /> Review Docs
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 px-3 text-green-600 border-green-200 hover:bg-green-50"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" /> Approve
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 px-3 text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <XCircle className="h-4 w-4 mr-1" /> Reject
                        </Button>
                      </div>
                    )}
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

export default TransactionOversight;
