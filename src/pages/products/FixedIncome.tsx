
import React, { useState, useEffect } from 'react';
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
  PiggyBank, 
  Landmark, 
  Building, 
  FileText,
  BarChart4,
  Shield,
  Clock,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

const FixedIncome = () => {
  const [investmentAmount, setInvestmentAmount] = useState('50000');
  const [duration, setDuration] = useState('90');
  const [instrument, setInstrument] = useState('t-bills');
  
  const [estimatedReturn, setEstimatedReturn] = useState('');
  const [maturityDate, setMaturityDate] = useState('');
  
  // Calculate estimated returns and maturity date
  useEffect(() => {
    if (investmentAmount && duration) {
      const amount = parseFloat(investmentAmount);
      const days = parseInt(duration);
      
      // Simple interest calculation (for demonstration)
      // Different rates based on instrument
      let rate;
      switch (instrument) {
        case 't-bills':
          rate = 0.11; // 11% p.a.
          break;
        case 'g-bonds':
          rate = 0.13; // 13% p.a.
          break;
        case 'c-bonds':
          rate = 0.145; // 14.5% p.a.
          break;
        case 'c-papers':
          rate = 0.125; // 12.5% p.a.
          break;
        default:
          rate = 0.11;
      }
      
      const interest = amount * rate * (days / 365);
      const totalReturn = amount + interest;
      
      setEstimatedReturn(totalReturn.toFixed(2));
      
      // Calculate maturity date
      const today = new Date();
      const maturity = new Date(today);
      maturity.setDate(maturity.getDate() + parseInt(duration));
      
      setMaturityDate(maturity.toLocaleDateString('en-NG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }));
    }
  }, [investmentAmount, duration, instrument]);

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
                  <PiggyBank size={40} className="text-gold-600" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Fixed Income Investments</h1>
                <p className="text-lg text-gray-700 mb-6">
                  Earn predictable returns with minimal volatility.
                </p>
                <Button className="gold-gradient hover:opacity-90">
                  Explore Options
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white shadow-lg rounded-lg border border-gray-100 p-6">
                  <img 
                    src="/placeholder.svg" 
                    alt="Fixed Income Illustration" 
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Are Fixed Income Services? */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">What Are Fixed Income Services?</h2>
              <p className="text-lg text-gray-600 mb-8 text-center">
                Fixed income investments include treasury bills, government and corporate bonds, and other debt securities. They offer consistent income over a specified period — perfect for financial stability and long-term planning.
              </p>
              <p className="text-lg text-gold-600 font-medium text-center">
                Ideal for retirees and investors who prefer minimal risk.
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="mr-4 text-gold-500">
                      <BarChart4 size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Steady Returns</h3>
                      <p className="text-gray-600">
                        Predictable and consistent income with fixed interest rates.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="mr-4 text-gold-500">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Low Volatility</h3>
                      <p className="text-gray-600">
                        Minimal exposure to market fluctuations and economic cycles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="mr-4 text-gold-500">
                      <Landmark size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Strong Backing</h3>
                      <p className="text-gray-600">
                        Government and top-rated corporate guarantees for security.
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
                      <h3 className="text-xl font-semibold mb-2">Flexible Durations</h3>
                      <p className="text-gray-600">
                        Options ranging from 30 days to several years to fit your needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Instruments */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Investment Instruments</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border border-gold-100">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Landmark size={28} className="text-gold-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Treasury Bills</h3>
                    <p className="text-gray-600 mb-4">
                      Short-term government securities with high safety and good liquidity.
                    </p>
                    <div className="space-y-1 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Returns:</span>
                        <span className="font-medium">9-11% p.a.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Minimum:</span>
                        <span className="font-medium">₦50,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Duration:</span>
                        <span className="font-medium">91, 182, 364 days</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
                        Low Risk
                      </div>
                      <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
                        High Liquidity
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gold-100">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Building size={28} className="text-gold-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Government Bonds</h3>
                    <p className="text-gray-600 mb-4">
                      Mid to long-term government debt instruments with stable returns.
                    </p>
                    <div className="space-y-1 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Returns:</span>
                        <span className="font-medium">12-14% p.a.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Minimum:</span>
                        <span className="font-medium">₦100,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Duration:</span>
                        <span className="font-medium">2-10 years</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
                        Low Risk
                      </div>
                      <div className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
                        Medium Liquidity
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gold-100">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Building size={28} className="text-gold-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Corporate Bonds</h3>
                    <p className="text-gray-600 mb-4">
                      Company-issued debt securities with higher returns and slightly higher risk.
                    </p>
                    <div className="space-y-1 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Returns:</span>
                        <span className="font-medium">13-15% p.a.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Minimum:</span>
                        <span className="font-medium">₦250,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Duration:</span>
                        <span className="font-medium">3-7 years</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
                        Medium Risk
                      </div>
                      <div className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
                        Medium Liquidity
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gold-100">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <FileText size={28} className="text-gold-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Commercial Papers</h3>
                    <p className="text-gray-600 mb-4">
                      Short-term debt instruments issued by corporations for temporary capital needs.
                    </p>
                    <div className="space-y-1 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Returns:</span>
                        <span className="font-medium">11-13% p.a.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Minimum:</span>
                        <span className="font-medium">₦100,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Duration:</span>
                        <span className="font-medium">30-270 days</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
                        Medium Risk
                      </div>
                      <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
                        High Liquidity
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Income Planner Calculator */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Income Planner Calculator</h2>
            
            <div className="max-w-xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Instrument Type
                      </label>
                      <Select value={instrument} onValueChange={setInstrument}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select instrument" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="t-bills">Treasury Bills</SelectItem>
                          <SelectItem value="g-bonds">Government Bonds</SelectItem>
                          <SelectItem value="c-bonds">Corporate Bonds</SelectItem>
                          <SelectItem value="c-papers">Commercial Papers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
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
                          <SelectItem value="30">30 Days</SelectItem>
                          <SelectItem value="90">90 Days</SelectItem>
                          <SelectItem value="180">180 Days</SelectItem>
                          <SelectItem value="365">365 Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Principal Amount:</span>
                        <span className="font-semibold">₦{parseInt(investmentAmount).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Estimated Return:</span>
                        <span className="font-semibold text-gold-600">
                          ₦{(parseFloat(estimatedReturn) - parseFloat(investmentAmount)).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Total at Maturity:</span>
                        <span className="font-bold">₦{parseFloat(estimatedReturn).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Maturity Date:</span>
                        <span className="font-medium flex items-center">
                          <Calendar size={14} className="mr-1" /> {maturityDate}
                        </span>
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

        {/* How It Works */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-1/3 mb-8 md:mb-0 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Choose Your Instrument</h3>
                  <p className="text-gray-600">
                    Select from our range of fixed income options based on your goals.
                  </p>
                </div>
                
                <div className="hidden md:block">
                  <div className="w-12 h-1 bg-gold-300"></div>
                </div>
                
                <div className="md:w-1/3 mb-8 md:mb-0 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fund Your Investment</h3>
                  <p className="text-gray-600">
                    Add funds to your account and confirm your investment.
                  </p>
                </div>
                
                <div className="hidden md:block">
                  <div className="w-12 h-1 bg-gold-300"></div>
                </div>
                
                <div className="md:w-1/3 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Receive Returns</h3>
                  <p className="text-gray-600">
                    Collect periodic income or interest at maturity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Are fixed income investments safe?</AccordionTrigger>
                  <AccordionContent>
                    Fixed income investments are generally considered among the safest investment options available. Government instruments like Treasury Bills carry minimal risk as they are backed by the full faith and credit of the government. Corporate bonds and commercial papers have slightly higher risk depending on the issuer's creditworthiness. We perform thorough due diligence on all offerings to ensure safety.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">When do I receive interest?</AccordionTrigger>
                  <AccordionContent>
                    Interest payment schedules depend on the specific instrument. Treasury Bills and some Commercial Papers typically pay interest at maturity along with your principal. Government and Corporate Bonds may offer periodic coupon payments (quarterly, bi-annually, or annually) throughout the investment term. Your investment statement will clearly indicate the payment schedule for your chosen instrument.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Can I cash out before maturity?</AccordionTrigger>
                  <AccordionContent>
                    Yes, most fixed income investments can be liquidated before maturity, though this may affect your returns. Treasury Bills and Commercial Papers have secondary markets where they can be sold. For bonds, we can help find buyers if you need to exit early. Early redemption may incur a small fee or result in slightly reduced returns compared to holding until maturity.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">Is the income taxed?</AccordionTrigger>
                  <AccordionContent>
                    In Nigeria, interest income from fixed income investments is generally subject to withholding tax, currently at 10% for most instruments. This tax is typically deducted at source before interest payments are made to you. For corporate investors, this withholding tax is usually considered as an advance payment of your company income tax. We recommend consulting with a tax professional for advice specific to your situation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Actual Client Success */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
            
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="bg-gray-100 w-full aspect-square rounded-full"></div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2">How Mr. Adeyemi Earns Monthly Income in Retirement</h3>
                      <p className="text-gray-600 mb-4">
                        "After 35 years in the civil service, I was concerned about maintaining my lifestyle in retirement. GreenCity's fixed income portfolio allows me to receive predictable monthly income from my pension lump sum investment. The stability gives me peace of mind while the returns help me maintain my standard of living."
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Mr. Adeyemi's Strategy:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 size={18} className="text-gold-500 mt-0.5 mr-2" />
                            <span>70% in Government Bonds for long-term stability</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 size={18} className="text-gold-500 mt-0.5 mr-2" />
                            <span>20% in Corporate Bonds for enhanced yields</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 size={18} className="text-gold-500 mt-0.5 mr-2" />
                            <span>10% in Treasury Bills for liquidity needs</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 bg-gradient-to-r from-gold-500 to-gold-600 text-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Earn Steady Returns?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start building a reliable income stream with our fixed income investments.
            </p>
            <Button className="bg-white text-gold-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto">
              Start Earning Steady Returns
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FixedIncome;
