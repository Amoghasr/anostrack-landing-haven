
import React, { useState, useRef, useEffect } from 'react';
import Section from './Section';
import { Check, Play, Image, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const codeSnippet = `// Image annotation pipeline
import { annotate } from 'anostrack-sdk';

// Load image for annotation
const image = loadImage('sample.jpg');

// Define annotation types
const annotationConfig = {
  boundingBoxes: true,
  segmentation: true,
  keypoints: true,
  classification: ['car', 'person', 'bicycle'],
};

// Run annotation process
const annotations = await annotate(image, annotationConfig);

// Process the annotations
console.log(\`Found \${annotations.objects.length} objects\`);
annotations.objects.forEach(obj => {
  console.log(\`Class: \${obj.class}, Confidence: \${obj.confidence}\`);
});

// Export annotations in standard format
exportAnnotations(annotations, 'COCO');`;

const imageBeforeUrl = '/placeholder.svg';
const imageAfterUrl = '/placeholder.svg';

const HowItWorks: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isAnnotated, setIsAnnotated] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'results'>('code');
  const codeRef = useRef<HTMLPreElement>(null);

  const handleRunCode = () => {
    setIsRunning(true);
    
    // Simulate annotation process
    setTimeout(() => {
      setIsRunning(false);
      setIsAnnotated(true);
    }, 2000);
  };

  const resetDemo = () => {
    setIsAnnotated(false);
  };

  // Syntax highlighting effect
  useEffect(() => {
    if (codeRef.current) {
      // Apply some basic syntax highlighting with classes
      let code = codeRef.current.innerHTML;
      
      // Highlight keywords
      code = code.replace(/(import|const|await|function|return|if|else|for|while|let|var)\b/g, '<span class="text-purple-400">$1</span>');
      
      // Highlight strings
      code = code.replace(/('.*?'|".*?")/g, '<span class="text-green-400">$1</span>');
      
      // Highlight comments
      code = code.replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>');
      
      // Highlight function calls
      code = code.replace(/(\w+)\(/g, '<span class="text-yellow-400">$1</span>(');
      
      codeRef.current.innerHTML = code;
    }
  }, [activeTab]);

  return (
    <Section id="how-it-works" className="bg-anostrack-950">
      <div className="text-center mb-12">
        <span className="text-anostrack-300 font-medium text-sm uppercase tracking-wider animate-on-scroll">Process</span>
        <h2 className="section-heading animate-on-scroll mt-2 text-white">How It Works</h2>
        <p className="section-subheading animate-on-scroll text-gray-300">
          See our data annotation technology in action with an interactive demo
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="animate-on-scroll">
          <div className="bg-anostrack-900 rounded-xl border border-anostrack-700 overflow-hidden shadow-xl">
            <div className="flex border-b border-anostrack-700">
              <button 
                className={cn(
                  "flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2",
                  activeTab === 'code' 
                    ? "bg-anostrack-800 text-white" 
                    : "bg-transparent text-anostrack-400 hover:text-white hover:bg-anostrack-800/50"
                )}
                onClick={() => setActiveTab('code')}
              >
                <Code size={16} />
                Code
              </button>
              <button 
                className={cn(
                  "flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2",
                  activeTab === 'results' 
                    ? "bg-anostrack-800 text-white" 
                    : "bg-transparent text-anostrack-400 hover:text-white hover:bg-anostrack-800/50"
                )}
                onClick={() => setActiveTab('results')}
              >
                <Image size={16} />
                Results
              </button>
            </div>
            
            <div className="p-5 h-[400px] overflow-auto">
              {activeTab === 'code' ? (
                <pre ref={codeRef} className="text-gray-300 text-sm font-mono">
                  {codeSnippet}
                </pre>
              ) : (
                <div className="text-gray-300 space-y-4">
                  <h3 className="text-lg font-medium">Annotation Results</h3>
                  {isAnnotated ? (
                    <div className="space-y-3">
                      <div className="p-3 bg-anostrack-800 rounded flex items-center gap-3">
                        <Check className="text-green-500" size={18} />
                        <span>Found 4 objects in image</span>
                      </div>
                      
                      <div className="p-4 bg-anostrack-800 rounded">
                        <h4 className="font-medium mb-2">Objects Detected:</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Person</span>
                            <span className="text-anostrack-300">98.2% confidence</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Car</span>
                            <span className="text-anostrack-300">95.7% confidence</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Bicycle</span>
                            <span className="text-anostrack-300">91.3% confidence</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Traffic light</span>
                            <span className="text-anostrack-300">87.8% confidence</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-3 bg-anostrack-800 rounded">
                        <h4 className="font-medium mb-2">Export formats available:</h4>
                        <div className="flex flex-wrap gap-2">
                          {['COCO', 'Pascal VOC', 'YOLO', 'TFRecord'].map(format => (
                            <span key={format} className="px-2 py-1 bg-anostrack-700 text-xs rounded">
                              {format}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-[300px]">
                      <p className="text-anostrack-400">
                        Click "Run Code" to see the annotation results
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-anostrack-700 bg-anostrack-800 flex items-center justify-between">
              <div className="flex space-x-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        onClick={handleRunCode}
                        disabled={isRunning || isAnnotated}
                        className="bg-anostrack-600 hover:bg-anostrack-500"
                      >
                        <Play size={16} className="mr-1" />
                        Run Code
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Run the annotation process</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        onClick={resetDemo}
                        variant="outline"
                        disabled={!isAnnotated}
                        className="text-gray-300 border-anostrack-700 hover:bg-anostrack-700"
                      >
                        Reset
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Reset the demonstration</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              
              {isRunning && (
                <span className="text-anostrack-300 text-sm animate-pulse">
                  Processing...
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="animate-on-scroll">
          <div className="bg-anostrack-900 rounded-xl border border-anostrack-700 overflow-hidden shadow-xl h-full">
            <div className="p-4 border-b border-anostrack-700 flex justify-between items-center">
              <h3 className="font-medium text-white">Image Annotation</h3>
              <span className={cn(
                "px-2 py-1 text-xs rounded-full",
                isAnnotated 
                  ? "bg-green-900/50 text-green-400" 
                  : "bg-amber-900/50 text-amber-400"
              )}>
                {isAnnotated ? "Annotated" : "Original"}
              </span>
            </div>
            
            <div className="relative p-6 flex justify-center items-center bg-anostrack-950/50 min-h-[400px]">
              <div className={cn(
                "transition-all duration-700",
                isAnnotated ? "opacity-0 scale-95 absolute" : "opacity-100 scale-100"
              )}>
                <img 
                  src={imageBeforeUrl} 
                  alt="Original image" 
                  className="max-h-[350px] rounded-lg border border-anostrack-700"
                />
              </div>
              
              <div className={cn(
                "transition-all duration-700",
                isAnnotated ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute"
              )}>
                <div className="relative">
                  <img 
                    src={imageAfterUrl} 
                    alt="Annotated image" 
                    className="max-h-[350px] rounded-lg border border-anostrack-700"
                  />
                  
                  {/* Annotation overlays */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    {/* Person bounding box */}
                    <div className="absolute top-[20%] left-[30%] w-[20%] h-[50%] border-2 border-blue-500 rounded-md">
                      <div className="bg-blue-500 text-white text-xs px-1 py-0.5 absolute -top-6 left-0">
                        Person (98.2%)
                      </div>
                    </div>
                    
                    {/* Car bounding box */}
                    <div className="absolute top-[40%] left-[60%] w-[25%] h-[30%] border-2 border-green-500 rounded-md">
                      <div className="bg-green-500 text-white text-xs px-1 py-0.5 absolute -top-6 left-0">
                        Car (95.7%)
                      </div>
                    </div>
                    
                    {/* Bicycle bounding box */}
                    <div className="absolute top-[60%] left-[15%] w-[15%] h-[25%] border-2 border-yellow-500 rounded-md">
                      <div className="bg-yellow-500 text-white text-xs px-1 py-0.5 absolute -top-6 left-0">
                        Bicycle (91.3%)
                      </div>
                    </div>
                    
                    {/* Traffic light bounding box */}
                    <div className="absolute top-[10%] left-[75%] w-[10%] h-[15%] border-2 border-red-500 rounded-md">
                      <div className="bg-red-500 text-white text-xs px-1 py-0.5 absolute -top-6 left-0">
                        Traffic light (87.8%)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {isRunning && (
                <div className="absolute inset-0 flex items-center justify-center bg-anostrack-950/70">
                  <div className="text-center">
                    <div className="inline-block w-8 h-8 border-4 border-anostrack-400/30 border-t-anostrack-400 rounded-full animate-spin mb-2"></div>
                    <p className="text-anostrack-300">Processing image...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
