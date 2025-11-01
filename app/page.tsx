'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Check, Clock, Users, Sparkles, MessageSquare, TrendingUp, Shield, Star, ChevronDown, Play } from 'lucide-react';
import DemoModal from '@/components/DemoModal';
import { useInView } from '@/hooks/useAdvancedAnimations';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isInView } = useInView(0.1);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('6:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-xl">🥖</span>
              </div>
              <div>
                <div className="font-bold text-slate-900 text-lg">Baguette & Bureau</div>
                <div className="text-xs text-slate-600">L'avenir de la boulangerie</div>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:scale-105"
            >
              Démarrer gratuitement
            </button>
          </div>
        </div>
      </nav>

      {/* Hero avec storytelling */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Gradient subtil en arrière-plan */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-amber-50/30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Colonne gauche : Message principal */}
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  547 boulangers ont déjà transformé leur quotidien
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]">
                  Imaginez une matinée<br />
                  <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                    sans interruptions
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={200}>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Plus de téléphone qui vibre toutes les 5 minutes. Plus de messages WhatsApp à gérer.
                  Vos commandes B2B arrivent automatiquement pendant que vous façonnez vos pains.
                </p>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl font-semibold hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Essayer 14 jours gratuits
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    Voir la démo
                  </button>
                </div>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="flex items-center gap-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    Sans carte bancaire
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    Installation en 24h
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Colonne droite : Visualisation du problème */}
            <FadeIn delay={200}>
              <div className="relative">
                {/* Fausse interface de téléphone avec messages */}
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="text-white font-medium text-sm">{currentTime}</div>
                  </div>

                  <div className="p-6 space-y-4 h-96 overflow-y-auto">
                    {[
                      { time: '6:02', name: 'Hôtel du Parc', msg: 'Bonjour ! Pour demain : 20 baguettes, 15 croissants...', color: 'from-blue-500 to-blue-600' },
                      { time: '6:15', name: 'Restaurant La Table', msg: 'Comme d\'habitude + 5 baguettes svp', color: 'from-purple-500 to-purple-600' },
                      { time: '6:23', name: 'Café du Coin', msg: 'Dispo pour 30 croissants demain ?', color: 'from-green-500 to-green-600' },
                      { time: '6:45', name: 'Brasserie Maritime', msg: 'C\'était quoi déjà ma commande ? 🤔', color: 'from-orange-500 to-orange-600' },
                      { time: '7:12', name: 'Hôtel Belle Vue', msg: 'URGENT besoin de 40 viennoiseries !!!', color: 'from-red-500 to-red-600' },
                    ].map((msg, i) => (
                      <div
                        key={i}
                        className="animate-slideIn"
                        style={{ animationDelay: `${i * 0.5}s` }}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 bg-gradient-to-br ${msg.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                            {msg.name[0]}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold text-slate-900 text-sm">{msg.name}</span>
                              <span className="text-xs text-slate-500">{msg.time}</span>
                            </div>
                            <div className="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-3">
                              <p className="text-slate-700 text-sm">{msg.msg}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badge de stress */}
                <div className="absolute -bottom-4 -right-4 bg-red-500 text-white px-6 py-3 rounded-2xl shadow-xl font-bold flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  50+ par jour
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '3h', label: 'économisées / jour', icon: Clock },
              { value: '547', label: 'boulangers conquis', icon: Users },
              { value: '+25%', label: 'de CA B2B moyen', icon: TrendingUp },
              { value: '0', label: 'erreur de commande', icon: Shield },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Le vrai coût */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Le vrai coût de WhatsApp
              </h2>
              <p className="text-xl text-slate-600">
                C'est bien plus que du temps perdu
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '⏱️',
                title: '3 heures par jour',
                desc: 'À gérer des commandes manuellement au lieu de produire',
                cost: '780h / an'
              },
              {
                icon: '😰',
                title: 'Stress permanent',
                desc: 'Chaque vibration est une interruption, impossible de se concentrer',
                cost: 'Invaluable'
              },
              {
                icon: '💸',
                title: 'Clients perdus',
                desc: 'Message vu trop tard, client commandé ailleurs, opportunité manquée',
                cost: '-25% CA B2B'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-amber-400 transition-all hover:shadow-xl group">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-4">{item.desc}</p>
                  <div className="text-red-600 font-bold text-lg">{item.cost}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Simple comme bonjour
              </h2>
              <p className="text-xl text-slate-300">
                4 étapes pour transformer votre quotidien
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                step: '01',
                title: 'Vos clients commandent en ligne',
                desc: 'Catalogue personnalisé accessible 24/7. Ils commandent en 30 secondes.',
                icon: '📱'
              },
              {
                step: '02',
                title: 'Synchronisation automatique',
                desc: 'La commande arrive dans votre système et votre comptabilité instantanément.',
                icon: '⚡'
              },
              {
                step: '03',
                title: 'Impression automatique',
                desc: 'Les bons de préparation s\'impriment à l\'heure que vous choisissez.',
                icon: '🖨️'
              },
              {
                step: '04',
                title: 'Vous produisez sereinement',
                desc: 'Le matin, tout est prêt. Vous vous concentrez sur votre métier.',
                icon: '🎯'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="flex gap-6">
                  <div className="text-6xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="text-amber-400 font-bold mb-2">ÉTAPE {item.step}</div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-300 text-lg">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex justify-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Ils ont franchi le pas
              </h2>
              <p className="text-xl text-slate-600">Note moyenne : 4.9/5 sur 547 avis</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Marie Dubois',
                role: 'La Mie Dorée, Lyon',
                text: 'Je ne reviendrai jamais en arrière. Mes matinées sont sereines, mes clients ravis.',
                metric: '3h15 économisées/jour'
              },
              {
                name: 'Thomas Martin',
                role: 'Aux Délices, Bordeaux',
                text: 'Installation en 24h. Le lendemain j\'avais déjà mes premières commandes auto.',
                metric: '+30% de commandes'
              },
              {
                name: 'Sophie Laurent',
                role: 'Le Four à Bois, Marseille',
                text: 'Fini les erreurs, fini le stress. Tout est automatisé et parfait.',
                metric: '0 erreur en 8 mois'
              }
            ].map((testimonial, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:shadow-xl transition-all">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(j => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="text-green-600 font-bold text-sm">✓ {testimonial.metric}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Un investissement qui se rembourse en 5 jours
              </h2>
              <p className="text-xl text-slate-600">
                3h économisées × 25€/h = 75€/jour de valeur créée
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium opacity-90">Offre de lancement</div>
                    <div className="text-4xl font-bold">199€/mois</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90">Soit</div>
                    <div className="text-2xl font-bold">6,60€/jour</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    'Commandes illimitées',
                    'Clients B2B illimités',
                    'Synchronisation comptable',
                    'Impression automatique',
                    'Support 7j/7',
                    'Installation en 24h',
                    'Formation complète',
                    'Mises à jour gratuites'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-5 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2 group mb-6"
                >
                  Démarrer l'essai gratuit de 14 jours
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="text-center space-y-2 text-sm text-slate-600">
                  <div>✓ Sans carte bancaire • Sans engagement</div>
                  <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
                    <Shield className="w-4 h-4" />
                    Garantie satisfait ou remboursé 30 jours
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
              Questions fréquentes
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                q: "Comment se passe l'installation ?",
                r: "Un appel de 30 minutes, on configure tout pour vous en 24h. Vous n'avez rien à faire techniquement."
              },
              {
                q: "Mes clients vont-ils vraiment l'utiliser ?",
                r: "92% des clients l'adoptent en 1 semaine. C'est plus simple pour eux aussi : commander en 30 secondes vs attendre votre réponse."
              },
              {
                q: "C'est compatible avec mon logiciel comptable ?",
                r: "Oui : Sage, Ciel, EBP, Quadratus, Excel. Si vous avez un autre logiciel, on trouve une solution."
              },
              {
                q: "Je peux arrêter quand je veux ?",
                r: "Oui. Pas d'engagement. Un email suffit. (Mais vous ne voudrez pas arrêter 😊)"
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 50}>
                <details className="bg-white rounded-xl border-2 border-slate-200 hover:border-amber-400 transition-all group">
                  <summary className="px-6 py-5 cursor-pointer font-semibold text-slate-900 flex items-center justify-between">
                    {item.q}
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {item.r}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Demain matin à 6h,<br />
              votre téléphone ne sonnera pas
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Vous commencerez votre journée sereinement. Rejoignez 547 boulangers qui ont déjà franchi le pas.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-12 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-bold text-xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2 group"
            >
              Commencer gratuitement
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-8 text-slate-400 text-sm">
              14 jours gratuits • Sans CB • Installation en 24h
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-xl">🥖</span>
              </div>
              <div className="font-bold text-white">Baguette & Bureau</div>
            </div>

            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">À propos</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">CGU</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            </div>

            <div className="text-sm">© 2024 Baguette & Bureau</div>
          </div>
        </div>
      </footer>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
