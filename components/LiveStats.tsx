'use client';

import { useEffect, useState } from 'react';
import { Users, ShoppingBag, Clock, TrendingUp } from 'lucide-react';

export default function LiveStats() {
  const [bakersCount, setBakersCount] = useState(523);
  const [ordersToday, setOrdersToday] = useState(1789);
  const [hoursThisWeek, setHoursThisWeek] = useState(387);

  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      // Random small increments
      if (Math.random() > 0.5) setBakersCount(prev => prev + 1);
      setOrdersToday(prev => prev + Math.floor(Math.random() * 3));
      setHoursThisWeek(prev => prev + Math.floor(Math.random() * 5));
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: bakersCount,
      label: "boulangers utilisent le système",
      color: "from-blue-400 to-blue-600",
      pulse: true
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      value: ordersToday.toLocaleString(),
      label: "commandes automatisées aujourd'hui",
      color: "from-green-400 to-green-600",
      pulse: false
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: hoursThisWeek,
      label: "heures économisées cette semaine",
      color: "from-purple-400 to-purple-600",
      pulse: false
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 shadow-2xl border border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <h3 className="text-xl font-bold text-white">
          Données en temps réel
        </h3>
      </div>

      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10 hover:border-white/30 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <div className={`text-3xl font-black text-white ${stat.pulse ? 'animate-pulse' : ''}`}>
                    {stat.value}
                  </div>
                  {stat.pulse && (
                    <div className="flex items-center gap-1 text-green-400 text-sm">
                      <TrendingUp className="w-4 h-4 animate-bounce" />
                      <span className="font-semibold">LIVE</span>
                    </div>
                  )}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-white/10 text-center">
        <p className="text-gray-400 text-sm">
          Mis à jour automatiquement toutes les 5 secondes
        </p>
      </div>
    </div>
  );
}
