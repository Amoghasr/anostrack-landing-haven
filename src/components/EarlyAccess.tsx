
import React from 'react';
import Section from './Section';
import AccessForm from './ui/AccessForm';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const EarlyAccess: React.FC = () => {
  const features = [
    "Priority access to our annotation services",
    "Exclusive synthetic data generation tools",
    "Customized onboarding and consultation",
    "Discounted pricing for early adopters"
  ];

  return (
    <Section 
      id="early-access" 
      className="bg-gradient-to-r from-anostrack-800 to-anostrack-700 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDUwIDEyNSA4My4zIDE3NSA3NSAxNDEuNyAxMDAgMTUwIDE1MCAxMDAgMTI1IDUwIDE1MCA1OC4zIDEwMCAyNSA3NSA3NSA4M3oiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] opacity-10 -z-10" />
      
      <div className="animate-on-scroll text-center mb-12">
        <span className="text-anostrack-300 font-medium text-sm uppercase tracking-wider">Limited Time Offer</span>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-4">Join Our Early Access Program</h2>
        <p className="text-anostrack-100 max-w-2xl mx-auto">
          Be among the first to experience our premium data annotation and synthetic data generation services. 
          Early access members receive exclusive benefits and priority support.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll space-y-4">
          <h3 className="text-xl font-medium mb-4">Early Access Benefits</h3>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-anostrack-300" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="animate-on-scroll glass-panel-dark rounded-xl p-6 backdrop-blur">
          <h3 className="text-xl font-medium mb-4 text-center">Get Started Today</h3>
          <p className="text-anostrack-100 mb-6 text-center">
            Register now for early access and one of our specialists will contact you shortly.
          </p>
          
          <AccessForm />
        </div>
      </div>
    </Section>
  );
};

export default EarlyAccess;
