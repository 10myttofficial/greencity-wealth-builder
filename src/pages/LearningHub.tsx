
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, BookOpen, LineChart, PiggyBank, Lightbulb, Award, ChevronRight } from 'lucide-react';
import FeaturedContentCarousel from '@/components/learning/FeaturedContentCarousel';
import LearningCategories from '@/components/learning/LearningCategories';
import LearningTracks from '@/components/learning/LearningTracks';

const LearningHub = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gold-50 to-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Learning Hub</h1>
              <p className="text-lg text-gray-700 mb-8">
                Grow your financial knowledge. Invest smarter.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search by topic, e.g. 'Mutual Funds'" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Featured Content</h2>
            <FeaturedContentCarousel />
          </div>
        </section>
        
        {/* Learning Resources */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="categories">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="categories">Categories</TabsTrigger>
                <TabsTrigger value="tracks">Learning Tracks</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
              </TabsList>
              
              <TabsContent value="categories">
                <LearningCategories />
              </TabsContent>
              
              <TabsContent value="tracks">
                <LearningTracks />
              </TabsContent>
              
              <TabsContent value="saved">
                <div className="text-center py-8">
                  <BookOpen className="mx-auto text-gray-400 mb-3" size={48} />
                  <h3 className="text-xl font-medium mb-2">No saved content yet</h3>
                  <p className="text-gray-500 mb-6">
                    Bookmark articles, lessons, and quizzes to access them later
                  </p>
                  <Button onClick={() => document.querySelector('[data-value="categories"]')?.click()}>
                    Browse Content
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Newsletter Signup */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto border-green-100">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:flex-1">
                    <h3 className="text-xl font-bold mb-2">Get weekly insights</h3>
                    <p className="text-gray-600 mb-4">
                      Stay updated with market news and investment tips straight to your inbox
                    </p>
                    <div className="flex gap-2">
                      <Input placeholder="Your email address" className="flex-1" />
                      <Button>Subscribe</Button>
                    </div>
                  </div>
                  <div className="md:flex-none text-greencity-500">
                    <Award size={72} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default LearningHub;
