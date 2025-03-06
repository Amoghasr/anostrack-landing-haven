
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-anostrack-950 text-white py-12 border-t border-anostrack-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-semibold font-display">
                Anostrack<span className="text-anostrack-400">AI</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering AI development with high-quality data annotation and synthetic data generation services.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Process', 'Benefits', 'Technology'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-anostrack-400 transition-colors duration-300 subtle-underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'FAQ', 'Contact', 'Early Access'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-anostrack-400 transition-colors duration-300 subtle-underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-anostrack-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Anostrack AI. All rights reserved.
          </div>
          
          <button 
            onClick={scrollToTop}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full",
              "bg-anostrack-800 hover:bg-anostrack-700 text-white",
              "transition-all duration-300 hover:scale-110"
            )}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
