'use client';

import { useEffect, useState, useRef } from 'react';
import { MessageSquare, Phone, Volume2, VolumeX } from 'lucide-react';

interface Message {
  id: number;
  name: string;
  time: string;
  message: string;
  color: string;
  position: 'left' | 'right';
}

interface PhoneSimulatorProps {
  messages: Message[];
  onComplete?: () => void;
}

export default function PhoneSimulator({ messages, onComplete }: PhoneSimulatorProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [isVibrating, setIsVibrating] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play notification sound
  const playNotificationSound = () => {
    if (soundEnabled && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  // Trigger vibration effect
  const triggerVibration = () => {
    setIsVibrating(true);
    playNotificationSound();

    // Haptic feedback on mobile
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100]);
    }

    setTimeout(() => setIsVibrating(false), 500);
  };

  // Show next message
  useEffect(() => {
    if (currentMessageIndex >= messages.length - 1) return;

    const timer = setTimeout(() => {
      // Show typing indicator
      setIsTyping(true);
      triggerVibration();

      // After typing delay, show message
      setTimeout(() => {
        setIsTyping(false);
        setCurrentMessageIndex(prev => prev + 1);
        setNotificationCount(prev => prev + 1);

        if (currentMessageIndex + 1 === messages.length - 1 && onComplete) {
          onComplete();
        }
      }, 1500); // Typing duration

    }, currentMessageIndex === -1 ? 1000 : 3000); // First message faster

    return () => clearTimeout(timer);
  }, [currentMessageIndex, messages.length, onComplete]);

  const visibleMessages = messages.slice(0, currentMessageIndex + 1);

  return (
    <div className="relative">
      {/* Sound toggle */}
      <button
        onClick={() => setSoundEnabled(!soundEnabled)}
        className="absolute -top-12 right-0 z-20 flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-all"
      >
        {soundEnabled ? (
          <>
            <Volume2 className="w-4 h-4" />
            <span>Son activé</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4" />
            <span>Son désactivé</span>
          </>
        )}
      </button>

      {/* Hidden audio element */}
      <audio ref={audioRef} preload="auto">
        <source src="data:audio/wav;base64,UklGRhwAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=" type="audio/wav" />
      </audio>

      {/* Phone mockup */}
      <div className={`relative bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-4 shadow-2xl transition-transform duration-200 ${
        isVibrating ? 'animate-[shake_0.5s_ease-in-out]' : ''
      }`}>
        {/* Phone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>

        {/* Notification badge */}
        {notificationCount > 0 && (
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-20 animate-bounce">
            {notificationCount}
          </div>
        )}

        {/* Screen */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
          {/* Status bar */}
          <div className="bg-gradient-to-r from-green-400 to-green-600 px-6 py-3 flex items-center justify-between text-white text-xs">
            <span className="font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <MessageSquare className="w-3 h-3" />
              <Phone className="w-3 h-3" />
              <div className="flex gap-0.5">
                <div className="w-1 h-3 bg-white rounded-full"></div>
                <div className="w-1 h-3 bg-white rounded-full"></div>
                <div className="w-1 h-3 bg-white rounded-full"></div>
                <div className="w-1 h-3 bg-white/50 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Chat header */}
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                W
              </div>
              <div>
                <div className="font-bold text-gray-900">WhatsApp Business</div>
                <div className="text-xs text-gray-500">Vos clients B2B</div>
              </div>
            </div>
          </div>

          {/* Messages area */}
          <div className="bg-[#e5ddd5] min-h-[400px] max-h-[400px] overflow-y-auto p-4 space-y-4">
            {visibleMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.position === 'right' ? 'justify-end' : 'justify-start'} animate-[slideUp_0.3s_ease-out]`}
              >
                <div className={`max-w-[75%] ${msg.position === 'left' ? 'bg-white' : 'bg-green-100'} rounded-lg rounded-tl-sm shadow-md p-3`}>
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-6 h-6 bg-gradient-to-br ${msg.color} rounded-full`}></div>
                    <span className="font-bold text-xs text-gray-900">{msg.name}</span>
                  </div>
                  <p className="text-sm text-gray-800">{msg.message}</p>
                  <div className="text-xs text-gray-500 mt-1 text-right">{msg.time}</div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start animate-[slideUp_0.3s_ease-out]">
                <div className="bg-white rounded-lg rounded-tl-sm shadow-md p-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input bar */}
          <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
            <div className="bg-white rounded-full px-4 py-2 text-sm text-gray-400 border border-gray-300">
              Tapez un message...
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px) rotate(-1deg); }
          75% { transform: translateX(5px) rotate(1deg); }
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
