
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Upload, AlertTriangle, CheckCircle } from 'lucide-react';

const CompliancePanel = () => {
  return (
    <Card className="border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Compliance & Regulation Panel</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
              <div>
                <p className="font-medium">Compliance Breaches</p>
                <p className="text-sm text-gray-600">3 flagged transactions</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
              Review Issues
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <div>
                <p className="font-medium">KYC Verified Users</p>
                <p className="text-sm text-gray-600">22,105 / 24,300</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
              View Details
            </Button>
          </div>
          
          <div className="flex justify-between flex-wrap gap-3 pt-3 border-t">
            <div className="flex items-center">
              <p className="text-sm font-medium">Compliance Reports</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="text-gray-700">
                <Download className="mr-2 h-4 w-4" /> Export Quarterly Report
              </Button>
              <Button variant="outline" size="sm" className="text-gray-700">
                <Upload className="mr-2 h-4 w-4" /> Upload Audit Documents
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 pt-4">
            <div className="p-3 rounded-md bg-blue-50 border border-blue-100">
              <p className="text-sm font-medium">SEC Nigeria</p>
              <p className="text-xs text-green-600 mt-1">Compliant</p>
            </div>
            
            <div className="p-3 rounded-md bg-blue-50 border border-blue-100">
              <p className="text-sm font-medium">CBN Guidelines</p>
              <p className="text-xs text-green-600 mt-1">Compliant</p>
            </div>
            
            <div className="p-3 rounded-md bg-yellow-50 border border-yellow-100">
              <p className="text-sm font-medium">AML</p>
              <p className="text-xs text-amber-600 mt-1">Review Required</p>
            </div>
            
            <div className="p-3 rounded-md bg-blue-50 border border-blue-100">
              <p className="text-sm font-medium">KYC Completeness</p>
              <p className="text-xs text-green-600 mt-1">91% Complete</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompliancePanel;
