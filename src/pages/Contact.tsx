
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageSquare, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, HelpCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      subject: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Our team will get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-b from-gold-50 to-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-gray-700">
                We're here to help you grow your wealth confidently
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Options */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
              <Card className="bg-greencity-50 border-greencity-100 hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex flex-col items-center justify-center text-center">
                  <MessageSquare size={28} className="text-greencity-600 mb-3" />
                  <h3 className="font-medium">Live Chat</h3>
                  <p className="text-sm text-gray-500 mt-1 mb-3">Talk to us now</p>
                  <Button size="sm" variant="outline" className="mt-auto">Start Chat</Button>
                </CardContent>
              </Card>
              
              <Card className="bg-greencity-50 border-greencity-100 hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex flex-col items-center justify-center text-center">
                  <Mail size={28} className="text-greencity-600 mb-3" />
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-sm text-gray-500 mt-1 mb-3">Get a response</p>
                  <Button size="sm" variant="outline" className="mt-auto" asChild>
                    <a href="mailto:contact@greencity.com">Send Email</a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-greencity-50 border-greencity-100 hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex flex-col items-center justify-center text-center">
                  <Phone size={28} className="text-greencity-600 mb-3" />
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-sm text-gray-500 mt-1 mb-3">Direct assistance</p>
                  <Button size="sm" variant="outline" className="mt-auto" asChild>
                    <a href="tel:+2348001234567">+234 800 123 4567</a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-greencity-50 border-greencity-100 hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex flex-col items-center justify-center text-center">
                  <MapPin size={28} className="text-greencity-600 mb-3" />
                  <h3 className="font-medium">Visit Us</h3>
                  <p className="text-sm text-gray-500 mt-1 mb-3">Our office</p>
                  <Button size="sm" variant="outline" className="mt-auto">View Map</Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form & Info */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Form */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Send us a message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number (optional)
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject *
                        </label>
                        <Select value={formData.subject} onValueChange={handleSelectChange} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="account">Account Help</SelectItem>
                            <SelectItem value="investment">Investment Question</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="How can we help you?"
                          className="min-h-[120px]"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full green-gradient" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
              
              {/* Contact Information */}
              <div className="flex flex-col space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Office Location</h2>
                    <div className="space-y-3">
                      <div className="flex">
                        <MapPin className="mr-3 text-greencity-500 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-medium">Head Office</p>
                          <p className="text-gray-600">
                            123 Financial District, Victoria Island,<br />
                            Lagos, Nigeria
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <Phone className="mr-3 text-greencity-500 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-gray-600">+234 800 123 4567</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <Mail className="mr-3 text-greencity-500 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-600">contact@greencity.com</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <HelpCircle className="mr-3 text-greencity-500 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-medium">Support Hours</p>
                          <p className="text-gray-600">Mon–Fri: 9AM – 5PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Connect With Us</h2>
                    <p className="text-gray-600 mb-4">
                      Follow us on social media for updates, news, and investment insights
                    </p>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700"
                        aria-label="Facebook"
                      >
                        <Facebook size={20} />
                      </a>
                      <a 
                        href="#"  
                        className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700"
                        aria-label="Instagram"
                      >
                        <Instagram size={20} />
                      </a>
                      <a 
                        href="#"  
                        className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600"
                        aria-label="Twitter"
                      >
                        <Twitter size={20} />
                      </a>
                      <a 
                        href="#"  
                        className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg">Want to speak with an advisor?</h3>
                        <p className="text-gray-600">Schedule a free consultation</p>
                      </div>
                      <Button>Book Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
