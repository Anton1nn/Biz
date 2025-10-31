'use client';

import { ArrowRight, X, Smartphone, Clock, Zap } from 'lucide-react';

export default function BeforeAfter() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* AVANT */}
      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-300 relative overflow-hidden">
        <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
          ❌ AVANT
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-8">
          Votre journée sans Baguette & Bureau
        </h3>

        <div className="space-y-4">
          <div className="bg-white/80 backdrop-blur rounded-lg p-4 border-l-4 border-red-500">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">6h00 - Première interruption</div>
                <div className="text-sm text-gray-600">Restaurant Le Gourmet vous envoie sa commande sur WhatsApp</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-lg p-4 border-l-4 border-red-500">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">6h05 - Saisie manuelle</div>
                <div className="text-sm text-gray-600">Vous arrêtez votre pétrissage pour entrer la commande dans votre logiciel</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-lg p-4 border-l-4 border-red-500">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">6h15 - 2ème interruption</div>
                <div className="text-sm text-gray-600">Hôtel du Parc modifie sa commande par WhatsApp</div>
              </div>
            </div>
          </div>

          <div className="bg-red-600 text-white rounded-lg p-4 text-center">
            <div className="text-sm mb-1">Et ça continue toute la journée...</div>
            <div className="text-3xl font-bold">50 interruptions</div>
            <div className="text-sm text-red-100">= 3h perdues par jour</div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <div className="bg-red-600 text-white rounded-full px-6 py-3 font-bold text-lg">
            😫 Épuisant et inefficace
          </div>
        </div>
      </div>

      {/* APRÈS */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border-2 border-green-300 relative overflow-hidden">
        <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
          ✅ APRÈS
          <ArrowRight className="w-4 h-4" />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-8">
          Votre journée avec Baguette & Bureau
        </h3>

        <div className="space-y-4">
          <div className="bg-white/80 backdrop-blur rounded-lg p-4 border-l-4 border-green-500">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">20h00 - Veille au soir</div>
                <div className="text-sm text-gray-600">Tous vos clients commandent en ligne, à leur rythme</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-lg p-4 border-l-4 border-green-500">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">20h30 - Automatique</div>
                <div className="text-sm text-gray-600">Bons de préparation imprimés automatiquement en cuisine</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-lg p-4 border-l-4 border-green-500">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">6h00 - Vous produisez</div>
                <div className="text-sm text-gray-600">Vous commencez directement la production. Zéro interruption.</div>
              </div>
            </div>
          </div>

          <div className="bg-green-600 text-white rounded-lg p-4 text-center">
            <div className="text-sm mb-1">Résultat de la journée</div>
            <div className="text-3xl font-bold">0 interruption</div>
            <div className="text-sm text-green-100">= 3h économisées par jour</div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <div className="bg-green-600 text-white rounded-full px-6 py-3 font-bold text-lg">
            😊 Serein et productif
          </div>
        </div>
      </div>
    </div>
  );
}
