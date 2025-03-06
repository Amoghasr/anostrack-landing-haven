
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Database, ChevronDown } from 'lucide-react';
import AnimatedText from './AnimatedText';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const particles = particlesRef.current;
    if (!particles) return;
    
    // Create floating particles
    const numParticles = 15;
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      
      // Random size between 3px and 8px
      const size = Math.random() * 5 + 3;
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      // Random opacity
      const opacity = Math.random() * 0.4 + 0.1;
      
      // Random animation duration
      const duration = Math.random() * 15 + 10;
      
      // Apply styles
      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = '50%';
      particle.style.backgroundColor = '#0d8be5';
      particle.style.opacity = opacity.toString();
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.animation = `float ${duration}s infinite ease-in-out`;
      
      particles.appendChild(particle);
    }
    
    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      
      if (particles) {
        particles.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      while (particles && particles.firstChild) {
        particles.removeChild(particles.firstChild);
      }
    };
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-anostrack-950"
    >
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div ref={particlesRef} className="absolute inset-0 transition-transform duration-200 ease-out">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-anostrack-900/80 to-anostrack-700/20 blur-3xl" />
          <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] rounded-full bg-anostrack-600/10 blur-xl animate-float" />
          <div className="absolute bottom-[20%] left-[15%] w-[250px] h-[250px] rounded-full bg-anostrack-500/15 blur-xl animate-pulse-subtle" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-4">
          <AnimatedText 
            as="span"
            className="bg-gradient-to-r from-anostrack-400 to-anostrack-600 px-4 py-1 rounded-full text-white text-sm font-medium"
            animation="scale-in"
          >
            Powering the Next Generation of AI
          </AnimatedText>
        </div>
        
        <AnimatedText 
          as="h1" 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          animation="fade-in"
          delay={200}
        >
          Unlock the Full Potential of Your AI with<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-anostrack-400 to-anostrack-300">
            Quality Data Annotation
          </span>
        </AnimatedText>
        
        <AnimatedText 
          as="p" 
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8"
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
              "inline-flex items-center gap-2 bg-anostrack-500 hover:bg-anostrack-400 text-white",
              "px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105",
              "shadow-md hover:shadow-lg hover:shadow-anostrack-500/30"
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
              "inline-flex items-center gap-2 bg-anostrack-800 hover:bg-anostrack-700 text-gray-200",
              "px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105",
              "border border-anostrack-700 hover:border-anostrack-500 shadow-sm hover:shadow"
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
            className="text-anostrack-400 hover:text-anostrack-300 transition-colors duration-300"
          />
        </AnimatedText>
      </div>
    </div>
  );
};

export default Hero;
