
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu,
  Bell,
  User,
  ChevronDown,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-greencity-500">
              <Bell size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-greencity-500">
              <User size={20} />
            </Button>
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
            <div className="flex space-x-4 py-2">
              <Button variant="ghost" size="icon" className="text-gray-700">
                <Bell size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-700">
                <User size={20} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
