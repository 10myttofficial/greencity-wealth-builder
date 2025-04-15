
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Separator } from '@/components/ui/separator';

const CookiePolicy = () => {
  // Current date for the effective date
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
            <div className="text-gray-600 mb-8">Effective Date: {formattedDate}</div>
            
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mt-6">1. What Are Cookies?</h2>
              <p>
                Cookies are small files stored on your device that help us enhance your browsing experience.
              </p>
              
              <h2 className="text-xl font-semibold mt-6">2. How We Use Cookies</h2>
              <p>We use cookies to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Remember your preferences</li>
                <li>Analyze traffic and usage patterns</li>
                <li>Improve platform performance</li>
                <li>Deliver relevant content</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6">3. Types of Cookies</h2>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for the app to function</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users engage</li>
                <li><strong>Preference Cookies:</strong> Store user settings and language</li>
                <li><strong>Marketing Cookies:</strong> (Only if used) Track engagement with ads or promos</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6">4. Managing Cookies</h2>
              <p>
                You can disable cookies in your browser settings, though some features may be affected.
              </p>
              
              <h3 className="text-lg font-medium mt-4">How to Manage Cookies in Popular Browsers</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
              </ul>
            </div>
            
            <Separator className="my-8" />
            
            <div className="text-sm text-gray-500">
              <p>
                Last updated: {formattedDate}
              </p>
              <p className="mt-2">
                If you have any questions about this Cookie Policy, please contact us at 
                <a href="mailto:privacy@greencity.com" className="text-greencity-500 ml-1">
                  privacy@greencity.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
