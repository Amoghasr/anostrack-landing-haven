
import React from 'react';
import Section from './Section';
import { 
  CheckCircle2, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  Fingerprint
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface BenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const BenefitItem: React.FC<BenefitProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className="animate-on-scroll flex gap-4 p-4"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-full bg-anostrack-100 flex items-center justify-center text-anostrack-600">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Improved Model Accuracy",
      description: "Our high-quality annotations help your models achieve greater accuracy and reliability.",
      icon: <CheckCircle2 size={20} />,
      delay: 0
    },
    {
      title: "Faster Development Cycles",
      description: "Accelerate your AI development with our efficient data preparation services.",
      icon: <Zap size={20} />,
      delay: 100
    },
    {
      title: "Cost Efficiency",
      description: "Reduce development costs with our scalable, on-demand annotation services.",
      icon: <TrendingUp size={20} />,
      delay: 200
    },
    {
      title: "Enhanced Data Privacy",
      description: "Our synthetic data solutions help you develop models while preserving privacy.",
      icon: <Shield size={20} />,
      delay: 300
    },
    {
      title: "Diverse Training Data",
      description: "Access diverse, representative datasets that improve model robustness and fairness.",
      icon: <Users size={20} />,
      delay: 400
    },
    {
      title: "Domain Expertise",
      description: "Benefit from our team's specialized knowledge across various industries and use cases.",
      icon: <Fingerprint size={20} />,
      delay: 500
    }
  ];

  return (
    <Section id="benefits" className="bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-12">
        <span className="text-anostrack-600 font-medium text-sm uppercase tracking-wider animate-on-scroll">Why Choose Us</span>
        <h2 className="section-heading animate-on-scroll mt-2">The Anostrack Advantage</h2>
        <p className="section-subheading animate-on-scroll">
          Partner with us to experience the numerous benefits our data services bring to your AI development
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <BenefitItem key={index} {...benefit} />
        ))}
      </div>
    </Section>
  );
};

export default Benefits;
