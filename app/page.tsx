'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Check, X, Zap, Clock, Heart, TrendingUp, Shield, Users, Star } from 'lucide-react';
import DemoModal from '@/components/DemoModal';
import { useInView, useScrollProgress } from '@/hooks/useAdvancedAnimations';

// Composant d'animation réutilisable
function FadeIn({ children, delay = 0, direction = 'up' }: { 
  children: React.ReactNode; 
  delay?: number; 
  direction?: 'up' | 'down' | 'left' | 'right'
}) {
  const { ref, isInView } = useInView(0.1);
  
  const directions = {
    up: 'translate-y-12',
    down: '-translate-y-12',
    left: 'translate-x-12',
    right: '-translate-x-12'
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        isInView 
          ? 'opacity-100 translate-y-0 translate-x-0' 
          : `opacity-0 ${directions[direction]}`
      }`}
    >
      {children}
    </div>
  );
}

// Progress bar
function ScrollProgress() {
  const progress = useScrollProgress();
  
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
      <div 
        className="h-full bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "J'étais sceptique au début. Maintenant, je ne peux plus imaginer revenir en arrière. Mes matinées sont sereines, mes clients sont ravis, et j'ai enfin du temps pour développer de nouvelles recettes.",
      author: "Marie Dubois",
      role: "Propriétaire, La Mie Dorée - Lyon",
      metric: "3h15 économisées par jour"
    },
    {
      quote: "L'installation a pris 24h. Le lendemain matin, je recevais déjà mes premières commandes automatiques. C'est magique. Mes clients B2B commandent maintenant 30% plus souvent.",
      author: "Thomas Martin",
      role: "Gérant, Aux Délices du Pain - Bordeaux",
      metric: "+30% de commandes B2B"
    },
    {
      quote: "Fini le stress des erreurs de commandes. Fini les malentendus par message. Tout est clair, précis, automatisé. Je me concentre enfin sur ce que j'aime : faire du bon pain.",
      author: "Sophie Laurent",
      role: "Artisan Boulanger, Le Four à Bois - Marseille",
      metric: "0 erreur depuis 8 mois"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />

      {/* Navigation épurée */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 z-40 mt-1">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🥖</span>
              <span className="text-lg font-semibold text-gray-900">Baguette & Bureau</span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105"
            >
              Essayer gratuitement
            </button>
          </div>
        </div>
      </nav>

      {/* Hero - Accroche émotionnelle */}
      <section className="pt-32 pb-20 section-padding overflow-hidden">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 tracking-tight leading-none">
                Il est 6h du matin.<br />
                <span className="text-gray-400">Votre téléphone sonne déjà.</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                Chaque jour, vous perdez 3 heures à gérer des commandes WhatsApp.<br />
                <span className="font-semibold text-gray-900">Et si tout ça pouvait être automatisé ?</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-10 py-4 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2 shadow-lg"
                >
                  Reprendre le contrôle
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-gray-500 mt-8">
                Rejoignez 500+ boulangers qui ont automatisé leurs commandes B2B
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Le problème - Storytelling */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Une journée dans la vie<br />
              <span className="text-gray-400">d'un boulanger en 2024</span>
            </h2>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn delay={100}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center">
                    <Clock className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">6h00 - La première interruption</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                      Vous êtes en plein pétrissage. Votre téléphone vibre. C'est l'Hôtel Le Gourmet qui passe sa commande par WhatsApp.
                      Vous devez arrêter ce que vous faites, noter la commande, confirmer, puis la saisir dans votre logiciel de comptabilité.
                    </p>
                    <p className="text-gray-500 italic">
                      Temps perdu : 8 minutes. Et ce n'est que la première.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Toute la matinée - Le chaos</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                      Les messages s'enchaînent. Restaurant La Table, Café du Coin, Brasserie du Port... Chacun avec ses particularités,
                      ses modifications de dernière minute, ses questions sur la disponibilité.
                    </p>
                    <p className="text-gray-500 italic">
                      50 interruptions plus tard, votre production a pris du retard et vous êtes épuisé.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center">
                    <X className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Le pire ? Ce n'est pas exceptionnel.</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      C'est <span className="font-semibold text-gray-900">tous les jours</span>. Tous les matins. Toute l'année.
                      3 heures perdues par jour. 15 heures par semaine. 780 heures par an.
                    </p>
                    <div className="mt-6 p-6 bg-red-50 rounded-2xl">
                      <p className="text-2xl font-bold text-red-600 mb-2">780 heures par an</p>
                      <p className="text-gray-700">
                        C'est l'équivalent de <span className="font-bold">97 jours de travail</span> perdus à gérer des messages WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* La question qui change tout */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Et si vous pouviez<br />
              récupérer ces 3 heures<br />
              <span className="text-gray-400">dès demain matin ?</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Imaginez une matinée où votre téléphone ne sonne pas.<br />
              Où toutes vos commandes B2B arrivent automatiquement.<br />
              Où vous pouvez vous concentrer sur ce que vous aimez : faire du bon pain.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* La solution - Progressive reveal */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Voici comment ça marche
              </h2>
              <p className="text-xl text-gray-600">
                Simple. Automatique. Élégant.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-16">
            {[
              {
                step: '1',
                title: 'Vos clients commandent quand ils veulent',
                description: 'Ils accèdent à votre catalogue en ligne. Ils sélectionnent leurs produits, choisissent l\'heure de livraison, et valident. En 30 secondes.',
                icon: '📱',
                benefit: 'Disponible 24/7'
              },
              {
                step: '2',
                title: 'Tout se synchronise automatiquement',
                description: 'La commande arrive directement dans votre système. Elle se synchronise avec votre comptabilité. Le bon de commande est envoyé au client par email. Zéro manipulation de votre part.',
                icon: '⚡',
                benefit: 'Zéro saisie manuelle'
              },
              {
                step: '3',
                title: 'Votre cuisine reçoit les bons de préparation',
                description: 'À l\'heure que vous définissez (par exemple 20h la veille), tous les bons de préparation s\'impriment automatiquement. Votre équipe sait exactement quoi préparer.',
                icon: '🖨️',
                benefit: 'Impression automatique'
              },
              {
                step: '4',
                title: 'Vous produisez en toute sérénité',
                description: 'Le lendemain matin, vous commencez votre journée sans interruption. Vous savez exactement quoi produire. Vos clients sont contents. Vous êtes serein.',
                icon: '😊',
                benefit: 'Zéro interruption'
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 100} direction={idx % 2 === 0 ? 'left' : 'right'}>
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-3xl font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl">{item.icon}</span>
                        <h3 className="text-3xl font-semibold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium">
                        <Check className="w-5 h-5" />
                        {item.benefit}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Les bénéfices transformationnels */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Ce qui change concrètement<br />
                <span className="text-gray-400">dans votre quotidien</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: '3 heures par jour',
                description: 'Récupérées pour vous concentrer sur votre production, développer de nouvelles recettes, ou simplement souffler.',
                color: 'blue'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: '+25% de commandes B2B',
                description: 'En moyenne, nos clients voient leurs commandes B2B augmenter de 25% grâce à la simplicité du système.',
                color: 'green'
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Zéro stress',
                description: 'Fini l\'angoisse des messages manqués, des erreurs de saisie, des malentendus. Tout est clair et automatisé.',
                color: 'purple'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Clients ravis',
                description: 'Vos clients B2B adorent la simplicité. Ils commandent plus souvent, plus facilement, et vous recommandent.',
                color: 'orange'
              }
            ].map((benefit, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-${benefit.color}-50 rounded-2xl flex items-center justify-center text-${benefit.color}-600 mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof - Testimonials avec rotation */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center">
            <div className="mb-12">
              <div className="flex justify-center gap-1 mb-8">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <div className="relative min-h-[300px] flex items-center justify-center">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-700 ${
                    idx === currentTestimonial 
                      ? 'opacity-100 translate-x-0' 
                      : idx < currentTestimonial 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <p className="text-3xl md:text-4xl font-medium mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="mb-4">
                    <div className="font-semibold text-xl">{testimonial.author}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-medium">{testimonial.metric}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-12">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentTestimonial ? 'bg-white w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing simple mais justifié */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Un investissement qui se rembourse seul
              </h2>
              <p className="text-xl text-gray-600">
                3 heures économisées par jour = 32,400€ par an (à 25€/h)<br />
                Notre solution coûte 2,388€ par an.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-gray-50 rounded-3xl p-12 text-center max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="text-7xl font-bold text-gray-900 mb-2">199€</div>
                <div className="text-xl text-gray-600">par mois · tout inclus</div>
              </div>

              <ul className="space-y-4 text-left mb-10 max-w-md mx-auto">
                {[
                  'Commandes illimitées',
                  'Clients B2B illimités',
                  'Synchronisation comptable automatique',
                  'Impression automatique des bons',
                  'Support prioritaire 7j/7',
                  'Installation complète en 24h',
                  'Formation de votre équipe incluse',
                  'Mises à jour gratuites à vie'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-gray-900 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full px-10 py-5 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-lg mb-6"
              >
                Commencer l'essai gratuit
              </button>

              <p className="text-sm text-gray-500">
                14 jours d'essai gratuit · Sans carte bancaire · Sans engagement
              </p>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-green-700">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Garantie satisfait ou remboursé 30 jours</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Final - Émotionnel */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Demain matin à 6h,<br />
              <span className="text-gray-400">votre téléphone ne sonnera pas.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Vous commencerez votre journée sereinement.<br />
              Toutes vos commandes seront déjà prêtes.<br />
              Vous vous concentrerez sur ce que vous aimez.<br />
              <span className="font-semibold text-gray-900">Et tout ça commence aujourd'hui.</span>
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-12 py-5 bg-gray-900 text-white rounded-full text-xl font-medium hover:bg-gray-800 transition-all hover:scale-105 inline-flex items-center gap-3 shadow-xl"
            >
              Reprendre le contrôle de mon temps
              <ArrowRight className="w-6 h-6" />
            </button>

            <p className="text-gray-600 mt-8">
              Rejoignez les 500+ boulangers qui dorment mieux depuis qu'ils ont automatisé leurs commandes
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="border-t border-gray-100 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl">🥖</span>
              <span className="font-semibold text-gray-900">Baguette & Bureau</span>
            </div>

            <div className="flex gap-8 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">À propos</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
              <a href="#" className="hover:text-gray-900 transition-colors">CGU</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Confidentialité</a>
            </div>

            <div className="text-sm text-gray-500">
              © 2024 Baguette & Bureau
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
