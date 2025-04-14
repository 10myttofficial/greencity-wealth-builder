
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-playfair font-bold text-greencity-500">Green<span className="text-gold-500">City</span></span>
            </Link>
            <p className="text-gray-600 text-sm">
              Empowering individuals and institutions with innovative, secure, and tailored financial solutions that drive sustainable wealth creation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-greencity-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-greencity-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-greencity-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-greencity-500">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-600 hover:text-greencity-500">Products</Link></li>
              <li><Link to="/portfolio" className="text-gray-600 hover:text-greencity-500">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-greencity-500">About Us</Link></li>
              <li><Link to="/learn" className="text-gray-600 hover:text-greencity-500">Learning Hub</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-greencity-500">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><Link to="/products/mutual-funds" className="text-gray-600 hover:text-greencity-500">Mutual Funds</Link></li>
              <li><Link to="/products/treasury-linked-notes" className="text-gray-600 hover:text-greencity-500">Treasury Linked Notes</Link></li>
              <li><Link to="/products/portfolio-management" className="text-gray-600 hover:text-greencity-500">Portfolio Management</Link></li>
              <li><Link to="/products/fixed-income" className="text-gray-600 hover:text-greencity-500">Fixed Income Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="flex items-start">
              <MapPin size={18} className="text-greencity-500 mt-1 mr-2" />
              <p className="text-gray-600">123 Financial District, Lagos, Nigeria</p>
            </div>
            <div className="flex items-center">
              <Phone size={18} className="text-greencity-500 mr-2" />
              <p className="text-gray-600">+234 800 123 4567</p>
            </div>
            <div className="flex items-center">
              <Mail size={18} className="text-greencity-500 mr-2" />
              <p className="text-gray-600">contact@greencity.com</p>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 GreenCity Financials. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-greencity-500">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-greencity-500">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-greencity-500">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
