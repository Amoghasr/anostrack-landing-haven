
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Technology', href: '#technology' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Find which section is currently visible
      const sectionIds = navigation.map(item => item.href.substring(1));
      
      for (const sectionId of sectionIds.reverse()) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white bg-opacity-80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <span className="text-anostrack-600 font-display font-semibold text-2xl">
            Anostrack<span className="text-anostrack-500">AI</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'nav-item',
                activeSection === item.href.substring(1) && 'active-nav-item'
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Early Access Button (Desktop) */}
        <a
          href="#early-access"
          className="hidden md:block bg-anostrack-500 hover:bg-anostrack-600 text-white px-5 py-2 rounded-md transition-all duration-300 transform hover:scale-105 shadow-sm"
        >
          Early Access
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel absolute top-full left-0 right-0 p-4 shadow-md">
          <nav className="flex flex-col space-y-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'px-4 py-2 text-gray-700 rounded-md',
                  activeSection === item.href.substring(1) && 'bg-anostrack-100 text-anostrack-600'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#early-access"
              className="bg-anostrack-500 hover:bg-anostrack-600 text-white px-4 py-2 rounded-md text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Early Access
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
