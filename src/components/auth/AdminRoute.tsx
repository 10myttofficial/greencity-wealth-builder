
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { user, loading, userRoles } = useAuth();
  const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
  
  useEffect(() => {
    // Clear admin status when component unmounts or user logs out
    return () => {
      if (!user) {
        localStorage.removeItem('adminLoggedIn');
      }
    };
  }, [user]);
  
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  // If regular user is authenticated, check for admin role
  if (user) {
    const isAdmin = userRoles.includes('admin') || user?.email === "admin@greencity.com";
    
    if (!isAdmin && !adminLoggedIn) {
      return <Navigate to="/dashboard" replace />;
    }
    
    return <>{children}</>;
  }
  
  // If direct admin login through the special case
  if (adminLoggedIn) {
    return <>{children}</>;
  }
  
  // Not authenticated at all
  return <Navigate to="/signin" replace />;
};

export default AdminRoute;
