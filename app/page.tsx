'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Check, Clock, Users, Star, Shield, Sparkles, Phone, Calculator, Calendar, ChevronDown, TrendingUp, Zap, Target, Award, MessageSquare, Heart, AlertCircle } from 'lucide-react';
import DemoModal from '@/components/DemoModal';
import { useInView, useCounter, useParallax, useMagneticEffect } from '@/hooks/useAdvancedAnimations';

// Animation component
function FadeIn({ children, delay = 0, direction = 'up' }: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}) {
  const { ref, isInView } = useInView(0.1);

  const directions = {
    up: 'translate-y-16',
    down: '-translate-y-16',
    left: 'translate-x-16',
    right: '-translate-x-16'
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

// Magnetic button with premium feel
function MagneticButton({ children, onClick, variant = 'primary', className = '' }: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}) {
  const { ref, position } = useMagneticEffect(0.2);

  const variants = {
    primary: 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white shadow-2xl hover:shadow-purple-500/50',
    secondary: 'bg-white text-gray-900 border-2 border-gray-300 hover:border-purple-500'
  };

  return (
    <div ref={ref} className="inline-block">
      <button
        onClick={onClick}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        className={`group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 ${variants[variant]} ${className}`}
      >
        {children}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

// Animated counter
function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const { ref, count } = useCounter(target);
  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('fr-FR')}{suffix}
    </span>
  );
}

