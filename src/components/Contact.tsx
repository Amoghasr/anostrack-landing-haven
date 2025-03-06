
import React, { useState } from 'react';
import Section from './Section';
import { Mail, MapPin, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent', {
        description: 'We\'ll get back to you as soon as possible.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      content: "info@anostrack.ai",
      delay: 0
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      content: "Bangalore, India",
      delay: 100
    }
  ];

  return (
    <Section id="contact" className="bg-anostrack-900 text-white">
      <div className="text-center mb-12">
        <span className="text-anostrack-300 font-medium text-sm uppercase tracking-wider animate-on-scroll">Get In Touch</span>
        <h2 className="section-heading animate-on-scroll mt-2 text-white">Contact Us</h2>
        <p className="section-subheading animate-on-scroll text-gray-300">
          Reach out to learn more about how Anostrack AI can support your AI development
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          {contactInfo.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "animate-on-scroll flex gap-4 p-4 bg-anostrack-800 rounded-lg",
                "shadow-sm border border-anostrack-700 hover:border-anostrack-600 transition-all duration-300"
              )}
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-anostrack-700 flex items-center justify-center text-anostrack-300">
                {item.icon}
              </div>
              <div>
                <h3 className="font-medium mb-1 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="animate-on-scroll md:col-span-2 bg-anostrack-800 rounded-lg shadow-sm border border-anostrack-700 p-6">
          <h3 className="text-xl font-medium mb-4 text-white">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-anostrack-700 border-anostrack-600 text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-anostrack-700 border-anostrack-600 text-white placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-anostrack-700 border-anostrack-600 text-white placeholder-gray-500"
                placeholder="How can we help you?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full min-h-[150px] bg-anostrack-700 border-anostrack-600 text-white placeholder-gray-500"
                placeholder="Your message here..."
              />
            </div>
            
            <Button 
              type="submit" 
              className="bg-anostrack-500 hover:bg-anostrack-400 text-white transition-all duration-300 transform hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} 
              <Send size={16} className="ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
