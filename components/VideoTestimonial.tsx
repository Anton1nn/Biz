'use client';

import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface VideoTestimonialProps {
  title?: string;
  description?: string;
  beforeText?: string;
  afterText?: string;
}

export default function VideoTestimonial({
  title = "Comment Marie a repris le contrôle",
  description = "Propriétaire de La Mie Dorée à Lyon",
  beforeText = "Avant : 50 messages par jour",
  afterText = "Après : 0 interruption"
}: VideoTestimonialProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showPreview, setShowPreview] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setShowPreview(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-all duration-500"></div>

      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              M
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
            <div className="text-5xl">🎬</div>
          </div>
        </div>

        {/* Video container */}
        <div className="relative aspect-video bg-black">
          {/* Placeholder/Preview */}
          {showPreview && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
              <div className="text-center">
                <div className="mb-6 animate-pulse">
                  <div className="w-32 h-32 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur">
                    <Play className="w-16 h-16 text-white ml-2" />
                  </div>
                </div>
                <p className="text-white text-xl font-semibold mb-2">Voir le témoignage complet</p>
                <p className="text-gray-400">30 secondes • Transformation réelle</p>
              </div>
            </div>
          )}

          {/* Video element (placeholder - would be real video in production) */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="/api/placeholder/800/450"
            onEnded={() => setIsPlaying(false)}
          >
            {/* In production, add real video source */}
            <source src="/videos/testimonial-marie.mp4" type="video/mp4" />
          </video>

          {/* Video controls */}
          {!showPreview && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur transition-all"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-1" />
                  )}
                </button>

                <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur">
                  <div className="h-full w-1/3 bg-green-500"></div>
                </div>

                <button
                  onClick={toggleMute}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur transition-all"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-white" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-white" />
                  )}
                </button>

                <button
                  onClick={toggleFullscreen}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur transition-all"
                >
                  <Maximize2 className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          )}

          {/* Play button overlay */}
          {showPreview && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 w-full h-full group/play"
            >
              <div className="absolute inset-0 bg-black/20 group-hover/play:bg-black/40 transition-all"></div>
            </button>
          )}
        </div>

        {/* Before/After comparison */}
        <div className="p-6 bg-white">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  ✗
                </div>
                <div className="text-lg font-bold text-gray-900">AVANT</div>
              </div>
              <p className="text-gray-700 font-medium">{beforeText}</p>
              <div className="mt-3 flex items-center gap-2">
                <div className="text-3xl">😰</div>
                <div className="text-sm text-gray-600">Stress, fatigue, erreurs</div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div className="text-lg font-bold text-gray-900">APRÈS</div>
              </div>
              <p className="text-gray-700 font-medium">{afterText}</p>
              <div className="mt-3 flex items-center gap-2">
                <div className="text-3xl">😊</div>
                <div className="text-sm text-gray-600">Sérénité, efficacité, croissance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats footer */}
        <div className="px-6 pb-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-black mb-1">3h15</div>
                <div className="text-sm text-green-100">économisées/jour</div>
              </div>
              <div>
                <div className="text-3xl font-black mb-1">+42%</div>
                <div className="text-sm text-green-100">CA B2B</div>
              </div>
              <div>
                <div className="text-3xl font-black mb-1">0</div>
                <div className="text-sm text-green-100">erreur en 8 mois</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
