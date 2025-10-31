'use client';

import { useEffect, useState, useRef } from 'react';
import { Clock } from 'lucide-react';

interface LiveCounterProps {
  targetMinutes: number;
  label?: string;
  onComplete?: () => void;
}

export default function LiveCounter({ targetMinutes, label = "Temps perdu", onComplete }: LiveCounterProps) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasCompleted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCompleted.current) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || hasCompleted.current) return;

    const totalSeconds = targetMinutes * 60;
    const duration = 3000; // 3 seconds to count up
    const intervalTime = duration / totalSeconds;

    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev >= 59) {
          setMinutes(m => {
            const newMinutes = m + 1;
            if (newMinutes >= targetMinutes) {
              clearInterval(interval);
              hasCompleted.current = true;
              if (onComplete) onComplete();
            }
            return newMinutes;
          });
          return 0;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isVisible, targetMinutes, onComplete]);

  const progress = ((minutes * 60 + seconds) / (targetMinutes * 60)) * 100;

  return (
    <div ref={containerRef} className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>

      <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-3xl p-8 shadow-2xl overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            animation: 'moveBackground 20s linear infinite'
          }}></div>
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
              <Clock className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>

          {/* Counter display */}
          <div className="text-center mb-4">
            <div className="text-7xl md:text-8xl font-black text-white drop-shadow-2xl mb-2 tabular-nums">
              {String(minutes).padStart(2, '0')}
              <span className="animate-pulse">:</span>
              {String(seconds).padStart(2, '0')}
            </div>
            <div className="text-2xl font-bold text-red-100">{label}</div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_1.5s_infinite]"></div>
            </div>
          </div>

          {/* Target indicator */}
          {minutes >= targetMinutes && (
            <div className="mt-4 text-center animate-[slideUp_0.5s_ease-out]">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-6 py-3 rounded-full text-white font-bold border-2 border-white/40">
                <span className="text-2xl">✓</span>
                <span>Et c'est juste le début...</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes moveBackground {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
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
