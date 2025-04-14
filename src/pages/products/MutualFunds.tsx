
import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  DollarSign, 
  TrendingUp, 
  Layers, 
  DollarSign as DollarIcon, 
  Wallet, 
  LineChart,
  ShieldCheck
} from 'lucide-react';

const MutualFunds = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-greencity-50 to-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="mb-6 inline-block p-4 rounded-full bg-greencity-100">
                  <DollarSign size={40} className="text-greencity-600" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Mutual Funds</h1>
                <p className="text-lg text-gray-700 mb-6">
                  Let experts grow your wealth with diversified portfolios.
                </p>
                <Button className="green-gradient hover:opacity-90">
                  Invest Now
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white shadow-lg rounded-lg border border-gray-100 p-6">
                  <img 
                    src="/placeholder.svg" 
                    alt="Mutual Funds Illustration" 
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Are Mutual Funds Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold mb-6">What Are Mutual Funds?</h2>
              <p className="text-lg text-gray-600">
                Mutual funds are professionally managed investment pools that combine money from multiple investors to buy diversified assets like stocks, bonds, or other securities.
              </p>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="How Mutual Funds Work" 
                  className="w-full h-64 object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border border-greencity-100 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-greencity-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layers size={28} className="text-greencity-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Diversification</h3>
                  <p className="text-gray-600">Spread risk across multiple assets to reduce volatility</p>
                </CardContent>
              </Card>
              
              <Card className="border border-greencity-100 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-greencity-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LineChart size={28} className="text-greencity-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Expert Management</h3>
                  <p className="text-gray-600">Professionals who monitor markets and manage investments</p>
                </CardContent>
              </Card>
              
              <Card className="border border-greencity-100 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-greencity-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarIcon size={28} className="text-greencity-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Affordable Entry</h3>
                  <p className="text-gray-600">Start with as little as ₦10,000 to begin investing</p>
                </CardContent>
              </Card>
              
              <Card className="border border-greencity-100 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-greencity-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wallet size={28} className="text-greencity-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Liquidity</h3>
                  <p className="text-gray-600">Access to your investments when you need them</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Performance Snapshot */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Performance Snapshot</h2>
            
            <div className="max-w-4xl mx-auto">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Historical Performance</h3>
                    <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                      <LineChart size={32} className="text-gray-400 mr-2" />
                      <span className="text-gray-500">Performance Chart Placeholder</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-greencity-50 rounded-lg">
                      <p className="text-gray-600 mb-1">1 Year Return</p>
                      <p className="text-2xl font-bold text-greencity-700">+12.5%</p>
                    </div>
                    <div className="p-4 bg-greencity-50 rounded-lg">
                      <p className="text-gray-600 mb-1">3 Year Return</p>
                      <p className="text-2xl font-bold text-greencity-700">+38.2%</p>
                    </div>
                    <div className="p-4 bg-greencity-50 rounded-lg">
                      <p className="text-gray-600 mb-1">5 Year Return</p>
                      <p className="text-2xl font-bold text-greencity-700">+76.5%</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <span className="text-sm text-gray-500 italic">*Past performance is not indicative of future results</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Investment Plan Options */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Investment Plan Options</h2>
            
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Fund Types</h3>
                      <div className="space-y-4">
                        <Card className="border border-greencity-100">
                          <CardContent className="p-4">
                            <div className="flex items-center">
                              <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                              <h4 className="font-medium">Conservative Fund</h4>
                            </div>
                            <p className="mt-2 text-sm text-gray-600">Lower risk, stable returns</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="border border-gold-100">
                          <CardContent className="p-4">
                            <div className="flex items-center">
                              <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                              <h4 className="font-medium">Balanced Fund</h4>
                            </div>
                            <p className="mt-2 text-sm text-gray-600">Moderate risk, growth + income</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="border border-orange-100">
                          <CardContent className="p-4">
                            <div className="flex items-center">
                              <div className="h-3 w-3 rounded-full bg-orange-500 mr-2"></div>
                              <h4 className="font-medium">Growth Fund</h4>
                            </div>
                            <p className="mt-2 text-sm text-gray-600">Higher risk, higher growth potential</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Investment Options</h3>
                      <div className="space-y-4">
                        <p className="text-gray-600">Minimum Investment: ₦10,000</p>
                        <p className="text-gray-600">Investment Duration: Flexible</p>
                        <p className="text-gray-600">Contribution Frequency: One-time or recurring</p>
                        <Button className="w-full green-gradient hover:opacity-90">
                          Start Investing
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                  <AccordionTrigger className="text-left">How do mutual funds work?</AccordionTrigger>
                  <AccordionContent>
                    Mutual funds pool money from multiple investors to purchase a diversified portfolio of securities. Professional fund managers make investment decisions based on the fund's objectives. Each investor owns units or shares of the fund, representing a portion of the fund's holdings.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">What's the risk involved?</AccordionTrigger>
                  <AccordionContent>
                    All investments carry some level of risk. Mutual funds can fluctuate in value depending on market conditions and the assets they hold. However, diversification helps reduce risk compared to investing in individual securities. Different funds have different risk profiles: conservative funds have lower risk but potentially lower returns, while growth funds have higher risk with potentially higher returns.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Can I withdraw early?</AccordionTrigger>
                  <AccordionContent>
                    Yes, mutual funds generally allow you to redeem your shares at any time. However, some funds may have a minimum holding period or charge an exit fee for early redemption. The redemption process typically takes 2-3 business days for the funds to reach your account.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">Are the returns guaranteed?</AccordionTrigger>
                  <AccordionContent>
                    No, returns on mutual funds are not guaranteed. They depend on market performance and the fund manager's strategy. Past performance is not a guarantee of future results. However, over the long term, diversified mutual funds have historically provided positive returns.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 bg-gradient-to-r from-greencity-500 to-greencity-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Investing?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Begin your investment journey with as little as ₦10,000 and let our experts grow your wealth.
            </p>
            <Button className="bg-white text-greencity-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto">
              Start with ₦10,000
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MutualFunds;
