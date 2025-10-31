'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Check, X, Zap, Clock, Heart, TrendingUp, Shield, Users, Star, Phone, Calculator, Calendar, ChevronDown, AlertCircle, DollarSign, Target, Award, BarChart3, MessageSquare, CheckCircle2 } from 'lucide-react';
import DemoModal from '@/components/DemoModal';
import { useInView, useScrollProgress, useCounter, useParallax } from '@/hooks/useAdvancedAnimations';

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

// Compteur animé
function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const { ref, count } = useCounter(target);
  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('fr-FR')}{suffix}
    </span>
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

// Sticky CTA
function StickyCTA({ onClick }: { onClick: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-40 transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <div className="font-semibold text-gray-900">Prêt à reprendre le contrôle ?</div>
            <div className="text-sm text-gray-600">14 jours gratuits, sans carte bancaire</div>
          </div>
          <button
            onClick={onClick}
            className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2 shadow-lg"
          >
            Commencer gratuitement
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const parallaxOffset = useParallax();

  const testimonials = [
    {
      quote: "J'étais sceptique au début. Maintenant, je ne peux plus imaginer revenir en arrière. Mes matinées sont sereines, mes clients sont ravis, et j'ai enfin du temps pour développer de nouvelles recettes.",
      author: "Marie Dubois",
      role: "Propriétaire, La Mie Dorée - Lyon",
      metric: "3h15 économisées par jour",
      detail: "Avant, je passais mes matinées le téléphone à la main. Maintenant, je me concentre sur mon pain. Le chiffre d'affaires B2B a augmenté de 42% en 6 mois."
    },
    {
      quote: "L'installation a pris 24h. Le lendemain matin, je recevais déjà mes premières commandes automatiques. C'est magique. Mes clients B2B commandent maintenant 30% plus souvent.",
      author: "Thomas Martin",
      role: "Gérant, Aux Délices du Pain - Bordeaux",
      metric: "+30% de commandes B2B",
      detail: "Mes clients adorent la simplicité. Ils me disent qu'ils commandent plus souvent parce que c'est devenu tellement facile. Certains ont même doublé leurs commandes."
    },
    {
      quote: "Fini le stress des erreurs de commandes. Fini les malentendus par message. Tout est clair, précis, automatisé. Je me concentre enfin sur ce que j'aime : faire du bon pain.",
      author: "Sophie Laurent",
      role: "Artisan Boulanger, Le Four à Bois - Marseille",
      metric: "0 erreur depuis 8 mois",
      detail: "Plus d'erreurs de commande, plus de confusion. Les clients reçoivent un bon de commande clair, je reçois les bons de préparation parfaits. C'est la tranquillité d'esprit."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <StickyCTA onClick={() => setIsModalOpen(true)} />

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

      {/* Hero - Accroche émotionnelle avec parallax */}
      <section className="pt-32 pb-20 section-padding overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-5"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        >
          <div className="absolute top-20 left-10 text-9xl">🥖</div>
          <div className="absolute top-40 right-20 text-9xl">📱</div>
          <div className="absolute bottom-20 left-1/4 text-9xl">⏰</div>
        </div>

        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 tracking-tight leading-none">
                Il est 6h du matin.<br />
                <span className="text-gray-400">Votre téléphone sonne déjà.</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                Chaque jour, vous perdez <span className="font-bold text-gray-900">3 heures</span> à gérer des commandes WhatsApp.<br />
                <span className="font-semibold text-gray-900">Et si tout ça pouvait être automatisé ?</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-10 py-4 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2 shadow-xl"
                >
                  Reprendre le contrôle
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-gray-500 mt-8">
                Rejoignez <AnimatedCounter target={547} /> boulangers qui ont automatisé leurs commandes B2B
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats impactantes */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <FadeIn delay={0}>
              <div>
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  <AnimatedCounter target={3} />h
                </div>
                <div className="text-gray-400 text-lg">économisées par jour</div>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div>
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  <AnimatedCounter target={50} />
                </div>
                <div className="text-gray-400 text-lg">interruptions évitées</div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div>
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  <AnimatedCounter target={780} />h
                </div>
                <div className="text-gray-400 text-lg">récupérées par an</div>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div>
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  +<AnimatedCounter target={25} />%
                </div>
                <div className="text-gray-400 text-lg">de commandes B2B</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Le problème - Storytelling immersif */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Reconnaissez-vous cette journée ?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Une journée typique dans la vie d'un boulanger en 2024.
              <br />Spoiler : elle ne devrait pas ressembler à ça.
            </p>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn delay={100}>
              <div className="bg-red-50 rounded-3xl p-8 md:p-12 border-2 border-red-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-semibold text-gray-900">6h00 - La première interruption</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Vous êtes en plein pétrissage, vos mains dans la pâte. Votre téléphone vibre. C'est l'Hôtel Le Gourmet qui passe sa commande par WhatsApp : "Bonjour, pour demain : 20 baguettes, 15 croissants, 10 pains au chocolat, ah et 5 pains de campagne aussi. Vous avez bien reçu ?"
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Vous devez vous laver les mains, attraper votre téléphone, noter la commande sur un bout de papier, confirmer, puis la saisir dans votre logiciel de comptabilité. Ensuite vous devez créer le bon de commande, l'envoyer au client, l'imprimer pour la cuisine.
                    </p>
                    <div className="bg-red-600 text-white px-4 py-2 rounded-xl inline-block font-semibold">
                      ⏱️ Temps perdu : 8 minutes. Et ce n'est que la première.
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-red-50 rounded-3xl p-8 md:p-12 border-2 border-red-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">7h30 - Le déluge</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Les messages s'enchaînent. Restaurant La Table : "Bonjour, comme d'habitude + 5 baguettes en plus". Café du Coin : "Salut ! Dispo pour 30 croissants demain ?". Brasserie du Port : "Coucou, tu peux me rappeler ce que j'avais pris la dernière fois ?"
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Chaque message nécessite une réponse, une vérification, une saisie. Votre production prend du retard. Votre équipe attend les instructions. Le stress monte.
                    </p>
                    <div className="bg-red-600 text-white px-4 py-2 rounded-xl inline-block font-semibold">
                      📱 15 messages en 30 minutes. Votre concentration est brisée.
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-red-50 rounded-3xl p-8 md:p-12 border-2 border-red-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">9h00 - L'erreur qui coûte cher</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Le téléphone sonne. C'est le restaurant La Belle Époque : "On avait commandé 40 croissants, vous en avez livré seulement 30". Vous regardez les messages : effectivement, vous avez mal noté. Ou peut-être que le client s'est trompé en tapant son message. Impossible de savoir.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Vous devez refaire 10 croissants en urgence. Le client est mécontent. Vous perdez de l'argent. Et surtout, vous perdez la confiance.
                    </p>
                    <div className="bg-red-600 text-white px-4 py-2 rounded-xl inline-block font-semibold">
                      💸 40€ de perte + 1 client mécontent
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="bg-red-50 rounded-3xl p-8 md:p-12 border-2 border-red-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center">
                    <X className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Le pire ? Ce n'est pas exceptionnel.</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      C'est <span className="font-bold text-red-600">tous les jours</span>. Tous les matins. Toute l'année.
                      <span className="font-bold"> 50 interruptions par jour.</span> 3 heures perdues par jour. 15 heures par semaine.
                      <span className="font-bold text-red-600"> 780 heures par an.</span>
                    </p>
                    <div className="bg-red-600 text-white rounded-2xl p-6">
                      <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-4xl font-bold mb-1"><AnimatedCounter target={780} />h</div>
                          <div className="text-red-100">perdues par an</div>
                        </div>
                        <div>
                          <div className="text-4xl font-bold mb-1"><AnimatedCounter target={97} /></div>
                          <div className="text-red-100">jours de travail</div>
                        </div>
                        <div>
                          <div className="text-4xl font-bold mb-1"><AnimatedCounter target={32400} prefix="€" /></div>
                          <div className="text-red-100">de temps perdu (à 25€/h)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* L'impact caché - Agitation */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Mais il y a pire que le temps perdu
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16">
              Les coûts cachés que vous ne voyez pas... mais qui vous coûtent cher.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Le stress permanent",
                description: "Chaque vibration de téléphone est une interruption. Chaque message est une tâche à gérer. Vous ne pouvez jamais vous concentrer vraiment. Le stress s'accumule, jour après jour.",
                impact: "Votre santé mentale"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Les clients que vous perdez",
                description: "Un client vous envoie un message à 22h. Vous le voyez le lendemain à 7h. Trop tard, il a commandé ailleurs. Combien de ventes manquées parce que vous n'êtes pas disponible 24/7 ?",
                impact: "Votre chiffre d'affaires"
              },
              {
                icon: <AlertCircle className="w-8 h-8" />,
                title: "Les erreurs coûteuses",
                description: "Un message mal lu. Une quantité mal notée. Une commande oubliée. Chaque erreur coûte de l'argent, du temps, et surtout : la confiance de vos clients.",
                impact: "Votre réputation"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Les opportunités manquées",
                description: "Pendant que vous gérez des messages WhatsApp, vous ne développez pas de nouvelles recettes. Vous ne prospectez pas de nouveaux clients. Vous ne faites pas grandir votre entreprise.",
                impact: "Votre croissance"
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
                  <div className="text-red-400 font-semibold">
                    Impact : {item.impact}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* La question qui change tout */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Et si vous pouviez<br />
              récupérer ces 3 heures<br />
              <span className="text-gray-400">dès demain matin ?</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Imaginez une matinée où votre téléphone ne sonne pas.<br />
              Où toutes vos commandes B2B arrivent automatiquement.<br />
              Où vous pouvez vous concentrer sur ce que vous aimez : <span className="font-bold text-gray-900">faire du bon pain.</span>
            </p>
            <div className="bg-green-50 rounded-3xl p-12 border-2 border-green-200">
              <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                C'est exactement ce que fait Baguette & Bureau.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Et dans les 5 prochaines minutes, vous allez comprendre exactement comment ça marche,<br />pourquoi ça va transformer votre quotidien, et comment vous pouvez l'essayer gratuitement dès aujourd'hui.
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <ChevronDown className="w-6 h-6 animate-bounce" />
                <span>Continuez à lire</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* La solution - Comment ça marche */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Voici exactement comment ça marche
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simple. Automatique. Élégant. Zéro manipulation de votre part.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-16">
            {[
              {
                step: '1',
                title: 'Vos clients commandent quand ils veulent',
                description: 'Vous donnez à vos clients B2B un accès à votre catalogue en ligne personnalisé. Ils y voient vos produits, vos prix, vos disponibilités. Ils sélectionnent ce qu\'ils veulent, choisissent l\'heure de livraison, et valident.',
                details: [
                  'Accessible 24h/24, 7j/7 - même quand vous dormez',
                  'Interface simple et rapide (30 secondes pour commander)',
                  'Historique des commandes pour renouveler en 1 clic',
                  'Notifications instantanées pour le client'
                ],
                icon: '📱',
                benefit: 'Disponible 24/7',
                color: 'blue'
              },
              {
                step: '2',
                title: 'Tout se synchronise automatiquement',
                description: 'Dès que le client valide, la magie opère. La commande arrive dans votre système. Elle se synchronise avec votre logiciel de comptabilité. Le bon de commande est envoyé au client par email. Tout ça en 2 secondes.',
                details: [
                  'Synchronisation avec votre logiciel comptable (Sage, Ciel, etc.)',
                  'Génération automatique du bon de commande',
                  'Envoi email au client avec récapitulatif',
                  'Mise à jour de vos stocks en temps réel'
                ],
                icon: '⚡',
                benefit: 'Zéro saisie manuelle',
                color: 'purple'
              },
              {
                step: '3',
                title: 'Votre cuisine reçoit les bons de préparation',
                description: 'À l\'heure que vous définissez (par exemple 20h la veille), tous les bons de préparation s\'impriment automatiquement sur votre imprimante. Votre équipe sait exactement quoi préparer, pour qui, et pour quelle heure.',
                details: [
                  'Impression automatique à l\'heure de votre choix',
                  'Bons de préparation clairs et organisés',
                  'Regroupement par heure de livraison',
                  'Tickets de cuisine professionnels'
                ],
                icon: '🖨️',
                benefit: 'Impression automatique',
                color: 'green'
              },
              {
                step: '4',
                title: 'Vous produisez en toute sérénité',
                description: 'Le lendemain matin, vous arrivez. Les bons sont imprimés. Vous savez exactement quoi produire. Pas de téléphone. Pas d\'interruption. Pas de stress. Vous vous concentrez sur votre métier : faire du bon pain.',
                details: [
                  'Planning de production optimisé',
                  'Zéro interruption pendant votre travail',
                  'Clients satisfaits (ils ont leurs confirmations)',
                  'Vous pouvez enfin travailler sereinement'
                ],
                icon: '😊',
                benefit: 'Zéro interruption',
                color: 'orange'
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 100} direction={idx % 2 === 0 ? 'left' : 'right'}>
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border-2 border-gray-200 hover:border-gray-300 transition-all">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 bg-${item.color}-600 text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg`}>
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl">{item.icon}</span>
                        <h3 className="text-3xl font-semibold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`inline-flex items-center gap-2 bg-${item.color}-50 text-${item.color}-700 px-4 py-2 rounded-full font-medium`}>
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

      {/* Avant / Après comparatif immersif */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
              Votre quotidien avant / après
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              La différence est radicale. Et vous la ressentez dès le premier jour.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Avant */}
            <FadeIn delay={100}>
              <div className="bg-red-50 rounded-3xl p-8 border-2 border-red-200">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-4">
                    <X className="w-5 h-5" />
                    AVANT
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Le chaos quotidien</h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "🔴 6h du matin : première interruption",
                    "🔴 50+ notifications WhatsApp par jour",
                    "🔴 8 minutes par commande à tout gérer manuellement",
                    "🔴 3 heures perdues chaque jour",
                    "🔴 Erreurs de saisie fréquentes",
                    "🔴 Clients mécontents à cause des erreurs",
                    "🔴 Stress permanent, téléphone toujours à la main",
                    "🔴 Impossible de se concentrer sur la production",
                    "🔴 Commandes manquées (message vu trop tard)",
                    "🔴 Paperasse à gérer manuellement",
                    "🔴 Pas de visibilité sur les commandes du lendemain",
                    "🔴 Fatigue, épuisement, envie d'arrêter le B2B"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-lg">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Après */}
            <FadeIn delay={200}>
              <div className="bg-green-50 rounded-3xl p-8 border-2 border-green-200">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-4">
                    <Check className="w-5 h-5" />
                    APRÈS
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">La sérénité retrouvée</h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "✅ 6h du matin : vous travaillez tranquille",
                    "✅ 0 notification pendant vos heures de production",
                    "✅ 0 seconde à gérer les commandes",
                    "✅ 3 heures récupérées pour votre métier",
                    "✅ 0 erreur (tout est automatisé)",
                    "✅ Clients ravis de la simplicité",
                    "✅ Sérénité totale, téléphone rangé",
                    "✅ Concentration maximale sur votre pain",
                    "✅ +25% de commandes (disponible 24/7)",
                    "✅ Zéro paperasse (tout est automatique)",
                    "✅ Planning du lendemain imprimé la veille",
                    "✅ Plaisir retrouvé, B2B devenu rentable"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-lg font-medium">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Calculateur ROI interactif */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Calculons votre retour sur investissement
              </h2>
              <p className="text-xl text-gray-400">
                Spoiler : l'investissement se rembourse en moins d'une semaine.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-white text-gray-900 rounded-3xl p-12">
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="text-sm text-gray-600 mb-2">Temps économisé par jour</div>
                    <div className="text-4xl font-bold text-gray-900 mb-1">
                      <AnimatedCounter target={3} /> heures
                    </div>
                    <div className="text-sm text-gray-600">× 25€/heure = 75€ par jour</div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="text-sm text-gray-600 mb-2">Valeur par mois</div>
                    <div className="text-4xl font-bold text-green-600 mb-1">
                      <AnimatedCounter target={2250} prefix="€" />
                    </div>
                    <div className="text-sm text-gray-600">de temps récupéré</div>
                  </div>
                </div>

                <div className="border-t-2 border-gray-200 pt-8">
                  <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Coût de Baguette & Bureau</div>
                        <div className="text-3xl font-bold text-gray-900">199€/mois</div>
                      </div>
                      <div className="text-6xl">📊</div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Valeur du temps économisé</span>
                        <span className="font-bold text-gray-900">+2,250€</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Augmentation CA B2B (+25%)</span>
                        <span className="font-bold text-gray-900">+800€</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Économie sur erreurs évitées</span>
                        <span className="font-bold text-gray-900">+150€</span>
                      </div>
                      <div className="border-t-2 border-gray-300 pt-4 flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Bénéfice net par mois</span>
                        <span className="text-3xl font-bold text-green-600">+3,001€</span>
                      </div>
                    </div>

                    <div className="bg-green-600 text-white rounded-xl p-6 text-center">
                      <div className="text-lg mb-2">Retour sur investissement</div>
                      <div className="text-5xl font-bold mb-2">
                        <AnimatedCounter target={1508} />%
                      </div>
                      <div className="text-green-100">L'investissement se rembourse en 5 jours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Social proof - Témoignages détaillés */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex justify-center gap-1 mb-6">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-10 h-10 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Ils l'ont fait. Voici ce qui a changé.
              </h2>
              <p className="text-xl text-gray-600">
                <AnimatedCounter target={547} /> boulangers ont franchi le pas. Voici leurs résultats.
              </p>
            </div>
          </FadeIn>

          <div className="relative min-h-[500px] mb-12">
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
                <div className="bg-gray-50 rounded-3xl p-12 border-2 border-gray-200">
                  <div className="flex justify-center gap-1 mb-6">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed text-gray-900 text-center">
                    "{testimonial.quote}"
                  </p>

                  <div className="mb-6 text-center">
                    <div className="font-bold text-xl text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>

                  <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full font-bold">
                      <TrendingUp className="w-5 h-5" />
                      {testimonial.metric}
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 text-center italic border-t-2 border-gray-200 pt-6">
                    {testimonial.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`transition-all ${
                  idx === currentTestimonial
                    ? 'bg-gray-900 w-12 h-3'
                    : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                } rounded-full`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Logos clients - Social proof */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-gray-600 mb-8">Ils nous font confiance dans toute la France</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-40">
                {[
                  "🥖 La Mie Dorée",
                  "🥐 Aux Délices",
                  "🍞 Le Four à Bois",
                  "🥖 Pain d'Antan",
                  "🥐 La Boulange",
                  "🍞 Le Pétrin d'Or",
                  "🥖 Chez Marcel",
                  "🥐 Au Bon Pain"
                ].map((logo, i) => (
                  <div key={i} className="text-2xl font-bold text-gray-400 text-center">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gestion des objections */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
              "Oui mais..."
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              Réponses aux questions que vous vous posez (et c'est normal)
            </p>
          </FadeIn>

          <div className="space-y-6">
            {[
              {
                objection: "\"Mes clients sont habitués à WhatsApp, ils ne vont jamais changer...\"",
                response: "C'est exactement ce que pensait Marie de La Mie Dorée. Résultat ? 92% de ses clients B2B utilisent maintenant le système. Pourquoi ? Parce que c'est PLUS SIMPLE pour eux aussi. Ils n'attendent plus votre réponse. Ils commandent en 30 secondes, reçoivent une confirmation immédiate, et peuvent même renouveler leur dernière commande en 1 clic. Vos clients vont adorer.",
                icon: <Users className="w-6 h-6" />
              },
              {
                objection: "\"Je ne suis pas à l'aise avec la technologie...\"",
                response: "Vous n'avez pas besoin de l'être. On s'occupe de TOUT : installation complète en 24h, formation de votre équipe, paramétrage de vos produits et prix, connexion à votre comptabilité. De votre côté ? Zéro manipulation. Les commandes arrivent, les bons s'impriment. C'est tout. Si nos clients de 60+ ans y arrivent, vous y arriverez aussi.",
                icon: <Shield className="w-6 h-6" />
              },
              {
                objection: "\"Et si j'ai un problème technique ?\"",
                response: "Support prioritaire 7j/7 par téléphone, email et WhatsApp (ironique, non ?). Temps de réponse moyen : 12 minutes. Et en 18 mois d'existence, nous n'avons eu aucune panne majeure. Le système tourne sur des serveurs ultra-sécurisés utilisés par les banques. C'est plus fiable que votre téléphone.",
                icon: <Phone className="w-6 h-6" />
              },
              {
                objection: "\"199€ par mois, c'est cher pour moi...\"",
                response: "Comparons : 199€ par mois, c'est 6,60€ par jour. Une seule erreur de commande vous coûte plus cher. 8 minutes économisées par commande × 15 commandes par jour = 2h économisées. À 25€/h, c'est 50€ par jour de valeur. Donc pour 6,60€, vous recevez 50€ de valeur. Sans compter l'augmentation de 25% de vos commandes B2B. Le vrai coût ? Ne PAS utiliser Baguette & Bureau.",
                icon: <Calculator className="w-6 h-6" />
              },
              {
                objection: "\"Je n'ai pas le temps de mettre ça en place maintenant...\"",
                response: "L'installation prend 24h. De notre côté. Vous, vous passez 30 minutes au téléphone avec nous pour nous donner vos produits et prix. C'est tout. Et ces 30 minutes vous font économiser 3 heures par jour pour les 20 prochaines années. Vous n'avez pas le temps de NE PAS le faire.",
                icon: <Clock className="w-6 h-6" />
              },
              {
                objection: "\"Je veux d'abord voir comment ça marche en vrai...\"",
                response: "C'est pour ça qu'on offre 14 jours d'essai gratuit. Sans carte bancaire. Sans engagement. On installe tout, vous testez avec vos vrais clients, et vous décidez. Si ça ne vous convient pas ? Un email suffit pour tout annuler. Mais spoiler : 94% de ceux qui testent continuent ensuite.",
                icon: <Target className="w-6 h-6" />
              },
              {
                objection: "\"Et si mes clients commandent trop tard pour le lendemain ?\"",
                response: "Vous définissez votre heure limite (par exemple 20h la veille). Après cette heure, le système propose automatiquement le lendemain ou surlendemain. Plus de commandes de dernière minute qui vous mettent la pression. Vous reprenez le contrôle de votre planning.",
                icon: <Calendar className="w-6 h-6" />
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <div className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex-1">
                      {item.objection}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed pl-16">
                    {item.response}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties empilées */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
              Vous ne prenez aucun risque
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16">
              On assume tout le risque. Vous avez tout à gagner.
            </p>
          </FadeIn>

          <div className="space-y-6">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Garantie satisfait ou remboursé 30 jours",
                description: "Si dans les 30 premiers jours vous n'êtes pas 100% satisfait, un email suffit. Remboursement intégral. Sans question. Sans justification."
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "14 jours d'essai gratuit",
                description: "Testez avec vos vrais clients. Sans carte bancaire. Sans engagement. Vous ne payez que si vous êtes convaincu."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Installation et formation incluses",
                description: "On installe tout en 24h. On forme votre équipe. On paramètre vos produits. Vous n'avez rien à faire."
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Support prioritaire 7j/7",
                description: "Un problème ? Un doute ? On répond en moins de 12 minutes. Par téléphone, email, ou même WhatsApp."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Mises à jour gratuites à vie",
                description: "Nouvelles fonctionnalités, améliorations, optimisations : tout est gratuit. Vous payez une fois, vous en profitez toujours."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Garantie de résultats",
                description: "Si vous n'économisez pas au moins 2 heures par jour dans les 30 premiers jours, on vous rembourse ET on vous paie 500€."
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <div className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10 flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing avec justification */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Un investissement qui se rembourse seul
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                3 heures économisées par jour = <span className="font-bold text-gray-900">32,400€</span> par an (à 25€/h)<br />
                Notre solution coûte <span className="font-bold text-gray-900">2,388€</span> par an.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-gray-50 rounded-3xl p-12 text-center max-w-2xl mx-auto border-2 border-gray-200">
              <div className="mb-8">
                <div className="text-7xl md:text-8xl font-bold text-gray-900 mb-2">199€</div>
                <div className="text-xl text-gray-600">par mois · tout inclus</div>
                <div className="text-sm text-gray-500 mt-2">Soit 6,60€ par jour · moins qu'un café</div>
              </div>

              <div className="bg-white rounded-2xl p-8 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Ce qui est inclus :</h3>
                <ul className="space-y-4 text-left">
                  {[
                    { text: 'Commandes illimitées', detail: 'Pas de limite de volume' },
                    { text: 'Clients B2B illimités', detail: 'Ajoutez autant de clients que vous voulez' },
                    { text: 'Synchronisation comptable', detail: 'Compatible Sage, Ciel, EBP, etc.' },
                    { text: 'Impression automatique', detail: 'Bons de préparation imprimés automatiquement' },
                    { text: 'Support prioritaire 7j/7', detail: 'Réponse en moins de 12 minutes' },
                    { text: 'Installation en 24h', detail: 'On s\'occupe de tout' },
                    { text: 'Formation complète', detail: 'De vous et votre équipe' },
                    { text: 'Mises à jour gratuites', detail: 'À vie, pour toujours' }
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-gray-900 font-medium">{feature.text}</div>
                        <div className="text-sm text-gray-600">{feature.detail}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full px-10 py-6 bg-gray-900 text-white rounded-full text-xl font-bold hover:bg-gray-800 transition-all hover:scale-105 shadow-2xl mb-6 flex items-center justify-center gap-3"
              >
                Commencer l'essai gratuit de 14 jours
                <ArrowRight className="w-6 h-6" />
              </button>

              <p className="text-sm text-gray-600 mb-6">
                14 jours d'essai gratuit · Sans carte bancaire · Sans engagement<br />
                Annulez quand vous voulez d'un simple email
              </p>

              <div className="pt-8 border-t-2 border-gray-200">
                <div className="flex items-center justify-center gap-2 text-green-700 font-bold text-lg">
                  <Shield className="w-6 h-6" />
                  <span>Garantie satisfait ou remboursé 30 jours</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Urgence - Pourquoi maintenant */}
      <section className="section-padding bg-red-50">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Pourquoi vous devez commencer maintenant
              </h2>
              <p className="text-xl text-gray-600">
                Chaque jour qui passe est un jour de perdu.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-white rounded-3xl p-12 border-2 border-red-200">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center text-3xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Aujourd'hui, vous allez perdre 3 heures</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      3 heures à gérer des messages WhatsApp. 3 heures que vous pourriez passer à faire du bon pain, à développer votre entreprise, ou simplement à souffler. Chaque jour qui passe, c'est 75€ de temps perdu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center text-3xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Ce mois-ci, vous allez perdre 2,250€</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      90 heures de travail manuel qui pourraient être automatisées. 90 heures que vous ne récupérerez jamais. Sans compter les erreurs, le stress, les opportunités manquées.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center text-3xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Cette année, 32,400€ vont partir en fumée</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      780 heures perdues. 780 heures de votre vie que vous ne reverrez jamais. Le prix de Baguette & Bureau pour 13 ans. Pensez-y.
                    </p>
                  </div>
                </div>

                <div className="bg-red-600 text-white rounded-2xl p-8 text-center">
                  <p className="text-2xl md:text-3xl font-bold mb-4">
                    Chaque jour qui passe sans Baguette & Bureau,<br />c'est 75€ perdus à jamais.
                  </p>
                  <p className="text-xl text-red-100">
                    Commencez aujourd'hui. Gratuit pendant 14 jours.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ ultra-complète */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              Tout ce que vous devez savoir avant de commencer
            </p>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                q: "Comment se passe l'installation ?",
                r: "Vous prenez rendez-vous avec notre équipe (30 minutes au téléphone). On vous demande votre liste de produits et prix. Ensuite, on s'occupe de TOUT : installation du système, paramétrage, connexion à votre comptabilité, création des accès pour vos clients. 24h plus tard, tout est prêt. Vous n'avez rien à faire techniquement."
              },
              {
                q: "Mes clients vont-ils vraiment utiliser le système ?",
                r: "Oui. 92% des clients B2B utilisent le système dès la première semaine. Pourquoi ? Parce que c'est plus simple pour eux aussi. Commander en 30 secondes au lieu d'attendre votre réponse. On fournit même un guide simple à envoyer à vos clients pour les aider."
              },
              {
                q: "Est-ce compatible avec mon logiciel de comptabilité ?",
                r: "Oui, on est compatible avec les principaux logiciels : Sage, Ciel, EBP, Quadratus, et même Excel si vous préférez. Si vous utilisez un logiciel spécifique, contactez-nous, on trouvera une solution."
              },
              {
                q: "Que se passe-t-il si j'ai un problème technique ?",
                r: "Vous nous appelez, nous envoyez un email, ou même un WhatsApp. Temps de réponse moyen : 12 minutes. Support 7j/7. En 18 mois, nous n'avons eu aucune panne majeure, mais si ça arrive, on est là."
              },
              {
                q: "Puis-je personnaliser les produits et prix ?",
                r: "Oui, totalement. Vous gérez vos produits, vos prix, vos disponibilités. Vous pouvez même avoir des prix différents pour chaque client B2B si vous le souhaitez."
              },
              {
                q: "Comment mes clients reçoivent-ils accès au système ?",
                r: "On vous fournit un lien unique pour votre boulangerie. Vous le partagez à vos clients B2B. Ils créent leur compte en 2 minutes, et c'est parti. Vous validez chaque nouveau client avant qu'il ne puisse commander."
              },
              {
                q: "Puis-je arrêter quand je veux ?",
                r: "Oui. Pas de contrat long terme. Pas d'engagement. Vous payez au mois. Vous voulez arrêter ? Un email suffit. (Mais vous n'allez pas vouloir arrêter.)"
              },
              {
                q: "Y a-t-il des frais cachés ?",
                r: "Non. 199€ par mois, tout inclus. Pas de frais de transaction. Pas de frais par commande. Pas de frais d'installation. Pas de frais de support. Tout est inclus."
              },
              {
                q: "Comment ça se passe pour l'impression des bons ?",
                r: "Le système s'intègre avec votre imprimante existante. À l'heure que vous définissez (ex: 20h), tous les bons du lendemain s'impriment automatiquement. Vous pouvez aussi les imprimer manuellement quand vous voulez."
              },
              {
                q: "Est-ce que ça marche si je ne suis pas à l'aise avec l'informatique ?",
                r: "Oui. C'est fait pour vous. Installation par nos soins. Formation incluse. Support 7j/7. De votre côté, vous n'avez rien à manipuler : les commandes arrivent, les bons s'impriment. C'est tout."
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 30}>
                <details className="bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all group">
                  <summary className="p-6 cursor-pointer font-semibold text-lg text-gray-900 flex items-center justify-between">
                    {item.q}
                    <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {item.r}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Émotionnel et puissant */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Demain matin à 6h,<br />
              <span className="text-gray-400">votre téléphone ne sonnera pas.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Vous commencerez votre journée <span className="font-bold text-white">sereinement</span>.<br />
              Toutes vos commandes seront <span className="font-bold text-white">déjà imprimées</span>.<br />
              Vous vous concentrerez sur <span className="font-bold text-white">ce que vous aimez</span>.<br />
              <span className="text-2xl font-bold text-white mt-4 block">Et tout ça commence maintenant.</span>
            </p>

            <div className="bg-white text-gray-900 rounded-3xl p-12 mb-12">
              <div className="mb-8">
                <div className="text-lg font-semibold mb-4">Voici ce qui va se passer dans les prochaines minutes :</div>
                <div className="space-y-4 text-left max-w-2xl mx-auto">
                  {[
                    { time: 'Dans 2 minutes', action: 'Vous remplissez le formulaire d\'essai gratuit' },
                    { time: 'Dans 1 heure', action: 'Notre équipe vous contacte pour programmer l\'installation' },
                    { time: 'Dans 24 heures', action: 'Tout est installé et prêt. Vous recevez vos premiers accès.' },
                    { time: 'Demain matin', action: 'Vous travaillez en paix. Zéro interruption. Tout est automatisé.' },
                    { time: 'Dans 7 jours', action: 'Vous avez déjà économisé 21 heures. Vous ne reviendrez jamais en arrière.' }
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">{step.time}</div>
                        <div className="text-gray-600">{step.action}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-16 py-6 bg-gray-900 text-white rounded-full text-2xl font-bold hover:bg-gray-800 transition-all hover:scale-105 inline-flex items-center gap-3 shadow-2xl mb-6"
              >
                Commencer mon essai gratuit maintenant
                <ArrowRight className="w-7 h-7" />
              </button>

              <div className="space-y-2 text-sm text-gray-600">
                <div>✅ 14 jours d'essai gratuit</div>
                <div>✅ Sans carte bancaire</div>
                <div>✅ Sans engagement</div>
                <div>✅ Installation en 24h</div>
                <div className="pt-4 border-t border-gray-200 text-green-600 font-bold">
                  ✅ Garantie satisfait ou remboursé 30 jours
                </div>
              </div>
            </div>

            <div className="text-gray-400 text-lg">
              Rejoignez les <span className="font-bold text-white"><AnimatedCounter target={547} /> boulangers</span> qui ont repris le contrôle de leur temps
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="border-t border-gray-700 bg-gray-900 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-xl">🥖</span>
              <span className="font-semibold text-white">Baguette & Bureau</span>
            </div>

            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">À propos</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">CGU</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            </div>

            <div className="text-sm">
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
