
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
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
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <div className="text-gray-600 mb-8">Effective Date: {formattedDate}</div>
            
            <div className="prose max-w-none">
              <p className="mb-6">
                At GreenCity Financials, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you use our application.
              </p>
            
              <h2 className="text-xl font-semibold mt-6">1. What We Collect</h2>
              <p>We collect:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Personal data (name, email, phone)</li>
                <li>Financial data (bank details, investment history)</li>
                <li>Technical data (IP address, device info, app usage)</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6">2. Why We Collect It</h2>
              <p>To:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide tailored investment services</li>
                <li>Communicate with you</li>
                <li>Comply with legal obligations</li>
                <li>Improve user experience</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6">3. Sharing Your Information</h2>
              <p>
                We do not sell your data. We may share with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Regulatory authorities</li>
                <li>Technology partners (under strict confidentiality)</li>
                <li>Payment providers (e.g., for withdrawals and funding)</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6">4. Data Security</h2>
              <p>
                We use encryption, secure servers, and 2FA to protect your data.
              </p>
              
              <h2 className="text-xl font-semibold mt-6">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Request access to your data</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent at any time</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6">6. Retention</h2>
              <p>
                We retain your data for as long as your account is active or as required by law.
              </p>
            </div>
            
            <Separator className="my-8" />
            
            <div className="text-sm text-gray-500">
              <p>
                Last updated: {formattedDate}
              </p>
              <p className="mt-2">
                If you have any questions about this Privacy Policy, please contact us at 
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

export default PrivacyPolicy;
