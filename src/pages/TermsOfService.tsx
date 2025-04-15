
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Separator } from '@/components/ui/separator';

const TermsOfService = () => {
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
            <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
            <div className="text-gray-600 mb-8">Effective Date: {formattedDate}</div>
            
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
              <p>
                Welcome to GreenCity Financials. By accessing or using our app, you agree to comply 
                with and be bound by these Terms of Service.
              </p>
              
              <h2 className="text-xl font-semibold mt-6">2. Eligibility</h2>
              <p>
                Users must be at least 18 years old and legally capable of entering binding agreements.
              </p>
              
              <h2 className="text-xl font-semibold mt-6">3. Use of Services</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Use the app for lawful purposes only.</li>
                <li>Provide accurate, complete, and updated information.</li>
                <li>Not attempt to hack, reverse-engineer, or exploit any aspect of the platform.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6">4. Investment Risk Notice</h2>
              <p>
                All investments carry risk. Past performance does not guarantee future results. 
                GreenCity Financials is not liable for market losses.
              </p>
              
              <h2 className="text-xl font-semibold mt-6">5. Fees & Charges</h2>
              <p>
                Service fees may apply and will be transparently disclosed prior to investment.
              </p>
              
              <h2 className="text-xl font-semibold mt-6">6. Account Suspension or Termination</h2>
              <p>
                We reserve the right to suspend or terminate accounts that breach these terms or 
                engage in suspicious activity.
              </p>
              
              <h2 className="text-xl font-semibold mt-6">7. Intellectual Property</h2>
              <p>
                All content on the app is the property of GreenCity Financials and may not be 
                reproduced without permission.
              </p>
              
              <h2 className="text-xl font-semibold mt-6">8. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the Federal Republic of Nigeria.
              </p>
            </div>
            
            <Separator className="my-8" />
            
            <div className="text-sm text-gray-500">
              <p>
                Last updated: {formattedDate}
              </p>
              <p className="mt-2">
                If you have any questions about these Terms, please contact us at 
                <a href="mailto:legal@greencity.com" className="text-greencity-500 ml-1">
                  legal@greencity.com
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

export default TermsOfService;
