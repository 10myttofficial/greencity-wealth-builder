
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Menu,
  Bell,
  User,
  ChevronDown,
  X,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut, userRoles, loading } = useAuth();
  const navigate = useNavigate();
  
  const handleSignOut = async () => {
    await signOut();
  };
  
  const isAdmin = user && (userRoles.includes('admin') || user?.email === "admin@greencity.com");
  const isDepartmentAdmin = user && userRoles.includes('department_admin');

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-playfair font-bold text-greencity-500">Green<span className="text-gold-500">City</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/products" className="text-gray-700 hover:text-greencity-500 font-medium transition-colors">
            Products
          </Link>
          <Link to="/portfolio" className="text-gray-700 hover:text-greencity-500 font-medium transition-colors">
            Portfolio
          </Link>
          <Link to="/learn" className="text-gray-700 hover:text-greencity-500 font-medium transition-colors">
            Learn
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-greencity-500 font-medium transition-colors">
            About Us
          </Link>
          <div className="flex items-center space-x-2">
            {user && (
              <>
                {/* Notifications Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-700 hover:text-greencity-500 relative">
                      <Bell size={20} />
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80 bg-white">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="max-h-[300px] overflow-y-auto">
                      <NotificationItem 
                        title="Portfolio Update" 
                        description="Your Balanced Mutual Fund has grown by 2.5% this month." 
                        time="10 minutes ago" 
                      />
                      <NotificationItem 
                        title="Maturity Alert" 
                        description="Your Treasury Linked Note will mature in 3 days." 
                        time="2 hours ago" 
                      />
                      <NotificationItem 
                        title="New Investment Opportunity" 
                        description="Check out our new Fixed Income product with 12% annual returns." 
                        time="Yesterday" 
                      />
                    </div>
                    <DropdownMenuSeparator />
                    <div className="p-2">
                      <Button variant="outline" className="w-full">View All Notifications</Button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
            
            {/* User Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-greencity-500">
                  <User size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                {user ? (
                  <>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard" className="cursor-pointer">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/portfolio" className="cursor-pointer">My Portfolio</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer">Profile Settings</Link>
                    </DropdownMenuItem>
                    {isAdmin && (
                      <DropdownMenuItem asChild>
                        <Link to="/admin" className="cursor-pointer">Admin Dashboard</Link>
                      </DropdownMenuItem>
                    )}
                    {isDepartmentAdmin && (
                      <DropdownMenuItem asChild>
                        <Link to="/department-admin" className="cursor-pointer">Department Admin</Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-red-500">
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/signin" className="cursor-pointer">Sign In</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/signup" className="cursor-pointer">Sign Up</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/products" 
              className="py-2 text-gray-700 hover:text-greencity-500 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/portfolio" 
              className="py-2 text-gray-700 hover:text-greencity-500 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/learn" 
              className="py-2 text-gray-700 hover:text-greencity-500 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Learn
            </Link>
            <Link 
              to="/about" 
              className="py-2 text-gray-700 hover:text-greencity-500 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            {user && isDepartmentAdmin && (
              <Link
                to="/department-admin"
                className="py-2 text-greencity-500 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Department Admin
              </Link>
            )}
            <div className="flex space-x-4 py-2">
              {user ? (
                <>
                  <Button variant="ghost" size="icon" className="text-gray-700 relative">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-gray-700"
                    onClick={handleSignOut}
                  >
                    <LogOut size={20} />
                  </Button>
                </>
              ) : (
                <Link to="/signin" className="text-greencity-500 font-medium">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Helper component for notification items
const NotificationItem = ({ title, description, time }: { title: string, description: string, time: string }) => (
  <div className="px-2 py-3 hover:bg-gray-100 transition-colors cursor-pointer">
    <div className="flex justify-between items-start">
      <h5 className="font-medium text-sm">{title}</h5>
      <span className="text-xs text-gray-500">{time}</span>
    </div>
    <p className="text-xs text-gray-600 mt-1">{description}</p>
  </div>
);

export default Navbar;
