
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface AccessFormProps {
  className?: string;
}

const AccessForm: React.FC<AccessFormProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Success', {
        description: 'You have been added to our early access list!'
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn(
        'flex flex-col sm:flex-row gap-3 max-w-md w-full mx-auto',
        className
      )}
    >
      <div className="flex-1 w-full">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          required
          className="border-gray-700 bg-anostrack-800 text-white focus:ring-anostrack-400 focus:border-anostrack-400 placeholder-gray-500"
        />
        {error && (
          <p className="text-red-400 text-sm mt-1 animate-fade-in-fast">{error}</p>
        )}
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-anostrack-500 hover:bg-anostrack-400 text-white min-w-[140px] transition-all duration-300 transform hover:scale-105"
      >
        {isSubmitting ? 'Processing...' : 'Get Access'}
      </Button>
    </form>
  );
};

export default AccessForm;
