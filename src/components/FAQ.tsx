
import React, { useState } from 'react';
import Section from './Section';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, delay }) => {
  return (
    <div 
      className={cn(
        "animate-on-scroll border-b border-anostrack-700 last:border-0 overflow-hidden",
        isOpen ? "pb-4" : ""
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button 
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span className="ml-4 flex-shrink-0 text-anostrack-400">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div 
        className={cn(
          "transition-all duration-300 ease-in-out overflow-hidden text-gray-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="pb-4">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  
  const faqs = [
    {
      question: "What kinds of data can Anostrack AI annotate?",
      answer: "Anostrack AI specializes in annotating a wide range of data types, including images, videos, text, audio, and more. Our team has expertise in various annotation tasks such as object detection, segmentation, classification, entity recognition, sentiment analysis, and transcription."
    },
    {
      question: "How does synthetic data generation work?",
      answer: "Synthetic data generation involves creating artificial data that mimics the statistical properties and patterns of real-world data. At Anostrack AI, we use advanced generative models to produce high-quality synthetic data that can be used to augment training datasets, address privacy concerns, or simulate rare scenarios that are difficult to capture in real-world data collection."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, autonomous vehicles, retail, finance, manufacturing, agriculture, and more. Our data annotation and synthetic data generation services are tailored to meet the specific requirements and challenges of each industry."
    },
    {
      question: "How do you ensure data quality and accuracy?",
      answer: "We implement a rigorous quality assurance process that includes multiple levels of review, consensus-based annotation for complex tasks, regular performance evaluations, and continuous feedback loops. Our annotation platform also incorporates automated quality checks and validation mechanisms to ensure consistency and accuracy."
    },
    {
      question: "How quickly can you deliver annotated data?",
      answer: "Delivery timelines depend on the size, complexity, and specific requirements of your project. We offer flexible scaling options to accommodate urgent needs and can provide estimates based on your project scope. Our platform is designed for efficiency without compromising quality, allowing us to deliver results faster than traditional methods."
    },
    {
      question: "Do you offer custom annotation services?",
      answer: "Yes, we specialize in custom annotation services tailored to your specific requirements. Our team works closely with you to understand your needs and develop annotation schemas and workflows that align with your project goals. We can accommodate specialized annotation tasks, complex labeling requirements, and domain-specific knowledge."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndices(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <Section id="faq" className="bg-anostrack-900">
      <div className="text-center mb-12">
        <span className="text-anostrack-300 font-medium text-sm uppercase tracking-wider animate-on-scroll">FAQ</span>
        <h2 className="section-heading animate-on-scroll mt-2 text-white">Frequently Asked Questions</h2>
        <p className="section-subheading animate-on-scroll text-gray-300">
          Find answers to common questions about our data annotation and synthetic data services
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-anostrack-800 rounded-xl shadow-lg border border-anostrack-700 overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndices.includes(index)}
              onClick={() => toggleFAQ(index)}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="text-center mt-10 animate-on-scroll">
          <p className="text-gray-300 mb-6">
            Still have questions? Contact our team for personalized assistance.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-anostrack-700 hover:bg-anostrack-600 text-anostrack-200 px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
