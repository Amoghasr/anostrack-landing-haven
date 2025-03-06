
import React from 'react';
import { ArrowRight, Database, ChevronDown } from 'lucide-react';
import AnimatedText from './AnimatedText';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-anostrack-100/40 to-anostrack-300/40 blur-3xl" />
        <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] rounded-full bg-anostrack-200/20 blur-xl animate-float" />
        <div className="absolute bottom-[20%] left-[15%] w-[250px] h-[250px] rounded-full bg-anostrack-100/30 blur-xl animate-pulse-subtle" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-4">
          <AnimatedText 
            as="span"
            className="bg-gradient-to-r from-anostrack-300 to-anostrack-600 px-4 py-1 rounded-full text-white text-sm font-medium"
            animation="scale-in"
          >
            Powering the Next Generation of AI
          </AnimatedText>
        </div>
        
        <AnimatedText 
          as="h1" 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          animation="fade-in"
          delay={200}
        >
          Unlock the Full Potential of Your AI with<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-anostrack-600 to-anostrack-400">
            Quality Data Annotation
          </span>
        </AnimatedText>
        
        <AnimatedText 
          as="p" 
          className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8"
          animation="fade-in"
          delay={400}
        >
          Anostrack AI provides high-quality data annotation services and synthetic data generation
          to help AI developers build more accurate and effective models.
        </AnimatedText>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <AnimatedText 
            as="a" 
            href="#early-access"
            className={cn(
              "inline-flex items-center gap-2 bg-anostrack-500 hover:bg-anostrack-600 text-white",
              "px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105",
              "shadow-md hover:shadow-lg"
            )}
            animation="fade-in"
            delay={600}
          >
            Get Early Access <ArrowRight size={18} />
          </AnimatedText>
          
          <AnimatedText 
            as="a" 
            href="#services"
            className={cn(
              "inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800",
              "px-6 py-3 rounded-md font-medium transition-all duration-300",
              "border border-gray-200 shadow-sm hover:shadow"
            )}
            animation="fade-in"
            delay={700}
          >
            Explore Services <Database size={18} />
          </AnimatedText>
        </div>
        
        <AnimatedText
          animation="fade-in"
          delay={900}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-pulse-subtle"
        >
          <ChevronDown
            size={32}
            onClick={scrollToServices}
            className="text-anostrack-500"
          />
        </AnimatedText>
      </div>
    </div>
  );
};

export default Hero;
