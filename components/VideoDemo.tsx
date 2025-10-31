'use client';

import { Play, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
          🎥 VOIR EN ACTION
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Découvrez comment Baguette & Bureau <span className="text-orange-600">transforme votre quotidien</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          En seulement 2 minutes, comprenez comment automatiser 100% de vos commandes B2B et récupérer 3 heures par jour.
        </p>

        <div className="space-y-4 mb-8">
          {[
            "Comment vos clients commandent en 30 secondes",
            "Synchronisation automatique avec votre comptabilité",
            "Impression automatique des bons de préparation",
            "Tableau de bord en temps réel de toutes vos commandes"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
          <p className="text-sm text-orange-900">
            <span className="font-bold">⚡ Installation express :</span> Opérationnel en moins de 24h. Notre équipe s'occupe de tout.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden relative group">
          {!isPlaying ? (
            <>
              {/* Thumbnail avec bouton play */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-600/20 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300"
                >
                  <Play className="w-12 h-12 text-orange-600 ml-2" fill="currentColor" />
                </button>
              </div>

              {/* Mockup d'interface */}
              <div className="absolute inset-0 p-8 opacity-50">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-3">
                  <div className="h-4 bg-white/30 rounded w-3/4"></div>
                  <div className="h-4 bg-white/30 rounded w-1/2"></div>
                  <div className="h-20 bg-white/20 rounded"></div>
                  <div className="flex gap-2">
                    <div className="h-10 bg-white/30 rounded flex-1"></div>
                    <div className="h-10 bg-orange-500/50 rounded flex-1"></div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-md rounded-lg p-3 text-white text-sm">
                  <div className="font-bold mb-1">Démo complète : Comment automatiser vos commandes B2B</div>
                  <div className="text-white/70">2:15 min • Français</div>
                </div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="text-white text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                </div>
                <p className="text-sm">Chargement de la vidéo...</p>
                <p className="text-xs text-gray-400 mt-2">
                  (Dans la version finale, votre vraie vidéo de démo sera ici)
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Stats en overlay */}
        <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border-2 border-orange-200">
          <div className="text-sm text-gray-600 mb-1">Déjà visionné par</div>
          <div className="text-2xl font-bold text-orange-600">2,547</div>
          <div className="text-xs text-gray-500">boulangers</div>
        </div>
      </div>
    </div>
  );
}
