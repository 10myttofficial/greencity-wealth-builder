
import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  LineChart, 
  BarChart4, 
  TrendingUp,
  Users,
  BarChart,
  Eye,
  Sliders,
  Clock
} from 'lucide-react';

const PortfolioManagement = () => {
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
                  <LineChart size={40} className="text-greencity-600" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Tailored Portfolio Management</h1>
                <p className="text-lg text-gray-700 mb-6">
                  We align your investments with your unique goals.
                </p>
                <Button className="green-gradient hover:opacity-90">
                  Get Started
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white shadow-lg rounded-lg border border-gray-100 p-6">
                  <img 
                    src="/placeholder.svg" 
                    alt="Portfolio Management Illustration" 
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What It Offers */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">What It Offers</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our portfolio management service creates custom investment strategies based on your financial goals, risk appetite, and investment timeline. You get expert oversight, regular reviews, and proactive rebalancing.
              </p>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border border-greencity-100 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-greencity-50 flex items-center justify-center mb-4">
                    <Sliders className="h-6 w-6 text-greencity-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Strategy</h3>
                  <p className="text-gray-600">
                    Investment approach tailored to your unique goals, timeline, and risk tolerance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-greencity-100 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-greencity-50 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-greencity-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Active Monitoring</h3>
                  <p className="text-gray-600">
                    Continuous oversight and periodic rebalancing to optimize performance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-greencity-100 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-greencity-50 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-greencity-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Access</h3>
                  <p className="text-gray-600">
                    Direct communication with portfolio managers for guidance and updates.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-greencity-100 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-greencity-50 flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-greencity-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
                  <p className="text-gray-600">
                    Real-time insights and detailed reports on your portfolio's performance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-greencity-100 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-greencity-50 flex items-center justify-center mb-4">
                    <BarChart4 className="h-6 w-6 text-greencity-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Asset Allocation</h3>
                  <p className="text-gray-600">
                    Risk-adjusted distribution across asset classes for optimal returns.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-greencity-100 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-greencity-50 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-greencity-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Long-term Planning</h3>
                  <p className="text-gray-600">
                    Strategic growth planning aligned with your life goals and milestones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Types */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Portfolio Types</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border border-green-100 hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="h-2 bg-green-500 rounded-full mb-6"></div>
                  <h3 className="text-xl font-semibold mb-2">Conservative Portfolio</h3>
                  <p className="text-gray-600 mb-4">
                    Low risk, steady income focused strategy for capital preservation.
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Ideal for:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Retirees seeking income</li>
                      <li>• Risk-averse investors</li>
                      <li>• Short to medium timeframes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Asset Mix:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2/3">
                          <span className="text-sm text-gray-600">Bonds & TLNs</span>
                        </div>
                        <div className="w-1/3 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{width: '60%'}}></div>
                        </div>
                        <span className="ml-2 text-sm">60%</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-2/3">
                          <span className="text-sm text-gray-600">Fixed Income</span>
                        </div>
                        <div className="w-1/3 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{width: '30%'}}></div>
                        </div>
                        <span className="ml-2 text-sm">30%</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-2/3">
                          <span className="text-sm text-gray-600">Equities</span>
                        </div>
                        <div className="w-1/3 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{width: '10%'}}></div>
                        </div>
                        <span className="ml-2 text-sm">10%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-yellow-100 hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="h-2 bg-yellow-500 rounded-full mb-6"></div>
                  <h3 className="text-xl font-semibold mb-2">Balanced Portfolio</h3>
                  <p className="text-gray-600 mb-4">
                    Moderate risk, diversified approach for growth and income.
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Ideal for:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Mid-career professionals</li>
                      <li>• Balanced risk tolerance</li>
                      <li>• Medium to long timeframes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Asset Mix:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2/3">
                          <span className="text-sm text-gray-600">Equities</span>
                        </div>
                        <div className="w-1/3 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500 rounded-full" style={{width: '50%'}}></div>
                        </div>
                        <span className="ml-2 text-sm">50%</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-2/3">
                          <span className="text-sm text-gray-600">Bonds & TLNs</span>
                        </div>
                        <div className="w-1/3 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500 rounded-full" style={{width: '30%'}}></div>
                        </div>
                        <span className="ml-2 text-sm">30%</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-2/3">
                          <span className="text-sm text-gray-600">Fixed Income</span>
                        </div>
                        <div className="w-1/3 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500 rounded-full" style={{width: '20%'}}></div>
                        </div>
                        <span className="ml-2 text-sm">20%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-orange-100 hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="h-2 bg-orange-500 rounded-full mb-6"></div>
                  <h3 className="text-xl font-semibold mb-2">Aggressive Portfolio</h3>
                  <p className="text-gray-600 mb-4">
                    Higher risk strategy focused on maximum growth potential.
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Ideal for:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Young investors</li>
                      <li>• Higher risk tolerance</li>
                      <li>• Long-term investment horizons</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Asset Mix:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2/3">
                          <span className="text-sm text-gray-600">Equities</span>
                        </div>
                        <div className="w-1/3 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500 rounded-full" style={{width: '70%'}}></div>
                        </div>
                        <span className="ml-2 text-sm">70%</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-2/3">
                          <span className="text-sm text-gray-600">Bonds & TLNs</span>
                        </div>
                        <div className="w-1/3 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500 rounded-full" style={{width: '20%'}}></div>
                        </div>
                        <span className="ml-2 text-sm">20%</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-2/3">
                          <span className="text-sm text-gray-600">Alt Investments</span>
                        </div>
                        <div className="w-1/3 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500 rounded-full" style={{width: '10%'}}></div>
                        </div>
                        <span className="ml-2 text-sm">10%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Onboarding Flow */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Onboarding Process</h2>
            
            <div className="flex flex-col md:flex-row max-w-4xl mx-auto">
              <div className="flex flex-col items-center md:w-1/4 mb-6 md:mb-0">
                <div className="bg-greencity-100 h-16 w-16 rounded-full flex items-center justify-center text-greencity-700 font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Risk Assessment</h3>
                <p className="text-center text-gray-600">Complete our detailed questionnaire</p>
              </div>
              
              <div className="hidden md:block md:w-[10%] self-center">
                <div className="h-1 bg-gray-300 w-full"></div>
              </div>
              
              <div className="flex flex-col items-center md:w-1/4 mb-6 md:mb-0">
                <div className="bg-greencity-100 h-16 w-16 rounded-full flex items-center justify-center text-greencity-700 font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Goal Setting</h3>
                <p className="text-center text-gray-600">Define your financial objectives</p>
              </div>
              
              <div className="hidden md:block md:w-[10%] self-center">
                <div className="h-1 bg-gray-300 w-full"></div>
              </div>
              
              <div className="flex flex-col items-center md:w-1/4 mb-6 md:mb-0">
                <div className="bg-greencity-100 h-16 w-16 rounded-full flex items-center justify-center text-greencity-700 font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Strategy Creation</h3>
                <p className="text-center text-gray-600">Receive customized recommendations</p>
              </div>
              
              <div className="hidden md:block md:w-[10%] self-center">
                <div className="h-1 bg-gray-300 w-full"></div>
              </div>
              
              <div className="flex flex-col items-center md:w-1/4">
                <div className="bg-greencity-100 h-16 w-16 rounded-full flex items-center justify-center text-greencity-700 font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Ongoing Monitoring</h3>
                <p className="text-center text-gray-600">Regular reviews and adjustments</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button className="green-gradient hover:opacity-90">
                Begin Risk Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* Performance Showcase */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Performance Showcase</h2>
            
            <div className="max-w-4xl mx-auto mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Historical Performance</h3>
                  <p className="text-sm text-gray-500 mb-6">
                    *Simulated performance based on our portfolio strategies. Past performance is not indicative of future results.
                  </p>
                  
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp size={32} className="text-gray-400 mr-2" />
                    <span className="text-gray-500">Performance Chart Placeholder</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-greencity-50 rounded-lg">
                      <p className="text-gray-600 text-sm">Conservative</p>
                      <p className="text-xl font-bold text-greencity-700">+7.2% <span className="text-sm font-normal">annually</span></p>
                    </div>
                    
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <p className="text-gray-600 text-sm">Balanced</p>
                      <p className="text-xl font-bold text-yellow-700">+10.5% <span className="text-sm font-normal">annually</span></p>
                    </div>
                    
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <p className="text-gray-600 text-sm">Aggressive</p>
                      <p className="text-xl font-bold text-orange-700">+14.8% <span className="text-sm font-normal">annually</span></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-center">Client Testimonials</h3>
                
                <div className="mb-6 p-6 bg-white rounded-md shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-medium">Sarah O.</p>
                      <p className="text-sm text-gray-600">Balanced Portfolio Client</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "The portfolio management team at GreenCity has been exceptional. They took the time to understand my goals and created a strategy that's been consistently performing well."
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-md shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-medium">Michael T.</p>
                      <p className="text-sm text-gray-600">Aggressive Portfolio Client</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "I've been impressed with the regular updates and transparent reporting. The performance has exceeded my expectations, and I appreciate their proactive approach."
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
                  <AccordionTrigger className="text-left">How do you create a custom strategy?</AccordionTrigger>
                  <AccordionContent>
                    We start with a comprehensive assessment of your financial goals, risk tolerance, investment timeline, and current financial situation. Our team of expert portfolio managers then designs a personalized investment strategy that aligns with your specific needs. This includes selecting the right mix of asset classes, investment vehicles, and rebalancing schedules.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">What's the minimum investment amount?</AccordionTrigger>
                  <AccordionContent>
                    Our portfolio management service has a minimum investment requirement of ₦1,000,000. This allows us to properly diversify your holdings across various asset classes and create a truly personalized strategy. For clients looking to start with a smaller amount, we recommend our mutual funds offerings.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Can I speak to a manager?</AccordionTrigger>
                  <AccordionContent>
                    Yes, all portfolio management clients have direct access to their assigned portfolio manager. You can schedule regular review meetings (quarterly or as needed) to discuss your portfolio performance, ask questions, or make adjustments to your strategy. Your manager is also available for urgent inquiries via email or scheduled calls.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">How often is my portfolio reviewed?</AccordionTrigger>
                  <AccordionContent>
                    We conduct formal quarterly reviews of all managed portfolios, during which we assess performance, market conditions, and alignment with your goals. We also perform continuous monitoring and make adjustments as needed in response to significant market events or changes in your circumstances. You'll receive detailed quarterly reports and have access to real-time performance data through our online portal.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 bg-gradient-to-r from-greencity-500 to-greencity-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for a Personalized Investment Strategy?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start your journey to financial success with expert guidance tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-greencity-600 hover:bg-gray-100">
                Build My Portfolio
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioManagement;
