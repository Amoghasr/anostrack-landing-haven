
import React from 'react';
import Section from './Section';
import { Database, Layers, Brain, LineChart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className={cn(
        "animate-on-scroll p-6 md:p-8 rounded-xl bg-white border border-gray-100",
        "shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-lg bg-anostrack-100 flex items-center justify-center text-anostrack-600 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Data Annotation",
      description: "High-quality, human-in-the-loop data annotation services across multiple data types including text, images, and video.",
      icon: <Database size={26} />,
      delay: 0
    },
    {
      title: "Synthetic Data",
      description: "Generate realistic, diverse synthetic data to augment your training datasets and improve model performance.",
      icon: <Layers size={26} />,
      delay: 100
    },
    {
      title: "Model Evaluation",
      description: "Comprehensive evaluation of your AI models to identify biases, gaps, and areas for improvement.",
      icon: <LineChart size={26} />,
      delay: 200
    },
    {
      title: "Custom Solutions",
      description: "Tailored data solutions designed to meet the specific needs of your AI development projects.",
      icon: <Brain size={26} />,
      delay: 300
    }
  ];

  return (
    <Section id="services" className="bg-gray-50">
      <div className="text-center mb-12">
        <span className="text-anostrack-600 font-medium text-sm uppercase tracking-wider animate-on-scroll">Our Services</span>
        <h2 className="section-heading animate-on-scroll mt-2">Comprehensive Data Solutions</h2>
        <p className="section-subheading animate-on-scroll">We provide end-to-end data services to power your AI models with high-quality, diverse datasets</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </Section>
  );
};

export default Services;
