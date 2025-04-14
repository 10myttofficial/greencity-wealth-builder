
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { resetPassword, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      return; // Passwords don't match validation
    }
    
    await resetPassword(password);
  };

  // Password strength check
  const passwordStrength = () => {
    if (!password) return '';
    if (password.length < 6) return 'Weak';
    if (password.length < 10) return 'Medium';
    return 'Strong';
  };

  const strength = passwordStrength();
  const strengthColor = {
    Weak: 'bg-red-500',
    Medium: 'bg-orange-500',
    Strong: 'bg-green-500',
    '': 'bg-gray-200',
  }[strength];

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
                <h3 className="text-2xl font-bold">Create New Password</h3>
                <p className="text-gray-500 mt-1">Your new password must be different from previous passwords</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">New Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </Button>
                  </div>
                  {password && (
                    <div className="mt-1">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 flex-1 rounded-full bg-gray-200">
                          <div 
                            className={`h-2 rounded-full ${strengthColor}`}
                            style={{ width: strength === 'Weak' ? '30%' : strength === 'Medium' ? '70%' : '100%' }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">{strength}</span>
                      </div>
                      <ul className="text-xs text-gray-500 mt-2 space-y-1">
                        <li className="flex items-center">
                          <span className={password.length >= 8 ? "text-green-500" : "text-gray-400"}>
                            <CheckCircle2 size={12} className="inline mr-1" />
                          </span>
                          At least 8 characters
                        </li>
                        <li className="flex items-center">
                          <span className={/[A-Z]/.test(password) ? "text-green-500" : "text-gray-400"}>
                            <CheckCircle2 size={12} className="inline mr-1" />
                          </span>
                          One uppercase letter
                        </li>
                        <li className="flex items-center">
                          <span className={/[0-9]/.test(password) ? "text-green-500" : "text-gray-400"}>
                            <CheckCircle2 size={12} className="inline mr-1" />
                          </span>
                          One number
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  {password && confirmPassword && (
                    <p className={`text-xs mt-1 ${password === confirmPassword ? 'text-green-500' : 'text-red-500'}`}>
                      {password === confirmPassword ? 
                        'Passwords match' : 
                        'Passwords do not match'}
                    </p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full green-gradient hover:opacity-90" 
                  disabled={loading || password !== confirmPassword || password.length < 8}
                >
                  {loading ? 'Updating...' : 'Reset Password'}
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Remember your password?{' '}
            <Link to="/signin" className="text-greencity-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
