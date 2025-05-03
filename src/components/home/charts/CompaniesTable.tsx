
import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Company {
  name: string;
  marketCap: number;
}

interface CompaniesTableProps {
  companies: Company[];
  indexName: string;
  formatCurrency: (value: number) => string;
}

const CompaniesTable: React.FC<CompaniesTableProps> = ({ companies, indexName, formatCurrency }) => {
  return (
    <Card className="w-full shadow-md border-gray-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-greencity-800">{indexName} Companies</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-greencity-700">
              <TableRow>
                <TableHead className="text-white">Company Name</TableHead>
                <TableHead className="text-white text-right">Market Capitalization in Naira</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companies.map((company) => (
                <TableRow key={company.name} className="even:bg-gray-50">
                  <TableCell className="font-medium">{company.name}</TableCell>
                  <TableCell className="text-right">{formatCurrency(company.marketCap)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompaniesTable;
