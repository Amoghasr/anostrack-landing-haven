
import React from 'react';
import Section from './Section';
import { 
  ClipboardList, 
  Database, 
  CheckCircle, 
  BarChart4 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Requirements Analysis",
      description: "We work closely with you to understand your specific data needs and project requirements.",
      icon: <ClipboardList size={28} className="text-white" />,
      delay: 0
    },
    {
      id: 2,
      title: "Data Preparation & Annotation",
      description: "Our team of experts prepares and annotates your data with precision and attention to detail.",
      icon: <Database size={28} className="text-white" />,
      delay: 200
    },
    {
      id: 3,
      title: "Quality Assurance",
      description: "Rigorous quality checks ensure your data meets the highest standards of accuracy and reliability.",
      icon: <CheckCircle size={28} className="text-white" />,
      delay: 400
    },
    {
      id: 4,
      title: "Delivery & Continuous Improvement",
      description: "We deliver your annotated data and provide ongoing support to optimize your AI models.",
      icon: <BarChart4 size={28} className="text-white" />,
      delay: 600
    }
  ];

  return (
    <Section id="process" className="bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-anostrack-50/50 to-transparent -z-10" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-anostrack-50/50 to-transparent -z-10" />
      
      <div className="text-center mb-16">
        <span className="text-anostrack-600 font-medium text-sm uppercase tracking-wider animate-on-scroll">How We Work</span>
        <h2 className="section-heading animate-on-scroll mt-2">Our Streamlined Process</h2>
        <p className="section-subheading animate-on-scroll">
          Our systematic approach ensures efficient, high-quality data annotation and synthetic data generation
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-anostrack-100 hidden md:block" />
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={cn(
                  "animate-on-scroll flex flex-col md:flex-row md:items-center",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right"
                )}
                style={{ transitionDelay: `${step.delay}ms` }}
              >
                {/* Desktop Circle with number */}
                <div className="hidden md:flex items-center justify-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-anostrack-500 flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className={cn(
                  "flex-1 p-6 bg-white rounded-lg shadow-sm border border-gray-100",
                  "hover:shadow-md transition-all duration-300",
                  index % 2 === 0 ? "md:mr-10" : "md:ml-10"
                )}>
                  {/* Mobile Circle with number */}
                  <div className="md:hidden w-12 h-12 rounded-full bg-anostrack-500 flex items-center justify-center mb-4 shadow-md">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Process;
