
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });
  
  const { signUp, loading } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      return; // Passwords don't match validation (button should be disabled anyway)
    }
    
    await signUp(formData.email, formData.password, {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
    });
  };

  // Password strength check
  const passwordStrength = () => {
    const { password } = formData;
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
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold">Create Your Account</h3>
            <p className="text-gray-500 mt-1">Join GreenCity Financials today</p>
          </div>

          {step === 1 && (
            <form onSubmit={handleContinue} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full green-gradient hover:opacity-90"
              >
                Continue
              </Button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Create Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
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
                {formData.password && (
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
                        <span className={formData.password.length >= 8 ? "text-green-500" : "text-gray-400"}>
                          <CheckCircle2 size={12} className="inline mr-1" />
                        </span>
                        At least 8 characters
                      </li>
                      <li className="flex items-center">
                        <span className={/[A-Z]/.test(formData.password) ? "text-green-500" : "text-gray-400"}>
                          <CheckCircle2 size={12} className="inline mr-1" />
                        </span>
                        One uppercase letter
                      </li>
                      <li className="flex items-center">
                        <span className={/[0-9]/.test(formData.password) ? "text-green-500" : "text-gray-400"}>
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
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {formData.password && formData.confirmPassword && (
                  <p className={`text-xs mt-1 ${formData.password === formData.confirmPassword ? 'text-green-500' : 'text-red-500'}`}>
                    {formData.password === formData.confirmPassword ? 
                      'Passwords match' : 
                      'Passwords do not match'}
                  </p>
                )}
              </div>
              
              <div className="flex items-start space-x-2 my-4">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <Link to="/terms" className="text-greencity-500 hover:underline">Terms of Service</Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="text-greencity-500 hover:underline">Privacy Policy</Link>
                </label>
              </div>
              
              <div className="flex space-x-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 green-gradient hover:opacity-90" 
                  disabled={
                    loading || 
                    formData.password !== formData.confirmPassword || 
                    formData.password.length < 8
                  }
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </Button>
              </div>
            </form>
          )}
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/signin" className="text-greencity-500 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
