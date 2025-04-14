
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ChevronLeft, 
  User, 
  CreditCard, 
  FileText, 
  CheckCircle2, 
  Upload,
  HelpCircle
} from 'lucide-react';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  
  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      // Completed onboarding
      window.location.href = '/dashboard';
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <PersonalInformation />;
      case 2:
        return <IdentityVerification />;
      case 3:
        return <RiskAssessment />;
      case 4:
        return <BankInformation />;
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <span className="text-3xl font-playfair font-bold text-greencity-500">Green<span className="text-gold-500">City</span></span>
          </Link>
        </div>
        
        <Card className="shadow-lg border-gray-100">
          <CardContent className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-center">Complete Your Profile</h1>
              <p className="text-gray-500 text-center mt-2">Help us understand your needs better</p>
              
              <div className="flex justify-between items-center mt-8 mb-10 px-4">
                {[...Array(totalSteps)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div 
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        i + 1 < step ? 'bg-greencity-500 text-white' : 
                        i + 1 === step ? 'bg-greencity-100 text-greencity-600 border border-greencity-500' : 
                        'bg-gray-100 text-gray-500 border border-gray-300'
                      }`}
                    >
                      {i + 1 < step ? <CheckCircle2 size={20} /> : i + 1}
                    </div>
                    <p className={`text-xs mt-2 font-medium ${i + 1 <= step ? 'text-greencity-600' : 'text-gray-500'}`}>
                      {i === 0 ? 'Personal Info' : 
                       i === 1 ? 'Identity' : 
                       i === 2 ? 'Risk Profile' :
                       'Banking'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {renderStepContent()}
            
            <div className="flex justify-between mt-10">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
                className={step === 1 ? 'invisible' : ''}
              >
                <ChevronLeft size={16} className="mr-1" /> Back
              </Button>
              
              <Button 
                onClick={handleNext}
                className="green-gradient hover:opacity-90"
              >
                {step === totalSteps ? 'Complete' : 'Continue'} <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Need help? <a href="#" className="text-greencity-500 hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

const PersonalInformation = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="h-10 w-10 rounded-full bg-greencity-100 flex items-center justify-center">
          <User className="h-6 w-6 text-greencity-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Personal Information</h2>
          <p className="text-sm text-gray-500">Please provide your basic information</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="address">Street Address</Label>
          <Input id="address" placeholder="Enter your street address" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="Enter your city" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Input id="state" placeholder="Enter your state" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="zipcode">Postal Code</Label>
          <Input id="zipcode" placeholder="Enter postal code" />
        </div>
        
        <div className="md:col-span-2 space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input id="dob" type="date" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <select 
            id="gender"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Prefer not to say</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="nationality">Nationality</Label>
          <Input id="nationality" placeholder="Enter your nationality" />
        </div>
      </div>
    </div>
  );
};

const IdentityVerification = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="h-10 w-10 rounded-full bg-greencity-100 flex items-center justify-center">
          <CreditCard className="h-6 w-6 text-greencity-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Identity Verification</h2>
          <p className="text-sm text-gray-500">Please provide your identification details</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="bvn">Bank Verification Number (BVN)</Label>
          <Input id="bvn" placeholder="Enter your 11-digit BVN" />
          <p className="text-xs text-gray-500 mt-1">Your BVN helps us verify your identity securely</p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="nin">National Identification Number (NIN)</Label>
          <Input id="nin" placeholder="Enter your NIN" />
        </div>
        
        <div className="space-y-4">
          <Label>Valid ID Document</Label>
          
          <div className="space-y-2">
            <select 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select ID type</option>
              <option value="intl_passport">International Passport</option>
              <option value="drivers_license">Driver's License</option>
              <option value="national_id">National ID Card</option>
              <option value="voters_card">Voter's Card</option>
            </select>
          </div>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600 mb-2">Drag and drop or click to upload your ID</p>
            <p className="text-xs text-gray-500 mb-3">Supported formats: JPG, PNG, PDF (max 5MB)</p>
            <Button variant="outline" size="sm">Browse Files</Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <Label>Selfie Photo</Label>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600 mb-2">Upload a clear photo of your face</p>
            <p className="text-xs text-gray-500 mb-3">For identity verification purposes (max 5MB)</p>
            <Button variant="outline" size="sm">Take Photo or Browse</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RiskAssessment = () => {
  const [answers, setAnswers] = useState({
    investmentGoals: '',
    timeHorizon: '',
    riskTolerance: '',
    incomeLevel: '',
    investmentKnowledge: ''
  });
  
  const handleChange = (question: string, answer: string) => {
    setAnswers({
      ...answers,
      [question]: answer
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="h-10 w-10 rounded-full bg-greencity-100 flex items-center justify-center">
          <FileText className="h-6 w-6 text-greencity-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Risk Profile Assessment</h2>
          <p className="text-sm text-gray-500">Help us understand your investment preferences</p>
        </div>
      </div>
      
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="investmentGoals">What are your primary investment goals?</Label>
            <HelpCircle size={16} className="text-gray-400" />
          </div>
          <select 
            id="investmentGoals"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={answers.investmentGoals}
            onChange={(e) => handleChange('investmentGoals', e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="capital_preservation">Capital Preservation</option>
            <option value="income_generation">Income Generation</option>
            <option value="balanced_growth">Balanced Growth</option>
            <option value="aggressive_growth">Aggressive Growth</option>
          </select>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="timeHorizon">What is your investment time horizon?</Label>
            <HelpCircle size={16} className="text-gray-400" />
          </div>
          <select 
            id="timeHorizon"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={answers.timeHorizon}
            onChange={(e) => handleChange('timeHorizon', e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="less_than_1">Less than 1 year</option>
            <option value="1_to_3">1-3 years</option>
            <option value="3_to_5">3-5 years</option>
            <option value="5_to_10">5-10 years</option>
            <option value="more_than_10">More than 10 years</option>
          </select>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="riskTolerance">How would you describe your risk tolerance?</Label>
            <HelpCircle size={16} className="text-gray-400" />
          </div>
          <select 
            id="riskTolerance"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={answers.riskTolerance}
            onChange={(e) => handleChange('riskTolerance', e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="conservative">Conservative (Minimize risk and volatility)</option>
            <option value="moderate_conservative">Moderately Conservative</option>
            <option value="moderate">Moderate (Balance risk and returns)</option>
            <option value="moderate_aggressive">Moderately Aggressive</option>
            <option value="aggressive">Aggressive (Maximize returns, accept volatility)</option>
          </select>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="incomeLevel">What is your current annual income level?</Label>
            <HelpCircle size={16} className="text-gray-400" />
          </div>
          <select 
            id="incomeLevel"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={answers.incomeLevel}
            onChange={(e) => handleChange('incomeLevel', e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="below_1m">Below ₦1,000,000</option>
            <option value="1m_5m">₦1,000,000 - ₦5,000,000</option>
            <option value="5m_10m">₦5,000,000 - ₦10,000,000</option>
            <option value="10m_20m">₦10,000,000 - ₦20,000,000</option>
            <option value="above_20m">Above ₦20,000,000</option>
          </select>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="investmentKnowledge">How would you rate your investment knowledge?</Label>
            <HelpCircle size={16} className="text-gray-400" />
          </div>
          <select 
            id="investmentKnowledge"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={answers.investmentKnowledge}
            onChange={(e) => handleChange('investmentKnowledge', e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="novice">Novice (Limited understanding)</option>
            <option value="basic">Basic (Some understanding)</option>
            <option value="intermediate">Intermediate (Understand markets)</option>
            <option value="advanced">Advanced (Knowledgeable about investments)</option>
            <option value="expert">Expert (Professional experience)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const BankInformation = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="h-10 w-10 rounded-full bg-greencity-100 flex items-center justify-center">
          <CreditCard className="h-6 w-6 text-greencity-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Bank Information</h2>
          <p className="text-sm text-gray-500">For deposits and withdrawals</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="accountType">Account Type</Label>
          <select 
            id="accountType"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select account type</option>
            <option value="savings">Savings Account</option>
            <option value="current">Current Account</option>
            <option value="corporate">Corporate Account</option>
          </select>
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="bankName">Bank Name</Label>
          <select 
            id="bankName"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select bank</option>
            <option value="access">Access Bank</option>
            <option value="gtb">Guaranty Trust Bank</option>
            <option value="zenith">Zenith Bank</option>
            <option value="firstbank">First Bank</option>
            <option value="uba">United Bank for Africa</option>
            <option value="stanbic">Stanbic IBTC Bank</option>
            <option value="fidelity">Fidelity Bank</option>
            <option value="fcmb">First City Monument Bank</option>
          </select>
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="accountNumber">Account Number</Label>
          <Input id="accountNumber" placeholder="Enter 10-digit account number" />
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="accountName">Account Name</Label>
          <Input id="accountName" placeholder="Enter account name" />
          <p className="text-xs text-gray-500 mt-1">Account name must match your registered name</p>
        </div>
        
        <div className="bg-greencity-50 border border-greencity-100 rounded-lg p-4 mt-6">
          <div className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-greencity-500 mt-0.5 mr-2 flex-shrink-0" />
            <p className="text-sm text-gray-600">
              By providing your bank details, you authorize GreenCity Financials to process deposits and withdrawals to and from this account. For security reasons, we only allow withdrawals to verified bank accounts in your name.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
