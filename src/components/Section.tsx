
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  withAnimation?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className, 
  children, 
  fullWidth = false,
  withAnimation = true
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!withAnimation) return;
    
    const section = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (section) {
      const animatedElements = section.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (section) {
        const animatedElements = section.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.unobserve(el));
      }
    };
  }, [withAnimation]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        'py-16 md:py-24 scroll-mt-20',
        className
      )}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="container mx-auto px-4 md:px-6">
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
