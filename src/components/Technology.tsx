
import React from 'react';
import Section from './Section';
import { Braces, Cpu, Network, Database, LineChart, Link2, BarChart4 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Technology: React.FC = () => {
  const technologies = [
    {
      name: "Computer Vision",
      icon: <Cpu size={24} />,
      color: "bg-blue-100 text-blue-600",
      delay: 0
    },
    {
      name: "Natural Language Processing",
      icon: <Braces size={24} />,
      color: "bg-green-100 text-green-600",
      delay: 100
    },
    {
      name: "Deep Learning",
      icon: <Network size={24} />,
      color: "bg-purple-100 text-purple-600",
      delay: 200
    },
    {
      name: "Big Data Processing",
      icon: <Database size={24} />,
      color: "bg-orange-100 text-orange-600",
      delay: 300
    },
    {
      name: "Predictive Analytics",
      icon: <LineChart size={24} />,
      color: "bg-red-100 text-red-600",
      delay: 400
    },
    {
      name: "API Integration",
      icon: <Link2 size={24} />,
      color: "bg-indigo-100 text-indigo-600",
      delay: 500
    },
    {
      name: "Data Visualization",
      icon: <BarChart4 size={24} />,
      color: "bg-teal-100 text-teal-600",
      delay: 600
    }
  ];

  return (
    <Section id="technology" className="bg-white">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 animate-on-scroll">
          <span className="text-anostrack-600 font-medium text-sm uppercase tracking-wider">
            Advanced Technology
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 mt-2">
            Cutting-Edge Solutions for Modern AI Challenges
          </h2>
          <p className="text-gray-600 mb-6">
            At Anostrack AI, we leverage the latest technologies and methodologies to deliver premium data annotation 
            and synthetic data generation services. Our platform combines human expertise with advanced 
            automation to ensure high-quality results.
          </p>
          <p className="text-gray-600 mb-8">
            We work with technologies across the AI spectrum, providing specialized data services for 
            computer vision, natural language processing, predictive analytics, and more.
          </p>
          <a 
            href="#early-access" 
            className={cn(
              "inline-flex items-center justify-center gap-2",
              "bg-anostrack-500 hover:bg-anostrack-600 text-white",
              "px-6 py-3 rounded-md font-medium transition-all duration-300"
            )}
          >
            Get Started
          </a>
        </div>
        
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className={cn(
                  "animate-on-scroll flex flex-col items-center justify-center text-center",
                  "p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md",
                  "transition-all duration-300 transform hover:translate-y-[-2px]"
                )}
                style={{ transitionDelay: `${tech.delay}ms` }}
              >
                <div className={cn(
                  "w-12 h-12 rounded-full mb-3 flex items-center justify-center",
                  tech.color
                )}>
                  {tech.icon}
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Technology;