// 3D card with tilt effect
function Card3D({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    setTilt({ x: x * 10, y: y * -10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.3s ease-out'
      }}
      className={className}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const parallaxOffset = useParallax();

  const testimonials = [
    {
      quote: "Mes matinées sont enfin sereines. Je me concentre sur mon pain, mes clients commandent en toute simplicité. C'est magique.",
      author: "Marie Dubois",
      role: "La Mie Dorée - Lyon",
      metric: "3h15 économisées/jour",
      image: "👩‍🍳"
    },
    {
      quote: "Installation en 24h. Le lendemain, premières commandes automatiques. Mes clients adorent la simplicité.",
      author: "Thomas Martin",
      role: "Aux Délices - Bordeaux",
      metric: "+30% de commandes",
      image: "👨‍🍳"
    },
    {
      quote: "Zéro erreur depuis 8 mois. Tout est automatisé, clair, parfait. Je me demande comment j'ai pu vivre sans.",
      author: "Sophie Laurent",
      role: "Le Four à Bois - Marseille",
      metric: "0 erreur en 8 mois",
      image: "👩‍🍳"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-2xl border-b border-slate-200/60 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl blur opacity-40" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🥖</span>
                </div>
              </div>
              <div>
                <div className="font-bold text-slate-900 text-xl">Baguette & Bureau</div>
                <div className="text-xs text-slate-600 font-medium">Automatisation B2B pour boulangers</div>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105"
            >
              Essayer gratuitement
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
          >
            <div className="absolute top-20 -left-20 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-violet-100 border border-violet-200 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <Sparkles className="w-4 h-4" />
                547 boulangers ont transformé leur quotidien
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-[1.05] tracking-tight">
                Reprenez le contrôle
                <br />
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  de vos matinées
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-2xl md:text-3xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                Automatisez vos commandes B2B et économisez <span className="font-bold text-violet-600">3 heures par jour</span>.
                <br />Plus de messages WhatsApp, plus d'interruptions, plus de stress.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <MagneticButton onClick={() => setIsModalOpen(true)}>
                  Commencer gratuitement
                </MagneticButton>
                <button className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-700 rounded-2xl font-semibold hover:border-violet-500 hover:text-violet-600 transition-all group flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Voir une démo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-medium">14 jours gratuits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Sans carte bancaire</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Installation en 24h</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-5" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, value: <><AnimatedCounter target={3} />h</>, label: 'économisées par jour', color: 'from-emerald-400 to-green-500' },
              { icon: Users, value: <AnimatedCounter target={547} />, label: 'boulangers conquis', color: 'from-blue-400 to-cyan-500' },
              { icon: TrendingUp, value: <>+<AnimatedCounter target={25} />%</>, label: 'de CA B2B moyen', color: 'from-violet-400 to-purple-500' },
              { icon: Shield, value: '0', label: 'erreur de commande', color: 'from-amber-400 to-orange-500' },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 100}>
                <Card3D>
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                  </div>
                </Card3D>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Le cauchemar quotidien
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Vous le vivez tous les jours. Et ça vous coûte bien plus que vous ne le pensez.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MessageSquare,
                emoji: '😫',
                title: '50+ interruptions par jour',
                desc: 'Chaque vibration vous arrache à votre travail. Impossible de vous concentrer.',
                impact: 'Productivité divisée par 2',
                color: 'from-red-500 to-rose-600'
              },
              {
                icon: Clock,
                emoji: '⏱️',
                title: '3 heures perdues quotidiennement',
                desc: 'À gérer manuellement ce qui devrait être automatisé. 780 heures par an.',
                impact: '32 400€ perdus / an',
                color: 'from-orange-500 to-amber-600'
              },
              {
                icon: Heart,
                emoji: '💔',
                title: 'Stress et épuisement',
                desc: 'Vous êtes constamment sur le qui-vive. Votre santé mentale en prend un coup.',
                impact: 'Invaluable',
                color: 'from-violet-500 to-purple-600'
              }
            ].map((problem, i) => (
              <FadeIn key={i} delay={i * 100}>
                <Card3D>
                  <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-violet-300 transition-all h-full group hover:shadow-xl">
                    <div className={`w-14 h-14 bg-gradient-to-br ${problem.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <problem.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-5xl mb-4">{problem.emoji}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{problem.desc}</p>
                    <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-xl font-bold text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {problem.impact}
                    </div>
                  </div>
                </Card3D>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="mt-16 bg-gradient-to-br from-red-600 via-rose-600 to-pink-600 rounded-3xl p-12 text-white text-center shadow-2xl">
              <div className="text-7xl mb-6">😭</div>
              <h3 className="text-4xl font-bold mb-4">
                Et ça, c'est <span className="text-yellow-300">TOUS LES JOURS</span>
              </h3>
              <p className="text-xl text-red-100 mb-8">
                Pendant que vous gérez des messages, vous ne faites pas grandir votre entreprise
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-white text-red-600 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2 group"
              >
                Arrêter ce cycle maintenant
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold text-sm mb-6">
                LA SOLUTION
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                4 étapes vers la sérénité
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Simple, automatique, et opérationnel en 24 heures
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                icon: '📱',
                title: 'Vos clients commandent en ligne',
                desc: 'Catalogue personnalisé accessible 24/7. Ils sélectionnent, valident, reçoivent leur confirmation. 30 secondes chrono.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                step: '02',
                icon: '⚡',
                title: 'Synchronisation automatique',
                desc: 'La commande arrive dans votre système et votre comptabilité instantanément. Zéro saisie manuelle.',
                color: 'from-violet-500 to-purple-500'
              },
              {
                step: '03',
                icon: '🖨️',
                title: 'Impression automatique',
                desc: 'À l\'heure que vous définissez, tous les bons de préparation s\'impriment. Clairs, organisés, parfaits.',
                color: 'from-emerald-500 to-green-500'
              },
              {
                step: '04',
                icon: '😊',
                title: 'Vous produisez sereinement',
                desc: 'Le matin, vous arrivez. Tout est prêt. Vous vous concentrez sur ce que vous aimez : faire du bon pain.',
                color: 'from-amber-500 to-orange-500'
              }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 150} direction={i % 2 === 0 ? 'left' : 'right'}>
                <Card3D>
                  <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-violet-300 transition-all shadow-lg hover:shadow-2xl h-full">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-4xl shadow-xl flex-shrink-0`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-violet-600 font-bold text-sm mb-2">ÉTAPE {step.step}</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex justify-center gap-1 mb-6">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-10 h-10 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Ils ont franchi le pas
              </h2>
              <p className="text-xl text-slate-600">
                <AnimatedCounter target={547} /> boulangers ont transformé leur quotidien
              </p>
            </div>
          </FadeIn>

          <div className="relative h-96 mb-12">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ${
                  idx === currentTestimonial
                    ? 'opacity-100 translate-x-0 scale-100'
                    : idx < currentTestimonial
                      ? 'opacity-0 -translate-x-full scale-95'
                      : 'opacity-0 translate-x-full scale-95'
                }`}
              >
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-12 border-2 border-violet-200 shadow-xl">
                  <div className="flex justify-center gap-1 mb-6">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-7xl text-center mb-6">{testimonial.image}</div>
                  <p className="text-2xl md:text-3xl font-medium text-slate-900 mb-8 text-center leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-center mb-6">
                    <div className="font-bold text-xl text-slate-900">{testimonial.author}</div>
                    <div className="text-slate-600">{testimonial.role}</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 text-green-700 px-6 py-3 rounded-xl font-bold">
                      <Check className="w-5 h-5" />
                      {testimonial.metric}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`transition-all rounded-full ${
                  idx === currentTestimonial
                    ? 'bg-violet-600 w-12 h-3'
                    : 'bg-slate-300 w-3 h-3 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-5" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Un investissement rentable<br />dès le 5ᵉ jour
              </h2>
              <p className="text-2xl text-violet-200">
                3h économisées × 25€/h = <span className="font-bold text-yellow-300">75€/jour de valeur créée</span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white px-10 py-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium opacity-90 mb-1">Prix tout compris</div>
                    <div className="text-6xl font-bold">199€<span className="text-2xl">/mois</span></div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90 mb-1">Soit seulement</div>
                    <div className="text-3xl font-bold">6,60€/jour</div>
                    <div className="text-sm opacity-75">Moins qu'un café</div>
                  </div>
                </div>
              </div>

              <div className="p-10">
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    'Commandes illimitées',
                    'Clients B2B illimités',
                    'Synchronisation comptable',
                    'Impression automatique',
                    'Support prioritaire 7j/7',
                    'Installation en 24h',
                    'Formation complète',
                    'Mises à jour gratuites à vie'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <MagneticButton onClick={() => setIsModalOpen(true)} className="w-full justify-center mb-6">
                  Démarrer l'essai gratuit de 14 jours
                </MagneticButton>

                <div className="text-center space-y-2 text-sm text-slate-600">
                  <div className="font-medium">✓ 14 jours gratuits • Sans carte bancaire • Sans engagement</div>
                  <div className="flex items-center justify-center gap-2 text-green-600 font-bold">
                    <Shield className="w-5 h-5" />
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
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-16 text-center">
              Questions fréquentes
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                q: "Comment se passe l'installation ?",
                r: "Un appel de 30 minutes avec notre équipe. Vous nous donnez votre liste de produits et prix. On s'occupe de TOUT : installation, paramétrage, connexion à votre comptabilité. 24h plus tard, c'est prêt."
              },
              {
                q: "Mes clients vont-ils vraiment l'utiliser ?",
                r: "92% des clients l'adoptent dès la première semaine. C'est plus simple pour eux aussi : commander en 30 secondes vs attendre votre réponse. On fournit un guide pour les accompagner."
              },
              {
                q: "Compatible avec mon logiciel comptable ?",
                r: "Oui : Sage, Ciel, EBP, Quadratus, Excel. Si vous utilisez un autre logiciel, contactez-nous, on trouve une solution."
              },
              {
                q: "Je peux arrêter quand je veux ?",
                r: "Oui. Pas de contrat long terme. Vous payez au mois. Un email suffit pour arrêter. (Mais vous ne voudrez pas !)"
              },
              {
                q: "Y a-t-il des frais cachés ?",
                r: "Non. 199€/mois, tout inclus. Pas de frais de transaction, d'installation, de support. Tout est transparent."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 50}>
                <details className="bg-white rounded-2xl border-2 border-slate-200 hover:border-violet-300 transition-all group">
                  <summary className="px-8 py-6 cursor-pointer font-bold text-lg text-slate-900 flex items-center justify-between">
                    {item.q}
                    <ChevronDown className="w-6 h-6 text-slate-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-8 pb-6 text-slate-600 leading-relaxed text-lg">
                    {item.r}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Demain matin à 6h,
              <br />
              <span className="text-yellow-300">votre téléphone ne sonnera pas</span>
            </h2>
            <p className="text-2xl text-violet-100 mb-12 leading-relaxed">
              Vous commencerez votre journée sereinement.
              <br />
              Toutes vos commandes seront déjà imprimées.
              <br />
              Vous vous concentrerez sur ce que vous aimez.
            </p>

            <MagneticButton onClick={() => setIsModalOpen(true)} variant="secondary" className="text-xl px-12 py-6 !bg-white !text-violet-600 hover:!text-violet-700">
              Commencer gratuitement maintenant
            </MagneticButton>

            <div className="mt-8 text-violet-200 text-lg">
              Rejoignez les 547 boulangers qui ont déjà franchi le pas
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center">
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
