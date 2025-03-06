
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'fade-in-right' | 'fade-in-left' | 'scale-in' | 'blur-in';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  as = 'p',
  children,
  className,
  delay = 0,
  animation = 'fade-in'
}) => {
  const Component = as;
  
  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'fade-in-right':
        return 'animate-fade-in-right';
      case 'fade-in-left':
        return 'animate-fade-in-left';
      case 'scale-in':
        return 'animate-scale-in';
      case 'blur-in':
        return 'animate-blur-in';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <Component
      className={cn(
        'opacity-0',
        getAnimationClass(),
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </Component>
  );
};

export default AnimatedText;
