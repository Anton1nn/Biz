'use client';

import { useState } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

export default function ROICalculator() {
  const [orders, setOrders] = useState(20);
  const [timePerOrder, setTimePerOrder] = useState(5);

  const calculations = {
    dailyOrders: orders,
    minutesPerOrder: timePerOrder,
    dailyMinutes: orders * timePerOrder,
    dailyHours: (orders * timePerOrder) / 60,
    weeklyHours: ((orders * timePerOrder) / 60) * 6,
    monthlyHours: ((orders * timePerOrder) / 60) * 26,
    yearlyHours: ((orders * timePerOrder) / 60) * 312,
    yearlyDays: (((orders * timePerOrder) / 60) * 312) / 8,
    monthlyCost: Math.round(((orders * timePerOrder) / 60) * 26 * 25),
    yearlyCost: Math.round(((orders * timePerOrder) / 60) * 312 * 25),
    savings: Math.round(((orders * timePerOrder) / 60) * 312 * 25) - (199 * 12)
  };

  return (
    <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-2xl border-2 border-orange-200 p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Calculez vos économies</h3>
          <p className="text-gray-600">Découvrez combien vous perdez actuellement</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre de commandes B2B par jour
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="5"
              max="100"
              value={orders}
              onChange={(e) => setOrders(Number(e.target.value))}
              className="flex-1 h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
            />
            <div className="w-16 text-center">
              <span className="text-2xl font-bold text-orange-600">{orders}</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Temps moyen par commande (minutes)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="2"
              max="15"
              value={timePerOrder}
              onChange={(e) => setTimePerOrder(Number(e.target.value))}
              className="flex-1 h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
            />
            <div className="w-16 text-center">
              <span className="text-2xl font-bold text-orange-600">{timePerOrder}</span>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-orange-200 pt-6 space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <div className="text-sm text-red-700 mb-1">Temps perdu actuellement</div>
            <div className="text-3xl font-bold text-red-600">
              {calculations.dailyHours.toFixed(1)}h <span className="text-lg">par jour</span>
            </div>
            <div className="text-sm text-red-600 mt-1">
              = {calculations.yearlyDays.toFixed(0)} jours de travail perdus par an !
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <div className="text-sm text-orange-700 mb-1">Coût de votre temps perdu</div>
            <div className="text-3xl font-bold text-orange-600">
              {calculations.yearlyCost.toLocaleString()}€ <span className="text-lg">par an</span>
            </div>
            <div className="text-xs text-orange-600 mt-1">
              (basé sur 25€/heure)
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <div className="flex items-center gap-2 text-sm text-green-700 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span>Économies avec Baguette & Bureau</span>
            </div>
            <div className="text-3xl font-bold text-green-600">
              {calculations.savings.toLocaleString()}€ <span className="text-lg">par an</span>
            </div>
            <div className="text-sm text-green-600 mt-1">
              Investissement : 199€/mois = ROI de {Math.round(calculations.savings / (199 * 12) * 100)}%
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-6 rounded-xl text-center">
          <div className="text-lg font-semibold mb-2">
            💰 Vous économisez l'équivalent de
          </div>
          <div className="text-5xl font-bold mb-2">
            {calculations.yearlyDays.toFixed(0)} jours
          </div>
          <div className="text-orange-100">
            de travail par an en automatisant vos commandes B2B
          </div>
        </div>
      </div>
    </div>
  );
}
