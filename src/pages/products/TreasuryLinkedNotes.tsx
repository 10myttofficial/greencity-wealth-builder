
import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  Shield, 
  Lock, 
  Clock, 
  CreditCard,
  CheckCircle2,
} from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

const TreasuryLinkedNotes = () => {
  const [investmentAmount, setInvestmentAmount] = React.useState('50000');
  const [duration, setDuration] = React.useState('90');
  const [projectedReturn, setProjectedReturn] = React.useState('');

  // Calculate projected return when investment amount or duration changes
  React.useEffect(() => {
    if (investmentAmount && duration) {
      const amount = parseFloat(investmentAmount);
      const days = parseInt(duration);
      
      // Simple interest calculation (for demonstration)
      // Assume annual rate of 12% for 90 days, 13% for 180 days, 14% for 365 days
      let rate;
      switch (days) {
        case 90:
          rate = 0.12;
          break;
        case 180:
          rate = 0.13;
          break;
        case 365:
          rate = 0.14;
          break;
        default:
          rate = 0.12;
      }
      
      const interest = amount * rate * (days / 365);
      const totalReturn = amount + interest;
      
      setProjectedReturn(totalReturn.toFixed(2));
    }
  }, [investmentAmount, duration]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gold-50 to-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="mb-6 inline-block p-4 rounded-full bg-gold-100">
                  <Shield size={40} className="text-gold-600" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Treasury Linked Notes (TLNs)</h1>
                <p className="text-lg text-gray-700 mb-6">
                  Secure your capital with government-backed investments.
                </p>
                <Button className="gold-gradient hover:opacity-90">
                  Invest Securely
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white shadow-lg rounded-lg border border-gray-100 p-6">
                  <img 
                    src="/placeholder.svg" 
                    alt="Treasury Linked Notes Illustration" 
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Are TLNs Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">What Are Treasury Linked Notes?</h2>
              <p className="text-lg text-gray-600 mb-8 text-center">
                TLNs are short- to medium-term debt instruments backed by government securities. They offer competitive fixed returns while prioritizing capital preservation.
              </p>
              <p className="text-lg text-gold-600 font-medium text-center">
                Ideal for conservative investors and those focused on stability.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="mr-4 text-gold-500">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Government-Backed Security</h3>
                      <p className="text-gray-600">
                        Your investment is secured by government securities, providing a high level of safety and stability.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="mr-4 text-gold-500">
                      <CreditCard size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Fixed, Predictable Returns</h3>
                      <p className="text-gray-600">
                        Know exactly what you'll earn before you invest, with competitive interest rates.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="mr-4 text-gold-500">
                      <Lock size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Capital Preservation Focus</h3>
                      <p className="text-gray-600">
                        Designed to protect your principal investment while generating returns.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="mr-4 text-gold-500">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Flexible Duration Options</h3>
                      <p className="text-gray-600">
                        Choose from 90, 180, or 365-day terms to match your financial timeline.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interest Calculator */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Interest Calculator</h2>
            
            <div className="max-w-xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Amount to Invest (₦)
                      </label>
                      <Input
                        type="number"
                        value={investmentAmount}
                        onChange={(e) => setInvestmentAmount(e.target.value)}
                        min="50000"
                        step="10000"
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">Minimum: ₦50,000</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Duration
                      </label>
                      <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="90">90 Days (3 Months)</SelectItem>
                          <SelectItem value="180">180 Days (6 Months)</SelectItem>
                          <SelectItem value="365">365 Days (1 Year)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Principal Amount:</span>
                        <span className="font-semibold">₦{parseInt(investmentAmount).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Interest Earned:</span>
                        <span className="font-semibold text-gold-600">
                          ₦{(parseFloat(projectedReturn) - parseFloat(investmentAmount)).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-lg">
                        <span className="font-medium">Total at Maturity:</span>
                        <span className="font-bold">₦{parseFloat(projectedReturn).toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full gold-gradient hover:opacity-90">
                      Proceed to Invest
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Maturity & Withdrawal Info */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Maturity & Withdrawal</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-3">Interest Payment</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle2 size={20} className="text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Interest paid at maturity along with the principal</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 size={20} className="text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Options for automatic reinvestment available</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 size={20} className="text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Direct deposit to your connected bank account</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-3">Early Withdrawal</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle2 size={20} className="text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Early withdrawal allowed with minimal penalty</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 size={20} className="text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Pro-rated interest for the period invested</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 size={20} className="text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Processing time of 2-3 business days</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Are TLNs safe?</AccordionTrigger>
                  <AccordionContent>
                    Yes, TLNs are one of the safest investment options available. They are backed by government securities, which significantly reduces risk. While no investment is 100% risk-free, TLNs are considered among the most secure options in the market.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">How long is the lock-in period?</AccordionTrigger>
                  <AccordionContent>
                    TLNs have flexible durations of 90 days (3 months), 180 days (6 months), or 365 days (1 year). You can choose the option that best fits your financial timeline. While early withdrawal is possible, it's generally recommended to hold until maturity for optimal returns.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Can I access my funds early?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can withdraw your funds before maturity if needed. However, there may be a small penalty fee, and interest will be pro-rated based on the actual investment period. Early withdrawal requests typically take 2-3 business days to process.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">What documents do I need to get started?</AccordionTrigger>
                  <AccordionContent>
                    To invest in TLNs, you'll need basic KYC documents: a valid government ID (National ID, driver's license, or international passport), proof of address (utility bill not older than 3 months), and your BVN. If you've already completed KYC on our platform, you can invest immediately.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 bg-gradient-to-r from-gold-500 to-gold-600 text-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Investment?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start with just ₦50,000 and enjoy the security of government-backed returns.
            </p>
            <Button className="bg-white text-gold-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto">
              Invest in TLNs Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TreasuryLinkedNotes;
