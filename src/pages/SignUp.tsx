
import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/auth/SignUpForm';

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <span className="text-3xl font-playfair font-bold text-greencity-500">Green<span className="text-gold-500">City</span></span>
          </Link>
        </div>
        
        <SignUpForm />
        
        <div className="text-center mt-8">
          <Link to="/" className="text-sm text-gray-600 hover:text-greencity-500">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
