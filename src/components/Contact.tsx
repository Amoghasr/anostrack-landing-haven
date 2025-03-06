
import React, { useState } from 'react';
import Section from './Section';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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
      icon: <Phone size={20} />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      delay: 100
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      content: "San Francisco, CA, USA",
      delay: 200
    }
  ];

  return (
    <Section id="contact" className="bg-gray-50">
      <div className="text-center mb-12">
        <span className="text-anostrack-600 font-medium text-sm uppercase tracking-wider animate-on-scroll">Get In Touch</span>
        <h2 className="section-heading animate-on-scroll mt-2">Contact Us</h2>
        <p className="section-subheading animate-on-scroll">
          Reach out to learn more about how Anostrack AI can support your AI development
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          {contactInfo.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "animate-on-scroll flex gap-4 p-4 bg-white rounded-lg",
                "shadow-sm border border-gray-100"
              )}
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-anostrack-100 flex items-center justify-center text-anostrack-600">
                {item.icon}
              </div>
              <div>
                <h3 className="font-medium mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="animate-on-scroll md:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-medium mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="How can we help you?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full min-h-[150px]"
                placeholder="Your message here..."
              />
            </div>
            
            <Button 
              type="submit" 
              className="bg-anostrack-500 hover:bg-anostrack-600 text-white"
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
