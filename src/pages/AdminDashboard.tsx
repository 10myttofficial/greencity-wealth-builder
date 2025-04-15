
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AdminWelcomePanel from '@/components/admin/AdminWelcomePanel';
import ProductManagement from '@/components/admin/ProductManagement';
import TransactionOversight from '@/components/admin/TransactionOversight';
import UserRoleManagement from '@/components/admin/UserRoleManagement';
import CompliancePanel from '@/components/admin/CompliancePanel';
import AnalyticsPanel from '@/components/admin/AnalyticsPanel';
import AdminNotifications from '@/components/admin/AdminNotifications';
import SystemSettings from '@/components/admin/SystemSettings';

const AdminDashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-6 md:py-8">
        <h1 className="text-3xl font-bold mb-6">Asset Manager Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-3">
            <AdminWelcomePanel user={user} />
          </div>
          
          <div className="lg:col-span-3 space-y-6">
            <ProductManagement />
            <TransactionOversight />
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <UserRoleManagement />
            <CompliancePanel />
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            <AdminNotifications />
            <SystemSettings />
          </div>
          
          <div className="lg:col-span-3">
            <AnalyticsPanel />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
