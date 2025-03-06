
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border-gray-300 bg-white focus:ring-anostrack-500 focus:border-anostrack-500"
      />
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-anostrack-500 hover:bg-anostrack-600 text-white min-w-[140px] transition-colors duration-300"
      >
        {isSubmitting ? 'Processing...' : 'Get Access'}
      </Button>
    </form>
  );
};

export default AccessForm;
