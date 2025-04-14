
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const VerifyEmail = () => {
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const { verifyOtp, loading } = useAuth();
  const location = useLocation();

  useEffect(() => {
    // Extract email from query string if present
    const params = new URLSearchParams(location.search);
    const emailParam = params.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      await verifyOtp(email, otp);
    }
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
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold">Verify Your Email</h3>
                <p className="text-gray-500 mt-1">Enter the code we sent to your email</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <InputOTP 
                      value={otp} 
                      onChange={setOtp} 
                      maxLength={6}
                      className="gap-3"
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full green-gradient hover:opacity-90" 
                  disabled={loading || otp.length !== 6}
                >
                  {loading ? 'Verifying...' : 'Verify Email'}
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Didn't receive a code?{' '}
                    <button 
                      type="button"
                      className="text-greencity-500 hover:underline"
                      onClick={() => {/* Implement resend logic */}}
                    >
                      Resend Code
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            <Link to="/signin" className="text-greencity-500 hover:underline">
              Back to Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
