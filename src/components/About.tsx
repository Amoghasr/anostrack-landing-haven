
import React from 'react';
import Section from './Section';
import { Award, Users, Globe, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const About: React.FC = () => {
  const values = [
    {
      icon: <Award size={24} />,
      title: "Excellence",
      description: "We're committed to delivering the highest quality data services that exceed expectations.",
      delay: 0
    },
    {
      icon: <Users size={24} />,
      title: "Collaboration",
      description: "We work closely with our clients, forming partnerships that drive mutual success.",
      delay: 100
    },
    {
      icon: <Globe size={24} />,
      title: "Innovation",
      description: "We continuously explore new technologies and methodologies to improve our services.",
      delay: 200
    },
    {
      icon: <Heart size={24} />,
      title: "Integrity",
      description: "We operate with transparency, honesty, and a strong ethical foundation.",
      delay: 300
    }
  ];

  return (
    <Section id="about" className="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="animate-on-scroll order-2 lg:order-1">
          <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-to-tr from-anostrack-600/90 to-anostrack-400/80 mix-blend-multiply" />
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
              alt="AI Technology" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-sm font-medium mb-2">Powering The Future</div>
              <div className="text-2xl font-semibold">The Anostrack AI Team</div>
            </div>
          </div>
        </div>
        
        <div className="animate-on-scroll order-1 lg:order-2">
          <span className="text-anostrack-600 font-medium text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-6">
            Empowering AI Development Through Quality Data
          </h2>
          
          <p className="text-gray-600 mb-6">
            Anostrack AI was founded by a team of data scientists and AI engineers who recognized the critical 
            importance of high-quality data in developing effective AI models. Our mission is to provide premium 
            data annotation and synthetic data generation services that help organizations overcome the challenges 
            of AI development.
          </p>
          
          <p className="text-gray-600 mb-8">
            With a team of experienced data specialists and cutting-edge technology, we deliver solutions 
            that accelerate AI development, improve model accuracy, and drive innovation across industries.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="flex gap-3 items-start"
                style={{ transitionDelay: `${value.delay}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-anostrack-100 flex items-center justify-center text-anostrack-600 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
