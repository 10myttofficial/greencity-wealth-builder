
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PlusCircle, Pencil, Ban, TrendingUp, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: 'GreenCity Mutual Fund',
    type: 'Mutual',
    roi: '10.2%',
    status: 'Active',
    lastUpdated: 'Apr 12'
  },
  {
    id: 2,
    name: 'Treasury Shield',
    type: 'TLN',
    roi: '12.5%',
    status: 'Active',
    lastUpdated: 'Apr 10'
  },
  {
    id: 3,
    name: 'Stable Bond',
    type: 'Fixed Income',
    roi: '8.8%',
    status: 'Draft',
    lastUpdated: 'Apr 5'
  }
];

const ProductManagement = () => {
  return (
    <Card className="border-gray-100">
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between pb-2">
        <CardTitle className="text-xl">Investment Product Management</CardTitle>
        <Button className="mt-2 md:mt-0 bg-greencity-500 hover:bg-greencity-600" size="sm">
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Product
        </Button>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>ROI (Current)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.type}</TableCell>
                  <TableCell>{product.roi}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={product.status === 'Active' ? 'default' : 'outline'}
                      className={product.status === 'Active' 
                        ? 'bg-green-100 text-green-800 hover:bg-green-100' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-100'}
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{product.lastUpdated}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="h-8 px-2">
                        <Pencil className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 px-2">
                        <Ban className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 px-2">
                        <TrendingUp className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 px-2">
                        <Lock className="h-3.5 w-3.5" />
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

export default ProductManagement;
