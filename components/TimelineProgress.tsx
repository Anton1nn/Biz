'use client';

import { useEffect, useState, useRef } from 'react';
import { Clock, MessageSquare, Phone, TrendingUp } from 'lucide-react';

interface TimelineStep {
  time: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

interface TimelineProgressProps {
  steps: TimelineStep[];
  onStepReached?: (index: number) => void;
}

export default function TimelineProgress({ steps, onStepReached }: TimelineProgressProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through this section
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight / 2)));

      setProgress(scrollProgress * 100);

      // Determine current step based on scroll
      const stepIndex = Math.min(
        steps.length - 1,
        Math.floor(scrollProgress * steps.length)
      );

      if (stepIndex !== currentStep) {
        setCurrentStep(stepIndex);
        if (onStepReached) {
          onStepReached(stepIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentStep, steps.length, onStepReached]);

  return (
    <div ref={containerRef} className="sticky top-24 z-10 mb-12">
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-gray-200/50">
        {/* Timeline bar */}
        <div className="relative">
          {/* Background bar */}
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            {/* Progress bar */}
            <div
              className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-red-600 transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"></div>
            </div>
          </div>

          {/* Step markers */}
          <div className="relative -mt-1 flex justify-between">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                style={{ width: `${100 / steps.length}%` }}
              >
                {/* Marker dot */}
                <div
                  className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                    index <= currentStep
                      ? `bg-gradient-to-br ${step.color} shadow-lg scale-110`
                      : 'bg-gray-300 scale-90'
                  }`}
                >
                  <div className={`w-4 h-4 text-white transition-all ${index === currentStep ? 'animate-pulse' : ''}`}>
                    {step.icon}
                  </div>

                  {/* Pulse ring for active step */}
                  {index === currentStep && (
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} animate-ping opacity-75`}></div>
                  )}
                </div>

                {/* Time label */}
                <div className={`mt-2 text-center transition-all duration-300 ${
                  index <= currentStep ? 'opacity-100' : 'opacity-40'
                }`}>
                  <div className={`text-sm font-bold ${
                    index === currentStep ? 'text-red-600 scale-110' : 'text-gray-700'
                  } transition-all`}>
                    {step.time}
                  </div>
                  {index === currentStep && (
                    <div className="text-xs text-gray-600 mt-1 animate-[slideUp_0.3s_ease-out] font-medium">
                      {step.title}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current step description */}
        <div className="mt-6 min-h-[60px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === currentStep
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 absolute'
              }`}
            >
              <div className="text-center">
                <p className="text-lg text-gray-700 font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
