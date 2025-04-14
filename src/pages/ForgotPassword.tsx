
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { forgotPassword, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await forgotPassword(email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <span className="text-3xl font-playfair font-bold text-greencity-500">Green<span className="text-gold-500">City</span></span>
          </Link>
        </div>
        
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="p-6">
            <div className="space-y-6">
              {!submitted ? (
                <>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold">Reset Your Password</h3>
                    <p className="text-gray-500 mt-1">We'll send you a link to reset your password</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full green-gradient hover:opacity-90" 
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Reset Link'}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-greencity-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Check Your Email</h3>
                  <p className="text-gray-500 mb-4">
                    We've sent a password reset link to <span className="font-medium">{email}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Didn't receive the email? Check your spam folder or{' '}
                    <button 
                      type="button" 
                      className="text-greencity-500 hover:underline"
                      onClick={() => setSubmitted(false)}
                    >
                      try again
                    </button>
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <Link to="/signin" className="inline-flex items-center text-sm text-gray-600 hover:text-greencity-500">
            <ArrowLeft size={16} className="mr-1" /> Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
